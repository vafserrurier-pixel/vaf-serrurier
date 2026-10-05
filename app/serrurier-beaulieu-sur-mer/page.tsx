import type { Metadata } from "next";
import Link from "next/link";
import CommunePageTemplate from "@/components/CommunePageTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-beaulieu-sur-mer/",
  title: "Serrurier Beaulieu-sur-Mer – Dépannage 24h/24 | VAF",
  description:
    "Serrurier à Beaulieu-sur-Mer : ouverture de porte, changement de serrure, dépannage 24h/24, 7j/7. Arrivée en 20 à 30 minutes, prix annoncé avant intervention.",
});

const intro = [
  "J'interviens à Beaulieu-sur-Mer, la commune de la Côte d'Azur située entre Nice et Monaco, pour tout ce qui touche à la serrurerie : porte claquée, clé perdue ou cassée, cylindre à remplacer, serrure à renforcer. Que vous soyez près du port de plaisance, de la gare ou plus loin dans la commune, je me déplace chez vous.",
  "Je pars de Nice, du 2 rue Antoine Gautier, et j'arrive en 20 à 30 minutes selon la circulation. Au téléphone, je vous annonce le prix avant de me déplacer, puis je le confirme sur place avant de commencer. Mes tarifs sont les mêmes qu'à Nice, sans supplément pour Beaulieu-sur-Mer.",
];

const linkClass = "text-steel underline";

const blocks = [
  {
    heading: "Entre le port de plaisance, la gare et la Villa Kérylos",
    paragraphs: [
      "Beaulieu-sur-Mer s'étend sur le littoral, entre Nice et Monaco, et touche Villefranche-sur-Mer et Saint-Jean-Cap-Ferrat. On y repère facilement le port de plaisance, la gare desservie par les trains TER et la Villa Kérylos, construite entre 1902 et 1908 par Théodore Reinach dans le style d'une villa grecque antique, au bord de la baie des Fourmis.",
      "Ces repères me servent d'abord à une chose : situer votre adresse quand vous m'appelez. Dites-moi dans quelle rue vous êtes, je vous donne un délai réaliste, et je viens avec le matériel adapté à votre porte.",
      <>
        Beaulieu-sur-Mer se trouve à l&apos;est de Nice. Pour les quartiers de l&apos;est de la ville, voyez ma page
        {" "}
        <Link href="/serrurier-nice-est/" className={linkClass}>
          serrurier Nice Est
        </Link>
        .
      </>,
    ],
  },
  {
    heading: "Location saisonnière : une serrure fiable pour accueillir vos voyageurs",
    paragraphs: [
      "Si vous louez un appartement à la semaine ou au week-end, la serrure est la première chose que vos voyageurs touchent en arrivant. Un cylindre qui force, une clé qui ne tourne plus ou un double perdu transforment vite une arrivée en urgence, parfois en soirée ou pendant un week-end.",
      <>
        Je peux remplacer le cylindre sur rendez-vous, avec des clés neuves remises sur place, ou
        intervenir en dépannage quand un voyageur reste bloqué dehors. Dans les deux cas, le prix
        est annoncé par téléphone, puis confirmé sur place avant de commencer. Le détail de cette
        prestation est sur ma page{" "}
        <Link href="/changement-serrure-nice/" className={linkClass}>
          changement de serrure
        </Link>
        .
      </>,
      <>
        Entre propriétaire et locataire, la question de qui paie le remplacement se pose souvent :
        j&apos;y réponds dans mon article{" "}
        <Link href="/blog/qui-paie-changement-serrure-location-nice/" className={linkClass}>
          qui paie le changement de serrure en location
        </Link>
        .
      </>,
    ],
  },
  {
    heading: "Comment j'ouvre une porte à Beaulieu-sur-Mer",
    paragraphs: [
      "Une porte claquée est fermée par le simple mouvement du battant, sans tour de clé. Je l'ouvre avec la méthode radio, aussi appelée feuille Mika : une fine plaque rigide, glissée entre le cadre et le pêne, libère le mécanisme sans l'abîmer. 99 % des portes claquées sont ouvertes sans dégât.",
      "Quand la porte est verrouillée à clé ou que la clé est perdue, le diagnostic décide de la méthode. Si une clé s'est cassée dans le cylindre, je commence par l'extraire. Le perçage reste le dernier recours : je ne perce que si aucune autre méthode n'est possible.",
      <>
        Chaque situation, avec ses prix, est détaillée sur ma page{" "}
        <Link href="/ouverture-de-porte-nice/" className={linkClass}>
          ouverture de porte
        </Link>
        .
      </>,
    ],
  },
  {
    heading: "Serrures certifiées A2P et marques que je pose",
    paragraphs: [
      "Pour remplacer ou renforcer une serrure, je pose des cylindres et des serrures certifiés A2P 1, 2 ou 3 étoiles selon le besoin. Le niveau se choisit selon la porte et ce que vous voulez protéger : plus il y a d'étoiles, plus la résistance à l'effraction est élevée.",
      "Côté marques, je travaille avec dix références. Fichet est la référence française de la haute sécurité, Picard un fabricant français historique, et Vak une marque de cylindres haute sécurité développée par Picard. Vachette, très répandue sur les portes d'immeuble à Nice, et Bricard, connue pour ses serrures multipoints, sont elles aussi françaises. Heraclès propose des cylindres et des serrures robustes, courants sur les portes d'entrée. Du côté italien, Cisa fabrique des serrures mécaniques et électroniques, Mottura des cylindres européens au bon rapport qualité-prix, et Iseo des cylindres haute sécurité avec des solutions de gestion d'accès. Kaba, d'origine suisse, est souvent choisie en copropriété pour sa gestion fine des clés autorisées.",
      <>
        Selon la gamme, la clé est fournie avec une carte de reproduction ou de propriété, qui
        limite la copie non autorisée. Le détail de chaque marque est sur ma page{" "}
        <Link href="/changement-serrure-nice/#marques" className={linkClass}>
          changement de serrure
        </Link>
        .
      </>,
    ],
  },
  {
    heading: "Les mêmes tarifs qu'à Nice, sans supplément pour Beaulieu-sur-Mer",
    paragraphs: [
      "Mes tarifs ne changent pas selon la commune : ce que vous payez à Beaulieu-sur-Mer est ce que vous paieriez à Nice, déplacement inclus. Une ouverture de porte claquée, ou de porte verrouillée avec un cylindre européen, est à 149 € TTC. Un changement de cylindre standard démarre à 249 € TTC, déplacement et main-d'œuvre compris. Une serrure de type Fichet, un cylindre haute sécurité ou une serrure multipoints se chiffrent sur devis.",
      <>
        Après 19h, le week-end et les jours fériés, le tarif de nuit est de 189 € TTC pour une porte
        claquée et de 209 € TTC pour une porte verrouillée, annoncé avant mon déplacement. La grille
        complète est plus haut sur cette page, et sur ma page{" "}
        <Link href="/tarifs-serrurier-nice/" className={linkClass}>
          tarifs
        </Link>
        .
      </>,
    ],
  },
  {
    heading: "Après une tentative d'effraction",
    paragraphs: [
      <>
        Si une porte a été forcée, je sécurise d&apos;abord l&apos;accès, 24h/24, puis je choisis avec vous la
        solution durable une fois le diagnostic fait. La facture détaillée est prévue pour votre
        assurance. Tout est expliqué sur ma page{" "}
        <Link href="/mise-en-securite-apres-effraction-nice/" className={linkClass}>
          mise en sécurité après une effraction
        </Link>
        .
      </>,
    ],
  },
];

const safetyParagraph =
  "Je n'ai pas de chiffre de cambriolages propre à Beaulieu-sur-Mer que je puisse vous citer avec certitude, et je préfère ne pas en inventer. À titre de repère départemental, le taux de cambriolages dans les Alpes-Maritimes était de 0,43 % des logements en 2025 selon le ministère de l'Intérieur : ce n'est pas une donnée communale. Quel que soit le lieu, une serrure en bon état et un cylindre certifié A2P restent le moyen le plus direct de limiter le risque.";

const faq = [
  {
    question: "Intervenez-vous la nuit ou le week-end à Beaulieu-sur-Mer ?",
    answer:
      "Oui, 24h/24 et 7j/7, jours fériés compris. Après 19h, le week-end et les jours fériés, le tarif de nuit est de 189 € TTC pour une porte claquée et de 209 € TTC pour une porte verrouillée avec un cylindre européen, annoncé avant que je me déplace.",
  },
  {
    question: "Combien de temps pour venir à Beaulieu-sur-Mer ?",
    answer:
      "20 à 30 minutes depuis le 2 rue Antoine Gautier, à Nice, selon la circulation. Je vous donne une estimation au téléphone.",
  },
  {
    question: "Le devis est-il gratuit pour un dépannage à Beaulieu-sur-Mer ?",
    answer:
      "Oui. Je vous annonce un prix par téléphone avant de me déplacer, et je le confirme sur place avant de commencer. Les tarifs sont les mêmes qu'à Nice, sans supplément pour Beaulieu-sur-Mer.",
  },
  {
    question: "Je loue mon appartement à Beaulieu-sur-Mer à des voyageurs : pouvez-vous changer le cylindre ?",
    answer:
      "Oui, sur rendez-vous ou en dépannage. Je pose un cylindre adapté à votre porte, je remets des clés neuves sur place et je confirme le prix avant de commencer. Le changement de cylindre standard démarre à 249 € TTC, déplacement et main-d'œuvre compris.",
  },
  {
    question: "Ma porte s'est claquée à Beaulieu-sur-Mer : faut-il forcer la serrure ?",
    answer:
      "Non. Je l'ouvre avec la méthode radio, dite de la feuille Mika, sans abîmer le mécanisme : 99 % des portes claquées sont ouvertes sans dégât. Le prix est de 149 € TTC en journée.",
  },
  {
    question: "Mon assurance peut-elle me rembourser l'intervention ?",
    answer:
      "Cela dépend de votre contrat, je ne peux donc rien promettre. Je vous remets une facture détaillée à présenter à votre assureur, mais je ne m'engage sur aucun montant de remboursement.",
  },
];

const processSteps = [
  {
    title: "Appel",
    text: "Vous m'appelez depuis Beaulieu-sur-Mer et me décrivez la situation : porte claquée, clé perdue, cylindre qui force. Je cerne le problème dès le téléphone et je vous annonce un prix.",
  },
  {
    title: "Délai d'arrivée",
    text: "Je pars de Nice et j'arrive à Beaulieu-sur-Mer en 20 à 30 minutes selon la circulation. Si quelque chose change en route, je vous préviens.",
  },
  {
    title: "Diagnostic sur place",
    text: "Sur place, j'examine la porte, la serrure et le cadre avant de choisir la méthode. Je ne force rien tant que je ne suis pas sûr de mon geste.",
  },
  {
    title: "Règlement",
    text: "Le prix confirmé sur place est celui que vous payez : carte bancaire, espèces ou virement, avec une facture détaillée envoyée par e-mail.",
  },
];

const testimonial = {
  text: "Problème de serrure dans un appartement loué en saisonnier. Je l'ai eu en direct au téléphone ce samedi, il m'a fait un devis très correct et confirmé le rdv pour lundi matin. Ponctuel, sérieux, professionnel et très agréable. […]",
  attribution: "Avis Google, remplacement de cylindre à Beaulieu-sur-Mer, octobre 2026",
};

export default function SerrurierBeaulieuSurMerPage() {
  return (
    <CommunePageTemplate
      commune="Beaulieu-sur-Mer"
      intro={intro}
      blocks={blocks}
      travelEstimate="20-30 min"
      safetyParagraph={safetyParagraph}
      faq={faq}
      path="/serrurier-beaulieu-sur-mer/"
      testimonial={testimonial}
      processSteps={processSteps}
      mapQuery="Beaulieu-sur-Mer, 06310"
      mapTitle="Zone d'intervention à Beaulieu-sur-Mer"
      photoAlt="Benoît, artisan serrurier basé à Nice, intervient à Beaulieu-sur-Mer"
    />
  );
}
