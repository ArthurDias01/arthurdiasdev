import type { ProjectEntry } from "@/src/types/content";
import Image from "next/image";
import Link from "next/link";
import { ProjectViewLink } from "@/src/components/ProjectCard";
import { SectionLabel } from "./SectionLabel";

function LeadStory({ project }: { project: ProjectEntry }) {
  return (
    <article className="group border-t border-rule pt-6 md:border-0 md:pt-0">
      <Link
        href={`/projects/${project.slug}`}
        className="block transition-opacity active:opacity-70"
      >
        <div className="flex items-center justify-between">
          <span className="flex items-baseline gap-2">
            <span className="text-[0.65rem] tabular-nums text-muted md:hidden">
              01
            </span>
            <span className="text-[0.65rem] uppercase tracking-label text-copper md:text-[0.7rem]">
              Featured
            </span>
          </span>
          <span className="text-[0.6rem] uppercase tracking-label text-muted md:text-[0.65rem]">
            {project.category}
          </span>
        </div>

        <div className="relative mt-4 aspect-[4/3] overflow-hidden bg-surface md:aspect-[3/2]">
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
          {/*
            Touch has no hover, so the sweep that signals "this is a link"
            on desktop would leave the image reading as decoration. Below
            md the rule is simply always drawn.
          */}
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-px bg-copper md:origin-left md:scale-x-0 md:transition-transform md:duration-500 md:ease-out md:group-hover:scale-x-100 md:motion-reduce:hidden"
          />
        </div>

        <div className="mt-5 flex items-start md:mt-6 md:gap-5">
          <span
            aria-hidden
            className="hidden select-none font-body text-6xl font-semibold tabular-nums leading-[0.8] text-ink/[0.14] md:block md:text-7xl"
          >
            01
          </span>
          <div className="min-w-0 flex-1 md:pt-1">
            <h3 className="font-display text-xl leading-tight text-ink md:text-4xl">
              {project.projectName}
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted md:mt-3 md:text-base">
              {project.description}
            </p>
            <ProjectViewLink className="mt-3 md:mt-5" />
          </div>
        </div>
      </Link>
    </article>
  );
}

function SecondaryRow({ project, index }: { project: ProjectEntry; index: number }) {
  return (
    <li className="group border-t border-rule pt-6 md:py-8 md:first:pt-0 md:last:pb-0">
      {/*
        Below md every entry is a full-width card, so the three read as
        one consistent list; the compact thumbnail row only earns its
        place at md+, where the lead sits beside it and that contrast is
        the point. One image element serves both — a second, hidden one
        would still be fetched.
      */}
      <Link
        href={`/projects/${project.slug}`}
        className="flex flex-col transition-opacity active:opacity-70 md:flex-row md:gap-5"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface md:aspect-square md:w-24 md:shrink-0 lg:w-28">
          {project.featuredImage ? (
            <Image
              src={project.featuredImage}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 112px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] motion-reduce:transform-none"
            />
          ) : null}
          {/* Touch has no hover — the link cue has to be drawn, not revealed. */}
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-px bg-copper md:hidden"
          />
        </div>

        <div className="mt-5 flex min-w-0 flex-1 flex-col md:mt-0">
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
        <div className="mt-12 grid gap-y-10 md:mt-16 md:grid-cols-12 md:gap-x-14 md:gap-y-14">
          <div className="md:col-span-7">
            <LeadStory project={lead} />
          </div>

          {secondary.length > 0 ? (
            <div className="md:col-span-5 md:border-l md:border-rule md:pl-14">
              <ul className="grid gap-y-10 md:block">
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
