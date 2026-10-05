import { AboutPage } from 'app/components/pages/about'
import { content } from 'app/lib/content'
import { pageMetadata } from 'app/lib/metadata'

export const metadata = pageMetadata({
  locale: 'pt',
  page: '/about',
  title: content.pt.about.title,
  description: content.pt.about.description,
})

export default function Page() {
  return <AboutPage locale="pt" />
}
