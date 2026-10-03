import { site } from '@/lib/site-data'

const links = [
  { href: '#expertise', label: 'Expertise' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-xl leading-none tracking-tight whitespace-nowrap sm:text-2xl">
          {site.name}
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center text-[13px] sm:gap-2 sm:text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:text-foreground sm:px-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
