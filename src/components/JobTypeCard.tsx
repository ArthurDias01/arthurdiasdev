'use client'

import { useState, useRef, useEffect, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const JobTypeCard = ({ children }: Props) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const elementRef = useRef(null) as any

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        rootMargin: '-50px',
      },
    )
    console.log(isIntersecting)
    if (elementRef !== null) {
      observer.observe(elementRef.current!)
    }

    return () => observer.disconnect()
  }, [isIntersecting])

  useEffect(() => {
    if (isIntersecting) {
      elementRef.current!.querySelectorAll('div').forEach((el: HTMLElement) => {
        el.classList.add('animate-fadeIn')
      })
    } else {
      elementRef.current!.querySelectorAll('div').forEach((el: HTMLElement) => {
        el.classList.remove('animate-fadeIn')
      })
    }
  }, [isIntersecting])

  return (
    <div ref={elementRef} className="flex flex-col w-full max-w-sm">
      <div className="flex flex-row w-full min-h-[9rem] h-full border-2  border-neutral-400 dark:border-neutral-700 drop-shadow-md p-4 rounded-xl bg-neutral-300 dark:bg-neutral-950 gap-4 md:min-h-[10rem] transition-transform duration-300 opacity-0 min-w-fit justify-start items-center md:items-start">
        {children}
      </div>
    </div>
  )
}
