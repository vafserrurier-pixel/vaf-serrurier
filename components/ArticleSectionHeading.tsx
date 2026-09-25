import type { ReactNode } from "react";

/**
 * Titre de section numerote : le numero (aligne sur celui du sommaire,
 * voir ArticleToc) reste visible dans le corps du texte, soit sous forme
 * de badge plein (par defaut), soit en chiffre colore "plain" plus leger,
 * assorti au meme accent que le sommaire (voir ArticleToc/ArticleLayout
 * `accentColor`) pour rester coherent visuellement entre les deux.
 *
 * `level` choisit la balise HTML reellement rendue (h2 par defaut, pour
 * les articles de blog ou ces sections sont directement sous le H1).
 * Dans un contexte deja emboite sous un H2 (ex. ServiceGuideSection,
 * dont le titre "Guide complet" est un H2), passer level="h3" pour ne
 * pas casser la hierarchie Hn : voir l'audit H1-H3 mene plus tot sur le
 * site : ne pas reproduire une pile de H2 paralleles la ou un seul H2
 * suffit et le reste doit descendre d'un niveau.
 */
export default function ArticleSectionHeading({
  number,
  id,
  level = "h2",
  size = "default",
  numberStyle = "badge",
  children,
}: {
  number: number;
  id: string;
  level?: "h2" | "h3";
  /** "lg" agrandit le titre sur desktop (taille mobile inchangee). "default" preserve le rendu historique. */
  size?: "default" | "lg";
  /**
   * "badge" (par defaut) : carre navy plein, rendu historique inchange.
   * "plain" : chiffre colore sans encadre, plus leger, coherent avec un
   * sommaire dont l'accent a ete assorti (voir ArticleToc accentColor).
   */
  numberStyle?: "badge" | "plain";
  children: ReactNode;
}) {
  const Heading = level;
  const textSize = size === "lg" ? "text-xl sm:text-2xl" : "text-xl";
  return (
    <div className="flex items-center gap-3 mb-3">
      {numberStyle === "plain" ? (
        <span
          className="font-heading text-2xl font-black text-steel font-tabular-nums shrink-0"
          aria-hidden="true"
        >
          {String(number).padStart(2, "0")}
        </span>
      ) : (
        <span
          className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-navy text-cream font-heading font-bold text-sm shrink-0 font-tabular-nums"
          aria-hidden="true"
        >
          {String(number).padStart(2, "0")}
        </span>
      )}
      <Heading id={id} className={`font-heading ${textSize} font-bold text-navy scroll-mt-24`}>
        {children}
      </Heading>
    </div>
  );
}
