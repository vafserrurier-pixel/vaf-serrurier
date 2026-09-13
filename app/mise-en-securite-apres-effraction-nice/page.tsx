import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import InsuranceBanner from "@/components/InsuranceBanner";
import ServiceGuideSection from "@/components/ServiceGuideSection";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import { AlertLockIcon, WrenchIcon, ClockIcon, HandshakeIcon, BoltIcon, ShieldIcon } from "@/components/Icons";
import { fallbackReviews } from "@/lib/reviews";
import { buildMetadata } from "@/lib/metadata";

const troisEtapes = [
  {
    Icon: <AlertLockIcon className="w-5 h-5" />,
    title: "1. Mise en sécurité",
    text: "L'urgence : rétablir une fermeture qui protège vraiment, le jour même. C'est ce qui doit se passer avant tout le reste.",
  },
  {
    Icon: <WrenchIcon className="w-5 h-5" />,
    title: "2. Réparation définitive",
    text: "Une fois l'urgence passée, je remets l'installation dans un état durable, pas juste fonctionnel dans l'instant.",
  },
  {
    Icon: <ShieldIcon className="w-5 h-5" />,
    title: "3. Renforcement",
    text: "Une montée en gamme volontaire (niveau A2P, points supplémentaires...), intégrée à la réparation définitive plutôt qu'une étape à part.",
  },
];

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

    <div className="bg-steel/10 border border-navy/10 rounded-2xl p-6">
      <p className="font-heading font-bold text-navy mb-4">
        Trois étapes bien distinctes, souvent confondues
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {troisEtapes.map(({ Icon, title, text }) => (
          <div key={title} className="flex flex-col gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white text-steel shrink-0 shadow-sm">
              {Icon}
            </span>
            <p className="font-heading font-semibold text-navy text-sm">{title}</p>
            <p className="text-sm text-slate leading-snug">{text}</p>
          </div>
        ))}
      </div>
    </div>

    <div>
      <ArticleSectionHeading number={1} id="diagnostic-technique" level="h3" size="lg" numberStyle="plain">
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
      <p className="text-slate leading-relaxed mt-3">
        Sur certains modèles haut de gamme, un mécanisme de sécurité interne
        (parfois appelé « pare-attaque ») peut aussi s&apos;être enclenché
        pendant la tentative : il bloque volontairement le pêne pour protéger
        le cylindre d&apos;une attaque, y compris avec la bonne clé. Ce
        blocage nécessite une intervention spécifique pour être réarmé
        proprement, sans abîmer davantage le mécanisme.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={2} id="provisoire-ou-definitif" level="h3" size="lg" numberStyle="plain">
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
      <p className="text-slate leading-relaxed mt-3">
        Une nuance importante selon ce qui a été touché : un remplacement de
        cylindre suite à une simple perte ou un vol de clé, sans dégât
        physique sur la porte, restaure immédiatement votre niveau de
        sécurité d&apos;origine. En revanche, si le bâti, la gâche ou le
        dormant ont été abîmés pendant la tentative, la porte peut refermer
        normalement sans que sa résistance réelle soit retrouvée : c&apos;est
        seulement une fois ces éléments réparés que la sécurité initiale est
        pleinement rétablie, pas simplement quand la porte se referme.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={3} id="renforcer" level="h3" size="lg" numberStyle="plain">
        Renforcer plutôt que remplacer à l&apos;identique
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Une effraction est souvent l&apos;occasion de monter en niveau plutôt
        que de reproduire une installation qui vient de céder. Je vous
        présente les options par ordre de pertinence habituelle, mais la
        recommandation dépend toujours du diagnostic réel de votre porte, pas
        d&apos;un ordre appliqué systématiquement :
      </p>
      <ol className="list-decimal pl-5 flex flex-col gap-2.5 text-slate leading-relaxed mt-3">
        <li>
          <strong className="text-navy">
            <Link href="/poignee-blindee-nice/" className="text-steel underline">
              Poignée blindée
            </Link>{" "}
            (349 € TTC)
          </strong>{" "}
          — masque et protège le cylindre, un premier effet dissuasif visible dès le palier.
        </li>
        <li>
          <strong className="text-navy">Cornières anti-pince</strong> — profilés métalliques fixés
          côté serrure qui recouvrent l&apos;interstice entre la porte et le dormant, empêchant
          d&apos;y glisser un levier (pied-de-biche, tournevis long) pour écarter la porte et faire
          sauter le pêne.
        </li>
        <li>
          <strong className="text-navy">Cylindre certifié{" "}
            <Link href="/blog/certification-a2p-serrure-nice/" className="text-steel underline">
              A2P
            </Link>
          </strong>{" "}
          — résistance mécanique renforcée face au perçage, au crochetage et à la casse.
        </li>
        <li>
          <strong className="text-navy">Serrure au bon niveau de points</strong> selon votre porte
          (le détail des critères est sur ma page{" "}
          <Link href="/changement-serrure-nice/" className="text-steel underline">
            changement de serrure
          </Link>
          ).
        </li>
        <li>
          <strong className="text-navy">Blindage complet</strong> si le bâti a été fragilisé au
          point de justifier une solution plus complète (voir{" "}
          <Link href="/installation-porte-blindee-nice/" className="text-steel underline">
            installation de porte blindée
          </Link>
          ).
        </li>
      </ol>
      <div className="bg-steel/10 border border-navy/10 rounded-xl p-5 mt-4">
        <p className="font-heading font-semibold text-navy text-sm mb-1.5">
          Un duo souvent pertinent : poignée blindée + cornières anti-pince
        </p>
        <p className="text-slate text-sm leading-relaxed">
          Ensemble, ces deux renforcements couvrent les deux vecteurs
          d&apos;effraction les plus fréquents sur une porte standard :
          l&apos;attaque directe du cylindre, et l&apos;arrachement au levier
          entre porte et dormant. C&apos;est souvent le meilleur rapport
          protection/investissement avant d&apos;envisager un blindage
          complet — mais encore une fois, à confirmer selon l&apos;état réel
          de votre porte, pas de façon systématique.
        </p>
      </div>
      <p className="text-slate leading-relaxed mt-4">
        Une option complémentaire, moins structurelle mais utile au
        quotidien : le{" "}
        <a
          href="https://www.heracles.fr/heracles-micro-viseur-hispy-2_SKUM83697.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          judas optique numérique
        </a>{" "}
        remplace l&apos;œilleton classique par un petit écran : vous voyez
        qui sonne sans avoir à entrouvrir la porte, un vrai plus après une
        effraction pour reprendre confiance, ou simplement pour les
        personnes qui reçoivent des visites à des horaires atypiques. Je
        peux l&apos;installer en complément de vos autres renforcements.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={4} id="facture" level="h3" size="lg" numberStyle="plain">
        Ce que contient la facture pour votre assurance
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Le circuit est toujours le même, dans cet ordre :
      </p>
      <ol className="list-decimal pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mt-2">
        <li>Devis annoncé avant toute intervention, même en pleine urgence.</li>
        <li>Intervention de mise en sécurité, puis réparation ou renforcement selon le diagnostic.</li>
        <li>
          Facture détaillée décrivant la nature des dégâts constatés (cylindre, gâche, bâti) et les
          réparations effectuées, avec le niveau de certification posé si une nouvelle serrure ou
          porte a été installée. Cette description factuelle aide votre assureur à qualifier la
          cause du sinistre (effraction, tentative, vétusté...), une qualification qui conditionne
          souvent la prise en charge.
        </li>
        <li>Je vous transmets cette facture, avec une vidéo de l&apos;intervention sur simple demande.</li>
        <li>Vous la joignez à votre déclaration de sinistre auprès de votre assureur.</li>
      </ol>
      <p className="text-slate leading-relaxed mt-3">
        Cette facture porte mon SIRET : j&apos;y engage ma responsabilité
        professionnelle sur les faits constatés, sans me prononcer sur la
        décision de prise en charge elle-même, qui reste celle de votre
        assureur.
      </p>
      <p className="text-slate leading-relaxed mt-3">
        Je ne vous annonce volontairement aucun plafond de remboursement ni
        aucun montant de franchise : ces éléments dépendent entièrement de
        votre contrat (niveau de garantie, franchise applicable), et
        annoncer un chiffre générique serait trompeur, quelle que soit la
        bonne intention derrière. La seule donnée réelle que je peux
        confirmer : les assurances prennent généralement en charge le
        déplacement et la main d&apos;œuvre, sous réserve des conditions de
        votre contrat. Pour le reste, votre assureur reste le seul
        interlocuteur fiable.
      </p>
    </div>
  </>
);

export const metadata: Metadata = buildMetadata({
  path: "/mise-en-securite-apres-effraction-nice/",
  title: "Mise en sécurité après effraction à Nice 24h/24 | VAF",
  description: "Cambriolage ou tentative d'effraction à Nice ? Je sécurise votre porte immédiatement, puis je propose une réparation définitive. Devis annoncé avant travaux.",
});

const sections = [
  {
    heading: "Ma priorité : fermer, sécuriser, puis proposer une solution durable",
    Icon: <AlertLockIcon className="w-4 h-4" />,
    paragraphs: [
      "Découvrir sa porte forcée est toujours un choc, en plus d'être une vraie faille de sécurité tant qu'elle reste dans cet état. J'interviens 24h/24 après une intrusion, y compris la nuit, car chaque heure sans fermeture fiable est un risque de récidive. Je commence toujours par évaluer les dégâts réels (cylindre endommagé, serrure tordue, bâti marqué, gâche arrachée). Je propose ensuite un devis transparent, même en pleine urgence.",
    ],
  },
  {
    heading: "Ce que je vérifie systématiquement sur place",
    Icon: <WrenchIcon className="w-4 h-4" />,
    paragraphs: [
      "Le remplacement du cylindre, l'ajustement d'une porte voilée par le choc, et la vérification complète de la gâche font partie du diagnostic que je mène à chaque intervention. Je préfère régler le vrai problème : un bâti fragilisé, un point d'ancrage arraché. Une réparation rapide qui masque le symptôme ne tiendra pas à la prochaine tentative.",
    ],
  },
  {
    heading: "Mise en sécurité provisoire ou solution définitive",
    Icon: <ClockIcon className="w-4 h-4" />,
    paragraphs: [
      "Selon l'ampleur des dégâts, une mise en sécurité provisoire (blocage temporaire, remplacement partiel) peut suffire dans un premier temps. Cela laisse le temps de planifier une solution durable dans de bonnes conditions, plutôt que dans la précipitation. Cette solution durable peut prendre la forme d'un remplacement de serrure, d'un renforcement des points d'ancrage, voire d'un blindage complet si l'état de la porte le justifie.",
    ],
  },
  {
    heading: "Pour les démarches avec votre assurance",
    Icon: <HandshakeIcon className="w-4 h-4" />,
    paragraphs: [
      "Après une effraction, votre assureur vous demandera généralement un justificatif d'intervention. Je vous fournis une facture détaillée mentionnant la nature des dégâts constatés et les réparations effectuées. Je ne vous annoncerai jamais de plafond de remboursement générique : cela dépend entièrement de votre contrat, et un chiffre standard serait trompeur. Ce que je peux confirmer : le déplacement et la main d'œuvre sont généralement pris en charge, sous réserve de vos conditions de contrat.",
    ],
  },
  {
    heading: "Les cambriolages à Nice, une réalité à prendre au sérieux",
    Icon: <BoltIcon className="w-4 h-4" />,
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
    question: "Quelle différence entre mise en sécurité, réparation définitive et renforcement ?",
    answer:
      "Trois choses distinctes, souvent confondues. La mise en sécurité, c'est l'urgence : rétablir une fermeture qui protège vraiment, le jour même. La réparation définitive remet l'installation dans un état durable, une fois l'urgence passée. Le renforcement est une montée en gamme volontaire (niveau A2P, points supplémentaires...), intégrée à la réparation définitive plutôt qu'une étape séparée.",
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
      "Généralement oui pour le déplacement et la main d'œuvre, sous réserve du dépôt de plainte et des conditions de votre contrat. Je ne peux pas vous annoncer de plafond : cela dépend entièrement de votre contrat. Je vous fournis une facture détaillée pour appuyer votre déclaration de sinistre.",
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
      h1="Mise en sécurité après effraction à Nice"
      lead="Après un cambriolage ou une tentative d'effraction, la priorité c'est de fermer et sécuriser immédiatement, puis remettre une réparation définitive. J'interviens 24h/24, devis annoncé avant chaque intervention."
      sections={sections}
      faq={faq}
      breadcrumbLabel="Mise en sécurité après effraction"
      path="/mise-en-securite-apres-effraction-nice/"
      image={{
        src: "/images/serrurier-nice-securite-apres-effraction.webp",
        alt: "Cylindre de serrure percé après une tentative d'effraction à Nice",
      }}
      sectionsVariant="cards"
      sectionsHeading="Ce qu'il faut savoir après une effraction"
      headingScale="lg"
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
          {(() => {
            const review = fallbackReviews.find((r) => r.author === "Nadia F.");
            if (!review) return null;
            return (
              <div className="mx-auto max-w-2xl px-4 pt-10">
                <div className="bg-white rounded-xl border border-navy/10 shadow-sm p-6">
                  <div className="flex gap-0.5 text-amber-400" aria-hidden="true">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3-5.4 3 1.3-6L1.3 7.7l6.1-.6L10 1.5Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-3 text-navy leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                  <p className="mt-3 text-xs text-slate">{review.author} · avis Google vérifié</p>
                </div>
              </div>
            );
          })()}
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
        <ServiceGuideSection readingMinutes={6} toc={guideToc} tocAccentColor="urgent" faq={guideFaq}>
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
        { href: "/poignee-blindee-nice/", label: "Poignée blindée" },
        { href: "/agences-syndics-nice/", label: "Agences & syndics" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}
