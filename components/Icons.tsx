type IconProps = { className?: string };

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function WrenchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L4 16.7V20h3.3l5.3-5.3a4 4 0 0 0 5.1-5.4l-2.8 2.8-2-2 2.8-2.8Z" />
    </svg>
  );
}

export function DoorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} aria-hidden="true">
      <rect x="5" y="3" width="13" height="18" rx="1" />
      <circle cx="14.3" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function KeyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} aria-hidden="true">
      <circle cx="8" cy="8" r="4" />
      <path d="M11 11l9 9M16 16l2.2-2.2M18.5 18.5l2-2" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
    </svg>
  );
}

export function AlertLockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      <path d="M12 15v2" />
    </svg>
  );
}

export function PriceTagIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} aria-hidden="true">
      <path d="M12.6 3.4 20 10.8a2 2 0 0 1 0 2.8l-6.4 6.4a2 2 0 0 1-2.8 0L3.4 12.6V4a.6.6 0 0 1 .6-.6h8.6Z" />
      <circle cx="8" cy="8" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function HandshakeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} aria-hidden="true">
      <path d="M2 12l4-4 4 3 3-3 2 2-5 5-4-3-2 2" />
      <path d="M13 10l3-3 6 5-3 3-1.5-1.2" />
      <path d="M9 14l2.5 2.5a1.6 1.6 0 0 0 2.3 0l.2-.2" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l3 6.2 6.5.7-4.9 4.4 1.4 6.4L12 16.9l-5.9 3.3 1.3-6.4-4.8-4.4 6.4-.7 3-6.2Z" />
    </svg>
  );
}
