import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import PriceReminder from "@/components/PriceReminder";
import BrandsSection from "@/components/BrandsSection";
import ServiceGuideSection from "@/components/ServiceGuideSection";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import { ShieldIcon, DoorIcon, WrenchIcon, CheckIcon, DoubleLockIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/metadata";

const guideToc = [
  { id: "differences", label: "Ce qui distingue une poignée blindée d'un simple cache-cylindre" },
  { id: "comparatif", label: "Poignée blindée, cylindre A2P, serrure carénée : bien choisir" },
  { id: "pas-la-solution", label: "Quand ce n'est pas la bonne solution" },
  { id: "entretien", label: "Entretien : ce qui prolonge la durée de vie" },
  { id: "faq", label: "Questions complémentaires" },
];

const guideFaq = [
  {
    question: "Une poignée blindée protège-t-elle aussi contre le crochetage du cylindre lui-même ?",
    answer:
      "Elle rend le cylindre inaccessible et invisible de l'extérieur, ce qui empêche l'attaque directe (perçage, arrachement). Mais le cylindre reste le mécanisme qui subit une tentative de crochetage : pour une résistance complète sur ce point précis, je recommande de la combiner avec un cylindre certifié A2P.",
  },
  {
    question: "Puis-je poser une poignée blindée en copropriété ?",
    answer:
      "Oui dans la grande majorité des cas, mais contrairement à un renfort intérieur comme la serrure carénée, la poignée blindée reste visible côté palier. Si le règlement de copropriété impose une apparence extérieure stricte, mieux vaut vérifier ce point auprès du syndic avant la pose.",
  },
];

const guideContent = (
  <>
    <p className="text-slate leading-relaxed">
      Ce guide détaille les critères concrets pour bien situer la poignée
      blindée par rapport aux autres renforts déjà présentés plus haut, et
      savoir dans quels cas elle n&apos;est pas la solution la plus adaptée.
    </p>

    <div>
      <ArticleSectionHeading number={1} id="differences" level="h3" size="lg" numberStyle="plain">
        Ce qui distingue une poignée blindée d&apos;un simple cache-cylindre
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Une poignée blindée n&apos;est pas qu&apos;un habillage esthétique :
        c&apos;est un ensemble de sécurité construit en plusieurs couches. Une
        plaque extérieure en aluminium massif, d&apos;environ 15 mm
        d&apos;épaisseur, encaisse les tentatives d&apos;arrachement. Une
        plaque intérieure en acier reprend l&apos;effort côté opposé, et un
        protecteur de cylindre en inox chromé, doté d&apos;une pastille
        anti-perçage intégrée, empêche d&apos;atteindre le cœur du mécanisme
        à la perceuse ou au crochetage. C&apos;est cette combinaison de
        matériaux qui fait la différence avec une simple rosace décorative.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={2} id="comparatif" level="h3" size="lg" numberStyle="plain">
        Poignée blindée, cylindre A2P, serrure carénée : bien choisir
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Ces trois renforts n&apos;agissent pas au même niveau. Un{" "}
        <Link href="/blog/certification-a2p-serrure-nice/" className="text-steel underline">
          cylindre certifié A2P
        </Link>{" "}
        renforce la résistance du mécanisme lui-même face au crochetage et à
        la casse. La poignée blindée, elle, protège ce même cylindre en le
        rendant inaccessible et invisible de l&apos;extérieur : les deux se
        combinent bien, l&apos;un renforçant le mécanisme, l&apos;autre son
        accès. La{" "}
        <Link href="/serrure-carenee-nice/" className="text-steel underline">
          serrure carénée
        </Link>{" "}
        va plus loin en intégrant sa propre protection de cylindre au
        boîtier carénée et en répartissant la résistance sur 5 points
        d&apos;ancrage : je ne pose jamais une poignée blindée par-dessus
        une serrure carénée déjà installée, puisque le protecteur de
        cylindre est déjà intégré à la carénée et qu&apos;empiler les deux
        n&apos;apporte rien de plus sur ce même point.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={3} id="pas-la-solution" level="h3" size="lg" numberStyle="plain">
        Quand ce n&apos;est pas la bonne solution
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        La poignée blindée est un renfort ciblé et rapide, pas une réponse
        universelle. Trois cas où je vous oriente ailleurs :
      </p>
      <ul className="list-disc pl-5 flex flex-col gap-2.5 text-slate leading-relaxed mt-3">
        <li>
          <strong className="text-navy">Porte ou bâti déjà fragilisés</strong> — si le dormant ou le
          cadre sont eux-mêmes affaiblis, protéger le seul cylindre ne suffit pas. Je vous oriente
          vers un{" "}
          <Link href="/installation-porte-blindee-nice/" className="text-steel underline">
            blindage complet ou un bloc-porte
          </Link>
          , qui reprend l&apos;ensemble de la porte plutôt qu&apos;un seul point.
        </li>
        <li>
          <strong className="text-navy">Besoin de renforcer plusieurs points de fermeture</strong> —
          si votre serrure n&apos;a qu&apos;un point d&apos;ancrage ou si vous cherchez une résistance
          répartie sur toute la hauteur de la porte, une{" "}
          <Link href="/serrure-carenee-nice/" className="text-steel underline">
            serrure carénée 5 points
          </Link>{" "}
          est plus adaptée que le seul renfort du cylindre.
        </li>
        <li>
          <strong className="text-navy">Serrure carénée déjà installée</strong> — le protecteur de
          cylindre est déjà intégré au boîtier d&apos;une{" "}
          <Link href="/serrure-carenee-nice/" className="text-steel underline">
            serrure carénée
          </Link>
          . Ajouter une poignée blindée par-dessus n&apos;apporte aucune protection supplémentaire sur
          ce même point.
        </li>
      </ul>
    </div>

    <div>
      <ArticleSectionHeading number={4} id="entretien" level="h3" size="lg" numberStyle="plain">
        Entretien : ce qui prolonge la durée de vie
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Un contrôle visuel des fixations et un léger lubrifiant sec sur le
        barillet une à deux fois par an suffisent à préserver le
        fonctionnement dans la durée. Si la clé commence à forcer, mieux
        vaut intervenir tôt : voir ma page{" "}
        <Link href="/depannage-serrurier-nice/" className="text-steel underline">
          dépannage serrurier
        </Link>
        .
      </p>
    </div>
  </>
);

export const metadata: Metadata = buildMetadata({
  path: "/poignee-blindee-nice/",
  title: "Poignée blindée à Nice – Protection du cylindre, 349 € TTC | VAF",
  description:
    "Installation d'une poignée blindée à Nice : protège et masque le cylindre exposé, garantie fabricant 10 ans (gamme Héraclès Salomé). 349 € TTC pose et réglage inclus.",
});

const sections = [
  {
    heading: "Qu'est-ce qu'une poignée blindée",
    Icon: <ShieldIcon className="w-4 h-4" />,
    paragraphs: [
      "Une poignée blindée, aussi appelée ensemble de sécurité, recouvre et protège le cylindre côté extérieur de la porte. Le cylindre n'est alors plus visible ni directement accessible, ce qui empêche un cambrioleur de l'attaquer au perçage ou au crochetage, deux techniques d'effraction courantes sur un cylindre exposé.",
    ],
  },
  {
    heading: "Une construction en plusieurs couches",
    Icon: <DoubleLockIcon className="w-4 h-4" />,
    paragraphs: [
      "Plaque extérieure en aluminium massif d'environ 15 mm d'épaisseur, plaque intérieure en acier, et protecteur de cylindre en inox chromé avec pastille anti-perçage intégrée : c'est cette combinaison de matériaux, pas la seule apparence, qui fait la résistance réelle de l'ensemble.",
    ],
  },
  {
    heading: "Compatible avec la plupart des portes existantes",
    Icon: <DoorIcon className="w-4 h-4" />,
    paragraphs: [
      "La pose s'adapte à différents entraxes de fixation selon votre porte. C'est le diagnostic sur place qui détermine la configuration exacte compatible avec votre installation actuelle, sans modification structurelle de la porte.",
    ],
  },
  {
    heading: "Un renfort ciblé, pas un blindage complet",
    Icon: <WrenchIcon className="w-4 h-4" />,
    paragraphs: [
      "C'est la solution la plus rapide et la plus économique quand le point faible de votre porte est uniquement le cylindre exposé, sur une porte et un bâti par ailleurs sains.",
      <>
        Si le bâti est fragilisé ou si vous cherchez une résistance répartie
        sur plusieurs points d&apos;ancrage, le détail des cas où je vous
        oriente vers une autre solution est dans mon{" "}
        <Link href="#pas-la-solution" className="text-steel underline">
          guide complet
        </Link>
        .
      </>,
    ],
  },
  {
    heading: "Finitions disponibles",
    Icon: <CheckIcon className="w-4 h-4" />,
    paragraphs: [
      "Argent, doré, inox, noir satiné ou champagne : la finition se choisit selon l'aspect de votre porte et de votre palier, sans impact sur le niveau de protection.",
    ],
  },
];

const faq = [
  {
    question: "Une poignée blindée est-elle compatible avec ma porte actuelle ?",
    answer:
      "Dans la grande majorité des cas, oui. Elle s'adapte à différents entraxes de fixation selon la porte : le diagnostic sur place confirme la configuration exacte compatible avec votre installation.",
  },
  {
    question: "Combien de temps dure la pose d'une poignée blindée ?",
    answer:
      "C'est une intervention courte, réalisée en une seule visite, sans modification structurelle de la porte. La durée précise dépend de la configuration constatée sur place [DURÉE EXACTE À CONFIRMER AVEC BENOÎT].",
  },
  {
    question: "Quelle différence avec un simple changement de cylindre ?",
    answer:
      "Le changement de cylindre renforce le mécanisme de verrouillage lui-même. La poignée blindée, elle, protège ce cylindre en le rendant invisible et inaccessible de l'extérieur. Les deux sont complémentaires et se combinent bien.",
  },
  {
    question: "Quelle garantie sur une poignée blindée ?",
    answer:
      "Garantie fabricant de 10 ans sur le matériel, gamme Héraclès Salomé, confirmée par deux distributeurs professionnels indépendants (A2Pro et AFDB).",
  },
  {
    question: "Quelles finitions sont disponibles ?",
    answer:
      "Argent, doré, inox, noir satiné et champagne comptent parmi les finitions couramment disponibles sur cette gamme.",
  },
  {
    question: "Une poignée blindée remet-elle en cause la certification A2P de mon cylindre ?",
    answer:
      "Non. La poignée blindée recouvre le cylindre sans intervenir sur son mécanisme : si votre cylindre est déjà certifié A2P, sa certification n'est pas affectée par la pose. Le point exact est confirmé lors du diagnostic sur votre modèle.",
  },
];

export default function PoigneeBlindeeNicePage() {
  return (
    <ServicePageTemplate
      h1="Poignée blindée à Nice"
      lead="Un renfort rapide et économique quand le point faible de votre porte est le cylindre exposé : il est recouvert, protégé, et n'est plus visible ni accessible de l'extérieur."
      sections={sections}
      faq={faq}
      breadcrumbLabel="Poignée blindée"
      path="/poignee-blindee-nice/"
      image={{
        src: "/images/pool/poignee-serrure-moderne-porte-creme-nice.webp",
        alt: "Poignée blindée finition argent protégeant le cylindre d'une porte à Nice",
      }}
      sectionsVariant="cards"
      sectionsHeading="Ce qu'il faut savoir sur la poignée blindée"
      headingScale="lg"
      extra={
        <>
          <PriceReminder
            priceLabel="349 € TTC"
            note="Pose et réglage inclus. Devis confirmé après diagnostic du cylindre en place."
            locale="fr"
          />
          <section className="mx-auto max-w-4xl px-4 py-10">
            <h2 className="font-heading text-xl font-bold text-navy mb-4 text-center">
              Marques de serrures que je pose
            </h2>
            <BrandsSection locale="fr" />
          </section>
        </>
      }
      processSteps={[
        {
          title: "Appel",
          text: "Vous me décrivez votre porte et le cylindre actuellement exposé, je vous confirme dès le téléphone si la poignée blindée est adaptée à votre situation.",
        },
        {
          title: "Rendez-vous",
          text: "Je me déplace pour évaluer l'état de votre porte et la configuration du cylindre en place, avec un devis annoncé avant toute intervention.",
        },
        {
          title: "Pose et réglage",
          text: "Installation de l'ensemble de sécurité sans modifier la structure de votre porte, réglage fin pour un fonctionnement fluide de la clé.",
        },
        {
          title: "Garantie",
          text: "Je vous remets une facture détaillée mentionnant la garantie fabricant de 10 ans, gamme Héraclès Salomé.",
        },
      ]}
      relatedArticle={{
        href: "/blog/que-faire-apres-cambriolage-nice/",
        label: "Que faire après un cambriolage : les bons réflexes",
      }}
      guide={
        <ServiceGuideSection readingMinutes={5} toc={guideToc} tocAccentColor="urgent" faq={guideFaq}>
          {guideContent}
        </ServiceGuideSection>
      }
      guideFaqForSchema={guideFaq}
      relatedServices={[
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/mise-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}
