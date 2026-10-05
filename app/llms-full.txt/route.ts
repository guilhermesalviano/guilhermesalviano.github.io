import { content, faq } from 'app/lib/content'
import { experience } from 'app/lib/experience'
import { projects } from 'app/lib/projects'
import { baseUrl, certifications, siteConfig, skills } from 'app/lib/site'

export const dynamic = 'force-static'

const home = content.en.home
const about = content.en.about
const projectsCopy = content.en.projects

const projectLines = projects
  .map((project) => {
    const range = project.endDate
      ? `${project.startDate} to ${project.endDate}`
      : `${project.startDate} to present`
    const parts = [`### ${project.label}`, `- Period: ${range}`]
    if (project.href) parts.push(`- URL: ${project.href}`)
    if (project.tags?.length) parts.push(`- Technologies: ${project.tags.join(', ')}`)
    if (project.description) parts.push('', project.description)
    return parts.join('\n')
  })
  .join('\n\n')

const experienceLines = experience
  .map((job) => {
    const end = job.endDate ? job.endDate.slice(0, 7) : 'present'
    return `- ${job.company} — ${job.role} (${job.startDate.slice(0, 7)} to ${end}): ${job.summary}`
  })
  .join('\n')

const certificationLines = certifications
  .map((c) => {
    const id = c.credentialId ? `, credential ID ${c.credentialId}` : ''
    return `- ${c.name} (${c.issuer}, ${c.date}${id})`
  })
  .join('\n')

const faqLines = faq.en
  .map(({ question, answer }) => `### ${question}\n\n${answer}`)
  .join('\n\n')

const body = `# ${siteConfig.name} — full site content

> ${home.description}

Source: ${baseUrl}
Author: ${siteConfig.name} (${siteConfig.alternateName})
Languages: English (this file), Brazilian Portuguese at ${baseUrl}/pt

## Home — ${baseUrl}

${siteConfig.name} — ${home.title}

${home.intro}

${home.whatIDo}

${home.whatIDoSecond}

${home.currently}

${home.cta}

### ${home.stackTitle}

- ${home.stackAiLabel}: ${skills.ai.join(', ')}
- ${home.stackCrmLabel}: ${skills.marketingCloud.join(', ')}
- ${home.stackEngineeringLabel}: ${skills.engineering.join(', ')}

### ${home.certificationsTitle}

${certificationLines}

## About — ${baseUrl}/about

${about.intro}

### ${about.experienceTitle}

${about.experience}

${experienceLines}

### ${about.certificationsTitle}

${certificationLines}

### ${about.educationTitle}

${about.education}

## ${about.faqTitle}

${faqLines}

## Projects — ${baseUrl}/projects

${projectsCopy.intro}

${projectLines}

## Contact

- GitHub: ${siteConfig.social.github}
- LinkedIn: ${siteConfig.social.linkedin}
- Résumé: ${baseUrl}/resume.pdf
`

export function GET() {
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
