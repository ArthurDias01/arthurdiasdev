'use-client'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const MobileMenuPopOver = ({ children }: Props) => {
  const pathname = usePathname()

  // function to close the popover

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-[9999] block w-[260px] rounded-xl bg-neutral-500 p-5 transition-all duration-300 ease-in-out will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade dark:bg-neutral-950 dark:shadow-sm dark:shadow-neutral-500 md:hidden"
          sideOffset={8}
          aria-label="navigation menu"
        >
          <div className="flex flex-col gap-4 text-neutral-700">
            <DropdownMenu.Item asChild>
              <Link
                href="/"
                className={clsx(
                  'w-full rounded-md from-teal-600 to-primary-300 p-2 text-lg font-bold text-white transition-colors hover:bg-gradient-to-r',
                  {
                    'bg-gradient-to-r from-teal-600 to-primary-300 underline':
                      pathname === '/',
                  },
                )}
              >
                Home
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link
                href="/about"
                className={clsx(
                  'rounded-md from-teal-600 to-primary-300 p-2 text-lg font-bold text-white transition-colors hover:bg-gradient-to-r',
                  {
                    'bg-gradient-to-r from-teal-600 to-primary-300 underline':
                      pathname === '/about',
                  },
                )}
              >
                About
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link
                href="/projects"
                className={clsx(
                  'rounded-md from-teal-600 to-primary-300 p-2 text-lg font-bold text-white transition-colors hover:bg-gradient-to-r',
                  {
                    'bg-gradient-to-r from-teal-600 to-primary-300 underline':
                      pathname.includes('/projects'),
                    'bg-gradient-to-r from-teal-600 to-primary-300 underline ':
                      pathname === '/project',
                  },
                )}
              >
                Projects
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link
                href="/contact"
                className={clsx(
                  'rounded-md from-teal-600 to-primary-300 p-2 text-lg font-bold text-white transition-colors hover:bg-gradient-to-r',
                  {
                    'bg-gradient-to-r from-teal-600 to-primary-300 underline':
                      pathname === '/contact',
                  },
                )}
              >
                Contact
              </Link>
            </DropdownMenu.Item>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
