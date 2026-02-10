import { AboutItem } from "@/src/components/AboutItem";
import { EducationIcon } from "@/src/components/EductationIcon";
import { ExperienceIcon } from "@/src/components/ExperienceIcon";
import { PageHeader } from "@/src/components/PageHeader";
import { PageWrapper } from "@/src/components/PageWrapper";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Separator } from "@/src/components/ui/separator";
import { getEducation, getExperience } from "@/src/lib/content";
import type { EducationEntry, ExperienceEntry } from "@/src/types/content";

export const metadata = {
  title: "About & Resumé",
  description:
    "Arthur Dias – work experience, education, and background. Senior Full Stack Software Engineer with experience in aerospace and product engineering.",
  openGraph: {
    title: "About & Resumé | Arthur Dias",
    description:
      "Work experience, education, and background of Arthur Dias, Senior Full Stack Software Engineer.",
    url: "https://arthurdias.dev/about",
  },
  alternates: { canonical: "https://arthurdias.dev/about" },
};

export default async function About() {
  const [educations, experiences] = await Promise.all([
    getEducation(),
    getExperience(),
  ]);

  return (
    <PageWrapper className="flex min-h-[calc(100vh-8rem)] w-full flex-col gap-10 pb-12 md:pb-16">
      <PageHeader label="Background" title="Resumé" />

      <Card className="w-full border-l-4 border-l-primary-500/60 dark:border-l-primary-400/60 mt-4">
        <CardContent className="space-y-12 p-6 md:px-8 md:py-2">
          <section aria-labelledby="experience-heading">
            <CardHeader className="px-0">
              <CardTitle
                id="experience-heading"
                className="flex items-center gap-3 text-xl"
              >
                <ExperienceIcon />
                Work Experience
              </CardTitle>
            </CardHeader>
            <ol className="timeline-list">
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

          <Separator />

          <section aria-labelledby="education-heading">
            <CardHeader className="px-0">
              <CardTitle
                id="education-heading"
                className="flex items-center gap-3 text-xl"
              >
                <EducationIcon />
                Education
              </CardTitle>
            </CardHeader>
            <ol className="timeline-list">
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
        </CardContent>
      </Card>
    </PageWrapper>
  );
}
