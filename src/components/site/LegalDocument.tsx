import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";

export type LegalNavItem = {
  id: string;
  label: string;
};

export function LegalDocument({
  title,
  eyebrow,
  introduction,
  lastUpdated,
  navigation,
  children,
}: {
  title: string;
  eyebrow: string;
  introduction: ReactNode;
  lastUpdated: string;
  navigation: readonly LegalNavItem[];
  children: ReactNode;
}) {
  return (
    <>
      <section className="hero-glow mx-auto max-w-6xl px-4 pb-8 pt-14 sm:px-6 md:pb-10 md:pt-20">
        <div className="relative max-w-4xl">
          <span className="eyebrow text-primary">{eyebrow}</span>
          <h1 className="mt-4 max-w-[22ch] font-display text-4xl font-semibold leading-[1.06] tracking-tight text-balance md:text-5xl">
            {title}
          </h1>
          <div className="mt-6 max-w-[68ch] space-y-4 text-lg leading-[1.7] text-muted-foreground">
            {introduction}
          </div>
          <p className="font-label mt-6 text-sm font-medium text-support">
            Última atualização: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid items-start gap-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10">
          <nav
            className="surface rounded-2xl p-5 lg:sticky lg:top-28"
            aria-label={`Sumário de ${title}`}
          >
            <span className="eyebrow text-support">Nesta página</span>
            <ol className="mt-4 space-y-1.5">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="font-label block rounded-lg px-3 py-2 text-sm leading-snug text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="surface rounded-[1.75rem] px-6 py-2 sm:px-8 md:px-10">{children}</div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article id={id} className="scroll-mt-28 border-b border-line py-9 last:border-b-0 md:py-11">
      <h2 className="font-display text-2xl font-semibold leading-tight text-heading md:text-3xl">
        {title}
      </h2>
      <div className="mt-5 space-y-5">{children}</div>
    </article>
  );
}

export function LegalParagraph({ children }: { children: ReactNode }) {
  return <p className="reading-copy max-w-[72ch] text-muted-foreground">{children}</p>;
}

export function LegalSubheading({ children }: { children: ReactNode }) {
  return <h3 className="pt-2 font-display text-xl font-semibold text-heading">{children}</h3>;
}

export function LegalList({ items }: { items: readonly string[] }) {
  return (
    <ul className="reading-copy max-w-[72ch] space-y-2.5 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-[0.72em] size-1.5 shrink-0 rounded-full bg-terracotta" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalHighlight({ children }: { children: ReactNode }) {
  return (
    <div className="reading-copy rounded-2xl border border-primary/25 bg-primary/10 px-5 py-4 font-semibold text-foreground">
      {children}
    </div>
  );
}

export function LegalExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-label inline-flex items-center gap-2 text-base font-semibold text-primary underline decoration-primary/35 underline-offset-4 transition-colors hover:text-foreground"
    >
      {children}
      <ExternalLink className="size-4 shrink-0" aria-hidden="true" />
    </a>
  );
}
