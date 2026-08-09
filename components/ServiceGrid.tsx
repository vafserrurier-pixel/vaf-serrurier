import Link from "next/link";
import {
  WrenchIcon,
  DoorIcon,
  KeyIcon,
  ShieldIcon,
  AlertLockIcon,
  SafeIcon,
} from "./Icons";

const services = [
  {
    href: "/depannage-serrurier-nice/",
    title: "Dépannage serrurier",
    text: "Serrure bloquée, cylindre grippé, clé qui force : je diagnostique la panne avant d'intervenir, et je répare plutôt que je ne remplace quand c'est possible.",
    Icon: WrenchIcon,
  },
  {
    href: "/ouverture-de-porte-nice/",
    title: "Ouverture de porte",
    text: "Porte claquée ou fermée à clé : ouverture sans casse quand la configuration le permet, prix annoncé avant le moindre outil sorti.",
    Icon: DoorIcon,
  },
  {
    href: "/changement-serrure-nice/",
    title: "Changement de serrure",
    text: "Remplacement de cylindre ou de serrure complète, multipoints compris. Pose réglée et testée, pas juste vissée.",
    Icon: KeyIcon,
  },
  {
    href: "/installation-porte-blindee-nice/",
    title: "Porte blindée",
    text: "Bloc-porte blindé complet ou blindage d'une porte existante : je vous aide à choisir selon l'état réel de votre porte et de votre bâti.",
    Icon: ShieldIcon,
  },
  {
    href: "/mis-en-securite-apres-effraction-nice/",
    title: "Après effraction",
    text: "Mise en sécurité immédiate 24h/24, puis solution durable une fois le diagnostic fait. Facture détaillée pour votre assurance.",
    Icon: AlertLockIcon,
  },
  {
    href: "/ouverture-de-coffre-fort-nice/",
    title: "Ouverture de coffre-fort",
    text: "Code oublié, clé perdue, coffre hérité : diagnostic du mécanisme et ouverture en privilégiant la méthode la moins destructive.",
    Icon: SafeIcon,
  },
  {
    href: "/installation-coffre-fort-nice/",
    title: "Installation de coffre-fort",
    text: "Conseil sur le modèle, fixation sécurisée au sol ou au mur : un coffre non fixé ne protège pas grand-chose.",
    Icon: SafeIcon,
  },
];

export default function ServiceGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Link
          key={service.href}
          href={service.href}
          className="group relative block bg-navy/40 rounded-xl border border-cream/15 p-5 pt-6 hover:border-cream/40 hover:bg-navy/60 transition-colors"
        >
          <span
            className="absolute top-4 right-5 font-heading font-bold text-2xl text-cream/15 select-none"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-cream/15 text-cream mb-3">
            <service.Icon className="w-5 h-5" />
          </span>
          <p className="font-heading font-semibold text-cream mb-1.5">{service.title}</p>
          <p className="text-sm text-cream/70 leading-relaxed mb-3">{service.text}</p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-cream group-hover:gap-2 transition-all">
            En savoir plus
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );
}
