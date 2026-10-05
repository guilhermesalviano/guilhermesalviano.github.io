import {
  allSkills,
  baseUrl,
  certifications,
  siteConfig,
  skills,
  type Locale,
  locales,
  pathFor,
} from './site'
import type { Project } from './projects'

const PERSON_ID = `${baseUrl}/#person`
const WEBSITE_ID = `${baseUrl}/#website`

const abs = (path: string) => `${baseUrl}${path === '/' ? '' : path}`

/** The human. Everything else in the graph points back at this node. */
export const personSchema = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: siteConfig.name,
  alternateName: siteConfig.alternateName,
  givenName: siteConfig.firstName,
  familyName: siteConfig.lastName,
  url: baseUrl,
  image: siteConfig.image,
  jobTitle: siteConfig.jobTitle,
  description: `Freelance AI Developer and certified Salesforce Marketing Cloud specialist, working in marketing technology since ${siteConfig.martechSince}. Builds LLM agents for CRM and marketing teams. Studies ${siteConfig.school.course.en} at ${siteConfig.school.name}.`,
  hasOccupation: [
    {
      '@type': 'Occupation',
      name: 'AI Developer',
      skills: [...skills.ai].join(', '),
    },
    {
      '@type': 'Occupation',
      name: 'Salesforce Marketing Cloud Developer',
      skills: [...skills.marketingCloud].join(', '),
    },
  ],
  hasCredential: certifications.map((certification) => ({
    '@type': 'EducationalOccupationalCredential',
    name: certification.name,
    credentialCategory: 'certification',
    dateCreated: certification.date,
    recognizedBy: { '@type': 'Organization', name: certification.issuer },
    ...(certification.credentialId ? { identifier: certification.credentialId } : {}),
  })),
  knowsAbout: allSkills,
  knowsLanguage: [
    { '@type': 'Language', name: 'Portuguese', alternateName: 'pt-BR' },
    { '@type': 'Language', name: 'English', alternateName: 'en' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: siteConfig.location.country,
  },
  sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
}

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: baseUrl,
  name: `${siteConfig.name} — ${siteConfig.headline}`,
  description:
    'Portfolio of Guilherme Salviano, a freelance AI Developer and Salesforce Marketing Cloud specialist based in Brazil.',
  publisher: { '@id': PERSON_ID },
  inLanguage: ['en-US', 'pt-BR'],
}

type PageSchemaOptions = {
  type: 'ProfilePage' | 'AboutPage' | 'CollectionPage'
  path: string
  name: string
  description: string
  locale: Locale
}

export function pageSchema({ type, path, name, description, locale }: PageSchemaOptions) {
  return {
    '@type': type,
    '@id': `${abs(path)}#page`,
    url: abs(path),
    name,
    description,
    inLanguage: locales[locale].hreflang,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PERSON_ID },
    ...(type === 'ProfilePage' ? { mainEntity: { '@id': PERSON_ID } } : {}),
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: abs(item.path),
    })),
  }
}

export function faqSchema(qas: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: qas.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}

/**
 * Each project as a machine-readable entry. Projects with a repository or live
 * URL become `SoftwareSourceCode`; the rest stay generic `CreativeWork`.
 */
export function projectsItemListSchema(list: Project[], locale: Locale) {
  return {
    '@type': 'ItemList',
    '@id': `${abs(pathFor(locale, '/projects'))}#projects`,
    name: locale === 'pt' ? 'Projetos de Guilherme Salviano' : 'Projects by Guilherme Salviano',
    numberOfItems: list.length,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    itemListElement: list.map((project, index) => {
      const description =
        locale === 'pt' ? project.descriptionPt ?? project.description : project.description

      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': project.href ? 'SoftwareSourceCode' : 'CreativeWork',
          name: project.label,
          ...(description ? { description } : {}),
          ...(project.href ? { url: project.href } : {}),
          dateCreated: project.startDate,
          ...(project.endDate ? { dateModified: project.endDate } : {}),
          ...(project.tags?.length
            ? {
                keywords: project.tags.join(', '),
                programmingLanguage: project.tags,
              }
            : {}),
          author: { '@id': PERSON_ID },
        },
      }
    }),
  }
}
