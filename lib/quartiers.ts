// Utilitaires de gabarit pour les pages de quartier.
// `builtQuartiers` liste les 46 quartiers, tous publiés — voir `lib/business.ts`
// (export `zones`) pour la répartition par secteur.

import { zones } from "./business";

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

// Sélection courte pour le maillage service → quartier (un par secteur environ),
// plutôt que de linker les 46 pages depuis chaque page service : Google
// déconseille les gros blocs de liens internes uniformes vers des pages très
// proches les unes des autres (risque "doorway pages"). Le lien vers le hub
// complet reste disponible pour la découverte des autres quartiers.
export const featuredQuartiers = [
  "Cimiez",
  "Jean-Médecin",
  "Brancolar",
  "Riquier",
  "Fabron",
  "Vieux-Nice",
] as const;

export function isQuartierBuilt(name: string): boolean {
  return (builtQuartiers as readonly string[]).includes(name);
}

// Autres quartiers du même secteur à mettre en avant sur une page de quartier
// donnée — favorise le maillage interne entre pages proches sans reproduire
// un bloc de liens identique sur les 46 pages (chaque page pointe vers un
// sous-ensemble différent, décalé selon sa position dans la liste du secteur).
export function relatedQuartiers(
  sector: keyof typeof zones,
  current: string,
  count = 4,
): string[] {
  const list = zones[sector] as readonly string[];
  const currentIndex = list.indexOf(current);
  const related: string[] = [];
  for (let offset = 1; related.length < count && offset < list.length; offset++) {
    const candidate = list[(currentIndex + offset + list.length) % list.length];
    if (candidate !== current) related.push(candidate);
  }
  return related;
}

export const sectorPages = {
  centre: { href: "/serrurier-nice-centre/", label: "Nice Centre" },
  est: { href: "/serrurier-nice-est/", label: "Nice Est" },
  nord: { href: "/serrurier-nice-nord/", label: "Nice Nord" },
  ouest: { href: "/serrurier-nice-ouest/", label: "Nice Ouest" },
} as const;
