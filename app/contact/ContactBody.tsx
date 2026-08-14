"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import LazyMap from "@/components/LazyMap";
import { business } from "@/lib/business";
import { useLocale } from "@/lib/locale";

const strings = {
  fr: {
    home: "Accueil",
    contact: "Contact",
    badge: "Disponible maintenant — devis gratuit par téléphone",
    h1: "Contact",
    lead: "Besoin d'un devis ou d'une intervention ? Décrivez votre situation, je vous réponds vite. Pour une urgence, l'appel reste le canal le plus rapide.",
    writeMe: "Écrivez-moi",
    details: "Coordonnées",
    secondary: "(si injoignable)",
  },
  en: {
    home: "Home",
    contact: "Contact",
    badge: "Available now — free quote by phone",
    h1: "Contact",
    lead: "Need a quote or a callout? Describe your situation and I'll reply quickly. For an emergency, calling remains the fastest way to reach me.",
    writeMe: "Write to me",
    details: "Contact details",
    secondary: "(if unreachable)",
  },
};

export default function ContactBody() {
  const { locale } = useLocale();
  const t = strings[locale];

  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs
        locale={locale}
        items={[
          { name: t.home, href: "/" },
          { name: t.contact, href: "/contact/" },
        ]}
      />
      <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
        {t.badge}
      </span>
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">{t.h1}</h1>
      <p className="mt-4 text-slate leading-relaxed max-w-2xl">{t.lead}</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-4">{t.writeMe}</h2>
          <ContactForm locale={locale} />
        </div>
        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-4">{t.details}</h2>
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
              {t.secondary}
            </li>
            <li>{business.address.full}</li>
            <li>{business.hours}</li>
            <li>SIRET {business.siret}</li>
          </ul>
          <div className="mt-6">
            <LazyMap locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
