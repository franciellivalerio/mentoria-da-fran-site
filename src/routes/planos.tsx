import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteLayout } from "@/components/site/SiteLayout";

const TITLE = "Planos — Mentoria da Fran";
const DESC =
  "Formatos de acompanhamento da mentoria de carreira: sessão avulsa, acompanhamento mensal e programa de transição. Valores sob consulta.";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: PlanosPage,
});

/** Estrutura pronta para receber preços depois (price: null = "sob consulta"). */
const PLANS: {
  name: string;
  tagline: string;
  price: string | null;
  features: string[];
  highlighted?: boolean;
}[] = [
  {
    name: "Sessão avulsa",
    tagline: "Para uma necessidade pontual.",
    price: null,
    features: ["1 sessão de 30 a 60 min", "Revisão de currículo ou LinkedIn", "Resumo com próximos passos"],
  },
  {
    name: "Acompanhamento mensal",
    tagline: "Para quem quer evoluir com constância.",
    price: null,
    highlighted: true,
    features: [
      "Sessões quinzenais",
      "Metas e atividades entre sessões",
      "Acompanhamento de processos seletivos",
      "Materiais e templates",
    ],
  },
  {
    name: "Programa de transição",
    tagline: "Para mudar de área com método.",
    price: null,
    features: ["Plano de 3 meses", "Trilha de estudos personalizada", "Portfólio e posicionamento", "Preparação para entrevistas"],
  },
];

function PlanosPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Planos"
        title="Formatos pensados para diferentes momentos de carreira."
        description="Os valores são combinados de acordo com o formato e a duração do acompanhamento. Fale comigo e montamos o plano ideal para você."
      />

      <section className="mx-auto max-w-6xl px-4 py-10 pb-20 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={
                p.highlighted
                  ? "relative rounded-3xl bg-cream p-7 ring-2 ring-terracotta/60 shadow-soft"
                  : "rounded-3xl bg-cream/70 p-7 ring-1 ring-line"
              }
            >
              {p.highlighted && (
                <span className="eyebrow absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[10px] text-primary-foreground">
                  Mais procurado
                </span>
              )}
              <h2 className="font-display text-xl font-semibold">{p.name}</h2>
              <p className="mt-1 text-sm text-mist">{p.tagline}</p>
              <div className="mt-6 font-display text-3xl font-semibold">
                {p.price ?? <span className="text-xl text-clay">Sob consulta</span>}
              </div>
              <ul className="mt-6 space-y-2.5 border-t border-line pt-6 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-sage">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contato"
                className={
                  p.highlighted
                    ? "mt-8 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                    : "mt-8 block rounded-full bg-sand px-5 py-3 text-center text-sm font-semibold text-ink ring-1 ring-line hover:bg-cream"
                }
              >
                Falar com a Fran
              </Link>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
