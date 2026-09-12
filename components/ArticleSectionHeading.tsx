import type { ReactNode } from "react";

/**
 * Titre de section numerote : le numero (aligne sur celui du sommaire,
 * voir ArticleToc) reste visible dans le corps du texte sous forme de
 * badge plein, pas seulement dans la table des matieres.
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
    <div className="flex items-center gap-3 mb-3">
      <span
        className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-navy text-cream font-heading font-bold text-sm shrink-0 font-tabular-nums"
        aria-hidden="true"
      >
        {String(number).padStart(2, "0")}
      </span>
      <h2 id={id} className="font-heading text-xl font-bold text-navy scroll-mt-24">
        {children}
      </h2>
    </div>
  );
}
