import type { Metadata } from "next";
import Link from "next/link";
import LocalizedServicePage from "@/components/LocalizedServicePage";
import PriceReminder from "@/components/PriceReminder";
import ArticleTable from "@/components/ArticleTable";
import { StarIcon } from "@/components/Icons";
import { business } from "@/lib/business";
import { getGoogleReviews } from "@/lib/reviews";
import { formatRating } from "@/lib/reviewFormat";
import ServiceReviewsLive from "@/components/ServiceReviewsLive";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/ouverture-de-porte-nice/",
  title: "Ouverture de porte Nice 24h/24 : claquée, clé cassée",
  description:
    "Porte claquée, fermée à clé ou clé cassée à Nice ? Sur place en 30 min, ouverture sans dégât à la feuille Mika, prix annoncé avant. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";
const olClass = "list-decimal pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";
const h3Class = "font-heading text-xl font-bold text-navy mt-6 mb-2";

const sectionsFr = [
  {
    heading: "Ce que je vous demande au téléphone",
    paragraphs: ["Deux choses, pour arriver avec le bon outil :"],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">une photo de la serrure</strong>, envoyée par WhatsApp ou SMS ;
        </li>
        <li>
          <strong className="text-navy">la marque inscrite sur la clé</strong>, si vous en avez une d&apos;origine.
          C&apos;est elle qui me dit à quelle serrure j&apos;ai affaire.
        </li>
      </ul>
    ),
  },
  {
    heading: "Les trois situations que je rencontre",
    paragraphs: [
      "Sur 10 appels pour une ouverture, 6 sont des portes claquées, 2 des portes fermées à clé et 2 des clés cassées dans la serrure.",
    ],
    extra: (
      <>
        <div className="mb-4">
          <ArticleTable
            headers={["Situation", "Ce que je fais", "Durée", "Prix en journée", "Après 19 h, week-end, jours fériés"]}
            rows={[
              ["Porte claquée (pas de tour de clé)", "Feuille Mika (radio), sans dégât", "2 à 15 minutes", "149 €", "189 €"],
              [
                "Porte fermée à clé, sans la clé",
                "Perçage du cylindre, jamais de la porte",
                "10 à 60 minutes selon le cylindre",
                "149 € + cylindre (dès 249 €)",
                "209 € + cylindre",
              ],
              [
                "Clé cassée dans la serrure",
                "Extraction du morceau avec un outil adapté, perçage en dernier recours",
                "selon le morceau resté dedans",
                "149 €",
                "189 €",
              ],
            ]}
          />
        </div>

        <h3 className={h3Class}>
          <Link href="/blog/porte-qui-claque-serrurier-nice/" className={linkClass}>
            Porte claquée
          </Link>
        </h3>
        <p className={pClass}>
          La porte s&apos;est refermée derrière vous mais personne n&apos;a donné de tour de clé : seul le pêne demi-tour
          la retient. Je glisse une feuille Mika (on dit aussi « radio »), une plaque fine et souple, entre la porte et
          le cadre pour repousser ce pêne. Ça prend de 2 à 15 minutes et la porte n&apos;est pas abîmée.
        </p>
        <p className={pClass}>
          Si au bout de 20 minutes la porte ne cède pas, je m&apos;arrête et je vous propose deux solutions, avec leur
          prix, avant de toucher à quoi que ce soit :
        </p>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">percer le cylindre</strong>, qu&apos;il faudra ensuite remplacer ;
          </li>
          <li>
            <strong className="text-navy">sur une porte en bois uniquement</strong>, faire un petit trou au niveau de la
            poignée pour l&apos;actionner de l&apos;intérieur, puis le reboucher à la pâte à bois. Le cylindre est
            conservé.
          </li>
        </ul>

        <h3 className={h3Class}>Porte fermée à clé</h3>
        <p className={pClass}>
          Quelqu&apos;un a donné un tour de clé, ou deux : la feuille Mika ne sert plus à rien. J&apos;ouvre en perçant le
          cylindre : de 10 minutes pour un cylindre courant à une heure pour un cylindre renforcé. Je ne m&apos;attaque
          jamais à la porte elle-même : la porte et son cadre restent intacts, seul le cylindre est{" "}
          <Link href="/changement-serrure-nice/" className={linkClass}>
            remplacé
          </Link>{" "}
          (à partir de 249 € TTC en plus de l&apos;ouverture, clés neuves remises sur place).
        </p>

        <h3 className={h3Class}>
          <Link href="/blog/cle-cassee-serrure-que-faire-nice/" className={linkClass}>
            Clé cassée
          </Link>{" "}
          dans la serrure
        </h3>
        <p className={pClass}>
          Le but est de sortir le morceau sans abîmer le cylindre, pour ne pas avoir à le remplacer. L&apos;extraction
          coûte 149 € TTC en journée.
        </p>
        <p className={pClass}>En attendant que j&apos;arrive :</p>
        <ul className={listClass}>
          <li>
            laissez le morceau en place et n&apos;introduisez plus rien dans la serrure, ni une autre clé, ni une pince,
            ni une aiguille : ça l&apos;enfonce davantage ;
          </li>
          <li>
            envoyez-moi une photo de l&apos;avant du cylindre, pour que je vous annonce le prix avant de partir.
          </li>
        </ul>
        <p className={pClass}>Sur place, je procède dans cet ordre :</p>
        <ol className={olClass}>
          <li>je remets le cylindre en position droite, pour libérer le morceau ;</li>
          <li>je l&apos;extrais avec un extracteur de clé ou un crochet ;</li>
          <li>
            j&apos;essaie la serrure devant vous avec une autre clé en bon état : si elle tourne bien, je la nettoie et je la graisse, et
            on s&apos;arrête là ;
          </li>
          <li>
            si le morceau ne sort pas ou si le cylindre est abîmé, je perce et je remplace le cylindre, au prix annoncé
            avant.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Serrure bloquée ou grippée",
    headingNode: (
      <>
        <Link href="/blog/serrure-bloquee-diagnostic-nice/" className={linkClass}>
          Serrure bloquée
        </Link>{" "}
        ou grippée
      </>
    ),
    paragraphs: [
      "La clé rentre dans la serrure mais refuse de tourner, ou elle force de plus en plus depuis quelques semaines. Ce n'est pas une porte claquée : le mécanisme lui-même résiste. Les causes que je trouve le plus souvent :",
    ],
    extra: (
      <>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">un cylindre encrassé ou oxydé</strong>, surtout près de la mer ;
          </li>
          <li>
            <strong className="text-navy">une gâche mal réglée</strong> : la porte s&apos;est affaissée, le pêne frotte
            contre la gâche et bloque ;
          </li>
          <li>
            <strong className="text-navy">des goupilles usées</strong> dans un cylindre ancien, ou une clé elle-même
            usée.
          </li>
        </ul>
        <p className={pClass}>
          Je commence toujours par le moins destructeur : je dégrippe et je lubrifie le cylindre (WD-40, puis graphite
          sec), et je soulage la porte pour libérer le pêne. Dans la plupart des cas, la serrure repart et je règle la
          gâche pour que ça ne recommence pas. Si le cylindre est hors d&apos;usage, je le perce et je le remplace, au
          prix annoncé avant.
        </p>
        <p className={pClass}>
          <strong className="text-navy">Ne forcez pas avec une pince sur la clé</strong> : elle finit par casser dans la
          serrure, et l&apos;intervention devient plus longue.
        </p>
      </>
    ),
  },
  {
    heading: "Porte blindée ou serrure multipoints",
    paragraphs: [
      "Une porte blindée claquée, sans tour de clé, peut souvent s'ouvrir à la feuille Mika comme une porte classique. Une fois fermée à clé, c'est différent : les points de fermeture sont sortis en haut, en bas et sur le côté, et seul le cylindre donne accès au mécanisme.",
      "J'ouvre alors en perçant le cylindre, jamais le blindage ni le cadre. Ces cylindres sont renforcés contre le perçage : comptez jusqu'à une heure. Le cylindre de remplacement dépend de la marque et du modèle de la serrure : son prix est annoncé sur devis, avant l'ouverture. Pour Fichet, Picard et Muel, voir plus bas.",
    ],
  },
  {
    heading: "Une personne enfermée à l'intérieur",
    paragraphs: [
      "Un enfant, une personne âgée, un animal, ou une plaque de cuisson restée allumée : dites-le dès le début de l'appel, ces interventions passent avant les autres. Si quelqu'un est en danger (malaise, fumée, personne qui ne répond plus), appelez d'abord les pompiers au 18 ou le 112 : ils peuvent entrer plus vite que n'importe quel serrurier.",
    ],
  },
  {
    heading: "Ce que je n'utilise pas, et pourquoi",
    paragraphs: [
      "On voit beaucoup de vidéos de crochetage. En dépannage réel, sur un cylindre de porte d'entrée verrouillé, je ne l'utilise pas : c'est long et le résultat n'est pas garanti, alors que le client attend devant sa porte.",
      "Je préfère vous annoncer clairement le perçage et le remplacement du cylindre, avec leur prix, plutôt que de vous facturer une heure d'essais.",
    ],
  },
  {
    heading: "Fichet, Picard, Muel : toujours sur devis",
    paragraphs: [
      "Ce sont des serrures chères, et le prix varie beaucoup d'un modèle à l'autre. Je ne peux donc pas donner un prix fixe : avec la photo et la marque inscrite sur la clé, je vous annonce le prix au téléphone, avant de me déplacer.",
    ],
  },
  {
    heading: "Ce que je vois souvent à Nice",
    paragraphs: [],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">Près de la mer</strong> (le port, la Promenade, le Mont Boron), l&apos;air salé
          encrasse et oxyde les cylindres : la clé force, puis finit par casser dedans.
        </li>
        <li>
          <strong className="text-navy">Dans les vieux immeubles du centre</strong> (Vieux-Nice, Libération,
          Jean-Médecin), les portes en bois ont pris du jeu : elles claquent plus facilement, et la feuille Mika passe
          bien.
        </li>
        <li>
          <strong className="text-navy">Dans les locations saisonnières</strong>, beaucoup de voyageurs claquent la
          porte en sortant avec la clé restée à l&apos;intérieur.
        </li>
      </ul>
    ),
  },
  {
    heading: "Après l'ouverture : changer le cylindre ou pas",
    paragraphs: [
      "Je ne change le cylindre que s'il est hors service ou trop vétuste. S'il fonctionne bien, je le vérifie et je le graisse, c'est tout. Vous ne repartez pas avec une pièce neuve dont vous n'aviez pas besoin.",
    ],
  },
  {
    heading: "Quand je refuse d'ouvrir",
    paragraphs: [
      "J'ouvre la porte de chez vous, pas celle d'un autre. Avec l'expérience, certains signes ne trompent pas, et dans ces cas je refuse :",
    ],
    extra: (
      <>
        <ul className={listClass}>
          <li>la serrure porte des traces d&apos;une tentative d&apos;ouverture ;</li>
          <li>la personne hésite quand je lui demande l&apos;adresse ;</li>
          <li>l&apos;appel vient d&apos;un numéro masqué et la personne veut payer en espèces, sans facture.</li>
        </ul>
        <p className={pClass}>
          Si j&apos;ai un doute, je vous demande un justificatif de domicile : une facture, le bail ou une pièce
          d&apos;identité à cette adresse. Sinon, je ne vous demande rien.
        </p>
      </>
    ),
  },
  {
    heading: "Exemple type d'intervention",
    paragraphs: [
      <em key="note">
        Situation reconstituée à partir des cas les plus fréquents, pas le récit d&apos;un client réel.
      </em>,
      "Un soir vers 21 h, une locataire descend ses poubelles et la porte de son appartement claque derrière elle, clés à l'intérieur. Au téléphone, elle m'envoie une photo de la serrure : pas de tour de clé, une serrure courante. Je lui annonce 189 €, le tarif du soir, et j'arrive en moins de 30 minutes. La feuille Mika passe en quelques minutes, sans une trace sur la porte. Le cylindre tourne bien : je le graisse, je vérifie la fermeture, et elle est chez elle.",
    ],
  },
  {
    heading: "Avant d'appeler un serrurier : 4 réflexes",
    paragraphs: [
      "Les arnaques au dépannage de serrurerie sont fréquentes, à Nice comme ailleurs. Quelques réflexes suffisent à les éviter, quel que soit le serrurier que vous appelez.",
    ],
    extra: (
      <>
        <ol className={olClass}>
          <li>
            <strong className="text-navy">Demandez le prix au téléphone.</strong> Un artisan qui connaît son métier peut
            vous donner un prix dès qu&apos;il sait s&apos;il y a eu un tour de clé ou non.
          </li>
          <li>
            <strong className="text-navy">Méfiez-vous des prix d&apos;appel très bas</strong> affichés sur des annonces
            : le déplacement, la « main-d&apos;œuvre d&apos;urgence » et les pièces s&apos;ajoutent une fois la porte
            ouverte.
          </li>
          <li>
            <strong className="text-navy">Exigez un document écrit avant les travaux.</strong> Pour un dépannage à
            domicile, la loi impose un document détaillé avant tous travaux, dès le premier euro, puis une facture
            au-delà de 25 € TTC (arrêté du 24 janvier 2017). On signe avant, pas après.
          </li>
          <li>
            <strong className="text-navy">Vérifiez l&apos;entreprise.</strong> Un vrai numéro SIRET, une adresse réelle
            et des avis Google sur une fiche ancienne. Les miens : SIRET 980 385 868 00032, 2 rue Antoine Gautier à
            Nice.
          </li>
        </ol>
        <p className={pClass}>
          Vous recevez une facture détaillée. Certains contrats d&apos;assurance habitation remboursent tout ou partie
          d&apos;une ouverture de porte :{" "}
          <Link href="/blog/serrurier-agree-assurances-nice/" className={linkClass}>
            voir ce que couvre votre assurance
          </Link>
          .
        </p>
      </>
    ),
  },
];

const faqFr = [
  {
    question: "Combien coûte une ouverture de porte à Nice ?",
    answer:
      "149 € TTC en journée pour une porte claquée, déplacement compris. 189 € après 19 h, le week-end et les jours fériés. Une porte fermée à clé coûte 149 € (209 € le soir et le week-end), plus le cylindre à remplacer (à partir de 249 €).",
  },
  {
    question: "En combien de temps pouvez-vous arriver ?",
    answer: "En urgence, en 30 minutes partout à Nice, jour et nuit.",
  },
  {
    question: "Pouvez-vous ouvrir sans casser ?",
    answer:
      "Sur une porte claquée, oui : 99 % des portes claquées que j'ouvre le sont sans dégât, à la feuille Mika. Sur une porte fermée à clé, il faut percer le cylindre, mais jamais la porte.",
  },
  {
    question: "Faut-il changer la serrure après une ouverture ?",
    answer:
      "Pas forcément. Après une porte claquée, le cylindre est intact : je le vérifie et je le graisse. Après une perte ou un vol de clés, je conseille de le changer, puisque quelqu'un d'autre peut avoir vos clés.",
  },
  {
    question: "Qui paie l'ouverture quand on est locataire ?",
    schemaText:
      "En général, le locataire, puisque la perte ou l'oubli des clés vient de lui. Le détail est dans mon guide sur les locations.",
    answer: (
      <>
        En général, le locataire, puisque la perte ou l&apos;oubli des clés vient de lui. Le détail est dans{" "}
        <Link href="/blog/qui-paie-changement-serrure-location-nice/" className={linkClass}>
          mon guide sur les locations
        </Link>
        .
      </>
    ),
  },
  {
    question: "Comment peut-on payer ?",
    answer: "Par carte bancaire, en espèces ou par virement, avec une facture détaillée dans tous les cas.",
  },
];

const sectionsEn = [
  {
    heading: "A slammed door is not the same as a locked door",
    paragraphs: [
      "This is the first question I ask on the phone, because the method changes completely depending on the case. A door slammed shut (closed by the simple movement of the door itself, without turning a key) very often gets resolved with zero damage. I most often use the radio method, also called the shim or by-pass technique: a thin rigid strip slid between the frame and the bolt, which releases the mechanism without damage: 99% of slammed doors are opened with no damage. A misaligned strike plate, a slightly warped bolt or a worn handle frequently cause this kind of jam, especially on the older doors in central Nice.",
    ],
  },
  {
    heading: "Door locked with a key",
    paragraphs: [
      "This case calls for more care, depending on the type of lock installed: standard cylinder, multipoint lock, or an older model. If your keys are lost or stolen, I'll often suggest a cylinder replacement at the same time. It solves the access problem and improves security in one go, rather than cutting a new key that could still be circulating elsewhere.",
    ],
  },
  {
    heading: "Broken key or jammed lock",
    paragraphs: [
      "I cleanly extract the piece of key left inside the cylinder, using a proper extraction tool, without forcing or damaging the mechanism. Drilling the cylinder stays a last-resort solution, only if no other method works. A jammed lock can also come from a cylinder stiffened by humidity or a door rubbing against its frame. Either way, a preventive callout is almost always cheaper than a night-time repair on a weekend.",
    ],
  },
  {
    heading: "Locked security door",
    paragraphs: [
      "I adapt my method without ever compromising on the quality of the opening, and without forcing a security door that's specifically built to resist. The goal stays the same: stay clean, respect the structure of the building, and avoid turning an opening into a heavy repair job.",
    ],
  },
  {
    heading: "ID is always required",
    paragraphs: [
      <>
        Before opening a locked door, I verify your identity and your right to
        occupy the property: an ID card plus a document in your name at that
        address (lease, bill, deed). This isn&apos;t unnecessary paperwork:
        entering someone&apos;s home without right or justification is
        punishable under Article 226-4 of the French Penal Code (up to 3
        years&apos; imprisonment and a €45,000 fine), and a professional who
        knowingly facilitated such an entry could be prosecuted as an
        accomplice. This systematic check protects you as much as it protects
        me.
      </>,
    ],
  },
];

const faqEn = [
  {
    question: "How can I open a slammed door without a locksmith?",
    answer:
      "Depending on the model, a thin rigid strip (an old X-ray film or a card) slid between the frame and the bolt can sometimes be enough to release the mechanism. If it resists, it's best not to force it: you risk damaging the strike plate or the door itself, which costs more to repair than a simple callout.",
  },
  {
    question: "How do you open a door when the key was left inside?",
    answer:
      "With a spare key, it's sometimes possible to gently push the mechanism so the key left in the cylinder falls out. This isn't guaranteed depending on the lock model, and I intervene directly if this method doesn't work.",
  },
  {
    question: "What is a door bolt?",
    answer:
      "The bolt is the moving part of the lock, on the edge of the door, that slides into the strike plate on the frame to keep the door shut. It's this part that blocks or releases the opening depending on its position.",
  },
  {
    question: "How much does opening a slammed door cost in Nice?",
    answer:
      "€149 incl. VAT for a standard daytime opening. Full pricing details, including night and weekend surcharges, are on my pricing page.",
  },
  {
    question: "How much does opening a locked door cost in Nice?",
    answer:
      "€149 incl. VAT for a standard situation (European cylinder). For a Fichet lock, the price is quoted individually. After 7pm, on weekends and public holidays: €189 incl. VAT for a slammed door, €209 incl. VAT for a locked door (European cylinder).",
  },
  {
    question: "Does opening a door leave marks?",
    answer:
      "Not in most slammed-door cases: I always favor a damage-free method when the setup allows it. For a locked door on a very resistant lock model, a more technical approach may sometimes be needed, I'll tell you before I act.",
  },
  {
    question: "Why does a locksmith ask for ID before opening a door?",
    answer:
      "It's a practice I apply systematically, not just a business choice: a professional who knowingly facilitates access to a home without checking who has a right to it risks being prosecuted as an accomplice to unlawful entry (Article 226-4 of the French Penal Code). Keep an ID and proof in your name close at hand.",
  },
];

export default async function OuvertureDePorteNicePage() {
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
    </div>
  );

  return (
    <LocalizedServicePage
      fr={{
        h1: "Ouverture de porte à Nice : porte claquée, fermée à clé ou clé cassée",
        lead: "En urgence, j'arrive en 30 minutes partout à Nice. Une porte claquée coûte 149 € TTC en journée, déplacement compris, et le prix est annoncé au téléphone, avant que je parte.",
        leadContent: (
          <>
            En urgence, j&apos;arrive en 30 minutes partout à Nice. Une porte claquée coûte 149 € TTC en journée,
            déplacement compris, et le prix est{" "}
            <Link href="/tarifs-serrurier-nice/" prefetch={false} className={linkClass}>
              annoncé au téléphone
            </Link>
            , avant que je parte.
          </>
        ),
        hideProcessSteps: true,
        sections: sectionsFr,
        faq: faqFr,
        breadcrumbLabel: "Ouverture de porte",
        path: "/ouverture-de-porte-nice/",
        image: {
          src: "/images/serrurier-nice-ouverture-de-porte.webp",
          alt: "Ouverture de porte Nice",
        },
        headingScale: "lg",
        heroTrustNote,
        extra: (
          <>
            <PriceReminder
              priceLabel="149 € TTC (serrure Fichet verrouillée : sur devis)"
              locale="fr"
            />
            <ServiceReviewsLive path="/ouverture-de-porte-nice/" />
          </>
        ),
      }}
      en={{
        h1: "Door opening in Nice: the right method for your lock",
        lead: "Door slammed shut, locked, broken key or security door: I diagnose over the phone, quote a price, then get it done cleanly, without damage when possible.",
        sections: sectionsEn,
        faq: faqEn,
        breadcrumbLabel: "Door opening",
        path: "/ouverture-de-porte-nice/",
        image: {
          src: "/images/serrurier-nice-ouverture-de-porte.webp",
          alt: "Door opening Nice",
        },
        extra: (
          <PriceReminder
            priceLabel="€149 incl. VAT (locked Fichet lock: quoted individually)"
            locale="en"
          />
        ),
        processSteps: [
          {
            title: "Call",
            text: "You tell me whether the door is slammed shut or locked with a key, and the lock type if you know it, so I arrive already prepared.",
          },
          {
            title: "Time to arrival",
            text: "I quote a price and a realistic time frame based on your area and the time of day, and let you know if anything changes on the way.",
          },
          {
            title: "Diagnosing the door",
            text: "I check the lock type and the frame's condition to choose the least destructive opening method, without forcing anything if an alternative exists.",
          },
          {
            title: "Payment",
            text: "The price confirmed before opening is what you pay, no surprise extra charge once the door is open again.",
          },
        ],
      }}
    />
  );
}
