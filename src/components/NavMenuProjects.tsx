'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
]

export function NavMenuProjects() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const [activeTab, setActiveTab] = useState(
    category === 'Web' ? 'web' : category === 'Mobile' ? 'mobile' : 'all'
  )

  useEffect(() => {
    setActiveTab(category === 'Web' ? 'web' : category === 'Mobile' ? 'mobile' : 'all')
  }, [category])

  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project category filter">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls="project-list"
          id={`tab-${tab.id}`}
          onClick={() => {
            setActiveTab(tab.id)
            if (tab.id === 'all') {
              router.push('/projects')
            } else {
              router.push(`/projects?category=${tab.label}`)
            }
          }}
          className={clsx(
            'relative rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
            activeTab === tab.id
              ? 'bg-primary-500 text-white dark:bg-primary-600 dark:text-white'
              : 'text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-100',
          )}
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                borderRadius: 9999,
                background: 'hsl(79, 78%, 36%)',
              }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}
