import { Compass, LineChart, Rocket, Users } from "lucide-react";
import { Reveal } from "./reveal";

const SERVICES = [
  {
    number: "01",
    icon: Compass,
    title: "Stratégie d'entreprise",
    description:
      "Diagnostic concurrentiel, repositionnement et plans stratégiques à 3-5 ans pour sécuriser votre trajectoire de croissance.",
  },
  {
    number: "02",
    icon: LineChart,
    title: "Performance opérationnelle",
    description:
      "Optimisation des processus, pilotage par la donnée et plans d'amélioration de la marge sur l'ensemble de la chaîne de valeur.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Transformation & croissance",
    description:
      "Nouveaux marchés, fusions-acquisitions et lancement d'offres : nous structurons et accélérons vos projets de développement.",
  },
  {
    number: "04",
    icon: Users,
    title: "Conduite du changement",
    description:
      "Accompagnement des équipes dirigeantes, gouvernance et plans de transformation organisationnelle pour ancrer durablement le changement.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-surface py-24 lg:py-32">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[380px_1fr] lg:items-start">

          {/* Left sticky label */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="section-label">Nos expertises</div>
              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-primary lg:text-5xl">
                Du diagnostic<br />à l&apos;exécution.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Nos consultants seniors combinent rigueur analytique et expérience
                opérationnelle pour transformer vos ambitions en résultats concrets.
              </p>
            </div>
          </Reveal>

          {/* Right cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.07}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-black/5">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute right-0 top-0 h-32 w-32 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at top right, rgba(201,150,10,0.1), transparent 70%)",
                    }}
                  />
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <span className="font-heading text-4xl font-bold text-muted/40 transition-colors group-hover:text-accent/20">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-primary">
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
      </div>
    </section>
  );
}
