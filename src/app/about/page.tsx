import { AboutItem } from '@/src/components/AboutItem'
import { EducationIcon } from '@/src/components/EductationIcon'
import { ExperienceIcon } from '@/src/components/ExperienceIcon'
import {
  ICustomEducationFields,
  ICustomExperienceFields,
} from '@/src/interfaces'
import { getEducation, getExperience } from '@/src/lib/contentapi'

export default async function About() {
  const educations = await getEducation()
  const experiences = await getExperience()

  return (
    <article className="flex min-h-[90vh] flex-col pb-12 px-8 md:mt-8  gap-4 w-full bg-neutral-300 dark:bg-neutral-950 rounded-[20px]">
      <div className="w-full mt-8 flex flex-row items-center gap-2">
        <h1 className="text-2xl text-neutral-900 dark:text-primary-500 font-semibold">
          Resumé
        </h1>
        <span className="h-1 w-1/4 bg-gradient-to-r from-teal-600 to-primary-300 rounded-sm" />
      </div>
      <section className="w-full flex flex-col gap-4 bg-neutral-300 dark:bg-neutral-950 rounded-[20px] pb-12 mx-auto">
        <div className="w-full flex flex-row items-center gap-2">
          <EducationIcon />
          <h2 className="text-xl text-neutral-900 dark:text-primary-500 font-semibold">
            Education
          </h2>
        </div>
        <ol className="timeline-list">
          {educations.map((education: ICustomEducationFields) => (
            <AboutItem
              key={education.id}
              description={education.description}
              title={education.title}
              yearStart={education.startYear}
              yearEnd={education.endDate!}
              finished={education.finished}
              mainFrameworks={education.mainFrameworks}
              type="education"
            />
          ))}
        </ol>
        <div className="w-full flex flex-row items-center gap-2">
          <ExperienceIcon />
          <h2 className="text-xl text-neutral-900 dark:text-primary-500 font-semibold">
            Work Experience
          </h2>
        </div>
        <section className="w-full flex flex-col gap-4 bg-neutral-300 dark:bg-neutral-950 rounded-[20px] pb-12 mx-auto">
          <ol className="timeline-list">
            {experiences.map((experience: ICustomExperienceFields) => (
              <AboutItem
                key={experience.id}
                description={experience.description}
                title={experience.title}
                yearStart={experience.startYear}
                yearEnd={experience.endDate!}
                finished={experience.finished}
                type="experience"
                position={experience.position}
              />
            ))}
          </ol>
        </section>
      </section>
    </article>
  )
}
