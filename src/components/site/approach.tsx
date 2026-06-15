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
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Notre méthode
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Une approche en 4 étapes, éprouvée auprès de 180+ organisations
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative pl-2">
              <span className="font-heading text-5xl font-bold text-white/15">
                {step.number}
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {step.description}
              </p>
              {index < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="absolute right-[-1rem] top-6 hidden h-px w-8 bg-white/20 lg:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
