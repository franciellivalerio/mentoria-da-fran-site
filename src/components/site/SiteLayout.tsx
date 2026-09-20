import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

const NAV = [
  { to: "/mentoria", label: "Mentoria" },
  { to: "/planos", label: "Planos" },
  { to: "/faq", label: "FAQ" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="surface mt-5 flex items-center justify-between rounded-full px-5 py-3">
          <Link to="/" className="font-display text-lg font-semibold tracking-tight">
            Mentoria da Fran
          </Link>
          <div className="hidden items-center gap-8 text-sm text-mist md:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="transition-colors hover:text-ink"
                activeProps={{ className: "text-ink font-medium" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/contato"
              className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
            >
              Quero fazer mentoria
            </Link>
            <button
              className="grid size-9 place-items-center rounded-full text-ink md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="surface mt-2 flex flex-col gap-1 rounded-3xl p-3 md:hidden">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-ink hover:bg-sand"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-2xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Quero fazer mentoria
            </Link>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-sm text-mist sm:flex-row sm:items-center">
          <span className="font-display font-semibold text-ink">Mentoria da Fran</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="hover:text-ink">
                {n.label}
              </Link>
            ))}
          </div>
          <span className="text-xs">© {new Date().getFullYear()} · Mentoria de carreira</span>
        </div>
      </footer>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string | undefined;
}) {
  return (
    <section className="hero-glow mx-auto max-w-6xl overflow-hidden px-4 pb-6 pt-14 sm:px-6">
      <div className="relative">
        <span className="eyebrow text-clay">{eyebrow}</span>
        <h1 className="mt-4 max-w-[22ch] font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-mist text-pretty md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="surface flex flex-col items-start justify-between gap-6 rounded-3xl px-8 py-10 md:flex-row md:items-center md:px-12">
        <div>
          <span className="eyebrow text-clay">Vamos conversar?</span>
          <p className="mt-3 max-w-[30ch] font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
            Dê o próximo passo na sua carreira com acompanhamento de verdade.
          </p>
        </div>
        <Link
          to="/contato"
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground ring-1 ring-clay/40 transition-colors hover:bg-primary/90"
        >
          Quero fazer mentoria
        </Link>
      </div>
    </section>
  );
}
