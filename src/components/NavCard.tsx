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
        'flex flex-col items-center justify-center rounded-lg p-5 text-lg font-bold text-white transition-colors duration-300 hover:bg-neutral-500 hover:text-primary-400 dark:hover:bg-neutral-900',
        {
          'bg-neutral-500 text-white dark:bg-neutral-950/80 dark:text-primary-500':
            pathname === href,
        },
      )}
    >
      {title}
    </Link>
  )
}
