type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">{description}</p>
      )}
    </div>
  )
}
