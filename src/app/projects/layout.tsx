import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Arthur Dias - Full Stack Software Engineer | Projects',
  description:
    'Full Stack Software Engineer - Arthur Dias public cv and portfolio website',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    android: '/android-chrome-192x192.png',
    androidLarge: '/android-chrome-512x512.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Arthur Dias - Full Stack Software Engineer | Projects',
    description: 'Arthur Dias public cv and portfolio website',
    url: 'https://arthurdias.dev/projects',
    images: [
      {
        url: '/myProfile.jpg',
      },
    ],
    title: 'Arthur Dias - Full Stack Software Engineer | Projects',
  },
} as Metadata

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main lang="en" className="mx-auto w-full">
      {children}
    </main>
  )
}
