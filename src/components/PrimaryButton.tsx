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
        'group bg-gradient-to-r from-primary-300 to-teal-600 z-20 text-white font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out h-fit w-full mx-auto',
      )}
      onClick={handleClick}
      {...rest}
    >
      <>
        {text}
        {children}
        <span className="relative left-[50%] -translate-x-[50%] block max-w-0 group-hover:max-w-[66%] transition-all duration-300 h-0.5 bg-white" />
      </>
    </button>
  )
}
