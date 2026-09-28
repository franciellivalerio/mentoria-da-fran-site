import { Link } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const NAV = [
  { to: "/mentoria", label: "Mentoria", search: {} },
  { to: "/planos", label: "Planos", search: {} },
  { to: "/faq", label: "FAQ", search: {} },
  { to: "/contato", label: "Contato", search: { assunto: undefined } },
] as const;

const LEGAL_NAV = [
  { to: "/regras-e-condicoes", label: "Regras e Condições" },
  { to: "/privacidade", label: "Política de Privacidade" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const syncTheme = () => {
      const savedTheme = window.localStorage.getItem("mentoria-theme");
      const shouldUseDark = savedTheme ? savedTheme === "dark" : mediaQuery.matches;
      root.classList.toggle("dark", shouldUseDark);
      root.style.colorScheme = shouldUseDark ? "dark" : "light";
      setIsDark(shouldUseDark);
    };

    syncTheme();
    mediaQuery.addEventListener("change", syncTheme);
    return () => mediaQuery.removeEventListener("change", syncTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    const shouldUseDark = nextTheme === "dark";
    document.documentElement.classList.toggle("dark", shouldUseDark);
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("mentoria-theme", nextTheme);
    setIsDark(shouldUseDark);
  };

  return (
    <div className="min-h-screen text-foreground">
      <header className="sticky top-0 z-50 mx-auto max-w-6xl px-4 pt-4 sm:px-6">
        <nav className="nav-glass flex min-w-0 items-center justify-between gap-2 overflow-hidden rounded-2xl px-4 py-3 sm:px-5">
          <Link
            to="/"
            className="flex min-w-0 flex-1 items-center gap-2.5 overflow-hidden sm:gap-3 md:flex-none"
            aria-label="Fran | Mentoria de Carreira — início"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-coffee font-signature text-[1.35rem] leading-none text-cream shadow-soft">
              F
            </span>
            <span className="flex min-w-0 items-baseline gap-1.5 overflow-hidden whitespace-nowrap">
              <span className="font-signature text-[1.65rem] leading-none text-heading">Fran</span>
              <span
                className="font-body text-sm font-semibold text-muted-foreground/55"
                aria-hidden="true"
              >
                |
              </span>
              <span className="truncate font-body text-[0.9rem] font-semibold leading-none text-muted-foreground sm:text-base">
                Mentoria de Carreira
              </span>
            </span>
          </Link>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                search={n.search}
                className="transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="grid size-9 place-items-center rounded-xl text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
              title={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
            >
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <Link
              to="/contato"
              search={{ assunto: "mentoria" }}
              className="primary-button hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 sm:inline-flex"
            >
              Quero fazer mentoria
            </Link>
            <button
              className="grid size-9 place-items-center rounded-xl text-foreground transition-colors hover:bg-accent md:hidden"
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
                search={n.search}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-foreground hover:bg-accent"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contato"
              search={{ assunto: "mentoria" }}
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
        <div className="border-t border-line pt-6 text-sm text-muted-foreground">
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
            <span className="flex max-w-full items-center justify-center gap-2.5 overflow-hidden text-foreground">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-coffee font-signature text-lg leading-none text-cream">
                F
              </span>
              <span className="flex min-w-0 items-baseline gap-1.5 overflow-hidden whitespace-nowrap">
                <span className="font-signature text-2xl leading-none text-heading">Fran</span>
                <span
                  className="font-body font-semibold text-muted-foreground/55"
                  aria-hidden="true"
                >
                  |
                </span>
                <span className="truncate font-body text-sm font-semibold text-muted-foreground">
                  Mentoria de Carreira
                </span>
              </span>
            </span>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} search={n.search} className="hover:text-foreground">
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-line pt-5 text-center sm:flex-row sm:text-left">
            <span className="text-xs">
              © {new Date().getFullYear()} Mentoria da Fran. Todos os direitos reservados.
            </span>
            <div className="font-label flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium sm:justify-end">
              {LEGAL_NAV.map((item) => (
                <Link key={item.to} to={item.to} className="hover:text-foreground">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
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
          search={{ assunto: "mentoria" }}
          className="primary-button relative inline-flex w-full justify-center rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 sm:w-auto"
        >
          Quero fazer mentoria
        </Link>
      </div>
    </section>
  );
}
