// Utilitaires de gabarit pour les pages de quartier.
// `builtQuartiers` liste les 47 quartiers, tous publiés : voir `lib/business.ts`
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
  // Nord (9)
  "Brancolar",
  "Poètes",
  "Chambrun",
  "Gairaut",
  "Rimiez",
  "Saint-Pancrace",
  "Corniche des Oliviers",
  "Pessicart",
  "Mantega",
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
// donnée : favorise le maillage interne entre pages proches sans reproduire
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

// Quartiers d'AUTRES secteurs à lier depuis une page de quartier : un maillage
// transversal en plus du bloc "même secteur". L'attribution est calculée une
// fois, de façon déterministe (pas de hasard à chaque rendu) : chaque page
// reçoit 6 quartiers, au moins 1 et au plus 3 par autre secteur, choisis parmi
// ceux qui ont le moins de liens entrants à ce stade. Le secteur Centre compte
// 19 quartiers contre 8 à 11 ailleurs : sans cet équilibrage, les liens se
// concentrent sur les quelques pages des petits secteurs.
let otherSectorAssignment: Map<string, string[]> | null = null;

function computeOtherSectorAssignment(count: number): Map<string, string[]> {
  const all = builtQuartiers as readonly string[];
  const sectorOf = new Map<string, string>();
  for (const [sector, list] of Object.entries(zones)) {
    for (const name of list as readonly string[]) sectorOf.set(name, sector);
  }
  const inbound = new Map(all.map((name) => [name, 0]));
  const assignment = new Map<string, string[]>();
  all.forEach((current, position) => {
    const others = Object.keys(zones).filter((sector) => sector !== sectorOf.get(current));
    const picked: string[] = [];
    const perSector = new Map(others.map((sector) => [sector, 0]));
    const take = (sector?: string) => {
      const best = all
        .map((name, index) => ({ name, index }))
        .filter(
          ({ name }) =>
            !picked.includes(name) &&
            (sector ? sectorOf.get(name) === sector : true) &&
            others.includes(sectorOf.get(name) ?? "") &&
            (perSector.get(sectorOf.get(name) ?? "") ?? 0) < 3,
        )
        .sort(
          (x, y) =>
            (inbound.get(x.name) ?? 0) - (inbound.get(y.name) ?? 0) ||
            ((x.index + position * 7) % all.length) - ((y.index + position * 7) % all.length),
        )[0];
      if (!best) return;
      picked.push(best.name);
      inbound.set(best.name, (inbound.get(best.name) ?? 0) + 1);
      const s = sectorOf.get(best.name) ?? "";
      perSector.set(s, (perSector.get(s) ?? 0) + 1);
    };
    for (const sector of others) take(sector);
    while (picked.length < count) {
      const before = picked.length;
      take();
      if (picked.length === before) break;
    }
    assignment.set(current, picked);
  });
  return assignment;
}

export function otherSectorQuartiers(current: string): string[] {
  otherSectorAssignment ??= computeOtherSectorAssignment(6);
  return otherSectorAssignment.get(current) ?? [];
}

export const sectorPages = {
  centre: { href: "/serrurier-nice-centre/", label: "Nice Centre" },
  est: { href: "/serrurier-nice-est/", label: "Nice Est" },
  nord: { href: "/serrurier-nice-nord/", label: "Nice Nord" },
  ouest: { href: "/serrurier-nice-ouest/", label: "Nice Ouest" },
} as const;
