import './globals.css'
import { Inter } from 'next/font/google'
import { cn } from '../utils/cn'
import { ThemeProvider } from '@/src/components/Providers/theme-provider'
import { Header } from '@/src/components/Header'
import { Footer } from '../components/Footer'
import { Metadata } from 'next'
import { NavBar } from '../components/NavBar'
import { ProfileBox } from '../components/ProfileBox'
import { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react'
import ProfPic from '../../public/myProfile.jpg'

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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Arthur Dias - Full Stack Software Engineer',
    description: 'Arthur Dias public cv and portfolio website',
    url: 'https://arthurdias.dev/',
    images: [
      {
        url: ProfPic.src,
        alt: 'Arthur Dias Profile Picture',
      },
    ],
    title: 'Arthur Dias - Full Stack Software Engineer',
  },
  twitter: {
    site: `https://arthurdias.dev/`,
    creator: '@ArthurODS_',
    description: `Arthur Dias - Full Stack Software Engineer`,
    title: `Arthur Dias - Full Stack Software Engineer`,
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
            <section className="flex w-full max-w-4xl flex-col items-center justify-center pt-12 md:pt-32">
              <NavBar />
              {children}
              <Analytics />
            </section>
          </div>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
