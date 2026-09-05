// Utilitaires de gabarit pour les pages de commune (villes voisines de Nice,
// hors Nice elle-même — distinct de lib/quartiers.ts qui gère les 46 quartiers
// intra-muros). Même logique de rollout progressif que builtQuartiers à
// l'époque : `builtCommunes` grandit une ville à la fois, tout le maillage
// (hub, accueil, pages service) se met à jour automatiquement à chaque ajout.

export function slugifyCommune(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function communeHref(name: string): string {
  return `/serrurier-${slugifyCommune(name)}/`;
}

export const communes = [
  "Èze",
  "Villefranche-sur-Mer",
  "Saint-Laurent-du-Var",
  "Cagnes-sur-Mer",
  "Beaulieu-sur-Mer",
] as const;

// Villes déjà publiées avec une page dédiée — seule cette liste pilote le
// maillage (hub zones-intervention, pastilles accueil, mini-section pages
// service, sitemap). Grandit une ville à la fois, à chaque nouvelle mise en
// ligne, pour un flux de contenu frais régulier plutôt qu'un pic unique.
export const builtCommunes = ["Èze", "Villefranche-sur-Mer", "Saint-Laurent-du-Var"] as const;

export function isCommuneBuilt(name: string): boolean {
  return (builtCommunes as readonly string[]).includes(name);
}

// Villes voisines à mettre en avant sur une page de commune donnée (parmi
// celles déjà publiées) — pour le maillage croisé entre pages de commune.
export function relatedCommunes(current: string, count = 4): string[] {
  const built = (builtCommunes as readonly string[]).filter((c) => c !== current);
  return built.slice(0, count);
}
