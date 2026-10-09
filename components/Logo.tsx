import Image from "next/image";
import { business } from "@/lib/business";

// Le nom complet est coupé sur deux lignes à son tiret, sans en changer le texte.
const [brandLine1, brandLine2] = business.brandName.split(" - ");

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
      <span className="font-heading font-bold leading-tight text-navy whitespace-nowrap">
        {brandLine1} -
        <br />
        {brandLine2}
      </span>
    </span>
  );
}
