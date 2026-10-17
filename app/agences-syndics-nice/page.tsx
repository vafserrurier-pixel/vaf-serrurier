import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import TrustBadges from "@/components/TrustBadges";
import ArticleTable from "@/components/ArticleTable";
import { HandshakeIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/agences-syndics-nice/",
  title: "Serrurier syndic, agence et conciergerie à Nice : 24h/24",
  description:
    "Serrurier pour syndics, agences immobilières et conciergeries à Nice : cylindres entre locataires, portes de hall, organigramme de clés. 30 min, facture pro.",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";

const sections = [
  {
    heading: "Ce que je fais pour vous",
    paragraphs: [],
    extra: (
      <ArticleTable
        headers={["Vous êtes", "Ce que je fais le plus souvent"]}
        rows={[
          [
            "Agence de gestion locative",
            <>
              Changement de cylindre entre deux locataires, remise de clés neuves au nouvel entrant, dépannage dans un
              logement vacant ou occupé,{" "}
              <Link href="/mise-en-securite-apres-effraction-nice/" className={linkClass}>
                mise en sécurité
              </Link>{" "}
              après un départ difficile ou une perte de clés
            </>,
          ],
          [
            "Syndic de copropriété",
            "Cylindre de la porte de hall, entretien des ferme-portes et des gâches, accès des locaux techniques, des caves et du parking, organigramme de clés, audit de l'immeuble avec devis détaillé",
          ],
          [
            "Conciergerie, location courte durée",
            <>
              Ouverture quand un voyageur est enfermé dehors, souvent le soir,{" "}
              <Link href="/changement-serrure-nice/" className={linkClass}>
                changement de cylindre
              </Link>{" "}
              quand un jeu de clés n&apos;est pas rendu
            </>,
          ],
        ]}
      />
    ),
  },
  {
    heading: "Mes tarifs pour les professionnels",
    paragraphs: [],
    extra: (
      <>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">Dépannages</strong> (ouverture, clé cassée, cylindre) : aux prix affichés sur{" "}
            <Link href="/tarifs-serrurier-nice/" className={linkClass}>
              ma page tarifs
            </Link>
            , les mêmes que pour un particulier. Par exemple 149 € TTC en journée pour une ouverture, et un changement
            de cylindre dès 249 € TTC posé.
          </li>
          <li>
            <strong className="text-navy">Audit, entretien et travaux sur devis</strong> : 60 € HT de l&apos;heure de
            main-d&apos;œuvre, déplacement compris. Les pièces remplacées s&apos;ajoutent, toujours annoncées avant.
          </li>
          <li>
            <strong className="text-navy">Volume régulier</strong> : si vous m&apos;appelez souvent, on discute d&apos;un
            tarif adapté à votre fréquence de demandes.
          </li>
        </ul>
        <p className={pClass}>Les modalités de paiement se fixent avec vous au premier échange.</p>
      </>
    ),
  },
  {
    heading: "Organigramme de clés : chacun ouvre ce qui le concerne",
    paragraphs: [
      "Dans une copropriété, beaucoup de clés circulent : habitants, gardien, entreprise de ménage, prestataires. Avec un organigramme de clés, le syndic garde un passe général qui ouvre toutes les parties communes, et chacun reçoit une clé limitée à ce dont il a besoin : le hall et son appartement pour un habitant, le local poubelles pour l'entreprise de ménage, la chaufferie pour le chauffagiste.",
      "Le bon moment pour le mettre en place, c'est quand le cylindre du hall doit être changé. Je fais l'inventaire des portes, je propose le plan des accès, puis je pose les cylindres et je remets les clés avec la liste de qui ouvre quoi.",
      <>
        Pour savoir qui décide et qui paie dans un immeuble, voir mon guide : clés de hall, organigramme,{" "}
        <Link href="/blog/digicode-cles-hall-copropriete-nice/" className={linkClass}>
          qui décide en copropriété
        </Link>
        .
      </>,
    ],
  },
  {
    heading: "Logement vacant, propriétaire absent : vous suivez tout à distance",
    paragraphs: [
      "Quand personne n'est sur place, je vous envoie sur demande une courte vidéo avant/après par WhatsApp ou par e-mail, avec la facture. Les clés neuves sont remises à l'agence, à la conciergerie ou à la personne que vous m'indiquez.",
      <>
        Entre deux baux, la question de qui paie revient souvent entre bailleur et locataire : je l&apos;explique dans
        mon article{" "}
        <Link href="/blog/qui-paie-changement-serrure-location-nice/" className={linkClass}>
          qui paie le changement de serrure en location
        </Link>
        .
      </>,
    ],
  },
  {
    heading: "Factures : ce que votre comptabilité attend",
    paragraphs: [
      "Chaque intervention donne lieu à une facture détaillée, au nom que vous m'indiquez : nature des travaux, pièces posées, montants HT et TTC, adresse du logement ou de l'immeuble. Après une effraction, la facture décrit aussi les dégâts constatés, pour le dossier d'assurance.",
      <>
        La facturation électronique entre entreprises devient obligatoire en France : toutes les entreprises doivent
        pouvoir recevoir des factures électroniques depuis le 1er septembre 2026, et les petites entreprises comme la
        mienne devront les émettre à partir du 1er septembre 2027. Je suis prêt pour ce changement. Le détail est sur le{" "}
        <a
          href="https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises"
          target="_blank"
          rel="noopener"
          className={linkClass}
        >
          calendrier officiel de la facturation électronique
        </a>
        .
      </>,
    ],
  },
  {
    heading: "Comment on commence",
    paragraphs: [
      "Pas de contrat ni de convention à signer. Vous m'appelez, on parle de votre parc et de vos besoins habituels, et vous pouvez m'envoyer une première demande le jour même. Vous pouvez aussi m'appeler seulement en secours, quand votre prestataire habituel ne répond pas.",
    ],
  },
  {
    heading: "Exemple type",
    paragraphs: [
      "Exemple type, une situation fréquente et non un client précis : un lundi, une agence fait l'état des lieux de sortie d'un appartement à 10 heures, et le nouveau locataire arrive à 14 heures. Un des jeux de clés n'a pas été rendu. Je passe entre les deux rendez-vous et je fais le changement de cylindre : 249 € TTC posé, déplacement compris. Les clés neuves sont remises à l'agence, et la facture part au nom du propriétaire bailleur.",
    ],
  },
];

const faq = [
  {
    question: "Travaillez-vous déjà avec des agences immobilières à Nice ?",
    answer: "Oui, avec deux agences, pour tous leurs besoins en serrurerie sur leur parc locatif.",
  },
  {
    question: "Intervenez-vous pour les syndics de copropriété ?",
    answer:
      "Oui : porte de hall, ferme-portes, gâches, accès des locaux techniques et du parking, organigramme de clés, et audit de l'immeuble avec un devis détaillé poste par poste.",
  },
  {
    question: "Travaillez-vous avec les conciergeries ?",
    answer:
      "Oui. J'interviens quand un voyageur est enfermé dehors, souvent le soir, et je change le cylindre quand un jeu de clés n'est pas rendu.",
  },
  {
    question: "Combien coûte une intervention pour un professionnel ?",
    answer:
      "Les dépannages sont aux prix affichés, comme pour un particulier : 149 € TTC en journée pour une ouverture. L'audit, l'entretien et les travaux sur devis sont à 60 € HT de l'heure, déplacement compris, pièces en plus annoncées avant.",
  },
  {
    question: "Proposez-vous un tarif selon le volume ?",
    answer: "Oui. Si vous m'appelez régulièrement, on discute d'un tarif adapté à la fréquence de vos demandes.",
  },
  {
    question: "En combien de temps intervenez-vous en urgence ?",
    answer:
      "En 30 minutes, 24h/24 et 7j/7, à Nice et dans les communes voisines, pour un logement occupé comme pour un logement vacant.",
  },
  {
    question: "Faut-il signer un contrat pour travailler avec vous ?",
    answer:
      "Non. On se met d'accord par téléphone sur le fonctionnement et les modalités de paiement, et vous pouvez m'appeler dès le premier jour.",
  },
  {
    question: "Puis-je vous appeler seulement en secours ?",
    answer: "Oui, sans engagement : quand votre prestataire habituel ne répond pas, vous m'appelez.",
  },
];

export default function AgencesSyndicsNicePage() {
  return (
    <ServicePageTemplate
      h1="Serrurier pour syndics, agences immobilières et conciergeries à Nice"
      lead="Je travaille déjà avec deux agences immobilières à Nice, sur tous leurs besoins en serrurerie. Je propose le même service aux syndics de copropriété et aux conciergeries : un seul interlocuteur, joignable 24h/24, sur place en 30 minutes en urgence, et une facture détaillée pour chaque intervention. Pas de standard, pas de sous-traitant : c'est moi qui décroche et moi qui viens."
      preTitleBadge={
        <span className="inline-flex items-center gap-1.5 bg-steel/10 text-steel text-xs font-semibold px-3 py-1 rounded-full">
          <HandshakeIcon className="w-3.5 h-3.5" />
          Offre professionnelle : syndics & agences
        </span>
      }
      hideProcessSteps
      heroTrustNote={<TrustBadges locale="fr" />}
      reviewsBeforeFaq
      sections={sections}
      faq={faq}
      breadcrumbLabel="Agences & syndics"
      path="/agences-syndics-nice/"
      image={{
        src: "/images/agences-syndics-remise-de-cles.webp",
        alt: "Serrurier agences et syndics Nice",
      }}
    />
  );
}
