import { BriefcaseBusiness, Flag, Map, TrendingUp } from "lucide-react";

const MILESTONES = [
  {
    eyebrow: "6 meses",
    title: "Primeiro estágio",
    icon: BriefcaseBusiness,
  },
  {
    eyebrow: "Menos de 1 ano",
    title: "Efetivação como júnior",
    icon: TrendingUp,
  },
  {
    eyebrow: "Menos de 2 anos",
    title: "Promoção a pleno",
    icon: Flag,
  },
] as const;

/** Compact editorial timeline that summarizes Fran's professional progression. */
export function CareerStrategyMapVisual() {
  return (
    <aside
      className="relative flex h-full min-h-[34rem] flex-col overflow-hidden rounded-2xl border border-coffee/15 p-5 text-cream shadow-[0_18px_44px_-30px_rgba(48,41,37,0.38)] sm:min-h-[36rem] sm:p-6 lg:min-h-0"
      style={{
        background: "linear-gradient(145deg, #51443d 0%, #705548 56%, #8f6857 100%)",
      }}
      aria-label="Minha evolução profissional"
    >
      <div className="absolute -right-14 -top-16 size-44 rounded-full bg-coffee/18 blur-3xl" />
      <div className="absolute -bottom-20 -left-16 size-52 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex items-start justify-between gap-4 border-b border-cream/10 pb-4">
        <div className="min-w-0">
          <span className="eyebrow text-sand">Minha evolução profissional</span>
          <h3 className="mt-2 max-w-[22ch] font-display text-xl font-semibold leading-snug text-cream">
            Do primeiro estágio à promoção a pleno
          </h3>
        </div>
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-cream/10 text-cream ring-1 ring-cream/20">
          <Map className="size-4" aria-hidden="true" />
        </span>
      </div>

      <ol className="relative mt-6 grid flex-1 grid-rows-3 gap-6 py-1">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 5 16.667 C 5 34, 95 32, 95 50 C 95 68, 5 66, 5 83.333"
            fill="none"
            stroke="var(--cream)"
            strokeWidth="1.1"
            strokeDasharray="3 4"
            strokeLinecap="round"
            opacity="0.46"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {MILESTONES.map((milestone, index) => {
          const Icon = milestone.icon;
          const isMiddleMilestone = index === 1;

          return (
            <li
              key={milestone.title}
              className={`relative z-10 grid items-center gap-3 ${
                isMiddleMilestone
                  ? "grid-cols-[minmax(0,1fr)_10%]"
                  : "grid-cols-[10%_minmax(0,1fr)]"
              }`}
            >
              <span
                className={`grid size-10 place-items-center justify-self-center rounded-full border border-cream/45 bg-coffee/75 text-cream shadow-[0_8px_20px_-14px_rgba(48,41,37,0.7)] backdrop-blur-sm ${
                  isMiddleMilestone ? "col-start-2" : "col-start-1"
                }`}
              >
                <Icon className="size-3.5" strokeWidth={1.8} aria-hidden="true" />
              </span>

              <div
                className={`flex min-h-[5rem] min-w-0 items-center rounded-xl border border-white/35 bg-cream/88 px-4 py-3 text-espresso shadow-[0_12px_30px_-24px_rgba(48,41,37,0.42)] backdrop-blur-md ${
                  isMiddleMilestone ? "col-start-1 row-start-1" : "col-start-2"
                }`}
              >
                <div className="min-w-0">
                  <span className="font-label block text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-support">
                    {milestone.eyebrow}
                  </span>
                  <span className="mt-1 block text-[1.02rem] font-semibold leading-tight text-coffee">
                    {milestone.title}
                  </span>
                </div>
              </div>

              <span className="sr-only">Etapa {index + 1}</span>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
