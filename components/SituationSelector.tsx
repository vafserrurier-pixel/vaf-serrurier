"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export type Situation = {
  /** Element icone deja instancie (ex. <DoorIcon className="w-4 h-4" />), pas une reference de composant : ce contenu traverse la frontiere serveur/client. */
  Icon: ReactNode;
  title: string;
  text: string;
  /** Id de l'ancre (h2/h3/h4 avec scroll-mt) vers laquelle le clic doit scroller. */
  anchorId: string;
};

/**
 * Grille de cartes de situations cliquables : chaque carte scrolle vers la
 * section du guide qui correspond a la situation choisie, avec un etat
 * visuel de selection. Composant client car il gere un scroll + une
 * surbrillance au clic (comportement impossible en composant serveur).
 */
export default function SituationSelector({ situations }: { situations: Situation[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  function handleClick(anchorId: string) {
    setSelected(anchorId);
    document.getElementById(anchorId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {situations.map(({ Icon, title, text, anchorId }) => {
        const isSelected = selected === anchorId;
        return (
          <button
            key={title}
            type="button"
            onClick={() => handleClick(anchorId)}
            aria-pressed={isSelected}
            className={`flex items-start gap-3 text-left rounded-lg p-3 border transition-colors ${
              isSelected
                ? "bg-steel/10 border-steel"
                : "border-transparent hover:bg-navy/5 hover:border-navy/10"
            }`}
          >
            <span
              className={`inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0 transition-colors ${
                isSelected ? "bg-steel text-white" : "bg-steel/10 text-steel"
              }`}
            >
              {Icon}
            </span>
            <div>
              <p className="font-heading font-semibold text-navy text-sm">{title}</p>
              <p className="text-sm text-slate leading-snug mt-0.5">{text}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
