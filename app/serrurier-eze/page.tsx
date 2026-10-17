import type { Metadata } from "next";
import Link from "next/link";
import CommunePageTemplate from "@/components/CommunePageTemplate";
import ArticleTable from "@/components/ArticleTable";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-eze/",
  title: "Serrurier Èze 24h/24 : village perché et villas, en 30 min",
  description:
    "Serrurier à Èze 24h/24 : village perché, Èze-bord-de-mer, col d'Èze, Saint-Laurent-d'Èze. Sur place en 30 min, mêmes prix qu'à Nice. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";

const intro = [
  "Une porte claquée dans une maison du village perché, une villa du col d'Èze à protéger avant de partir, une serrure qui bloque à Èze-bord-de-mer : j'interviens dans toute la commune, 24h/24 et 7j/7, en 30 minutes en urgence. Mes prix sont les mêmes qu'à Nice, déplacement compris, et je vous les annonce au téléphone avant de partir.",
];

const quartierRows: [string, string][] = [
  ["Le village perché", "Les ruelles du vieux village, le Jardin exotique au sommet"],
  ["Èze-bord-de-mer", "La gare, la plage et les villas du littoral"],
  ["Le col d'Èze", "Les villas des hauteurs, le long de la Grande Corniche"],
  ["Saint-Laurent-d'Èze", "Le hameau des hauteurs, au-dessus du village"],
];

const blocks = [
  {
    heading: "Les quartiers d'Èze où j'interviens",
    paragraphs: [],
    extra: (
      <ArticleTable headers={["Quartier", "Repères"]} rows={quartierRows.map(([quartier, reperes]) => [quartier, reperes])} />
    ),
  },
  {
    heading: "Mêmes prix qu'à Nice, déplacement compris",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Èze est juste après{" "}
          <Link href="/serrurier-beaulieu-sur-mer/" className={linkClass}>
            Beaulieu-sur-Mer
          </Link>
          , entre Nice et Monaco : je n&apos;y compte aucun supplément de déplacement, que vous soyez au bord de la mer
          ou en haut du col.
        </p>
        <ArticleTable
          headers={["Intervention", "En journée", "Après 19 h, week-end, jours fériés"]}
          rows={[
            [
              <Link key="claquee" href="/ouverture-de-porte-nice/" className={linkClass}>
                Porte claquée
              </Link>,
              "149 €",
              "189 €",
            ],
            ["Porte fermée à clé", "149 € + cylindre (dès 249 €)", "209 € + cylindre"],
            ["Changement de cylindre", "Dès 249 €", "Prix annoncé au téléphone"],
            ["Poignée blindée posée", "349 €", "Sur rendez-vous"],
            ["Serrure carénée 5 points posée", "1 249 €", "Sur rendez-vous"],
            ["Blindage de porte", "Dès 2 689 €", "Sur rendez-vous"],
          ]}
        />
        <p className="text-slate leading-relaxed mt-4">
          Prix TTC, déplacement compris. Le détail de tous mes prix est sur{" "}
          <Link href="/tarifs-serrurier-nice/" className={linkClass}>
            ma page tarifs
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    heading: "Le village perché : à pied depuis l'entrée du village",
    paragraphs: [
      "Dans le village perché, les voitures restent à l'entrée : on monte ensuite à pied, par des ruelles étroites et des escaliers. Je viens avec mon matériel et je finis à pied jusqu'à votre porte. Au téléphone, dites-moi par où arriver, ou attendez-moi à l'entrée du village si c'est plus simple.",
      <>
        Beaucoup de portes y sont anciennes, en bois massif. Je cherche d&apos;abord à les ouvrir sans les abîmer. Quand
        la serrure d&apos;origine fonctionne encore, il suffit souvent de{" "}
        <Link href="/changement-serrure-nice/" className={linkClass}>
          changer le cylindre
        </Link>{" "}
        pour garder la porte telle qu&apos;elle est.
      </>,
    ],
  },
  {
    heading: "Villas des hauteurs : comment je trouve votre maison",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Au col d&apos;Èze, à Saint-Laurent-d&apos;Èze ou au-dessus du bord de mer, beaucoup de villas sont au bout
          d&apos;un chemin ou derrière un portail, sans numéro visible depuis la route. Pour que j&apos;arrive en 30
          minutes, donnez-moi au téléphone :
        </p>
        <ul className={listClass}>
          <li>l&apos;adresse et un repère visible depuis la route ;</li>
          <li>le code ou la sonnette du portail, si je dois le franchir ;</li>
          <li>si vous pouvez, votre position par WhatsApp.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Avant une longue absence : protéger la porte d'entrée",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Une villa fermée plusieurs mois doit tenir seule. Selon l&apos;état de la porte d&apos;entrée, je propose :
        </p>
        <ul className={listClass}>
          <li>
            une{" "}
            <strong className="text-navy">
              <Link href="/poignee-blindee-nice/" className={linkClass}>
                poignée blindée
              </Link>
            </strong>{" "}
            pour protéger un cylindre qui dépasse (349 €) ;
          </li>
          <li>
            une{" "}
            <strong className="text-navy">
              <Link href="/serrure-carenee-nice/" className={linkClass}>
                serrure carénée 5 points
              </Link>
            </strong>{" "}
            pour une porte qui ne ferme que sur un point (1 249 €) ;
          </li>
          <li>
            un{" "}
            <strong className="text-navy">
              <Link href="/blindage-porte-nice/" className={linkClass}>
                blindage de porte
              </Link>
            </strong>{" "}
            pour une porte en bois sain que vous voulez garder (dès 2 689 €).
          </li>
        </ul>
        <p className={pClass}>
          Si vous découvrez une tentative d&apos;effraction à votre retour, je fais d&apos;abord la{" "}
          <Link href="/mise-en-securite-apres-effraction-nice/" className={linkClass}>
            mise en sécurité
          </Link>{" "}
          pour que la maison ferme le soir même, puis on choisit le renfort au calme.
        </p>
      </>
    ),
  },
  {
    heading: "Exemple type",
    paragraphs: [
      "Exemple type, une situation fréquente et non un client précis : un jeudi, sur rendez-vous, les propriétaires d'une villa du col d'Èze veulent protéger leur porte d'entrée avant de partir trois mois. Le cylindre dépasse de la porte, ce qui le rend facile à attaquer. Je pose une poignée blindée qui le recouvre : 349 € TTC posée, déplacement compris, prix annoncé au téléphone.",
    ],
  },
];

const faq = [
  {
    question: "Quels quartiers d'Èze couvrez-vous ?",
    answer: "Toute la commune : le village perché, Èze-bord-de-mer, le col d'Èze et Saint-Laurent-d'Èze.",
  },
  {
    question: "En combien de temps arrivez-vous à Èze ?",
    answer: "En urgence, en 30 minutes, 24h/24 et 7j/7, en bas comme en haut de la commune.",
  },
  {
    question: "Le déplacement jusqu'à Èze est-il facturé en plus ?",
    answer:
      "Non. Les prix sont les mêmes qu'à Nice, déplacement compris : 149 € en journée pour une porte claquée, 189 € le soir, le week-end et les jours fériés.",
  },
  {
    question: "J'habite dans le village perché : pouvez-vous venir jusqu'à ma porte ?",
    answer:
      "Oui. Je laisse mon véhicule à l'entrée du village et je finis à pied avec mon matériel. Dites-moi par où arriver, ou attendez-moi à l'entrée.",
  },
  {
    question: "Ma villa est au bout d'un chemin : comment me trouvez-vous ?",
    answer:
      "Donnez-moi au téléphone l'adresse, un repère visible depuis la route et le code du portail, ou envoyez votre position par WhatsApp.",
  },
  {
    question: "Je pars plusieurs mois : comment protéger ma porte ?",
    answer:
      "Selon l'état de la porte : une poignée blindée (349 €), une serrure carénée 5 points (1 249 €) ou un blindage de porte (dès 2 689 €). Je regarde la porte avant de vous conseiller.",
  },
  {
    question: "Intervenez-vous aussi à Cap-d'Ail et à La Turbie ?",
    answer:
      "Oui, comme dans toutes les autres communes autour de Nice, avec un prix annoncé au téléphone avant de partir.",
  },
];

export default function SerrurierEzePage() {
  return (
    <CommunePageTemplate
      commune="Èze"
      h1="Serrurier à Èze : village perché, Èze-bord-de-mer, col d'Èze"
      intro={intro}
      heroDelayLine="Sur place en 30 minutes en urgence, depuis ma boutique du 2 rue Antoine Gautier, 06300 Nice."
      blocks={blocks}
      travelEstimate="30 min"
      faq={faq}
      rewrite
      path="/serrurier-eze/"
    />
  );
}
