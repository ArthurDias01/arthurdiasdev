import { MdxContent } from "@/src/components/MdxContent";
import { getWriting, getWritings } from "@/src/lib/content";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const writings = await getWritings();
  return writings.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getWriting(slug);
  if (!entry) return { title: "Writing" };
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: `https://arthurdias.dev/writing/${slug}` },
  };
}

export default async function WritingArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const entry = await getWriting(slug);
  if (!entry) notFound();

  const date = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(entry.date));

  return (
    <article className="py-16 md:py-24">
      <Link
        href="/writing"
        className="link-underline text-[0.7rem] uppercase tracking-label text-muted"
      >
        ← Writing
      </Link>
      <header className="mt-10 max-w-2xl border-b border-rule pb-10">
        <p className="text-[0.7rem] uppercase tracking-label text-muted">
          <time dateTime={entry.date}>{date}</time>
          <span aria-hidden> · </span>
          {entry.readingTime}
        </p>
        <h1 className="mt-5 font-display text-4xl leading-tight text-ink md:text-5xl">
          {entry.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          {entry.description}
        </p>
      </header>
      <div className="prose-editorial mt-12 max-w-2xl space-y-5 text-base leading-relaxed text-ink [&_a]:text-copper [&_h2]:font-display [&_h2]:text-3xl [&_h2]:tracking-tight [&_li]:text-muted [&_p]:text-muted [&_strong]:text-ink">
        <MdxContent source={entry.body} />
      </div>
    </article>
  );
}
