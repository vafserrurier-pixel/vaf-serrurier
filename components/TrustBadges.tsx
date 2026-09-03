import { ShieldIcon, HandshakeIcon, CheckIcon, StarIcon, WrenchIcon, VideoIcon } from "./Icons";
import { business } from "@/lib/business";
import type { Locale } from "@/lib/locale";

const strings = {
  fr: {
    experience: (years: number) => `${years} ans d'expérience`,
    siret: (siret: string) => `SIRET vérifiable : ${siret}`,
    insurance: (provider: string) => `RC Pro ${provider} & garantie décennale`,
    invoice: "Facture conforme aux assureurs",
    reviews: (rating: string, count: number) => `${rating}/5 sur ${count}+ avis Google`,
    video: "Vidéo avant/après sur demande",
  },
  en: {
    experience: (years: number) => `${years} years of experience`,
    siret: (siret: string) => `Verifiable SIRET: ${siret}`,
    insurance: (provider: string) => `${provider} liability & 10-year insurance`,
    invoice: "Invoice compliant with insurers",
    reviews: (rating: string, count: number) => `${rating}/5 from ${count}+ Google reviews`,
    video: "Before/after video on request",
  },
};

export default function TrustBadges({ locale = "fr" }: { locale?: Locale }) {
  const t = strings[locale];
  const experienceYears = new Date().getFullYear() - business.professionSinceYear;
  const badges = [
    { Icon: WrenchIcon, label: t.experience(experienceYears) },
    { Icon: ShieldIcon, label: t.siret(business.siret) },
    { Icon: HandshakeIcon, label: t.insurance(business.insurance.provider) },
    { Icon: CheckIcon, label: t.invoice },
    {
      Icon: StarIcon,
      label: t.reviews(business.reviews.rating.toFixed(1), business.reviews.count),
    },
    { Icon: VideoIcon, label: t.video },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {badges.map((b) => (
        <div
          key={b.label}
          className="inline-flex items-center gap-2 bg-white border border-navy/10 rounded-full px-4 py-2 text-xs font-medium text-navy shadow-sm"
        >
          <b.Icon className="w-4 h-4 text-steel shrink-0" />
          {b.label}
        </div>
      ))}
    </div>
  );
}
