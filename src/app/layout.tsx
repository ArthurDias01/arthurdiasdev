import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { ProfileBox } from "@/src/components/ProfileBox";
import { ThemeProvider } from "@/src/components/Providers/theme-provider";
import { JobTitle } from "@/src/utils/client-constants";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "dotenv/config";
import { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { ReactNode } from "react";
import { ProfilePage, WithContext } from "schema-dts";
import ProfPic from "../../public/myProfile.jpg";
import { cn } from "../utils/cn";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteName = "Arthur Dias";
const title = `${siteName} | ${JobTitle} | React, Next.js, Node.js | Portfolio`;
const description = `Portfolio of Arthur Dias, ${JobTitle} with 6+ years of experience. Full stack, mobile, and product engineering. React, Next.js, Node.js, TypeScript. MSc Aerospace Engineering. Based in São Paulo, Brazil.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://arthurdias.dev/"),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "Arthur Dias",
    "Full Stack Engineer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "São Paulo",
  ],
  authors: [{ name: siteName, url: "https://arthurdias.dev" }],
  creator: siteName,
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: title,
    description,
    url: "https://arthurdias.dev/",
    images: [{ url: ProfPic.src, alt: `${siteName} – ${JobTitle}` }],
    title,
  },
  twitter: {
    site: "https://arthurdias.dev/",
    creator: "@ArthurODS_",
    description,
    title,
    images: [{ url: ProfPic.src, alt: `${siteName} – ${JobTitle}` }],
    card: "summary_large_image",
  },
  alternates: { canonical: "/" },
  robots: {
    "max-image-preview": "large",
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "portfolio",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7f9" },
    { media: "(prefers-color-scheme: dark)", color: "#23272e" },
  ],
};

const jsonLd: WithContext<ProfilePage> = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: title,
  image: ProfPic.src,
  description,
  mainEntity: {
    "@type": "Person",
    name: siteName,
    alternateName: "Arthur Octavio Dias dos Santos",
    jobTitle: JobTitle,
    url: "https://arthurdias.dev/",
    email: "arthursantos01@gmail.com",
    telephone: "+1-980-269-9602",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Federal University of Uberlândia",
        url: "https://ufu.br/",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Aeronautics Institute of Technology",
        url: "https://www.pgfis.ita.br/en",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Embry-Riddle Aeronautical University",
        url: "https://erau.edu/",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/arthur-dias/",
      "https://twitter.com/ArthurODS_",
      "https://github.com/ArthurDias01",
      "https://www.instagram.com/arthurddias/",
    ],
    award: ["Dean's List (Spring - 2014) Embry-Riddle Aeronautical University"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          syne.variable,
          dmSans.variable,
          dmSans.className,
          "grain min-h-screen antialiased transition-colors",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[10000] focus:rounded-md focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            Skip to main content
          </a>
          <Header />
          <div className="mx-auto flex w-full max-w-6xl flex-row items-start justify-center gap-10 px-4 py-10 md:py-14 lg:gap-14 pb-24">
            <aside
              className="sticky top-24 hidden w-full shrink-0 md:block md:max-w-[332px]"
              aria-label="Profile and contact"
            >
              <ProfileBox />
            </aside>
            <main
              id="main-content"
              className="relative w-full min-w-0 max-w-3xl flex-1 border-l-0 pl-0 lg:border-l lg:border-primary-500/20 lg:pl-10 dark:lg:border-primary-400/20"
              role="main"
            >
              {children}
            </main>
          </div>
          <SpeedInsights />
        </ThemeProvider>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
