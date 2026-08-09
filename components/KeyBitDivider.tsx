// Élément signature du site : le panneton (partie dentée) de la clé du logo,
// répété en frise. Utilisé avec parcimonie, à un seul endroit à la fois.
//
// Implémenté en fond CSS (repeating background-image) plutôt qu'en <pattern>
// SVG : un <pattern> avec patternUnits="userSpaceOnUse" combiné à un viewBox
// minuscule étiré via preserveAspectRatio="none" ne se met pas à l'échelle de
// façon fiable sur tous les navigateurs (le motif se répète en dizaines de
// petits fragments au lieu de 2 grands segments). Un fond CSS tuilé à taille
// fixe en pixels n'a pas ce problème.

const TILE_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='20' height='16' viewBox='0 0 20 16'><path d='M0 16 L0 10 L4 10 L4 4 L8 4 L8 12 L12 12 L12 0 L16 0 L16 16 L20 16 L20 10 L18 10 L18 16' fill='none' stroke='#1B3A6B' stroke-width='1.4' stroke-linejoin='round'/></svg>`;

const BACKGROUND_IMAGE = `url("data:image/svg+xml,${encodeURIComponent(TILE_SVG)}")`;

export default function KeyBitDivider({
  className = "",
  opacity = 0.35,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`w-full h-4 ${className}`}
      style={{
        backgroundImage: BACKGROUND_IMAGE,
        backgroundRepeat: "repeat-x",
        backgroundSize: "20px 16px",
        backgroundPosition: "left center",
        opacity,
      }}
    />
  );
}
