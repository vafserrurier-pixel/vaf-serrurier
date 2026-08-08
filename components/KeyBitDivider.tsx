"use client";

import { useId } from "react";

// Élément signature du site : le panneton (partie dentée) de la clé du logo,
// répété en frise. Utilisé avec parcimonie, à un seul endroit à la fois.
export default function KeyBitDivider({
  className = "",
  color = "var(--color-steel)",
}: {
  className?: string;
  color?: string;
}) {
  const patternId = useId();

  return (
    <svg
      viewBox="0 0 40 16"
      preserveAspectRatio="none"
      className={`w-full h-4 ${className}`}
      aria-hidden="true"
    >
      <pattern id={patternId} width="20" height="16" patternUnits="userSpaceOnUse">
        <path
          d="M0 16 L0 10 L4 10 L4 4 L8 4 L8 12 L12 12 L12 0 L16 0 L16 16 L20 16 L20 10 L18 10 L18 16"
          fill="none"
          stroke={color}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </pattern>
      <rect width="40" height="16" fill={`url(#${patternId})`} />
    </svg>
  );
}
