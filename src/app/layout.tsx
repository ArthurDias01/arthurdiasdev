import { Container } from "@/src/components/editorial/Container";
import { SiteFooter } from "@/src/components/editorial/SiteFooter";
import { SiteNav } from "@/src/components/editorial/SiteNav";
import { ThemeProvider } from "@/src/components/Providers/theme-provider";
import { SITE } from "@/src/lib/site";
import { cn } from "@/src/utils/cn";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "dotenv/config";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import type { ReactNode } from "react";
import type { ProfilePage, WithContext } from "schema-dts";
import ProfPic from "../../public/myProfile.jpg";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const siteName = SITE.name;
const title = `${siteName} — Engineer, product builder, entrepreneur`;
const description =
  "Arthur Dias builds software, products, and companies around problems difficult enough to matter. AI, backend systems, and thoughtful software design.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "Arthur Dias",
    "Software Engineer",
    "Product Builder",
    "Entrepreneur",
    "AI",
    "Backend Systems",
    "São Paulo",
  ],
  authors: [{ name: siteName, url: SITE.url }],
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
    siteName,
    description,
    url: SITE.url,
    images: [{ url: ProfPic.src, alt: `${siteName} — portrait` }],
    title,
  },
  twitter: {
    site: SITE.url,
    creator: "@ArthurODS_",
    description,
    title,
    images: [{ url: ProfPic.src, alt: `${siteName} — portrait` }],
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
    { media: "(prefers-color-scheme: light)", color: "#F9F8F6" },
    { media: "(prefers-color-scheme: dark)", color: "#141210" },
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
    jobTitle: "Engineer, Product Builder, Entrepreneur",
    url: SITE.url,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    sameAs: [SITE.linkedin, SITE.twitter, SITE.github],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn("scroll-smooth", GeistSans.variable, serif.variable)}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-body text-ink antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[10000] focus:bg-copper focus:px-4 focus:py-2 focus:text-accent-foreground focus:outline-none"
          >
            Skip to main content
          </a>
          <SiteNav />
          <main id="main-content" role="main">
            <Container>{children}</Container>
          </main>
          <SiteFooter />
          <SpeedInsights />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
