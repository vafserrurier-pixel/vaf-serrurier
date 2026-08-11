import type { Metadata } from "next";
import SectorPageTemplate from "@/components/SectorPageTemplate";
import { zones } from "@/lib/business";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/serrurier-nice-est/" },
  title: "Serrurier Nice Est – Tous quartiers | VAF",
  description:
    "Serrurier dans l'est de Nice : Riquier, le Port, Mont Boron, l'Ariane et plus. Ouverture de porte, dépannage, devis annoncé avant intervention.",
};

const intro = [
  "Dépannage serrurier dans l'est de Nice ? J'interviens 24h/24 sur ce secteur très contrasté, du port historique aux villas des hauteurs, avec généralement un cylindre Picard ou Cisa adapté à chaque configuration. L'est s'organise autour du port Lympia, construit à partir de 1749 pour développer le commerce méditerranéen. Ses anciens entrepôts abritent aujourd'hui restaurants et galeries d'art. Juste au nord, Riquier fut au XIXe siècle le cœur industriel de Nice. Saint-Roch, de son côté, conserve la mémoire de la caserne Auvare et de ses « Diables Bleus ».",
  "Sur les hauteurs, le fort du Mont-Alban, édifié entre 1557 et 1560, domine un secteur résidentiel huppé qui s'étend jusqu'au Mont Boron et ses villas avec vue mer. Plus au nord, l'Ariane a connu sa métamorphose la plus spectaculaire durant les Trente Glorieuses, avec la construction de grands ensembles aujourd'hui engagés dans un programme de renouvellement urbain de grande ampleur.",
  "C'est un secteur très contrasté — entre bâti historique du port, quartiers populaires denses et hauteurs résidentielles de standing. J'y interviens avec la même méthode qu'ailleurs à Nice : diagnostic par téléphone, prix annoncé avant intervention, et déplacement organisé selon l'urgence de la situation.",
];

const blocks = [
  {
    heading: "Réparation de serrures anciennes du port aux hauteurs fortifiées",
    paragraphs: [
      "Entre les anciens entrepôts du port Lympia reconvertis en commerces, les immeubles industriels du XIXe siècle de Riquier et les villas du Mont Boron proches du fort du Mont-Alban, l'est de Nice présente une grande diversité de bâti. Je diagnostique chaque situation en tenant compte de l'époque et du style de la porte concernée.",
    ],
  },
  {
    heading: "Des grands ensembles en pleine transformation",
    paragraphs: [
      "L'Ariane et le Brancolar voisin, construits durant les Trente Glorieuses, connaissent aujourd'hui d'importants programmes de renouvellement urbain. J'y interviens aussi bien sur les grands ensembles plus anciens que sur les nouveaux programmes résidentiels aux normes de sécurité récentes.",
    ],
  },
  {
    heading: "Un secteur animé jour et nuit",
    paragraphs: [
      "L'activité commerçante et festive du quartier du Port, ainsi que la présence du pôle hospitalier Pasteur avec son ancienne abbaye de Saint-Pons, génèrent un passage important à toute heure. Je reste disponible pour des dépannages tardifs et des sécurisations après effraction, avec la majoration de nuit annoncée avant intervention.",
    ],
  },
  {
    heading: "Un relief qui influence le délai d'intervention",
    paragraphs: [
      "Les hauteurs du Mont Boron et du Mont Alban demandent un déplacement un peu plus long que les quartiers du port ou de Riquier. Je vous donne un délai réaliste dès l'appel, en tenant compte de la distance et du relief.",
    ],
  },
];

const faq = [
  {
    question: "Quels quartiers de l'est de Nice couvrez-vous ?",
    answer:
      "L'ensemble du secteur : le Port, Riquier, Pasteur, Saint-Roch, l'Ariane, Mont Boron, Mont Alban et Bon Voyage. Le détail complet est listé sur cette page.",
  },
  {
    question: "Intervenez-vous rapidement dans l'est de Nice ?",
    answer:
      "Oui, avec un délai habituel de 15 à 25 minutes pour les quartiers du Port et de Riquier, et jusqu'à 30 minutes pour les hauteurs du Mont Boron et du Mont Alban, selon la circulation.",
  },
  {
    question: "Intervenez-vous sur les immeubles anciens du port et de Riquier ?",
    answer:
      "Oui, je privilégie la réparation et l'adaptation d'un cylindre compatible plutôt qu'un remplacement qui dénaturerait une porte ancienne, sauf si le mécanisme est trop endommagé.",
  },
  {
    question: "Intervenez-vous sur les nouveaux programmes de l'Ariane et du Brancolar ?",
    answer:
      "Oui, avec l'arrivée de nouveaux logements liés aux programmes de renouvellement urbain, j'interviens de plus en plus sur du matériel récent : personnalisation de cylindre, ajustements après emménagement, montée en sécurité.",
  },
  {
    question: "Les tarifs sont-ils différents dans l'est par rapport au reste de Nice ?",
    answer:
      "Non, mes tarifs sont identiques sur l'ensemble de la ville. Retrouvez le détail sur ma page tarifs.",
  },
  {
    question: "Proposez-vous un devis avant d'intervenir dans l'est de Nice ?",
    answer:
      "Systématiquement, par téléphone avant le déplacement, puis confirmé sur place avant de commencer les travaux.",
  },
];

export default function SerrurierNiceEstPage() {
  return (
    <SectorPageTemplate
      title="Serrurier à Nice Est"
      sectorKey="est"
      intro={intro}
      blocks={blocks}
      faq={faq}
      quartiers={zones.est}
      path="/serrurier-nice-est/"
    />
  );
}
