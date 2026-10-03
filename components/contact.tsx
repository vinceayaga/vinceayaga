import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { site } from '@/lib/site-data'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground/70">
          Contact
        </p>
        <h2 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl">
          Have a project that needs clarity and rigor?
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
          {"I'm available for AI training and evaluation work, technical and SEO content, and medical and health writing."}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" aria-hidden="true" />
            {site.email}
          </a>

          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
          >
            LinkedIn
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
        <p className="mt-8 inline-flex items-center gap-2 text-sm text-primary-foreground/70">
          <MapPin className="size-4" aria-hidden="true" />
          Based in {site.location}
        </p>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-primary-foreground/15 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-serif text-lg text-primary-foreground">{site.name}</p>
        <p>
          {'© '}
          {new Date().getFullYear()} · {site.role}
        </p>
      </div>
    </footer>
  )
}
