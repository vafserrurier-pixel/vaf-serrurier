// Photos réelles (fournies par Benoît). Deux pools :
// - portraitPool : photos de Benoît, utilisées pour l'en-tête de chaque page
//   (même traitement que la photo de l'accueil).
// - generalPhotoPool : photos d'objets (serrures, cylindres, portes, outils),
//   disponibles pour d'autres usages futurs.
// Le texte alternatif reste volontairement générique — ces photos ne sont
// pas prises dans le quartier en question, on ne prétend pas le contraire.

import { zones } from "./business";

export type Photo = { src: string; alt: string };

export const portraitPool: Photo[] = [
  { src: "/images/pool/benoit-serrurier-pose-porte-nice.webp", alt: "Benoît, artisan serrurier, après la pose d'une porte à Nice" },
  { src: "/images/pool/benoit-serrurier-mecanisme-porte-nice.webp", alt: "Benoît, artisan serrurier, à côté d'un mécanisme de porte à Nice" },
  { src: "/images/pool/benoit-serrurier-serrure-posee-nice.webp", alt: "Benoît, artisan serrurier, à côté d'une serrure posée à Nice" },
  { src: "/images/pool/benoit-serrurier-avant-intervention-nice.webp", alt: "Benoît, artisan serrurier, avant une intervention à Nice" },
  { src: "/images/pool/benoit-artisan-serrurier-nice.webp", alt: "Benoît, artisan serrurier à Nice" },
  { src: "/images/pool/benoit-serrurier-avant-pose-nice.webp", alt: "Benoît, artisan serrurier, avant une pose de serrure à Nice" },
  { src: "/images/pool/serrure-electronique-cle-bleue-nice.webp", alt: "Benoît, artisan serrurier, à côté d'une porte à Nice" },
  { src: "/images/pool/porte-grise-ancienne-plaque-laiton-nice.webp", alt: "Benoît, artisan serrurier, devant une porte ancienne à Nice" },
  { src: "/images/pool/mecanisme-ferme-porte-heracles-sevax-nice.webp", alt: "Benoît, artisan serrurier, avec un trousseau de clés à Nice" },
  { src: "/images/pool/porte-bois-ancienne-cadre-use-cylindre-nice.webp", alt: "Benoît, artisan serrurier, prêt pour une intervention à Nice" },
];

export const generalPhotoPool: Photo[] = [
  { src: "/images/pool/serrure-ancienne-porte-rouge-nice.webp", alt: "Serrure ancienne sur porte rouge, intervention à Nice" },
  { src: "/images/pool/reparation-mecanisme-serrure-nice.webp", alt: "Réparation d'un mécanisme de serrure par un serrurier à Nice" },
  { src: "/images/pool/percage-nouveau-cylindre-porte-nice.webp", alt: "Perçage pour un nouveau cylindre sur une porte à Nice" },
  { src: "/images/pool/serrure-portail-ancienne-cles-nice.webp", alt: "Serrure de portail ancienne avec ses clés, à Nice" },
  { src: "/images/pool/poignee-porte-serrurier-nice.webp", alt: "Poignée de porte posée par un serrurier à Nice" },
  { src: "/images/pool/ferme-porte-installe-serrurier-nice.webp", alt: "Ferme-porte installé par un serrurier à Nice" },
  { src: "/images/pool/poignee-cylindre-porte-bois-nice.webp", alt: "Poignée et cylindre sur porte en bois, à Nice" },
  { src: "/images/pool/porte-entree-ancienne-quincaillerie-laiton-nice.webp", alt: "Porte d'entrée ancienne avec quincaillerie en laiton, à Nice" },
  { src: "/images/pool/porte-neuve-imposte-ferronnerie-nice.webp", alt: "Porte neuve installée sous une imposte à ferronnerie, à Nice" },
  { src: "/images/pool/cylindre-fichet-main-serrurier-nice.webp", alt: "Cylindre Fichet tenu en main par un serrurier à Nice" },
  { src: "/images/pool/porte-installation-serrurier-nice.webp", alt: "Porte en cours d'installation par un serrurier à Nice" },
  { src: "/images/pool/porte-immeuble-interphone-securisee-nice.webp", alt: "Porte d'immeuble avec interphone, sécurisée à Nice" },
  { src: "/images/pool/serrure-moderne-posee-porte-nice.webp", alt: "Serrure moderne posée sur une porte à Nice" },
  { src: "/images/pool/cle-serrure-portail-toits-nice.webp", alt: "Clé dans une serrure de portail, vue sur les toits de Nice" },
  { src: "/images/pool/porte-blindee-pose-serrurier-nice.webp", alt: "Porte blindée en cours de pose par un serrurier à Nice" },
  { src: "/images/pool/serrure-heracles-posee-porte-nice.webp", alt: "Serrure Heraclès posée sur une porte à Nice" },
  { src: "/images/pool/cylindre-fichet-boitier-demonte-etabli-nice.webp", alt: "Boîtier de serrure Fichet démonté sur un établi, réparation à Nice" },
  { src: "/images/pool/cylindre-europeen-sectionne-deux-parties-nice.webp", alt: "Cylindre européen sectionné en deux parties lors d'un remplacement à Nice" },
  { src: "/images/pool/serrure-encastree-porte-rouge-nice.webp", alt: "Serrure encastrée sur une porte rouge, intervention à Nice" },
  { src: "/images/pool/poignee-laiton-porte-grise-nice.webp", alt: "Poignée en laiton posée sur une porte grise à Nice" },
  { src: "/images/pool/cylindre-extraction-pavage-rue-nice.webp", alt: "Extraction d'un cylindre de serrure sur le pavage d'une rue à Nice" },
  { src: "/images/pool/serrure-multipoints-porte-noire-rue-nice.webp", alt: "Serrure multipoints sur une porte noire, rue commerçante à Nice" },
  { src: "/images/pool/cylindre-perce-cadre-abime-nice.webp", alt: "Cylindre percé et cadre de porte endommagé, diagnostic à Nice" },
  { src: "/images/pool/grille-securite-cle-serrure-nice.webp", alt: "Serrure de grille de sécurité avec clé, entrée d'immeuble à Nice" },
  { src: "/images/pool/ferme-porte-mecanisme-plafond-nice.webp", alt: "Porte avec poignée blanche dans un couloir ancien à Nice" },
  { src: "/images/pool/cylindre-vachette-radial-r-boite-nice.webp", alt: "Serrure électronique moderne avec clé, installation à Nice" },
  { src: "/images/pool/cylindre-use-main-cles-nice.webp", alt: "Boîte de cylindre mécanique Vachette Radial-R, pose à Nice" },
  { src: "/images/pool/coffre-fort-force-outils-nice.webp", alt: "Poignée et serrure en laiton sur une porte en bois à Nice" },
  { src: "/images/pool/porte-grise-double-vantail-serrurier-nice.webp", alt: "Porte ancienne à double vantail avec serrure de sûreté à Nice" },
  { src: "/images/pool/serrure-fichet-boitier-porte-blanche-nice.webp", alt: "Poignée et cylindre dorés installés sur une porte beige à Nice" },
  { src: "/images/pool/serrure-noire-poignee-preparation-nice.webp", alt: "Mécanisme de ferme-porte Heraclès, remplacement à Nice" },
  { src: "/images/pool/outils-serrurier-coffre-vehicule-nice.webp", alt: "Serrure noire avec poignée, préparation avant pose à Nice" },
  { src: "/images/pool/materiel-serrurier-heracles-terminal-nice.webp", alt: "Matériel de serrurier et terminal de paiement dans le véhicule à Nice" },
  { src: "/images/pool/porte-grise-securisee-barre-anti-effraction-nice.webp", alt: "Porte grise à double battant avec poignée et cylindre à Nice" },
  { src: "/images/pool/verrou-heracles-laiton-porte-blanche-nice.webp", alt: "Verrou de sûreté Heraclès en laiton posé sur une porte blanche à Nice" },
  { src: "/images/pool/poignee-serrure-moderne-porte-creme-nice.webp", alt: "Poignée de serrure moderne avec clé sur une porte crème à Nice" },
  { src: "/images/pool/portail-cle-terrasse-toits-nice-vue.webp", alt: "Clé dans une serrure de portail, vue sur les toits de Nice" },
  { src: "/images/pool/perceuse-boitier-serrure-installation-nice.webp", alt: "Perceuse et boîtier de serrure prêts pour l'installation à Nice" },
  { src: "/images/pool/cylindre-heracles-carte-reproduction-nice.webp", alt: "Cylindre Heraclès neuf avec carte de reproduction, pose à Nice" },
  { src: "/images/pool/serrure-mottura-boitier-cadre-porte-nice.webp", alt: "Boîtier de serrure Mottura posé sur un cadre de porte à Nice" },
  { src: "/images/pool/cylindre-installation-porte-beige-detail-nice.webp", alt: "Détail de la pose d'un cylindre sur une porte beige à Nice" },
  { src: "/images/pool/poignee-cylindre-dores-porte-beige-nice.webp", alt: "Poignée et cylindre dorés posés sur une porte beige à Nice" },
  { src: "/images/pool/verrou-heracles-porte-blanche-decor-nice.webp", alt: "Verrou Heraclès posé sur une porte blanche à Nice" },
  { src: "/images/pool/mecanisme-serrure-piece-detachee-sol-nice.webp", alt: "Pièce de mécanisme de serrure posée au sol pendant une intervention à Nice" },
];

// Attribution déterministe construite à partir des secteurs réels : chaque
// quartier d'un même secteur reçoit une photo différente (les secteurs ont
// tous moins de quartiers que le pool n'a de photos), pour qu'on n'affiche
// jamais la même image sur deux pages liées entre elles via "quartiers
// voisins". Les décalages par secteur limitent aussi les répétitions
// visibles d'un secteur à l'autre.
function buildAssignments(pool: Photo[]): Record<string, Photo> {
  const map: Record<string, Photo> = {};
  const sectorKeys = Object.keys(zones) as (keyof typeof zones)[];
  const poolSize = pool.length;
  sectorKeys.forEach((sector, sectorIndex) => {
    const offset = sectorIndex * 3;
    zones[sector].forEach((quartier, i) => {
      map[quartier] = pool[(offset + i) % poolSize];
    });
    // Page secteur elle-même : décalée par rapport à ses propres quartiers.
    map[sector] = pool[(offset + zones[sector].length) % poolSize];
  });
  return map;
}

const photoAssignments = buildAssignments(generalPhotoPool);
const portraitAssignments = buildAssignments(portraitPool);

export function pickPhoto(seed: string): Photo {
  return photoAssignments[seed] ?? generalPhotoPool[0];
}

export function pickPortrait(seed: string): Photo {
  return portraitAssignments[seed] ?? portraitPool[0];
}
