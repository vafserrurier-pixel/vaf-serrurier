"use client";

import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PricingTable from "@/components/PricingTable";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import ReviewsSection from "@/components/ReviewsSection";
import CtaBlock from "@/components/CtaBlock";
import { useLocale } from "@/lib/locale";

const faqFr: FaqItem[] = [
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

const faqEn: FaqItem[] = [
  {
    question: "How much does an emergency locksmith cost in Nice?",
    answer:
      "The base price depends on the service (opening, callout, replacement), and a 50% surcharge applies after 7pm, on weekends and public holidays. The exact amount is always quoted before I intervene.",
  },
  {
    question: "Is the quote really free?",
    answer:
      "Yes. I give you a price over the phone based on your description, and confirm it on site before starting any work — it's a legal requirement for a locksmith.",
  },
  {
    question: "Are replaced parts included in the price shown?",
    answer:
      "No, replaced parts (cylinder, lock, strike plate...) are billed separately and always quoted before you agree to them.",
  },
  {
    question: "Why do prices vary from one callout to another?",
    answer:
      "The type of lock, the brand, the door's condition and the time of the callout all affect the final price. The prices shown cover standard situations.",
  },
  {
    question: "How do I avoid a locksmith scam?",
    answer:
      "First, be wary of very low advertised prices (€30 or €40, for example): it's almost always a sign the bill will balloon once the technician is on site, with extra fees added at your door. A serious callout, travel included, rarely comes in under €100 all in — a price well below market reality should raise a flag, not reassure you. Insist on a firm price over the phone before any travel, always ask for a detailed invoice, and check the company has a verifiable address and SIRET number, not just a mobile number. This is exactly why I set up on my own: my prices are quoted upfront and don't move once I'm on site, except for a clearly identified extra part you've approved.",
  },
];

const strings = {
  fr: {
    breadcrumb: "Tarifs",
    h1: "Tarifs serrurier à Nice",
    lead: "Ce qui compte, c'est la transparence, pas les promesses. Voici mes tarifs pour les situations standards — un devis précis est toujours annoncé avant que je commence l'intervention.",
    warningTitle: "Méfiez-vous des prix d'appel trop bas",
    warningText:
      "Une ouverture de porte annoncée à 30 ou 40 € en ligne cache presque toujours une facture qui explose une fois le technicien sur place. Déplacement compris, une intervention sérieuse descend rarement sous les 100 € tout compris : un prix très inférieur à ça doit vous alerter, pas vous rassurer. Mes tarifs ci-dessus sont ceux que je facture réellement, pas un appât.",
    varyTitle: "Ce qui fait varier le prix",
    varyText:
      "Le tarif final dépend du problème rencontré (porte claquée ou verrouillée, type de cylindre), de la marque et du modèle de la serrure, de l'état de la porte, et de l'heure d'intervention. Une majoration de 50% s'applique après 19h, le week-end et les jours fériés. Les pièces remplacées sont toujours facturées à part et validées avec vous avant intervention.",
    faqTitle: "Questions fréquentes sur les tarifs",
    needSomething: "Besoin d'un service en particulier ?",
    links: [
      { href: "/depannage-serrurier-nice/", label: "Dépannage" },
      { href: "/ouverture-de-porte-nice/", label: "ouverture de porte" },
      { href: "/changement-serrure-nice/", label: "changement de serrure" },
      { href: "/installation-porte-blindee-nice/", label: "installation de porte blindée" },
    ],
  },
  en: {
    breadcrumb: "Pricing",
    h1: "Locksmith pricing in Nice",
    lead: "What matters is transparency, not promises. Here's my pricing for standard situations — a precise quote is always given before I start the work.",
    warningTitle: "Be wary of very low advertised prices",
    warningText:
      "A door opening advertised online at €30 or €40 almost always hides a bill that balloons once the technician is on site. Travel included, a serious callout rarely comes in under €100 all in: a price well below that should raise a flag, not reassure you. My prices above are what I actually charge, not bait.",
    varyTitle: "What makes the price vary",
    varyText:
      "The final price depends on the problem (door slammed shut or locked, cylinder type), the lock's brand and model, the door's condition, and the time of the callout. A 50% surcharge applies after 7pm, on weekends and public holidays. Replaced parts are always billed separately and agreed with you before the work starts.",
    faqTitle: "Frequently asked questions about pricing",
    needSomething: "Need a specific service?",
    links: [
      { href: "/depannage-serrurier-nice/", label: "Emergency callout" },
      { href: "/ouverture-de-porte-nice/", label: "door opening" },
      { href: "/changement-serrure-nice/", label: "lock change" },
      { href: "/installation-porte-blindee-nice/", label: "security door installation" },
    ],
  },
};

export default function TarifsBody() {
  const { locale } = useLocale();
  const t = strings[locale];
  const faq = locale === "en" ? faqEn : faqFr;

  return (
    <>
      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-4xl px-4 py-10">
          <Breadcrumbs
            locale={locale}
            items={[
              { name: locale === "en" ? "Home" : "Accueil", href: "/" },
              { name: t.breadcrumb, href: "/tarifs-serrurier-nice/" },
            ]}
          />
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">{t.h1}</h1>
          <p className="mt-4 text-slate leading-relaxed max-w-2xl">{t.lead}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <PricingTable locale={locale} />
      </section>

      <section className="mx-auto max-w-4xl px-4">
        <div className="bg-cream border border-urgent/20 rounded-xl p-5 sm:p-6">
          <p className="font-heading font-bold text-navy mb-2">{t.warningTitle}</p>
          <p className="text-sm text-slate leading-relaxed">{t.warningText}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-heading text-xl font-bold text-navy mb-4">{t.varyTitle}</h2>
        <p className="text-slate leading-relaxed">{t.varyText}</p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-heading text-xl font-bold text-navy mb-4">{t.faqTitle}</h2>
        <FaqAccordion items={faq} />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <ReviewsSection locale={locale} />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-slate text-sm">
          {t.needSomething}{" "}
          <Link href={t.links[0].href} className="text-steel underline">
            {t.links[0].label}
          </Link>
          ,{" "}
          <Link href={t.links[1].href} className="text-steel underline">
            {t.links[1].label}
          </Link>
          ,{" "}
          <Link href={t.links[2].href} className="text-steel underline">
            {t.links[2].label}
          </Link>{" "}
          {locale === "en" ? "or" : "ou"}{" "}
          <Link href={t.links[3].href} className="text-steel underline">
            {t.links[3].label}
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-14">
        <CtaBlock locale={locale} />
      </section>
    </>
  );
}
