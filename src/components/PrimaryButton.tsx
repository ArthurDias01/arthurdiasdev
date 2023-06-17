'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils/cn'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  handleClick?: () => void
  text?: string
}

export const PrimaryButton = ({
  children,
  handleClick,
  text,
  className,
  ...rest
}: Props) => {
  return (
    <button
      className={cn(
        className,
        'group z-20 mx-auto h-fit w-full rounded-full bg-gradient-to-r from-primary-300 to-teal-600 px-8 py-3 font-bold text-white shadow-md transition duration-300 ease-in-out hover:shadow-lg',
      )}
      onClick={handleClick}
      {...rest}
    >
      <>
        {text}
        {children}
        <span className="relative left-[50%] block h-0.5 max-w-0 -translate-x-[50%] bg-white transition-all duration-300 group-hover:max-w-[66%]" />
      </>
    </button>
  )
}
