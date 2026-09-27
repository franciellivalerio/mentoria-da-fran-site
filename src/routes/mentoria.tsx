import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageIntro, SiteLayout } from "@/components/site/SiteLayout";

const TITLE = "A Mentoria — Mentoria da Fran";
const DESC =
  "Conheça a metodologia da mentoria: diagnóstico, plano de ação e acompanhamento contínuo em sessões de 30 a 60 minutos.";

export const Route = createFileRoute("/mentoria")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: MentoriaPage,
});

const PHASES = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Na primeira conversa, entendo sua trajetória, seu momento atual e o que você quer conquistar. Mapeamos dificuldades, pontos fortes e o contexto do mercado para a sua área.",
  },
  {
    n: "02",
    title: "Plano de ação",
    text: "Definimos juntos metas claras, com prazos realistas, e as atividades que você fará entre uma sessão e outra — currículo, LinkedIn, portfólio, estudos ou candidaturas.",
  },
  {
    n: "03",
    title: "Acompanhamento",
    text: "Sessões regulares para revisar o que foi feito, ajustar a rota e preparar você para o que vem a seguir: entrevistas, testes, negociações e decisões de carreira.",
  },
];

const FORMAT = [
  { label: "Duração", value: "30 a 60 minutos por sessão, conforme a necessidade do encontro" },
  { label: "Formato", value: "Online, por videochamada, com materiais compartilhados" },
  { label: "Entre sessões", value: "Atividades práticas e acompanhamento dos seus processos" },
  {
    label: "Para quem",
    value: "Profissionais em busca de recolocação, promoção ou transição de área",
  },
];

function MentoriaPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="A mentoria"
        title="Uma metodologia simples, próxima e orientada a resultado."
        description="Não existe fórmula pronta: cada mentoria é desenhada a partir do seu objetivo. O que se mantém é o método — diagnóstico, plano e acompanhamento constante."
      />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {PHASES.map((p) => (
            <div key={p.n} className="glass-card rounded-2xl p-7">
              <span className="font-display text-3xl font-semibold text-terracotta">{p.n}</span>
              <h2 className="mt-4 font-display text-xl font-semibold">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="surface rounded-[1.75rem] px-8 py-10 md:px-12">
          <span className="eyebrow text-support">Como funciona na prática</span>
          <dl className="mt-6 grid gap-6 md:grid-cols-2">
            {FORMAT.map((f) => (
              <div key={f.label} className="border-t border-line pt-4">
                <dt className="text-sm font-semibold">{f.label}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
