import { Metadata, ResolvingMetadata } from 'next'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { PageWrapper } from '@/src/components/PageWrapper'
// import { getProject } from '@/src/lib/contentapi'
import { apihost } from '@/src/lib/apihost'
import { ICustomProject } from '@/src/interfaces'
import { revalidate } from '@/src/utils/constants'

type Props = {
  params: { slug: string }
}

async function getCachedProject(id: string): Promise<{ data: ICustomProject }> {
  const response = await fetch(`${apihost}/api/get-project?id=${id}`, {
    next: {
      revalidate,
    },
  })
  return response.json()
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const { slug } = params

  // fetch data
  const { data: project } = await getCachedProject(slug)

  if (!project) {
    return {
      title: `Arthur Dias | Project | Not Found`,
    }
  }

  const twitterSizeImg = 400
  const opengraphSizeImg = 600

  const opengraphURL = `https:${project.featuredMedia.fields.file
    ?.url!}?w=${opengraphSizeImg}&h=${opengraphSizeImg}&fit=fill`

  const opengraphURLTwitter = `https:${project.featuredMedia.fields.file
    ?.url!}?w=${twitterSizeImg}&h=${twitterSizeImg}&fit=fill`

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
      siteName: `Arthur Dias | Project | ${project.projectName}`,
      description: `Arthur Dias - Full Stack Software Engineer | Project | ${project.projectName}`,
      url: `https://arthurdias.dev/projects/${project.id}`,
      images: [
        {
          url: opengraphURL,
          alt: project.projectName,
        },
      ],
    },
    twitter: {
      site: `https://arthurdias.dev/projects/${project.id}`,
      creator: '@ArthurODS_',
      description: `Arthur Dias - Full Stack Software Engineer | Project | ${project.projectName}`,
      title: `Arthur Dias | Project | ${project.projectName}`,
      images: [
        {
          url: opengraphURLTwitter,
          alt: project.projectName,
          width: opengraphURLTwitter,
          height: opengraphURLTwitter,
        },
      ],
      card: 'summary',
    },
  }
}

export default async function Project({ params }: Props) {
  const { data: project } = await getCachedProject(params.slug)

  if (!project) {
    redirect('/404')
  }

  return (
    <PageWrapper className="-mt-12 flex min-h-screen flex-col gap-4 md:mt-0 md:min-h-[85vh]">
      <section className="mt-[40px] flex w-full flex-col items-center md:px-12">
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
      </section>

      <section className="flex w-full flex-col gap-8">
        <figure className="mx-auto flex w-full max-w-3xl flex-row items-center justify-center">
          <Image
            src={`https:${project.featuredMedia.fields.file?.url!}`}
            alt={project.projectName}
            width={800}
            height={600}
            quality={75}
            priority
            className="aspect-video w-full rounded-[20px] object-cover"
          />
        </figure>

        <section className="mx-auto flex max-w-[100%] flex-col items-center  text-ellipsis rounded-[20px] bg-neutral-300 p-8 dark:bg-neutral-950 md:max-w-3xl">
          {documentToReactComponents(project.projectDescription, {
            renderNode: {
              paragraph: (node, children) => (
                <p className="w-full text-ellipsis text-start text-base text-neutral-900 dark:text-neutral-100">
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
      </section>
    </PageWrapper>
  )
}
