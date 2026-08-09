type IconProps = { className?: string };

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z" />
    </svg>
  );
}

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

export function SafeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <circle cx="14.5" cy="12" r="3" />
      <path d="M14.5 10v-1M14.5 15v-1M16.5 12h1M12 12h1" />
      <path d="M7 8h2M7 16h2" />
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

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} aria-hidden="true">
      <path d="M4 12.5l5 5L20 6.5" />
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
