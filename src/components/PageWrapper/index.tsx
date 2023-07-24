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
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ ease: 'easeInOut', duration: 0.3, delay: 0.25 }}
          className={className}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  )
}
