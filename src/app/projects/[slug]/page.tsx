import { getProject } from '@/src/lib/contentapi'
import { Metadata, ResolvingMetadata } from 'next'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { redirect } from 'next/navigation'
import { NextImage } from '@/src/components/NextImage'

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const { slug } = params

  // fetch data
  const project = await getProject(slug)

  if (!project) {
    return {
      title: `Arthur Dias | Project | Not Found`,
    }
  }

  return {
    title: `Arthur Dias | Project | ${project.projectName}`,
    description:
      'Full Stack Software Engineer - Arthur Dias public cv and portfolio website',
    manifest: '/site.webmanifest',
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: `Arthur Dias | Project | ${project.projectName}}`,
      description: `Arthur Dias - Full Stack Software Engineer | Project | ${project.projectName}`,
      url: `https://arthurdias.dev/project/${project.id}`,
      images: [
        `https:${project.featuredMedia.fields.file?.url!}`,
        ...(await parent).openGraph!.images!,
      ],
    },
  }
}

export default async function Project({ params }: Props) {
  const { slug } = params
  const project = await getProject(slug)

  if (!project) {
    redirect('/404')
  }

  return (
    <main className="flex min-h-screen flex-col gap-4 md:min-h-[85vh]">
      <div className="mt-[40px] flex w-full flex-col items-center md:px-12">
        <h1 className="w-full text-2xl font-bold">
          Project: {project.projectName}
        </h1>
        <h2 className="w-full text-lg font-semibold">
          Category: {project.category}
        </h2>
        <div className="flex w-full flex-row items-center justify-start gap-2 truncate">
          <h3 className="text-lg font-semibold">Link:</h3>
          <a
            className="text-lg text-primary-400 underline"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.projectName}
          </a>
        </div>
      </div>

      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full flex-row">
          <NextImage
            src={`https:${project.featuredMedia.fields.file?.url!}`}
            alt={project.projectName}
            width={800}
            height={600}
            quality={100}
            priority
            className="aspect-video w-full rounded-[20px] object-cover"
          />
        </div>

        <section className="mx-auto flex flex-col items-center text-ellipsis rounded-[20px] bg-neutral-300 p-8 dark:bg-neutral-950">
          {documentToReactComponents(project.projectDescription, {
            renderNode: {
              paragraph: (node, children) => (
                <p className="w-full text-start text-base text-neutral-900 dark:text-neutral-100">
                  {children}
                </p>
              ),
              'heading-1': (node, children) => (
                <h1 className="mt-4 w-full text-start text-3xl text-neutral-900 dark:text-neutral-100">
                  {children}
                </h1>
              ),
              'heading-2': (node, children) => (
                <h2 className="mt-4 w-full text-start text-2xl text-neutral-900 dark:text-neutral-100">
                  {children}
                </h2>
              ),
              'heading-3': (node, children) => (
                <h3 className="mt-4 w-full text-start text-xl text-neutral-900 dark:text-neutral-100">
                  {children}
                </h3>
              ),
              'heading-4': (node, children) => (
                <h4 className="mt-4text-neutral-900 w-full  text-start text-lg dark:text-neutral-100">
                  {children}
                </h4>
              ),
              'heading-5': (node, children) => (
                <h5 className="mt-4 w-full text-start text-base text-neutral-900 dark:text-neutral-100">
                  {children}
                </h5>
              ),
              'heading-6': (node, children) => (
                <h6 className="mt-4 w-full text-start text-sm text-neutral-900 dark:text-neutral-100">
                  {children}
                </h6>
              ),
              'list-item': (node, children) => (
                <li className="w-full text-start text-lg text-neutral-900 dark:text-neutral-100">
                  {children}
                </li>
              ),
              'unordered-list': (node, children) => (
                <ul className="my-4 w-[85%] list-outside list-disc text-start text-base text-neutral-900 dark:text-neutral-100">
                  {children}
                </ul>
              ),
            },
          })}
        </section>
      </div>
    </main>
  )
}