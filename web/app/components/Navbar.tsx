const LINKS = [
  { href: "#agents", label: "Agents" },
  { href: "#skills", label: "Skills" },
  { href: "#commands", label: "Commands" },
  { href: "#install", label: "Install" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md">
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-base font-semibold tracking-tight">
            Ensemble
          </span>
        </a>

        <ul className="hidden sm:flex items-center gap-8 text-sm text-muted">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
