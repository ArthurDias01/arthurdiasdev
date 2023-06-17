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
        className="w-12 h-12 bg-primary-400 drop-shadow-md hover:bg-primary-400 rounded-full flex flex-row justify-center items-center overflow-hidden"
        onClick={handleSwitchTheme}
      >
        {theme === 'light' ? (
          <Moon className="w-8 h-8 text-white" />
        ) : (
          <Sun className="w-8 h-8 text-neutral-950" />
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
