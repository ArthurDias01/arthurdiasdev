import { IJobTypesFields } from "../@types/contentful";
import { getJobTypes } from "../lib/contentapi";
import { JobTypeCard } from "./JobTypeCard";
import { IJobTypeIconProps, JobTypeIcon } from "./JobTypeIcon";


export const JobTypes = async () => {
  const jobTypes = await getJobTypes() as IJobTypesFields[];

  return (
    <div className="flex flex-col md:flex-row md:justify-center md:items-center mt-12 gap-4">
      {
        jobTypes.map((jobType, index) => {
          return (
            <JobTypeCard key={index}>
              <JobTypeIcon jobType={jobType.job.toLocaleLowerCase() as any} />
              <div className="flex flex-col flex-wrap group">
                <h3 className="text-neutral-950 dark:text-primary-400 text-lg font-bold drop-shadow-md dark:drop-shadow-none">{jobType.job}</h3>
                <p className="group-hover:text-white transition-colors">{jobType.jobDescription}</p>
              </div>
            </JobTypeCard>
          )
        }
        )
      }
    </div>
  )
}
