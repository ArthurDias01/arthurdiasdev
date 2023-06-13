'use-client'

import * as Popover from '@radix-ui/react-popover';
import { usePathname } from 'next/navigation'
import clsx from 'clsx';
import Link from 'next/link'

interface Props {
  children: React.ReactNode;
}

export const MobileMenuPopOver = ({ children }: Props) => {
  const pathname = usePathname();

  console.log(pathname)

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        {children}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="block md:hidden rounded-xl p-5 w-[260px] bg-neutral-500 dark:bg-neutral-950 will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade transition-all duration-300 ease-in-out z-[9999] "
          sideOffset={5}
        >
          <div className="flex flex-col gap-4 text-neutral-700">
            <Link href="/" className={clsx("text-lg font-bold hover:bg-gradient-to-r from-teal-600 to-primary-300 p-2 rounded-md text-white transition-colors", {
              'bg-gradient-to-r from-teal-600 to-primary-300 underline': pathname === '/',
            })}>Home</Link>
            <Link href="/about" className={clsx("text-lg font-bold hover:bg-gradient-to-r from-teal-600 to-primary-300 p-2 rounded-md text-white transition-colors", {
              'bg-gradient-to-r from-teal-600 to-primary-300 underline': pathname === '/about',
            })}>About</Link>
            <Link href="/projects" className={clsx("text-lg font-bold hover:bg-gradient-to-r from-teal-600 to-primary-300 p-2 rounded-md text-white transition-colors", {
              'bg-gradient-to-r from-teal-600 to-primary-300 underline': pathname === '/projects',
            })}>Projects</Link>
            <Link href="/contact" className={clsx("text-lg font-bold hover:bg-gradient-to-r from-teal-600 to-primary-300 p-2 rounded-md text-white transition-colors", {
              'bg-gradient-to-r from-teal-600 to-primary-300 underline': pathname === '/contact',
            })}>Contact</Link>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
