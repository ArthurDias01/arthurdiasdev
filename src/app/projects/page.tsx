import { SectionLabel } from "@/src/components/editorial/SectionLabel";
import { NavMenuProjects } from "@/src/components/NavMenuProjects";
import { ProjectCard } from "@/src/components/ProjectCard";
import { getProjects } from "@/src/lib/content";
import type { ProjectEntry } from "@/src/types/content";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export const revalidate = 60;

export const metadata = {
  title: "Work",
  description:
    "Selected software projects by Arthur Dias — products, platforms, and systems.",
  openGraph: {
    title: "Work | Arthur Dias",
    url: "https://arthurdias.dev/projects",
  },
  alternates: { canonical: "https://arthurdias.dev/projects" },
};

export default async function Projects({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const projects = await getProjects();
  const category = resolvedParams.category;
  const projectsFiltered = projects.filter((project: ProjectEntry) => {
    if (!category) return true;
    if (category === "Web" || category === "Mobile")
      return project.category.includes(category);
    return true;
  });

  return (
    <div className="py-16 md:py-24">
      <header className="max-w-2xl">
        <SectionLabel>Work</SectionLabel>
        <h1 className="font-display text-4xl tracking-tight text-ink md:text-5xl">
          Projects
        </h1>
        <p className="mt-5 text-base text-muted">
          Editorial archive of software shipped — not a gallery of cards.
        </p>
      </header>

      <section className="mt-10" aria-labelledby="filter-heading">
        <h2 id="filter-heading" className="sr-only">
          Filter projects
        </h2>
        <NavMenuProjects />
      </section>

      <ul
        id="project-list"
        className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12"
        aria-label="Project list"
      >
        {projectsFiltered.map((project: ProjectEntry, index: number) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            priority={index < 6}
          />
        ))}
      </ul>
    </div>
  );
}
