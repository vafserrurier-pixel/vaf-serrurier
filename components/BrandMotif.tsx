/**
 * Motifs graphiques de marque, inspires de la serrurerie (charte DA
 * section 10) : a utiliser UNIQUEMENT en fond tres discret (faible
 * opacite, via la classe passee par l'appelant, ex. "opacity-[0.06]") ou
 * comme separateur de section. Ne jamais habiller une section entiere ni
 * viser un rendu "plan technique" : ces motifs restent un detail, pas un
 * decor.
 */

/** Coupe transversale de cylindre : cercles concentriques + goupilles. */
export function CylinderMotif({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="33" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="5" fill="currentColor" />
      <path
        d="M50 3v14M50 83v14M97 50H83M17 50H3M78.9 21.1l-9.9 9.9M31 69l-9.9 9.9M78.9 78.9l-9.9-9.9M31 31l-9.9-9.9"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

/** Silhouette du panneton d'une cle, en ligne continue. */
export function KeyLineMotif({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 60" preserveAspectRatio="none" aria-hidden="true">
      <circle cx="20" cy="30" r="14" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M34 30H210M150 30v16M172 30v22M194 30v14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Geometrie d'un vantail de porte a caissons, avec poignee. */
export function DoorPanelMotif({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 150" aria-hidden="true">
      <rect x="3" y="3" width="94" height="144" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="16" y="16" width="68" height="54" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="16" y="80" width="68" height="54" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="82" cy="75" r="2.2" fill="currentColor" />
    </svg>
  );
}
