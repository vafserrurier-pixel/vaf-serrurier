import type { Metadata } from "next";
import Link from "next/link";
import LocalizedServicePage from "@/components/LocalizedServicePage";
import PriceReminder from "@/components/PriceReminder";
import ArticleTable from "@/components/ArticleTable";
import { ShieldIcon, WrenchIcon, CheckIcon, HandshakeIcon, DoorIcon, DoubleLockIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/metadata";
import ServiceReviewsLive from "@/components/ServiceReviewsLive";

export const metadata: Metadata = buildMetadata({
  path: "/installation-porte-blindee-nice/",
  title: "Porte blindée Nice : bloc-porte neuf certifié A2P",
  description:
    "Porte blindée à Nice : bloc-porte Valente Securystar certifié A2P BP1 à BP3, pose sans maçonnerie, garantie 15 ans. Devis gratuit sous 24 h. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";
const olClass = "list-decimal pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";

const sectionsFr = [
  {
    heading: "Bloc-porte ou blindage : ce qui change",
    paragraphs: [
      "Avec un bloc-porte, on ne renforce rien : on change tout. C'est une porte neuve : le vantail, le cadre (le dormant), la serrure et le cylindre sont fabriqués ensemble et testés ensemble. L'ancienne porte et son cadre partent.",
      <>
        Le{" "}
        <Link href="/blindage-porte-nice/" className={linkClass}>
          blindage de porte
        </Link>
        , lui, garde votre porte et la renforce avec une tôle d&apos;acier et un cadre métallique. Les deux protègent,
        mais pas dans la même situation.
      </>,
    ],
    extra: (
      <ArticleTable
        headers={["Critère", "Blindage de porte", "Bloc-porte neuf"]}
        rows={[
          ["Votre porte", "Conservée et renforcée", "Remplacée entièrement (porte, cadre, serrure)"],
          ["Quand le choisir", "Porte saine : bois en bon état, cadre droit", "Porte ou cadre trop abîmés, ou niveau BP élevé exigé"],
          ["Prix de départ (TTC, pose comprise)", "2 689 € (modèle Citadin)", "3 490 € (certifié BP1)"],
          ["Délai", "Pose en 4 heures environ", "10 jours environ"],
          ["Aspect côté palier", "Inchangé", "Peut changer selon la ligne choisie"],
          ["Copropriété", "Pas d'autorisation tant que l'aspect ne change pas", "Autorisation seulement si l'aspect change"],
        ]}
      />
    ),
  },
  {
    heading: "Quand un bloc-porte neuf se justifie",
    paragraphs: [],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">La porte ou son cadre sont trop abîmés</strong> : bois fendu ou pourri, porte
          voilée, cadre fissuré ou qui a bougé. Un blindage ne tiendrait pas sur une base pareille.
        </li>
        <li>
          <strong className="text-navy">Votre assureur exige un niveau A2P BP élevé</strong> (BP2 ou BP3) : le
          bloc-porte neuf est la façon la plus directe d&apos;y répondre. Vérifiez le niveau exigé dans votre contrat.
        </li>
        <li>
          <strong className="text-navy">Après une effraction</strong> qui a détruit la porte. En attendant la
          fabrication, je fais une{" "}
          <Link href="/mise-en-securite-apres-effraction-nice/" className={linkClass}>
            mise en sécurité provisoire
          </Link>{" "}
          pour que vous puissiez fermer chez vous.
        </li>
        <li>
          <strong className="text-navy">Vous voulez aussi gagner en isolation.</strong> Un bloc-porte neuf est isolé dès
          la fabrication, contre le bruit du palier et contre le froid ; une vieille porte palière, même blindée, ne
          l&apos;est pas.
        </li>
      </ul>
    ),
  },
  {
    heading: "Les niveaux A2P BP1, BP2, BP3",
    paragraphs: [
      "La certification A2P BP est délivrée par le CNPP, un organisme indépendant. Elle teste la porte entière (vantail, cadre, serrure, paumelles) face à un cambrioleur outillé :",
    ],
    extra: (
      <>
        <div className="mb-4">
          <ArticleTable
            headers={["Niveau", "Résistance à l'effraction", "Pour qui"]}
            rows={[
              ["BP1", "5 minutes", "La plupart des appartements en étage"],
              ["BP2", "10 minutes", "Rez-de-chaussée, porte peu visible, biens de valeur"],
              ["BP3", "15 minutes", "Exigence d'assurance élevée, objets de grande valeur"],
            ]}
          />
        </div>
        <p className={pClass}>
          Je recommande le niveau selon votre quartier, l&apos;étage, l&apos;exposition de la porte et ce que vous avez à
          protéger. Le prix de départ correspond au BP1 ; les niveaux supérieurs sont sur devis. Plus de détails dans mon{" "}
          <Link href="/blog/certification-a2p-serrure-nice/" className={linkClass}>
            article sur la certification A2P
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    heading: "Les cinq lignes que je pose",
    paragraphs: [
      <>
        Je pose la gamme{" "}
        <a
          href="https://www.valentesecurystar.com/"
          target="_blank"
          rel="noopener"
          className={linkClass}
        >
          Valente Securystar
        </a>
        , un fabricant français installé à Thiais depuis 1995. Cinq lignes, toutes en 1 ou 2 vantaux, en dimensions
        standard :
      </>,
    ],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">Lisseo</strong> : design épuré, trois finitions (bois lisse, acier époxy, acier
          décor bois). C&apos;est la ligne du prix de départ.
        </li>
        <li>
          <strong className="text-navy">Solo</strong> : bois avec moulures, encastrées, à motifs ou en applique.
        </li>
        <li>
          <strong className="text-navy">Ferro</strong> : panneaux acier et moulures ; permet de reproduire l&apos;aspect
          de votre porte actuelle.
        </li>
        <li>
          <strong className="text-navy">Vitréo</strong> : version vitrée.
        </li>
        <li>
          <strong className="text-navy">Designo</strong> : trois lignes design, graphique, esthétique et authentique.
        </li>
      </ul>
    ),
  },
  {
    heading: "Les options qui changent le devis",
    paragraphs: [
      "Trois options font varier le prix, et je vous les propose seulement si votre logement en a besoin :",
    ],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">isolation phonique renforcée</strong>, pour un palier bruyant ou une cage
          d&apos;escalier qui résonne ;
        </li>
        <li>
          <strong className="text-navy">isolation thermique renforcée</strong>, pour une entrée exposée ou un palier non
          chauffé ;
        </li>
        <li>
          <strong className="text-navy">coupe-feu / pare-flammes</strong>, selon la configuration des parties communes
          de votre immeuble.
        </li>
      </ul>
    ),
  },
  {
    heading: "Comment se passe un projet",
    paragraphs: [],
    extra: (
      <>
        <ol className={olClass}>
          <li>
            <strong className="text-navy">L&apos;appel.</strong> Vous me décrivez votre porte actuelle et ce qui compte
            pour vous : sécurité, bruit, aspect. Je vous donne un premier avis au téléphone.
          </li>
          <li>
            <strong className="text-navy">La visite.</strong> Je viens mesurer la porte et contrôler le cadre, le mur, le
            seuil et le sens d&apos;ouverture. Gratuit, à l&apos;heure qui vous arrange.
          </li>
          <li>
            <strong className="text-navy">Le devis.</strong> Remis sous 24 heures, avec la ligne, le niveau BP et les
            options. Un acompte de 30 % est demandé à sa validation.
          </li>
          <li>
            <strong className="text-navy">La fabrication.</strong> Environ 10 jours.
          </li>
          <li>
            <strong className="text-navy">La pose.</strong> Sans travaux de maçonnerie. Je dépose l&apos;ancienne porte,
            je pose le bloc neuf, je règle la fermeture et je vous remets les clés.
          </li>
        </ol>
        <p className={pClass}>
          Tous mes prix sont sur ma page{" "}
          <Link href="/tarifs-serrurier-nice/" prefetch={false} className={linkClass}>
            tarifs
          </Link>
          . La facture détaillée vous est envoyée par e-mail. Le matériel est couvert par la garantie fabricant Valente
          Securystar de 15 ans. Pour un logement de plus de 2 ans, la TVA est à 10 %.
        </p>
      </>
    ),
  },
  {
    heading: "Quand ce n'est pas la bonne solution",
    paragraphs: [
      "Un bloc-porte est la solution la plus complète, pas toujours la plus utile. Je vous oriente ailleurs dans trois cas :",
    ],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">Votre porte est saine</strong> : un blindage de porte la renforce pour moins
          cher, et elle garde son aspect.
        </li>
        <li>
          <strong className="text-navy">Le problème est localisé</strong> : un{" "}
          <Link href="/changement-serrure-nice/" className={linkClass}>
            cylindre usé
          </Link>
          , une serrure fatiguée ou une porte mal réglée se réparent sans changer toute la porte.
        </li>
        <li>
          <strong className="text-navy">Votre budget est serré</strong> : une{" "}
          <Link href="/serrure-carenee-nice/" className={linkClass}>
            serrure carénée
          </Link>{" "}
          ou une{" "}
          <Link href="/poignee-blindee-nice/" className={linkClass}>
            poignée blindée
          </Link>{" "}
          apportent déjà un vrai gain de résistance, pour une fraction du prix.
        </li>
      </ul>
    ),
  },
  {
    heading: "Copropriété : ce qu'il faut vérifier",
    paragraphs: [
      "Votre porte d'entrée fait partie de l'aspect des parties communes côté palier. Si la ligne choisie change cet aspect (couleur, moulures, finition), il faut l'autorisation de la copropriété avant de commander. Si l'aspect reste le même, aucune autorisation n'est nécessaire. Je peux reproduire l'aspect de votre porte actuelle avec la ligne Ferro.",
    ],
  },
  {
    heading: "Avant de signer un devis de porte blindée : 4 vérifications",
    paragraphs: [
      "Une porte blindée est un achat de plusieurs milliers d'euros. Quel que soit l'artisan, vérifiez ces quatre points avant de signer :",
    ],
    extra: (
      <ol className={olClass}>
        <li>
          <strong className="text-navy">Le niveau de certification est écrit sur le devis</strong> (BP1, BP2 ou BP3),
          avec la marque et la ligne de la porte. « Porte blindée » seul ne veut rien dire.
        </li>
        <li>
          <strong className="text-navy">Le prix comprend la pose et la dépose</strong> de l&apos;ancienne porte, et le
          devis dit si des options sont incluses ou non.
        </li>
        <li>
          <strong className="text-navy">L&apos;acompte reste raisonnable.</strong> Chez moi, 30 % à la validation du
          devis.
        </li>
        <li>
          <strong className="text-navy">La garantie du fabricant est indiquée</strong> sur le devis ou la facture, avec
          sa durée.
        </li>
      </ol>
    ),
  },
];

const faqFr = [
  {
    question: "Combien coûte une porte blindée à Nice ?",
    answer:
      "À partir de 3 490 € TTC pose comprise, pour un bloc-porte certifié BP1 de la ligne Lisseo. Les niveaux BP2 et BP3, les autres lignes et les options sont sur devis. Mesures et devis sont gratuits.",
  },
  {
    question: "Quelle différence avec un blindage de porte ?",
    answer:
      "Le bloc-porte remplace toute la porte et son cadre. Le blindage garde votre porte et la renforce, à partir de 2 689 € TTC, quand elle est encore saine.",
  },
  {
    question: "Quel niveau A2P choisir ?",
    answer:
      "BP1 résiste 5 minutes, BP2 10 minutes, BP3 15 minutes. Je vous conseille selon l'étage, le quartier et ce que vous avez à protéger, et selon ce qu'exige votre assureur.",
  },
  {
    question: "Combien de temps faut-il pour avoir la porte ?",
    answer:
      "Environ 10 jours de fabrication, puis la pose, sans maçonnerie. Si votre porte a été forcée, je la sécurise en attendant.",
  },
  {
    question: "Faut-il l'accord de la copropriété ?",
    answer: "Seulement si l'aspect extérieur de la porte change.",
  },
  {
    question: "Quelle garantie ?",
    answer: "La garantie fabricant Valente Securystar de 15 ans sur le matériel.",
  },
  {
    question: "Faut-il verser un acompte ?",
    answer:
      "Oui, 30 % à la validation du devis. Le reste se règle par carte bancaire, espèces ou virement, avec une facture détaillée.",
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
        h1: "Porte blindée à Nice : un bloc-porte neuf, certifié A2P",
        lead: "Quand votre porte ou son cadre ne tiennent plus, je remplace l'ensemble par un bloc-porte blindé neuf, certifié A2P. À partir de 3 490 € TTC pose comprise pour un bloc-porte certifié BP1. La prise de mesures et le devis sont gratuits, et le devis vous est remis sous 24 heures.",
        hideProcessSteps: true,
        sections: sectionsFr,
        faq: faqFr,
        breadcrumbLabel: "Installation porte blindée",
        path: "/installation-porte-blindee-nice/",
        image: {
          src: "/images/serrurier-nice-porte-blindee-multipoints.webp",
          alt: "Installation porte blindée Nice",
        },
        headingScale: "lg",
        extra: (
          <>
            <PriceReminder
              priceLabel="à partir de 3 490 € TTC"
              note="Bloc-porte certifié BP1, ligne Lisseo, pose comprise. Autres lignes et niveaux BP2, BP3 sur devis. Mesures et devis gratuits."
              locale="fr"
            />
            <ServiceReviewsLive path="/installation-porte-blindee-nice/" />
          </>
        ),
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
