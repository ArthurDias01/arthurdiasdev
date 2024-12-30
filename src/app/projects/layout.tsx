import { JobTitle } from '@/src/utils/client-constants'
import { Metadata } from 'next'
import { ReactNode } from 'react'

const title = `Arthur Dias | ${JobTitle} - Projects | React, React Native, Next.js, Node.js`
const description = `Explore the impressive projects of Arthur Dias, a skilled ${JobTitle} with expertise in React, Next.js, and Node.js. Discover captivating web applications, e-commerce sites, and dynamic dashboards crafted with attention to detail and user experience. Delve into his proficiency in TypeScript, GraphQL, AWS, and Firebase, ensuring efficient and scalable solutions. Check out Arthur's MSc in Aerospace Engineering and certifications from RocketSeat, backed by years of experience in problem-solving and agile development. Elevate your search rankings with a showcase of Arthur's remarkable contributions to the tech world.`

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
    url: 'https://arthurdias.dev/projects',
    images: [
      {
        url: '/myProfile.jpg',
      },
    ],
    title,
  },
  alternates: {
    canonical: 'https://arthurdias.dev/projects',
  },
} as Metadata

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main lang="en" className="mx-auto w-full">
      {children}
    </main>
  )
}
