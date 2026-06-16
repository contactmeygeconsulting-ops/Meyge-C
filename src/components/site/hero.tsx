import { ArrowRight, Star } from "lucide-react";
import { Reveal } from "./reveal";

const STATS = [
  { value: "180+", label: "Missions accompagnées" },
  { value: "92%", label: "Clients fidèles" },
  { value: "14", label: "Secteurs couverts" },
  { value: "20 ans", label: "D'expertise" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Layered background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,150,10,0.18) 0%, transparent 65%), radial-gradient(ellipse 60% 80% at 100% 50%, rgba(30,58,95,0.6) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Corner accents */}
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-px w-48 bg-gradient-to-l from-accent/60 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-48 w-px bg-gradient-to-b from-accent/60 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-px w-48 bg-gradient-to-r from-accent/40 to-transparent" />

      <div className="container-page relative py-24 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[1fr_420px] lg:items-center lg:gap-20">

          {/* Left */}
          <div>
            <Reveal>
              <div className="section-label mb-6 text-accent">
                Cabinet de conseil en stratégie
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
                Des décisions<br />
                stratégiques<br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-accent">claires</span>
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent/40"
                  />
                </span>
                ,<br />
                une croissance<br />
                durable.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-slate-300 lg:text-xl">
                Meyge Consulting accompagne les dirigeants dans leurs transformations
                majeures — stratégie, performance opérationnelle, conduite du changement.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 rounded-md bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground transition-all hover:bg-accent-light hover:shadow-[0_0_24px_rgba(201,150,10,0.35)] cursor-pointer"
                >
                  Diagnostic gratuit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#resultats"
                  className="group inline-flex items-center gap-2 border-b border-white/30 pb-0.5 text-sm font-semibold text-white/80 transition-colors hover:border-accent hover:text-accent cursor-pointer"
                >
                  Voir nos résultats
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-10 flex items-center gap-3 text-sm text-slate-400">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <span>4,9/5 · 120+ avis de dirigeants</span>
              </div>
            </Reveal>
          </div>

          {/* Right — glass card */}
          <Reveal delay={0.1} className="relative">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
              <div
                aria-hidden
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse at top right, rgba(201,150,10,0.12), transparent 60%)",
                }}
              />
              <p className="section-label relative">Impact mesuré</p>

              <div className="relative mt-6 grid grid-cols-2 gap-5">
                {STATS.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/8 bg-white/5 p-4">
                    <p className="font-heading text-3xl font-bold tracking-tight text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="relative mt-6 rounded-xl border border-white/8 bg-white/4 p-5 text-sm leading-relaxed text-slate-300">
                <span className="mb-2 block font-heading text-3xl leading-none text-accent/50">&ldquo;</span>
                Meyge Consulting a structuré notre plan stratégique à 3 ans et
                sécurisé une croissance de +28% de notre chiffre d&apos;affaires.
                <footer className="mt-3 font-semibold text-white">
                  — Directrice Générale, ETI industrielle
                </footer>
              </div>
            </div>

            {/* Decorative glow behind card */}
            <div
              aria-hidden
              className="absolute -bottom-8 -right-8 -z-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
            />
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 pt-1.5">
          <div className="h-2 w-0.5 animate-bounce rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}
