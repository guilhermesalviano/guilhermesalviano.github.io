import Link from "next/link"
import { formatDate } from "app/utils/formatDate"
import { content } from "app/lib/content"
import { projects, type Project } from "app/lib/projects"
import { locales, type Locale } from "app/lib/site"

const UTM_BASE = "utm_source=portifolio&utm_medium=site&campaign=seemyprojects"

export function withUtm(url: string): string {
  const date = new Date().toISOString().split("T")[0]
  return `${url}?${UTM_BASE}&utm_content=${date}`
}

const rowDateClass =
  "text-sm font-ui tabular-nums whitespace-nowrap text-nav max-sm:w-fit"

function ProjectRow({
  project,
  locale,
}: {
  project: Project
  locale: Locale
}) {
  const { href, label, startDate, endDate, tags } = project
  const description =
    locale === "pt" ? project.descriptionPt ?? project.description : project.description
  const intl = locales[locale].intl
  const resolvedHref = href ? withUtm(href) : undefined
  const present = content[locale].projects.present
  const dateRange = endDate
    ? `${formatDate(startDate, false, intl)} – ${formatDate(endDate, false, intl)}`
    : `${formatDate(startDate, false, intl)} – ${present}`

  const body = (
    <div className="border-b border-line py-[0.72em]">
      <div className="flex items-baseline justify-between gap-x-5 max-sm:flex-col max-sm:gap-y-[0.15rem]">
        <span className="text-copy">{label}</span>
        <time dateTime={startDate} className={rowDateClass}>
          {dateRange}
        </time>
      </div>
      {description && (
        <p className="mb-0 mt-1 text-sm text-nav">{description}</p>
      )}
      {tags && tags.length > 0 && (
        <p className="mb-0 mt-1 text-[13px] font-ui text-nav">
          {tags.join(" · ")}
        </p>
      )}
    </div>
  )

  if (!resolvedHref) {
    return body
  }

  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={resolvedHref}
      className="no-underline"
    >
      {body}
    </Link>
  )
}

function ProjectList({ list, locale }: { list: Project[]; locale: Locale }) {
  return (
    <div className="dim-list border-t border-line">
      {list.map((project) => (
        <ProjectRow key={project.label} project={project} locale={locale} />
      ))}
    </div>
  )
}

export function Projects({ locale = "en" }: { locale?: Locale }) {
  const featured = projects.filter((project) => project.featured)
  const earlier = projects.filter((project) => !project.featured)

  return (
    <>
      <ProjectList list={featured} locale={locale} />
      <h2 className="mt-[3.1rem] mb-[1.2rem] text-[1.45rem] font-semibold leading-[1.4] tracking-[-0.02em] text-heading">
        {content[locale].projects.earlierTitle}
      </h2>
      <ProjectList list={earlier} locale={locale} />
    </>
  )
}
