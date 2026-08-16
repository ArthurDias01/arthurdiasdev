import type { WritingEntry } from "@/src/types/content";
import Link from "next/link";
import { SectionLabel } from "./SectionLabel";

function formatDate(date: string) {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

export function WritingList({
  writings,
  heading = "Latest Writing",
  showViewAll = true,
}: {
  writings: WritingEntry[];
  heading?: string;
  showViewAll?: boolean;
}) {
  return (
    <section
      id="writing"
      className="scroll-mt-24"
      aria-labelledby="writing-heading"
    >
      <div className="flex items-end justify-between gap-6">
        <div>
          <SectionLabel>Writing</SectionLabel>
          <h2
            id="writing-heading"
            className="font-display text-3xl tracking-tight text-ink md:text-4xl"
          >
            {heading}
          </h2>
        </div>
        {showViewAll ? (
          <Link
            href="/writing"
            className="link-underline hidden shrink-0 text-sm text-copper md:inline"
          >
            Archive →
          </Link>
        ) : null}
      </div>

      {writings.length === 0 ? (
        <p className="mt-10 text-sm text-muted">Essays coming soon.</p>
      ) : (
        <ul className="mt-12 divide-y divide-rule border-y border-rule">
          {writings.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/writing/${entry.slug}`}
                className="group grid gap-2 py-7 transition-colors md:grid-cols-[8rem_1fr_7rem] md:items-baseline md:gap-8"
              >
                <time
                  dateTime={entry.date}
                  className="text-[0.7rem] uppercase tracking-label text-muted"
                >
                  {formatDate(entry.date)}
                </time>
                <span className="font-display text-xl leading-snug text-ink group-hover:text-copper md:text-2xl">
                  {entry.title}
                </span>
                <span className="text-sm text-muted md:text-right">
                  {entry.readingTime}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
