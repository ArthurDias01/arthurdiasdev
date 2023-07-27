'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className: string
}

export const PageWrapper = ({ children, className }: Props) => {
  return (
    <>
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 15 }}
          transition={{ ease: 'easeInOut', duration: 0.2, delay: 0.2 }}
          className={className}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  )
}
