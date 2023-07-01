import { NavCard } from './NavCard'

export const NavBar = () => {
  // console.log('pathname!!', pathname)
  return (
    <header className="max-w-[100%]">
      <nav className="mx-auto hidden w-full flex-row items-center justify-center rounded-[20px] bg-neutral-400 px-4 py-4 dark:bg-neutral-700 md:flex">
        <div className="flex flex-row items-center gap-4">
          <NavCard href="/" title="Home" />
          <NavCard href="/about" title="About" />
          <NavCard href="/projects" title="Projects" />
          <NavCard href="/contact" title="Contact" />
        </div>
      </nav>
    </header>
  )
}
