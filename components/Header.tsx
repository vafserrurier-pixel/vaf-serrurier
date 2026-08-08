"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { business } from "@/lib/business";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/depannage-serrurier-nice/", label: "Dépannage" },
  { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
  { href: "/changement-serrure-nice/", label: "Changement de serrure" },
  { href: "/installation-porte-blindee-nice/", label: "Porte blindée" },
  { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
  { href: "/tarifs-serrurier-nice/", label: "Tarifs" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-urgent text-white text-sm font-semibold text-center py-1.5 px-3">
        Urgence serrurier {business.hours} —{" "}
        <a href={business.phone.href} className="underline underline-offset-2">
          Appeler {business.phone.display}
        </a>
      </div>
      <header className="bg-cream border-b border-navy/10">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
          <Link href="/" aria-label="Retour à l'accueil">
            <Logo />
          </Link>
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
