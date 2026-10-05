import type { Metadata } from 'next'
import { baseUrl, languageAlternates, locales, pathFor, siteConfig, type Locale } from './site'

type Page = '' | '/about' | '/projects'

/**
 * Per-page metadata: self-referencing canonical plus reciprocal hreflang.
 * The root layout deliberately sets no canonical, so this is the only place
 * one is produced.
 */
export function pageMetadata({
  locale,
  page,
  title,
  description,
}: {
  locale: Locale
  page: Page
  title: string
  description: string
}): Metadata {
  const path = pathFor(locale, page)
  const url = `${baseUrl}${path === '/' ? '' : path}`

  // Next's title template only applies to child segments, so `app/page.tsx`
  // would otherwise render without the name. Set it absolutely and lead with
  // the name, which is the highest-value query for a personal site.
  const fullTitle = `${siteConfig.name} — ${title}`

  return {
    title: page === '' ? { absolute: fullTitle } : title,
    description,
    alternates: {
      canonical: path,
      languages: languageAlternates(page),
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: `${siteConfig.name} — ${siteConfig.headline}`,
      locale: locales[locale].ogLocale,
      alternateLocale: [locales[locale === 'en' ? 'pt' : 'en'].ogLocale],
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
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${baseUrl}/og.png`],
    },
  }
}
