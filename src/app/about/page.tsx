import { AboutItem } from "@/src/components/AboutItem";
import { SectionLabel } from "@/src/components/editorial/SectionLabel";
import { MdxContent } from "@/src/components/MdxContent";
import {
    getEducation,
    getExperience,
    getResume,
} from "@/src/lib/content";
import { ABOUT_BRIEF, PRINCIPLES } from "@/src/lib/site";
import type { EducationEntry, ExperienceEntry } from "@/src/types/content";

export const metadata = {
  title: "About",
  description: ABOUT_BRIEF,
  openGraph: {
    title: "About | Arthur Dias",
    description: ABOUT_BRIEF,
    url: "https://arthurdias.dev/about",
  },
  alternates: { canonical: "https://arthurdias.dev/about" },
};

export default async function About() {
  const [resume, educations, experiences] = await Promise.all([
    getResume(),
    getEducation(),
    getExperience(),
  ]);

  return (
    <div className="py-16 md:py-24">
      <header className="max-w-2xl border-b border-rule pb-14">
        <SectionLabel>About</SectionLabel>
        <h1 className="font-display text-4xl tracking-tight text-ink md:text-5xl">
          Background
        </h1>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-muted [&_strong]:text-ink">
          <MdxContent source={resume.body} />
        </div>
      </header>

      <section className="mt-16 border-b border-rule pb-16" aria-labelledby="principles-heading">
        <SectionLabel>Principles</SectionLabel>
        <h2
          id="principles-heading"
          className="font-display text-3xl tracking-tight text-ink"
        >
          How I think
        </h2>
        <ol className="mt-10 max-w-2xl">
          {PRINCIPLES.map((principle, index) => (
            <li
              key={principle}
              className="flex gap-6 border-t border-rule py-5 last:border-b"
            >
              <span className="w-8 shrink-0 text-[0.7rem] tabular-nums text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-xl text-ink">{principle}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16" aria-labelledby="experience-heading">
        <SectionLabel>Experience</SectionLabel>
        <h2
          id="experience-heading"
          className="font-display text-3xl tracking-tight text-ink"
        >
          Work
        </h2>
        <ol className="timeline-list mt-10 max-w-2xl">
          {experiences.map((experience: ExperienceEntry) => (
            <AboutItem
              key={experience.id}
              description={experience.description}
              title={experience.title}
              yearStart={experience.startYear}
              yearEnd={experience.endDate ?? ""}
              finished={experience.finished}
              type="experience"
              position={experience.position}
            />
          ))}
        </ol>
      </section>

      <section className="mt-20" aria-labelledby="education-heading">
        <SectionLabel>Education</SectionLabel>
        <h2
          id="education-heading"
          className="font-display text-3xl tracking-tight text-ink"
        >
          Studies
        </h2>
        <ol className="timeline-list mt-10 max-w-2xl">
          {educations.map((education: EducationEntry) => (
            <AboutItem
              key={education.id}
              description={education.description}
              title={education.title}
              yearStart={education.startYear}
              yearEnd={education.endDate ?? ""}
              finished={education.finished}
              mainFrameworks={education.mainFrameworks}
              type="education"
            />
          ))}
        </ol>
      </section>
    </div>
  );
}
