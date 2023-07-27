import { IJobTypesFields } from '../@types/contentful'
import { apiPath } from '../utils/apiPath'

import { JobTypeCard } from './JobTypeCard'
import { JobTypeIcon } from './JobTypeIcon'

async function getJobTypes() {
  const data = (await fetch(`${apiPath}/api/get-jobtypes`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())) as { data: IJobTypesFields[] } | undefined

  return data
}

export const JobTypes = async () => {
  const response = await getJobTypes()
  const jobTypes = response?.data

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
