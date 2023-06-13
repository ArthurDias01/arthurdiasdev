import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { cn } from '../utils/cn'
import Providers from './Provider'
import ThemeSwitcher from '@/src/components/ThemeSwitcher'
import { Footer } from '../components/Footer'
import { Metadata } from 'next'

export const metadata = {
  title: 'Arthur Dias - Full Stack Software Engineer',
  description: 'Full Stack Software Engineer - Arthur Dias public cv and portfolio website',
  manifest: '/site.webmanifest',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    android: "/android-chrome-192x192.png",
    androidLarge: "/android-chrome-512x512.png",
  },

} as Metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex flex-col transition-colors")}>
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
