import { ProjectsPage } from 'app/components/pages/projects-page'
import { content } from 'app/lib/content'
import { pageMetadata } from 'app/lib/metadata'

export const metadata = pageMetadata({
  locale: 'pt',
  page: '/projects',
  title: content.pt.projects.title,
  description: content.pt.projects.description,
})

export default function Page() {
  return <ProjectsPage locale="pt" />
}
