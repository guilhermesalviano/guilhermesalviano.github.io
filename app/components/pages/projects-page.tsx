import Footer from 'app/components/footer'
import { SiteHeader } from 'app/components/nav'
import { Projects } from 'app/components/projects'
import { JsonLd } from 'app/components/json-ld'
import { content } from 'app/lib/content'
import { projects } from 'app/lib/projects'
import { breadcrumbSchema, pageSchema, projectsItemListSchema } from 'app/lib/schema'
import { locales, pathFor, type Locale } from 'app/lib/site'

export function ProjectsPage({ locale }: { locale: Locale }) {
  const t = content[locale].projects
  const lang = locales[locale].htmlLang

  const schema = [
    pageSchema({
      type: 'CollectionPage',
      path: pathFor(locale, '/projects'),
      name: t.title,
      description: t.description,
      locale,
    }),
    projectsItemListSchema(projects, locale),
    breadcrumbSchema([
      { name: content[locale].breadcrumbHome, path: pathFor(locale, '') },
      { name: t.title, path: pathFor(locale, '/projects') },
    ]),
  ]

  return (
    <div
      lang={lang}
      className="content-frame mx-auto flex w-full max-w-[600px] flex-col"
    >
      <JsonLd data={schema} />
      <SiteHeader locale={locale} />
      <section>
        <h1 className="mb-4 text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.02em] text-heading">
          {t.h1}
        </h1>
        <p className="mb-[1.45rem] text-nav">{t.intro}</p>
        <Projects locale={locale} />
      </section>
      <Footer />
    </div>
  )
}
