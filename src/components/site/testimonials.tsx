import { Reveal } from "./reveal";

const TESTIMONIALS = [
  {
    quote:
      "Une équipe rigoureuse, à l'écoute et résolument orientée résultats. Le plan d'action livré était immédiatement actionnable par nos équipes.",
    name: "Sophie Lambert",
    role: "Directrice Générale",
    company: "Norvest Group",
    initials: "SL",
  },
  {
    quote:
      "Meyge Consulting nous a aidés à clarifier nos priorités et à structurer notre gouvernance avant une levée de fonds majeure. Un partenaire de confiance.",
    name: "Thomas Reynaud",
    role: "CEO",
    company: "Lumea Capital",
    initials: "TR",
  },
  {
    quote:
      "Un véritable partenaire stratégique. Leur méthodologie a permis d'aligner le comité de direction autour d'objectifs communs et mesurables.",
    name: "Hélène Dujardin",
    role: "Présidente",
    company: "Caprion Santé",
    initials: "HD",
  },
];

export function Testimonials() {
  return (
    <section id="temoignages" className="bg-primary py-24 text-primary-foreground lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          height: "100%",
          position: "absolute",
        }}
      />
      <div className="container-page relative">
        <Reveal>
          <div className="section-label">Témoignages</div>
          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
            Ce que nos clients<br />disent de nous.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.09}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-white/8 bg-white/5 p-8 backdrop-blur-sm">
                {/* Large quote mark */}
                <div>
                  <span className="font-heading text-5xl font-bold leading-none text-accent/40">
                    &ldquo;
                  </span>
                  <blockquote className="-mt-2 text-base leading-relaxed text-slate-300">
                    {t.quote}
                  </blockquote>
                </div>

                <figcaption className="mt-8 flex items-center gap-4 border-t border-white/8 pt-6">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white">{t.name}</p>
                    <p className="text-xs text-slate-400">
                      {t.role} · {t.company}
                    </p>
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
