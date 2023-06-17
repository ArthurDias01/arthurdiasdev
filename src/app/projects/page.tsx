import { NavMenuProjects } from '@/src/components/NavMenuProjects'
import { ProjectCard } from '@/src/components/ProjectCard'
import { ICustomProject } from '@/src/interfaces'
import { getProjects } from '@/src/lib/contentapi'

interface PageProps {
  searchParams: { [key: string]: string | undefined }
}

export default async function Projects({ searchParams }: PageProps) {
  const projects = await getProjects()

  const filteredProjects = projects.filter((project: ICustomProject) => {
    if (searchParams.category) {
      if (searchParams.category === 'All') {
        return true
      }
      return project.category === searchParams.category
    }
    return true
  })

  return (
    <article className="flex min-h-[90vh] flex-col pb-12 px-8 md:mt-8  gap-4 w-full bg-neutral-300 dark:bg-neutral-950 rounded-[20px]">
      <div className="w-full mt-8 flex flex-row items-center gap-2">
        <h1 className="text-2xl text-neutral-900 dark:text-primary-500 font-semibold">
          Projects
        </h1>
        <span className="h-1 w-1/4 bg-gradient-to-r from-teal-600 to-primary-300 rounded-sm" />
      </div>
      <NavMenuProjects />
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 items-start  transition-transform duration-300">
        {filteredProjects.map((project: ICustomProject) => (
          <ProjectCard
            key={project.id}
            category={project.category}
            imageAlt={project.projectName}
            imageSrc={`https:${project.featuredMedia.fields.file?.url!}`}
            title={project.projectName}
            id={project.id}
          />
        ))}
      </section>
    </article>
  )
}
