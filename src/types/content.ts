/** Content types for MDX-driven portfolio. */

export interface ResumeData {
  title: string;
  /** Raw MDX body (compile with MDXRemote). */
  body: string;
}

export interface EducationEntry {
  id: string;
  title: string;
  description: string;
  startYear: string;
  endDate?: string;
  finished: boolean;
  mainFrameworks?: string;
}

export interface ExperienceEntry {
  id: string;
  title: string;
  position: string;
  description: string;
  startYear: string;
  endDate?: string;
  finished: boolean;
}

export interface JobTypeEntry {
  job: string;
  jobDescription: string;
}

export type ProjectCategory = "Web" | "Mobile" | "All" | "Web, Mobile";

export interface ProjectEntry {
  slug: string;
  projectName: string;
  category: ProjectCategory;
  link: string;
  date: string;
  featuredImage: string;
  carouselImages?: string[];
  /** One-line summary for editorial listings. */
  description: string;
  tags: string[];
  featured: boolean;
  readingTime: string;
  /** Raw MDX body for project description. */
  body: string;
}

export interface WritingEntry {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  draft: boolean;
  body: string;
}
