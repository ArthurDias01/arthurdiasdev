import { MdxContent } from "@/src/components/MdxContent";
import { PageWrapper } from "@/src/components/PageWrapper";
import { ProjectMediaCarousel } from "@/src/components/ProjectMediaCarousel";
import { getProject } from "@/src/lib/content";
import { JobTitle } from "@/src/utils/client-constants";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { ProfilePage, WithContext } from "schema-dts";

/** Plain-text excerpt from MDX for meta/SEO (strip markdown, ~155 chars). */
function excerptFromBody(
  body: string,
  fallback: string,
  maxLength = 155,
): string {
  if (!body?.trim()) return fallback;
  const plain = body
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/#{1,6}\s*/g, "")
    .replace(/\*\*?|__?/g, "")
    .replace(/\n+/g, " ")
    .trim();
  const text = plain.slice(0, maxLength);
  return text.length < plain.length ? `${text}…` : text;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return { title: `Arthur Dias | Project | Not Found` };
  }

  const title = `${project.projectName} | Arthur Dias | ${JobTitle}`;
  const fallbackDesc = `Project ${project.projectName} by Arthur Dias, ${JobTitle}. Full stack, web and mobile.`;
  const description = excerptFromBody(project.body, fallbackDesc);

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
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: title,
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
      card: "summary",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    redirect("/404");
  }

  const projectDescription = excerptFromBody(
    project.body,
    `Project ${project.projectName} by Arthur Dias, ${JobTitle}.`,
    160,
  );
  const jsonLd: WithContext<ProfilePage> = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${project.projectName} | Arthur Dias`,
    description: projectDescription,
    mainEntity: {
      "@type": "Project",
      name: project.projectName,
      description: projectDescription,
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
      <PageWrapper className="-mt-12 flex min-h-screen flex-col gap-4 md:mt-0 md:min-h-[85vh]">
        <section className="mt-10 flex w-full flex-col items-start md:px-0">
          <h1 className="font-[family-name:var(--font-display)] w-full text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            {project.projectName}
          </h1>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            {project.category}
          </p>
          <div className="mt-2 flex w-full flex-row items-center justify-start gap-2 truncate">
            <span className="text-neutral-600 dark:text-neutral-400">
              Link:{" "}
            </span>
            <a
              className="text-primary-600 underline underline-offset-2 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.projectName} in new tab`}
            >
              {project.projectName}
            </a>
          </div>
        </section>

        <section className="mt-4 flex w-full flex-col gap-8">
          <ProjectMediaCarousel
            urls={project.carouselImages ?? []}
            projectName={project.projectName}
            fallbackImage={project.featuredImage}
          />

          {project.body ? (
            <section className="mx-auto w-full max-w-3xl rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/80 dark:shadow-none">
              <MdxContent
                source={project.body}
                className="prose dark:prose-invert"
              />
            </section>
          ) : null}
        </section>
      </PageWrapper>
    </>
  );
}
