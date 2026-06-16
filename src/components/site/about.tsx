import { CheckCircle2, Target, TrendingUp, Users2 } from "lucide-react";
import { Reveal } from "./reveal";

const POINTS = [
  "Consultants seniors avec un minimum de 12 ans d'expérience opérationnelle",
  "Méthodologie éprouvée auprès de PME, ETI et groupes internationaux",
  "Recommandations chiffrées, priorisées et immédiatement actionnables",
  "Accompagnement jusqu'à l'exécution, pas seulement la stratégie sur papier",
];

<<<<<<< HEAD
export function About() {
  return (
    <section id="apropos" className="bg-background py-20 lg:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Pourquoi Meyge Consulting
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Un cabinet à taille humaine, des standards de grands groupes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nous combinons la rigueur des plus grands cabinets de conseil avec la
            proximité et la réactivité d&apos;une équipe dédiée à votre réussite.
          </p>

          <ul className="mt-8 space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-secondary">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="relative rounded-2xl border border-border bg-primary p-10 text-primary-foreground shadow-xl">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 0%, rgba(202,138,4,0.35), transparent 50%)",
              }}
            />
            <div className="relative grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <Target className="h-8 w-8 text-accent" />
                <p className="mt-4 font-heading text-2xl font-bold">100%</p>
                <p className="mt-1 text-sm text-slate-300">missions livrées dans les délais</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <TrendingUp className="h-8 w-8 text-accent" />
                <p className="mt-4 font-heading text-2xl font-bold">+35%</p>
                <p className="mt-1 text-sm text-slate-300">de performance moyenne post-mission</p>
              </div>
              <div className="col-span-2 rounded-xl border border-white/10 bg-white/5 p-6">
                <Users2 className="h-8 w-8 text-accent" />
                <p className="mt-4 font-heading text-2xl font-bold">12+ ans</p>
                <p className="mt-1 text-sm text-slate-300">
                  d&apos;expérience moyenne par consultant senior, issus de cabinets de
                  référence et de directions générales
                </p>
              </div>
            </div>
          </div>
          <div
            aria-hidden
            className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-2xl bg-accent/20 blur-2xl"
          />
        </Reveal>
=======
const METRICS = [
  { icon: Target, value: "100%", label: "missions livrées dans les délais" },
  { icon: TrendingUp, value: "+35%", label: "performance moyenne post-mission" },
  { icon: Users2, value: "12 ans", label: "d'expérience moyenne / consultant" },
];

export function About() {
  return (
    <section id="apropos" className="bg-background py-24 lg:py-32">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <Reveal>
            <div className="section-label">Pourquoi Meyge Consulting</div>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-primary lg:text-5xl">
              Un cabinet à taille humaine,<br />
              des standards<br />
              <span className="text-accent">de grands groupes.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Nous combinons la rigueur analytique des plus grands cabinets de conseil
              avec la proximité et la réactivité d&apos;une équipe entièrement dédiée à
              votre réussite.
            </p>

            <ul className="mt-8 space-y-4">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[0.9rem] text-secondary">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl bg-primary p-10 text-primary-foreground shadow-2xl">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 90% 0%, rgba(201,150,10,0.22), transparent 55%)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="relative space-y-4">
                {METRICS.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-5 rounded-xl border border-white/8 bg-white/5 px-6 py-5 backdrop-blur-sm"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-heading text-2xl font-bold">{value}</p>
                      <p className="mt-0.5 text-xs text-slate-400">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              aria-hidden
              className="absolute -bottom-10 -right-10 -z-10 h-48 w-48 rounded-full bg-accent/15 blur-3xl"
            />
          </Reveal>
        </div>
>>>>>>> origin/claude/happy-cannon-50zemd
      </div>
    </section>
  );
}
