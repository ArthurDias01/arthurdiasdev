'use client'
import { BookOpen } from '@phosphor-icons/react'

export const EducationIcon = () => {
  return (
    <div className="relative w-10 h-10 drop-shadow-md shadow-neutral-700 flex flex-row justify-center items-center p-2 bg-neutral-500 dark:bg-neutral-900 rounded-lg z-20 -left-1">
      <BookOpen size={20} className="inline-block w-8 h-8 text-primary-400" />
    </div>
  )
}
