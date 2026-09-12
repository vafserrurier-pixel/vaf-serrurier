import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import InsuranceBanner from "@/components/InsuranceBanner";
import ServiceGuideSection from "@/components/ServiceGuideSection";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import { buildMetadata } from "@/lib/metadata";

const guideToc = [
  { id: "diagnostic-technique", label: "Ce que j'inspecte précisément sur place" },
  { id: "provisoire-ou-definitif", label: "Provisoire ou définitif : les critères qui tranchent" },
  { id: "renforcer", label: "Renforcer plutôt que remplacer à l'identique" },
  { id: "facture", label: "Ce que contient la facture pour votre assurance" },
  { id: "faq", label: "Questions complémentaires" },
];

const guideFaq = [
  {
    question: "Le bâti est marqué mais tient encore : faut-il le changer ?",
    answer:
      "Pas systématiquement. Si le bois n'est pas fendu en profondeur et que le point d'ancrage retrouve sa tenue après réparation, un renforcement ciblé suffit souvent. Je ne remplace que ce qui a réellement perdu sa fonction de résistance.",
  },
  {
    question: "Une gâche arrachée se répare-t-elle ou se remplace-t-elle toujours ?",
    answer:
      "Cela dépend des dégâts sur le bois ou le métal environnant. Une gâche renforcée bien fixée sur un support sain suffit dans une partie des cas ; un support trop abîmé impose un remplacement complet de la zone.",
  },
  {
    question: "Dois-je attendre le passage de l'assurance avant de faire réparer ?",
    answer:
      "Non, la sécurisation ne doit pas attendre : c'est justement l'objet de mon intervention en urgence. La facture détaillée que je fournis sert ensuite de justificatif pour votre déclaration de sinistre.",
  },
  {
    question: "Un simple remplacement de cylindre suffit-il après une tentative ratée ?",
    answer:
      "Souvent oui si la tentative n'a pas dépassé le cylindre : je vérifie l'état de la gâche et du bâti avant de confirmer que rien d'autre n'a été fragilisé.",
  },
];

const guideContent = (
  <>
    <p className="text-slate leading-relaxed">
      Ce guide détaille le volet technique de mon intervention : le diagnostic
      précis et les critères de décision entre réparation et remplacement.
      Pour les démarches administratives (plainte, assurance, syndic), voir
      mon article{" "}
      <Link href="/blog/que-faire-apres-cambriolage-nice/" className="text-steel underline">
        que faire après un cambriolage
      </Link>
      .
    </p>

    <div>
      <ArticleSectionHeading number={1} id="diagnostic-technique" level="h3">
        Ce que j&apos;inspecte précisément sur place
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Au-delà du cylindre, souvent le plus visiblement endommagé, je
        contrôle l&apos;état du bâti autour de la gâche (bois fendu ou
        simplement marqué), le jeu de la porte sur ses paumelles après le
        choc, et la solidité des points d&apos;ancrage. Une tentative qui
        échoue au niveau du cylindre laisse parfois des dégâts moins visibles
        mais bien réels sur le bâti, qu&apos;il faut vérifier avant de
        refermer le dossier.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={2} id="provisoire-ou-definitif" level="h3">
        Provisoire ou définitif : les critères qui tranchent
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Un blocage temporaire se justifie quand la porte reste fonctionnelle
        mais que la solution durable demande réflexion (choix du niveau de
        sécurité, disponibilité d&apos;un modèle précis). Une intervention
        définitive immédiate s&apos;impose quand la porte ne ferme plus de
        façon fiable : dans ce cas, rester en mode provisoire prolonge
        inutilement le risque de récidive.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={3} id="renforcer" level="h3">
        Renforcer plutôt que remplacer à l&apos;identique
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Une effraction est souvent l&apos;occasion de monter en niveau plutôt
        que de reproduire une installation qui vient de céder. Selon l&apos;état
        du bâti, cela peut passer par un cylindre certifié{" "}
        <Link href="/blog/certification-a2p-serrure-nice/" className="text-steel underline">
          A2P
        </Link>{" "}
        et une serrure au bon niveau de points (le détail des critères est
        sur ma page{" "}
        <Link href="/changement-serrure-nice/" className="text-steel underline">
          changement de serrure
        </Link>
        ), ou par un blindage complet si le bâti a été fragilisé au point de
        justifier une solution plus complète (voir{" "}
        <Link href="/installation-porte-blindee-nice/" className="text-steel underline">
          installation de porte blindée
        </Link>
        ).
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={4} id="facture" level="h3">
        Ce que contient la facture pour votre assurance
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        La facture détaillée que je fournis décrit la nature des dégâts
        constatés (cylindre, gâche, bâti) et les réparations effectuées, avec
        le niveau de certification posé si une nouvelle serrure ou porte a
        été installée. C&apos;est le document généralement demandé par
        l&apos;assureur en complément de votre déclaration de sinistre.
      </p>
    </div>
  </>
);

export const metadata: Metadata = buildMetadata({
  path: "/mise-en-securite-apres-effraction-nice/",
  title: "Serrurier après cambriolage à Nice 24h/24 | VAF",
  description: "Cambriolage ou tentative d'effraction à Nice ? Je sécurise votre porte immédiatement, puis je propose une solution durable. Devis annoncé avant travaux.",
});

const sections = [
  {
    heading: "Ma priorité : fermer, sécuriser, puis proposer une solution durable",
    paragraphs: [
      "Découvrir sa porte forcée est toujours un choc, en plus d'être une vraie faille de sécurité tant qu'elle reste dans cet état. J'interviens 24h/24 après une intrusion, y compris la nuit, car chaque heure sans fermeture fiable est un risque de récidive. Je commence toujours par évaluer les dégâts réels (cylindre endommagé, serrure tordue, bâti marqué, gâche arrachée). Je propose ensuite un devis transparent, même en pleine urgence.",
    ],
  },
  {
    heading: "Ce que je vérifie systématiquement sur place",
    paragraphs: [
      "Le remplacement du cylindre, l'ajustement d'une porte voilée par le choc, et la vérification complète de la gâche font partie du diagnostic que je mène à chaque intervention. Je préfère régler le vrai problème : un bâti fragilisé, un point d'ancrage arraché. Une réparation rapide qui masque le symptôme ne tiendra pas à la prochaine tentative.",
    ],
  },
  {
    heading: "Mise en sécurité provisoire ou solution définitive",
    paragraphs: [
      "Selon l'ampleur des dégâts, une mise en sécurité provisoire (blocage temporaire, remplacement partiel) peut suffire dans un premier temps. Cela laisse le temps de planifier une solution durable dans de bonnes conditions, plutôt que dans la précipitation. Cette solution durable peut prendre la forme d'un remplacement de serrure, d'un renforcement des points d'ancrage, voire d'un blindage complet si l'état de la porte le justifie.",
    ],
  },
  {
    heading: "Pour les démarches avec votre assurance",
    paragraphs: [
      "Après une effraction, votre assureur vous demandera généralement un justificatif d'intervention. Je peux vous fournir une facture détaillée mentionnant la nature des dégâts constatés et les réparations effectuées, un document généralement demandé pour la déclaration de sinistre.",
    ],
  },
  {
    heading: "Les cambriolages à Nice, une réalité à prendre au sérieux",
    paragraphs: [
      "Selon les chiffres du ministère de l'Intérieur publiés en mars 2026, le taux de cambriolages à Nice est remonté à 0,61% des logements en 2025, contre 0,54% l'année précédente. Ce niveau est désormais supérieur à la moyenne nationale (0,56%), et bien au-dessus de la moyenne du département des Alpes-Maritimes (0,43%). Une porte correctement équipée reste le moyen le plus direct de limiter ce risque. La plupart des tentatives d'effraction s'arrêtent devant une serrure qui résiste plus de quelques minutes.",
    ],
  },
];

const faq = [
  {
    question: "Intervenez-vous en urgence après une effraction à Nice ?",
    answer:
      "Oui, selon ma disponibilité, j'interviens 24h/24 et 7j/7 pour sécuriser votre porte le plus vite possible après une effraction, y compris la nuit et le week-end.",
  },
  {
    question: "Une mise en sécurité provisoire suffit-elle après un cambriolage ?",
    answer:
      "Parfois oui, en attendant de planifier une solution durable dans de bonnes conditions plutôt que dans l'urgence de l'instant. Je vous conseille selon l'état réel de votre porte.",
  },
  {
    question: "Faut-il toujours changer la serrure après une effraction ?",
    answer:
      "Non, cela dépend de l'état réel du cylindre et du mécanisme. Je ne remplace que ce qui est nécessaire, après un diagnostic précis sur place.",
  },
  {
    question: "Donnez-vous un devis avant d'intervenir après une effraction ?",
    answer:
      "Oui, toujours. Le prix est annoncé puis validé avant que je commence les travaux, même en pleine urgence de nuit.",
  },
  {
    question: "Puis-je renforcer ma porte avec un blindage après une effraction ?",
    answer:
      "Oui, selon l'état de votre porte et de votre bâti. Je peux vous orienter vers un blindage si la porte le permet, une fois la mise en sécurité immédiate effectuée.",
  },
  {
    question: "Mon assurance habitation prend-elle en charge l'intervention ?",
    answer:
      "Dans la majorité des cas, oui, sous réserve du dépôt de plainte et des conditions de votre contrat. Je vous fournis une facture détaillée pour appuyer votre déclaration de sinistre.",
  },
  {
    question: "Je ne suis pas sur place (propriétaire absent, syndic, gestionnaire) : puis-je voir ce qui a été fait ?",
    answer:
      "Oui, sur simple demande je vous transmets une courte vidéo de l'intervention (avant/après) par WhatsApp ou email, utile si vous n'êtes pas présent au moment des travaux.",
  },
];

export default function MiseEnSecuriteApresEffractionNicePage() {
  return (
    <ServicePageTemplate
      h1="Serrurier après cambriolage ou effraction à Nice"
      lead="Après un cambriolage ou une tentative d'effraction, la priorité c'est de fermer et sécuriser immédiatement, puis remettre une solution durable. J'interviens 24h/24, devis annoncé avant chaque intervention."
      sections={sections}
      faq={faq}
      breadcrumbLabel="Mise en sécurité après effraction"
      path="/mise-en-securite-apres-effraction-nice/"
      image={{
        src: "/images/serrurier-nice-securite-apres-effraction.webp",
        alt: "Cylindre de serrure percé après une tentative d'effraction à Nice",
      }}
      extra={
        <>
          <section className="mx-auto max-w-4xl px-4 -mt-6">
            <p className="text-xs text-slate">
              Source :{" "}
              <a
                href="https://www.interieur.gouv.fr/Interstats/Infractions-et-sentiment-d-insecurite/Cambriolages"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-steel"
              >
                Ministère de l&apos;Intérieur : statistiques officielles des cambriolages
              </a>
            </p>
          </section>
          <section className="mx-auto max-w-4xl px-4 py-10">
            <InsuranceBanner />
          </section>
        </>
      }
      processSteps={[
        {
          title: "Appel",
          text: "Vous me décrivez les dégâts constatés après l'effraction, et j'identifie l'urgence réelle de l'intervention dès le téléphone.",
        },
        {
          title: "Délai d'arrivée",
          text: "Je vous annonce un prix et un délai réaliste selon votre secteur et l'heure (généralement 15 à 30 minutes à Nice), et je vous préviens si la situation évolue en route.",
        },
        {
          title: "Évaluation des dégâts",
          text: "J'évalue l'ampleur des dégâts (cylindre arraché, bâti fissuré, gâche endommagée) pour proposer une mise en sécurité immédiate adaptée.",
        },
        {
          title: "Règlement",
          text: "Le prix confirmé sur place est celui que vous payez, facture détaillée utile pour votre déclaration de sinistre.",
        },
      ]}
      relatedArticle={{
        href: "/blog/que-faire-apres-cambriolage-nice/",
        label: "Que faire après un cambriolage : les bons réflexes",
      }}
      guide={
        <ServiceGuideSection readingMinutes={5} toc={guideToc} faq={guideFaq}>
          {guideContent}
        </ServiceGuideSection>
      }
      guideFaqForSchema={guideFaq}
      relatedServices={[
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
        { href: "/agences-syndics-nice/", label: "Agences & syndics" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}
