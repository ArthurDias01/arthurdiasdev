import type { ProjectEntry } from "@/src/types/content";
import Image from "next/image";
import Link from "next/link";
import { ProjectViewLink } from "@/src/components/ProjectCard";
import { SectionLabel } from "./SectionLabel";

function LeadStory({ project }: { project: ProjectEntry }) {
  return (
    <article>
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="flex items-center justify-between">
          <span className="text-[0.7rem] uppercase tracking-label text-copper">
            Featured
          </span>
          <span className="text-[0.65rem] uppercase tracking-label text-muted">
            {project.category}
          </span>
        </div>

        <div className="relative mt-4 aspect-[3/2] overflow-hidden bg-surface">
          {project.featuredImage ? (
            <Image
              src={project.featuredImage}
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
            />
          ) : null}
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-copper transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:hidden"
          />
        </div>

        <div className="mt-6 flex items-start gap-5">
          <span
            aria-hidden
            className="select-none font-body text-6xl font-semibold tabular-nums leading-[0.8] text-ink/[0.14] md:text-7xl"
          >
            01
          </span>
          <div className="min-w-0 flex-1 pt-1">
            <h3 className="font-display text-3xl leading-tight text-ink md:text-4xl">
              {project.projectName}
            </h3>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">
              {project.description}
            </p>
            <ProjectViewLink className="mt-5" />
          </div>
        </div>
      </Link>
    </article>
  );
}

function SecondaryRow({ project, index }: { project: ProjectEntry; index: number }) {
  return (
    <li className="group border-t border-rule py-8 first:pt-0 last:pb-0">
      <Link href={`/projects/${project.slug}`} className="flex gap-5">
        <div className="relative aspect-square w-24 shrink-0 overflow-hidden bg-surface sm:w-28">
          {project.featuredImage ? (
            <Image
              src={project.featuredImage}
              alt=""
              fill
              sizes="112px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] motion-reduce:transform-none"
            />
          ) : null}
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center justify-between">
            <span className="text-[0.65rem] tabular-nums text-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[0.6rem] uppercase tracking-label text-muted">
              {project.category}
            </span>
          </div>
          <h3 className="mt-2 font-display text-xl leading-tight text-ink">
            {project.projectName}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          <ProjectViewLink size="compact" className="mt-3" />
        </div>
      </Link>
    </li>
  );
}

export function SelectedWork({ projects }: { projects: ProjectEntry[] }) {
  const [lead, ...rest] = projects;
  const secondary = rest.slice(0, 2);

  return (
    <section
      id="work"
      className="scroll-mt-24 border-b border-rule py-20 md:py-28"
      aria-labelledby="work-heading"
    >
      <div className="flex items-end justify-between gap-6">
        <div>
          <SectionLabel>Selected Work</SectionLabel>
          <h2
            id="work-heading"
            className="font-display text-3xl tracking-tight text-ink md:text-4xl"
          >
            Projects that earned their place
          </h2>
        </div>
        <Link
          href="/projects"
          className="link-underline hidden shrink-0 text-sm text-copper md:inline"
        >
          All projects →
        </Link>
      </div>

      {lead ? (
        <div className="mt-16 grid gap-y-14 md:grid-cols-12 md:gap-x-14">
          <div className="md:col-span-7">
            <LeadStory project={lead} />
          </div>

          {secondary.length > 0 ? (
            <div className="md:col-span-5 md:border-l md:border-rule md:pl-14">
              <ul>
                {secondary.map((project, i) => (
                  <SecondaryRow key={project.slug} project={project} index={i + 1} />
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="mt-10 md:hidden">
        <Link href="/projects" className="link-underline text-sm text-copper">
          All projects →
        </Link>
      </div>
    </section>
  );
}
