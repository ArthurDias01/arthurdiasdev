import { getProject } from '@/src/lib/contentapi'
import { Metadata, ResolvingMetadata } from 'next'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'

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

  return {
    title: `Arthur Dias | Project | ${project.projectName}`,
    openGraph: {
      images: [`https:${project.featuredMedia.fields.file?.url!}}`],
    },
  }
}

export default async function Project({ params }: Props) {
  const { slug } = params
  const project = await getProject(slug)

  return (
    <main className="flex flex-col gap-4 min-h-screen md:min-h-[85vh]">
      <div className="w-full mt-[40px] flex flex-col items-center md:px-12">
        <h1 className="text-2xl font-bold w-full">
          Project: {project.projectName}
        </h1>
        <h2 className="text-lg font-semibold w-full">
          Category: {project.category}
        </h2>
        <div className="flex w-full flex-row justify-start items-center gap-2 truncate">
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

      <div className="flex flex-col w-full gap-8">
        <div className="flex flex-row w-full">
          <Image
            src={`https:${project.featuredMedia.fields.file?.url!}`}
            alt={project.projectName}
            width={320}
            height={240}
            className="aspect-video rounded-[20px] object-cover w-full"
          />
        </div>

        <section className="flex flex-col items-center mx-auto bg-neutral-300 dark:bg-neutral-950 p-8 rounded-[20px] text-ellipsis">
          {documentToReactComponents(project.projectDescription, {
            renderNode: {
              paragraph: (node, children) => (
                <p className="w-full text-base text-neutral-900 dark:text-neutral-100 text-start">
                  {children}
                </p>
              ),
              'heading-1': (node, children) => (
                <h1 className="w-full text-3xl text-start mt-4 text-neutral-900 dark:text-neutral-100">
                  {children}
                </h1>
              ),
              'heading-2': (node, children) => (
                <h2 className="w-full text-2xl text-start mt-4 text-neutral-900 dark:text-neutral-100">
                  {children}
                </h2>
              ),
              'heading-3': (node, children) => (
                <h3 className="w-full text-xl text-start mt-4 text-neutral-900 dark:text-neutral-100">
                  {children}
                </h3>
              ),
              'heading-4': (node, children) => (
                <h4 className="w-full text-lg  text-start mt-4text-neutral-900 dark:text-neutral-100">
                  {children}
                </h4>
              ),
              'heading-5': (node, children) => (
                <h5 className="w-full text-base text-start mt-4 text-neutral-900 dark:text-neutral-100">
                  {children}
                </h5>
              ),
              'heading-6': (node, children) => (
                <h6 className="w-full text-sm text-start mt-4 text-neutral-900 dark:text-neutral-100">
                  {children}
                </h6>
              ),
              'list-item': (node, children) => (
                <li className="w-full text-lg text-start text-neutral-900 dark:text-neutral-100">
                  {children}
                </li>
              ),
              'unordered-list': (node, children) => (
                <ul className="my-4 list-outside w-[85%] list-disc text-base text-neutral-900 dark:text-neutral-100 text-start">
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
