// Source unique de verite pour les 64 pages du calendrier editorial
// (Niveau 1 + Niveau 2), partagee par generate-editorial-calendar.js et
// content-freshness-report.js. Si une page est ajoutee/retiree du site,
// mettre a jour ce fichier puis relancer les deux scripts.

function slugify(name) {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const LEVEL1 = [
  { path: "/", label: "Accueil" },
  { path: "/serrurier-nice-centre/", label: "Secteur Nice Centre" },
  { path: "/serrurier-nice-est/", label: "Secteur Nice Est" },
  { path: "/serrurier-nice-nord/", label: "Secteur Nice Nord" },
  { path: "/serrurier-nice-ouest/", label: "Secteur Nice Ouest" },
  { path: "/tarifs-serrurier-nice/", label: "Tarifs" },
  { path: "/agences-syndics-nice/", label: "Agences & syndics" },
  { path: "/depannage-serrurier-nice/", label: "Service : Dépannage serrurier" },
  { path: "/ouverture-de-porte-nice/", label: "Service : Ouverture de porte" },
  { path: "/changement-serrure-nice/", label: "Service : Changement de serrure" },
  { path: "/installation-porte-blindee-nice/", label: "Service : Installation porte blindée" },
  { path: "/mis-en-securite-apres-effraction-nice/", label: "Service : Après effraction" },
  { path: "/ouverture-de-coffre-fort-nice/", label: "Service : Ouverture de coffre-fort" },
  { path: "/installation-coffre-fort-nice/", label: "Service : Installation de coffre-fort" },
];

const QUARTIERS_CENTRE = [
  "Jean-Médecin", "Carré d'Or", "Quartier Wilson", "Quartier des Musiciens",
  "Quartier des Fleurs", "Baumettes", "Libération", "Gambetta", "Cimiez",
  "Desambrois", "Carabacel", "Garibaldi", "Parc Impérial", "Saint-Philippe",
  "Promenade des Anglais", "Magnan", "La Madeleine", "Saint-Pierre-de-Féric",
  "Vieux-Nice",
];
const QUARTIERS_EST = [
  "Riquier", "Pasteur", "Saint-Roch", "l'Ariane", "Mont Boron", "Mont Alban",
  "Le Port", "Bon Voyage",
];
const QUARTIERS_NORD = [
  "Brancolar", "Poètes", "Chambrun", "Gairaut", "Rimiez", "Saint-Pancrace",
  "Corniche des Oliviers", "Pessicart",
];
const QUARTIERS_OUEST = [
  "L'Archet", "Saint-Antoine", "Fabron", "Carras", "Californie", "Les Moulins",
  "Corniche Fleurie", "Arénas", "Saint-Isidore", "Lingostière", "Secteur Bellet",
];
const COMMUNES = ["Èze", "Villefranche-sur-Mer", "Saint-Laurent-du-Var", "Cagnes-sur-Mer"];

const LEVEL2 = [
  ...QUARTIERS_CENTRE, ...QUARTIERS_EST, ...QUARTIERS_NORD, ...QUARTIERS_OUEST,
].map((name) => ({ path: `/serrurier-${slugify(name)}-nice/`, label: `Quartier : ${name}` }));

for (const commune of COMMUNES) {
  LEVEL2.push({ path: `/serrurier-${slugify(commune)}/`, label: `Commune : ${commune}` });
}

// Cadence cible (en jours) utilisee par content-freshness-report.js pour
// decider si une page est "en retard" par rapport a son niveau de priorite.
// Niveau 1 : rotation complete ~7 cycles (lun/mer/ven) = ~2-3 semaines -> 25j.
// Niveau 2 : rotation complete ~50 cycles = ~3-4 mois -> 130j.
const TARGET_DAYS = { 1: 25, 2: 130 };

module.exports = { LEVEL1, LEVEL2, TARGET_DAYS, slugify };
