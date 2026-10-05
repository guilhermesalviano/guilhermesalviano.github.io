import { HomePage } from 'app/components/pages/home'
import { content } from 'app/lib/content'
import { pageMetadata } from 'app/lib/metadata'

export const metadata = pageMetadata({
  locale: 'en',
  page: '',
  title: content.en.home.title,
  description: content.en.home.description,
})

export default function Page() {
  return <HomePage locale="en" />
}
