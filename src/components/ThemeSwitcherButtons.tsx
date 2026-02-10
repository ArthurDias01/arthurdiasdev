'use client'
import * as React from 'react'
import { List } from '@phosphor-icons/react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { MobileMenuPopOver } from './MobileMenuPopOver'
import { CustomButton } from './CustomButtonThemeSwitcher'

export const ThemeSwitcherButtons = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleSwitchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div id="ThemeSwitcher buttons" className="flex flex-row gap-4">
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-white shadow-md transition-colors hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 dark:bg-primary-600 dark:hover:bg-primary-500"
        onClick={handleSwitchTheme}
        aria-label="Toggle dark or light theme"
      >
        {theme === 'light' ? (
          <Moon className="h-5 w-5" aria-hidden />
        ) : (
          <Sun className="h-5 w-5" aria-hidden />
        )}
      </button>
      <div className="block md:hidden">
        {mounted ? (
          <MobileMenuPopOver>
            <CustomButton />
          </MobileMenuPopOver>
        ) : (
          <span
            className="flex h-12 w-12 flex-row items-center justify-center rounded-full bg-primary-400 drop-shadow-md"
            aria-hidden
          >
            <List className="h-8 w-8 text-white dark:text-neutral-900" />
          </span>
        )}
      </div>
    </div>
  )
}
