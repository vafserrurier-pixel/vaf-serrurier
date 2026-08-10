// Pool de vraies photos (fournies par Benoît) réutilisées sur les pages
// quartier et secteur, qui n'ont pas de photo unique dédiée. Le texte
// alternatif reste volontairement générique — ces photos ne sont pas prises
// dans le quartier en question, on ne prétend pas le contraire.

export type Photo = { src: string; alt: string };

export const generalPhotoPool: Photo[] = [
  { src: "/images/pool/photo-01.webp", alt: "Cylindre Fichet démonté, tenu par un serrurier à Nice" },
  { src: "/images/pool/photo-02.webp", alt: "Serrure ancienne sur porte rouge, intervention à Nice" },
  { src: "/images/pool/photo-03.webp", alt: "Réparation d'un mécanisme de serrure par un serrurier à Nice" },
  { src: "/images/pool/photo-04.webp", alt: "Perçage pour un nouveau cylindre sur une porte à Nice" },
  { src: "/images/pool/photo-05.webp", alt: "Serrure de portail ancienne avec ses clés, à Nice" },
  { src: "/images/pool/photo-06.webp", alt: "Poignée de porte posée par un serrurier à Nice" },
  { src: "/images/pool/photo-07.webp", alt: "Ferme-porte installé par un serrurier à Nice" },
  { src: "/images/pool/photo-08.webp", alt: "Poignée et cylindre sur porte en bois, à Nice" },
  { src: "/images/pool/photo-10.webp", alt: "Porte d'entrée ancienne avec quincaillerie en laiton, à Nice" },
  { src: "/images/pool/photo-11.webp", alt: "Porte neuve installée sous une imposte à ferronnerie, à Nice" },
  { src: "/images/pool/photo-12.webp", alt: "Benoît, artisan serrurier, après la pose d'une porte à Nice" },
  { src: "/images/pool/photo-13.webp", alt: "Cylindre Fichet tenu en main par un serrurier à Nice" },
  { src: "/images/pool/photo-14.webp", alt: "Benoît, artisan serrurier, à côté d'un mécanisme de porte à Nice" },
  { src: "/images/pool/photo-15.webp", alt: "Benoît, artisan serrurier, à côté d'une serrure posée à Nice" },
  { src: "/images/pool/photo-16.webp", alt: "Benoît, artisan serrurier, avant une intervention à Nice" },
  { src: "/images/pool/photo-17.webp", alt: "Benoît, artisan serrurier à Nice" },
  { src: "/images/pool/photo-18.webp", alt: "Porte en cours d'installation par un serrurier à Nice" },
  { src: "/images/pool/photo-19.webp", alt: "Porte d'immeuble avec interphone, sécurisée à Nice" },
  { src: "/images/pool/photo-20.webp", alt: "Serrure moderne posée sur une porte à Nice" },
  { src: "/images/pool/photo-21.webp", alt: "Clé dans une serrure de portail, vue sur les toits de Nice" },
  { src: "/images/pool/photo-23.webp", alt: "Porte blindée en cours de pose par un serrurier à Nice" },
  { src: "/images/pool/photo-26.webp", alt: "Serrure Heraclès posée sur une porte à Nice" },
];

// Choix déterministe (même nom -> même photo à chaque rendu) mais réparti
// entre toutes les photos du pool, pour éviter que deux pages proches
// affichent la même image.
export function pickPhoto(seed: string): Photo {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return generalPhotoPool[hash % generalPhotoPool.length];
}
