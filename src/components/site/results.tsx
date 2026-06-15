import { Reveal } from "./reveal";

const RESULTS = [
  {
    metric: "+28%",
    title: "de chiffre d'affaires",
    description:
      "Plan stratégique à 3 ans pour une ETI industrielle, avec ouverture de deux nouveaux marchés export.",
    tag: "Stratégie",
  },
  {
    metric: "-18%",
    title: "de coûts opérationnels",
    description:
      "Refonte des processus de production et de la chaîne logistique d'un groupe de santé en 9 mois.",
    tag: "Performance",
  },
  {
    metric: "x2,4",
    title: "de valorisation",
    description:
      "Préparation à la cession et structuration de la gouvernance pour une scale-up technologique.",
    tag: "Croissance",
  },
];

export function Results() {
  return (
    <section id="resultats" className="bg-background py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Résultats clients
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Des impacts concrets, mesurés sur le terrain
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {RESULTS.map((result, i) => (
            <Reveal key={result.title} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-xl border border-border bg-surface p-8 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-black/5">
                <div
                  aria-hidden
                  className="pointer-events-none absolute right-0 top-0 h-24 w-24 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(circle at top right, rgba(202,138,4,0.12), transparent 70%)",
                  }}
                />
                <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                  {result.tag}
                </span>
                <p className="mt-4 font-heading text-5xl font-bold text-primary">{result.metric}</p>
                <h3 className="mt-2 font-heading text-lg font-semibold text-primary">
                  {result.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {result.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
