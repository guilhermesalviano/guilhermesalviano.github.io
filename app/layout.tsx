import type { Metadata, Viewport } from 'next'
import { JsonLd } from './components/json-ld'
import { personSchema, websiteSchema } from './lib/schema'
import { allSkills, baseUrl, siteConfig } from './lib/site'
import './global.css'

const description =
  'Guilherme Salviano — freelance AI Developer and Salesforce Marketing Cloud specialist for MarTech: LLM agents, AMPscript, SSJS, Journey Builder and custom activities. Based in Brazil.'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.headline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: baseUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'technology',
  keywords: [
    'Guilherme Salviano',
    'Guibs',
    'AI Developer',
    'AI agent developer',
    'LLM developer',
    'freelance AI developer',
    'Salesforce Marketing Cloud developer',
    'SFMC developer',
    'freelance SFMC developer',
    'MarTech developer',
    'AMPscript developer',
    'Journey Builder custom activity',
    'marketing automation developer',
    'desenvolvedor de IA',
    'desenvolvedor Salesforce Marketing Cloud',
    'especialista Salesforce Marketing Cloud',
    ...allSkills,
  ],
  // Canonical URLs are set per page — a canonical here would be inherited by
  // every route and make them all claim the home page URL.
  alternates: {
    types: {
      'application/rss+xml': `${baseUrl}/rss.xml`,
    },
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.headline}`,
    description,
    url: baseUrl,
    siteName: `${siteConfig.name} — ${siteConfig.headline}`,
    locale: 'en_US',
    alternateLocale: ['pt_BR'],
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.headline}`,
        type: 'image/png',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.headline}`,
    description,
    images: [`${baseUrl}/og.png`],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1b1a19' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <JsonLd data={[personSchema, websiteSchema]} />
        <main className="min-h-svh p-[clamp(1.25rem,3.4vw,3.25rem)] max-sm:px-5 max-sm:pt-10 max-sm:pb-5">
          {children}
        </main>
      </body>
    </html>
  )
}
