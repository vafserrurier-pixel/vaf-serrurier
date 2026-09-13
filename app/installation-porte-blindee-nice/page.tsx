import type { Metadata } from "next";
import Link from "next/link";
import LocalizedServicePage from "@/components/LocalizedServicePage";
import ServiceGuideSection from "@/components/ServiceGuideSection";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import { ShieldIcon, WrenchIcon, CheckIcon, HandshakeIcon, DoorIcon, DoubleLockIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/metadata";

const guideToc = [
  { id: "lignes", label: "Les cinq lignes en détail" },
  { id: "a2p", label: "Le niveau A2P BP, un critère de devis" },
  { id: "options", label: "Les options qui influencent le devis" },
  { id: "pas-la-solution", label: "Quand ce n'est pas la bonne solution" },
  { id: "faq", label: "Questions complémentaires" },
];

const guideFaq = [
  {
    question: "Puis-je reproduire l'aspect de ma porte actuelle sur un bloc-porte neuf ?",
    answer:
      "Oui, notamment avec la ligne Ferro, qui permet une reproduction de l'existant sur mesure. Le diagnostic sur place permet de définir précisément la finition la plus proche de votre porte actuelle.",
  },
  {
    question: "Un bloc-porte à 2 vantaux ou de grande hauteur est-il possible ?",
    answer:
      "Oui, 1 ou 2 vantaux sont possibles selon la configuration de votre entrée, avec des hauteurs sur mesure jusqu'à 6 mètres pour les configurations les plus importantes.",
  },
  {
    question: "Combien de temps pour fabriquer et poser un bloc-porte sur mesure ?",
    answer:
      "La fabrication sur mesure prend généralement 24 à 48h (la ligne Ferro peut être fabriquée en 24h), puis la pose elle-même prend 2 à 3 heures, sans travaux de maçonnerie.",
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
        panneaux acier à des moulures sur mesure, avec une reproduction de
        l&apos;existant possible et une fabrication en 24h. Le{" "}
        <strong className="text-navy">Vitréo</strong> propose une version
        vitrée entièrement sur mesure. Le{" "}
        <strong className="text-navy">Designo</strong> décline trois lignes
        design distinctes : graphique, esthétique et authentique. Toutes ces
        lignes existent en 1 ou 2 vantaux, avec des hauteurs sur mesure
        jusqu&apos;à 6 mètres.
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
        besoins qu&apos;un appartement en étage élevé.
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
      <ArticleSectionHeading number={4} id="pas-la-solution" level="h3" size="lg" numberStyle="plain">
        Quand ce n&apos;est pas la bonne solution
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Un bloc-porte neuf est la solution la plus complète, pas
        systématiquement la plus pertinente. Deux cas où je vous oriente
        ailleurs :
      </p>
      <ul className="list-disc pl-5 flex flex-col gap-2.5 text-slate leading-relaxed mt-3">
        <li>
          <strong className="text-navy">Votre porte actuelle reste saine</strong> — si le bois
          n&apos;est ni pourri ni déformé, remplacer l&apos;ensemble de la menuiserie n&apos;est pas
          nécessaire. Un{" "}
          <Link href="/blindage-porte-nice/" className="text-steel underline">
            blindage de porte
          </Link>{" "}
          renforce votre porte existante pour un coût nettement inférieur.
        </li>
        <li>
          <strong className="text-navy">Budget contraint</strong> — un{" "}
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
  </>
);

export const metadata: Metadata = buildMetadata({
  path: "/installation-porte-blindee-nice/",
  title: "Bloc-porte blindé neuf à Nice – Sur mesure A2P | VAF",
  description: "Bloc-porte blindé neuf à Nice : 5 lignes sur mesure, certification A2P BP1 à BP3, isolation acoustique 41 dB. Devis 100% personnalisé, sans prix générique.",
});

const sectionsFr = [
  {
    heading: "Qu'est-ce qu'un bloc-porte blindé",
    Icon: <DoorIcon className="w-4 h-4" />,
    paragraphs: [
      <>
        Un bloc-porte blindé remplace l&apos;ensemble de votre menuiserie —
        porte, dormant et serrure — d&apos;un seul tenant, fabriqué sur
        mesure et livré en 24 à 48h. C&apos;est la solution la plus complète
        quand votre porte actuelle ou son bâti ne tiennent plus la route. Si
        votre porte reste saine, un{" "}
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
        (version vitrée sur mesure) et Designo (3 lignes design) : cinq
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
        hauteur sur mesure jusqu&apos;à 6 m.
      </>,
    ],
  },
  {
    heading: "Le niveau A2P BP, un critère de devis",
    Icon: <ShieldIcon className="w-4 h-4" />,
    paragraphs: [
      "BP1 résiste 5 minutes, BP2 10 minutes, BP3 15 minutes : je définis le niveau adapté avec vous selon votre budget et le niveau de sécurité recherché, ce n'est pas un tarif fixe.",
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
    heading: "Isolation acoustique, un vrai avantage du bloc-porte",
    Icon: <DoubleLockIcon className="w-4 h-4" />,
    paragraphs: [
      "41 dB d'isolation acoustique de base, un niveau supérieur à celui d'un blindage classique, encore améliorable selon les options choisies.",
    ],
  },
  {
    heading: "Fabrication et pose",
    Icon: <HandshakeIcon className="w-4 h-4" />,
    paragraphs: [
      "Fabrication sur mesure livrée en 24 à 48h, pose en 2 à 3 heures sans travaux de maçonnerie. Garantie de pose de 2 ans de ma part, et garantie fabricant Valente Securystar de 15 ans sur le matériel.",
    ],
  },
];

const faqFr = [
  {
    question: "Combien coûte un bloc-porte blindé à Nice ?",
    answer:
      "Le tarif d'un bloc-porte blindé dépend entièrement de vos besoins réels — niveau de sécurité recherché, isolation phonique ou thermique souhaitée, options anti-feu si nécessaire, dimensions de votre porte. C'est pourquoi je ne communique pas de prix générique : un diagnostic sur place permet d'établir un devis précis et sur-mesure, sans engagement.",
  },
  {
    question: "Quelle différence avec un blindage de porte ?",
    answer:
      "Le bloc-porte remplace l'ensemble de la menuiserie (porte, dormant, serrure). Le blindage conserve votre porte existante et renforce son bâti, pour un coût nettement inférieur quand votre porte reste saine : voir ma page blindage de porte.",
  },
  {
    question: "Quel niveau A2P BP choisir ?",
    answer:
      "BP1 résiste 5 minutes, BP2 10 minutes, BP3 15 minutes. Le choix dépend de votre budget et du niveau de sécurité recherché : j'en discute avec vous lors du diagnostic, ce n'est pas un tarif fixe.",
  },
  {
    question: "Combien de temps pour fabriquer et poser un bloc-porte ?",
    answer: "24 à 48h de fabrication sur mesure, puis 2 à 3 heures de pose, sans maçonnerie.",
  },
  {
    question: "Quelle garantie sur un bloc-porte blindé ?",
    answer:
      "Garantie de pose de 2 ans de ma part, et garantie fabricant Valente Securystar de 15 ans sur le matériel : deux garanties distinctes et cumulables.",
  },
  {
    question: "Peut-on avoir une porte vitrée ou sur mesure jusqu'à 6 mètres ?",
    answer:
      "Oui, la ligne Vitréo propose une version vitrée sur mesure, et l'ensemble des lignes existe en 1 ou 2 vantaux avec des hauteurs sur mesure jusqu'à 6 mètres.",
  },
];

const sectionsEn = [
  {
    heading: "What an armored door block is",
    Icon: <DoorIcon className="w-4 h-4" />,
    paragraphs: [
      <>
        An armored door block replaces your entire door unit — door, frame
        and lock — in one piece, custom-made and delivered in 24 to 48
        hours. It&apos;s the most complete solution when your current door
        or its frame no longer hold up. If your door is still sound, a{" "}
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
        (custom glazed version) and Designo (3 design lines): five lines
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
        custom heights up to 6 m.
      </>,
    ],
  },
  {
    heading: "A2P BP level, a quote criterion",
    Icon: <ShieldIcon className="w-4 h-4" />,
    paragraphs: [
      "BP1 resists 5 minutes, BP2 10 minutes, BP3 15 minutes: I define the right level with you based on your budget and the security level you're after, it isn't a fixed price.",
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
    heading: "Sound insulation, a real advantage of the door block",
    Icon: <DoubleLockIcon className="w-4 h-4" />,
    paragraphs: [
      "41 dB of sound insulation as standard, above what a classic reinforcement offers, and can be improved further with options.",
    ],
  },
  {
    heading: "Manufacturing and fitting",
    Icon: <HandshakeIcon className="w-4 h-4" />,
    paragraphs: [
      "Custom-made and delivered in 24 to 48 hours, fitted in 2 to 3 hours with no masonry work. A 2-year fitting warranty from me, and a 15-year Valente Securystar manufacturer warranty on the material.",
    ],
  },
];

const faqEn = [
  {
    question: "How much does an armored door block cost in Nice?",
    answer:
      "The price of an armored door block depends entirely on your actual needs — the security level you want, sound or heat insulation, fire-resistant options if needed, your door's dimensions. That's why I don't give a generic price: an on-site assessment lets me put together a precise, tailored quote, with no obligation.",
  },
  {
    question: "What's the difference with door reinforcement?",
    answer:
      "A door block replaces the entire unit (door, frame, lock). Reinforcement keeps your existing door and strengthens its frame, at a much lower cost when your door is still sound: see my door reinforcement page.",
  },
  {
    question: "Which A2P BP level should I choose?",
    answer:
      "BP1 resists 5 minutes, BP2 10 minutes, BP3 15 minutes. The choice depends on your budget and the security level you want: I discuss it with you during the assessment, it isn't a fixed price.",
  },
  {
    question: "How long to manufacture and fit a door block?",
    answer: "24 to 48 hours of custom manufacturing, then 2 to 3 hours of fitting, no masonry work.",
  },
  {
    question: "What warranty comes with an armored door block?",
    answer:
      "A 2-year fitting warranty from me, and a 15-year Valente Securystar manufacturer warranty on the material: two separate, combinable warranties.",
  },
  {
    question: "Can I get a glazed door, or a custom size up to 6 metres?",
    answer:
      "Yes, the Vitréo line offers a fully custom glazed version, and every line comes in 1 or 2 leaves with custom heights up to 6 metres.",
  },
];

export default function InstallationPorteBlindeeNicePage() {
  return (
    <LocalizedServicePage
      fr={{
        h1: "Bloc-porte blindé neuf à Nice",
        lead: "Remplacement complet par un bloc-porte neuf sur mesure, certifié A2P : la solution la plus complète quand votre porte ou son bâti ne tiennent plus la route. Devis 100% personnalisé.",
        sections: sectionsFr,
        faq: faqFr,
        breadcrumbLabel: "Bloc-porte blindé",
        path: "/installation-porte-blindee-nice/",
        image: {
          src: "/images/serrurier-nice-porte-blindee-multipoints.webp",
          alt: "Serrurier posant un bloc-porte blindé neuf à Nice",
        },
        sectionsVariant: "cards",
        sectionsHeading: "Ce qu'il faut savoir sur le bloc-porte blindé",
        headingScale: "lg",
        processSteps: [
          {
            title: "Appel",
            text: "Vous me décrivez votre porte actuelle et vos priorités (sécurité, isolation, esthétique) pour un premier avis dès le téléphone.",
          },
          {
            title: "Rendez-vous",
            text: "Je fixe un rendez-vous pour évaluer votre porte et son bâti sur place, à l'heure qui vous convient.",
          },
          {
            title: "Choix de la ligne et devis",
            text: "Je vous présente les cinq lignes disponibles et j'établis un devis sur-mesure selon le niveau A2P et les options retenues.",
          },
          {
            title: "Fabrication et pose",
            text: "Fabrication sur mesure livrée en 24 à 48h, pose en 2 à 3 heures, facture conforme aux assureurs à l'appui.",
          },
        ],
        relatedServices: [
          { href: "/blindage-porte-nice/", label: "Blindage de porte" },
          { href: "/changement-serrure-nice/", label: "Changement de serrure" },
          { href: "/mise-en-securite-apres-effraction-nice/", label: "Après effraction" },
          { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
          { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
          { href: "/poignee-blindee-nice/", label: "Poignée blindée" },
        ],
        relatedArticle: {
          href: "/blog/certification-a2p-serrure-nice/",
          label: "Certification A2P : ce que ce sigle change vraiment pour votre serrure",
        },
        guide: (
          <ServiceGuideSection readingMinutes={6} toc={guideToc} tocAccentColor="urgent" faq={guideFaq}>
            {guideContent}
          </ServiceGuideSection>
        ),
        guideFaqForSchema: guideFaq,
      }}
      en={{
        h1: "New armored door block in Nice",
        lead: "Full replacement with a custom-made, A2P-certified armored door block: the most complete solution when your door or its frame no longer hold up. 100% tailored quote.",
        sections: sectionsEn,
        faq: faqEn,
        breadcrumbLabel: "Armored door block",
        path: "/installation-porte-blindee-nice/",
        image: {
          src: "/images/serrurier-nice-porte-blindee-multipoints.webp",
          alt: "Locksmith fitting a new armored door block in Nice",
        },
        sectionsVariant: "cards",
        sectionsHeading: "What to know about the armored door block",
        headingScale: "lg",
        processSteps: [
          {
            title: "Call",
            text: "You describe your current door and your priorities (security, insulation, appearance) for a first opinion right there on the phone.",
          },
          {
            title: "Appointment",
            text: "I schedule a visit to assess your door and its frame on site, at a time that suits you.",
          },
          {
            title: "Line choice and quote",
            text: "I show you the five available lines and put together a tailored quote based on the A2P level and options chosen.",
          },
          {
            title: "Manufacturing and fitting",
            text: "Custom-made and delivered in 24 to 48 hours, fitted in 2 to 3 hours, with an invoice that meets insurer requirements.",
          },
        ],
        relatedServices: [
          { href: "/blindage-porte-nice/", label: "Door reinforcement" },
          { href: "/changement-serrure-nice/", label: "Lock change" },
          { href: "/mise-en-securite-apres-effraction-nice/", label: "After a break-in" },
          { href: "/depannage-serrurier-nice/", label: "Emergency callout" },
          { href: "/serrure-carenee-nice/", label: "5-point shrouded lock" },
          { href: "/poignee-blindee-nice/", label: "Armored handle" },
        ],
      }}
    />
  );
}
