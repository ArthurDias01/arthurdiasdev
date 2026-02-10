import Link from 'next/link'

export const Logo = () => {
  return (
    <Link
      className="flex h-12 w-12 flex-row items-center justify-center rounded-full bg-neutral-200 p-2 text-lg font-bold -tracking-widest text-neutral-950 transition-colors hover:bg-primary-500/20 hover:text-primary-800 dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-primary-500/25 dark:hover:text-primary-300"
      href="/"
      aria-label="Home link"
    >
      AD
      <span className="animate-pulseCaret text-primary-600 dark:text-primary-400">
        _
      </span>
    </Link>
  )
}
