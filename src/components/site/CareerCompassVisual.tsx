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
      className="surface relative isolate min-h-[500px] overflow-hidden rounded-[1.75rem] p-5 sm:min-h-[520px] sm:p-7"
      aria-hidden="true"
    >
      <div className="absolute -right-16 -top-12 size-52 rounded-full bg-coral/18 blur-3xl" />
      <div className="absolute -bottom-20 -left-12 size-64 rounded-full bg-navy/14 blur-3xl" />
      <div className="absolute left-8 right-8 top-20 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span className="eyebrow text-coral">Seu mapa de carreira</span>
          <span className="grid size-9 place-items-center rounded-xl bg-white/65 text-coral ring-1 ring-white/80 shadow-soft">
            <Sparkles className="size-4" />
          </span>
        </div>

        <div className="grid flex-1 place-items-center py-7">
          <div className="relative grid size-56 place-items-center rounded-full border border-white/75 bg-white/35 shadow-card sm:size-64">
            <div className="absolute inset-4 rounded-full border border-dashed border-coral/35" />
            <div className="absolute inset-10 rounded-full border border-navy/10" />
            <span className="absolute top-5 rounded-full bg-white/65 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-mist ring-1 ring-white/80">
              seu próximo passo
            </span>
            <div className="relative grid size-28 place-items-center rounded-full bg-navy text-white shadow-soft sm:size-32">
              <div className="absolute inset-2 rounded-full border border-white/15" />
              <Compass className="size-12 text-coral" strokeWidth={1.35} />
            </div>
            <span className="absolute bottom-7 font-display text-sm font-semibold text-navy">
              direção com propósito
            </span>
          </div>
        </div>

        <div className="grid gap-2">
          {MILESTONES.map((item, index) => (
            <div
              key={item.label}
              className="flex min-w-0 items-center gap-3 rounded-xl bg-white/55 px-3 py-2.5 ring-1 ring-white/80 backdrop-blur-md"
            >
              <span className="grid size-8 place-items-center rounded-lg bg-coral/12 text-coral">
                <item.icon className="size-4" />
              </span>
              <span className="text-xs font-semibold">{item.label}</span>
              <span className="ml-auto font-display text-[10px] font-semibold text-mist">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
