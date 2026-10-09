import type { Metadata } from "next";
import Link from "next/link";
import LocalizedServicePage from "@/components/LocalizedServicePage";
import PriceReminder from "@/components/PriceReminder";
import ServiceGuideSection from "@/components/ServiceGuideSection";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import ArticleTable from "@/components/ArticleTable";
import { ShieldIcon, WrenchIcon, CheckIcon, HandshakeIcon, DoorIcon, DoubleLockIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/metadata";

const guideToc = [
  { id: "lignes", label: "Les cinq lignes en détail" },
  { id: "a2p", label: "Le niveau A2P BP, un critère de devis" },
  { id: "options", label: "Les options qui influencent le devis" },
  { id: "comparatif", label: "Bloc-porte neuf ou blindage : le comparatif" },
  { id: "pas-la-solution", label: "Quand ce n'est pas la bonne solution" },
  { id: "devis", label: "Devis, acompte, délai et copropriété" },
  { id: "faq", label: "Questions complémentaires" },
];

const guideFaq = [
  {
    question: "Puis-je reproduire l'aspect de ma porte actuelle sur un bloc-porte neuf ?",
    answer:
      "Oui, notamment avec la ligne Ferro, qui permet une reproduction de l'existant possible. Le diagnostic sur place permet de définir précisément la finition la plus proche de votre porte actuelle.",
  },
  {
    question: "Un bloc-porte à 2 vantaux est-il possible ?",
    answer:
      "Oui, 1 ou 2 vantaux sont possibles selon la configuration de votre entrée. Les blocs-portes sont proposés en dimensions standard uniquement.",
  },
  {
    question: "Combien de temps faut-il pour avoir un bloc-porte ?",
    answer:
      "Le délai est d'environ 10 jours, sans travaux de maçonnerie.",
  },
];

const guideContent = (
  <>
    <p className="text-slate leading-relaxed">
      Ce guide détaille les cinq lignes disponibles, la manière dont le
      niveau A2P et les options s&apos;intègrent à votre devis, et les cas où
      un bloc-porte neuf n&apos;est pas la réponse la plus adaptée.
    </p>

    <div>
      <ArticleSectionHeading number={1} id="lignes" level="h3" size="lg" numberStyle="plain">
        Les cinq lignes en détail
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Le <strong className="text-navy">Lisseo</strong> mise sur un design
        épuré, avec trois finitions extérieures possibles : bois lisse,
        acier époxy ou acier décor bois. Le{" "}
        <strong className="text-navy">Solo</strong> propose du bois avec
        moulures, encastrées, à motifs design ou en applique selon la ligne
        choisie. Le <strong className="text-navy">Ferro</strong> associe des
        panneaux acier à des moulures, avec une reproduction de
        l&apos;existant possible. Le{" "}
        <strong className="text-navy">Vitréo</strong> propose une version
        vitrée. Le{" "}
        <strong className="text-navy">Designo</strong> décline trois lignes
        design distinctes : graphique, esthétique et authentique. Toutes ces
        lignes existent en 1 ou 2 vantaux, en dimensions standard.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={2} id="a2p" level="h3" size="lg" numberStyle="plain">
        Le niveau A2P BP, un critère de devis
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Tous les blocs-portes que je pose sont certifiés A2P, du niveau BP1
        (résiste 5 minutes) au BP3 (résiste 15 minutes), en passant par le
        BP2 (10 minutes). Ce n&apos;est pas un tarif fixe mais un critère à
        définir ensemble selon votre budget et le niveau de sécurité
        recherché : un logement en rez-de-chaussée n&apos;a pas les mêmes
        besoins qu&apos;un appartement en étage élevé. Je recommande le niveau
        en fonction du quartier et de la valeur des biens à protéger chez
        vous. Le tarif de départ, 3 490 € TTC, correspond à un bloc-porte
        certifié BP1 : les niveaux supérieurs et les autres lignes sont
        chiffrés sur devis.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={3} id="options" level="h3" size="lg" numberStyle="plain">
        Les options qui influencent le devis
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Trois options concrètes changent réellement le confort et le prix
        final : l&apos;isolation phonique renforcée (utile sur un palier
        bruyant), l&apos;isolation thermique renforcée (utile sur une entrée
        exposée), et l&apos;option coupe-feu / pare-flammes (utile en
        copropriété selon la configuration des parties communes). Ce sont de
        vrais critères de devis, pas des cases accessoires : j&apos;en
        discute avec vous selon votre logement réel.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={4} id="comparatif" level="h3" size="lg" numberStyle="plain">
        Bloc-porte neuf ou blindage : le comparatif
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed mb-4">
        Les deux solutions protègent votre entrée, mais elles ne répondent pas à
        la même situation. Voici ce qui les distingue, en chiffres et en
        conditions :
      </p>
      <ArticleTable
        headers={["Critère", "Blindage de porte", "Bloc-porte neuf"]}
        rows={[
          ["Votre porte", "Conservée, renforcée par un bâti acier", "Remplacée entièrement (porte, dormant, serrure)"],
          ["Quand le choisir", "Porte viable : bois sain, bâti en état", "Porte ou bâti trop dégradés"],
          ["Prix de départ (TTC)", "À partir de 2 689 € (modèle Citadin, pose comprise)", "À partir de 3 490 € (certifié BP1, pose comprise)"],
          ["Délai", "Pose en environ 4 heures", "Délai d'environ 10 jours"],
          ["Aspect extérieur", "Inchangé", "Peut changer selon la ligne choisie"],
          ["Copropriété", "Aucune autorisation tant que l'aspect extérieur est inchangé", "Autorisation nécessaire seulement si l'aspect extérieur change"],
          ["Visite et devis", "Gratuits, devis sous 24h", "Gratuits, devis sous 24h"],
        ]}
      />
      <p className="text-slate leading-relaxed mt-4">
        Le détail du blindage, de ses trois modèles et de ses critères est sur ma
        page{" "}
        <Link href="/blindage-porte-nice/" className="text-steel underline">
          blindage de porte
        </Link>
        .
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={5} id="pas-la-solution" level="h3" size="lg" numberStyle="plain">
        Quand ce n&apos;est pas la bonne solution
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Un bloc-porte neuf est la solution la plus complète, pas
        systématiquement la plus pertinente. Deux cas où je vous oriente
        ailleurs :
      </p>
      <ul className="list-disc pl-5 flex flex-col gap-2.5 text-slate leading-relaxed mt-3">
        <li>
          <strong className="text-navy">Votre porte actuelle reste saine</strong> : si le bois
          n&apos;est ni pourri ni déformé, remplacer l&apos;ensemble de la menuiserie n&apos;est pas
          nécessaire. Un{" "}
          <Link href="/blindage-porte-nice/" className="text-steel underline">
            blindage de porte
          </Link>{" "}
          renforce votre porte existante pour un coût nettement inférieur.
        </li>
        <li>
          <strong className="text-navy">Budget contraint</strong> : un{" "}
          <Link href="/blindage-porte-nice/" className="text-steel underline">
            blindage
          </Link>{" "}
          ou une{" "}
          <Link href="/serrure-carenee-nice/" className="text-steel underline">
            serrure carénée
          </Link>{" "}
          apportent un vrai gain de résistance à un tarif nettement plus accessible qu&apos;un
          remplacement complet.
        </li>
      </ul>
    </div>

    <div>
      <ArticleSectionHeading number={6} id="devis" level="h3" size="lg" numberStyle="plain">
        Devis, acompte, délai et copropriété
      </ArticleSectionHeading>
      <ul className="list-disc pl-5 flex flex-col gap-2.5 text-slate leading-relaxed">
        <li>
          <strong className="text-navy">Mesures et devis</strong> : la prise de mesures sur place et
          le devis sont gratuits, et le devis vous est remis sous 24h.
        </li>
        <li>
          <strong className="text-navy">Acompte</strong> : 30 % à la validation du devis.
        </li>
        <li>
          <strong className="text-navy">Délai</strong> : environ 10 jours, sans travaux de
          maçonnerie.
        </li>
        <li>
          <strong className="text-navy">Paiement</strong> : carte bancaire, espèces ou virement,
          avec une facture détaillée envoyée par e-mail.
        </li>
        <li>
          <strong className="text-navy">Copropriété</strong> : une autorisation n&apos;est nécessaire
          que si l&apos;aspect extérieur de la porte change.
        </li>
      </ul>
    </div>
  </>
);

export const metadata: Metadata = buildMetadata({
  path: "/installation-porte-blindee-nice/",
  title: "Installation de porte blindée à Nice – Devis gratuit",
  description: "Installation d'une porte blindée neuve à Nice, pose comprise : 5 lignes, certification A2P BP1 à BP3. Mesures et devis gratuits sur place.",
});

const sectionsFr = [
  {
    heading: "Qu'est-ce qu'un bloc-porte blindé",
    Icon: <DoorIcon className="w-4 h-4" />,
    paragraphs: [
      <>
        Un bloc-porte blindé remplace l&apos;ensemble de votre menuiserie
        (porte, dormant et serrure) d&apos;un seul tenant par une véritable
        porte blindée neuve, avec un délai d&apos;environ 10 jours.
        C&apos;est la solution la plus complète quand votre porte actuelle ou
        son bâti ne tiennent plus la route. Si votre porte reste saine, un{" "}
        <Link href="/blindage-porte-nice/" className="text-steel underline">
          blindage de porte
        </Link>{" "}
        suffit souvent, pour un coût nettement inférieur.
      </>,
    ],
  },
  {
    heading: "Cinq lignes selon votre style",
    Icon: <CheckIcon className="w-4 h-4" />,
    paragraphs: [
      <>
        Lisseo (design épuré, 3 finitions), Solo (bois avec moulures), Ferro
        (panneaux acier, reproduction de l&apos;existant possible), Vitréo
        (version vitrée) et Designo (3 lignes design) : cinq
        lignes de la gamme{" "}
        <a
          href="https://www.valentesecurystar.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          Valente Securystar
        </a>
        , fabricant français installé à Thiais depuis 1995. Le détail de
        chaque ligne est dans mon guide complet. 1 ou 2 vantaux possibles,
        dimensions standard.
      </>,
    ],
  },
  {
    heading: "Le niveau A2P BP, un critère de devis",
    Icon: <ShieldIcon className="w-4 h-4" />,
    paragraphs: [
      "BP1 résiste 5 minutes, BP2 10 minutes, BP3 15 minutes : je recommande le niveau selon le quartier et la valeur des biens à protéger. Le tarif de départ correspond à un bloc-porte certifié BP1, les niveaux supérieurs sont sur devis.",
    ],
  },
  {
    heading: "Les options qui influencent le devis",
    Icon: <WrenchIcon className="w-4 h-4" />,
    paragraphs: [
      "Isolation phonique renforcée, isolation thermique renforcée, option coupe-feu / pare-flammes : trois vrais critères à discuter selon votre logement, pas des cases accessoires.",
    ],
  },
  {
    heading: "Devis, acompte et copropriété",
    Icon: <DoubleLockIcon className="w-4 h-4" />,
    paragraphs: [
      "La prise de mesures sur place et le devis sont gratuits, le devis vous est remis sous 24h. Un acompte de 30 % est demandé à la validation du devis. En copropriété, une autorisation n'est nécessaire que si l'aspect extérieur de la porte change.",
    ],
  },
  {
    heading: "Fabrication et pose",
    Icon: <HandshakeIcon className="w-4 h-4" />,
    paragraphs: [
      "Délai d'environ 10 jours, sans travaux de maçonnerie. Le matériel est couvert par la garantie fabricant Valente Securystar de 15 ans. Paiement par carte bancaire, espèces ou virement, facture envoyée par e-mail.",
    ],
  },
];

const faqFr = [
  {
    question: "Combien coûte un bloc-porte blindé à Nice ?",
    answer:
      "Le tarif d'un bloc-porte blindé démarre à 3 490 € TTC pour un bloc-porte certifié BP1 (ligne d'entrée de gamme), pose comprise. Les niveaux A2P supérieurs et les autres lignes sont chiffrés sur devis, selon vos besoins réels : niveau de sécurité recherché, isolation phonique ou thermique souhaitée, options anti-feu si nécessaire. La prise de mesures sur place est gratuite et le devis, sans engagement, vous est remis sous 24h.",
  },
  {
    question: "Quelle différence avec un blindage de porte ?",
    answer:
      "Le bloc-porte remplace l'ensemble de la menuiserie (porte, dormant, serrure). Le blindage conserve votre porte existante et renforce son bâti, pour un coût nettement inférieur quand votre porte reste saine : voir ma page blindage de porte.",
  },
  {
    question: "Quel niveau A2P BP choisir ?",
    answer:
      "BP1 résiste 5 minutes, BP2 10 minutes, BP3 15 minutes. Je recommande le niveau en fonction du quartier et de la valeur des biens à protéger chez vous : j'en discute avec vous lors de la visite, ce n'est pas un tarif fixe.",
  },
  {
    question: "Combien de temps faut-il pour avoir un bloc-porte ?",
    answer: "Le délai est d'environ 10 jours, sans maçonnerie.",
  },
  {
    question: "Quelle garantie sur un bloc-porte blindé ?",
    answer:
      "Le matériel est couvert par la garantie fabricant Valente Securystar de 15 ans.",
  },
  {
    question: "Peut-on avoir une porte vitrée ou à deux vantaux ?",
    answer:
      "Oui, la ligne Vitréo propose une version vitrée, et l'ensemble des lignes existe en 1 ou 2 vantaux. Les blocs-portes sont proposés en dimensions standard uniquement.",
  },
  {
    question: "Faut-il l'accord de la copropriété pour changer ma porte d'entrée ?",
    answer:
      "Une autorisation n'est nécessaire que si l'aspect extérieur de la porte change.",
  },
  {
    question: "La prise de mesures est-elle payante, et faut-il un acompte ?",
    answer:
      "La prise de mesures sur place est gratuite. Un acompte de 30 % est demandé une fois le devis validé. Le paiement se fait par carte bancaire, espèces ou virement, et la facture vous est envoyée par e-mail.",
  },
];

const sectionsEn = [
  {
    heading: "What an armored door block is",
    Icon: <DoorIcon className="w-4 h-4" />,
    paragraphs: [
      <>
        An armored door block replaces your entire door unit (door, frame
        and lock) in one piece with a genuine new armored door, with a lead
        time of about 10 days. It&apos;s the most complete solution
        when your current door or its frame no longer hold up. If your door
        is still sound, a{" "}
        <Link href="/blindage-porte-nice/" className="text-steel underline">
          door reinforcement
        </Link>{" "}
        is often enough, at a much lower cost.
      </>,
    ],
  },
  {
    heading: "Five lines depending on your style",
    Icon: <CheckIcon className="w-4 h-4" />,
    paragraphs: [
      <>
        Lisseo (clean design, 3 finishes), Solo (wood with mouldings), Ferro
        (steel panels, reproduction of your existing door possible), Vitréo
        (glazed version) and Designo (3 design lines): five lines
        from the{" "}
        <a
          href="https://www.valentesecurystar.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          Valente Securystar
        </a>{" "}
        range, a French manufacturer based in Thiais since 1995. Full
        details for each line are in my complete guide. 1 or 2 leaves,
        standard dimensions.
      </>,
    ],
  },
  {
    heading: "A2P BP level, a quote criterion",
    Icon: <ShieldIcon className="w-4 h-4" />,
    paragraphs: [
      "BP1 resists 5 minutes, BP2 10 minutes, BP3 15 minutes: I recommend the level based on your neighbourhood and the value of what needs protecting. The starting price is for a BP1-certified door block, higher levels are quoted individually.",
    ],
  },
  {
    heading: "Options that shape the quote",
    Icon: <WrenchIcon className="w-4 h-4" />,
    paragraphs: [
      "Enhanced sound insulation, enhanced heat insulation, fire-resistant option: three real criteria to discuss based on your home, not add-on checkboxes.",
    ],
  },
  {
    heading: "Quote, deposit and co-ownership",
    Icon: <DoubleLockIcon className="w-4 h-4" />,
    paragraphs: [
      "Measuring on site and the quote are free, and the quote is sent to you within 24 hours. A 30% deposit is requested when the quote is accepted. In a co-owned building, approval is only needed if the exterior look of the door changes.",
    ],
  },
  {
    heading: "Manufacturing and fitting",
    Icon: <HandshakeIcon className="w-4 h-4" />,
    paragraphs: [
      "Lead time of about 10 days, with no masonry work. The material is covered by the 15-year Valente Securystar manufacturer warranty. Payment by bank card, cash or bank transfer, invoice sent by e-mail.",
    ],
  },
];

const faqEn = [
  {
    question: "How much does an armored door block cost in Nice?",
    answer:
      "An armored door block starts at €3,490 incl. VAT for a BP1-certified door block (entry-level line), fitted. Higher A2P levels and the other lines are quoted individually, based on your actual needs: the security level you want, sound or heat insulation, fire-resistant options if needed. Measuring on site is free, and the no-obligation quote is sent to you within 24 hours.",
  },
  {
    question: "What's the difference with door reinforcement?",
    answer:
      "A door block replaces the entire unit (door, frame, lock). Reinforcement keeps your existing door and strengthens its frame, at a much lower cost when your door is still sound: see my door reinforcement page.",
  },
  {
    question: "Which A2P BP level should I choose?",
    answer:
      "BP1 resists 5 minutes, BP2 10 minutes, BP3 15 minutes. I recommend the level based on your neighbourhood and the value of what you need to protect: I discuss it with you during the visit, it isn't a fixed price.",
  },
  {
    question: "How long does it take to get a door block?",
    answer: "The lead time is about 10 days, with no masonry work.",
  },
  {
    question: "What warranty comes with an armored door block?",
    answer:
      "The material is covered by the 15-year Valente Securystar manufacturer warranty.",
  },
  {
    question: "Can I get a glazed door, or a double door?",
    answer:
      "Yes, the Vitréo line offers a glazed version, and every line comes in 1 or 2 leaves. Door blocks are offered in standard dimensions only.",
  },
  {
    question: "Do I need co-ownership approval to change my front door?",
    answer:
      "Approval is only needed if the exterior look of the door changes.",
  },
  {
    question: "Is measuring charged, and is a deposit required?",
    answer:
      "Measuring on site is free. A 30% deposit is requested once the quote is accepted. You can pay by bank card, cash or bank transfer, and the invoice is sent to you by e-mail.",
  },
];

export default function InstallationPorteBlindeeNicePage() {
  return (
    <LocalizedServicePage
      fr={{
        h1: "Installation de porte blindée à Nice : prix et bloc-porte neuf",
        lead: "Remplacement complet par un bloc-porte neuf, certifié A2P : la solution la plus complète quand votre porte ou son bâti ne tiennent plus la route. Prix d'une porte blindée neuve à Nice : à partir de 3 490 € TTC pose comprise (certifié BP1), devis personnalisé selon la ligne et les options retenues.",
        sections: sectionsFr,
        faq: faqFr,
        breadcrumbLabel: "Installation porte blindée",
        path: "/installation-porte-blindee-nice/",
        image: {
          src: "/images/serrurier-nice-porte-blindee-multipoints.webp",
          alt: "Installation porte blindée Nice",
        },
        sectionsVariant: "cards",
        sectionsHeading: "Ce qu'il faut savoir sur le bloc-porte blindé",
        headingScale: "lg",
        extra: (
          <PriceReminder
            priceLabel="à partir de 3 490 € TTC"
            note="Bloc-porte certifié BP1, ligne d'entrée de gamme (Lisseo), pose comprise. Les niveaux supérieurs et les autres lignes sont sur devis, selon le niveau A2P BP et les options (isolation, coupe-feu) : mesures et devis gratuits, devis remis sous 24h."
            locale="fr"
          />
        ),
        processSteps: [
          {
            title: "Appel",
            text: "Vous me décrivez votre porte actuelle et vos priorités (sécurité, isolation, esthétique) pour un premier avis dès le téléphone.",
          },
          {
            title: "Rendez-vous",
            text: "Je fixe un rendez-vous pour évaluer votre porte et son bâti sur place, à l'heure qui vous convient. La prise de mesures est gratuite.",
          },
          {
            title: "Choix de la ligne et devis",
            text: "Je vous présente les cinq lignes disponibles et j'établis un devis personnalisé selon le niveau A2P et les options retenues, remis sous 24h. Un acompte de 30 % est demandé à sa validation.",
          },
          {
            title: "Fabrication et pose",
            text: "Délai d'environ 10 jours, pose sans maçonnerie, facture détaillée envoyée par e-mail.",
          },
        ],
        relatedArticle: {
          href: "/blog/certification-a2p-serrure-nice/",
          label: "Certification A2P : ce que ce sigle change vraiment pour votre serrure",
        },
        guide: (
          <ServiceGuideSection readingMinutes={6} toc={guideToc} faq={guideFaq}>
            {guideContent}
          </ServiceGuideSection>
        ),
        guideFaqForSchema: guideFaq,
      }}
      en={{
        h1: "Armored door installation in Nice: price and new door block",
        lead: "Full replacement with a new A2P-certified armored door block: the most complete solution when your door or its frame no longer hold up. Armored door price in Nice: from €3,490 incl. VAT fitted (BP1-certified), tailored quote based on the line and options chosen.",
        sections: sectionsEn,
        faq: faqEn,
        breadcrumbLabel: "Armored door installation",
        path: "/installation-porte-blindee-nice/",
        image: {
          src: "/images/serrurier-nice-porte-blindee-multipoints.webp",
          alt: "Armored door installation Nice",
        },
        sectionsVariant: "cards",
        sectionsHeading: "What to know about the armored door block",
        headingScale: "lg",
        extra: (
          <PriceReminder
            priceLabel="from €3,490 incl. VAT"
            note="BP1-certified door block, entry-level line (Lisseo), fitted. Higher levels and the other lines are quoted individually, based on the A2P BP level and options (insulation, fire resistance): free measuring, quote sent within 24 hours."
            locale="en"
          />
        ),
        processSteps: [
          {
            title: "Call",
            text: "You describe your current door and your priorities (security, insulation, appearance) for a first opinion right there on the phone.",
          },
          {
            title: "Appointment",
            text: "I schedule a visit to assess your door and its frame on site, at a time that suits you. Measuring is free.",
          },
          {
            title: "Line choice and quote",
            text: "I show you the five available lines and put together a tailored quote based on the A2P level and options chosen, sent within 24 hours. A 30% deposit is requested when it is accepted.",
          },
          {
            title: "Manufacturing and fitting",
            text: "Lead time of about 10 days, fitted with no masonry work, detailed invoice sent by e-mail.",
          },
        ],
      }}
    />
  );
}
