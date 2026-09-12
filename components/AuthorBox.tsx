import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";

export default function AuthorBox() {
  const experienceYears = new Date().getFullYear() - business.professionSinceYear;
  return (
    <div className="bg-white border border-navy/10 rounded-xl p-5 flex items-center gap-4">
      <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
        <Image
          src="/images/serrurier-nice-a-propos.webp"
          alt={`${business.firstName}, artisan serrurier à Nice`}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>
      <div>
        <p className="font-heading font-bold text-navy">Écrit par {business.firstName}</p>
        <p className="text-sm text-slate">
          Artisan serrurier à Nice depuis {experienceYears} ans.{" "}
          <Link href="/a-propos/" className="text-steel underline">
            Mon parcours
          </Link>
        </p>
      </div>
    </div>
  );
}
