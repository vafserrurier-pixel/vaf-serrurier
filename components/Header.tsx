"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { StarIcon, PhoneIcon } from "./Icons";
import { business } from "@/lib/business";

const navLinks = [
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
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-navy text-cream text-xs sm:text-sm py-1.5 px-3">
        <div className="mx-auto max-w-6xl flex items-center justify-center sm:justify-between gap-3">
          <span className="hidden sm:flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              Disponible maintenant — {business.hours}
            </span>
            <span className="text-cream/50" aria-hidden="true">
              |
            </span>
            <span>Tout Nice et ses environs</span>
          </span>
          <span className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 font-tabular-nums">
              <StarIcon className="w-3.5 h-3.5 text-amber-400" />
              {business.reviews.rating.toFixed(1)} ({business.reviews.count}+ avis)
            </span>
            <a
              href={business.phone.href}
              className="font-semibold underline underline-offset-2"
            >
              {business.phone.display}
            </a>
          </span>
        </div>
      </div>
      <header className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3 gap-4">
          <Link href="/" aria-label="Retour à l'accueil">
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
              Appeler maintenant
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="main-nav"
              aria-label="Ouvrir le menu"
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
            className="lg:hidden flex flex-col gap-1 px-4 pb-4 text-navy font-medium"
            aria-label="Menu principal"
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
