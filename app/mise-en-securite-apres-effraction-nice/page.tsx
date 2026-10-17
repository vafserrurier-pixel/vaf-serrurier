import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import QuoteBlock from "@/components/QuoteBlock";
import ArticleTable from "@/components/ArticleTable";
import ServiceReviewsLive from "@/components/ServiceReviewsLive";
import { StarIcon } from "@/components/Icons";
import { business } from "@/lib/business";
import { getGoogleReviews } from "@/lib/reviews";
import { formatRating } from "@/lib/reviewFormat";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/mise-en-securite-apres-effraction-nice/",
  title: "Mise en sécurité après effraction Nice 24h/24",
  description:
    "Porte forcée ou cambriolage à Nice : mise en sécurité 24h/24 pour refermer chez vous, facture détaillée pour l'assurance. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";
const olClass = "list-decimal pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";

const sections = [
  {
    heading: "Les bons réflexes dans la première heure",
    paragraphs: [],
    extra: (
      <>
        <ol className={olClass}>
          <li>
            <strong className="text-navy">Ne touchez à rien</strong> : ni la porte, ni la serrure, ni ce qui a été
            déplacé à l&apos;intérieur. Prenez des photos de la porte, côté palier et côté intérieur, puis des pièces
            visitées.
          </li>
          <li>
            <strong className="text-navy">Appelez la police</strong> (17) si le cambrioleur peut encore être sur
            place, puis déposez plainte au commissariat ou à la gendarmerie (une pré-plainte en ligne permet de
            gagner du temps). Le récépissé de plainte vous sera demandé par l&apos;assureur.
          </li>
          <li>
            <strong className="text-navy">Appelez-moi</strong> pour sécuriser la porte. Si la police doit faire des
            relevés, je viens après son passage.
          </li>
          <li>
            <strong className="text-navy">Déclarez le vol à votre assureur</strong> dans les{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035731302"
              target="_blank"
              rel="noopener"
              className={linkClass}
            >
              2 jours ouvrés
            </a>
            , avec le récépissé de plainte, les photos et ma facture.
          </li>
        </ol>
        <p className={pClass}>
          Pour le détail des démarches (plainte, assurance, syndic, opposition sur les cartes et chéquiers), voir{" "}
          <Link href="/blog/que-faire-apres-cambriolage-nice/" className={linkClass}>
            mon guide complet sur les démarches
          </Link>{" "}
          après un cambriolage.
        </p>
      </>
    ),
  },
  {
    heading: "Ce que je fais sur place",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>Je commence toujours par regarder les dégâts réels, pas seulement ce qui se voit :</p>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">le cylindre</strong>, souvent arraché, cassé ou percé ;
          </li>
          <li>
            <strong className="text-navy">la gâche et le cadre</strong> autour d&apos;elle : bois fendu ou seulement
            marqué ;
          </li>
          <li>
            <strong className="text-navy">le jeu de la porte</strong> sur ses paumelles après le choc ;
          </li>
          <li>
            <strong className="text-navy">les points d&apos;ancrage</strong> de la serrure.
          </li>
        </ul>
        <p className={pClass}>
          Une tentative qui a échoué sur le cylindre laisse parfois des dégâts moins visibles sur le cadre. La porte
          peut alors se refermer normalement sans avoir retrouvé sa résistance : je le vérifie avant de partir.
        </p>
        <p className={pClass}>
          Sur certaines serrures haut de gamme, un mécanisme de sécurité interne, parfois appelé « pare-attaque », se
          déclenche pendant la tentative : il bloque le pêne, même avec la bonne clé. Il faut le réarmer avec une
          méthode adaptée, sans abîmer davantage la serrure.
        </p>
      </>
    ),
  },
  {
    heading: "Mise en sécurité, réparation, renforcement : trois étapes",
    paragraphs: [],
    extra: (
      <>
        <ArticleTable
          headers={["Étape", "Quand", "Ce que c'est"]}
          rows={[
            [
              "1. Mise en sécurité",
              "Le jour même",
              "Rétablir une fermeture qui protège vraiment : remplacement du cylindre, blocage temporaire, remplacement partiel",
            ],
            [
              "2. Réparation définitive",
              "Une fois l'urgence passée",
              "Remettre la porte, la gâche et le cadre dans un état durable",
            ],
            [
              "3. Renforcement",
              "Avec la réparation, si vous le souhaitez",
              "Monter en niveau plutôt que reposer à l'identique ce qui vient de céder",
            ],
          ]}
        />
        <p className="text-slate leading-relaxed mt-4">
          Une mise en sécurité provisoire suffit quand la porte ferme encore de façon fiable et que la solution
          durable demande réflexion : choix du niveau de sécurité, délai pour un modèle précis. Quand la porte ne ferme
          plus correctement, je fais la réparation tout de suite : rester en provisoire prolongerait le risque.
        </p>
      </>
    ),
  },
  {
    heading: "Renforcer votre porte après une effraction",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Une effraction est souvent l&apos;occasion de monter en niveau, plutôt que de reposer la même installation
          qui vient de céder. Je vous conseille selon l&apos;état réel de votre porte, pas selon un ordre fixe :
        </p>
        <ArticleTable
          headers={["Renfort", "Ce qu'il empêche", "Prix TTC posé"]}
          rows={[
            [
              <Link key="poignee" href="/poignee-blindee-nice/" className={linkClass}>
                Poignée blindée
              </Link>,
              "L'attaque directe du cylindre (arrachement, casse)",
              "349 €",
            ],
            [
              "Cornières anti-pince",
              "Le levier glissé entre la porte et le cadre pour faire sauter le pêne",
              "269 €",
            ],
            [
              <Link key="cylindre" href="/changement-serrure-nice/" className={linkClass}>
                Cylindre certifié A2P
              </Link>,
              "Le perçage, le crochetage et la casse du cylindre",
              "Dès 249 € (cylindre standard), A2P sur devis",
            ],
            [
              <Link key="carenee" href="/serrure-carenee-nice/" className={linkClass}>
                Serrure carénée 5 points
              </Link>,
              "L'ouverture forcée d'une porte à un seul point de fermeture",
              "1 249 €",
            ],
            [
              <Link key="blindage" href="/blindage-porte-nice/" className={linkClass}>
                Blindage de porte
              </Link>,
              "L'enfoncement d'une porte saine mais trop légère",
              "Dès 2 689 €",
            ],
            [
              <Link key="bloc" href="/installation-porte-blindee-nice/" className={linkClass}>
                Bloc-porte blindé neuf
              </Link>,
              "Tout, quand la porte ou le cadre ont été trop abîmés",
              "Dès 3 490 €",
            ],
          ]}
        />
        <p className="text-slate leading-relaxed mt-4">
          La poignée blindée et les cornières anti-pince forment souvent le meilleur duo prix-protection sur une
          porte standard : elles couvrent les deux attaques les plus fréquentes, le cylindre et le levier.
        </p>
        <p className={pClass}>
          En complément, un{" "}
          <a
            href="https://www.heracles.fr/heracles-micro-viseur-hispy-2_SKUM83697.html"
            target="_blank"
            rel="noopener"
            className={linkClass}
          >
            judas numérique
          </a>{" "}
          remplace l&apos;œilleton par un petit écran : vous voyez qui sonne sans entrouvrir la porte. Utile pour
          reprendre confiance après une effraction, je peux l&apos;installer avec les autres renforts.
        </p>
      </>
    ),
  },
  {
    heading: "Votre assurance",
    paragraphs: [
      "Votre assureur vous demandera un justificatif d'intervention. Ma facture décrit les dégâts constatés (cylindre, gâche, cadre), les réparations effectuées, et le niveau de certification posé s'il y a une nouvelle serrure ou une nouvelle porte. Cette description aide l'assureur à qualifier le sinistre : effraction, tentative ou usure. Elle porte mon SIRET.",
      <>
        Je ne vous annonce aucun plafond de remboursement ni aucune franchise : cela dépend entièrement de votre
        contrat, et un chiffre général serait trompeur. Méfiez-vous aussi d&apos;un dépanneur qui se dit «{" "}
        <Link href="/blog/serrurier-agree-assurances-nice/" className={linkClass}>
          agréé toutes assurances
        </Link>{" "}
        » : cette formule ne garantit aucun remboursement, j&apos;explique pourquoi dans un article dédié.
      </>,
      "Si vous n'êtes pas sur place (propriétaire absent, syndic, gestionnaire), je vous envoie sur demande une courte vidéo avant/après de l'intervention, par WhatsApp ou par e-mail.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous la nuit après une effraction ?",
    answer:
      "Oui, 24h/24 et 7j/7, en 30 minutes partout à Nice, y compris la nuit, le week-end et les jours fériés.",
  },
  {
    question: "Faut-il attendre la police avant d'appeler un serrurier ?",
    answer:
      "Appelez-moi tout de suite, mais ne touchez à rien avant d'avoir pris des photos. Si la police doit faire des relevés, je viens après son passage.",
  },
  {
    question: "Faut-il toujours changer la serrure après une effraction ?",
    answer:
      "Non. Je ne remplace que ce qui est abîmé, après un diagnostic sur place : souvent le cylindre, parfois la gâche, plus rarement la serrure entière.",
  },
  {
    question: "Une mise en sécurité provisoire suffit-elle ?",
    answer:
      "Parfois, si la porte ferme encore de façon fiable : elle laisse le temps de choisir une solution durable. Si la porte ne ferme plus correctement, je fais la réparation tout de suite.",
  },
  {
    question: "Donnez-vous un prix avant d'intervenir, même en urgence ?",
    answer:
      "Oui, toujours. Le prix est annoncé et validé avant que je commence, même en pleine nuit.",
  },
  {
    question: "Mon assurance prend-elle en charge l'intervention ?",
    answer:
      "Souvent, sous réserve du dépôt de plainte et des conditions de votre contrat. Je vous remets une facture détaillée qui décrit les dégâts et les réparations, pour votre déclaration.",
  },
  {
    question: "Je ne suis pas sur place : puis-je voir ce qui a été fait ?",
    answer:
      "Oui. Sur demande, je vous envoie une courte vidéo avant/après par WhatsApp ou par e-mail.",
  },
];

export default async function MiseEnSecuriteApresEffractionNicePage() {
  const experienceYears = new Date().getFullYear() - business.professionSinceYear;
  const { rating, count } = await getGoogleReviews();

  const heroTrustNote = (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-navy">
      <span className="inline-flex items-center gap-1.5 font-semibold">
        <StarIcon className="w-4 h-4 text-amber-400" />
        {formatRating(rating, "fr")}/5 sur {count} avis Google
      </span>
      <span className="text-navy/30" aria-hidden="true">·</span>
      <span>{experienceYears} ans d&apos;expérience à Nice</span>
      <span className="text-navy/30" aria-hidden="true">·</span>
      <span>RC Pro {business.insurance.provider} &amp; garantie décennale</span>
    </div>
  );

  return (
    <ServicePageTemplate
      h1="Mise en sécurité après effraction à Nice, 24h/24"
      lead="Après un cambriolage ou une tentative d'effraction, la priorité est de pouvoir refermer chez vous le soir même. J'arrive en 30 minutes partout à Nice, de jour comme de nuit, je sécurise la porte, et je vous remets une facture détaillée pour votre assurance. Le prix vous est annoncé avant que je commence."
      hideProcessSteps
      sections={sections}
      faq={faq}
      breadcrumbLabel="Mise en sécurité après effraction"
      path="/mise-en-securite-apres-effraction-nice/"
      image={{
        src: "/images/serrurier-nice-securite-apres-effraction.webp",
        alt: "Mise en sécurité après effraction Nice",
      }}
      headingScale="lg"
      heroTrustNote={heroTrustNote}
      extra={
        <>
          <ServiceReviewsLive path="/mise-en-securite-apres-effraction-nice/" />
          <div className="mx-auto max-w-4xl px-4 py-10">
            <QuoteBlock locale="fr" />
          </div>
        </>
      }
    />
  );
}
