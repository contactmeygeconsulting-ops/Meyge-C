const RESULTS = [
  {
    metric: "+28%",
    title: "de chiffre d'affaires",
    description:
      "Plan stratégique à 3 ans pour une ETI industrielle, avec ouverture de deux nouveaux marchés export.",
  },
  {
    metric: "-18%",
    title: "de coûts opérationnels",
    description:
      "Refonte des processus de production et de la chaîne logistique d'un groupe de santé en 9 mois.",
  },
  {
    metric: "x2,4",
    title: "de valorisation",
    description:
      "Préparation à la cession et structuration de la gouvernance pour une scale-up technologique.",
  },
];

export function Results() {
  return (
    <section id="resultats" className="bg-background py-20 lg:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Résultats clients
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Des impacts concrets, mesurés sur le terrain
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {RESULTS.map((result) => (
            <div
              key={result.title}
              className="rounded-xl border border-border bg-surface p-8"
            >
              <p className="font-heading text-4xl font-bold text-accent">{result.metric}</p>
              <h3 className="mt-3 font-heading text-lg font-semibold text-primary">
                {result.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
