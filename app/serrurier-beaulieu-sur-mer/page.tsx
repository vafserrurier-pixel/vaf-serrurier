import type { Metadata } from "next";
import Link from "next/link";
import CommunePageTemplate from "@/components/CommunePageTemplate";
import ArticleTable from "@/components/ArticleTable";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-beaulieu-sur-mer/",
  title: "Serrurier Beaulieu-sur-Mer : porte claquée, dépannage 24h/24",
  description:
    "Serrurier à Beaulieu-sur-Mer 24h/24 : port, baie des Fourmis, Petite Afrique, gare. Sur place en 30 min, mêmes prix qu'à Nice. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";

const intro = [
  "Une porte claquée dans un appartement près du port, un cylindre qui force dans une location saisonnière, une clé cassée en rentrant de la plage : j'interviens dans tout Beaulieu-sur-Mer, 24h/24 et 7j/7, en 30 minutes en urgence. Mes prix sont les mêmes qu'à Nice, déplacement compris, et je vous les annonce au téléphone avant de partir.",
];

const reperesRows: [string, string][] = [
  ["Le port de plaisance", "Les résidences et les appartements du bord de mer"],
  ["La baie des Fourmis", "La promenade et la Villa Kérylos"],
  ["La Petite Afrique", "La plage au pied de la falaise, côté Monaco"],
  ["Le centre", "La gare, la Rotonde, le casino et les commerces"],
];

const blocks = [
  {
    heading: "Les repères de Beaulieu-sur-Mer",
    paragraphs: [],
    extra: (
      <>
        <ArticleTable headers={["Repère", "Ce qu'on y trouve"]} rows={reperesRows.map(([repere, contenu]) => [repere, contenu])} />
        <p className="text-slate leading-relaxed mt-4">
          Au téléphone, dites-moi votre rue et un repère proche : je sais tout de suite où aller.
        </p>
      </>
    ),
  },
  {
    heading: "Mêmes prix qu'à Nice, déplacement compris",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Beaulieu-sur-Mer est juste après{" "}
          <Link href="/serrurier-villefranche-sur-mer/" className={linkClass}>
            Villefranche-sur-Mer
          </Link>
          , sur la route de Monaco : je n&apos;y compte aucun supplément de déplacement.
        </p>
        <ArticleTable
          headers={["Intervention", "En journée", "Après 19 h, week-end, jours fériés"]}
          rows={[
            ["Porte claquée", "149 €", "189 €"],
            ["Porte fermée à clé", "149 € + cylindre (dès 249 €)", "209 € + cylindre"],
            ["Changement de cylindre", "Dès 249 €", "Prix annoncé au téléphone"],
            ["Poignée blindée posée", "349 €", "Sur rendez-vous"],
            ["Serrure carénée 5 points posée", "1 249 €", "Sur rendez-vous"],
            ["Blindage de porte", "Dès 2 689 €", "Sur rendez-vous"],
          ]}
        />
        <p className="text-slate leading-relaxed mt-4">
          Prix TTC, déplacement compris. Une serrure Fichet, un cylindre haute sécurité ou une serrure multipoints se
          chiffrent sur devis. Le détail de tous mes prix est sur{" "}
          <Link href="/tarifs-serrurier-nice/" className={linkClass}>
            ma page tarifs
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    heading: "Location saisonnière : une serrure fiable pour vos voyageurs",
    paragraphs: [
      "Si vous louez un appartement à la semaine ou au week-end, la serrure est la première chose que vos voyageurs touchent en arrivant. Un cylindre qui force, une clé qui ne tourne plus ou un double perdu transforment vite une arrivée en urgence, souvent le soir ou le week-end.",
      <>
        Je peux{" "}
        <Link href="/changement-serrure-nice/" className={linkClass}>
          changer le cylindre
        </Link>{" "}
        sur rendez-vous, avec des clés neuves remises sur place, ou intervenir en dépannage quand un voyageur reste
        bloqué dehors. Dans les deux cas, le prix est annoncé au téléphone, puis confirmé sur place avant de commencer.
      </>,
      <>
        Entre propriétaire et locataire, la question de qui paie revient souvent : j&apos;y réponds dans mon article{" "}
        <Link href="/blog/qui-paie-changement-serrure-location-nice/" className={linkClass}>
          qui paie le changement de serrure en location
        </Link>
        .
      </>,
    ],
  },
  {
    heading: "Comment j'ouvre une porte",
    paragraphs: [
      <>
        Une porte claquée est fermée par le simple mouvement du battant, sans tour de clé. Je l&apos;ouvre avec la{" "}
        <Link href="/ouverture-de-porte-nice/" className={linkClass}>
          méthode radio
        </Link>{" "}
        : une fine plaque rigide, glissée entre le cadre et le pêne, libère le mécanisme sans l&apos;abîmer. 99 % des
        portes claquées sont ouvertes sans dégât.
      </>,
      "Quand la porte est fermée à clé ou que la clé est perdue, le diagnostic décide de la méthode. Si une clé s'est cassée dans le cylindre, je commence par l'extraire. Si le cylindre doit être percé, je perce le cylindre, jamais la porte, et je pose un cylindre neuf avec des clés neuves.",
    ],
  },
  {
    heading: "Après une tentative d'effraction",
    paragraphs: [
      <>
        Si une porte a été forcée, je fais d&apos;abord la{" "}
        <Link href="/mise-en-securite-apres-effraction-nice/" className={linkClass}>
          mise en sécurité
        </Link>
        , 24h/24, pour que le logement ferme le soir même. On choisit ensuite au calme la solution durable : cylindre
        neuf, poignée blindée ou serrure carénée selon l&apos;état de la porte. Je vous remets une facture détaillée
        pour votre assurance.
      </>,
    ],
  },
  {
    heading: "Exemple type",
    paragraphs: [
      "Exemple type, une situation fréquente et non un client précis : un mercredi midi, un voyageur loge dans un appartement près du port. Il descend chercher du pain, la porte se referme derrière lui, les clés sont restées à l'intérieur. La porte est claquée, pas fermée à clé : je l'ouvre avec la méthode radio, sans dégât. Coût : 149 € TTC en journée, déplacement compris, annoncé au téléphone avant de partir.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous la nuit ou le week-end à Beaulieu-sur-Mer ?",
    answer:
      "Oui, 24h/24 et 7j/7, jours fériés compris. Après 19 h, le week-end et les jours fériés : 189 € TTC pour une porte claquée, 209 € TTC pour une porte fermée à clé, annoncés avant de partir.",
  },
  {
    question: "En combien de temps arrivez-vous à Beaulieu-sur-Mer ?",
    answer: "En urgence, en 30 minutes, depuis ma boutique du 2 rue Antoine Gautier, à Nice.",
  },
  {
    question: "Le déplacement jusqu'à Beaulieu-sur-Mer est-il facturé en plus ?",
    answer: "Non. Les prix sont les mêmes qu'à Nice, déplacement compris, et le devis par téléphone est gratuit.",
  },
  {
    question: "Je loue mon appartement à des voyageurs : pouvez-vous changer le cylindre ?",
    answer:
      "Oui, sur rendez-vous ou en dépannage. Je pose un cylindre adapté à votre porte et je remets des clés neuves sur place. Le changement de cylindre démarre à 249 € TTC, déplacement compris.",
  },
  {
    question: "Ma porte s'est claquée : faut-il forcer la serrure ?",
    answer:
      "Non, surtout pas. Je l'ouvre avec la méthode radio, sans abîmer le mécanisme : 99 % des portes claquées sont ouvertes sans dégât. Le prix est de 149 € TTC en journée.",
  },
  {
    question: "Mon assurance peut-elle me rembourser l'intervention ?",
    answer:
      "Cela dépend de votre contrat, je ne peux donc rien promettre. Je vous remets une facture détaillée à présenter à votre assureur.",
  },
  {
    question: "Intervenez-vous aussi dans les communes voisines ?",
    answer: (
      <>
        Oui.{" "}
        <Link href="/serrurier-eze/" className={linkClass}>
          Èze
        </Link>{" "}
        a sa page, et j&apos;interviens aussi à Saint-Jean-Cap-Ferrat, à Cap-d&apos;Ail et dans toutes les autres
        communes autour de Nice.
      </>
    ),
    schemaText:
      "Oui. Èze a sa page, et j'interviens aussi à Saint-Jean-Cap-Ferrat, à Cap-d'Ail et dans toutes les autres communes autour de Nice.",
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
      h1="Serrurier à Beaulieu-sur-Mer : port, baie des Fourmis, Petite Afrique"
      intro={intro}
      heroDelayLine="Sur place en 30 minutes en urgence, depuis ma boutique du 2 rue Antoine Gautier, 06300 Nice."
      blocks={blocks}
      travelEstimate="30 min"
      faq={faq}
      rewrite
      path="/serrurier-beaulieu-sur-mer/"
      testimonial={testimonial}
      mapQuery="Beaulieu-sur-Mer, 06310"
      mapTitle="Zone d'intervention à Beaulieu-sur-Mer"
    />
  );
}
