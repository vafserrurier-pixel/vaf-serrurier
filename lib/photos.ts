// Pool de vraies photos (fournies par Benoît) réutilisées sur les pages
// quartier et secteur, qui n'ont pas de photo unique dédiée. Le texte
// alternatif reste volontairement générique — ces photos ne sont pas prises
// dans le quartier en question, on ne prétend pas le contraire.

import { zones } from "./business";

export type Photo = { src: string; alt: string };

export const generalPhotoPool: Photo[] = [
  { src: "/images/pool/cylindre-fichet-demonte-serrurier-nice.webp", alt: "Cylindre Fichet démonté, tenu par un serrurier à Nice" },
  { src: "/images/pool/serrure-ancienne-porte-rouge-nice.webp", alt: "Serrure ancienne sur porte rouge, intervention à Nice" },
  { src: "/images/pool/reparation-mecanisme-serrure-nice.webp", alt: "Réparation d'un mécanisme de serrure par un serrurier à Nice" },
  { src: "/images/pool/percage-nouveau-cylindre-porte-nice.webp", alt: "Perçage pour un nouveau cylindre sur une porte à Nice" },
  { src: "/images/pool/serrure-portail-ancienne-cles-nice.webp", alt: "Serrure de portail ancienne avec ses clés, à Nice" },
  { src: "/images/pool/poignee-porte-serrurier-nice.webp", alt: "Poignée de porte posée par un serrurier à Nice" },
  { src: "/images/pool/ferme-porte-installe-serrurier-nice.webp", alt: "Ferme-porte installé par un serrurier à Nice" },
  { src: "/images/pool/poignee-cylindre-porte-bois-nice.webp", alt: "Poignée et cylindre sur porte en bois, à Nice" },
  { src: "/images/pool/porte-entree-ancienne-quincaillerie-laiton-nice.webp", alt: "Porte d'entrée ancienne avec quincaillerie en laiton, à Nice" },
  { src: "/images/pool/porte-neuve-imposte-ferronnerie-nice.webp", alt: "Porte neuve installée sous une imposte à ferronnerie, à Nice" },
  { src: "/images/pool/benoit-serrurier-pose-porte-nice.webp", alt: "Benoît, artisan serrurier, après la pose d'une porte à Nice" },
  { src: "/images/pool/cylindre-fichet-main-serrurier-nice.webp", alt: "Cylindre Fichet tenu en main par un serrurier à Nice" },
  { src: "/images/pool/benoit-serrurier-mecanisme-porte-nice.webp", alt: "Benoît, artisan serrurier, à côté d'un mécanisme de porte à Nice" },
  { src: "/images/pool/benoit-serrurier-serrure-posee-nice.webp", alt: "Benoît, artisan serrurier, à côté d'une serrure posée à Nice" },
  { src: "/images/pool/benoit-serrurier-avant-intervention-nice.webp", alt: "Benoît, artisan serrurier, avant une intervention à Nice" },
  { src: "/images/pool/benoit-artisan-serrurier-nice.webp", alt: "Benoît, artisan serrurier à Nice" },
  { src: "/images/pool/porte-installation-serrurier-nice.webp", alt: "Porte en cours d'installation par un serrurier à Nice" },
  { src: "/images/pool/porte-immeuble-interphone-securisee-nice.webp", alt: "Porte d'immeuble avec interphone, sécurisée à Nice" },
  { src: "/images/pool/serrure-moderne-posee-porte-nice.webp", alt: "Serrure moderne posée sur une porte à Nice" },
  { src: "/images/pool/cle-serrure-portail-toits-nice.webp", alt: "Clé dans une serrure de portail, vue sur les toits de Nice" },
  { src: "/images/pool/porte-blindee-pose-serrurier-nice.webp", alt: "Porte blindée en cours de pose par un serrurier à Nice" },
  { src: "/images/pool/serrure-heracles-posee-porte-nice.webp", alt: "Serrure Heraclès posée sur une porte à Nice" },
];

// Attribution déterministe construite à partir des secteurs réels : chaque
// quartier d'un même secteur reçoit une photo différente (les secteurs ont
// tous moins de quartiers que le pool n'a de photos), pour qu'on n'affiche
// jamais la même image sur deux pages liées entre elles via "quartiers
// voisins". Les décalages par secteur limitent aussi les répétitions
// visibles d'un secteur à l'autre.
const photoAssignments: Record<string, Photo> = (() => {
  const map: Record<string, Photo> = {};
  const sectorKeys = Object.keys(zones) as (keyof typeof zones)[];
  const poolSize = generalPhotoPool.length;
  sectorKeys.forEach((sector, sectorIndex) => {
    const offset = sectorIndex * 5;
    zones[sector].forEach((quartier, i) => {
      map[quartier] = generalPhotoPool[(offset + i) % poolSize];
    });
    // Page secteur elle-même : décalée par rapport à ses propres quartiers.
    map[sector] = generalPhotoPool[(offset + zones[sector].length) % poolSize];
  });
  return map;
})();

export function pickPhoto(seed: string): Photo {
  return photoAssignments[seed] ?? generalPhotoPool[0];
}
