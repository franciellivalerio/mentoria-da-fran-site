import { Fragment } from "react";
import { ArrowRight, Flag, MapPin, Route, SlidersHorizontal } from "lucide-react";

const TRANSFORMATION_STAGES = [
  {
    title: "Onde você está",
    description:
      "Dúvidas, insegurança, materiais que não representam bem seu potencial ou falta de direção.",
    icon: MapPin,
    className: "bg-card/72 ring-border",
  },
  {
    title: "O que ajustamos",
    description: "Currículo, LinkedIn, entrevistas, narrativa profissional e plano de ação.",
    icon: SlidersHorizontal,
    className: "bg-secondary/55 ring-border",
  },
  {
    title: "Onde você pode chegar",
    description:
      "Posicionamento mais forte, mais confiança para se apresentar e mais preparo para novas oportunidades.",
    icon: Flag,
    className: "bg-primary/10 ring-primary/20",
  },
] as const;

/** Editorial journey from the mentee's current moment to their next professional step. */
export function TransformationMapVisual() {
  return (
    <aside
      className="surface relative isolate overflow-hidden rounded-[1.75rem] p-6 sm:p-7"
      aria-label="Mapa de transformação"
    >
      <div className="absolute -right-14 -top-16 size-48 rounded-full bg-terracotta/12 blur-3xl" />
      <div className="absolute -bottom-20 -left-14 size-56 rounded-full bg-olive/12 blur-3xl" />

      <div className="relative">
        <div className="flex items-start justify-between gap-5 border-b border-line pb-6">
          <div className="min-w-0">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-heading">
              Mapa de transformação
            </h2>
            <p className="mt-3 max-w-[36ch] text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
              Do momento atual ao próximo passo, com clareza, estratégia e acompanhamento
              individual.
            </p>
          </div>
          <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl bg-coffee text-cream shadow-soft">
            <Route className="size-4" strokeWidth={1.8} aria-hidden="true" />
          </span>
        </div>

        <div className="mt-7 grid items-stretch gap-3.5 min-[1100px]:grid-cols-[minmax(0,1fr)_1.25rem_minmax(0,1fr)_1.25rem_minmax(0,1fr)] min-[1100px]:gap-3">
          {TRANSFORMATION_STAGES.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <Fragment key={stage.title}>
                <article
                  className={`grid min-w-0 grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-3.5 rounded-2xl p-4 ring-1 backdrop-blur-md min-[1100px]:h-full min-[1100px]:grid-cols-1 min-[1100px]:content-start min-[1100px]:gap-3 ${stage.className}`}
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-accent text-primary ring-1 ring-border">
                    <Icon className="size-4" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div className="min-w-0 min-[1100px]:mt-0.5">
                    <span className="font-label text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-support">
                      Etapa 0{index + 1}
                    </span>
                    <h3 className="mt-1.5 font-display text-[1.0625rem] font-semibold leading-[1.2] text-heading sm:text-lg">
                      {stage.title}
                    </h3>
                    <p className="mt-2.5 text-base leading-[1.6] text-muted-foreground">
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
