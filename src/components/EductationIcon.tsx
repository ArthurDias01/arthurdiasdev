'use client'
import { BookOpen } from '@phosphor-icons/react'

export const EducationIcon = () => {
  return (
    <div className="relative -left-1 z-20 flex h-10 w-10 flex-row items-center justify-center rounded-lg bg-neutral-500 p-2 shadow-neutral-700 drop-shadow-md dark:bg-neutral-900">
      <BookOpen size={20} className="inline-block h-8 w-8 text-primary-400" />
    </div>
  )
}
