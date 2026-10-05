<i>"Como pode um cara escrever uma coisa que eu não entenda? 
 Não tem como! Eu vou ler aquela merda até entender!"</i> 
<p align="right"><b>— Clóvis de Barros Filho</b></p>

# guilhermesalviano.github.io

Personal portfolio site for Guilherme Salviano, built with Next.js (App Router).

- Home, Projects, and About pages, in English (`/`) and Brazilian Portuguese (`/pt`)
- Static export (`output: 'export'`), deployed to GitHub Pages
- Tailwind v4, Geist font

## SEO & GEO

- **Structured data** — a `Person` / `WebSite` `@graph` in the root layout, plus
  `ProfilePage`, `AboutPage`, `CollectionPage`, `ItemList`, `FAQPage` and
  `BreadcrumbList` per route. Built in `app/lib/schema.ts` and rendered as real
  `<script type="application/ld+json">` by `app/components/json-ld.tsx`.
- **Canonicals & hreflang** — `app/lib/metadata.ts` gives every page a
  self-referencing canonical and reciprocal `en-US` / `pt-BR` / `x-default`
  alternates. The root layout deliberately sets no canonical, since layout
  metadata is inherited by every child route.
- **`llms.txt` / `llms-full.txt`** — route handlers that generate their content
  from `app/lib/content.ts`, so the AI-crawler summary cannot drift from the site.
- **`robots.txt`** — explicit allow rules for search and generative-answer crawlers.
- **`sitemap.xml`** — both locales with `xhtml:link` alternates and priorities.
- **`rss.xml`** — pages plus every project, XML-escaped with RFC-822 dates.

Copy for both locales lives in `app/lib/content.ts` and project data in
`app/lib/projects.ts`, so the visible pages, the JSON-LD, the RSS feed and the
`llms*.txt` files all read from one source.

Note: routes that emit non-HTML are named with their extension (`app/og.png/`,
`app/rss.xml/`, `app/llms.txt/`) so the static export writes `out/og.png` rather
than an extensionless `out/og`, which GitHub Pages would serve as
`application/octet-stream`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
