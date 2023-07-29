import { AboutItem } from '@/src/components/AboutItem'
import { EducationIcon } from '@/src/components/EductationIcon'
import { ExperienceIcon } from '@/src/components/ExperienceIcon'
import { PageWrapper } from '@/src/components/PageWrapper'
import {
  ICustomEducationFields,
  ICustomExperienceFields,
} from '@/src/interfaces'
import { getEducation, getExperience } from '@/src/lib/contentapi'

export default async function About() {
  const educationsData = getEducation()
  const experiencesdata = getExperience()

  const [educations, experiences] = await Promise.all([
    educationsData,
    experiencesdata,
  ])

  return (
    <PageWrapper className="flex min-h-[90vh] w-full flex-col gap-4 rounded-[20px]  bg-neutral-300 px-8 pb-12 dark:bg-neutral-950 md:mt-8">
      <div className="mt-8 flex w-full flex-row items-center gap-2">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-primary-500">
          Resumé
        </h1>
        <span className="h-1 w-1/4 rounded-sm bg-gradient-to-r from-teal-600 to-primary-300" />
      </div>
      <section className="mx-auto flex w-full flex-col gap-4 rounded-[20px] bg-neutral-300 pb-12 dark:bg-neutral-950">
        <div className="flex w-full flex-row items-center gap-2">
          <EducationIcon />
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-primary-500">
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
        <div className="flex w-full flex-row items-center gap-2">
          <ExperienceIcon />
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-primary-500">
            Work Experience
          </h2>
        </div>
        <section className="mx-auto flex w-full flex-col gap-4 rounded-[20px] bg-neutral-300 pb-12 dark:bg-neutral-950">
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
    </PageWrapper>
  )
}
