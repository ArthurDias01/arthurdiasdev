import { IJobTypesFields } from '../@types/contentful'
import { apiHost } from '../lib/apihost'
import { JobTypeCard } from './JobTypeCard'
import { JobTypeIcon } from './JobTypeIcon'

export const revalidate = 60

async function getCustomJobTypes(): Promise<{ data: IJobTypesFields[] }> {
  const response = await fetch(`${apiHost}/api/get-jobtypes`, {
    next: {
      revalidate: 60,
      tags: ['jobTypes'],
    },
  })
  return response.json()
}

export const JobTypes = async () => {
  const { data: jobTypes } = await getCustomJobTypes()
  return (
    <section className="mx-auto mt-12 flex flex-col gap-4 md:mt-8 md:grid md:grid-cols-1 2xl:grid-cols-2">
      {jobTypes.map((jobType, index) => {
        return (
          <JobTypeCard key={index}>
            <JobTypeIcon jobType={jobType.job.toLocaleLowerCase() as any} />
            <section className="group flex flex-col flex-wrap md:max-w-lg">
              <h3 className="text-lg font-bold text-neutral-950 drop-shadow-md dark:text-primary-400 dark:drop-shadow-none">
                {jobType.job}
              </h3>
              <p className="transition-colors group-hover:text-white">
                {jobType.jobDescription}
              </p>
            </section>
          </JobTypeCard>
        )
      })}
    </section>
  )
}
