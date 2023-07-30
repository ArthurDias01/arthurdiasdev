import './globals.css'
import 'dotenv/config'
import { Inter } from 'next/font/google'
import { cn } from '../utils/cn'
import { ThemeProvider } from '@/src/components/Providers/theme-provider'
import { Header } from '@/src/components/Header'
import { Footer } from '@/src/components/Footer'
import { Metadata } from 'next'
import { NavBar } from '@/src/components/NavBar'
import { ProfileBox } from '@/src/components/ProfileBox'
import { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react'
import ProfPic from '../../public/myProfile.jpg'

const inter = Inter({ subsets: ['latin'] })

const title =
  'Arthur Dias | Full Stack Developer | React, Next.js, Node.js | Portfolio'
const description =
  "Welcome to the portfolio of Arthur Dias, an experienced Full Stack Developer with expertise in React, Next.js, and Node.js. Explore impressive projects showcasing problem-solving abilities, user-friendly interfaces, and seamless integrations. Discover how Arthur's skills in TypeScript, GraphQL, AWS, and Firebase create efficient and scalable web applications. Check out his MSc in Aerospace Engineering background and certifications from RocketSeat."

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
    url: 'https://arthurdias.dev/',
    images: [
      {
        url: ProfPic.src,
        alt: 'Arthur Dias Profile Picture',
      },
    ],
    title,
  },
  twitter: {
    site: `https://arthurdias.dev/`,
    creator: '@ArthurODS_',
    description,
    title,
    images: [
      {
        url: ProfPic.src,
        alt: 'Arthur Dias Profile Picture',
      },
    ],
  },
} as Metadata

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          'flex flex-col transition-all duration-300',
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="flex w-full flex-row items-start justify-center gap-8 px-4 md:mx-auto">
            <div className="sticky top-[180px] hidden md:flex">
              <ProfileBox />
            </div>
            <div className="flex w-full max-w-4xl flex-col items-center justify-center pt-12 md:pt-32">
              <NavBar />
              {children}
              <Analytics />
            </div>
          </div>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
