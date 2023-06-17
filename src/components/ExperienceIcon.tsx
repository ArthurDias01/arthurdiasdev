'use client'
import { SuitcaseSimple } from '@phosphor-icons/react'

export const ExperienceIcon = () => {
  return (
    <div className="relative w-10 h-10 drop-shadow-md shadow-neutral-700 flex flex-row justify-center items-center p-2 bg-neutral-500 dark:bg-neutral-900 rounded-lg z-20 -left-1">
      <SuitcaseSimple
        size={20}
        className="inline-block w-8 h-8 text-primary-400"
      />
    </div>
  )
}
