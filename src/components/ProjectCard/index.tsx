import Image from "next/image";
import Link from "next/link";
import { Card } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";

/** Inline arrow icon (avoids client-only Phosphor in Server Component). */
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
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

interface Props {
  imageSrc: string;
  imageAlt: string;
  title: string;
  category: string;
  slug: string;
  priority?: boolean;
}

export const ProjectCard = ({
  category,
  imageAlt,
  imageSrc,
  title,
  slug,
  priority = false,
}: Props) => {
  return (
    <Card className="group overflow-hidden border-l-4 border-l-primary-500/50 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary-500/80 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 motion-reduce:translate-y-0 motion-reduce:shadow-sm dark:border-l-primary-400/50 dark:hover:border-primary-400/80 dark:focus-within:ring-primary-400">
      <Link
        href={`/projects/${slug}`}
        className="flex flex-col overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset"
        aria-label={`View project: ${title}`}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center transition-[transform] duration-500 group-hover:scale-105 motion-reduce:transform-none"
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
          />
          {/* Decorative hover overlay with CTA */}
          <div
            className="absolute inset-0 flex items-center justify-center bg-neutral-900/0 transition-[background-color,opacity] duration-300 group-hover:bg-neutral-900/60"
            aria-hidden
          >
            <span className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-sm font-semibold text-neutral-900 shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-neutral-100 dark:text-neutral-900">
              View project
              <ArrowIcon className="h-4 w-4 shrink-0 transition-[transform] duration-200 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
        <div className="flex min-w-0 flex-col gap-3 p-5">
          <Badge variant="secondary" className="w-fit text-xs font-medium">
            {category}
          </Badge>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 text-balance">
            {title}
          </h2>
        </div>
      </Link>
    </Card>
  );
};
