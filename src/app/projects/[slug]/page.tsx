import { Carousel } from '@/src/components/Carousel'
import { PageWrapper } from '@/src/components/PageWrapper'
import { ICustomProject } from '@/src/interfaces'
import { apiHost } from '@/src/lib/apihost'
import { JobTitle } from '@/src/utils/client-constants'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { ProfilePage, WithContext } from 'schema-dts'

type Props = {
  params: { slug: string }
}

async function getProjectFromApi(
  slug: string,
): Promise<{ data: ICustomProject }> {
  const response = await fetch(`${apiHost}/api/get-project/${slug}`, {
    next: {
      revalidate: 60,
      tags: [`project-${slug}`],
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
  const { data: project } = await getProjectFromApi(slug)

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

  const title = `Arthur Dias | Project: ${project.projectName} | ${JobTitle}`
  const description = `Explore the project ${project.projectName} by Arthur Dias, an accomplished ${JobTitle} with expertise in React, Next.js, and Node.js. Dive into this captivating web application, crafted with attention to detail and an excellent user experience. Discover Arthur's proficiency in TypeScript, GraphQL, AWS, and Firebase, ensuring efficient and scalable solutions. Check out his MSc in Aerospace Engineering and certifications from RocketSeat, backed by years of experience in problem-solving and agile development. Elevate your search rankings with a showcase of Arthur's remarkable contributions to the tech world through this exciting project.`

  return {
    title,
    description,
    manifest: '/site.webmanifest',
    alternates: {
      canonical: `https://arthurdias.dev/project/${project.id}`,
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: title,
      title,
      description,
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
      description,
      title,
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
  const { data: project } = await getProjectFromApi(params.slug)

  const jsonLd: WithContext<ProfilePage> = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: `Arthur Dias | Project: ${project.projectName} | ${JobTitle}`,
    mainEntity: {
      '@type': 'Project',
      name: project.projectName,
      description: project.projectDescription,
      url: `https://arthurdias.dev/projects/${project.id}`,
      image: project.featuredMedia.fields.file?.url! as string,
    },
    image: project.featuredMedia.fields.file?.url! as string,
    description: project.projectDescription,
  }

  if (!project) {
    redirect('/404')
  }

  const carouselMedia =
    project.carouselMedia !== undefined && project.carouselMedia !== null
      ? project.carouselMedia.map((media) => {
          return {
            url: media.fields.file?.url
              ? `https:${media.fields.file?.url}`
              : '',
            alt: media.fields.title
              ? `https:${media.fields.file?.fileName}`
              : '',
            // @ts-ignore
            width: media.fields.file?.details?.image!.width ?? '',
            // @ts-ignore
            height: media.fields.file?.details?.image!.height ?? '',
          }
        })
      : []

  return (
    <>
      <head key="1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
          {carouselMedia.length ? (
            <Carousel images={carouselMedia} />
          ) : (
            <>
              <figure className="mx-auto hidden w-full max-w-3xl flex-row items-center justify-center sm:flex">
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

              {/* Small screen pic */}
              <figure className="mx-auto flex h-full w-full max-w-3xl flex-row items-center justify-center sm:hidden">
                <Image
                  src={`https:${project.featuredMedia.fields.file?.url!}`}
                  alt={project.projectName}
                  width={360}
                  height={800}
                  quality={75}
                  priority
                  className="h-full w-full rounded-[20px] object-contain"
                />
              </figure>
            </>
          )}

          <section className="mx-auto flex max-w-[100%] flex-col items-center  text-ellipsis rounded-[20px] bg-neutral-300 p-8 md:max-w-3xl dark:bg-neutral-950">
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
                hyperlink: (node, children) => (
                  <a
                    className="text-primary-400 underline"
                    href={node.data.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              },
            })}
          </section>
        </section>
      </PageWrapper>
    </>
  )
}
