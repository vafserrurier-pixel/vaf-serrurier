import type { Locale } from "./locale";

/** Note avec une décimale : virgule en français ("5,0"), point en anglais ("5.0"). */
export function formatRating(rating: number, locale: Locale = "fr"): string {
  const fixed = rating.toFixed(1);
  return locale === "fr" ? fixed.replace(".", ",") : fixed;
}

/**
 * Google renvoie le texte des avis avec des échappements Markdown devant la
 * ponctuation ("satisfait\." au lieu de "satisfait."). On retire seulement ces
 * barres obliques inverses : aucun mot n'est modifié.
 */
export function cleanReviewText(text: string): string {
  return text.replace(/\\([!-/:-@[-`{-~])/g, "$1");
}

/**
 * Raccourcit un avis à `max` caractères en coupant à la dernière espace, avec
 * « … » à la fin. Un texte qui tient déjà dans la limite est renvoyé tel quel.
 */
export function truncateReview(text: string, max = 300): { text: string; truncated: boolean } {
  if (text.length <= max) return { text, truncated: false };
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  const base = (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:.!?-]+$/, "");
  return { text: `${base}…`, truncated: true };
}
