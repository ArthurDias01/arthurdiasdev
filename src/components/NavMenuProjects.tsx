'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
]

export function NavMenuProjects() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id)
            if (tab.id === 'all') {
              router.push('/projects')
            } else {
              router.push(`/projects?category=${tab.label}`)
            }
          }}
          className={clsx(
            'relative rounded-full px-3 py-1.5 text-sm font-semibold outline-sky-400 transition focus-visible:outline-2',
            {
              'text-white shadow-slate-500 drop-shadow-md dark:text-primary-400':
                activeTab === tab.id,
              'text-white hover:text-primary-400 hover:shadow-slate-500 hover:drop-shadow-sm':
                activeTab !== tab.id,
            },
          )}
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white/40"
              style={{ borderRadius: 9999 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  )
}
