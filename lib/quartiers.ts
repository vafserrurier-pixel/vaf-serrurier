// Utilitaires de gabarit pour les pages de quartier.
// `builtQuartiers` liste les 46 quartiers, tous publiés — voir `lib/business.ts`
// (export `zones`) pour la répartition par secteur.

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

export const builtQuartiers = [
  // Centre (19)
  "Jean-Médecin",
  "Carré d'Or",
  "Quartier Wilson",
  "Quartier des Musiciens",
  "Quartier des Fleurs",
  "Baumettes",
  "Libération",
  "Gambetta",
  "Cimiez",
  "Desambrois",
  "Carabacel",
  "Garibaldi",
  "Parc Impérial",
  "Saint-Philippe",
  "Promenade des Anglais",
  "Magnan",
  "La Madeleine",
  "Saint-Pierre-de-Féric",
  "Vieux-Nice",
  // Est (8)
  "Riquier",
  "Pasteur",
  "Saint-Roch",
  "l'Ariane",
  "Mont Boron",
  "Mont Alban",
  "Le Port",
  "Bon Voyage",
  // Nord (8)
  "Brancolar",
  "Poètes",
  "Chambrun",
  "Gairaut",
  "Rimiez",
  "Saint-Pancrace",
  "Corniche des Oliviers",
  "Pessicart",
  // Ouest (11)
  "L'Archet",
  "Saint-Antoine",
  "Fabron",
  "Carras",
  "Californie",
  "Les Moulins",
  "Corniche Fleurie",
  "Arénas",
  "Saint-Isidore",
  "Lingostière",
  "Secteur Bellet",
] as const;

export function isQuartierBuilt(name: string): boolean {
  return (builtQuartiers as readonly string[]).includes(name);
}

export const sectorPages = {
  centre: { href: "/serrurier-nice-centre/", label: "Nice Centre" },
  est: { href: "/serrurier-nice-est/", label: "Nice Est" },
  nord: { href: "/serrurier-nice-nord/", label: "Nice Nord" },
  ouest: { href: "/serrurier-nice-ouest/", label: "Nice Ouest" },
} as const;
