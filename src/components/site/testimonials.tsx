import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Une équipe rigoureuse, à l'écoute et résolument orientée résultats. Le plan d'action livré était immédiatement actionnable par nos équipes.",
    name: "Sophie Lambert",
    role: "Directrice Générale, Norvest Group",
  },
  {
    quote:
      "Meyge Consulting nous a aidés à clarifier nos priorités et à structurer notre gouvernance avant une levée de fonds majeure.",
    name: "Thomas Reynaud",
    role: "CEO, Lumea Capital",
  },
  {
    quote:
      "Un véritable partenaire stratégique. Leur méthodologie a permis d'aligner le comité de direction autour d'objectifs communs et mesurables.",
    name: "Hélène Dujardin",
    role: "Présidente, Caprion Santé",
  },
];

export function Testimonials() {
  return (
    <section id="temoignages" className="bg-muted/40 py-20 lg:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Témoignages
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Ce que nos clients disent de nous
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col justify-between rounded-xl border border-border bg-surface p-8"
            >
              <div>
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-secondary">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-heading text-sm font-semibold text-primary">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
