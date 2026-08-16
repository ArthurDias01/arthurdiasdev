import Image from "next/image";
import Link from "next/link";
import { cn } from "@/src/utils/cn";
import type { ProjectEntry } from "@/src/types/content";

/** Inline arrow icon (avoids client-only Phosphor in Server Component). */
export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/** "View project →" CTA, shared by every project-card layout (grid tile, lead story, compact row). */
export function ProjectViewLink({
  size = "default",
  className,
}: {
  size?: "default" | "compact";
  className?: string;
}) {
  const compact = size === "compact";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 uppercase tracking-label text-copper transition-colors group-hover:text-ink",
        compact ? "text-[0.7rem]" : "text-[0.75rem]",
        className,
      )}
    >
      View project
      <ArrowIcon
        className={cn(
          "shrink-0 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none",
          compact ? "h-2.5 w-2.5" : "h-3 w-3",
        )}
      />
    </span>
  );
}

interface ProjectCardProps {
  project: ProjectEntry;
  index: number;
  priority?: boolean;
}

export function ProjectCard({ project, index, priority = false }: ProjectCardProps) {
  return (
    <li className="group border-t border-rule">
      <Link
        href={`/projects/${project.slug}`}
        className="block pt-6 focus-visible:outline-none"
      >
        <div className="flex items-center justify-between">
          <span className="text-[0.7rem] tabular-nums text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[0.65rem] uppercase tracking-label text-muted">
            {project.category}
          </span>
        </div>

        <div className="relative mt-4 aspect-[4/3] overflow-hidden bg-surface">
          {project.featuredImage ? (
            <Image
              src={project.featuredImage}
              alt=""
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
            />
          ) : null}
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-copper transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:hidden"
          />
        </div>

        <h3 className="mt-5 font-display text-2xl leading-tight text-ink group-focus-visible:underline">
          {project.projectName}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <ProjectViewLink className="mt-4" />
      </Link>
    </li>
  );
}
