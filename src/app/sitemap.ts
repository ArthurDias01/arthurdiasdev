import { getProjects, getWritings } from "@/src/lib/content";

type Sitemap = Array<{
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}>;

export default async function sitemap(): Promise<Sitemap> {
  const [projects, writings] = await Promise.all([
    getProjects(),
    getWritings(),
  ]);

  const projectUrls: Sitemap = projects.map((project) => ({
    url: `https://arthurdias.dev/projects/${project.slug}`,
    lastModified: project.date ? new Date(project.date) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const writingUrls: Sitemap = writings.map((entry) => ({
    url: `https://arthurdias.dev/writing/${entry.slug}`,
    lastModified: entry.date ? new Date(entry.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://arthurdias.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://arthurdias.dev/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://arthurdias.dev/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://arthurdias.dev/writing",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://arthurdias.dev/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    ...projectUrls,
    ...writingUrls,
  ];
}
