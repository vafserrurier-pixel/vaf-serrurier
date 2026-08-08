import Link from "next/link";
import { business } from "@/lib/business";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-20 text-center">
      <p className="font-heading text-6xl font-bold text-navy">404</p>
      <h1 className="font-heading text-2xl font-bold text-navy mt-4">
        Cette page n&apos;existe pas
      </h1>
      <p className="mt-3 text-slate">
        Le lien est peut-être erroné ou la page a été déplacée. Voici où aller ensuite.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-full bg-navy text-cream text-sm font-semibold"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/depannage-serrurier-nice/"
          className="px-5 py-2.5 rounded-full border border-navy/20 text-navy text-sm font-semibold"
        >
          Dépannage serrurier
        </Link>
        <Link
          href="/tarifs-serrurier-nice/"
          className="px-5 py-2.5 rounded-full border border-navy/20 text-navy text-sm font-semibold"
        >
          Voir les tarifs
        </Link>
      </div>

      <a
        href={business.phone.href}
        className="inline-block mt-8 text-urgent font-semibold"
      >
        Ou appelez directement le{" "}
        <span className="font-tabular-nums">{business.phone.display}</span>
      </a>
    </section>
  );
}
