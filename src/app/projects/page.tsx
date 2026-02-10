import { NavMenuProjects } from '@/src/components/NavMenuProjects'
import { PageHeader } from '@/src/components/PageHeader'
import { PageWrapper } from '@/src/components/PageWrapper'
import { ProjectCard } from '@/src/components/ProjectCard'
import { getProjects } from '@/src/lib/content'
import type { ProjectEntry } from '@/src/types/content'

interface PageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>
}

export const revalidate = 60

export const metadata = {
  title: 'Projects',
  description:
    'Portfolio projects by Arthur Dias: web apps, mobile apps, full stack solutions. React, Next.js, Node.js, TypeScript.',
  openGraph: {
    title: 'Projects | Arthur Dias',
    url: 'https://arthurdias.dev/projects',
  },
  alternates: { canonical: 'https://arthurdias.dev/projects' },
}

export default async function Projects({ searchParams }: PageProps) {
  const resolvedParams = await searchParams
  const projects = await getProjects()
  const category = resolvedParams.category
  const projectsFiltered = projects.filter((project: ProjectEntry) => {
    if (!category) return true
    if (category === 'Web' || category === 'Mobile') return project.category.includes(category)
    return true
  })

  return (
    <PageWrapper className="flex min-h-[calc(100vh-8rem)] w-full flex-col gap-10 pb-12 md:pb-16">
      <PageHeader label="Work" title="Projects" />

      <section className="mb-2" aria-labelledby="filter-heading">
        <h2 id="filter-heading" className="sr-only">
          Filter projects
        </h2>
        <NavMenuProjects />
      </section>

      <section
        id="project-list"
        className="grid grid-cols-1 gap-10 sm:grid-cols-2 mt-4"
        aria-label="Project list"
      >
        {projectsFiltered.map((project: ProjectEntry, index: number) => (
          <ProjectCard
            key={project.slug}
            category={project.category}
            imageAlt={project.projectName}
            imageSrc={project.featuredImage}
            title={project.projectName}
            slug={project.slug}
            priority={index <= 6}
          />
        ))}
      </section>
    </PageWrapper>
  )
}
