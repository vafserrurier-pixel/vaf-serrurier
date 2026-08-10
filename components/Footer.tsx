"use client";

import Link from "next/link";
import { business } from "@/lib/business";
import { sectorPages } from "@/lib/quartiers";
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from "./SocialIcons";
import { useLocale } from "@/lib/locale";

const strings = {
  fr: {
    who: "Qui suis-je",
    contact: "Contact",
    secondary: "(si injoignable)",
    whatsapp: "Écrire sur WhatsApp",
    email: "Écrire par email",
    areas: "Zones d'intervention",
    legal: "Informations légales",
    legalNotice: "Mentions légales",
    terms: "CGU",
    sales: "CGV",
    privacy: "Politique de confidentialité",
    payment: "Moyens de paiement acceptés",
    paymentMethods: "Espèces, carte bancaire, virement",
    follow: "Suivez l'activité",
    rights: "Tous droits réservés.",
  },
  en: {
    who: "About me",
    contact: "Contact",
    secondary: "(if unreachable)",
    whatsapp: "Message on WhatsApp",
    email: "Send an email",
    areas: "Areas covered",
    legal: "Legal information",
    legalNotice: "Legal notice",
    terms: "Terms of use",
    sales: "Terms of sale",
    privacy: "Privacy policy",
    payment: "Accepted payment methods",
    paymentMethods: "Cash, card, bank transfer",
    follow: "Follow along",
    rights: "All rights reserved.",
  },
};

export default function Footer() {
  const { locale } = useLocale();
  const t = strings[locale];

  return (
    <footer className="bg-navy text-cream mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="font-heading font-bold text-lg">{business.legalName}</p>
          <p className="text-sm text-cream/80 mt-1">{business.tagline}</p>
          <p className="text-sm mt-3">{business.address.full}</p>
          <p className="text-sm mt-1">SIRET {business.siret}</p>
          <Link href="/a-propos/" className="block text-sm mt-3 hover:underline">
            {t.who}
          </Link>
        </div>
        <div>
          <p className="font-heading font-semibold mb-2">{t.contact}</p>
          <a href={business.phone.href} className="block font-tabular-nums text-sm hover:underline">
            {business.phone.display}
          </a>
          <a
            href={business.phoneSecondary.href}
            className="block font-tabular-nums text-xs text-cream/70 mt-0.5 hover:underline"
          >
            {business.phoneSecondary.display} {t.secondary}
          </a>
          <a
            href={business.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm mt-1 hover:underline"
          >
            {t.whatsapp}
          </a>
          <a href={`mailto:${business.email}`} className="block text-sm mt-1 hover:underline">
            {t.email}
          </a>
          <p className="text-sm mt-3">{business.hours}</p>
        </div>
        <div>
          <p className="font-heading font-semibold mb-2">
            <Link href="/zones-intervention-nice/" className="hover:underline">
              {t.areas}
            </Link>
          </p>
          <ul className="text-sm space-y-1">
            {(Object.keys(sectorPages) as (keyof typeof sectorPages)[]).map((key) => (
              <li key={key}>
                <Link href={sectorPages[key].href} className="hover:underline">
                  {sectorPages[key].label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading font-semibold mb-2">{t.legal}</p>
          <ul className="text-sm space-y-1">
            <li>
              <Link href="/mentions-legales/" className="hover:underline">
                {t.legalNotice}
              </Link>
            </li>
            <li>
              <Link href="/conditions-generales-dutilisation/" className="hover:underline">
                {t.terms}
              </Link>
            </li>
            <li>
              <Link href="/conditions-generales-de-vente/" className="hover:underline">
                {t.sales}
              </Link>
            </li>
            <li>
              <Link href="/politique-de-confidentialite/" className="hover:underline">
                {t.privacy}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-heading font-semibold mb-2">{t.payment}</p>
          <p className="text-sm text-cream/80">{t.paymentMethods}</p>
          <p className="font-heading font-semibold mt-4 mb-2">{t.follow}</p>
          <div className="flex gap-3">
            <a href={business.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="w-5 h-5 hover:text-steel" />
            </a>
            <a href={business.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="w-5 h-5 hover:text-steel" />
            </a>
            <a href={business.social.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon className="w-5 h-5 hover:text-steel" />
            </a>
            <a href={business.social.tiktok} aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              <TikTokIcon className="w-5 h-5 hover:text-steel" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 text-center text-xs text-cream/60 py-4">
        © {new Date().getFullYear()} {business.legalName}. {t.rights}
      </div>
    </footer>
  );
}
