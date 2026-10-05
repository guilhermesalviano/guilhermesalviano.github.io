import Link from 'next/link'
import { Bio } from 'app/components/bio'
import Footer from 'app/components/footer'
import { SiteHeader } from 'app/components/nav'
import { JsonLd } from 'app/components/json-ld'
import { withUtm } from 'app/components/projects'
import { content } from 'app/lib/content'
import { breadcrumbSchema, pageSchema } from 'app/lib/schema'
import { certifications, locales, pathFor, siteConfig, stack, type Locale } from 'app/lib/site'
import { projects } from 'app/lib/projects'
import { formatDate } from 'app/utils/formatDate'

const headingClass =
  'mb-[1.2rem] text-[1.45rem] font-semibold leading-[1.4] tracking-[-0.02em] text-heading'
const rowDateClass =
  'text-sm font-ui tabular-nums whitespace-nowrap text-nav max-sm:w-fit'

export function HomePage({ locale }: { locale: Locale }) {
  const t = content[locale].home
  const lang = locales[locale].htmlLang
  const intl = locales[locale].intl

  const schema = [
    pageSchema({
      type: 'ProfilePage',
      path: pathFor(locale, ''),
      name: `${siteConfig.name} — ${t.title}`,
      description: t.description,
      locale,
    }),
    breadcrumbSchema([{ name: content[locale].breadcrumbHome, path: pathFor(locale, '') }]),
  ]

  const defaultBio = <p className="mb-0">{t.intro}</p>
  const longBio = (
    <>
      <p className="mb-[1.45rem]">{t.intro}</p>
      <p className="mb-[1.45rem]">{t.whatIDo}</p>
      <p className="mb-[1.45rem]">{t.whatIDoSecond}</p>
      <p className="mb-[1.45rem]">{t.currently}</p>
      <p className="mb-0">{t.cta}</p>
    </>
  )

  const featured = projects.filter((project) => project.featured)

  return (
    <div
      lang={lang}
      className="content-frame mx-auto flex w-full max-w-[600px] flex-col"
    >
      <JsonLd data={schema} />
      <SiteHeader locale={locale} nameAs="h1" />

      <Bio
        label={t.bioLabel}
        defaultLabel={t.bioDefault}
        longLabel={t.bioLong}
        defaultBio={defaultBio}
        longBio={longBio}
      />

      <section aria-labelledby="stack-heading" className="mb-[3.1rem]">
        <h2 id="stack-heading" className={headingClass}>
          {t.stackTitle}
        </h2>
        <ul className="mb-0 mt-[0.8em] list-square pl-[1.1em] marker:text-nav/70 sm:columns-2 sm:gap-10 [&>li]:mb-[0.2rem] [&>li]:break-inside-avoid [&>li]:pl-[0.15em]">
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="certifications-heading" className="mb-[3.1rem]">
        <h2 id="certifications-heading" className={headingClass}>
          {t.certificationsTitle}
        </h2>
        <div className="mt-[0.85em] border-t border-line">
          {certifications.map((certification) => (
            <div
              key={certification.name}
              className="flex items-baseline justify-between gap-x-5 border-b border-line py-[0.72em] max-sm:flex-col max-sm:gap-y-[0.15rem]"
            >
              <span>{certification.name}</span>
              <time dateTime={certification.date} className={rowDateClass}>
                {formatDate(`${certification.date}-01`, false, intl)}
              </time>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading" className={headingClass}>
          {t.projectsTitle}
        </h2>
        <div className="dim-list mt-[0.85em] border-t border-line">
          {featured.map((project) => {
            const external = project.href ? withUtm(project.href) : undefined
            return (
              <a
                key={project.label}
                href={external ?? pathFor(locale, '/projects')}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="flex items-baseline justify-between gap-x-5 border-b border-line py-[0.72em] no-underline max-sm:flex-col max-sm:gap-y-[0.15rem]"
              >
                <span className="text-copy">{project.label}</span>
                <time dateTime={project.startDate} className={rowDateClass}>
                  {formatDate(project.startDate, false, intl)}
                </time>
              </a>
            )
          })}
        </div>
        <p className="mb-0 mt-4">
          <Link href={pathFor(locale, '/projects')}>{t.allProjects}</Link>
        </p>
      </section>

      <Footer />
    </div>
  )
}
