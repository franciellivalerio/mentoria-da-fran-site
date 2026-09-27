import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteLayout } from "@/components/site/SiteLayout";

const TITLE = "Planos — Mentoria da Fran";
const DESC =
  "Formatos de mentoria de carreira para uma necessidade pontual ou um acompanhamento contínuo.";

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

const PLANS: {
  name: string;
  tagline: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}[] = [
  {
    name: "Sessão avulsa",
    tagline: "Para uma necessidade pontual.",
    price: "R$ 69,90",
    period: "por sessão",
    features: [
      "1 sessão de 30 a 60 min",
      "Diagnóstico do momento profissional",
      "Tema definido pelo mentorado",
      "Resumo com próximos passos",
    ],
  },
  {
    name: "Acompanhamento mensal",
    tagline: "Para quem quer evoluir com constância.",
    price: "R$ 249,90",
    period: "por mês",
    highlighted: true,
    features: [
      "Sessões semanais",
      "Metas e atividades entre sessões",
      "Trilha de estudos e PDI",
      "Portfólio e posicionamento nas redes",
      "Preparação para entrevistas",
      "Acompanhamento de processos seletivos",
    ],
  },
  {
    name: "Programa trimestral",
    tagline: "Para evoluir com estratégia e continuidade.",
    price: "R$ 690,90",
    period: "programa completo",
    features: [
      "3 meses de acompanhamento",
      "Sessões semanais",
      "Metas e atividades entre sessões",
      "Trilha de estudos e PDI",
      "Portfólio e posicionamento nas redes",
      "Preparação para entrevistas",
      "Acompanhamento de processos seletivos",
    ],
  },
];

function PlanosPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Planos"
        title="Formatos pensados para diferentes momentos de carreira."
        description="Escolha uma sessão pontual ou um acompanhamento contínuo para avançar com clareza, estratégia e apoio próximo."
      />

      <section className="mx-auto max-w-6xl px-4 py-10 pb-20 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={
                p.highlighted
                  ? "surface relative flex h-full flex-col rounded-2xl p-7 ring-2 ring-terracotta/45 shadow-soft"
                  : "glass-card flex h-full flex-col rounded-2xl p-7"
              }
            >
              {p.highlighted && (
                <span className="eyebrow absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[10px] text-primary-foreground">
                  Mais procurado
                </span>
              )}
              <h2 className="font-display text-xl font-semibold">{p.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
              <div className="mt-6">
                <div className="font-display text-3xl font-semibold text-terracotta">{p.price}</div>
                <p className="mt-1 text-xs text-muted-foreground">{p.period}</p>
              </div>
              <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-6 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-olive">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contato"
                className={
                  p.highlighted
                    ? "primary-button mt-8 block rounded-xl px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
                    : "secondary-button mt-8 block rounded-xl px-5 py-3 text-center text-sm font-semibold"
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
