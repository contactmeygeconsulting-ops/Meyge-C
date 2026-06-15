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
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          La confiance de dirigeants exigeants
        </p>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {CLIENTS.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center rounded-md border border-border bg-background px-4 py-3 text-center text-sm font-semibold text-muted-foreground"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
