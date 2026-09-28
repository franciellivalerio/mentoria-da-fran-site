import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, CheckCircle2, Compass, Database } from "lucide-react";
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
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
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

const DATA_SKILLS = [
  "Databricks",
  "SQL",
  "Spark SQL",
  "Python",
  "PySpark",
  "Azure Cloud",
  "Ecossistema Azure",
  "ETL/ELT",
  "Data Lakehouse",
  "Modelagem de Dados",
  "Qualidade de Dados",
  "Governança de Dados",
] as const;

const CAREER_SKILLS = [
  "Currículo ATS",
  "LinkedIn",
  "Entrevistas",
  "Gupy",
  "Pitch Profissional",
  "PDI",
  "Roadmap de Carreira",
  "Estratégia de Candidatura",
  "Posicionamento Profissional",
] as const;

const CREDENTIALS = [
  "Engenheira de Dados Pleno",
  "Mentora e palestrante",
  "Embaixadora e Alumni da Generation Brasil",
  "Certificações Databricks",
] as const;

const EXPERIENCE_GROUPS = [
  { title: "Engenharia de Dados", icon: Database, tags: DATA_SKILLS },
  { title: "Carreira & Posicionamento", icon: Compass, tags: CAREER_SKILLS },
] as const;

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="hero-glow mx-auto max-w-6xl px-4 pb-8 pt-12 sm:px-6 md:pb-10 md:pt-16">
        <div className="relative grid gap-10 lg:gap-12">
          <div className="max-w-4xl">
            <span className="eyebrow inline-flex items-center gap-2 rounded-lg bg-card/60 px-3 py-1.5 font-medium text-primary ring-1 ring-border backdrop-blur-md">
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
            <div className="mt-8 grid w-full max-w-md grid-cols-1 gap-3 sm:grid-cols-2">
              <Link
                to="/contato"
                search={{ assunto: "mentoria" }}
                className="primary-button inline-flex min-h-12 w-full items-center justify-center rounded-xl px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
              >
                Quero fazer mentoria
              </Link>
              <Link
                to="/mentoria"
                className="secondary-button inline-flex min-h-12 w-full items-center justify-center rounded-xl px-6 py-3 text-center text-sm font-semibold transition-all hover:-translate-y-0.5"
              >
                Conhecer como funciona
              </Link>
            </div>
          </div>
          <div>
            <TransformationMapVisual />
          </div>
        </div>
      </section>

      {/* TRAJECTORY */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-4 sm:px-6 md:pb-16 md:pt-6">
        <div className="surface overflow-hidden rounded-[1.75rem] px-7 py-9 sm:px-9 md:px-12 md:py-12">
          <span className="eyebrow text-support">Trajetória construída na prática</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-heading md:text-4xl">
            Minha trajetória
          </h2>

          <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="h-full lg:col-span-5">
              <CareerStrategyMapVisual />
            </div>

            <div className="lg:col-span-7">
              <div className="max-w-[61ch] space-y-5 text-[1.12rem] font-medium leading-[1.7] text-muted-foreground text-pretty md:text-[1.18rem]">
                <p>
                  Sou{" "}
                  <strong className="font-semibold text-foreground">
                    Engenheira de Dados, mentora e palestrante
                  </strong>
                  , e construí minha trajetória profissional a partir de três pilares que hoje
                  também fazem parte da minha forma de orientar carreiras:{" "}
                  <strong className="font-semibold text-foreground">
                    estratégia, constância e posicionamento
                  </strong>
                  .
                </p>
                <p>
                  Em menos de dois anos de carreira, saí da busca pela primeira oportunidade para
                  alcançar a posição de{" "}
                  <strong className="font-semibold text-foreground">
                    Engenheira de Dados Pleno
                  </strong>
                  . Conquistei meu primeiro estágio em apenas seis meses, avancei para uma posição
                  efetiva antes de completar um ano de experiência e continuei construindo uma
                  trajetória de crescimento acelerado, sustentada por desenvolvimento técnico,
                  posicionamento profissional e decisões conscientes de carreira.
                </p>
                <p>
                  Ao longo desse caminho, tornei-me{" "}
                  <strong className="font-semibold text-foreground">
                    embaixadora e alumni da Generation Brasil
                  </strong>
                  , conquistei certificações da{" "}
                  <strong className="font-semibold text-foreground">Databricks</strong> e ampliei
                  minha atuação para além da tecnologia, desenvolvendo experiência prática em{" "}
                  <strong className="font-semibold text-foreground">
                    currículo, LinkedIn, entrevistas, processos seletivos e posicionamento
                    profissional
                  </strong>
                  .
                </p>
                <p>
                  Também vivi esses processos do outro lado. Passei por diferentes etapas seletivas,
                  conquistei aprovações em processos conduzidos por plataformas como a{" "}
                  <strong className="font-semibold text-foreground">Gupy</strong> e aprendi, na
                  prática, que competência técnica, por si só, nem sempre é suficiente. É preciso
                  saber{" "}
                  <strong className="font-semibold text-foreground">
                    comunicar valor, apresentar resultados, construir uma narrativa profissional
                    coerente e entender como o mercado enxerga o seu perfil
                  </strong>
                  .
                </p>
                <p className="font-semibold text-foreground">
                  Foi dessa experiência que nasceu a minha mentoria.
                </p>
                <p>
                  Hoje, transformo tudo o que aprendi ao construir minha própria carreira em uma
                  orientação{" "}
                  <strong className="font-semibold text-foreground">
                    estratégica, prática e individualizada
                  </strong>
                  , ajudando profissionais a compreenderem melhor o momento em que estão,
                  reconhecerem o valor da própria trajetória e estruturarem os próximos passos com
                  mais clareza.
                </p>
                <p>
                  Meu objetivo não é entregar fórmulas prontas ou promessas de contratação. É ajudar
                  cada mentorado a construir um posicionamento profissional mais forte, tomar
                  decisões com estratégia e estar mais preparado para{" "}
                  <strong className="font-semibold text-foreground">
                    conquistar as oportunidades que deseja alcançar
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-line pt-8">
            <span className="eyebrow text-support">Credenciais e experiência</span>
            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              {EXPERIENCE_GROUPS.map(({ title, icon: Icon, tags }) => (
                <article key={title} className="glass-card rounded-2xl p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-terracotta/12 text-terracotta ring-1 ring-terracotta/20">
                      <Icon className="size-4" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-heading">{title}</h3>
                  </div>
                  <div className="mt-5 grid grid-cols-2 content-start gap-2">
                    {tags.map((tag) => {
                      const usesFullRow = tag === "Roadmap de Carreira" || tag.length >= 20;

                      return (
                        <span
                          key={tag}
                          className={`font-label flex min-h-11 items-center justify-center rounded-xl border border-line bg-card/65 px-3 py-2 text-center text-sm font-medium leading-snug text-foreground ${usesFullRow ? "col-span-2" : ""}`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </article>
              ))}

              <article className="glass-card rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-terracotta/12 text-terracotta ring-1 ring-terracotta/20">
                    <Award className="size-4" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-heading">Credenciais</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {CREDENTIALS.map((credential) => (
                    <li
                      key={credential}
                      className="font-label flex items-start gap-3 text-sm font-semibold text-foreground"
                    >
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-terracotta"
                        strokeWidth={2}
                      />
                      <span>{credential}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
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
              <span className="font-display text-lg font-semibold text-heading">{a.title}</span>
              <p className="reading-copy mt-2 text-muted-foreground text-pretty">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PLANS PREVIEW */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="surface rounded-[1.75rem] px-7 py-9 sm:px-9 md:px-12 md:py-11">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <span className="eyebrow text-support">Planos e valores</span>
              <h2 className="mt-4 max-w-[28ch] font-display text-2xl font-semibold tracking-tight text-balance md:text-3xl">
                Um formato de acompanhamento para cada momento da sua carreira.
              </h2>
              <p className="reading-copy mt-3 max-w-[58ch] text-muted-foreground">
                Você pode começar com uma sessão pontual ou escolher um acompanhamento mensal ou
                trimestral para construir seus próximos passos com mais continuidade.
              </p>
            </div>
            <Link
              to="/planos"
              className="primary-button inline-flex min-h-12 w-full items-center justify-center rounded-xl px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 sm:w-auto"
            >
              Conhecer planos e valores
            </Link>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {[
              ["Sessão avulsa", "Para uma necessidade pontual."],
              ["Acompanhamento mensal", "Para evoluir com constância."],
              ["Programa trimestral", "Para avançar com continuidade."],
            ].map(([name, description]) => (
              <div key={name} className="glass-card rounded-2xl px-5 py-4">
                <h3 className="font-display text-lg font-semibold text-heading">{name}</h3>
                <p className="mt-1 text-base leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
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
                  <span className="text-base font-semibold sm:text-[1.0625rem]">{s.title}</span>
                  <p className="reading-copy mt-1 text-muted-foreground text-pretty">{s.text}</p>
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
              <li
                key={b}
                className="reading-copy glass-card flex items-start gap-3 rounded-2xl p-5"
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-[10px] font-bold text-support">
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
