"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { StarIcon, PhoneIcon } from "./Icons";
import { business } from "@/lib/business";
import { useLocale } from "@/lib/locale";

const navLinksByLocale = {
  fr: [
    { href: "/", label: "Accueil" },
    { href: "/depannage-serrurier-nice/", label: "Dépannage" },
    { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
    { href: "/changement-serrure-nice/", label: "Changement de serrure" },
    { href: "/installation-porte-blindee-nice/", label: "Porte blindée" },
    { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
    { href: "/zones-intervention-nice/", label: "Zones d'intervention" },
    { href: "/tarifs-serrurier-nice/", label: "Tarifs" },
    { href: "/blog/", label: "Blog" },
    { href: "/contact/", label: "Contact" },
  ],
  en: [
    { href: "/", label: "Home" },
    { href: "/depannage-serrurier-nice/", label: "Emergency callout" },
    { href: "/ouverture-de-porte-nice/", label: "Door opening" },
    { href: "/changement-serrure-nice/", label: "Lock change" },
    { href: "/installation-porte-blindee-nice/", label: "Security door" },
    { href: "/mis-en-securite-apres-effraction-nice/", label: "After a break-in" },
    { href: "/zones-intervention-nice/", label: "Areas covered" },
    { href: "/tarifs-serrurier-nice/", label: "Pricing" },
    { href: "/blog/", label: "Blog" },
    { href: "/contact/", label: "Contact" },
  ],
};

const strings = {
  fr: {
    available: `Disponible maintenant — ${business.hours}`,
    everywhere: "Tout Nice et ses environs",
    reviewsSuffix: "avis",
    call: "Appeler maintenant",
    openMenu: "Ouvrir le menu",
    home: "Retour à l'accueil",
    langSwitchLabel: "EN",
  },
  en: {
    available: "Available now — 24/7",
    everywhere: "All of Nice and surrounding areas",
    reviewsSuffix: "reviews",
    call: "Call now",
    openMenu: "Open menu",
    home: "Back to homepage",
    langSwitchLabel: "FR",
  },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const { locale, toggleLocale } = useLocale();
  const navLinks = navLinksByLocale[locale];
  const t = strings[locale];

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-navy text-cream text-xs sm:text-sm py-1.5 px-3">
        <div className="mx-auto max-w-6xl flex items-center justify-center sm:justify-between gap-3">
          <span className="hidden sm:flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              {t.available}
            </span>
            <span className="text-cream/50" aria-hidden="true">
              |
            </span>
            <span>{t.everywhere}</span>
          </span>
          <span className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 font-tabular-nums">
              <StarIcon className="w-3.5 h-3.5 text-amber-400" />
              {business.reviews.rating.toFixed(1)} ({business.reviews.count}+ {t.reviewsSuffix})
            </span>
            <button
              type="button"
              onClick={toggleLocale}
              aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
              className="font-semibold border border-cream/40 rounded px-1.5 py-0.5 text-xs hover:bg-cream/10"
            >
              {t.langSwitchLabel}
            </button>
            <a
              href={business.phone.href}
              className="font-semibold underline underline-offset-2 py-1 -my-1"
            >
              {business.phone.display}
            </a>
          </span>
        </div>
      </div>
      <header className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3 gap-4">
          <Link href="/" aria-label={t.home}>
            <Logo />
          </Link>
          <nav
            id="main-nav"
            className="hidden lg:flex items-center gap-5 text-sm font-medium text-navy"
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-steel">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={business.phone.href}
              className="hidden sm:inline-flex items-center gap-2 bg-urgent text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90"
            >
              <PhoneIcon className="w-4 h-4" />
              {t.call}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={t.openMenu}
              className="lg:hidden p-2 text-navy"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {open ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <nav
            id="mobile-nav"
            className="lg:hidden flex flex-col gap-1 px-4 pb-4 text-navy font-medium"
            aria-label={locale === "fr" ? "Menu principal" : "Main menu"}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 border-b border-navy/10"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </div>
  );
}
