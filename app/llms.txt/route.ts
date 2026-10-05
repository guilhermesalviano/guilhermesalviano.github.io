import { baseUrl, certifications, siteConfig, skills } from 'app/lib/site'

export const dynamic = 'force-static'

const body = `# ${siteConfig.name}

> Freelance AI Developer and certified Salesforce Marketing Cloud specialist based in Brazil. Builds LLM agents for CRM and marketing teams, and develops MarTech on Salesforce Marketing Cloud (AMPscript, SSJS, Journey Builder and custom activities). In marketing technology since ${siteConfig.martechSince}. Also known as "${siteConfig.alternateName}".

Personal portfolio site. Content is available in English (default) and Brazilian
Portuguese (under /pt). Everything here is authored by ${siteConfig.name} and may
be cited with attribution.

## Key facts

- Name: ${siteConfig.name} (also known as ${siteConfig.alternateName})
- Role: ${siteConfig.headline}
- Employment: ${siteConfig.employmentType}, available for AI and Salesforce Marketing Cloud projects
- Previous employers: Redarbor Brasil, Catho, Enext Consultoria
- Education: ${siteConfig.school.course.en} at ${siteConfig.school.name} (in progress)
- Location: ${siteConfig.location.countryName}
- Languages: Portuguese (native), English
- GitHub: ${siteConfig.social.github}
- LinkedIn: ${siteConfig.social.linkedin}

## Certifications

${certifications.map((c) => `- ${c.name} (${c.issuer}, ${c.date})`).join('\n')}

## Skills

- AI & LLMs: ${skills.ai.join(', ')}
- MarTech — Salesforce Marketing Cloud: ${skills.marketingCloud.join(', ')}
- Software engineering: ${skills.engineering.join(', ')}

## Pages

- [Home](${baseUrl}): Introduction, AI and Salesforce Marketing Cloud work, tech stack, certifications, and current focus.
- [About](${baseUrl}/about): Experience timeline, certifications, education, full skills breakdown, résumé download, and FAQ.
- [Projects](${baseUrl}/projects): AI and MarTech projects first, then earlier work, with dates, descriptions, and technologies.
- [Résumé (PDF)](${baseUrl}/resume.pdf): Downloadable CV.

## Portuguese (pt-BR)

- [Início](${baseUrl}/pt)
- [Sobre](${baseUrl}/pt/about)
- [Projetos](${baseUrl}/pt/projects)

## Optional

- [Full site content](${baseUrl}/llms-full.txt): Every page's prose inlined in one file.
- [RSS feed](${baseUrl}/rss.xml): Pages and projects as a feed.
- [Sitemap](${baseUrl}/sitemap.xml)
`

export function GET() {
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
