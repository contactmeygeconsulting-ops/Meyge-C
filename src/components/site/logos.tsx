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
    <section className="border-b border-border bg-surface py-10">
      <div className="container-page">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            La confiance de dirigeants exigeants
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {CLIENTS.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center rounded-md border border-border bg-background px-4 py-3 text-center text-sm font-semibold text-muted-foreground transition-colors hover:border-accent/30 hover:text-primary"
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
