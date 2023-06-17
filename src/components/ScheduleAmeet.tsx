'use client'
import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import tailwind from '@/tailwind.config'
import { useTheme } from 'next-themes'

export function ScheduleAmeet() {
  const { theme } = useTheme()

  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal('floatingButton', {
        calLink: 'arthurdias/30min',
        hideButtonIcon: true,
      })
      cal('ui', {
        theme: 'dark',
        styles: {
          body: {
            background:
              // @ts-ignore
              // eslint-disable-next-line prettier/prettier
              theme === 'dark' ? tailwind.theme!.extend!.colors.neutral[950] : tailwind.theme?.extend?.colors.neutral[500],
          },
          branding: {
            brandColor: '#000000',
          },
        },
        // @ts-ignore
        hideEventTypeDetails: false,
        // @ts-ignore
        layout: 'month_view',
      })
    })()
  }, [theme])

  return (
    <Cal
      calLink="arthurdias/30min"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
    />
  )
}
