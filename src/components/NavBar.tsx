import { NavCard } from './NavCard'

export const NavBar = () => {
  // console.log('pathname!!', pathname)
  return (
    <nav className="mx-auto hidden w-fit flex-row items-center justify-center rounded-[20px] bg-neutral-400 px-4 py-4 md:flex dark:bg-neutral-700">
      <div className="flex flex-row items-center gap-4">
        <NavCard href="/" title="Home" />
        <NavCard href="/about" title="About" />
        <NavCard href="/projects" title="Projects" />
        <NavCard href="/contact" title="Contact" />
      </div>
    </nav>
  )
}
