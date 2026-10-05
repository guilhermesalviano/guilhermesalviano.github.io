export const baseUrl = 'https://imguibs.dev'

export const siteConfig = {
  baseUrl,
  name: 'Guilherme Salviano',
  alternateName: 'Guibs',
  firstName: 'Guilherme',
  lastName: 'Salviano',
  jobTitle: 'AI Developer',
  headline: 'AI Developer & Salesforce Marketing Cloud Specialist',
  image: 'https://avatars.githubusercontent.com/u/36766110?v=4',
  employmentType: 'Freelance',
  /** In MarTech since the 2018 CRM apprenticeship at Catho. */
  martechSince: 2018,
  school: {
    name: 'Descomplica',
    url: 'https://descomplica.com.br/',
    course: { en: 'Internet Systems (Sistemas para Internet)', pt: 'Sistemas para Internet' },
  },
  location: {
    country: 'BR',
    countryName: 'Brazil',
  },
  social: {
    github: 'https://github.com/guilhermesalviano',
    linkedin: 'https://www.linkedin.com/in/guilherme-salviano/',
  },
} as const

/** Skills used for `knowsAbout` in JSON-LD and for the visible tech lists. */
export const skills = {
  ai: [
    'LLM agents',
    'Tool / function calling',
    'Agent memory',
    'Prompt engineering',
    'OpenRouter',
    'Ollama',
    'NVIDIA NIM',
    'Bun',
  ],
  marketingCloud: [
    'Salesforce Marketing Cloud',
    'AMPscript',
    'Server-Side JavaScript (SSJS)',
    'Journey Builder',
    'Journey Builder Custom Activities',
    'Email Studio',
    'Content Builder',
    'Automation Studio',
    'Data Extensions',
    'SQL',
    'Segment',
  ],
  engineering: [
    'TypeScript',
    'Node.js',
    'Go',
    'AWS (Lambda, SQS, EventBridge)',
    'RabbitMQ',
    'Docker',
    'Terraform',
    'React',
    'Next.js',
  ],
} as const

export const allSkills: string[] = [...skills.ai, ...skills.marketingCloud, ...skills.engineering]

/**
 * Short stack list shown on the home page — grouped, high level. The full
 * `skills` lists stay in the about page, JSON-LD and meta keywords.
 */
export const stack = [
  'AI agents & LLMs',
  'Salesforce Marketing Cloud',
  'AMPscript & SSJS',
  'Journey Builder',
  'SQL',
  'TypeScript',
  'Node.js',
  'Go',
  'React & Next.js',
  'AWS',
  'Docker & Terraform',
  'Segment',
]

export type Certification = {
  name: string
  issuer: string
  /** `YYYY-MM` */
  date: string
  credentialId?: string
}

/** Rendered on the home and about pages and emitted as `hasCredential` in JSON-LD. */
export const certifications: Certification[] = [
  {
    name: 'Salesforce Certified Marketing Cloud Administrator',
    issuer: 'Salesforce',
    date: '2021-07',
    credentialId: '22349555',
  },
  {
    name: 'Salesforce Certified Marketing Cloud Developer',
    issuer: 'Salesforce',
    date: '2021-05',
    credentialId: '22176479',
  },
  {
    name: 'Salesforce Certified Marketing Cloud Email Specialist',
    issuer: 'Salesforce',
    date: '2021-01',
    credentialId: '21826055',
  },
  {
    name: 'Segment Certified Marketer',
    issuer: 'Twilio Segment',
    date: '2025-02',
  },
]

export type Locale = 'en' | 'pt'

/** Locale metadata used for hreflang, OG locales and `<div lang>` wrappers. */
export const locales = {
  en: { hreflang: 'en-US', ogLocale: 'en_US', htmlLang: 'en', intl: 'en-US' },
  pt: { hreflang: 'pt-BR', ogLocale: 'pt_BR', htmlLang: 'pt-BR', intl: 'pt-BR' },
} as const

/** Path for a logical page in a given locale. English lives at the root. */
export function pathFor(locale: Locale, page: '' | '/about' | '/projects'): string {
  return locale === 'en' ? page || '/' : `/pt${page}`
}

/**
 * hreflang alternates for a page, in the shape Next's `alternates.languages`
 * expects. Every page references both locales plus `x-default`.
 */
export function languageAlternates(page: '' | '/about' | '/projects') {
  return {
    'en-US': pathFor('en', page),
    'pt-BR': pathFor('pt', page),
    'x-default': pathFor('en', page),
  }
}

/** Absolute URL for a site-relative path. The home page has no trailing slash. */
export function absoluteUrl(path: string): string {
  return `${baseUrl}${path === '/' ? '' : path}`
}
