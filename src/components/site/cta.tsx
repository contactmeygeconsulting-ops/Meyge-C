import { ArrowRight, Mail, Phone } from "lucide-react";
import { Reveal } from "./reveal";

export function Cta() {
  return (
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
                  </a>
                </div>
              </div>

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
                  </div>
                </a>
                <a
                  href="tel:+33100000000"
                  className="flex items-center gap-3 rounded-md p-3 text-sm transition-colors hover:bg-white/5 cursor-pointer"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/20">
                    <Phone className="h-5 w-5 text-accent" />
                  </span>
                  <div>
                    <p className="font-semibold">Appelez-nous</p>
                    <p className="text-slate-300">+33 1 00 00 00 00</p>
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
