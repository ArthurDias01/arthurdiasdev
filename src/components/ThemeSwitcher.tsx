import { ThemeSwitcherButtons } from './ThemeSwitcherButtons'

const ThemeSwitcher = () => {
  return (
    <div className="sticky top-0 z-[9999] flex min-h-[64px] w-full flex-row items-center justify-end  gap-2 bg-neutral-300 px-4 py-2 dark:bg-neutral-950">
      <ThemeSwitcherButtons />
    </div>
  )
}

export default ThemeSwitcher
