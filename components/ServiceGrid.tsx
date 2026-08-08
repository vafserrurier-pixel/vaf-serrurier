import Link from "next/link";
import {
  WrenchIcon,
  DoorIcon,
  KeyIcon,
  ShieldIcon,
  AlertLockIcon,
} from "./Icons";

const services = [
  {
    href: "/depannage-serrurier-nice/",
    title: "Dépannage serrurier",
    text: "Serrure bloquée, cylindre grippé, clé cassée : diagnostic et remise en service.",
    Icon: WrenchIcon,
  },
  {
    href: "/ouverture-de-porte-nice/",
    title: "Ouverture de porte",
    text: "Porte claquée ou verrouillée, avec ou sans casse selon la situation.",
    Icon: DoorIcon,
  },
  {
    href: "/changement-serrure-nice/",
    title: "Changement de serrure",
    text: "Remplacement de cylindre ou de serrure complète, multipoints compris.",
    Icon: KeyIcon,
  },
  {
    href: "/installation-porte-blindee-nice/",
    title: "Porte blindée",
    text: "Bloc-porte blindé ou blindage d'une porte existante, posé et réglé.",
    Icon: ShieldIcon,
  },
  {
    href: "/mis-en-securite-apres-effraction-nice/",
    title: "Après effraction",
    text: "Mise en sécurité immédiate puis solution durable, 24h/24.",
    Icon: AlertLockIcon,
  },
];

export default function ServiceGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Link
          key={service.href}
          href={service.href}
          className="group block bg-white rounded-xl border border-navy/10 p-5 shadow-sm hover:shadow-md hover:border-steel hover:-translate-y-0.5 transition-all"
        >
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-steel/10 text-steel mb-3 group-hover:bg-navy group-hover:text-cream transition-colors">
            <service.Icon className="w-5 h-5" />
          </span>
          <p className="font-heading font-semibold text-navy mb-1">{service.title}</p>
          <p className="text-sm text-slate leading-relaxed">{service.text}</p>
        </Link>
      ))}
    </div>
  );
}
