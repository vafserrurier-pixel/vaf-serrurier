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
    <svg viewBox="0 0 24 24" className={className} {...common} aria-hidden="true">
      <path d="M21 16.6v2.7a1.8 1.8 0 0 1-2 1.8 17.6 17.6 0 0 1-7.6-2.7 17.3 17.3 0 0 1-5.4-5.4A17.6 17.6 0 0 1 3.3 5.4 1.8 1.8 0 0 1 5.1 3.3h2.7a1.8 1.8 0 0 1 1.8 1.5c.1.9.3 1.7.6 2.5a1.8 1.8 0 0 1-.4 1.9l-1.1 1.1a14 14 0 0 0 5.4 5.4l1.1-1.1a1.8 1.8 0 0 1 1.9-.4c.8.3 1.6.5 2.5.6a1.8 1.8 0 0 1 1.5 1.8Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.1 8.1 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
      <path d="M16.6 14.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.2.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.1 1.6 2.5 4 3.5.6.2 1 .4 1.3.5.6.2 1.1.1 1.5-.1.5-.2 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.1-.4-.2Z" />
    </svg>
  );
}

export function GoogleLogoIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
    c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
    c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039
    l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
    c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
    c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
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

export function VideoIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} aria-hidden="true">
      <rect x="3" y="6" width="12" height="12" rx="1.5" />
      <path d="M15 10.5 21 7v10l-6-3.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
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

/** Cle avec point d'interrogation : cle perdue ou volee (disparition). */
export function KeyQuestionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} aria-hidden="true">
      <circle cx="7" cy="15" r="3.2" />
      <path d="M9.3 12.7 14.5 7.5" />
      <path d="M12 10l1.7 1.7" />
      <path d="M17.3 4.4a1.7 1.7 0 1 1 2.1 2.6c-.7.5-1.1.9-1.1 1.7" />
      <circle cx="18.3" cy="10.7" r="0.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Cle cassee en deux morceaux, avec un point de rupture visible. */
export function BrokenKeyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} aria-hidden="true">
      <circle cx="6" cy="17" r="3" />
      <path d="M8.8 14.8 11.6 12" />
      <path d="M9.7 15.7l1.3-1.3" />
      <path d="M14.3 9.3 12.6 11" />
      <path d="M15.8 7.8l2.6-2.6" />
      <path d="M19.4 3.4l1.2 1.2-1 1 1 1-1.2 1.2" />
    </svg>
  );
}

/** Rouage/engrenage : mecanisme grippe ou bloque. */
export function GearIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3.5v2.6M12 17.9v2.6M20.5 12h-2.6M6.1 12H3.5" />
      <path d="M17.7 6.3l-1.8 1.8M8.1 15.6l-1.8 1.8M17.7 17.7l-1.8-1.8M8.1 8.4 6.3 6.6" />
    </svg>
  );
}

/** Verrou avec deux traits de pene : porte verrouillee a double tour. */
export function DoubleLockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} aria-hidden="true">
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <path d="M9 14.5h6M9 17.5h6" />
    </svg>
  );
}

/** Coeur : situation vulnerable, personne ou animal a proteger en priorite. */
export function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common} aria-hidden="true">
      <path d="M12 20s-7.5-4.6-9.7-9.1C.6 7.6 2 4.5 5.1 4A4.6 4.6 0 0 1 12 6.8 4.6 4.6 0 0 1 18.9 4c3.1.5 4.5 3.6 2.8 6.9C19.5 15.4 12 20 12 20Z" />
    </svg>
  );
}
