import { Logo } from './Logo'
import { ThemeSwitcherButtons } from './ThemeSwitcherButtons'

export const Header = () => {
  return (
    <header className="sticky top-0 z-[9999] flex min-h-[64px] w-full flex-row items-center justify-between  gap-2 bg-neutral-300 px-4 py-2 dark:bg-neutral-950">
      <Logo />
      <ThemeSwitcherButtons />
    </header>
  )
}
