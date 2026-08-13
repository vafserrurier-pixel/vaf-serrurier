import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import { HandshakeIcon, PriceTagIcon, ShieldIcon } from "@/components/Icons";
import { business } from "@/lib/business";
import { breadcrumbSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/a-propos/" },
  title: "Qui suis-je – Benoît, artisan serrurier à Nice | VAF",
  description:
    "Serrurier depuis 2011, installé seul à Nice pour remettre de la transparence dans ce métier. Mon parcours, ma formation, mes engagements.",
};

const experienceYears = new Date().getFullYear() - 2011;

export default function AProposPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Qui suis-je", url: `${business.domain}/a-propos/` },
        ])}
      />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-4xl px-4 py-10 grid gap-8 sm:grid-cols-2 items-center">
          <div>
            <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Qui suis-je", href: "/a-propos/" }]} />
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              Disponible maintenant — devis par téléphone
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
              Qui suis-je
            </h1>
            <p className="mt-4 text-slate leading-relaxed max-w-2xl">
              Je m&apos;appelle Benoît. Je suis artisan serrurier depuis {experienceYears} ans,
              installé seul à Nice au {business.address.full}. Pas d&apos;équipe commerciale,
              pas de sous-traitant : c&apos;est moi qui décroche, moi qui viens, moi qui
              réponds de mon travail.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href={business.phone.href}
                className="inline-block bg-urgent text-white font-semibold px-6 py-3 rounded-full"
              >
                Appeler <span className="font-tabular-nums">{business.phone.display}</span>
              </a>
              <Link
                href="/tarifs-serrurier-nice/"
                className="inline-block whitespace-nowrap border border-navy/20 text-navy font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm order-first sm:order-last">
            <Image
              src="/images/serrurier-nice-a-propos.webp"
              alt="Benoît, artisan serrurier à Nice, à côté d'une serrure qu'il vient de réparer"
              fill
              sizes="(min-width: 640px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10 flex flex-col gap-8">
        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">Mon parcours</h2>
          <p className="text-slate leading-relaxed">
            Je suis titulaire d&apos;un CAP Serrurier Métallier, complété au fil des
            années par beaucoup de formation sur le terrain — c&apos;est là, en
            intervenant, que l&apos;on apprend vraiment ce métier. Ce métier m&apos;est
            venu naturellement : j&apos;ai commencé en travaillant dans l&apos;entreprise
            de mon frère à Paris, l&apos;une des plus grandes sociétés du secteur en
            France. C&apos;est cette expérience qui m&apos;a formé, chantier après
            chantier, urgence après urgence.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Pourquoi je me suis installé seul à Nice
          </h2>
          <p className="text-slate leading-relaxed">
            Après plusieurs années dans une grande structure, j&apos;ai fait le choix de
            m&apos;installer à mon compte. La serrurerie est un métier qui traîne une
            mauvaise réputation — prix gonflés, interventions douteuses, profit sur
            l&apos;urgence et la détresse du client. Par conscience professionnelle,
            j&apos;ai voulu montrer que ce n&apos;est pas une fatalité : que
            l&apos;honnêteté et la transparence peuvent aussi être la norme dans ce
            métier, pas l&apos;exception.
          </p>
          <p className="text-slate leading-relaxed mt-2">
            Concrètement, ça veut dire un prix annoncé avant que je touche à quoi que ce
            soit, jamais après. Un seul interlocuteur, du premier appel jusqu&apos;à la
            fin du chantier. Et aucune intervention que je ne pourrais pas justifier.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">Mes engagements</h2>
          <p className="text-slate leading-relaxed">
            Votre Artisan Français est {business.legalForm}, immatriculée au {business.rcs}
            {" "}(SIRET {business.siret}), couverte par une assurance responsabilité civile
            professionnelle et une garantie décennale. Je suis disponible {business.hours}
            {" "}pour l&apos;ensemble des quartiers de Nice.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-navy/10 p-5 shadow-sm">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-steel/10 text-steel mb-3">
              <PriceTagIcon className="w-5 h-5" />
            </span>
            <p className="font-heading font-semibold text-navy mb-2">Prix annoncé avant</p>
            <p className="text-sm text-slate leading-relaxed">
              Toujours avant l&apos;intervention, jamais après. C&apos;est une obligation
              légale que je respecte systématiquement.
            </p>
          </div>
          <div className="rounded-xl border border-navy/10 p-5 shadow-sm">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-steel/10 text-steel mb-3">
              <HandshakeIcon className="w-5 h-5" />
            </span>
            <p className="font-heading font-semibold text-navy mb-2">Un seul interlocuteur</p>
            <p className="text-sm text-slate leading-relaxed">
              Vous parlez directement à la personne qui intervient chez vous, sans
              standard ni sous-traitance.
            </p>
          </div>
          <div className="rounded-xl border border-navy/10 p-5 shadow-sm">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-steel/10 text-steel mb-3">
              <ShieldIcon className="w-5 h-5" />
            </span>
            <p className="font-heading font-semibold text-navy mb-2">Assuré et déclaré</p>
            <p className="text-sm text-slate leading-relaxed">
              SASU immatriculée, assurance RC Pro et garantie décennale, SIRET vérifiable
              sur les mentions légales.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-slate text-sm">
          Vous voulez en savoir plus sur mes services ou ma zone d&apos;intervention ?{" "}
          <Link href="/zones-intervention-nice/" className="text-steel underline">
            Voir les quartiers couverts
          </Link>{" "}
          ou{" "}
          <Link href="/tarifs-serrurier-nice/" className="text-steel underline">
            consulter mes tarifs
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-14">
        <CtaBlock title="Une question avant de m'appeler ?" />
      </section>
    </>
  );
}
