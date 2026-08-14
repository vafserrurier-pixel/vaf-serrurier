import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import InsuranceBanner from "@/components/InsuranceBanner";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/mis-en-securite-apres-effraction-nice/" },
  title: "Serrurier après cambriolage à Nice 24h/24 | VAF",
  description:
    "Cambriolage ou tentative d'effraction à Nice ? Je sécurise votre porte immédiatement, puis je propose une solution durable. Devis annoncé avant travaux.",
};

const sections = [
  {
    heading: "Ma priorité : fermer, sécuriser, puis proposer une solution durable",
    paragraphs: [
      "Découvrir sa porte forcée est toujours un choc, en plus d'être une vraie faille de sécurité tant qu'elle reste dans cet état. J'interviens 24h/24 après une intrusion, y compris la nuit, car chaque heure sans fermeture fiable est un risque de récidive. Je commence toujours par évaluer les dégâts réels — cylindre endommagé, serrure tordue, bâti marqué, gâche arrachée. Je propose ensuite un devis transparent, même en pleine urgence.",
    ],
  },
  {
    heading: "Ce que je vérifie systématiquement sur place",
    paragraphs: [
      "Le remplacement du cylindre, l'ajustement d'une porte voilée par le choc, et la vérification complète de la gâche font partie du diagnostic que je mène à chaque intervention. Je préfère régler le vrai problème — un bâti fragilisé, un point d'ancrage arraché. Une réparation rapide qui masque le symptôme ne tiendra pas à la prochaine tentative.",
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
];

export default function MiseEnSecuriteApresEffractionNicePage() {
  return (
    <ServicePageTemplate
      h1="Serrurier après cambriolage ou effraction à Nice"
      lead="Après un cambriolage ou une tentative d'effraction, la priorité c'est de fermer et sécuriser immédiatement, puis remettre une solution durable. J'interviens 24h/24, devis annoncé avant chaque intervention."
      sections={sections}
      faq={faq}
      breadcrumbLabel="Mise en sécurité après effraction"
      path="/mis-en-securite-apres-effraction-nice/"
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
                Ministère de l&apos;Intérieur — statistiques officielles des cambriolages
              </a>
            </p>
          </section>
          <section className="mx-auto max-w-4xl px-4 py-10">
            <InsuranceBanner />
          </section>
        </>
      }
      relatedServices={[
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}
