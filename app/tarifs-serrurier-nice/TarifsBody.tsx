"use client";

import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import PricingTable from "@/components/PricingTable";
import ArticleTable from "@/components/ArticleTable";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import ReviewsSection from "@/components/ReviewsSection";
import CtaBlock from "@/components/CtaBlock";
import { ShieldIcon, StarIcon } from "@/components/Icons";
import { business } from "@/lib/business";
import { useLocale } from "@/lib/locale";

const faqFr: FaqItem[] = [
  {
    question: "Combien coûte un serrurier en urgence à Nice ?",
    answer:
      "Le tarif de base dépend du service (ouverture, dépannage, remplacement) et une majoration de 50% s'applique après 19h, le week-end et les jours fériés, uniquement sur le déplacement et la main-d'œuvre : le prix d'une pièce remplacée ne change jamais selon l'heure. Le montant exact est toujours annoncé avant que j'intervienne.",
  },
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer:
      "Oui. Je vous annonce un prix par téléphone selon votre description, et je le confirme sur place avant de commencer les travaux, c'est une obligation légale pour un serrurier. Pour les gros travaux (blindage de porte, installation de porte blindée), la visite sur place et le devis sont gratuits, et le devis vous est remis sous 24h.",
  },
  {
    question: "Les pièces remplacées sont-elles comprises dans le prix affiché ?",
    answer:
      "Le cylindre standard est compris dans le tarif « à partir de 249 € ». Les autres pièces remplacées (serrure complète, gâche, cylindre haute sécurité...) sont facturées en supplément et toujours annoncées avant votre accord.",
  },
  {
    question: "Pourquoi les prix varient-ils d'une intervention à l'autre ?",
    answer:
      "Le type de serrure, la marque, l'état de la porte et l'heure d'intervention font varier le tarif final. Les prix affichés couvrent les situations standards.",
  },
  {
    question: "Le tarif change-t-il selon le quartier de Nice ?",
    answer:
      "Non. Mes tarifs sont les mêmes dans tous les quartiers de Nice, sans supplément pour un secteur éloigné. Ce qui fait varier le prix, c'est l'horaire (majoration de 50 % après 19h, le week-end et les jours fériés, sur le déplacement et la main-d'œuvre), le type de serrure et la pièce à remplacer, pas le quartier.",
  },
  {
    question: "Quel taux de TVA appliquez-vous ?",
    answer:
      "10 % pour les particuliers (logement de plus de 2 ans) et 20 % pour les professionnels. Les prix affichés sur cette page sont des prix TTC au taux de 10 %.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Carte bancaire, espèces ou virement. La facture détaillée vous est envoyée par e-mail.",
  },
  {
    question: "Demandez-vous un acompte ?",
    answer:
      "Pour les gros travaux (blindage de porte, installation de porte blindée), un acompte de 30 % est demandé à la validation du devis.",
  },
  {
    question: "Intervenez-vous sur une porte de cave, de garage ou une boîte aux lettres ?",
    answer:
      "Oui. Le prix vous est annoncé par téléphone avant que je me déplace, comme pour toute autre intervention.",
  },
  {
    question: "Comment éviter une arnaque de serrurier ?",
    answer:
      "Méfiez-vous d'abord des prix d'appel affichés très bas (30 ou 40 € par exemple) : c'est presque toujours le signe que la facture va gonfler une fois le technicien sur place, avec des frais ajoutés sur le pas de la porte. Une intervention sérieuse, déplacement compris, descend rarement sous les 100 € tout compris. Exigez un prix ferme par téléphone avant tout déplacement, demandez toujours une facture détaillée, et vérifiez que l'entreprise a une adresse et un SIRET vérifiables, pas seulement un numéro de mobile. C'est exactement pour lutter contre ces pratiques que je me suis installé à mon compte : mes tarifs sont annoncés à l'avance et ne bougent pas une fois sur place, sauf pièce supplémentaire clairement identifiée et validée par vous.",
  },
  {
    question: "Puis-je me rétracter après avoir signé un devis à mon domicile ?",
    answer: (
      <>
        En principe oui : un contrat conclu à votre domicile (« hors
        établissement ») ouvre un droit de rétractation de 14 jours (
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032226842/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          article L.221-18 du Code de la consommation
        </a>
        , voir aussi la{" "}
        <a
          href="https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/vente-hors-etablissement-soyez-vigilant"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          fiche pratique de la DGCCRF
        </a>
        ). Mais ce délai ne s&apos;applique pas quand vous demandez
        expressément une exécution immédiate de la prestation et renoncez
        explicitement à ce droit, le cas typique d&apos;un dépannage
        d&apos;urgence réalisé sur-le-champ (
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563170"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          article L.221-28 du Code de la consommation
        </a>
        ).
      </>
    ),
  },
  {
    question: "Que faire en cas de litige avec un professionnel du dépannage ?",
    answer: (
      <>
        Vous pouvez signaler tout litige avec un professionnel sur{" "}
        <a
          href="https://signal.conso.gouv.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          SignalConso
        </a>
        , le service de signalement gratuit de la DGCCRF : le professionnel
        concerné est notifié et dispose d&apos;un délai pour vous répondre.
      </>
    ),
  },
];

const faqEn: FaqItem[] = [
  {
    question: "How much does an emergency locksmith cost in Nice?",
    answer:
      "The base price depends on the service (opening, callout, replacement), and a 50% surcharge applies after 7pm, on weekends and public holidays, only on travel and labor: the price of a replaced part never changes with the time of day. The exact amount is always quoted before I intervene.",
  },
  {
    question: "Is the quote really free?",
    answer:
      "Yes. I give you a price over the phone based on your description, and confirm it on site before starting any work, it's a legal requirement for a locksmith. For major work (door reinforcement, armored door installation), the on-site visit and the quote are free, and the quote is sent to you within 24 hours.",
  },
  {
    question: "Are replaced parts included in the price shown?",
    answer:
      "A standard cylinder is included in the \"from €249\" price. Other replaced parts (full lock, strike plate, high-security cylinder...) are billed separately and always quoted before you agree to them.",
  },
  {
    question: "Why do prices vary from one callout to another?",
    answer:
      "The type of lock, the brand, the door's condition and the time of the callout all affect the final price. The prices shown cover standard situations.",
  },
  {
    question: "Does the price change depending on the neighbourhood in Nice?",
    answer:
      "No. My prices are the same in every neighbourhood of Nice, with no extra charge for a distant area. What changes the price is the time of day (a 50% surcharge after 7pm, on weekends and public holidays, on travel and labor), the type of lock and the part to replace, not the neighbourhood.",
  },
  {
    question: "What VAT rate do you apply?",
    answer:
      "10% for private individuals (home completed more than 2 years ago) and 20% for professionals. The prices shown on this page are VAT-inclusive prices at the 10% rate.",
  },
  {
    question: "Which payment methods do you accept?",
    answer:
      "Bank card, cash or bank transfer. The detailed invoice is sent to you by e-mail.",
  },
  {
    question: "Do you ask for a deposit?",
    answer:
      "For major work (door reinforcement, armored door installation), a 30% deposit is requested when the quote is accepted.",
  },
  {
    question: "Do you work on cellar doors, garage doors or letterboxes?",
    answer:
      "Yes. The price is given to you over the phone before I travel, as for any other callout.",
  },
  {
    question: "How do I avoid a locksmith scam?",
    answer:
      "First, be wary of very low advertised prices (€30 or €40, for example): it's almost always a sign the bill will balloon once the technician is on site. Insist on a firm price over the phone before any travel, always ask for a detailed invoice, and check the company has a verifiable address and SIRET number, not just a mobile number. This is exactly why I set up on my own: my prices are quoted upfront and don't move once I'm on site, except for a clearly identified extra part you've approved.",
  },
  {
    question: "Can I withdraw after signing a quote at my home?",
    answer: (
      <>
        In principle yes: a contract signed at your home (an &quot;off-premises&quot;
        contract, under French law) opens a 14-day withdrawal period (
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032226842/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          Article L.221-18 of the French Consumer Code
        </a>
        ). But this period doesn&apos;t apply once you&apos;ve expressly asked
        for the work to start right away and explicitly waived that right,
        the typical case for an emergency callout handled on the spot (
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563170"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          Article L.221-28
        </a>
        ).
      </>
    ),
  },
  {
    question: "What can I do if I have a dispute with a tradesperson?",
    answer: (
      <>
        In France, you can report any dispute with a professional on{" "}
        <a
          href="https://signal.conso.gouv.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          SignalConso
        </a>
        , the free reporting service run by the DGCCRF (French consumer
        protection authority): the business is notified and has a set time
        to respond.
      </>
    ),
  },
];

const devisLegalItemsFr = [
  "la date de rédaction",
  "le nom et l'adresse de l'entreprise",
  "le nom du client",
  "le lieu d'exécution de l'intervention",
  "la nature exacte des réparations à effectuer",
  "le décompte détaillé, en quantité et en prix, de chaque prestation et produit nécessaire",
  "les frais de déplacement, le cas échéant",
  "la somme globale à payer hors taxes et toutes taxes comprises, avec le taux de TVA",
  "la durée de validité de l'offre",
  "l'indication du caractère payant ou gratuit du devis",
];

const devisLegalItemsEn = [
  "the date it was drawn up",
  "the business's name and address",
  "the client's name",
  "the address where the work is carried out",
  "the exact nature of the repairs to be done",
  "a detailed breakdown, by quantity and price, of each service and part needed",
  "travel costs, where applicable",
  "the total amount excl. and incl. VAT, with the VAT rate stated",
  "how long the quote remains valid",
  "whether the quote itself is free or charged for",
];

const warningSignalsFr = [
  "Refus de donner une fourchette ou un prix par téléphone, même approximatif",
  "Annonce d'office d'un remplacement de cylindre avant même le diagnostic sur place",
  "Absence de SIREN ou d'adresse physique vérifiable, seulement un numéro de mobile",
  "Paiement en espèces exigé, sans facture proposée",
  "Majoration non annoncée à l'avance, ou appliquée sans explication une fois sur place",
];

const warningSignalsEn = [
  "Refusing to give a price range or estimate over the phone, even a rough one",
  "Announcing a cylinder replacement upfront, before any on-site diagnosis",
  "No SIREN number or verifiable physical address, just a mobile number",
  "Demanding cash payment with no invoice offered",
  "A surcharge that wasn't announced in advance, or applied without explanation on site",
];

const leviersItemsFr = [
  "Garantie d'assistance de votre assurance habitation : certains sinistres (une effraction, par exemple) sont pris en charge sur présentation d'une facture détaillée.",
  "Garantie d'assistance de certaines cartes bancaires haut de gamme (Visa Premier, Gold Mastercard ou équivalent), avec un plafond qui varie selon la carte et le contrat : à vérifier auprès de votre émetteur.",
  "Programmer une intervention plutôt que d'attendre l'urgence complète : un rendez-vous en journée évite la majoration de nuit, de week-end ou de jour férié.",
  "Toujours demander un devis écrit, même pour une petite intervention : c'est le document qui facilite un remboursement d'assurance a posteriori.",
];

const leviersItemsEn = [
  "Home insurance assistance cover: some incidents (a break-in, for example) are reimbursed on presentation of a detailed invoice.",
  "Assistance cover on some premium bank cards (Visa Premier, Gold Mastercard or equivalent), with a cap that varies by card and contract: check with your card issuer.",
  "Scheduling a visit ahead of time rather than waiting for a full emergency: a daytime appointment avoids the night, weekend or public holiday surcharge.",
  "Always ask for a written quote, even for a small job: it's the document that makes an insurance reimbursement easier afterwards.",
];

const strings = {
  fr: {
    breadcrumb: "Tarifs",
    badge: "Disponible maintenant : devis gratuit par téléphone",
    h1: "Tarifs serrurier à Nice",
    lead: "Ce qui compte, c'est la transparence, pas les promesses. Voici mes tarifs pour les situations standards : un devis précis est toujours annoncé avant que je commence l'intervention.",
    call: "Appeler",
    trustSiret: (siret: string) => `SIRET vérifiable : ${siret}`,
    trustInsurance: "Assurance RC Pro et garantie décennale",
    trustReviews: (rating: string, count: number) => `${rating}/5 sur plus de ${count} avis Google`,
    tvaTitle: "TVA applicable : mes prix sont déjà TTC",
    warningTitle: "Les signaux qui doivent vous alerter",
    warningIntro:
      "Une ouverture de porte annoncée à 30 ou 40 € en ligne cache presque toujours une facture qui explose une fois le technicien sur place. Déplacement compris, une intervention sérieuse descend rarement sous les 100 € tout compris. Au-delà du prix affiché, plusieurs signaux doivent vous alerter :",
    warningClosing: "Mes tarifs ci-dessus sont ceux que je facture réellement, pas un appât.",
    varyTitle: "Ce qui fait varier le prix",
    varyText:
      "Le tarif final dépend du problème rencontré (porte claquée ou verrouillée, type de cylindre), de la marque et du modèle de la serrure, de l'état de la porte, et de l'heure d'intervention. Une majoration de 50% s'applique après 19h, le week-end et les jours fériés, mais uniquement sur le déplacement et la main-d'œuvre : elle ne porte jamais sur le prix d'une pièce remplacée. Hors cylindre standard, compris dans le tarif de base, les pièces remplacées sont facturées à part et validées avec vous avant intervention.",
    devisLegalTitle: "Ce que la loi exige sur un devis de dépannage",
    leviersTitle: "Comment réduire le coût de votre intervention",
    faqTitle: "Questions fréquentes sur les tarifs",
    needSomething: "Besoin d'un service en particulier ?",
    links: [
      { href: "/urgence-serrurier-nice/", label: "Dépannage" },
      { href: "/ouverture-de-porte-nice/", label: "ouverture de porte" },
      { href: "/changement-serrure-nice/", label: "changement de serrure" },
      { href: "/blindage-porte-nice/", label: "blindage de porte" },
    ],
  },
  en: {
    breadcrumb: "Pricing",
    badge: "Available now: free quote by phone",
    h1: "Locksmith pricing in Nice",
    lead: "What matters is transparency, not promises. Here's my pricing for standard situations: a precise quote is always given before I start the work.",
    call: "Call",
    trustSiret: (siret: string) => `Verifiable SIRET: ${siret}`,
    trustInsurance: "Professional liability and 10-year insurance",
    trustReviews: (rating: string, count: number) => `${rating}/5 from over ${count} Google reviews`,
    tvaTitle: "VAT: my prices are already tax-included",
    warningTitle: "Warning signs to watch for",
    warningIntro:
      "A door opening advertised online at €30 or €40 almost always hides a bill that balloons once the technician is on site. Travel included, a serious callout rarely comes in under €100 all in. Beyond the price shown, a few signs should raise a flag:",
    warningClosing: "My prices above are what I actually charge, not bait.",
    varyTitle: "What makes the price vary",
    varyText:
      "The final price depends on the problem (door slammed shut or locked, cylinder type), the lock's brand and model, the door's condition, and the time of the callout. A 50% surcharge applies after 7pm, on weekends and public holidays, but only on travel and labor: it never applies to the price of a replaced part. Apart from a standard cylinder, included in the base price, replaced parts are billed separately and agreed with you before the work starts.",
    devisLegalTitle: "What French law requires on a repair quote",
    leviersTitle: "How to reduce the cost of your callout",
    faqTitle: "Frequently asked questions about pricing",
    needSomething: "Need a specific service?",
    links: [
      { href: "/urgence-serrurier-nice/", label: "Emergency callout" },
      { href: "/ouverture-de-porte-nice/", label: "door opening" },
      { href: "/changement-serrure-nice/", label: "lock change" },
      { href: "/blindage-porte-nice/", label: "door reinforcement" },
    ],
  },
};

export default function TarifsBody() {
  const { locale } = useLocale();
  const t = strings[locale];
  const faq = locale === "en" ? faqEn : faqFr;
  const warningSignals = locale === "en" ? warningSignalsEn : warningSignalsFr;
  const devisLegalItems = locale === "en" ? devisLegalItemsEn : devisLegalItemsFr;
  const leviersItems = locale === "en" ? leviersItemsEn : leviersItemsFr;

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
          <AvailabilityBadge locale={locale} />
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">{t.h1}</h1>
          <p className="mt-4 text-slate leading-relaxed max-w-2xl">{t.lead}</p>
          <a
            href={business.phone.href}
            className="inline-block mt-5 bg-urgent text-white font-semibold px-6 py-3 rounded-full"
          >
            {t.call} <span className="font-tabular-nums">{business.phone.display}</span>
          </a>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 text-xs text-slate">
            <span className="inline-flex items-center gap-1.5">
              <ShieldIcon className="w-4 h-4 text-steel" />
              {t.trustSiret(business.siret)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldIcon className="w-4 h-4 text-steel" />
              {t.trustInsurance}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <StarIcon className="w-4 h-4 text-steel" />
              {t.trustReviews(business.reviews.rating.toFixed(1), business.reviews.count)}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <PricingTable locale={locale} useSeoTitles />
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-10">
        <h2 className="font-heading text-xl font-bold text-navy mb-2">
          {locale === "fr" ? "Mes tarifs, situation par situation" : "My prices, situation by situation"}
        </h2>
        <p className="text-slate leading-relaxed mb-4">
          {locale === "fr"
            ? "Le même problème coûte le même prix partout à Nice. Ce qui change, c'est l'heure : après 19h, le week-end et les jours fériés, une majoration de 50 % s'applique sur le déplacement et la main-d'œuvre."
            : "The same problem costs the same anywhere in Nice. What changes is the time: after 7pm, on weekends and public holidays, a 50% surcharge applies to travel and labor."}
        </p>
        <ArticleTable
          headers={
            locale === "fr"
              ? ["Situation", "Tarif TTC", "Après 19h, week-end, jours fériés"]
              : ["Situation", "Price incl. VAT", "After 7pm, weekends, public holidays"]
          }
          rows={
            locale === "fr"
              ? [
                  ["Porte claquée", "149 €", "223,50 €"],
                  ["Porte verrouillée, cylindre européen", "149 €", "223,50 €"],
                  ["Porte verrouillée, serrure Fichet", "Sur devis", "Sur devis"],
                  ["Changement de cylindre standard", "À partir de 249 €, déplacement, main-d'œuvre et cylindre standard compris", "+ 50 % sur le déplacement et la main-d'œuvre, pièce au prix normal"],
                  ["Cylindre haute sécurité, serrure multipoints", "Sur devis", "Sur devis"],
                  ["Porte de cave, de garage, boîte aux lettres", "Prix annoncé par téléphone avant déplacement", "Prix annoncé par téléphone avant déplacement"],
                ]
              : [
                  ["Door slammed shut", "€149", "€223.50"],
                  ["Door locked, European cylinder", "€149", "€223.50"],
                  ["Door locked, Fichet lock", "Quoted individually", "Quoted individually"],
                  ["Standard cylinder replacement", "From €249, travel, labor and standard cylinder included", "+ 50% on travel and labor, part at the normal price"],
                  ["High-security cylinder, multipoint lock", "Quoted individually", "Quoted individually"],
                  ["Cellar door, garage door, letterbox", "Price given by phone before I travel", "Price given by phone before I travel"],
                ]
          }
        />
      </section>

      <section className="mx-auto max-w-4xl px-4">
        <div className="bg-steel/10 border border-navy/10 rounded-xl p-5 sm:p-6">
          <p className="font-heading font-bold text-navy mb-2">{t.tvaTitle}</p>
          {locale === "fr" ? (
            <p className="text-sm text-slate leading-relaxed">
              Pour une intervention chez un particulier, dans un logement achevé depuis plus de 2 ans,
              le taux de TVA réduit de 10% s&apos;applique sur la main-d&apos;œuvre et les fournitures
              posées : c&apos;est le régime des travaux d&apos;amélioration et d&apos;entretien (
              <a
                href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051215062"
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel underline"
              >
                article 279-0 bis du Code général des impôts
              </a>
              ), et c&apos;est le taux que j&apos;applique aux particuliers. Pour les
              professionnels, la TVA est de 20%. Les prix affichés ci-dessus sont des prix TTC au taux
              de 10%.
            </p>
          ) : (
            <p className="text-sm text-slate leading-relaxed">
              For a private individual&apos;s home completed more than 2 years ago, the reduced 10%
              VAT rate applies to labor and the parts fitted: this is the French tax regime for home
              improvement and maintenance work (
              <a
                href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051215062"
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel underline"
              >
                Article 279-0 bis of the French General Tax Code
              </a>
              ), and it&apos;s the rate I apply to private individuals. For professionals, VAT is 20%. The prices shown above are tax-included at the 10% rate.
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <div className="bg-cream border border-urgent/20 rounded-xl p-5 sm:p-6">
          <p className="font-heading font-bold text-navy mb-2">{t.warningTitle}</p>
          <p className="text-sm text-slate leading-relaxed mb-3">{t.warningIntro}</p>
          <ul className="list-disc pl-5 flex flex-col gap-1.5 text-sm text-slate leading-relaxed">
            {warningSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
          <p className="text-sm text-slate leading-relaxed mt-3">{t.warningClosing}</p>
          {locale === "fr" && (
            <p className="text-sm text-slate mt-3">
              Pour aller plus loin :{" "}
              <Link href="/blog/prix-serrurier-nice-guide/" className="text-steel underline">
                combien coûte un serrurier à Nice, comparé à d&apos;autres grilles tarifaires
              </Link>{" "}
              et{" "}
              <Link href="/blog/serrurier-agree-assurances-nice/" className="text-steel underline">
                « Agréé toutes assurances », ce que cette formule ne veut pas dire
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-heading text-xl font-bold text-navy mb-4">{t.varyTitle}</h2>
        <p className="text-slate leading-relaxed">{t.varyText}</p>
        <ul className="list-disc pl-5 flex flex-col gap-2.5 text-slate leading-relaxed mt-4">
          {(locale === "fr"
            ? [
                ["Le type de serrure", "une porte verrouillée avec un cylindre européen est à 149 €, avec une serrure Fichet, sur devis. Un cylindre haute sécurité ou une serrure multipoints se chiffre sur devis, après diagnostic."],
                ["L'horaire", "après 19h, le week-end et les jours fériés, la majoration de 50 % porte sur le déplacement et la main-d'œuvre. Elle ne s'applique jamais à une pièce."],
                ["La pièce à remplacer", "le cylindre standard est compris dans le tarif de base ; pour une serrure complète, une gâche ou un cylindre haute sécurité, la pièce est annoncée et validée avec vous avant que je la pose."],
                ["Ce qui ne varie pas", "le quartier et l'accessibilité du logement. Les tarifs sont les mêmes partout à Nice, sans supplément pour un secteur éloigné ni pour l'accès."],
              ]
            : [
                ["The type of lock", "a locked door with a European cylinder is €149, with a Fichet lock, quoted individually. A high-security cylinder or a multipoint lock is quoted individually, after diagnosis."],
                ["The time of day", "after 7pm, on weekends and public holidays, the 50% surcharge applies to travel and labor. It never applies to a part."],
                ["The part to replace", "a standard cylinder is included in the base price; for a full lock, a strike plate or a high-security cylinder, the part is quoted and agreed with you before I fit it."],
                ["What does not vary", "the neighbourhood and how easy the home is to reach. Prices are the same everywhere in Nice, with no extra charge for a distant area or for access."],
              ]
          ).map(([label, text]) => (
            <li key={label}>
              <strong className="text-navy">{label}</strong> : {text}
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate mt-3">
          {locale === "fr" ? "Pour une porte neuve plutôt qu'un dépannage : " : "For a new door rather than a repair: "}
          <Link href="/installation-porte-blindee-nice/" className="text-steel underline">
            {locale === "fr" ? "installation de porte blindée à Nice" : "armored door installation in Nice"}
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-heading text-xl font-bold text-navy mb-4">
          {locale === "fr" ? "Devis, acompte et paiement" : "Quote, deposit and payment"}
        </h2>
        <ul className="list-disc pl-5 flex flex-col gap-2.5 text-slate leading-relaxed">
          {(locale === "fr"
            ? [
                ["Dépannage", "le prix est annoncé par téléphone, puis confirmé sur place avant que je commence."],
                ["Gros travaux", "pour un blindage de porte ou une porte blindée neuve, la visite et le devis sont gratuits et le devis est remis sous 24h. Un acompte de 30 % est demandé à sa validation."],
                ["Paiement", "carte bancaire, espèces ou virement."],
                ["Facture", "détaillée, envoyée par e-mail."],
              ]
            : [
                ["Callouts", "the price is given over the phone, then confirmed on site before I start."],
                ["Major work", "for door reinforcement or a new armored door, the visit and the quote are free and the quote is sent within 24 hours. A 30% deposit is requested when it is accepted."],
                ["Payment", "bank card, cash or bank transfer."],
                ["Invoice", "detailed, sent by e-mail."],
              ]
          ).map(([label, text]) => (
            <li key={label}>
              <strong className="text-navy">{label}</strong> : {text}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-heading text-xl font-bold text-navy mb-4">{t.devisLegalTitle}</h2>
        {locale === "fr" ? (
          <p className="text-slate leading-relaxed mb-3">
            L&apos;
            <a
              href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000033959893"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steel underline"
            >
              article 4 de l&apos;arrêté du 24 janvier 2017 relatif à la publicité des prix des
              prestations de dépannage
            </a>{" "}
            encadre précisément le contenu d&apos;un devis de dépannage à domicile. Il doit
            obligatoirement comporter :
          </p>
        ) : (
          <p className="text-slate leading-relaxed mb-3">
            French law (
            <a
              href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000033959893"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steel underline"
            >
              Article 4 of the Order of 24 January 2017 on price disclosure for home repair services
            </a>
            ) precisely sets out what a home repair quote must include. It must state:
          </p>
        )}
        <ul className="list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed">
          {devisLegalItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {locale === "fr" ? (
          <p className="text-slate leading-relaxed mt-3">
            Le SIRET et le numéro de TVA intracommunautaire de l&apos;entreprise, exigés sur tout
            document professionnel, complètent naturellement ce devis. Je vous fournis
            systématiquement ce document conforme, même pour une simple ouverture de porte.
          </p>
        ) : (
          <p className="text-slate leading-relaxed mt-3">
            The business&apos;s SIRET and intra-EU VAT numbers, required on any professional document,
            naturally complete this quote. I always provide this compliant document, even for a
            simple door opening.
          </p>
        )}
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <div className="bg-steel/10 border border-navy/10 rounded-xl p-5 sm:p-6">
          <p className="font-heading font-bold text-navy mb-3">{t.leviersTitle}</p>
          <ul className="list-disc pl-5 flex flex-col gap-2 text-sm text-slate leading-relaxed">
            {leviersItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm text-slate mt-3">
            {locale === "fr" ? (
              <>
                Le détail de ces garanties d&apos;assistance est expliqué sur ma page{" "}
                <Link href="/urgence-serrurier-nice/" className="text-steel underline">
                  urgence serrurier
                </Link>
                .
              </>
            ) : (
              <>
                More on these assistance covers on my{" "}
                <Link href="/urgence-serrurier-nice/" className="text-steel underline">
                  emergency callout
                </Link>{" "}
                page.
              </>
            )}
          </p>
        </div>
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
