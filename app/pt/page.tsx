import { HomePage } from 'app/components/pages/home'
import { content } from 'app/lib/content'
import { pageMetadata } from 'app/lib/metadata'

export const metadata = pageMetadata({
  locale: 'pt',
  page: '',
  title: content.pt.home.title,
  description: content.pt.home.description,
})

export default function Page() {
  return <HomePage locale="pt" />
}
