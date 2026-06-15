"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./reveal";

const FAQS = [
  {
    q: "Quels types d'entreprises accompagnez-vous ?",
    a: "Nous travaillons principalement avec des PME, ETI et directions générales de groupes, dans tous les secteurs. Nos missions s'adressent aux dirigeants souhaitant structurer leur croissance, piloter une transformation ou préparer une opération capitalistique.",
  },
  {
    q: "Combien de temps dure une mission type ?",
    a: "Un diagnostic stratégique dure généralement 4 à 6 semaines. Un accompagnement complet (stratégie + exécution) s'étend sur 3 à 9 mois selon la complexité du projet. Nous adaptons toujours la durée à vos besoins réels.",
  },
  {
    q: "Proposez-vous un premier échange sans engagement ?",
    a: "Oui. Nous offrons un premier échange de 30 à 45 minutes avec un consultant senior pour comprendre votre contexte, vos enjeux, et vous indiquer si nous pouvons créer de la valeur ensemble — sans aucun engagement de votre part.",
  },
  {
    q: "Comment se passe la facturation ?",
    a: "Nos missions sont facturées en forfait mensuel ou à l'étape selon la nature du projet. Nous établissons un devis transparent dès le lancement, sans frais cachés.",
  },
  {
    q: "Intervenez-vous dans le secteur public ?",
    a: "Nous travaillons principalement avec le secteur privé, mais nous acceptons ponctuellement des missions auprès d'établissements publics ou d'organisations para-publiques selon les sujets.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-muted/30 py-20 lg:py-28">
      <div className="container-page max-w-3xl">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">
            FAQ
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Questions fréquentes
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 space-y-3">
          {FAQS.map((faq, index) => (
            <div
              key={faq.q}
              className="overflow-hidden rounded-xl border border-border bg-surface"
            >
              <button
                type="button"
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-primary transition-colors hover:bg-muted/40 cursor-pointer"
                aria-expanded={open === index}
              >
                {faq.q}
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === index && (
                <div className="border-t border-border px-6 py-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
