"use client";

import { ShieldIcon, HandshakeIcon, CheckIcon, StarIcon, WrenchIcon, VideoIcon } from "./Icons";
import { business } from "@/lib/business";
import { formatRating } from "@/lib/reviewFormat";
import { useReviewStats } from "./ReviewStatsProvider";
import type { Locale } from "@/lib/locale";

const strings = {
  fr: {
    experience: (years: number) => `${years} ans d'expérience`,
    siret: (siret: string) => `SIRET vérifiable : ${siret}`,
    insurance: (provider: string) => `RC Pro ${provider} & garantie décennale`,
    invoice: "Facture conforme aux assureurs",
    reviews: (rating: string, count: number) => `${rating}/5 sur ${count} avis Google`,
    video: "Vidéo avant/après sur demande",
  },
  en: {
    experience: (years: number) => `${years} years of experience`,
    siret: (siret: string) => `Verifiable SIRET: ${siret}`,
    insurance: (provider: string) => `${provider} liability & 10-year insurance`,
    invoice: "Invoice compliant with insurers",
    reviews: (rating: string, count: number) => `${rating}/5 from ${count} Google reviews`,
    video: "Before/after video on request",
  },
};

export default function TrustBadges({
  locale = "fr",
  hideReviews = false,
  gridOnMobile = false,
}: {
  locale?: Locale;
  /** Retire la pastille de la note Google (page d'accueil : la note est déjà dans la barre du haut et le bandeau de chiffres). */
  hideReviews?: boolean;
  /** Sous le palier sm : grille de 2 colonnes au lieu d'une pastille par ligne. */
  gridOnMobile?: boolean;
}) {
  const t = strings[locale];
  const { rating, count } = useReviewStats();
  const experienceYears = new Date().getFullYear() - business.professionSinceYear;
  const allBadges = [
    { Icon: WrenchIcon, label: t.experience(experienceYears) },
    { Icon: ShieldIcon, label: t.siret(business.siret) },
    { Icon: HandshakeIcon, label: t.insurance(business.insurance.provider) },
    { Icon: CheckIcon, label: t.invoice },
    {
      Icon: StarIcon,
      label: t.reviews(formatRating(rating, locale), count),
    },
    { Icon: VideoIcon, label: t.video },
  ];
  const badges = hideReviews ? allBadges.filter((b) => b.Icon !== StarIcon) : allBadges;
  const containerClass = gridOnMobile
    ? "grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3"
    : "flex flex-wrap justify-center gap-3";
  const badgeClass = gridOnMobile
    ? "flex items-center gap-2 bg-white border border-navy/10 rounded-xl sm:rounded-full px-3 sm:px-4 py-2 text-xs font-medium text-navy shadow-sm sm:inline-flex [&:last-child:nth-child(odd)]:col-span-2 sm:[&:last-child:nth-child(odd)]:col-span-1"
    : "inline-flex items-center gap-2 bg-white border border-navy/10 rounded-full px-4 py-2 text-xs font-medium text-navy shadow-sm";
  return (
    <div className={containerClass}>
      {badges.map((b) => (
        <div key={b.label} className={badgeClass}>
          <b.Icon className="w-4 h-4 text-steel shrink-0" />
          {b.label}
        </div>
      ))}
    </div>
  );
}
