import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Expertise } from '@/components/expertise'
import { Experience } from '@/components/experience'
import { Contact, SiteFooter } from '@/components/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Expertise />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
