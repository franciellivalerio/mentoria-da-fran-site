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
          className="pointer-events-none absolute inset-0 h-full w-full sm:hidden"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 7 16.667 C 11 28, 3 39, 7 50 C 11 61, 3 72, 7 83.333"
            fill="none"
            stroke="var(--cream)"
            strokeWidth="1.6"
            opacity="0.14"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 7 16.667 C 11 28, 3 39, 7 50 C 11 61, 3 72, 7 83.333"
            fill="none"
            stroke="var(--cream)"
            strokeWidth="1.05"
            strokeDasharray="4 7"
            strokeLinecap="round"
            opacity="0.54"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 5 16.667 C 25 16.667, 28 27, 49 33 C 72 40, 95 38, 95 50 C 95 62, 72 61, 50 68 C 29 75, 25 83.333, 5 83.333"
            fill="none"
            stroke="var(--cream)"
            strokeWidth="1.7"
            opacity="0.14"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 5 16.667 C 25 16.667, 28 27, 49 33 C 72 40, 95 38, 95 50 C 95 62, 72 61, 50 68 C 29 75, 25 83.333, 5 83.333"
            fill="none"
            stroke="var(--cream)"
            strokeWidth="1.05"
            strokeDasharray="4 7"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.56"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {MILESTONES.map((milestone, index) => {
          const Icon = milestone.icon;
          const isMiddleMilestone = index === 1;

          return (
            <li
              key={milestone.title}
              className="relative z-10 flex items-center"
            >
              <span
                className={`absolute left-[7%] z-20 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-cream/45 bg-coffee/90 text-cream shadow-[0_8px_20px_-14px_rgba(48,41,37,0.7)] backdrop-blur-sm ${
                  isMiddleMilestone ? "sm:left-[95%]" : "sm:left-[5%]"
                }`}
              >
                <Icon className="size-3.5" strokeWidth={1.8} aria-hidden="true" />
              </span>

              <div
                className={`flex min-h-[4.5rem] min-w-0 w-[78%] items-center rounded-xl border border-white/35 bg-cream/88 px-4 py-2.5 text-espresso shadow-[0_12px_30px_-24px_rgba(48,41,37,0.42)] backdrop-blur-md sm:w-[76%] ${
                  isMiddleMilestone ? "ml-[18%] sm:ml-0 sm:mr-[14%]" : "ml-[18%] sm:ml-[14%]"
                }`}
              >
                <div className="min-w-0">
                  <span className="font-label block text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-coffee">
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
