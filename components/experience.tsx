import { experience } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Experience"
          title="Selected roles"
          description="From auditing frontier AI models to writing search-optimized technical content for clients worldwide."
        />
        <ol className="mt-14 border-t border-border">
          {experience.map((role) => (
            <li
              key={`${role.company}-${role.title}`}
              className="grid gap-4 border-b border-border py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {role.period}
                </p>
                <p className="mt-3 text-lg font-medium">{role.company}</p>
                <p className="text-sm text-muted-foreground">
                  {role.via ? `via ${role.via} · ` : ''}
                  {role.location}
                </p>
              </div>
              <div>
                <h3 className="font-serif text-3xl leading-tight">{role.title}</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed text-muted-foreground">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-primary" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
