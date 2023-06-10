import './globals.css'
import { Inter } from 'next/font/google'
import { TopButtons } from '@/src/components/TopButtons'
const inter = Inter({ subsets: ['latin'] })
import { cn } from '../utils/cn'

export const metadata = {
  title: 'Arthur Dias - Full Stack Software Engineer',
  description: 'Full Stack Software Engineer - Arthur Dias public cv and portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex flex-col")}>
        <TopButtons />
        {children}
        <div className="flex flex-row w-full bg-primary-500">FOOTER</div>
      </body>
    </html>
  )
}
