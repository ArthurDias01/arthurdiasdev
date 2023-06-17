import { NavCard } from './NavCard'

export const NavBar = () => {
  // console.log('pathname!!', pathname)
  return (
    <header className="max-w-[100%]">
      <nav className="hidden md:flex flex-row items-center py-4 px-4 w-full mx-auto justify-center">
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
