import Link from 'next/link'

export const Logo = () => {
  return (
    <Link
      className="flex h-12 w-12 flex-row items-center justify-center rounded-full bg-neutral-200 p-2 text-lg font-bold -tracking-widest text-neutral-950 dark:bg-neutral-700 dark:text-neutral-100"
      href="/"
      aria-label="Home link"
    >
      AD_
    </Link>
  )
}
