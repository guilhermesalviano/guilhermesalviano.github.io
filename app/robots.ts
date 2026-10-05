import type { MetadataRoute } from 'next'
import { baseUrl } from 'app/lib/site'

export const dynamic = 'force-static'

/**
 * Crawlers used by search and generative answer engines. They are already
 * covered by the `*` rule; naming them is an explicit opt-in so tooling that
 * assumes default-deny still indexes and cites this site.
 */
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  'CCBot',
  'meta-externalagent',
  'Amazonbot',
  'DuckAssistBot',
  'cohere-ai',
  'Bytespider',
  'YouBot',
  'Diffbot',
  'Timpibot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: aiCrawlers, allow: '/' },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
