type Schema = Record<string, unknown>

/**
 * Emits real `<script type="application/ld+json">`. Next's `metadata.other`
 * cannot do this — it renders `<meta>` tags, which crawlers ignore for
 * structured data.
 */
export function JsonLd({ data }: { data: Schema | Schema[] }) {
  const graph = Array.isArray(data) ? data : [data]
  const payload = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  })
    // Prevent the JSON from terminating the surrounding <script> element.
    .replace(/</g, '\\u003c')

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: payload }}
    />
  )
}
