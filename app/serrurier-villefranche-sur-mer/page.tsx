import type { Metadata } from "next";
import Link from "next/link";
import CommunePageTemplate from "@/components/CommunePageTemplate";
import ArticleTable from "@/components/ArticleTable";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-villefranche-sur-mer/",
  title: "Serrurier Villefranche-sur-Mer : dépannage 24h/24, villas",
  description:
    "Serrurier à Villefranche-sur-Mer 24h/24 : vieille ville, port de la Santé, villas des hauteurs. Sur place en 30 min, mêmes prix qu'à Nice. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";

const intro = [
  "Une porte claquée dans un appartement de la vieille ville, une villa des hauteurs qui ne s'ouvre plus au retour de l'hiver, un meublé à sécuriser entre deux locations : j'interviens dans tout Villefranche-sur-Mer, 24h/24 et 7j/7, en 30 minutes en urgence. Mes prix sont les mêmes qu'à Nice, déplacement compris, et je vous les annonce au téléphone avant de partir.",
];

const quartierRows: [string, string][] = [
  ["Vieille ville", "La rue Obscure, les ruelles en escalier, la chapelle Saint-Pierre"],
  ["Port de la Santé", "Le petit port au pied de la vieille ville"],
  ["Citadelle et Darse", "La citadelle Saint-Elme et le port de la Darse"],
  ["Les Marinières", "La plage des Marinières et la gare"],
  ["Les hauteurs", "Les villas au-dessus de la rade, jusqu'au col de Villefranche"],
];

const blocks = [
  {
    heading: "Les quartiers de Villefranche-sur-Mer où j'interviens",
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
          Villefranche-sur-Mer est juste après le Mont Boron, en sortant de Nice par l&apos;est : je n&apos;y compte
          aucun supplément de déplacement.
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
    heading: "Vieille ville : ruelles en escalier et portes anciennes",
    paragraphs: [
      "Dans la vieille ville, entre le port de la Santé et la rue Obscure, on ne circule qu'à pied, par des ruelles en pente et des escaliers. Au téléphone, dites-moi par quelle rue arriver et où je peux laisser mon véhicule au plus près : vous gagnez du temps.",
      <>
        Beaucoup de portes y sont anciennes, en bois épais. Je cherche d&apos;abord à les ouvrir sans les abîmer. Quand
        la serrure d&apos;origine fonctionne encore, il suffit souvent de{" "}
        <Link href="/changement-serrure-nice/" className={linkClass}>
          changer le cylindre
        </Link>
        , sans toucher au reste de la porte.
      </>,
    ],
  },
  {
    heading: "Résidences secondaires et locations : avant de fermer pour la saison",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          À Villefranche-sur-Mer, beaucoup d&apos;appartements et de villas ne sont occupés qu&apos;une partie de
          l&apos;année, ou loués à la semaine. Trois précautions évitent la plupart des mauvaises surprises :
        </p>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">Savoir combien de clés existent.</strong> Si un jeu a été prêté, perdu ou
            n&apos;est pas revenu après une location, changez le cylindre avant de partir.
          </li>
          <li>
            <strong className="text-navy">Faire jouer la serrure avant de fermer.</strong> Près de la mer, un cylindre
            qui ne sert pas pendant des mois peut se gripper. Si la clé force déjà, faites-le changer tant que vous êtes
            là.
          </li>
          <li>
            <strong className="text-navy">Laisser un double à une personne de confiance</strong>, plutôt que sous un
            pot de fleurs.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "Villas des hauteurs : renforcer la porte d'entrée",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Sur les hauteurs, au-dessus de la rade, les villas isolées restent souvent fermées plusieurs semaines. Selon
          l&apos;état de la porte d&apos;entrée, je propose :
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
      </>
    ),
  },
  {
    heading: "Exemple type",
    paragraphs: [
      "Exemple type, une situation fréquente et non un client précis : un mardi à 11 heures, les propriétaires d'une villa des hauteurs arrivent pour le printemps. La clé ne tourne plus dans le cylindre, resté fermé tout l'hiver. J'ouvre la porte fermée à clé en perçant le cylindre, jamais la porte, puis je pose un cylindre neuf avec des clés neuves : 149 € pour l'ouverture et 249 € pour le cylindre standard, soit 398 € TTC en journée, déplacement compris, annoncés au téléphone.",
    ],
  },
];

const faq = [
  {
    question: "Quels quartiers de Villefranche-sur-Mer couvrez-vous ?",
    answer:
      "Toute la commune : la vieille ville, le port de la Santé, la citadelle et la Darse, les Marinières et les hauteurs jusqu'au col de Villefranche.",
  },
  {
    question: "En combien de temps arrivez-vous à Villefranche-sur-Mer ?",
    answer: "En urgence, en 30 minutes, 24h/24 et 7j/7.",
  },
  {
    question: "Le déplacement jusqu'à Villefranche-sur-Mer est-il facturé en plus ?",
    answer:
      "Non. Les prix sont les mêmes qu'à Nice, déplacement compris : 149 € en journée pour une porte claquée, 189 € le soir, le week-end et les jours fériés.",
  },
  {
    question: "J'habite dans la vieille ville, où les voitures ne passent pas : comment me trouvez-vous ?",
    answer:
      "Indiquez-moi au téléphone la rue par laquelle arriver et l'endroit le plus proche où me garer. Je finis à pied avec mon matériel.",
  },
  {
    question: "Ma résidence secondaire reste fermée l'hiver : que faire avant de partir ?",
    answer:
      "Vérifiez combien de clés existent, faites jouer la serrure, et changez le cylindre si la clé force ou si un jeu manque. Pour une villa isolée, une poignée blindée ou une serrure carénée renforce la porte.",
  },
  {
    question: "La clé ne tourne plus après plusieurs mois d'absence : que se passe-t-il ?",
    answer:
      "Le cylindre s'est sans doute grippé. J'ouvre la porte en perçant le cylindre, jamais la porte, puis je pose un cylindre neuf : 398 € TTC en journée, ouverture et cylindre compris.",
  },
  {
    question: "Intervenez-vous aussi dans les communes voisines ?",
    answer: (
      <>
        Oui.{" "}
        <Link href="/serrurier-beaulieu-sur-mer/" className={linkClass}>
          Beaulieu-sur-Mer
        </Link>{" "}
        a sa page, et j&apos;interviens aussi à Saint-Jean-Cap-Ferrat et dans toutes les autres communes autour de
        Nice.
      </>
    ),
    schemaText:
      "Oui. Beaulieu-sur-Mer a sa page, et j'interviens aussi à Saint-Jean-Cap-Ferrat et dans toutes les autres communes autour de Nice.",
  },
];

export default function SerrurierVillefrancheSurMerPage() {
  return (
    <CommunePageTemplate
      commune="Villefranche-sur-Mer"
      h1="Serrurier à Villefranche-sur-Mer : vieille ville, port de la Santé, villas des hauteurs"
      intro={intro}
      heroDelayLine="Sur place en 30 minutes en urgence, depuis ma boutique du 2 rue Antoine Gautier, 06300 Nice."
      blocks={blocks}
      travelEstimate="30 min"
      faq={faq}
      rewrite
      path="/serrurier-villefranche-sur-mer/"
    />
  );
}
