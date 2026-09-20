import { Compass, Route, Sparkles, Target } from "lucide-react";

const MILESTONES = [
  { label: "Clareza", icon: Compass },
  { label: "Posicionamento", icon: Target },
  { label: "Oportunidades", icon: Route },
] as const;

/** Decorative, code-native hero artwork that represents the mentoring journey. */
export function CareerCompassVisual() {
  return (
    <div
      className="surface relative isolate aspect-[4/5] overflow-hidden rounded-3xl p-6 sm:p-8"
      aria-hidden="true"
    >
      <div className="absolute -right-16 -top-12 size-52 rounded-full bg-terracotta/15 blur-3xl" />
      <div className="absolute -bottom-16 -left-12 size-56 rounded-full bg-sage/20 blur-3xl" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span className="eyebrow text-clay">Seu mapa de carreira</span>
          <span className="grid size-9 place-items-center rounded-full bg-cream text-clay ring-1 ring-line">
            <Sparkles className="size-4" />
          </span>
        </div>

        <div className="grid flex-1 place-items-center py-7">
          <div className="relative grid size-52 place-items-center rounded-full border border-line/80 bg-cream/45 sm:size-64">
            <div className="absolute inset-5 rounded-full border border-dashed border-terracotta/30" />
            <div className="absolute left-1/2 top-4 h-[calc(100%-2rem)] w-px -translate-x-1/2 bg-line/70" />
            <div className="absolute left-4 top-1/2 h-px w-[calc(100%-2rem)] -translate-y-1/2 bg-line/70" />
            <div className="relative grid size-28 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft sm:size-32">
              <Compass className="size-12" strokeWidth={1.5} />
              <span className="absolute -bottom-8 whitespace-nowrap font-display text-sm font-semibold text-ink">
                direção com propósito
              </span>
            </div>
            <span className="absolute left-1/2 top-3 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.2em] text-mist">
              próximo passo
            </span>
          </div>
        </div>

        <div className="grid gap-2.5">
          {MILESTONES.map((item, index) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-2xl bg-cream/70 px-4 py-3 ring-1 ring-line/80 backdrop-blur-sm"
            >
              <span className="grid size-8 place-items-center rounded-full bg-terracotta/10 text-clay">
                <item.icon className="size-4" />
              </span>
              <span className="text-sm font-medium">{item.label}</span>
              <span className="ml-auto font-display text-xs text-mist">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
