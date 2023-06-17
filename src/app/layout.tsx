import './globals.css'
import { Inter } from 'next/font/google'
import { cn } from '../utils/cn'
import Providers from './Provider'
import ThemeSwitcher from '@/src/components/ThemeSwitcher'
import { Footer } from '../components/Footer'
import { Metadata } from 'next'
import { NavBar } from '../components/NavBar'
import { ProfileBox } from '../components/ProfileBox'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arthur Dias - Full Stack Software Engineer',
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
        <Providers>
          <ThemeSwitcher />
          <div className="flex w-full flex-row items-start justify-center gap-8 px-4 md:mx-auto">
            <div className="sticky top-48 hidden md:flex">
              <ProfileBox />
            </div>
            <section className="scaleUp flex w-full max-w-4xl flex-col items-center justify-center pt-12 md:pt-32">
              <NavBar />
              {children}
            </section>
          </div>
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
