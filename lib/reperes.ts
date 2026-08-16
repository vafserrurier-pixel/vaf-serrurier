// Repères géographiques réels par quartier, trouvés via recherche web (sources
// vérifiées, aucune invention). Utilisés pour enrichir le contenu des pages
// quartier avec des mentions concrètes plutôt que des généralités.
//
// `confidence: "faible"` = un seul repère modeste (souvent juste un nom de
// voie), pas de monument/lieu notable — ne pas écrire plus précis que ce qui
// est listé ici sans confirmation explicite de Benoît.
//
// Attention : le Monastère de Cimiez appartient au quartier Cimiez, pas à
// Rimiez, malgré une association courante — ne pas les confondre.

export type Repere = {
  landmarks: string[];
  confidence: "solide" | "faible";
};

export const reperes: Record<string, Repere> = {
  // Centre
  "Jean-Médecin": {
    landmarks: ["Avenue Jean-Médecin", "station de tramway Jean Médecin (ligne 1)"],
    confidence: "solide",
  },
  "Carré d'Or": {
    landmarks: ["Rue de la Buffa", "zone piétonne rue Masséna/rue de France", "Boulevard Victor-Hugo"],
    confidence: "solide",
  },
  "Quartier Wilson": {
    landmarks: ["Place Wilson", "Coulée Verte", "station de tramway Durandy"],
    confidence: "solide",
  },
  "Quartier des Musiciens": {
    landmarks: ["rues Mozart, Rossini, Gounod, Verdi, Paganini", "Boulevard Victor-Hugo", "Avenue Thiers"],
    confidence: "solide",
  },
  "Quartier des Fleurs": {
    landmarks: ["Avenue des Fleurs", "Boulevard Gambetta", "Boulevard François-Grosso"],
    confidence: "solide",
  },
  Baumettes: {
    landmarks: ["Musée des Beaux-Arts Jules-Chéret", "Boulevard François-Grosso", "rue de France"],
    confidence: "solide",
  },
  Libération: {
    landmarks: ["Place du Général-de-Gaulle", "Marché de la Libération (avenue Malausséna)", "tramway ligne 1"],
    confidence: "solide",
  },
  Gambetta: {
    landmarks: ["Boulevard Gambetta", "voie ferrée au nord", "proximité Promenade des Anglais"],
    confidence: "solide",
  },
  Cimiez: {
    landmarks: ["Musée Matisse (Villa des Arènes)", "Monastère de Cimiez", "site archéologique romain de Cemenelum"],
    confidence: "solide",
  },
  Desambrois: {
    landmarks: ["Avenue Desambrois"],
    confidence: "faible",
  },
  Carabacel: {
    landmarks: ["Boulevard Carabacel", "Place Wilson", "MAMAC"],
    confidence: "solide",
  },
  Garibaldi: {
    landmarks: ["Place Garibaldi (statue de 1891, Palais Avigdor)"],
    confidence: "solide",
  },
  "Parc Impérial": {
    landmarks: ["Boulevard du Parc-Impérial", "Cathédrale orthodoxe russe", "Boulevard du Tsarewitch"],
    confidence: "solide",
  },
  "Saint-Philippe": {
    landmarks: ["Avenue Estienne-d'Orves", "gare de Nice-Saint-Philippe", "Boulevard du Tzarewitch"],
    confidence: "solide",
  },
  "Promenade des Anglais": {
    landmarks: ["la Promenade (7 km)", "tramway ligne 2"],
    confidence: "solide",
  },
  Magnan: {
    landmarks: ["Rue de France", "Promenade des Anglais", "tramway ligne 2 arrêt Magnan"],
    confidence: "solide",
  },
  "La Madeleine": {
    landmarks: ["Boulevard de la Madeleine"],
    confidence: "faible",
  },
  "Saint-Pierre-de-Féric": {
    landmarks: ["autoroute A8 (tunnel de 220 m)", "ancien village des hauteurs"],
    confidence: "faible",
  },
  "Vieux-Nice": {
    landmarks: ["Cours Saleya", "Place Masséna (Fontaine du Soleil)", "Cathédrale Sainte-Réparate", "Place Saint-François"],
    confidence: "solide",
  },
  // Est
  Riquier: {
    landmarks: ["Place Max-Barel", "Place Arson", "Église Saint-Martin"],
    confidence: "solide",
  },
  Pasteur: {
    landmarks: ["Hôpital Pasteur", "arrêt tramway Hôpital Pasteur (ligne 1)"],
    confidence: "solide",
  },
  "Saint-Roch": {
    landmarks: ["Place Saint-Roch (église classée)", "Boulevard Saint-Roch", "marché de Saint-Roch"],
    confidence: "solide",
  },
  "l'Ariane": {
    landmarks: ["Place des Mosaïques", "Rue Anatole-de-Monzie", "Parc des Tripodes", "Jardin Saramito"],
    confidence: "solide",
  },
  "Mont Boron": {
    landmarks: ["Fort du Mont-Alban/batterie du Mont-Boron", "Château de l'Anglais", "parc forestier (80 ha)"],
    confidence: "solide",
  },
  "Mont Alban": {
    landmarks: ["Fort du Mont-Alban (1557-1560)"],
    confidence: "solide",
  },
  "Le Port": {
    landmarks: ["Place Île-de-Beauté", "Église Notre-Dame-du-Port (1853)", "proximité Place Garibaldi"],
    confidence: "solide",
  },
  "Bon Voyage": {
    landmarks: ["rue Fenoglio-de-Briga", "rue Général-Tordo", "Route de Turin"],
    confidence: "faible",
  },
  // Nord
  Brancolar: {
    landmarks: ["Avenue de Brancolar", "Boulevard des 2 Corniches"],
    confidence: "faible",
  },
  Poètes: {
    landmarks: ["Parc Chambrun", "rues Alfred-de-Musset, Georges-Sand, Charles-Baudelaire, Edmond-Rostand"],
    confidence: "solide",
  },
  Chambrun: {
    landmarks: ["Avenue de Chambrun", "Parc Chambrun"],
    confidence: "solide",
  },
  Gairaut: {
    landmarks: ["Cascade de Gairaut (monument historique depuis 2001)"],
    confidence: "solide",
  },
  Rimiez: {
    landmarks: ["Avenue de Rimiez"],
    confidence: "faible",
  },
  "Saint-Pancrace": {
    landmarks: ["Église de Saint-Pancrace", "Corniche des Oliviers", "Route de la Sirole"],
    confidence: "solide",
  },
  "Corniche des Oliviers": {
    landmarks: ["la Corniche des Oliviers elle-même", "Avenue de Pessicart et Avenue de Féric en limite"],
    confidence: "faible",
  },
  Pessicart: {
    landmarks: ["Avenue de Pessicart", "Église Saint-Paul"],
    confidence: "solide",
  },
  // Ouest
  "L'Archet": {
    landmarks: ["Hôpital de l'Archet"],
    confidence: "solide",
  },
  "Saint-Antoine": {
    landmarks: ["Chemin de Saint-Antoine", "Route de Bellet", "Corniche Fleurie", "Parc Carol-de-Roumanie"],
    confidence: "solide",
  },
  Fabron: {
    landmarks: ["Avenue de Fabron", "Avenue de la Lanterne", "Parc Carol-de-Roumanie", "Château de Fabron"],
    confidence: "solide",
  },
  Carras: {
    landmarks: ["Plage de Carras", "Avenue de la Californie"],
    confidence: "solide",
  },
  Californie: {
    landmarks: ["Avenue de la Californie", "tramway ligne 2"],
    confidence: "solide",
  },
  "Les Moulins": {
    landmarks: ["Boulevard Paul-Montel", "Avenue Martin-Luther-King"],
    confidence: "solide",
  },
  "Corniche Fleurie": {
    landmarks: ["la Corniche Fleurie elle-même"],
    confidence: "faible",
  },
  Arénas: {
    landmarks: ["Aéroport Nice-Côte d'Azur", "tramway ligne 2", "gare multimodale de Saint-Augustin"],
    confidence: "solide",
  },
  "Saint-Isidore": {
    landmarks: ["Chemin de la Ginestière", "Route de Grenoble", "Église Saint-Isidore", "tramway ligne 3"],
    confidence: "solide",
  },
  Lingostière: {
    landmarks: ["Centre commercial Nice Lingostière (Carrefour, Forum Lingostière, Leroy Merlin)"],
    confidence: "solide",
  },
  "Secteur Bellet": {
    landmarks: ["Vignoble AOC Bellet (rive gauche du Var, AOC depuis 1941)"],
    confidence: "solide",
  },
};
