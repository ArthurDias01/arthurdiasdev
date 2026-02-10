import { Logo } from './Logo'
import { NavBar } from './NavBar'
import { ThemeSwitcherButtons } from './ThemeSwitcherButtons'

export const Header = () => {
  return (
    <header
      className="sticky top-0 z-[9999] flex min-h-16 w-full items-center justify-between gap-4 border-b border-neutral-200/60 bg-white/90 px-4 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/90 md:px-6"
      role="banner"
    >
      <div className="flex shrink-0 items-center">
        <Logo />
      </div>
      <nav className="hidden flex-1 justify-center md:flex" aria-label="Main navigation">
        <NavBar />
      </nav>
      <div className="flex shrink-0 items-center">
        <ThemeSwitcherButtons />
      </div>
    </header>
  )
}
