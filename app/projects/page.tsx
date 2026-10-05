import { ProjectsPage } from 'app/components/pages/projects-page'
import { content } from 'app/lib/content'
import { pageMetadata } from 'app/lib/metadata'

export const metadata = pageMetadata({
  locale: 'en',
  page: '/projects',
  title: content.en.projects.title,
  description: content.en.projects.description,
})

export default function Page() {
  return <ProjectsPage locale="en" />
}
