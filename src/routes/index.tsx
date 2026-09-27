import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { CareerStrategyMapVisual } from "@/components/site/CareerStrategyMapVisual";
import { SiteLayout } from "@/components/site/SiteLayout";
import { TransformationMapVisual } from "@/components/site/TransformationMapVisual";

const TITLE = "Mentoria da Fran — Mentoria de carreira 1 a 1";
const DESC =
  "Mentoria de carreira individual com Fran, engenheira de dados, mentora e palestrante. Estratégia prática para currículo, LinkedIn e entrevistas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Index,
});

const AREAS = [
  { title: "Currículo", text: "Reestruturação clara e orientada a impacto." },
  { title: "LinkedIn", text: "Perfil e posicionamento que abrem portas." },
  { title: "Entrevistas", text: "Preparação prática e treino de respostas." },
  { title: "Processos seletivos", text: "Acompanhamento etapa por etapa." },
  { title: "Portfólio", text: "Uma narrativa coerente dos seus trabalhos." },
  { title: "Planejamento de carreira", text: "Rumo de carreira com metas realistas." },
  { title: "Estudos", text: "Rotina de estudo focada no seu objetivo." },
  { title: "Transição de carreira", text: "Mudança de área com segurança e método." },
];

const STEPS = [
  { n: "01", title: "Diagnóstico", text: "Entendo seu momento, sua trajetória e seus objetivos." },
  { n: "02", title: "Plano", text: "Definimos prioridades, metas e próximos passos juntos." },
  { n: "03", title: "Acompanhamento", text: "Progressão constante, com suporte entre as sessões." },
];

const BENEFITS = [
  "Olhar individual sobre a sua trajetória",
  "Metas e atividades claras entre sessões",
  "Acompanhamento dos seus processos seletivos",
  "Materiais e templates prontos para usar",
];

const CREDENTIALS = [
  "Engenheira de Dados",
  "Mentora e palestrante",
  "Estágio conquistado em 6 meses",
  "Efetivada como júnior em menos de 1 ano",
  "Promovida a pleno em menos de 2 anos de carreira",
  "Embaixadora e Alumni da Generation Brasil",
  "Certificações Databricks",
  "Experiência com currículo, LinkedIn e entrevistas",
  "Vivência prática em processos seletivos e Gupy",
] as const;

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="hero-glow mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 md:pb-20 md:pt-16">
        <div className="relative grid items-center gap-10 min-[740px]:grid-cols-12 lg:gap-14">
          <div className="min-[740px]:col-span-7">
            <span className="eyebrow inline-flex items-center gap-2 rounded-lg bg-cream/60 px-3 py-1.5 font-medium text-primary ring-1 ring-cream/80 backdrop-blur-md">
              Mentoria de carreira • 1:1
            </span>
            <h1 className="mt-6 max-w-[20ch] font-display text-4xl font-bold leading-[1.04] tracking-[-0.025em] text-balance sm:text-5xl lg:text-[3.4rem]">
              Mentoria de carreira com estratégia, clareza e direção para o seu próximo passo.
            </h1>
            <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
              Sou Fran, engenheira de dados, mentora e palestrante. Ajudo profissionais a fortalecer
              currículo, LinkedIn, entrevistas e posicionamento no mercado com uma mentoria prática,
              individual e focada em evolução real.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contato"
                className="primary-button rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
              >
                Quero fazer mentoria
              </Link>
              <Link
                to="/mentoria"
                className="secondary-button rounded-xl px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5"
              >
                Conhecer como funciona
              </Link>
            </div>
          </div>
          <div className="min-[740px]:col-span-5">
            <TransformationMapVisual />
          </div>
        </div>
      </section>

      {/* TRAJECTORY */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="surface overflow-hidden rounded-[1.75rem] px-7 py-9 sm:px-9 md:px-12 md:py-12">
          <span className="eyebrow text-support">Trajetória construída na prática</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-coffee md:text-4xl">
            Minha trajetória
          </h2>

          <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="h-full lg:col-span-5">
              <CareerStrategyMapVisual />
            </div>

            <div className="lg:col-span-7">
              <div className="max-w-[61ch] space-y-5 text-[1.12rem] font-medium leading-[1.7] text-muted-foreground text-pretty md:text-[1.18rem]">
                <p>
                  Sou engenheira de dados, mentora e palestrante. Construí minha trajetória
                  profissional com estratégia, constância e posicionamento. Conquistei meu primeiro
                  estágio em apenas 6 meses, fui efetivada como júnior em menos de 1 ano e promovida
                  a pleno com menos de 2 anos de carreira.
                </p>
                <p>
                  Ao longo desse caminho, também me tornei embaixadora e alumni da Generation
                  Brasil, conquistei certificações Databricks e desenvolvi experiência prática com
                  currículo, LinkedIn, preparação para entrevistas e processos seletivos. Já venci
                  processos pela Gupy e aprendi, na prática, como posicionamento, clareza e
                  estratégia fazem diferença na forma como um profissional se apresenta ao mercado.
                </p>
                <p>
                  Hoje, transformo essa experiência em orientação prática para ajudar outras pessoas
                  a enxergarem melhor o próprio momento profissional, fortalecerem seu
                  posicionamento e avançarem com mais clareza em direção às próximas oportunidades.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-coffee/12 pt-8">
            <span className="eyebrow text-support">Credenciais e experiência</span>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {CREDENTIALS.map((credential) => (
                <li
                  key={credential}
                  className="font-label flex items-start gap-3 rounded-xl bg-cream/52 px-4 py-4 text-sm font-semibold text-coffee ring-1 ring-cream/80"
                >
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-terracotta"
                    strokeWidth={2}
                  />
                  <span>{credential}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-balance md:text-3xl">
            Como posso te ajudar
          </h2>
          <span className="hidden text-sm text-muted-foreground md:block">
            8 frentes de trabalho
          </span>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((a) => (
            <div
              key={a.title}
              className="glass-card group rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <span className="font-display text-lg font-semibold text-coffee">{a.title}</span>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {a.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="surface rounded-[1.75rem] px-7 py-9 sm:px-9 md:px-12 md:py-11">
          <span className="eyebrow text-support">Como funciona a mentoria</span>
          <p className="mt-4 max-w-[48ch] font-display text-2xl font-medium leading-snug tracking-tight text-balance md:text-3xl">
            Sessões de 30 a 60 minutos, ajustadas à necessidade de cada encontro.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="flex gap-4">
                <span className="font-display text-2xl font-semibold text-terracotta">{s.n}</span>
                <div>
                  <span className="text-sm font-semibold">{s.title}</span>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS + CTA */}
      <section className="mx-auto max-w-6xl px-4 py-12 pb-20 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow text-support">Benefícios do acompanhamento</span>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-balance md:text-3xl">
              Clareza, direção e alguém ao seu lado em cada etapa.
            </h2>
            <Link
              to="/mentoria"
              className="secondary-button mt-6 inline-flex rounded-xl px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5"
            >
              Conhecer a mentoria
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {BENEFITS.map((b) => (
              <li key={b} className="glass-card flex items-start gap-3 rounded-2xl p-5 text-sm">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-olive/14 text-[10px] font-bold text-olive">
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
