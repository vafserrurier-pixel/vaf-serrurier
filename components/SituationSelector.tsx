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
  /**
   * Situation prioritaire (urgence reelle : personne ou animal a l'interieur).
   * Traitement visuel distinct (accent urgent + badge), reserve aux cas qui
   * le justifient reellement pour ne pas diluer l'effet de hierarchie.
   */
  priority?: boolean;
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
      {situations.map(({ Icon, title, text, anchorId, priority }) => {
        const isSelected = selected === anchorId;
        return (
          <button
            key={title}
            type="button"
            onClick={() => handleClick(anchorId)}
            aria-pressed={isSelected}
            className={`relative flex items-start gap-3 text-left rounded-xl p-3 border transition-all hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] active:shadow-none active:translate-y-0 ${
              isSelected
                ? priority
                  ? "bg-urgent/10 border-urgent"
                  : "bg-steel/10 border-steel"
                : priority
                  ? "bg-urgent/5 border-urgent/30 hover:border-urgent"
                  : "border-navy/10 hover:border-steel"
            }`}
          >
            {priority && (
              <span className="absolute -top-2 -right-2 bg-urgent text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
                Priorité
              </span>
            )}
            <span
              className={`inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0 transition-colors ${
                priority
                  ? isSelected
                    ? "bg-urgent text-white"
                    : "bg-urgent/15 text-urgent"
                  : isSelected
                    ? "bg-steel text-white"
                    : "bg-steel/10 text-steel"
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
