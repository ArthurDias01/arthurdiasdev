'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  href: string
  title: string
}

export const NavCard = ({ href, title }: Props) => {
  const pathname = usePathname()
  const pathNameSize = pathname.split('/').length
  const isActive =
    pathNameSize > 2
      ? href.includes(pathname.split('/')[1])
      : href === pathname

  return (
    <Link
      href={href}
      className={clsx(
        'relative rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        isActive
          ? 'bg-primary-600 text-white shadow-sm dark:bg-primary-500 dark:text-white'
          : 'text-neutral-600 hover:bg-white hover:text-neutral-900 hover:shadow-sm dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100',
      )}
    >
      {title}
    </Link>
  )
}
