import { Metadata } from 'next'
import { ReactNode } from 'react'

const title =
  'Arthur Dias | Full Stack Software Engineer - About | React, React Native, Next.js, Node.js'
const description =
  'Wanna check out my resume? Here you find my education and work experience.'

export const metadata = {
  title,
  description,
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
    siteName: title,
    description,
    url: 'https://arthurdias.dev/about',
    images: [
      {
        url: '/myProfile.jpg',
      },
    ],
    title,
  },
  alternates: {
    canonical: 'https://www.arthurdias.dev/about',
  },
} as Metadata

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main lang="en" className="mx-auto w-full">
      {children}
    </main>
  )
}
