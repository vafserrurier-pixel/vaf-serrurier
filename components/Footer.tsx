import Link from "next/link";
import { business } from "@/lib/business";
import { sectorPages } from "@/lib/quartiers";
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="font-heading font-bold text-lg">{business.legalName}</p>
          <p className="text-sm text-cream/80 mt-1">{business.tagline}</p>
          <p className="text-sm mt-3">{business.address.full}</p>
          <p className="text-sm mt-1">SIRET {business.siret}</p>
          <Link href="/a-propos/" className="block text-sm mt-3 hover:underline">
            Qui suis-je
          </Link>
        </div>
        <div>
          <p className="font-heading font-semibold mb-2">Contact</p>
          <a href={business.phone.href} className="block font-tabular-nums text-sm hover:underline">
            {business.phone.display}
          </a>
          <a
            href={business.phoneSecondary.href}
            className="block font-tabular-nums text-xs text-cream/70 mt-0.5 hover:underline"
          >
            {business.phoneSecondary.display} (si injoignable)
          </a>
          <a
            href={business.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm mt-1 hover:underline"
          >
            Écrire sur WhatsApp
          </a>
          <a href={`mailto:${business.email}`} className="block text-sm mt-1 hover:underline">
            Écrire par email
          </a>
          <p className="text-sm mt-3">{business.hours}</p>
        </div>
        <div>
          <p className="font-heading font-semibold mb-2">
            <Link href="/zones-intervention-nice/" className="hover:underline">
              Zones d&apos;intervention
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
          <p className="font-heading font-semibold mb-2">Informations légales</p>
          <ul className="text-sm space-y-1">
            <li>
              <Link href="/mentions-legales/" className="hover:underline">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/conditions-generales-dutilisation/" className="hover:underline">
                CGU
              </Link>
            </li>
            <li>
              <Link href="/conditions-generales-de-vente/" className="hover:underline">
                CGV
              </Link>
            </li>
            <li>
              <Link href="/politique-de-confidentialite/" className="hover:underline">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-heading font-semibold mb-2">Moyens de paiement acceptés</p>
          <p className="text-sm text-cream/80">Espèces, carte bancaire, virement</p>
          <p className="font-heading font-semibold mt-4 mb-2">Suivez l&apos;activité</p>
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
        © {new Date().getFullYear()} {business.legalName}. Tous droits réservés.
      </div>
    </footer>
  );
}
