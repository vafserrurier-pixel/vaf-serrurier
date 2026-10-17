import type { Metadata } from "next";
import Link from "next/link";
import CommunePageTemplate from "@/components/CommunePageTemplate";
import ArticleTable from "@/components/ArticleTable";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-saint-laurent-du-var/",
  title: "Serrurier Saint-Laurent-du-Var : 149 €, déplacement compris",
  description:
    "Serrurier à Saint-Laurent-du-Var 24h/24 : Vieux-Village, Cap 3000, les Pugets, Montaleigne. Sur place en 30 min, mêmes prix qu'à Nice. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";

const intro = [
  "Des clés perdues à Cap 3000, un cylindre qui bloque dans une résidence des Pugets, une vieille serrure du Vieux-Village qui ne ferme plus : j'interviens dans tout Saint-Laurent-du-Var, 24h/24 et 7j/7, en 30 minutes en urgence. Et comme à Nice, mes prix sont affichés, déplacement compris, et je vous les annonce au téléphone avant de partir.",
];

const quartierRows: [string, string][] = [
  ["Vieux-Village", "Les maisons anciennes et les ruelles autour de l'église"],
  ["Port et bord de mer", "Le port de plaisance et la promenade du bord de mer"],
  ["Cap 3000", "Le centre commercial et les résidences autour"],
  ["Les Pugets", "Immeubles et résidences sur les hauteurs"],
  ["Le Point du Jour", "Quartier résidentiel des hauteurs"],
  ["Les Vespins", "Quartier résidentiel des hauteurs"],
  ["Montaleigne", "Les collines, maisons et résidences"],
  ["La Baronne", "Le nord de la commune, le long du Var"],
  ["Les Iscles", "La plaine du Var"],
];

const blocks = [
  {
    heading: "Les quartiers de Saint-Laurent-du-Var où j'interviens",
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
          Pour venir à Saint-Laurent-du-Var, je traverse simplement le Var : aucun supplément de déplacement, vous payez
          le même prix qu&apos;à Nice.
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
    heading: "Vieux-Village : changer la serrure sans changer la porte",
    paragraphs: [
      <>
        Dans le Vieux-Village, beaucoup de maisons ont gardé une porte en bois massif, avec une serrure encastrée dans
        l&apos;épaisseur du bois. Quand cette serrure lâche ou que les clés sont perdues, il n&apos;est pas toujours
        nécessaire de tout remplacer. Je regarde d&apos;abord si un{" "}
        <Link href="/changement-serrure-nice/" className={linkClass}>
          cylindre adaptable
        </Link>{" "}
        peut se monter dans la serrure d&apos;origine. Si la serrure est trop usée, je la remplace par une serrure de
        même taille, sur devis, pour ne pas avoir à retailler la porte.
      </>,
    ],
  },
  {
    heading: "En copropriété : votre porte, la porte du hall",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Aux Pugets, autour de Cap 3000 ou sur le bord de mer, beaucoup d&apos;habitants vivent en copropriété. Pour
          savoir qui m&apos;appelle, retenez ceci :
        </p>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">Votre porte palière</strong> vous appartient : c&apos;est vous qui décidez de
            changer le cylindre ou de renforcer la porte.
          </li>
          <li>
            <strong className="text-navy">La porte du hall et les accès communs</strong> relèvent du syndic : c&apos;est
            lui qui commande l&apos;intervention, et la facture est au nom de la copropriété.
          </li>
        </ul>
        <p className={pClass}>
          Pour un syndic, un{" "}
          <Link href="/agences-syndics-nice/" className={linkClass}>
            organigramme de clés
          </Link>{" "}
          permet de remettre de l&apos;ordre quand le cylindre du hall doit être changé : chaque habitant ouvre le hall
          et son appartement, et rien d&apos;autre.
        </p>
      </>
    ),
  },
  {
    heading: "Vous emménagez : changez le cylindre",
    paragraphs: [
      "Quand vous arrivez dans un logement, vous ne savez pas combien de clés l'ancien occupant a fait faire, ni à qui il les a confiées. Le changement de cylindre règle la question : vous repartez avec des clés neuves, et vous êtes le seul à les avoir. Il démarre à 249 € TTC, déplacement compris.",
    ],
  },
  {
    heading: "Exemple type",
    paragraphs: [
      "Exemple type, une situation fréquente et non un client précis : un lundi matin, un couple emménage dans un appartement des Pugets. L'ancien propriétaire leur a remis deux clés, mais ignore combien de doubles il a fait faire. Je remplace le cylindre de la porte palière par un cylindre neuf, avec des clés neuves : à partir de 249 € TTC, déplacement compris, prix annoncé au téléphone avant de partir.",
    ],
  },
];

const faq = [
  {
    question: "Quels quartiers de Saint-Laurent-du-Var couvrez-vous ?",
    answer:
      "Toute la commune : le Vieux-Village, le port et le bord de mer, Cap 3000, les Pugets, le Point du Jour, les Vespins, Montaleigne, la Baronne et les Iscles.",
  },
  {
    question: "En combien de temps arrivez-vous à Saint-Laurent-du-Var ?",
    answer: "En urgence, en 30 minutes, 24h/24 et 7j/7.",
  },
  {
    question: "Le déplacement jusqu'à Saint-Laurent-du-Var est-il facturé en plus ?",
    answer:
      "Non. Les prix sont les mêmes qu'à Nice, déplacement compris : 149 € en journée pour une porte claquée, 189 € le soir, le week-end et les jours fériés.",
  },
  {
    question: "Ma maison du Vieux-Village a une vieille serrure encastrée : faut-il tout changer ?",
    answer:
      "Pas forcément. Je regarde d'abord si un cylindre peut se monter dans la serrure d'origine. Si elle est trop usée, je la remplace par une serrure de même taille, sur devis.",
  },
  {
    question: "Dans mon immeuble, qui s'occupe de la porte du hall ?",
    answer:
      "Le syndic. Votre porte palière, elle, est à vous : vous pouvez m'appeler directement pour changer son cylindre.",
  },
  {
    question: "Je viens d'emménager : dois-je changer le cylindre ?",
    answer:
      "C'est le plus sûr, puisque vous ne savez pas combien de clés circulent. Le changement de cylindre démarre à 249 € TTC, déplacement compris.",
  },
  {
    question: "Intervenez-vous aussi dans les communes voisines ?",
    answer: (
      <>
        Oui.{" "}
        <Link href="/serrurier-cagnes-sur-mer/" className={linkClass}>
          Cagnes-sur-Mer
        </Link>{" "}
        a sa page, et j&apos;interviens aussi à Saint-Jeannet, à La Gaude et dans toutes les autres communes autour de
        Nice.
      </>
    ),
    schemaText:
      "Oui. Cagnes-sur-Mer a sa page, et j'interviens aussi à Saint-Jeannet, à La Gaude et dans toutes les autres communes autour de Nice.",
  },
];

export default function SerrurierSaintLaurentDuVarPage() {
  return (
    <CommunePageTemplate
      commune="Saint-Laurent-du-Var"
      h1="Serrurier à Saint-Laurent-du-Var : Vieux-Village, Cap 3000, les Pugets"
      intro={intro}
      heroDelayLine="Sur place en 30 minutes en urgence, depuis ma boutique du 2 rue Antoine Gautier, 06300 Nice."
      blocks={blocks}
      travelEstimate="30 min"
      faq={faq}
      rewrite
      path="/serrurier-saint-laurent-du-var/"
    />
  );
}
