import { NavMenuProjects } from '@/src/components/NavMenuProjects'
import { PageWrapper } from '@/src/components/PageWrapper'
import { ProjectCard } from '@/src/components/ProjectCard'
import { ICustomProject } from '@/src/interfaces'
import { apiHost } from '@/src/lib/apihost'
// import { getProjects } from '@/src/lib/contentapi'

interface PageProps {
  searchParams: { [key: string]: string | undefined }
}

export const revalidate = 60

async function getCustomProjects(): Promise<{ data: ICustomProject[] }> {
  const response = await fetch(`${apiHost}/api/get-all-projects`, {
    next: {
      revalidate: 60,
      tags: ['projects'],
    },
  })
  return response.json()
}

export default async function Projects({ searchParams }: PageProps) {
  const { data: projects } = await getCustomProjects()
  // console.log('get-all-projects', projects)
  const projectsFiltered = projects.filter((project: ICustomProject) => {
    if (searchParams.category) {
      if (
        searchParams.category.includes('Web') ||
        searchParams.category.includes('Mobile')
      ) {
        return project.category.includes(searchParams.category)
      }
      return true
    } else {
      return true
    }
  })

  return (
    <PageWrapper className="flex min-h-[90vh] w-full flex-col gap-4 rounded-[20px]  bg-neutral-300 px-8 pb-12 md:mt-8 dark:bg-neutral-950">
      <div className="mt-8 flex w-full flex-row items-center gap-2">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-primary-500">
          Projects
        </h1>
        <span className="h-1 w-1/4 rounded-sm bg-gradient-to-r from-teal-600 to-primary-300" />
      </div>
      <NavMenuProjects />
      <section className="col-span-1 row-span-1 mx-auto grid w-full grid-cols-1 content-evenly gap-4 transition-transform duration-300  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {projectsFiltered.map((project: ICustomProject, index) => (
          <ProjectCard
            key={project.id}
            category={project.category}
            imageAlt={project.projectName}
            imageSrc={`https:${project.featuredMedia.fields.file?.url!}`}
            title={project.projectName}
            id={project.id}
            priority={index <= 6}
          />
        ))}
      </section>
    </PageWrapper>
  )
}
