'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { MobileMenuPopOver } from './MobileMenuPopOver'
import { CustomButton } from './CustomButtonThemeSwitcher'

export const ThemeSwitcherButtons = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const handleSwitchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div id="ThemeSwitcher buttons" className="flex flex-row gap-4">
      <button
        type="button"
        className="flex h-12 w-12 flex-row items-center justify-center overflow-hidden rounded-full bg-primary-400 drop-shadow-md hover:bg-primary-400"
        onClick={handleSwitchTheme}
      >
        {theme === 'light' ? (
          <Moon className="h-8 w-8 text-white" />
        ) : (
          <Sun className="h-8 w-8 text-neutral-950" />
        )}
      </button>
      <div className="block md:hidden">
        <MobileMenuPopOver>
          <CustomButton />
        </MobileMenuPopOver>
      </div>
    </div>
  )
}
