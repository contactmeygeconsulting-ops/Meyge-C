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
    <section id="approche" className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          height: "100%",
          position: "absolute",
        }}
      />
      <div className="container-page relative">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Notre méthode
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Une approche en 4 étapes, éprouvée auprès de 180+ organisations
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08}>
              <div className="relative pl-2">
                <span className="font-heading text-5xl font-bold text-white/15">
                  {step.number}
                </span>
                <div className="mt-1 h-0.5 w-8 bg-accent" />
                <h3 className="mt-4 font-heading text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
