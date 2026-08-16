import type {
    EducationEntry,
    ExperienceEntry,
    JobTypeEntry,
    ProjectEntry,
    ResumeData,
    WritingEntry,
} from "@/src/types/content";
import { existsSync, readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import { cache } from "react";

const CONTENT_DIR = join(process.cwd(), "content");

function readFile(path: string): string {
  return readFileSync(path, "utf-8");
}

function listDir(dir: string): string[] {
  try {
    return readdirSync(dir).filter(
      (f) => f.endsWith(".mdx") || f.endsWith(".md"),
    );
  } catch {
    return [];
  }
}

function stripMarkdown(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_~>#-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function readingTimeFromText(text: string): string {
  const words = stripMarkdown(text).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

function extractDescription(body: string, fallback = ""): string {
  const plain = stripMarkdown(body);
  if (!plain) return fallback;
  const sentence = plain.split(/(?<=[.!?])\s+/)[0] ?? plain;
  if (sentence.length <= 160) return sentence;
  return `${sentence.slice(0, 157).trimEnd()}…`;
}

function parseTags(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map(String).filter(Boolean);
  }
  if (typeof value === "string" && value.trim()) {
    return value
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
  }
  return [];
}

/** Resume / about summary (single file). */
export const getResume = cache(async (): Promise<ResumeData> => {
  const raw = readFile(join(CONTENT_DIR, "resume.mdx"));
  const { data, content } = matter(raw);
  return {
    title: (data.title as string) ?? "Summary",
    body: content.trim(),
  };
});

/** Education entries (one MDX per entry), ordered by startYear desc. */
export const getEducation = cache(async (): Promise<EducationEntry[]> => {
  const dir = join(CONTENT_DIR, "education");
  const files = listDir(dir);
  const entries: EducationEntry[] = files.map((file) => {
    const raw = readFile(join(dir, file));
    const { data, content } = matter(raw);
    const id = file.replace(/\.mdx?$/, "");
    return {
      id,
      title: (data.title as string) ?? "",
      description: content.trim(),
      startYear: (data.startYear as string) ?? "",
      endDate: data.endDate as string | undefined,
      finished: (data.finished as boolean) ?? true,
      mainFrameworks: data.mainFrameworks as string | undefined,
    };
  });
  entries.sort(
    (a, b) => new Date(b.startYear).getTime() - new Date(a.startYear).getTime(),
  );
  return entries;
});

/** Experience entries (one MDX per entry), ordered by startYear desc. */
export const getExperience = cache(async (): Promise<ExperienceEntry[]> => {
  const dir = join(CONTENT_DIR, "experience");
  const files = listDir(dir);
  const entries: ExperienceEntry[] = files.map((file) => {
    const raw = readFile(join(dir, file));
    const { data, content } = matter(raw);
    const id = file.replace(/\.mdx?$/, "");
    return {
      id,
      title: (data.title as string) ?? "",
      position: (data.position as string) ?? "",
      description: content.trim(),
      startYear: (data.startYear as string) ?? "",
      endDate: data.endDate as string | undefined,
      finished: (data.finished as boolean) ?? true,
    };
  });
  entries.sort(
    (a, b) => new Date(b.startYear).getTime() - new Date(a.startYear).getTime(),
  );
  return entries;
});

/** Job types (JSON array). */
export const getJobTypes = cache(async (): Promise<JobTypeEntry[]> => {
  const raw = readFile(join(CONTENT_DIR, "job-types.json"));
  const data = JSON.parse(raw) as JobTypeEntry[];
  return Array.isArray(data) ? data : [];
});

function parseProject(slug: string, raw: string): ProjectEntry {
  const { data, content } = matter(raw);
  const body = content.trim();
  const featuredImage = (data.featuredImage as string) ?? "";
  const carouselImages = data.carouselImages as string[] | undefined;
  const description =
    (data.description as string) ??
    extractDescription(body, "Selected project.");

  return {
    slug,
    projectName: (data.title as string) ?? (data.projectName as string) ?? slug,
    category: (data.category as ProjectEntry["category"]) ?? "All",
    link: (data.link as string) ?? "#",
    date: (data.date as string) ?? "",
    featuredImage,
    carouselImages: Array.isArray(carouselImages) ? carouselImages : undefined,
    description,
    tags: parseTags(data.tags),
    featured: Boolean(data.featured),
    readingTime: readingTimeFromText(body),
    body,
  };
}

/** All projects (one MDX per project), ordered by date desc. */
export const getProjects = cache(async (): Promise<ProjectEntry[]> => {
  const dir = join(CONTENT_DIR, "projects");
  const files = listDir(dir);
  const entries = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    return parseProject(slug, readFile(join(dir, file)));
  });
  entries.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return entries;
});

/** Featured projects for homepage — falls back to newest three. */
export const getFeaturedProjects = cache(async (): Promise<ProjectEntry[]> => {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.featured);
  if (featured.length > 0) return featured.slice(0, 3);
  return projects.slice(0, 3);
});

/** Single project by slug. */
export const getProject = cache(
  async (slug: string): Promise<ProjectEntry | null> => {
    const mdxPath = join(CONTENT_DIR, "projects", `${slug}.mdx`);
    const mdPath = join(CONTENT_DIR, "projects", `${slug}.md`);
    let raw: string;
    if (existsSync(mdxPath)) {
      raw = readFile(mdxPath);
    } else if (existsSync(mdPath)) {
      raw = readFile(mdPath);
    } else {
      return null;
    }
    return parseProject(slug, raw);
  },
);

function parseWriting(slug: string, raw: string): WritingEntry {
  const { data, content } = matter(raw);
  const body = content.trim();
  return {
    slug,
    title: (data.title as string) ?? slug,
    description:
      (data.description as string) ??
      extractDescription(body, "An essay."),
    date: (data.date as string) ?? "",
    readingTime:
      (data.readingTime as string) ?? readingTimeFromText(body),
    tags: parseTags(data.tags),
    draft: Boolean(data.draft),
    body,
  };
}

/** Published writing entries, newest first. */
export const getWritings = cache(async (): Promise<WritingEntry[]> => {
  const dir = join(CONTENT_DIR, "writing");
  const files = listDir(dir);
  const entries = files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      return parseWriting(slug, readFile(join(dir, file)));
    })
    .filter((entry) => !entry.draft);
  entries.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return entries;
});

export const getWriting = cache(
  async (slug: string): Promise<WritingEntry | null> => {
    const mdxPath = join(CONTENT_DIR, "writing", `${slug}.mdx`);
    const mdPath = join(CONTENT_DIR, "writing", `${slug}.md`);
    let raw: string;
    if (existsSync(mdxPath)) {
      raw = readFile(mdxPath);
    } else if (existsSync(mdPath)) {
      raw = readFile(mdPath);
    } else {
      return null;
    }
    const entry = parseWriting(slug, raw);
    if (entry.draft && process.env.NODE_ENV === "production") return null;
    return entry;
  },
);
