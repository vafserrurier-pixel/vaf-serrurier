import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import PriceReminder from "@/components/PriceReminder";
import BrandsSection from "@/components/BrandsSection";
import ServiceGuideSection from "@/components/ServiceGuideSection";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import ArticleTable from "@/components/ArticleTable";
import { ShieldIcon, WrenchIcon, DoorIcon, CheckIcon, KeyIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/metadata";

const guideToc = [
  { id: "qualite", label: "Reconnaître un carénage de qualité" },
  { id: "5-points", label: "Le vrai rôle des 5 points d'ancrage" },
  { id: "a2p", label: "Serrure carénée et certification A2P : ce qu'il faut vérifier" },
  { id: "pas-la-solution", label: "Quand ce n'est pas la bonne solution" },
  { id: "entretien", label: "Entretien : ce qui prolonge la résistance" },
  { id: "faq", label: "Questions complémentaires" },
];

const guideFaq = [
  {
    question: "Toutes les serrures carénées 5 points sont-elles équivalentes ?",
    answer:
      "Non. Le nombre de points annoncé ne dit rien de l'épaisseur du carénage, de la qualité de l'acier ni de la précision du réglage des points d'ancrage, qui font la vraie différence sur la résistance réelle.",
  },
  {
    question: "Une serrure carénée non certifiée A2P protège-t-elle quand même ?",
    answer:
      "Oui, le carénage seul apporte déjà un vrai gain par rapport à une serrure en applique classique exposée. La certification A2P est surtout déterminante si vous voulez faire valoir ce renfort auprès de votre assurance.",
  },
  {
    question: "Puis-je changer uniquement le cylindre d'une serrure carénée A2P sans perdre la certification ?",
    answer:
      "Non, pas avec n'importe quel cylindre. Pour conserver la certification A2P, le cylindre et les accessoires posés doivent eux-mêmes être certifiés A2P et compatibles avec le boîtier installé.",
  },
  {
    question: "Faut-il entretenir une serrure carénée particulièrement ?",
    answer:
      "Un contrôle du jeu de fermeture et un léger lubrifiant sec sur les points d'ancrage, une à deux fois par an, suffisent à préserver le réglage dans la durée.",
  },
  {
    question: "Si je fais réparer ma serrure carénée A2P ailleurs, est-ce que je risque quelque chose ?",
    answer:
      "Oui, potentiellement : la certification A2P couvre l'ensemble carénage + cylindre + accessoires tel que testé en laboratoire. Un cylindre non compatible posé après coup, même par un autre professionnel, peut faire perdre cette certification d'ensemble sans que le carénage lui-même soit endommagé.",
  },
];

const guideContent = (
  <>
    <p className="text-slate leading-relaxed">
      Ce guide détaille les critères techniques qui distinguent une bonne
      installation d&apos;une autre, au-delà du simple nombre de points
      annoncé.
    </p>

    <div className="bg-steel/10 border border-navy/10 rounded-2xl p-6">
      <p className="font-heading font-bold text-navy mb-4">Le forfait, en un coup d&apos;œil</p>
      <ArticleTable
        headers={["Prestation", "Prix"]}
        rows={[
          ["Serrure carénée Héraclès Sésame, fournie posée", "1 249 € TTC"],
          ["Combo blindage pivot + serrure carénée, fourni posé", "à partir de 1 890 € TTC"],
        ]}
      />
      <p className="text-slate leading-relaxed mt-4">
        Un forfait unique couvre l&apos;ensemble de la gamme Héraclès Sésame
        (notamment Y8C, HXR), pour simplifier votre choix : le modèle exact
        posé est confirmé après diagnostic sur place, pas avant.
      </p>
      <p className="text-slate leading-relaxed mt-3">
        Attention à ne pas confondre ce combo avec un{" "}
        <Link href="/installation-porte-blindee-nice/" className="text-steel underline">
          blindage complet
        </Link>{" "}
        : le blindage pivot ne renforce que le côté charnières de la porte,
        en complément de la carénée qui protège déjà le côté serrure. Un
        blindage complet (bloc-porte blindé avec serrure 5 points en
        applique) reprend l&apos;ensemble de la porte et démarre à 2 689 €
        TTC — la solution cohérente si le bâti a besoin d&apos;être repris
        dans sa globalité, pas seulement renforcé point par point.
      </p>
      <p className="text-slate leading-relaxed mt-3">
        Garantie fabricant Héraclès de 10 ans sur le mécanisme. Comptez
        généralement 3 à 5 heures de pose : plutôt vers 5 heures sur un bâti
        bois ancien qui demande des ajustements fins, plutôt vers 3 heures
        sur un bâti béton ou acier plus régulier.
      </p>
      <p className="text-slate leading-relaxed mt-3">
        À Nice, cette différence de bâti se retrouve concrètement d&apos;un
        quartier à l&apos;autre : les portes palières anciennes en bois du
        Vieux-Nice ou de Cimiez demandent souvent un réglage plus minutieux
        des points d&apos;ancrage, tandis que les bâtis plus récents, par
        exemple à Fabron, offrent généralement un support plus régulier pour
        la pose.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={1} id="qualite" level="h3" size="lg" numberStyle="plain">
        Reconnaître un carénage de qualité
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Trois éléments comptent bien plus que la marque affichée : l&apos;épaisseur
        réelle de la tôle de carénage, la qualité de l&apos;acier utilisé pour
        les points d&apos;ancrage, et surtout la précision du réglage lors de
        la pose. Un boîtier haut de gamme mal réglé cède parfois plus vite
        qu&apos;un modèle plus simple correctement ajusté au dormant.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={2} id="5-points" level="h3" size="lg" numberStyle="plain">
        Le vrai rôle des 5 points d&apos;ancrage
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Les 5 points ne s&apos;ajoutent pas au hasard : un pêne central assure
        la fermeture principale, des points hauts et bas limitent l&apos;arrachement
        aux extrémités de la porte, et des points intermédiaires répartissent
        l&apos;effort sur toute la hauteur du dormant. C&apos;est cette
        répartition, pas seulement le nombre affiché, qui empêche la porte de
        céder par déformation plutôt que par la serrure elle-même.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={3} id="a2p" level="h3" size="lg" numberStyle="plain">
        Serrure carénée et certification A2P : ce qu&apos;il faut vérifier
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Certains modèles carénés, notamment chez Héraclès, existent en
        version certifiée{" "}
        <Link href="/blog/certification-a2p-serrure-nice/" className="text-steel underline">
          A2P
        </Link>
        . Un point souvent ignoré : pour conserver cette certification,
        l&apos;ensemble du cylindre et des accessoires posés doit lui-même
        être certifié A2P et compatible avec le boîtier. Un cylindre
        générique posé sur un boîtier certifié fait perdre la certification
        d&apos;ensemble, même si le carénage seul reste physiquement solide.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={4} id="pas-la-solution" level="h3" size="lg" numberStyle="plain">
        Quand ce n&apos;est pas la bonne solution
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        La serrure carénée est un bon renfort intermédiaire, pas une réponse
        universelle. Quatre cas où je vous oriente ailleurs :
      </p>
      <ul className="list-disc pl-5 flex flex-col gap-2.5 text-slate leading-relaxed mt-3">
        <li>
          <strong className="text-navy">Porte ou bâti trop fragile pour un ancrage fiable</strong> —
          les points d&apos;ancrage d&apos;une carénée ont besoin d&apos;un support sain pour tenir
          dans la durée. Si le dormant ou le cadre sont eux-mêmes affaiblis, je vous oriente vers un{" "}
          <Link href="/installation-porte-blindee-nice/" className="text-steel underline">
            bloc-porte blindé
          </Link>
          , qui reprend l&apos;ensemble plutôt que de renforcer une base fragile.
        </li>
        <li>
          <strong className="text-navy">Budget serré et seul le cylindre est en cause</strong> — si
          le mécanisme et le bâti sont sains et que le point faible est uniquement le cylindre exposé,
          une{" "}
          <Link href="/poignee-blindee-nice/" className="text-steel underline">
            poignée blindée
          </Link>{" "}
          coûte moins cher pour un effet dissuasif réel. Je ne combine jamais poignée blindée et
          serrure carénée sur le même point : la carénée protège déjà le cylindre par construction,
          ajouter une poignée blindée par-dessus n&apos;apporte rien de plus sur ce même point.
        </li>
        <li>
          <strong className="text-navy">Locataire sans accord écrit du propriétaire</strong> — un
          renfort structurel comme la carénée modifie durablement l&apos;installation. Sans accord,
          mieux vaut une solution non définitive comme un{" "}
          <Link href="/changement-serrure-nice/" className="text-steel underline">
            changement de cylindre
          </Link>
          , plus facile à justifier et à faire accepter.
        </li>
        <li>
          <strong className="text-navy">Besoin de résistance structurelle globale</strong> — face à
          des attaques au levier ou un bâti déjà fragilisé, la réponse cohérente reste un blindage
          complet ou un bloc-porte, pas un renfort ciblé sur la seule serrure.
        </li>
      </ul>
    </div>

    <div>
      <ArticleSectionHeading number={5} id="entretien" level="h3" size="lg" numberStyle="plain">
        Entretien : ce qui prolonge la résistance
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Un contrôle visuel du jeu de fermeture et un lubrifiant sec sur les
        points d&apos;ancrage, une à deux fois par an, suffisent à préserver
        le réglage. Si la clé commence à forcer ou qu&apos;un point ne
        s&apos;engage plus correctement, mieux vaut intervenir tôt : voir ma
        page{" "}
        <Link href="/depannage-serrurier-nice/" className="text-steel underline">
          dépannage serrurier
        </Link>
        .
      </p>
    </div>
  </>
);

export const metadata: Metadata = buildMetadata({
  path: "/serrure-carenee-nice/",
  title: "Serrure carénée 5 points à Nice – En applique | VAF",
  description: "Installation d'une serrure carénée 5 points en applique à Nice : renfort intermédiaire entre cylindre standard et blindage complet. Devis annoncé, 24h/24.",
});

const sections = [
  {
    heading: "Qu'est-ce qu'une serrure carénée",
    Icon: <ShieldIcon className="w-4 h-4" />,
    paragraphs: [
      "Une serrure carénée est une serrure en applique, posée sur la face intérieure de la porte plutôt qu'encastrée dedans. Son boîtier est protégé par un carénage métallique qui empêche un cambrioleur de s'attaquer directement au mécanisme à la pince ou à la perceuse. C'est justement cette exposition du boîtier qui fait la faiblesse classique d'une serrure en applique non protégée.",
      "Le modèle à 5 points répartit la résistance sur plusieurs points d'ancrage dans le dormant. Cela limite le risque de faire céder la porte par arrachement plutôt que par la serrure elle-même, un mode d'effraction fréquent sur les portes équipées d'une simple serrure à un point.",
    ],
  },
  {
    heading: "Un renfort intermédiaire, pas un blindage complet",
    Icon: <WrenchIcon className="w-4 h-4" />,
    paragraphs: [
      "C'est une solution efficace quand votre porte reste saine mais que la serrure en place n'offre plus une résistance suffisante, sans passer par un blindage complet ou un bloc-porte neuf. Le coût reste nettement inférieur à une installation de porte blindée, pour un vrai gain de résistance sur l'accès.",
      <>
        Si le bâti ou la porte elle-même sont fatigués, en revanche, une
        serrure carénée seule ne suffit pas — le détail des cas où je vous
        oriente vers une autre solution est dans mon{" "}
        <Link href="#pas-la-solution" className="text-steel underline">
          guide complet
        </Link>
        .
      </>,
    ],
  },
  {
    heading: "Compatible avec la plupart des portes existantes",
    Icon: <DoorIcon className="w-4 h-4" />,
    paragraphs: [
      <>
            La pose en applique ne nécessite pas de modifier la structure de la porte, contrairement à une serrure encastrée. Elle convient aussi bien à une porte en bois qu&apos;à une porte métallique, en résidence principale comme en{" "}
            <Link href="/agences-syndics-nice/" className="text-steel underline">
              copropriété
            </Link>{" "}
            où le règlement impose parfois de préserver l&apos;aspect extérieur du palier.
          </>,
    ],
  },
  {
    heading: "Les marques que je pose à Nice",
    Icon: <CheckIcon className="w-4 h-4" />,
    paragraphs: [
      "Je travaille avec des marques reconnues pour leurs serrures carénées, en particulier Héraclès, référence française sur ce type de mécanisme et courante sur les portes d'entrée à Nice. Vachette et Bricard proposent également des modèles fiables selon la configuration de votre porte.",
      "Le choix de la marque compte moins que le diagnostic préalable : l'épaisseur du carénage, la qualité de l'acier et la précision du réglage des points d'ancrage font la vraie différence sur la résistance finale, bien plus qu'une référence commerciale à elle seule.",
    ],
  },
  {
    heading: "Cylindre standard, serrure carénée ou blindage : comment choisir",
    Icon: <KeyIcon className="w-4 h-4" />,
    paragraphs: [
      "Un simple remplacement de cylindre suffit quand la porte et son bâti sont sains et que seul le mécanisme de verrouillage montre des signes de faiblesse. La serrure carénée intervient un cran au-dessus, quand vous voulez renforcer significativement la résistance à l'effraction sans reprendre toute la porte. Le blindage complet ou le bloc-porte neuf restent la solution quand la porte elle-même, ou le bâti autour, ne tiennent plus la route.",
      "Je vous conseille selon l'état réel constaté sur place, pas selon la solution la plus chère. Une bonne partie de mon travail consiste justement à éviter un suréquipement inutile sur une porte qui n'en a pas besoin.",
    ],
  },
];

const faq = [
  {
    question: "Quelle différence entre une serrure carénée et une serrure en applique classique ?",
    answer:
      "Le carénage protège le boîtier du mécanisme, exposé et vulnérable sur une serrure en applique classique. C'est ce carénage qui apporte l'essentiel du gain de résistance.",
  },
  {
    question: "Une serrure carénée remplace-t-elle un blindage de porte ?",
    answer:
      "Non, c'est un renfort intermédiaire. Si votre porte ou son bâti sont fragiles, un blindage complet reste plus adapté. Je vous conseille selon l'état réel de votre porte, pas systématiquement la solution la plus chère.",
  },
  {
    question: "Combien coûte une serrure 5 points en applique carénée à Nice ?",
    answer:
      "1 249 € TTC en forfait unique, fournie posée, pour la gamme Héraclès Sésame. Le combo blindage pivot + serrure carénée démarre à 1 890 € TTC. Le modèle exact est confirmé après diagnostic sur place.",
  },
  {
    question: "Peut-on poser une serrure carénée en copropriété ?",
    answer:
      "Oui, dans la grande majorité des cas, puisqu'elle se pose côté intérieur et ne modifie pas l'aspect extérieur de la porte vu du couloir.",
  },
  {
    question: "Combien de temps dure la pose ?",
    answer:
      "Généralement 3 à 5 heures : plutôt vers 5 heures sur un bâti bois ancien qui demande des ajustements fins, plutôt vers 3 heures sur un bâti béton ou acier plus régulier.",
  },
  {
    question: "Quelles marques de serrures carénées installez-vous ?",
    answer:
      "Principalement Héraclès, référence sur ce type de mécanisme, ainsi que Vachette et Bricard selon la configuration de votre porte. Je vous oriente vers le modèle adapté après diagnostic, pas vers une marque par défaut.",
  },
];

export default function SerrureCareneeNicePage() {
  return (
    <ServicePageTemplate
      h1="Serrure carénée 5 points en applique à Nice"
      lead="Un renfort intermédiaire entre la serrure standard et le blindage complet : boîtier protégé, 5 points d'ancrage, sans modifier la structure de votre porte."
      sections={sections}
      faq={faq}
      breadcrumbLabel="Serrure carénée 5 points"
      path="/serrure-carenee-nice/"
      image={{
        src: "/images/serrurier-nice-porte-blindee-multipoints.webp",
        alt: "Serrure carénée 5 points en applique posée sur une porte à Nice",
      }}
      sectionsVariant="cards"
      sectionsHeading="Ce qu'il faut savoir sur la serrure carénée"
      headingScale="lg"
      extra={
        <>
          <PriceReminder
            priceLabel="1 249 € TTC"
            note="Forfait unique, gamme Héraclès Sésame, fournie posée. Combo blindage pivot + carénée : à partir de 1 890 € TTC. Devis confirmé avant intervention."
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
          text: "Vous me décrivez votre porte et votre serrure actuelle, je vous indique si une serrure carénée est adaptée à votre situation.",
        },
        {
          title: "Rendez-vous",
          text: "Je fixe un rendez-vous pour évaluer votre porte sur place, à l'heure qui vous convient.",
        },
        {
          title: "Évaluation de la porte",
          text: "J'examine l'état du bâti et de la porte pour confirmer qu'un renfort suffit, plutôt qu'un blindage complet.",
        },
        {
          title: "Règlement",
          text: "Le devis confirmé sur place est celui que vous payez, facture détaillée à l'appui.",
        },
      ]}
      relatedArticle={{
        href: "/blog/serrure-multipoints-3-5-7-nice/",
        label: "Serrure 3, 5 ou 7 points : laquelle choisir ?",
      }}
      guide={
        <ServiceGuideSection readingMinutes={6} toc={guideToc} tocAccentColor="urgent" faq={guideFaq}>
          {guideContent}
        </ServiceGuideSection>
      }
      guideFaqForSchema={guideFaq}
      relatedServices={[
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/poignee-blindee-nice/", label: "Poignée blindée" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/mise-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}
