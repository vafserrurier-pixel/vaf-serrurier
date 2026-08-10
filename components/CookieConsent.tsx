"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/locale";

const STORAGE_KEY = "vaf-cookie-consent";

const strings = {
  fr: {
    text: (
      <>
        Ce site utilise des cookies techniques nécessaires à son fonctionnement, et,
        seulement avec votre accord, des cookies de mesure d&apos;audience. Voir la{" "}
        <Link href="/politique-de-confidentialite/" className="underline">
          politique de confidentialité
        </Link>
        .
      </>
    ),
    reject: "Refuser",
    accept: "Accepter",
    ariaLabel: "Consentement aux cookies",
  },
  en: {
    text: (
      <>
        This site uses technical cookies required for it to function, and, only with
        your consent, audience measurement cookies. See the{" "}
        <Link href="/politique-de-confidentialite/" className="underline">
          privacy policy
        </Link>{" "}
        (in French).
      </>
    ),
    reject: "Reject",
    accept: "Accept",
    ariaLabel: "Cookie consent",
  },
};
const CHANGE_EVENT = "vaf-cookie-consent-change";

type Consent = "accepted" | "rejected";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY);
}

function getServerSnapshot() {
  return "accepted"; // évite d'afficher le bandeau lors du rendu serveur
}

function choose(consent: Consent) {
  window.localStorage.setItem(STORAGE_KEY, consent);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export default function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { locale } = useLocale();
  const t = strings[locale];

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label={t.ariaLabel}
      className="fixed bottom-0 inset-x-0 z-[60] bg-navy text-cream px-4 py-4 shadow-lg"
    >
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
        <p className="text-sm">{t.text}</p>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="px-4 py-2 text-sm rounded border border-cream/40 hover:bg-cream/10"
          >
            {t.reject}
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="px-4 py-2 text-sm rounded bg-urgent text-white font-semibold hover:opacity-90"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

export function hasAnalyticsConsent() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_KEY) === "accepted";
}
