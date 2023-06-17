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
    <div className="w-16 h-16 rounded-xl flex flex-row items-center justify-center p-2 bg-neutral-400 dark:bg-transparent">
      {jobType === 'frontend' && (
        <Desktop size={24} className="inline-block w-8 h-8 text-primary-400" />
      )}
      {jobType === 'backend' && (
        <Cloud size={24} className="inline-block w-8 h-8 text-primary-400" />
      )}
      {jobType === 'mobile' && (
        <DeviceMobile
          size={24}
          className="inline-block w-8 h-8 text-primary-400"
        />
      )}
      {jobType !== 'frontend' &&
        jobType !== 'backend' &&
        jobType !== 'mobile' && (
          <DeviceMobile
            size={24}
            className="inline-block w-8 h-8 text-primary-400"
          />
        )}
    </div>
  )
}
