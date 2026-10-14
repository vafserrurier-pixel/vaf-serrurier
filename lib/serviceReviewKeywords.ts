// Mots-clés qui font remonter, sur chaque page de service, les avis Google dont le texte
// les contient (voir pickReviewsForService dans lib/reviews.ts). Comparaison sans casse,
// sans accents, par fragment de mot.
export const serviceReviewKeywords = {
  "/ouverture-de-porte-nice/": ["porte", "claqu", "ouvr", "ouvert", "clé", "bloqu", "enferm"],
  "/changement-serrure-nice/": ["serrure", "cylindre", "barillet", "changé", "remplac"],
  "/urgence-serrurier-nice/": ["urgence", "nuit", "soir", "dimanche", "samedi", "rapide", "vite"],
  "/mise-en-securite-apres-effraction-nice/": ["effraction", "cambriol", "forcé", "sécuris"],
  "/blindage-porte-nice/": ["blind", "porte blindée", "blindage"],
  "/installation-porte-blindee-nice/": ["blind", "porte blindée", "blindage"],
  "/serrure-carenee-nice/": ["carénée", "5 points", "multipoint"],
  "/poignee-blindee-nice/": ["poignée", "blindée"],
  "/ouverture-de-coffre-fort-nice/": ["coffre"],
  "/installation-coffre-fort-nice/": ["coffre"],
} as const;

export type ServiceReviewPath = keyof typeof serviceReviewKeywords;

// Avis écartés d'office sur ce site (serrurier) : ceux dont le texte parle d'un autre métier.
// Même mécanisme sur le site plombier avec la liste inverse : serrur, cylindre, porte claquée, blindage.
// Comparaison sans casse, sans accents, par fragment de mot.
export const offTradeReviewKeywords = ["plomb", "fuite", "chauffe-eau", "canalisation", "wc", "sanibroyeur"];
