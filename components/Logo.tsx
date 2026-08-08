import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo-mark.png"
        alt=""
        width={40}
        height={40}
        priority
        className="shrink-0"
      />
      <span className="font-heading font-bold leading-tight text-navy">
        Votre Artisan
        <br />
        Français
      </span>
    </span>
  );
}
