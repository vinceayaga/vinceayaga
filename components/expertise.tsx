import { BrainCircuit, PenLine, Stethoscope } from 'lucide-react'
import { expertise } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

const icons = [BrainCircuit, PenLine, Stethoscope]

export function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-16 border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Expertise"
          title="Where science, language, and AI meet"
          description="A decade of writing paired with hands-on experience shaping how large language models reason, stay factual, and stay safe."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {expertise.map((area, index) => {
            const Icon = icons[index]
            return (
              <article
                key={area.title}
                className="flex flex-col rounded-lg border border-border bg-card p-8"
              >
                <div className="mb-6 flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-3xl leading-tight">{area.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{area.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${area.title} skills`}>
                  {area.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
