import { ArrowUpRight } from "lucide-react";
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
    metric: "−18%",
    title: "de coûts opérationnels",
    description:
      "Refonte des processus de production et de la chaîne logistique d'un groupe de santé en 9 mois.",
    tag: "Performance",
  },
  {
    metric: "×2,4",
    title: "de valorisation",
    description:
      "Préparation à la cession et structuration de la gouvernance pour une scale-up technologique.",
    tag: "Croissance",
  },
];

export function Results() {
  return (
    <section id="resultats" className="bg-background py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="section-label">Résultats clients</div>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-primary lg:text-5xl">
              Des impacts concrets,<br />mesurés sur le terrain.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground lg:text-right">
            Chaque mission se conclut par des livrables chiffrés,
            vérifiables et actionnables par vos équipes.
          </p>
        </Reveal>

        {/* Big result cards */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {RESULTS.map((result, i) => (
            <Reveal key={result.title} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col bg-surface p-8 transition-colors hover:bg-primary/[0.03]">
                <div className="flex items-start justify-between">
                  <span className="inline-block rounded-full border border-accent/25 bg-accent/8 px-3 py-0.5 text-xs font-bold tracking-wide text-accent">
                    {result.tag}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-6 font-heading text-6xl font-bold tracking-tight text-primary lg:text-7xl">
                  {result.metric}
                </p>
                <h3 className="mt-3 font-heading text-lg font-semibold text-primary">
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
