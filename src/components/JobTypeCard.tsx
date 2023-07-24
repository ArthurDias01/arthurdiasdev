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
    // console.log(isIntersecting)
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
    <div ref={elementRef} className="flex w-full max-w-sm flex-col">
      <div className="flex h-full min-h-[9rem] w-full min-w-fit flex-row  items-center justify-start gap-4 rounded-xl border-2 border-neutral-400 bg-neutral-300 p-4 opacity-0 drop-shadow-md transition-transform dark:border-neutral-700 dark:bg-neutral-950 md:min-h-[10rem] md:items-start">
        {children}
      </div>
    </div>
  )
}
