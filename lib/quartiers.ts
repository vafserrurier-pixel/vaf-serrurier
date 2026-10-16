// Utilitaires de gabarit pour les pages locales de Nice.
// Depuis le regroupement d'octobre 2026, seuls les 4 secteurs ont une page : voir
// `lib/business.ts` (export `zones`) pour la répartition des 47 quartiers par secteur.

const DIACRITICS_RE = /[̀-ͯ]/g;

export function slugifyQuartier(name: string): string {
  return name
    .normalize("NFD")
    .replace(DIACRITICS_RE, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function quartierHref(name: string): string {
  return `/serrurier-${slugifyQuartier(name)}-nice/`;
}

// Forme locative correcte (préposition + article) pour les titres : "Serrurier à Le Port"
// serait fautif. Par défaut "à <nom>".
const quartierLocatives: Record<string, string> = {
  "Carré d'Or": "au Carré d'Or",
  "Quartier Wilson": "dans le quartier Wilson",
  "Quartier des Musiciens": "dans le quartier des Musiciens",
  "Quartier des Fleurs": "dans le quartier des Fleurs",
  Baumettes: "aux Baumettes",
  Libération: "dans le quartier de la Libération",
  "Parc Impérial": "au Parc Impérial",
  "Promenade des Anglais": "sur la Promenade des Anglais",
  "La Madeleine": "à la Madeleine",
  "Vieux-Nice": "dans le Vieux-Nice",
  "Mont Boron": "au Mont Boron",
  "Mont Alban": "au Mont Alban",
  "Le Port": "au Port",
  Poètes: "dans le quartier des Poètes",
  "L'Archet": "à l'Archet",
  "l'Ariane": "à l'Ariane",
  Californie: "à la Californie",
  "Corniche des Oliviers": "sur la Corniche des Oliviers",
  "Corniche Fleurie": "sur la Corniche Fleurie",
  "Secteur Bellet": "dans le secteur de Bellet",
  Arénas: "à l'Arénas",
  "Les Moulins": "aux Moulins",
};

export function quartierLocative(name: string): string {
  return quartierLocatives[name] ?? `à ${name}`;
}

// Aucun quartier n'a plus de page : les 47 anciennes adresses redirigent en 301 vers leur secteur
// (next.config.ts) et leur nom est affiché en texte simple sur la page du secteur et sur
// /zones-intervention-nice/.
export const builtQuartiers: readonly string[] = [];

export function isQuartierBuilt(name: string): boolean {
  return (builtQuartiers as readonly string[]).includes(name);
}

export const sectorPages = {
  centre: { href: "/serrurier-nice-centre/", label: "Nice Centre" },
  est: { href: "/serrurier-nice-est/", label: "Nice Est" },
  nord: { href: "/serrurier-nice-nord/", label: "Nice Nord" },
  ouest: { href: "/serrurier-nice-ouest/", label: "Nice Ouest" },
} as const;

// Pages locales de Nice mises en avant dans les blocs de maillage (accueil, pages de service, pages commune) :
// les 4 secteurs. Pas de bloc de liens vers de nombreuses pages très proches les unes des autres.
export const featuredLocalPages: { href: string; label: string }[] = [
  { href: sectorPages.centre.href, label: sectorPages.centre.label },
  { href: sectorPages.est.href, label: sectorPages.est.label },
  { href: sectorPages.nord.href, label: sectorPages.nord.label },
  { href: sectorPages.ouest.href, label: sectorPages.ouest.label },
];
