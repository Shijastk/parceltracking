import { LogoMark, ArrowRight, MenuIcon } from "./icons";

const NAV_LINKS = [
  { label: "Carriers", href: "#carriers" },
  { label: "Get the app", href: "#app" },
  { label: "Help", href: "#faq" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-border-subtle">
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 text-ink">
          <LogoMark className="w-8 h-8" />
          <span className="text-[15px] font-semibold tracking-tight">ParcelTracking</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-ink-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#app"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink text-white px-4 py-2 text-[13px] font-semibold hover:bg-brand-strong transition-colors"
          >
            Get the app
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            type="button"
            aria-label="Open menu"
            className="md:hidden w-9 h-9 rounded-lg border border-border-subtle bg-white flex items-center justify-center text-ink"
          >
            <MenuIcon className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}
