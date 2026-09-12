import type { ReactNode } from "react";

/**
 * Titre de section numerote : le numero (aligne sur celui du sommaire,
 * voir ArticleToc) reste visible dans le corps du texte, pas seulement
 * dans la table des matieres.
 */
export default function ArticleSectionHeading({
  number,
  id,
  children,
}: {
  number: number;
  id: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 mb-2">
      <span
        className="font-heading text-3xl font-bold text-steel/25 leading-none shrink-0 font-tabular-nums"
        aria-hidden="true"
      >
        {String(number).padStart(2, "0")}
      </span>
      <h2 id={id} className="font-heading text-xl font-bold text-navy scroll-mt-24 mt-1">
        {children}
      </h2>
    </div>
  );
}
