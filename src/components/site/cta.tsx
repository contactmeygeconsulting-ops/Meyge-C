import { ArrowRight, Mail, Phone } from "lucide-react";
import { Reveal } from "./reveal";

export function Cta() {
  return (
<<<<<<< HEAD
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-14 text-primary-foreground sm:px-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 90% 10%, rgba(202,138,4,0.35), transparent 45%), radial-gradient(circle at 10% 90%, rgba(51,65,85,0.5), transparent 50%)",
=======
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary">
            {/* Background accents */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 80% at 100% 50%, rgba(201,150,10,0.2), transparent 60%), radial-gradient(ellipse 50% 60% at 0% 0%, rgba(30,58,95,0.8), transparent 50%)",
>>>>>>> origin/claude/happy-cannon-50zemd
              }}
            />
            <div
              aria-hidden
<<<<<<< HEAD
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Prêt à structurer votre prochaine étape de croissance&nbsp;?
                </h2>
                <p className="mt-4 max-w-md text-slate-300">
                  Échangez gratuitement avec un consultant senior pour évaluer vos
                  priorités stratégiques et identifier vos premiers leviers d&apos;action.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:contact.meygeconsulting@gmail.com"
                    className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
                  >
                    Demander un diagnostic gratuit
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
=======
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            {/* Top accent line */}
            <div aria-hidden className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

            <div className="relative grid gap-12 px-8 py-16 sm:px-14 sm:py-20 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="section-label text-accent">Passons à l'action</div>
                <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                  Prêt à structurer<br />votre prochaine étape<br />de croissance&nbsp;?
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
                  Échangez gratuitement avec un consultant senior pour évaluer vos
                  priorités stratégiques et identifier vos premiers leviers d&apos;action.
                </p>
                <div className="mt-8">
                  <a
                    href="mailto:contact.meygeconsulting@gmail.com"
                    className="group inline-flex items-center gap-2.5 rounded-md bg-accent px-8 py-4 text-sm font-bold text-accent-foreground transition-all hover:bg-accent-light hover:shadow-[0_0_32px_rgba(201,150,10,0.4)] cursor-pointer"
                  >
                    Demander un diagnostic gratuit
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
>>>>>>> origin/claude/happy-cannon-50zemd
                  </a>
                </div>
              </div>

<<<<<<< HEAD
              <div className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <a
                  href="mailto:contact.meygeconsulting@gmail.com"
                  className="flex items-center gap-3 rounded-md p-3 text-sm transition-colors hover:bg-white/5 cursor-pointer"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/20">
                    <Mail className="h-5 w-5 text-accent" />
                  </span>
                  <div>
                    <p className="font-semibold">Écrivez-nous</p>
                    <p className="text-slate-300">contact.meygeconsulting@gmail.com</p>
=======
              <div className="space-y-3">
                <a
                  href="mailto:contact.meygeconsulting@gmail.com"
                  className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10 cursor-pointer"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</p>
                    <p className="mt-0.5 font-semibold text-white">contact.meygeconsulting@gmail.com</p>
>>>>>>> origin/claude/happy-cannon-50zemd
                  </div>
                </a>
                <a
                  href="tel:+33100000000"
<<<<<<< HEAD
                  className="flex items-center gap-3 rounded-md p-3 text-sm transition-colors hover:bg-white/5 cursor-pointer"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/20">
                    <Phone className="h-5 w-5 text-accent" />
                  </span>
                  <div>
                    <p className="font-semibold">Appelez-nous</p>
                    <p className="text-slate-300">+33 1 00 00 00 00</p>
=======
                  className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10 cursor-pointer"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Téléphone</p>
                    <p className="mt-0.5 font-semibold text-white">+33 1 00 00 00 00</p>
>>>>>>> origin/claude/happy-cannon-50zemd
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
