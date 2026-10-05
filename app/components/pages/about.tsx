import Link from 'next/link'
import Footer from 'app/components/footer'
import { SiteHeader } from 'app/components/nav'
import { JsonLd } from 'app/components/json-ld'
import { content, faq } from 'app/lib/content'
import { experience } from 'app/lib/experience'
import { breadcrumbSchema, faqSchema, pageSchema } from 'app/lib/schema'
import { certifications, locales, pathFor, skills, type Locale } from 'app/lib/site'
import { formatDate } from 'app/utils/formatDate'

const h2Class =
  'mt-[3.1rem] mb-[1.2rem] text-[1.45rem] font-semibold leading-[1.4] tracking-[-0.02em] text-heading'

export function AboutPage({ locale }: { locale: Locale }) {
  const t = content[locale].about
  const questions = faq[locale]
  const lang = locales[locale].htmlLang
  const intl = locales[locale].intl
  const stack = content[locale].home
  const skillGroups = [
    { label: stack.stackAiLabel, items: skills.ai },
    { label: stack.stackCrmLabel, items: skills.marketingCloud },
    { label: stack.stackEngineeringLabel, items: skills.engineering },
  ]

  const schema = [
    pageSchema({
      type: 'AboutPage',
      path: pathFor(locale, '/about'),
      name: t.title,
      description: t.description,
      locale,
    }),
    faqSchema(questions.map((q) => ({ question: q.question, answer: q.answer }))),
    breadcrumbSchema([
      { name: content[locale].breadcrumbHome, path: pathFor(locale, '') },
      { name: t.title, path: pathFor(locale, '/about') },
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
        <h1 className="mb-6 text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.02em] text-heading">
          {t.h1}
        </h1>
        <p className="mb-[1.45rem]">{t.intro}</p>

        <h2 className={h2Class}>{t.experienceTitle}</h2>
        <p className="mb-[1.45rem]">{t.experience}</p>
        <ol className="mb-4 flex flex-col gap-5 list-none p-0">
          {experience.map((job) => {
            const role = locale === 'pt' ? job.rolePt ?? job.role : job.role
            const start = formatDate(job.startDate, false, intl)
            const end = job.endDate ? formatDate(job.endDate, false, intl) : t.present

            return (
              <li key={`${job.company}-${job.startDate}`} className="flex flex-col gap-1">
                <div className="flex max-sm:flex-col flex-row sm:space-x-2">
                  <p className="w-[160px] min-w-20 shrink-0 text-sm font-ui text-nav tabular-nums">
                    {start} – {end}
                  </p>
                  <p className="tracking-tight">
                    {job.company} · {role}
                  </p>
                </div>
                <p className="text-sm text-nav sm:ml-[168px]">
                  {locale === 'pt' ? job.summaryPt : job.summary}
                </p>
              </li>
            )
          })}
        </ol>

        <h2 className={h2Class}>{t.certificationsTitle}</h2>
        <ul className="mb-4 list-square pl-[1.1em] marker:text-nav/70 [&>li]:mb-1 [&>li]:pl-[0.15em]">
          {certifications.map((certification) => (
            <li key={certification.name}>
              {certification.name}{' '}
              <span className="text-sm font-ui text-nav">
                — {formatDate(`${certification.date}-01`, false, intl)}
                {certification.credentialId
                  ? ` · ${t.credentialId} ${certification.credentialId}`
                  : ''}
              </span>
            </li>
          ))}
        </ul>

        <h2 className={h2Class}>{t.educationTitle}</h2>
        <p className="mb-[1.45rem]">{t.education}</p>

        <h2 className={h2Class}>{t.skillsTitle}</h2>
        <ul className="mb-4 list-square pl-[1.1em] marker:text-nav/70 [&>li]:mb-1 [&>li]:pl-[0.15em]">
          {skillGroups.map(({ label, items }) => (
            <li key={label}>
              <strong className="font-medium">{label}:</strong> {items.join(', ')}
            </li>
          ))}
        </ul>

        <h2 className={h2Class}>{t.projectsTitle}</h2>
        <p className="mb-[1.45rem]">
          {t.projectsBlurb}{' '}
          <Link href={pathFor(locale, '/projects')}>{t.projectsLink}</Link>{' '}
          {t.projectsBlurbEnd}
        </p>

        <h2 className={h2Class}>{t.resumeTitle}</h2>
        <p className="mb-[1.45rem]">
          <a href="/resume.pdf" download>
            {t.resumeLink}
          </a>
        </p>

        <h2 className={h2Class}>{t.faqTitle}</h2>
        <dl className="mb-4">
          {questions.map(({ question, answer }) => (
            <div key={question} className="mb-4">
              <dt className="mb-1 font-medium">{question}</dt>
              <dd className="m-0 text-nav">{answer}</dd>
            </div>
          ))}
        </dl>
      </section>
      <Footer />
    </div>
  )
}
