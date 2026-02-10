import { NavCard } from './NavCard'

export const NavBar = () => {
  // console.log('pathname!!', pathname)
  return (
    <div className="flex w-fit flex-row items-center justify-center gap-0.5 rounded-full border border-neutral-200/80 bg-neutral-100/90 px-1.5 py-1.5 shadow-sm dark:border-neutral-700 dark:bg-neutral-900/90">
      <div className="flex flex-row items-center gap-0.5">
        <NavCard href="/" title="Home" />
        <NavCard href="/about" title="About" />
        <NavCard href="/projects" title="Projects" />
        <NavCard href="/contact" title="Contact" />
      </div>
    </div>
  )
}
