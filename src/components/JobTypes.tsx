import { IJobTypesFields } from '../@types/contentful'
import { getJobTypes } from '../lib/contentapi'
import { JobTypeCard } from './JobTypeCard'
import { JobTypeIcon } from './JobTypeIcon'

export const JobTypes = async () => {
  const jobTypes = (await getJobTypes()) as IJobTypesFields[]

  return (
    <div className="flex flex-col md:grid md:grid-cols-1 2xl:grid-cols-2 mt-12 md:mt-8 mx-auto gap-4">
      {jobTypes.map((jobType, index) => {
        return (
          <JobTypeCard key={index}>
            <JobTypeIcon jobType={jobType.job.toLocaleLowerCase() as any} />
            <div className="flex flex-col flex-wrap group md:max-w-lg">
              <h3 className="text-neutral-950 dark:text-primary-400 text-lg font-bold drop-shadow-md dark:drop-shadow-none">
                {jobType.job}
              </h3>
              <p className="group-hover:text-white transition-colors">
                {jobType.jobDescription}
              </p>
            </div>
          </JobTypeCard>
        )
      })}
    </div>
  )
}
