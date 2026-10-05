import { siteConfig } from 'app/lib/site'

// `rel="me"` links this page to the linked profiles, reinforcing the
// `sameAs` entries in the Person JSON-LD.
const links = [
  { href: siteConfig.social.github, label: 'github', rel: 'me noopener noreferrer' },
  { href: siteConfig.social.linkedin, label: 'linkedin', rel: 'me noopener noreferrer' },
]

export default function Footer() {
  return (
    <footer className="mb-4 mt-16 text-sm font-ui">
      <ul className="flex gap-4">
        {links.map(({ href, label, rel }) => (
          <li key={href}>
            <a rel={rel} target="_blank" href={href}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a href="/rss.xml" type="application/rss+xml">
            rss
          </a>
        </li>
      </ul>
    </footer>
  )
}
