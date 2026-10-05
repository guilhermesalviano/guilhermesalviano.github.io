import { baseUrl, siteConfig } from 'app/lib/site'
import { content } from 'app/lib/content'
import { projects } from 'app/lib/projects'

export const dynamic = 'force-static'

/** Escapes the five XML predefined entities. A raw `&` makes the feed unparseable. */
function xml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/** RSS 2.0 requires RFC-822 dates, not ISO `YYYY-MM-DD`. */
function rfc822(date: string): string {
  return new Date(`${date}T00:00:00Z`).toUTCString()
}

export async function GET() {
  const title = `${siteConfig.name} — ${siteConfig.headline}`
  const description = content.en.home.description
  const buildDate = new Date().toUTCString()

  const pages = [
    { path: '/about', ...content.en.about, date: rfc822('2026-01-01') },
    { path: '/projects', ...content.en.projects, date: rfc822('2026-01-01') },
  ]

  const pageItems = pages.map(
    ({ path, title: itemTitle, description: itemDescription, date }) => `
    <item>
      <title>${xml(itemTitle)}</title>
      <link>${baseUrl}${path}</link>
      <guid isPermaLink="true">${baseUrl}${path}</guid>
      <description>${xml(itemDescription)}</description>
      <pubDate>${date}</pubDate>
    </item>`
  )

  const projectItems = projects
    .filter((project) => project.href && project.description)
    .map(
      (project) => `
    <item>
      <title>${xml(project.label)}</title>
      <link>${xml(project.href!)}</link>
      <guid isPermaLink="true">${xml(project.href!)}</guid>
      <description>${xml(project.description!)}</description>
      ${project.tags?.map((tag) => `<category>${xml(tag)}</category>`).join('\n      ') ?? ''}
      <pubDate>${rfc822(project.startDate)}</pubDate>
    </item>`
    )

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xml(title)}</title>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${xml(description)}</description>
    <language>en-US</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
${[...pageItems, ...projectItems].join('')}
  </channel>
</rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}
