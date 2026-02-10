import { getJobTypes } from "@/src/lib/content";
import type { JobTypeEntry } from "@/src/types/content";
import { Card, CardContent } from "@/src/components/ui/card";
import { JobTypeIcon } from "./JobTypeIcon";

export const JobTypes = async () => {
  const jobTypes = await getJobTypes();

  return (
    <div className="grid gap-4 sm:grid-cols-1 2xl:grid-cols-2">
      {jobTypes.map((jobType: JobTypeEntry, index: number) => (
        <Card
          key={index}
          className="group border-l-4 border-l-primary-500/50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-primary-500/30 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 dark:border-l-primary-400/50 dark:hover:border-primary-400/30 dark:focus-within:ring-primary-400"
        >
          <CardContent className="flex flex-row items-start gap-4 p-5">
            <JobTypeIcon
              jobType={
                jobType.job.toLocaleLowerCase() as
                  | "ci/cd pipelines"
                  | "frontend"
                  | "mobile apps"
                  | "backend"
              }
            />
            <div className="min-w-0 flex-1 space-y-1">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-neutral-900 dark:text-primary-400">
                {jobType.job}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {jobType.jobDescription}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
