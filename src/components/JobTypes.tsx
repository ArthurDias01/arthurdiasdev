import { IJobTypesFields } from '../@types/contentful'
import { apihost } from '../lib/apihost'
import { revalidate } from '../utils/constants'
// import { getJobTypes } from '../lib/contentapi'
import { JobTypeCard } from './JobTypeCard'
import { JobTypeIcon } from './JobTypeIcon'

async function getCachedJobTypes(): Promise<{ data: IJobTypesFields[] }> {
  const response = await fetch(`${apihost}/api/get-jobtypes`, {
    next: {
      revalidate,
    },
  })
  return response.json()
}

export const JobTypes = async () => {
  const { data: jobTypes } = await getCachedJobTypes()

  return (
    <div className="mx-auto mt-12 flex flex-col gap-4 md:mt-8 md:grid md:grid-cols-1 2xl:grid-cols-2">
      {jobTypes?.map((jobType, index) => {
        return (
          <JobTypeCard key={index}>
            <JobTypeIcon jobType={jobType.job.toLocaleLowerCase() as any} />
            <div className="group flex flex-col flex-wrap md:max-w-lg">
              <h3 className="text-lg font-bold text-neutral-950 drop-shadow-md dark:text-primary-400 dark:drop-shadow-none">
                {jobType.job}
              </h3>
              <p className="transition-colors group-hover:text-white">
                {jobType.jobDescription}
              </p>
            </div>
          </JobTypeCard>
        )
      })}
    </div>
  )
}
