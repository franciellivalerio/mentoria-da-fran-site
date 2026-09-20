import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CareerCompassVisual } from "@/components/site/CareerCompassVisual";

const TITLE = "Mentoria da Fran — Mentoria de carreira 1 a 1";
const DESC =
  "Acompanhamento profissional em currículo, LinkedIn, entrevistas, processos seletivos e planejamento de carreira. Sessões de 30 a 60 minutos, no seu ritmo.";

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

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="hero-glow mx-auto max-w-6xl overflow-hidden px-4 pb-14 pt-12 sm:px-6 md:pb-20 md:pt-16">
        <div className="relative grid items-center gap-10 min-[740px]:grid-cols-12 lg:gap-14">
          <div className="min-[740px]:col-span-7">
            <span className="eyebrow inline-flex items-center gap-2 rounded-lg bg-white/55 px-3 py-1.5 font-medium text-coral ring-1 ring-white/75 backdrop-blur-md">
              Mentoria de carreira · 1 a 1
            </span>
            <h1 className="mt-6 max-w-[18ch] font-display text-4xl font-semibold leading-[1.04] tracking-[-0.025em] text-balance sm:text-5xl lg:text-6xl">
              Acompanhamento profissional que respeita o seu tempo e o seu ritmo.
            </h1>
            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-mist text-pretty md:text-lg">
              Sou a Fran. Trabalho ao seu lado em currículo, LinkedIn, entrevistas e transição de
              carreira — com sessões de 30 a 60 minutos, do seu jeito.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contato"
                className="coral-button rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
              >
                Quero fazer mentoria
              </Link>
              <Link
                to="/mentoria"
                className="glass-card rounded-xl px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-white/80"
              >
                Conhecer como funciona
              </Link>
            </div>
          </div>
          <div className="min-[740px]:col-span-5">
            <CareerCompassVisual />
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-balance md:text-3xl">
            Como posso te ajudar
          </h2>
          <span className="hidden text-sm text-mist md:block">8 frentes de trabalho</span>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((a) => (
            <div key={a.title} className="glass-card group rounded-2xl p-5 transition-transform hover:-translate-y-1">
              <span className="font-display text-lg font-semibold text-navy">{a.title}</span>
              <p className="mt-2 text-sm leading-relaxed text-mist text-pretty">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="surface rounded-[1.75rem] px-7 py-9 sm:px-9 md:px-12 md:py-11">
          <span className="eyebrow text-coral">Como funciona a mentoria</span>
          <p className="mt-4 max-w-[48ch] font-display text-2xl font-medium leading-snug tracking-tight text-balance md:text-3xl">
            Sessões de 30 a 60 minutos, ajustadas à necessidade de cada encontro.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="flex gap-4">
                <span className="font-display text-2xl font-semibold text-coral">{s.n}</span>
                <div>
                  <span className="text-sm font-semibold">{s.title}</span>
                  <p className="mt-1 text-sm leading-relaxed text-mist text-pretty">{s.text}</p>
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
            <span className="eyebrow text-coral">Benefícios do acompanhamento</span>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-balance md:text-3xl">
              Clareza, direção e alguém ao seu lado em cada etapa.
            </h2>
            <Link
              to="/mentoria"
              className="glass-card mt-6 inline-flex rounded-xl px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-white/80"
            >
              Conhecer a mentoria
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {BENEFITS.map((b) => (
              <li
                key={b}
                className="glass-card flex items-start gap-3 rounded-2xl p-5 text-sm"
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-coral/12 text-[10px] font-bold text-coral">
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
