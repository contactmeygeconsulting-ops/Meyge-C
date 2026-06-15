import { Compass, LineChart, Rocket, Users } from "lucide-react";
import { Reveal } from "./reveal";

const SERVICES = [
  {
    icon: Compass,
    title: "Stratégie d'entreprise",
    description:
      "Diagnostic concurrentiel, repositionnement et plans stratégiques à 3-5 ans pour sécuriser votre trajectoire de croissance.",
  },
  {
    icon: LineChart,
    title: "Performance opérationnelle",
    description:
      "Optimisation des processus, pilotage par la donnée et plans d'amélioration de la marge sur l'ensemble de la chaîne de valeur.",
  },
  {
    icon: Rocket,
    title: "Transformation & croissance",
    description:
      "Nouveaux marchés, fusions-acquisitions et lancement d'offres : nous structurons et accélérons vos projets de développement.",
  },
  {
    icon: Users,
    title: "Conduite du changement",
    description:
      "Accompagnement des équipes dirigeantes, gouvernance et plans de transformation organisationnelle pour ancrer durablement le changement.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Nos expertises
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Un accompagnement sur-mesure, du diagnostic à l&apos;exécution
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nos consultants seniors combinent rigueur analytique et expérience
            opérationnelle pour transformer vos ambitions stratégiques en résultats
            concrets.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.07}>
              <div className="group h-full rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
