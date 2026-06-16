import { Reveal } from "./reveal";

const STEPS = [
  {
    number: "01",
    title: "Diagnostic",
    description:
      "Analyse approfondie de votre marché, de votre organisation et de vos performances pour identifier les leviers prioritaires.",
  },
  {
    number: "02",
    title: "Stratégie",
    description:
      "Co-construction d'une feuille de route claire, priorisée et chiffrée, alignée avec vos ambitions et vos ressources.",
  },
  {
    number: "03",
    title: "Exécution",
    description:
      "Pilotage opérationnel des initiatives, accompagnement des équipes et ajustement continu selon les résultats observés.",
  },
  {
    number: "04",
    title: "Pérennisation",
    description:
      "Transfert de compétences, outils de pilotage et gouvernance pour ancrer durablement la performance dans l'organisation.",
  },
];

export function Approach() {
  return (
    <section id="approche" className="relative overflow-hidden bg-primary py-24 text-primary-foreground lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-px w-1/3 bg-gradient-to-l from-accent/50 to-transparent"
      />

      <div className="container-page relative">
        <Reveal>
          <div className="section-label">Notre méthode</div>
          <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
            4 étapes. 180+ organisations transformées.
          </h2>
        </Reveal>

        {/* Steps */}
        <div className="mt-16 grid gap-0 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.09}>
              <div className="relative border-t border-white/10 pb-8 pt-8 lg:border-l lg:border-t-0 lg:px-8 lg:pb-0 lg:pt-6 lg:first:border-l-0">
                {/* Number */}
                <span className="font-heading text-6xl font-bold leading-none text-white/8">
                  {step.number}
                </span>
                {/* Accent line */}
                <div className="mt-3 h-0.5 w-10 bg-accent" />
                <h3 className="mt-4 font-heading text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
                {/* Arrow connector (desktop) */}
                {index < STEPS.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute -right-3 top-[3.4rem] z-10 hidden h-5 w-5 items-center justify-center lg:flex"
                  >
                    <svg viewBox="0 0 16 16" className="h-4 w-4 text-white/15" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
