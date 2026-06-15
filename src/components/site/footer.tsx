import Link from "next/link";

const COLUMNS = [
  {
    title: "Expertises",
    links: ["Stratégie d'entreprise", "Performance opérationnelle", "Transformation & croissance", "Conduite du changement"],
  },
  {
    title: "Cabinet",
    links: ["À propos", "Nos consultants", "Carrières", "Presse"],
  },
  {
    title: "Ressources",
    links: ["Études de cas", "Insights", "Webinars", "Mentions légales"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="#top" className="flex items-center gap-2 font-heading text-lg font-semibold text-primary">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
              MC
            </span>
            Meyge Consulting
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Cabinet de conseil en stratégie et transformation pour dirigeants et
            comités exécutifs.
          </p>
        </div>

        {COLUMNS.map((column) => (
          <div key={column.title}>
            <h3 className="font-heading text-sm font-semibold text-primary">{column.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-primary cursor-pointer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Meyge Consulting. Tous droits réservés.</p>
          <p>contact.meygeconsulting@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
