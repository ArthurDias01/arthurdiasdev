import { cache } from "react";
import matter from "gray-matter";
import { existsSync, readFileSync, readdirSync } from "fs";
import { join } from "path";
import type {
  EducationEntry,
  ExperienceEntry,
  JobTypeEntry,
  ProjectEntry,
  ResumeData,
} from "@/src/types/content";

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

/** All projects (one MDX per project), ordered by date desc. */
export const getProjects = cache(async (): Promise<ProjectEntry[]> => {
  const dir = join(CONTENT_DIR, "projects");
  const files = listDir(dir);
  const entries: ProjectEntry[] = files.map((file) => {
    const raw = readFile(join(dir, file));
    const { data, content } = matter(raw);
    const slug = file.replace(/\.mdx?$/, "");
    const featuredImage = (data.featuredImage as string) ?? "";
    const carouselImages = data.carouselImages as string[] | undefined;
    return {
      slug,
      projectName:
        (data.title as string) ?? (data.projectName as string) ?? slug,
      category: (data.category as ProjectEntry["category"]) ?? "All",
      link: (data.link as string) ?? "#",
      date: (data.date as string) ?? "",
      featuredImage,
      carouselImages: Array.isArray(carouselImages)
        ? carouselImages
        : undefined,
      body: content.trim(),
    };
  });
  entries.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return entries;
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
    const { data, content } = matter(raw);
    const featuredImage = (data.featuredImage as string) ?? "";
    const carouselImages = data.carouselImages as string[] | undefined;
    return {
      slug,
      projectName:
        (data.title as string) ?? (data.projectName as string) ?? slug,
      category: (data.category as ProjectEntry["category"]) ?? "All",
      link: (data.link as string) ?? "#",
      date: (data.date as string) ?? "",
      featuredImage,
      carouselImages: Array.isArray(carouselImages)
        ? carouselImages
        : undefined,
      body: content.trim(),
    };
  },
);
