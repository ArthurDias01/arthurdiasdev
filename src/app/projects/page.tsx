import { NavMenuProjects } from '@/src/components/NavMenuProjects'
import { ProjectCard } from '@/src/components/ProjectCard'
import { ProjectCardLoading } from '@/src/components/ProjectCard/Loading'
import { ICustomProject } from '@/src/interfaces'
import { getProjects } from '@/src/lib/contentapi'
import { Suspense } from 'react'
interface PageProps {
  searchParams: { [key: string]: string | undefined }
}

export default async function Projects({ searchParams }: PageProps) {
  const projects = await getProjects()

  const projectsFiltered = projects.filter((project: ICustomProject) => {
    if (searchParams.category) {
      if (searchParams.category === 'All') {
        return true
      }
      return project.category === searchParams.category
    }
    return true
  })

  return (
    <article className="flex min-h-[90vh] w-full flex-col gap-4 rounded-[20px]  bg-neutral-300 px-8 pb-12 dark:bg-neutral-950 md:mt-8">
      <div className="mt-8 flex w-full flex-row items-center gap-2">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-primary-500">
          Projects
        </h1>
        <span className="h-1 w-1/4 rounded-sm bg-gradient-to-r from-teal-600 to-primary-300" />
      </div>
      <NavMenuProjects />
      <section className="col-span-1 row-span-1 mx-auto grid w-full grid-cols-1 content-evenly gap-4 transition-transform duration-300  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {projectsFiltered.map((project: ICustomProject) => (
          <Suspense
            key={project.id}
            fallback={<ProjectCardLoading key={project.id} />}
          >
            <ProjectCard
              key={project.id}
              category={project.category}
              imageAlt={project.projectName}
              imageSrc={`https:${project.featuredMedia.fields.file?.url!}`}
              title={project.projectName}
              id={project.id}
            />
          </Suspense>
        ))}
      </section>
    </article>
  )
}
