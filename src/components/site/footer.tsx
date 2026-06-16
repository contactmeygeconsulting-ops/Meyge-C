import Link from "next/link";

<<<<<<< HEAD
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
=======
const LINKS = [
  {
    title: "Expertises",
    items: ["Stratégie d'entreprise", "Performance opérationnelle", "Transformation & croissance", "Conduite du changement"],
  },
  {
    title: "Cabinet",
    items: ["À propos", "Nos consultants", "Carrières", "Presse"],
  },
  {
    title: "Ressources",
    items: ["Études de cas", "Insights", "Webinars", "Mentions légales"],
>>>>>>> origin/claude/happy-cannon-50zemd
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
<<<<<<< HEAD
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
=======
      <div className="container-page pt-16 pb-8">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">

          {/* Brand */}
          <div>
            <Link href="#top" className="inline-flex items-center gap-2 font-heading text-base font-bold text-primary">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
                MC
              </span>
              Meyge Consulting
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Cabinet de conseil en stratégie et transformation pour dirigeants
              et comités exécutifs.
            </p>
            <a
              href="mailto:contact.meygeconsulting@gmail.com"
              className="mt-4 block text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              contact.meygeconsulting@gmail.com
            </a>
          </div>

          {/* Nav columns */}
          <div className="grid gap-8 sm:grid-cols-3">
            {LINKS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary cursor-pointer">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-7 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Meyge Consulting. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors cursor-pointer">Politique de confidentialité</a>
            <a href="#" className="hover:text-primary transition-colors cursor-pointer">Mentions légales</a>
          </div>
>>>>>>> origin/claude/happy-cannon-50zemd
        </div>
      </div>
    </footer>
  );
}
