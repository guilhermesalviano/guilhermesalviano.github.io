import Link from "next/link"
import Footer from "app/components/footer"
import { SiteHeader } from "app/components/nav"
import { content } from "app/lib/content"

export default function NotFound() {
  const t = content.en.notFound

  return (
    <div className="content-frame mx-auto flex w-full max-w-[600px] flex-col">
      <SiteHeader />
      <section>
        <h1 className="mb-6 text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.02em] text-heading">
          {t.h1}
        </h1>
        <p className="mb-4">{t.body}</p>
        <Link href="/">{t.back}</Link>
      </section>
      <Footer />
    </div>
  )
}
