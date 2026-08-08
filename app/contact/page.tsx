import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import LazyMap from "@/components/LazyMap";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/contact/" },
  title: "Contact | Votre Artisan Français, serrurier à Nice",
  description:
    "Contactez-moi pour un devis ou une intervention de serrurerie à Nice, 24h/24 et 7j/7. Téléphone, formulaire ou email.",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Contact", url: `${business.domain}/contact/` },
        ])}
      />
      <section className="mx-auto max-w-4xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact", href: "/contact/" }]} />
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">Contact</h1>
        <p className="mt-4 text-slate leading-relaxed max-w-2xl">
          Besoin d&apos;un devis ou d&apos;une intervention ? Décrivez votre situation,
          je vous réponds vite. Pour une urgence, l&apos;appel reste le canal le plus
          rapide.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-bold text-navy mb-4">
              Écrivez-moi
            </h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-navy mb-4">
              Coordonnées
            </h2>
            <ul className="text-sm text-navy flex flex-col gap-2">
              <li>
                <a href={business.phone.href} className="font-tabular-nums hover:underline">
                  {business.phone.display}
                </a>
              </li>
              <li className="text-slate text-xs">
                <a href={business.phoneSecondary.href} className="font-tabular-nums hover:underline">
                  {business.phoneSecondary.display}
                </a>{" "}
                (si injoignable)
              </li>
              <li>{business.address.full}</li>
              <li>{business.hours}</li>
              <li>SIRET {business.siret}</li>
            </ul>
            <div className="mt-6">
              <LazyMap />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
