import { MdxContent } from "@/src/components/MdxContent";
import { ProjectMediaCarousel } from "@/src/components/ProjectMediaCarousel";
import { getProject } from "@/src/lib/content";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ProfilePage, WithContext } from "schema-dts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const title = project.projectName;
  const description = project.description;
  const imageUrl =
    project.featuredImage.startsWith("http") ||
    project.featuredImage.startsWith("//")
      ? project.featuredImage
      : `https://arthurdias.dev${project.featuredImage.startsWith("/") ? project.featuredImage : `/${project.featuredImage}`}`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://arthurdias.dev/projects/${project.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Arthur Dias",
      title,
      description,
      url: `https://arthurdias.dev/projects/${project.slug}`,
      images: [{ url: imageUrl, alt: project.projectName }],
    },
    twitter: {
      site: `https://arthurdias.dev/projects/${project.slug}`,
      creator: "@ArthurODS_",
      description,
      title,
      images: [{ url: imageUrl, alt: project.projectName }],
      card: "summary_large_image",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const jsonLd: WithContext<ProfilePage> = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${project.projectName} | Arthur Dias`,
    description: project.description,
    mainEntity: {
      "@type": "CreativeWork",
      name: project.projectName,
      description: project.description,
      url: `https://arthurdias.dev/projects/${project.slug}`,
      image: project.featuredImage.startsWith("http")
        ? project.featuredImage
        : `https://arthurdias.dev${project.featuredImage}`,
    },
    image: project.featuredImage.startsWith("http")
      ? project.featuredImage
      : `https://arthurdias.dev${project.featuredImage}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="py-16 md:py-24">
        <Link
          href="/projects"
          className="link-underline text-[0.7rem] uppercase tracking-label text-muted"
        >
          ← Work
        </Link>

        <header className="mt-10 max-w-3xl border-b border-rule pb-10">
          <p className="text-[0.7rem] uppercase tracking-label text-muted">
            {project.category}
            <span aria-hidden> · </span>
            {project.readingTime}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            {project.projectName}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {project.description}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-8 inline-block text-sm text-copper"
          >
            Open project →
          </a>
        </header>

        <div className="mt-12">
          <ProjectMediaCarousel
            urls={project.carouselImages ?? []}
            projectName={project.projectName}
            fallbackImage={project.featuredImage}
          />
        </div>

        {project.body ? (
          <section className="prose-editorial mx-auto mt-14 max-w-3xl space-y-4 text-base leading-relaxed [&_a]:text-copper [&_h1]:font-display [&_h1]:text-3xl [&_h2]:font-display [&_h2]:text-2xl [&_h3]:font-display [&_li]:text-muted [&_p]:text-muted [&_strong]:text-ink">
            <MdxContent source={project.body} />
          </section>
        ) : null}
      </article>
    </>
  );
}
