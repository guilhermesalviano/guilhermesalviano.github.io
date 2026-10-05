import { AboutPage } from 'app/components/pages/about'
import { content } from 'app/lib/content'
import { pageMetadata } from 'app/lib/metadata'

export const metadata = pageMetadata({
  locale: 'en',
  page: '/about',
  title: content.en.about.title,
  description: content.en.about.description,
})

export default function Page() {
  return <AboutPage locale="en" />
}
