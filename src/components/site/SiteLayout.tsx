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
    <div className="min-h-screen text-foreground">
      <header className="sticky top-0 z-50 mx-auto max-w-6xl px-4 pt-4 sm:px-6">
        <nav className="nav-glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-5">
          <Link to="/" className="flex items-center gap-3" aria-label="Mentoria da Fran — início">
            <span className="grid size-8 place-items-center rounded-xl bg-coffee font-display text-sm font-semibold text-cream shadow-soft">
              F
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Mentoria da Fran
            </span>
          </Link>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="transition-colors hover:text-coffee"
                activeProps={{ className: "text-espresso font-medium" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/contato"
              className="primary-button hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 sm:inline-flex"
            >
              Quero fazer mentoria
            </Link>
            <button
              className="grid size-9 place-items-center rounded-xl text-espresso transition-colors hover:bg-sand/45 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="surface mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-espresso hover:bg-sand/45"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="primary-button mt-1 rounded-xl px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Quero fazer mentoria
            </Link>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <span className="flex items-center gap-2 font-display font-semibold text-espresso">
            <span className="grid size-7 place-items-center rounded-lg bg-coffee text-xs text-cream">
              F
            </span>
            Mentoria da Fran
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="hover:text-espresso">
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
    <section className="hero-glow mx-auto max-w-6xl px-4 pb-8 pt-16 sm:px-6 md:pt-20">
      <div className="relative">
        <span className="eyebrow text-primary">{eyebrow}</span>
        <h1 className="mt-4 max-w-[22ch] font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
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
      <div className="surface relative flex flex-col items-start gap-8 overflow-hidden rounded-[1.75rem] px-7 py-9 sm:px-9 md:flex-row md:items-center md:justify-between md:px-12">
        <div className="absolute -right-20 -top-24 size-64 rounded-full bg-terracotta/12 blur-3xl" />
        <div className="relative">
          <span className="eyebrow text-primary">Vamos conversar?</span>
          <p className="mt-3 max-w-[30ch] font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
            Dê o próximo passo na sua carreira com acompanhamento de verdade.
          </p>
        </div>
        <Link
          to="/contato"
          className="primary-button relative inline-flex w-full justify-center rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 sm:w-auto"
        >
          Quero fazer mentoria
        </Link>
      </div>
    </section>
  );
}
