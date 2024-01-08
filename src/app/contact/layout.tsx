import { Metadata } from 'next'
import { ReactNode } from 'react'

const title =
  'Arthur Dias | Full Stack Software Engineer - Contact | React, React Native, Next.js, Node.js'
const description =
  "Are you interested in hiring a skilled Full Stack Software Engineer with expertise in React, Next.js, and Node.js? Let's talk! Here you find my available contact methods and if you prefer, you can schedule a meeting for your convenience."

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
    url: 'https://arthurdias.dev/contact',
    images: [
      {
        url: '/myProfile.jpg',
      },
    ],
    title,
  },
  alternates: {
    canonical: 'https://arthurdias.dev/contact',
  },
} as Metadata

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main lang="en" className="mx-auto w-full">
      {children}
    </main>
  )
}
