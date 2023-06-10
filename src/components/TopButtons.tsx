'use client'

import { List, Sun } from "@phosphor-icons/react"

export const TopButtons = () => {

  return (
    <div className="flex flex-row justify-end w-full gap-2 py-6 px-4 bg-primary-200">
      <button type="button" className="w-12 h-12 bg-primary-500 hover:bg-primary-400 rounded-full flex flex-row justify-center items-center">
        <Sun className="w-8 h-8" />
      </button>
      <button type="button" className="w-12 h-12 bg-primary-500 hover:bg-primary-400 rounded-full flex flex-row justify-center items-center">
        <List className="w-8 h-8" />
      </button>
    </div>
  )
}
