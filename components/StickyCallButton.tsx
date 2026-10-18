"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { business } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon } from "./Icons";
import { useLocale } from "@/lib/locale";
import { useCookieChoicePending } from "./CookieConsent";

const strings = {
  fr: { call: "Appeler", whatsapp: "WhatsApp", callLabel: "Appeler maintenant", whatsappLabel: "Écrire sur WhatsApp" },
  en: { call: "Call", whatsapp: "WhatsApp", callLabel: "Call now", whatsappLabel: "Message on WhatsApp" },
};

// Barre fixe en bas de l'écran sous le palier lg : conteneur blanc (fine bordure et ombre vers le haut,
// tracées en box-shadow pour que la hauteur reste exactement 4 rem),
// deux boutons arrondis de 48 px comme ceux du hero, 8 px de marge et d'écart. La zone de sécurité de
// l'iPhone est ajoutée en padding blanc sous les boutons. Hauteur : 4 rem + env(safe-area-inset-bottom)
// (layout.tsx réserve la même hauteur sous le pied de page, et globals.css place le bandeau de cookies
// juste au-dessus quand la barre est visible, via l'attribut data-call-bar).
//
// Accueil : la barre reste masquée tant qu'un bouton du hero (data-hero-cta) est visible à l'écran, et
// apparaît en fondu dès qu'ils sortent. Elle reste visible tant que le bandeau de cookies est affiché,
// car celui-ci peut recouvrir les boutons du hero. Autres pages : visible dès le chargement.
export default function StickyCallButton() {
  const { locale } = useLocale();
  const t = strings[locale];
  const isHome = usePathname() === "/";
  const cookiePending = useCookieChoicePending();
  const [heroVisible, setHeroVisible] = useState(isHome);

  useEffect(() => {
    if (!isHome) {
      setHeroVisible(false);
      return;
    }
    const targets = Array.from(document.querySelectorAll("[data-hero-cta]"));
    if (targets.length === 0) {
      setHeroVisible(false);
      return;
    }
    const seen = new Map<Element, boolean>();
    // Marge haute : l'en-tête collant (environ 105 px) recouvre le haut de l'écran.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) seen.set(entry.target, entry.isIntersecting);
        setHeroVisible(targets.some((el) => seen.get(el)));
      },
      { rootMargin: "-110px 0px 0px 0px" }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  const visible = !isHome || cookiePending || !heroVisible;

  return (
    <div
      data-call-bar={visible ? "visible" : "hidden"}
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 lg:hidden flex gap-2 bg-white shadow-[0_-1px_0_rgba(11,36,71,0.1),0_-4px_12px_rgba(11,36,71,0.08)] px-2 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] transition-[transform,opacity] duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <a
        href={business.phone.href}
        aria-label={t.callLabel}
        className="flex-[2] min-w-0 h-12 inline-flex items-center justify-center gap-2 bg-urgent text-white font-bold rounded-full shadow-lg shadow-urgent/20"
      >
        <PhoneIcon className="w-5 h-5" />
        {t.call}
      </a>
      <a
        href={business.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.whatsappLabel}
        className="flex-1 min-w-0 h-12 inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold rounded-full"
      >
        <WhatsAppIcon className="w-5 h-5" />
        {t.whatsapp}
      </a>
    </div>
  );
}
