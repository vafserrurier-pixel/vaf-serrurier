import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import PricingTable from "@/components/PricingTable";
import FaqAccordion from "@/components/FaqAccordion";
import ReviewsSection from "@/components/ReviewsSection";
import CtaBlock from "@/components/CtaBlock";
import { business } from "@/lib/business";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/tarifs-serrurier-nice/" },
  title: "Tarifs serrurier Nice – Prix sans surprise | VAF",
  description:
    "Ouverture de porte, changement de serrure, porte blindée : mes tarifs à Nice, sans surprise. Devis annoncé avant chaque intervention, 24h/24.",
};

const faq = [
  {
    question: "Combien coûte un serrurier en urgence à Nice ?",
    answer:
      "Le tarif de base dépend du service (ouverture, dépannage, remplacement) et une majoration de 50% s'applique après 19h, le week-end et les jours fériés. Le montant exact est toujours annoncé avant que j'intervienne.",
  },
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer:
      "Oui. Je vous annonce un prix par téléphone selon votre description, et je le confirme sur place avant de commencer les travaux — c'est une obligation légale pour un serrurier.",
  },
  {
    question: "Les pièces remplacées sont-elles comprises dans le prix affiché ?",
    answer:
      "Non, les pièces remplacées (cylindre, serrure, gâche...) sont facturées en supplément et toujours annoncées avant votre accord.",
  },
  {
    question: "Pourquoi les prix varient-ils d'une intervention à l'autre ?",
    answer:
      "Le type de serrure, la marque, l'état de la porte et l'heure d'intervention font varier le tarif final. Les prix affichés couvrent les situations standards.",
  },
  {
    question: "Comment éviter une arnaque de serrurier ?",
    answer:
      "Méfiez-vous d'abord des prix d'appel affichés très bas (30 ou 40 € par exemple) : c'est presque toujours le signe que la facture va gonfler une fois le technicien sur place, avec des frais ajoutés sur le pas de la porte. Une intervention sérieuse, déplacement compris, descend rarement sous les 100 € tout compris — un prix très inférieur à la réalité du marché doit alerter, pas rassurer. Exigez un prix ferme par téléphone avant tout déplacement, demandez toujours une facture détaillée, et vérifiez que l'entreprise a une adresse et un SIRET vérifiables, pas seulement un numéro de mobile. C'est exactement pour lutter contre ces pratiques que je me suis installé à mon compte : mes tarifs sont annoncés à l'avance et ne bougent pas une fois sur place, sauf pièce supplémentaire clairement identifiée et validée par vous.",
  },
];

export default function TarifsSerrurierNicePage() {
  const url = `${business.domain}/tarifs-serrurier-nice/`;

  return (
    <>
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Tarifs", url },
        ])}
      />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-4xl px-4 py-10">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Tarifs", href: "/tarifs-serrurier-nice/" }]} />
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
            Tarifs serrurier à Nice
          </h1>
          <p className="mt-4 text-slate leading-relaxed max-w-2xl">
            Ce qui compte, c&apos;est la transparence, pas les promesses. Voici mes tarifs
            pour les situations standards — un devis précis est toujours annoncé avant
            que je commence l&apos;intervention.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <PricingTable />
      </section>

      <section className="mx-auto max-w-4xl px-4">
        <div className="bg-cream border border-urgent/20 rounded-xl p-5 sm:p-6">
          <p className="font-heading font-bold text-navy mb-2">
            Méfiez-vous des prix d&apos;appel trop bas
          </p>
          <p className="text-sm text-slate leading-relaxed">
            Une ouverture de porte annoncée à 30 ou 40 € en ligne cache presque toujours
            une facture qui explose une fois le technicien sur place. Déplacement
            compris, une intervention sérieuse descend rarement sous les 100 € tout
            compris : un prix très inférieur à ça doit vous alerter, pas vous rassurer.
            Mes tarifs ci-dessus sont ceux que je facture réellement, pas un appât.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-heading text-xl font-bold text-navy mb-4">
          Ce qui fait varier le prix
        </h2>
        <p className="text-slate leading-relaxed">
          Le tarif final dépend du problème rencontré (porte claquée ou verrouillée,
          type de cylindre), de la marque et du modèle de la serrure, de l&apos;état de
          la porte, et de l&apos;heure d&apos;intervention. Une majoration de 50%
          s&apos;applique après 19h, le week-end et les jours fériés. Les pièces
          remplacées sont toujours facturées à part et validées avec vous avant
          intervention.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-heading text-xl font-bold text-navy mb-4">
          Questions fréquentes sur les tarifs
        </h2>
        <FaqAccordion items={faq} />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <ReviewsSection />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-slate text-sm">
          Besoin d&apos;un service en particulier ?{" "}
          <Link href="/depannage-serrurier-nice/" className="text-steel underline">
            Dépannage
          </Link>
          ,{" "}
          <Link href="/ouverture-de-porte-nice/" className="text-steel underline">
            ouverture de porte
          </Link>
          ,{" "}
          <Link href="/changement-serrure-nice/" className="text-steel underline">
            changement de serrure
          </Link>{" "}
          ou{" "}
          <Link href="/installation-porte-blindee-nice/" className="text-steel underline">
            installation de porte blindée
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-14">
        <CtaBlock />
      </section>
    </>
  );
}
