import type { MetadataRoute } from 'next'
import { absoluteUrl, baseUrl, languageAlternates, pathFor } from 'app/lib/site'

// Re-exported for the existing `import { baseUrl } from 'app/sitemap'` callers.
export { baseUrl }

export const dynamic = 'force-static'

// Stable build-time timestamp so the sitemap does not churn on every deploy.
const lastModified = new Date().toISOString().split('T')[0]

const pages = [
  { page: '' as const, priority: 1.0, changeFrequency: 'monthly' as const },
  { page: '/projects' as const, priority: 0.9, changeFrequency: 'monthly' as const },
  { page: '/about' as const, priority: 0.8, changeFrequency: 'yearly' as const },
]

/**
 * Next writes sitemap alternates verbatim, without resolving them against
 * `metadataBase` the way it does for `<link rel="alternate">`. Sitemap
 * hreflang hrefs must be absolute or crawlers drop them, so expand them here.
 */
function absoluteLanguageAlternates(page: '' | '/about' | '/projects') {
  return Object.fromEntries(
    Object.entries(languageAlternates(page)).map(([hreflang, path]) => [
      hreflang,
      absoluteUrl(path),
    ])
  )
}

export default function sitemap(): MetadataRoute.Sitemap {
  return (['en', 'pt'] as const).flatMap((locale) =>
    pages.map(({ page, priority, changeFrequency }) => {
      const path = pathFor(locale, page)
      return {
        url: absoluteUrl(path),
        lastModified,
        changeFrequency,
        // Portuguese pages are translations, so they rank slightly below.
        priority: locale === 'en' ? priority : priority - 0.1,
        alternates: { languages: absoluteLanguageAlternates(page) },
      }
    })
  )
}
