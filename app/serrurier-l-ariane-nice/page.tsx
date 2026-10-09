import type { Metadata } from "next";
import Link from "next/link";
import QuartierPageTemplate from "@/components/QuartierPageTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-l-ariane-nice/",
  title: "Serrurier l'Ariane Nice – Dépannage 24h/24",
  description: "Serrurier à l'Ariane, Nice : dépannage sur portes palières de grands ensembles, sécurisation après effraction. Devis annoncé, 24h/24.",
});

const intro = [
  "Clé cassée, porte claquée à l'Ariane : j'interviens 24h/24 dans ce grand quartier d'habitat collectif, où les portes palières et les cylindres de hall subissent un usage intensif. Après une perte de clés ou une tentative d'effraction, je pose généralement un cylindre Vak ou Cisa plus résistant, avec possibilité de blindage de la porte si le cadre le permet.",
  "L'Ariane doit son nom à la plaine alluviale du Paillon : « arena » signifie le sable, en latin comme en niçois. Longtemps rural autour d'un petit hameau, le quartier connaît sa métamorphose la plus spectaculaire durant les Trente Glorieuses, avec la construction de grands ensembles dans les années 1950-1970. Il compte aujourd'hui près de 12 000 habitants. Depuis 2008, il bénéficie d'un programme de renouvellement urbain de 300 millions d'euros, avec de nouveaux immeubles aux normes de sécurité récentes aux côtés des ensembles plus anciens, autour de la place des Mosaïques, de la rue Anatole-de-Monzie, du parc des Tripodes et du jardin Saramito.",
];

const blocks = [
  {
    heading: "Un grand ensemble en pleine rénovation urbaine",
    paragraphs: [
      "Le programme de renouvellement urbain engagé depuis 2008 transforme progressivement le bâti de l'Ariane, avec de nouveaux immeubles aux normes de sécurité récentes aux côtés des grands ensembles plus anciens des années 1960-1970. Je m'adapte à ces deux réalités très différentes.",
      "La transformation se voit aussi dans les espaces communs : en 2017, un nouveau jardin d'enfants de 850 m² a été créé à l'angle des rues Saramito et Georges-Picard, dans le cadre de la rénovation du secteur Saramito. Ce type d'aménagement accompagne l'arrivée de nouveaux immeubles, dont les accès demandent parfois un diagnostic différent de celui des tours plus anciennes.",
    ],
  },
  {
    heading: "Un habitat collectif qui demande un suivi régulier",
    paragraphs: [
      "Dans les grands ensembles de l'Ariane, les portes palières et les cylindres de hall d'entrée sont soumis à un usage intensif. Je diagnostique ces éléments avant de proposer une réparation ou un remplacement adapté.",
    ],
  },
  {
    heading: "Sécuriser un appartement à l'Ariane",
    paragraphs: [
      "Après une perte de clés ou une tentative d'effraction, je peux intervenir sur le remplacement de la serrure, l'installation d'un cylindre plus résistant, ou le blindage de la porte si le cadre le permet.",
    ],
  },
  {
    heading: "Interventions en copropriété",
    paragraphs: [
      <>
            Pour les halls d&apos;immeuble et parties communes, j&apos;interviens sur demande d&apos;un <Link href="/agences-syndics-nice/" className="text-steel underline">syndic</Link> ou d&apos;un résident mandaté : réglage de porte, remplacement de gâche électrique, digicode défectueux.
          </>,
    ],
  },
  {
    heading: "Portes de hall et gâches électriques à l'Ariane",
    paragraphs: [
      "L'Ariane, grand ensemble de logements dans la vallée à l'est de Nice, se compose principalement de tours et de barres d'immeubles collectifs. Sur ce type de bâti, les portes de hall et les gâches électriques subissent un usage intensif. J'interviens régulièrement pour ce type de panne, avec un diagnostic rapide pour limiter le temps d'immobilisation de l'accès collectif.",
    ],
  },
  {
    heading: "Quand la porte frotte ou que le pêne n'entre plus dans la gâche",
    paragraphs: [
      "Une porte palière qui ferme de plus en plus difficilement n'est pas toujours un problème de serrure. Avec le temps, les charnières prennent du jeu, la porte s'affaisse de quelques millimètres et le pêne n'est plus en face de la gâche : on force pour fermer, et on finit par abîmer le mécanisme. Remplacer la serrure ne règle alors rien, c'est la porte qui doit être réglée. Je commence toujours par observer l'alignement : un réglage des charnières ou un léger décalage de la gâche suffit souvent à retrouver une fermeture douce. Si le problème vient bien du mécanisme, je le dis aussi. L'intérêt est d'éviter de payer une serrure neuve qui forcerait dès la première semaine.",
    ],
  },
  {
    heading: "Des logements plutôt grands : plusieurs clés, plusieurs occupants",
    paragraphs: [
      "Dans le secteur de l'Ariane (quatre secteurs statistiques « Ariane »), 37 % des résidences principales ont quatre pièces ou plus, contre 23 % à Nice, et 68 % sont des logements sociaux loués vides. Dans des logements familiaux, la porte est utilisée par plusieurs personnes aux horaires différents, et les clés se multiplient : enfants, conjoint, proches. Quand une clé disparaît, la question est de savoir qui l'avait et où elle a pu être perdue. Si c'est dehors, avec l'adresse, mieux vaut changer le cylindre. Si c'est à la maison, on peut souvent attendre. Je vous aide à trancher. Source : INSEE, recensement de la population 2021, secteurs « Ariane-Les Chênes » et « Ariane-Monzie » et « Ariane-Ripert » et « Ariane-Saramito ».",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous sur la porte d'entrée d'un immeuble à l'Ariane ?",
    answer:
      "Oui, j'interviens aussi bien sur les portes d'appartement que sur les portes de hall, digicodes et gâches électriques des parties communes.",
  },
  {
    question: "Intervenez-vous sur les nouveaux programmes du renouvellement urbain de l'Ariane ?",
    answer:
      "Oui, avec l'arrivée de nouveaux logements, j'interviens de plus en plus sur du matériel récent : personnalisation de cylindre, ajustements après emménagement, montée en sécurité si besoin.",
  },
  {
    question: "Intervenez-vous après une effraction à l'Ariane ?",
    answer:
      "Oui, je sécurise rapidement la porte concernée puis propose une solution durable une fois le diagnostic effectué.",
  },
];

export default function SerrurierArianeNicePage() {
  return (
    <QuartierPageTemplate
      quartier="l'Ariane"
      crimeIntro="L'Ariane, grand ensemble de logements dans la vallée est, reste concerné par cette réalité comme le reste de la ville."
      crimeClosing="Sur ce type d'habitat collectif dense, sécuriser les portes de hall reste un enjeu partagé par l'ensemble des résidents."
      brandsIntro="Entre les tours des années 1960-1970 et les constructions récentes du renouvellement urbain, le choix du bon cylindre dépend surtout de l'âge réel de la porte."
      sector="est"
      intro={intro}
      blocks={blocks}
      travelEstimate="15 à 25 minutes selon la circulation"
      faq={faq}
      path="/serrurier-l-ariane-nice/"
    />
  );
}
