'use client'

import { Cloud, Desktop, DeviceMobile } from '@phosphor-icons/react'

export interface IJobTypeIconProps {
  jobType:
    | 'frontend'
    | 'backend'
    | 'fullstack'
    | 'devops'
    | 'data science'
    | 'mobile'
    | 'other'
}

export const JobTypeIcon = ({ jobType }: IJobTypeIconProps) => {
  return (
    <div className="flex h-16 w-16 flex-row items-center justify-center rounded-xl bg-neutral-400 p-2 dark:bg-transparent">
      {jobType === 'frontend' && (
        <Desktop size={24} className="inline-block h-8 w-8 text-primary-400" />
      )}
      {jobType === 'backend' && (
        <Cloud size={24} className="inline-block h-8 w-8 text-primary-400" />
      )}
      {jobType === 'mobile' && (
        <DeviceMobile
          size={24}
          className="inline-block h-8 w-8 text-primary-400"
        />
      )}
      {jobType !== 'frontend' &&
        jobType !== 'backend' &&
        jobType !== 'mobile' && (
          <DeviceMobile
            size={24}
            className="inline-block h-8 w-8 text-primary-400"
          />
        )}
    </div>
  )
}
