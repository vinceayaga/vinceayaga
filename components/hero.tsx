import { ArrowDownRight, Mail } from 'lucide-react'
import { site, stats } from '@/lib/site-data'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28">
      <p className="mb-6 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-primary">
        <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
        {site.role}
      </p>
      <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl">
        Making complex science <em className="text-primary">clear</em> — for people and for machines.
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
        {site.summary}
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="size-4" aria-hidden="true" />
          Work with me
        </a>
        <a
          href="#experience"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
        >
          View experience
          <ArrowDownRight className="size-4" aria-hidden="true" />
        </a>
      </div>

      <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2 bg-background p-6">
            <dt className="order-2 text-sm leading-snug text-muted-foreground">{stat.label}</dt>
            <dd className="order-1 font-serif text-5xl leading-none text-foreground">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
