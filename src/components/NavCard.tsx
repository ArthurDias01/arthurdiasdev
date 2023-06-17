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

  return (
    <Link
      href={href}
      className={clsx(
        'p-5 flex flex-col items-center justify-center rounded-lg text-lg font-bold text-white hover:text-primary-400 transition-colors duration-300 hover:bg-neutral-500 dark:hover:bg-neutral-900',
        {
          'text-white bg-neutral-500 dark:text-primary-500 dark:bg-neutral-950/80':
            pathname === href,
        },
      )}
    >
      {title}
    </Link>
  )
}
