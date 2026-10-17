import type { Metadata } from "next";
import Link from "next/link";
import CommunePageTemplate from "@/components/CommunePageTemplate";
import ArticleTable from "@/components/ArticleTable";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-cagnes-sur-mer/",
  title: "Serrurier Cagnes-sur-Mer 24h/24 : 149 €, déplacement compris",
  description:
    "Serrurier à Cagnes-sur-Mer 24h/24 : Cros-de-Cagnes, Haut-de-Cagnes, hippodrome, Val Fleuri. Sur place en 30 min, mêmes prix qu'à Nice. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";

const intro = [
  "Un voyageur enfermé dehors au Cros-de-Cagnes, des clés perdues en rentrant de la plage, une maison du Val Fleuri à sécuriser : j'interviens dans tout Cagnes-sur-Mer, 24h/24 et 7j/7, en 30 minutes en urgence. Mes prix sont les mêmes qu'à Nice, déplacement compris, et je vous les annonce au téléphone avant de partir.",
];

const quartierRows: [string, string][] = [
  ["Cros-de-Cagnes", "Le bord de mer, le petit port de pêche, la gare du Cros-de-Cagnes"],
  ["Hippodrome", "L'hippodrome de la Côte d'Azur, près du bord de mer"],
  ["Haut-de-Cagnes", "Le village perché et son château Grimaldi"],
  ["Centre-ville", "La gare de Cagnes-sur-Mer, les commerces"],
  ["Les Collettes", "Le domaine et le musée Renoir"],
  ["Val Fleuri", "Quartier résidentiel, immeubles et maisons"],
  ["Les Bréguières", "Quartier résidentiel, immeubles et maisons"],
  ["Le Béal", "Quartier résidentiel, immeubles et maisons"],
];

const blocks = [
  {
    heading: "Les quartiers de Cagnes-sur-Mer où j'interviens",
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
          Pour Cagnes-sur-Mer, je ne compte aucun supplément de déplacement : vous payez le même prix qu&apos;à Nice.
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
    heading: "Haut-de-Cagnes : portes anciennes et ruelles en pente",
    paragraphs: [
      <>
        Dans le village perché, autour du château Grimaldi, beaucoup de maisons ont gardé des portes en bois épaisses,
        parfois avec leur serrure d&apos;origine. Sur ces portes, je cherche d&apos;abord à ouvrir sans abîmer le bois.
        Si la serrure doit être changée, je peux souvent poser un{" "}
        <Link href="/changement-serrure-nice/" className={linkClass}>
          cylindre adaptable
        </Link>{" "}
        dans la serrure d&apos;origine, pour garder l&apos;aspect de la porte.
      </>,
      "Les ruelles du village sont étroites et en pente. Au téléphone, dites-moi où je peux me garer au plus près de chez vous.",
    ],
  },
  {
    heading: "Cros-de-Cagnes et bord de mer : résidences et locations à la semaine",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Du Cros-de-Cagnes à l&apos;hippodrome, le bord de mer est fait de résidences, avec beaucoup d&apos;appartements
          loués à la semaine. Pour un propriétaire ou une conciergerie, deux cas reviennent :
        </p>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">Le voyageur à la porte de chez lui</strong>, souvent le soir : si la porte est
            claquée,{" "}
            <Link href="/ouverture-de-porte-nice/" className={linkClass}>
              j&apos;ouvre sans dégât
            </Link>
            , au prix annoncé avant de partir.
          </li>
          <li>
            <strong className="text-navy">Le jeu de clés qui manque à la fin du séjour</strong> : le plus sûr est de
            changer le cylindre avant l&apos;arrivée suivante.
          </li>
        </ul>
        <p className={pClass}>
          Près de la mer, l&apos;air salin use plus vite les cylindres. Une clé qui force ou qui accroche, c&apos;est le
          signe qu&apos;il faut changer le cylindre avant qu&apos;il ne bloque.
        </p>
      </>
    ),
  },
  {
    heading: "Val Fleuri, les Bréguières, le Béal : des maisons avec plusieurs accès",
    paragraphs: [
      "Dans les quartiers résidentiels, beaucoup de maisons ont plusieurs accès : porte d'entrée, porte de garage, porte de service. Un cambrioleur cherche toujours la plus faible. Quand je viens pour une porte, je peux regarder les autres si vous me le demandez.",
      <>
        Pour renforcer une porte d&apos;entrée, je propose selon son état une{" "}
        <Link href="/poignee-blindee-nice/" className={linkClass}>
          poignée blindée
        </Link>
        , une{" "}
        <Link href="/serrure-carenee-nice/" className={linkClass}>
          serrure carénée 5 points
        </Link>{" "}
        ou un{" "}
        <Link href="/blindage-porte-nice/" className={linkClass}>
          blindage de porte
        </Link>
        . Après une tentative d&apos;effraction, je fais d&apos;abord la{" "}
        <Link href="/mise-en-securite-apres-effraction-nice/" className={linkClass}>
          mise en sécurité
        </Link>{" "}
        pour que la maison ferme le soir même, puis on choisit le renfort au calme.
      </>,
    ],
  },
  {
    heading: "Exemple type",
    paragraphs: [
      "Exemple type, une situation fréquente et non un client précis : un samedi vers 22 heures, au Cros-de-Cagnes, une voyageuse descend ses poubelles et la porte de l'appartement loué se referme derrière elle, clés à l'intérieur. La porte est claquée, pas fermée à clé : je l'ouvre sans l'abîmer. Coût : 189 €, le tarif du soir, déplacement compris, annoncé au téléphone à la conciergerie avant de partir.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous dans tout Cagnes-sur-Mer ?",
    answer:
      "Oui : le Cros-de-Cagnes, l'hippodrome, le Haut-de-Cagnes, le centre-ville, les Collettes, le Val Fleuri, les Bréguières et le Béal.",
  },
  {
    question: "En combien de temps arrivez-vous à Cagnes-sur-Mer ?",
    answer: "En urgence, en 30 minutes, 24h/24 et 7j/7.",
  },
  {
    question: "Le déplacement jusqu'à Cagnes-sur-Mer est-il facturé en plus ?",
    answer:
      "Non. Les prix sont les mêmes qu'à Nice, déplacement compris : 149 € en journée pour une porte claquée, 189 € le soir, le week-end et les jours fériés.",
  },
  {
    question: "D'où partez-vous pour venir à Cagnes-sur-Mer ?",
    answer:
      "De ma boutique, au 2 rue Antoine Gautier, à Nice. Cagnes-sur-Mer fait partie des communes où j'interviens, avec le même délai et les mêmes prix qu'à Nice.",
  },
  {
    question: "Ma maison du Haut-de-Cagnes a une vieille porte en bois : risquez-vous de l'abîmer ?",
    answer:
      "Je cherche toujours d'abord à ouvrir sans abîmer la porte. Si la serrure doit être changée, je peux souvent poser un cylindre dans la serrure d'origine, pour garder l'aspect de la porte.",
  },
  {
    question: "Je loue un appartement au Cros-de-Cagnes : que faire si un voyageur ne rend pas les clés ?",
    answer:
      "Faites changer le cylindre avant l'arrivée suivante : vous repartez avec des clés neuves. Le changement de cylindre démarre à 249 € TTC.",
  },
  {
    question: "Intervenez-vous aussi à Saint-Laurent-du-Var et à Villeneuve-Loubet ?",
    answer:
      "Oui. Saint-Laurent-du-Var a sa page, et j'interviens aussi à Villeneuve-Loubet et dans toutes les autres communes autour de Nice.",
  },
];

export default function SerrurierCagnesSurMerPage() {
  return (
    <CommunePageTemplate
      commune="Cagnes-sur-Mer"
      h1="Serrurier à Cagnes-sur-Mer : Cros-de-Cagnes, Haut-de-Cagnes, hippodrome"
      intro={intro}
      heroDelayLine="Sur place en 30 minutes en urgence, depuis ma boutique du 2 rue Antoine Gautier, 06300 Nice."
      blocks={blocks}
      travelEstimate="30 min"
      faq={faq}
      rewrite
      path="/serrurier-cagnes-sur-mer/"
    />
  );
}
