import Link from 'next/link'
import { content } from 'app/lib/content'
import { pathFor, siteConfig, type Locale } from 'app/lib/site'

const navLinkClass =
  'no-underline transition-colors hover:text-nav-hover focus:text-nav-hover'

/**
 * Single header used on every page: serif site name on the left (an `h1` on
 * the home page, a plain link elsewhere) and small sans nav links on the
 * right, leerob.io style.
 */
export function SiteHeader({
  locale = 'en',
  nameAs = 'p',
}: {
  locale?: Locale
  nameAs?: 'h1' | 'p'
}) {
  const t = content[locale]
  const other: Locale = locale === 'en' ? 'pt' : 'en'
  const Name = nameAs

  return (
    <header className="mb-10 flex items-baseline justify-between gap-6">
      <Name className="text-[clamp(2.2rem,3.5vw,2.65rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-heading">
        <Link
          href={pathFor(locale, '')}
          className="no-underline transition-opacity duration-200 hover:opacity-70"
        >
          {siteConfig.name}
        </Link>
      </Name>
      <nav className="flex shrink-0 items-baseline gap-4 text-sm font-ui tracking-[0.01em] text-nav">
        <Link href={pathFor(locale, '/projects')} className={navLinkClass}>
          {t.nav.projects}
        </Link>
        <Link href={pathFor(locale, '/about')} className={navLinkClass}>
          {t.nav.about}
        </Link>
        <Link
          href={pathFor(other, '')}
          hrefLang={other === 'pt' ? 'pt-BR' : 'en-US'}
          lang={other === 'pt' ? 'pt-BR' : 'en-US'}
          className={navLinkClass}
        >
          {t.switchLocale}
        </Link>
      </nav>
    </header>
  )
}
