import { Reveal } from "./reveal";

const CLIENTS = [
  "Norvest Group",
  "Atelis Industrie",
  "Caprion Santé",
  "Fluxio Énergie",
  "Bastide & Cie",
  "Lumea Capital",
];

export function Logos() {
  return (
    <section className="bg-surface py-12">
      <div className="container-page">
        <Reveal>
          <p className="text-center text-[0.68rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Ils nous font confiance
          </p>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-6">
            {CLIENTS.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center bg-surface px-4 py-5 text-center text-xs font-bold tracking-wide text-muted-foreground transition-colors hover:bg-muted/40 hover:text-primary"
              >
                {client}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
