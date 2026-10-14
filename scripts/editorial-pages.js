// Source unique de verite pour les 20 pages du calendrier editorial
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
  { path: "/urgence-serrurier-nice/", label: "Service : Dépannage serrurier" },
  { path: "/ouverture-de-porte-nice/", label: "Service : Ouverture de porte" },
  { path: "/changement-serrure-nice/", label: "Service : Changement de serrure" },
  { path: "/installation-porte-blindee-nice/", label: "Service : Installation porte blindée" },
  { path: "/mise-en-securite-apres-effraction-nice/", label: "Service : Après effraction" },
  { path: "/ouverture-de-coffre-fort-nice/", label: "Service : Ouverture de coffre-fort" },
  { path: "/installation-coffre-fort-nice/", label: "Service : Installation de coffre-fort" },
];

// Regroupement d'octobre 2026 : seul Jean-Medecin garde une page de quartier. Les autres quartiers n'ont
// plus de page (redirection 301 vers leur secteur, voir next.config.ts) et ne sont plus dans le calendrier.
const QUARTIERS = ["Jean-Médecin"];
const COMMUNES = ["Èze", "Villefranche-sur-Mer", "Saint-Laurent-du-Var", "Cagnes-sur-Mer", "Beaulieu-sur-Mer"];

const LEVEL2 = QUARTIERS.map((name) => ({ path: `/serrurier-${slugify(name)}-nice/`, label: `Quartier : ${name}` }));

for (const commune of COMMUNES) {
  LEVEL2.push({ path: `/serrurier-${slugify(commune)}/`, label: `Commune : ${commune}` });
}

// Cadence cible (en jours) utilisee par content-freshness-report.js pour
// decider si une page est "en retard" par rapport a son niveau de priorite.
// Niveau 1 : rotation complete ~7 cycles (lun/mer/ven) = ~2-3 semaines -> 25j.
// Niveau 2 : rotation complete ~50 cycles = ~3-4 mois -> 130j.
const TARGET_DAYS = { 1: 25, 2: 130 };

module.exports = { LEVEL1, LEVEL2, TARGET_DAYS, slugify };
