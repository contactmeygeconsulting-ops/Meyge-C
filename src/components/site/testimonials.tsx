import { Star } from "lucide-react";
import { Reveal } from "./reveal";

const TESTIMONIALS = [
  {
    quote:
      "Une équipe rigoureuse, à l'écoute et résolument orientée résultats. Le plan d'action livré était immédiatement actionnable par nos équipes.",
    name: "Sophie Lambert",
    role: "Directrice Générale, Norvest Group",
    initials: "SL",
  },
  {
    quote:
      "Meyge Consulting nous a aidés à clarifier nos priorités et à structurer notre gouvernance avant une levée de fonds majeure. Un partenaire de confiance.",
    name: "Thomas Reynaud",
    role: "CEO, Lumea Capital",
    initials: "TR",
  },
  {
    quote:
      "Un véritable partenaire stratégique. Leur méthodologie a permis d'aligner le comité de direction autour d'objectifs communs et mesurables.",
    name: "Hélène Dujardin",
    role: "Présidente, Caprion Santé",
    initials: "HD",
  },
];

export function Testimonials() {
  return (
    <section id="temoignages" className="bg-primary/5 py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Témoignages
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Ce que nos clients disent de nous
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col justify-between rounded-xl border border-border bg-surface p-8 shadow-sm">
                <div>
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-secondary">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="font-heading text-sm font-semibold text-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
