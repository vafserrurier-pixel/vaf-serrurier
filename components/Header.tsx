"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { StarIcon, PhoneIcon } from "./Icons";
import { business } from "@/lib/business";
import { useLocale } from "@/lib/locale";

const navServicesByLocale = {
  fr: [
    { href: "/depannage-serrurier-nice/", label: "Dépannage" },
    { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
    { href: "/changement-serrure-nice/", label: "Changement de serrure" },
    { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
    { href: "/installation-porte-blindee-nice/", label: "Porte blindée" },
    { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
    { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
    { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
  ],
  en: [
    { href: "/depannage-serrurier-nice/", label: "Emergency callout" },
    { href: "/ouverture-de-porte-nice/", label: "Door opening" },
    { href: "/changement-serrure-nice/", label: "Lock change" },
    { href: "/serrure-carenee-nice/", label: "5-point shrouded lock" },
    { href: "/installation-porte-blindee-nice/", label: "Security door" },
    { href: "/mis-en-securite-apres-effraction-nice/", label: "After a break-in" },
    { href: "/ouverture-de-coffre-fort-nice/", label: "Safe opening" },
    { href: "/installation-coffre-fort-nice/", label: "Safe installation" },
  ],
};

const navLinksByLocale = {
  fr: [
    { href: "/", label: "Accueil" },
    { href: "/zones-intervention-nice/", label: "Zones d'intervention" },
    { href: "/tarifs-serrurier-nice/", label: "Tarifs" },
    { href: "/agences-syndics-nice/", label: "Agences & syndics" },
    { href: "/blog/", label: "Blog" },
    { href: "/contact/", label: "Contact" },
  ],
  en: [
    { href: "/", label: "Home" },
    { href: "/zones-intervention-nice/", label: "Areas covered" },
    { href: "/tarifs-serrurier-nice/", label: "Pricing" },
    { href: "/agences-syndics-nice/", label: "Agencies & syndics" },
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
    services: "Services",
  },
  en: {
    available: "Available now — 24/7",
    everywhere: "All of Nice and surrounding areas",
    reviewsSuffix: "reviews",
    call: "Call now",
    openMenu: "Open menu",
    home: "Back to homepage",
    langSwitchLabel: "FR",
    services: "Services",
  },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const { locale, toggleLocale } = useLocale();
  const navLinks = navLinksByLocale[locale];
  const navServices = navServicesByLocale[locale];
  const t = strings[locale];

  useEffect(() => {
    if (!servicesOpen) return;
    function onPointerDown(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setServicesOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

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
            <Link href={navLinks[0].href} className="hover:text-steel">
              {navLinks[0].label}
            </Link>
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                className="flex items-center gap-1 hover:text-steel"
              >
                {t.services}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full mt-2 w-64 bg-white border border-navy/10 rounded-lg shadow-lg py-2 z-50"
                >
                  {navServices.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2 text-sm text-navy hover:bg-cream hover:text-steel"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navLinks.slice(1).map((link) => (
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
            <Link
              href={navLinks[0].href}
              className="py-2 border-b border-navy/10"
              onClick={() => setOpen(false)}
            >
              {navLinks[0].label}
            </Link>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-nav-services"
              className="flex items-center justify-between py-2 border-b border-navy/10"
            >
              {t.services}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div id="mobile-nav-services" className="flex flex-col pl-4">
                {navServices.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-2 border-b border-navy/10 text-sm"
                    onClick={() => {
                      setOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
            {navLinks.slice(1).map((link) => (
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
