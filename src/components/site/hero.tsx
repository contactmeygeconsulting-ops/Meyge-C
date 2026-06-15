import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { Reveal } from "./reveal";

const STATS = [
  { value: "180+", label: "missions accompagnées" },
  { value: "14", label: "secteurs d'activité" },
  { value: "92%", label: "clients qui nous recommandent" },
  { value: "20 ans", label: "d'expertise stratégique" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(202,138,4,0.25), transparent 40%), radial-gradient(circle at 85% 0%, rgba(148,163,184,0.18), transparent 45%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="container-page relative grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
              <ShieldCheck className="h-3.5 w-3.5" />
              Cabinet de conseil en stratégie certifié
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Des décisions stratégiques claires, pour une croissance{" "}
              <span className="text-accent">durable</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Meyge Consulting accompagne les dirigeants et comités exécutifs dans leurs
              transformations majeures&nbsp;: stratégie d&apos;entreprise, performance
              opérationnelle et conduite du changement.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
              >
                Demander un diagnostic gratuit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#resultats"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 cursor-pointer"
              >
                Voir nos résultats
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-300">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              4,9/5 sur 120+ avis dirigeants
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Impact mesuré
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl font-bold sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-lg border border-white/10 bg-primary/40 p-4 text-sm text-slate-200">
              « Meyge Consulting a structuré notre plan stratégique à 3 ans et
              sécurisé une croissance de +28% de notre chiffre d&apos;affaires. »
              <p className="mt-2 font-semibold text-white">— Directrice Générale, ETI industrielle</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
