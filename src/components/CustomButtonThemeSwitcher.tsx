'use client'
import { List, X } from '@phosphor-icons/react'
import { forwardRef } from 'react'

export const CustomButton = forwardRef((props, forwardedRef) => {
  return (
    <button
      type="button"
      className="group w-12 h-12 bg-primary-400 drop-shadow-md hover:bg-primary-400 rounded-full flex flex-row justify-center items-center transition-all"
      {...props}
      ref={forwardedRef as any}
    >
      <List className="w-8 h-8 text-white dark:text-neutral-900 group-data-[state=open]:hidden" />
      <X className="w-8 h-8 text-white dark:text-neutral-900 group-data-[state=closed]:hidden" />
    </button>
  )
})

CustomButton.displayName = 'CustomButtonThemeSwitcher'
