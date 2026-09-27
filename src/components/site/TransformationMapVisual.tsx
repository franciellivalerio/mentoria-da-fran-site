import { Fragment } from "react";
import { ArrowRight, Flag, MapPin, Route, SlidersHorizontal } from "lucide-react";

const TRANSFORMATION_STAGES = [
  {
    title: "Onde você está",
    description:
      "Dúvidas, insegurança, materiais que não representam bem seu potencial ou falta de direção.",
    icon: MapPin,
    className: "bg-cream/68 ring-cream/90",
  },
  {
    title: "O que ajustamos",
    description: "Currículo, LinkedIn, entrevistas, narrativa profissional e plano de ação.",
    icon: SlidersHorizontal,
    className: "bg-sand/44 ring-sand/70",
  },
  {
    title: "Onde você pode chegar",
    description:
      "Posicionamento mais forte, mais confiança para se apresentar e mais preparo para novas oportunidades.",
    icon: Flag,
    className: "bg-terracotta/10 ring-terracotta/20",
  },
] as const;

/** Editorial journey from the mentee's current moment to their next professional step. */
export function TransformationMapVisual() {
  return (
    <aside
      className="surface relative isolate overflow-hidden rounded-[1.75rem] p-5 sm:p-6"
      aria-label="Mapa de transformação"
    >
      <div className="absolute -right-14 -top-16 size-48 rounded-full bg-terracotta/12 blur-3xl" />
      <div className="absolute -bottom-20 -left-14 size-56 rounded-full bg-olive/12 blur-3xl" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4 border-b border-coffee/12 pb-5">
          <div className="min-w-0">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-coffee">
              Mapa de transformação
            </h2>
            <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-muted-foreground">
              Do momento atual ao próximo passo, com clareza, estratégia e acompanhamento
              individual.
            </p>
          </div>
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-coffee text-cream shadow-soft">
            <Route className="size-4" strokeWidth={1.8} aria-hidden="true" />
          </span>
        </div>

        <div className="mt-5 grid items-stretch gap-2.5 min-[1100px]:grid-cols-[1fr_auto_1fr_auto_1fr] min-[1100px]:gap-2">
          {TRANSFORMATION_STAGES.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <Fragment key={stage.title}>
                <article
                  className={`grid min-w-0 grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-3 rounded-2xl p-4 ring-1 backdrop-blur-md min-[1100px]:min-h-[13rem] min-[1100px]:grid-cols-1 min-[1100px]:content-start ${stage.className}`}
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-coffee/8 text-terracotta ring-1 ring-coffee/10">
                    <Icon className="size-4" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div className="min-w-0 min-[1100px]:mt-1">
                    <span className="font-label text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-support">
                      Etapa 0{index + 1}
                    </span>
                    <h3 className="mt-1 font-display text-[1.05rem] font-semibold leading-tight text-coffee">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-[0.78rem] leading-[1.5] text-muted-foreground">
                      {stage.description}
                    </p>
                  </div>
                </article>

                {index < TRANSFORMATION_STAGES.length - 1 && (
                  <span
                    className="grid place-items-center self-center text-terracotta"
                    aria-hidden="true"
                  >
                    <ArrowRight
                      className="size-4 rotate-90 min-[1100px]:rotate-0"
                      strokeWidth={1.6}
                    />
                  </span>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
