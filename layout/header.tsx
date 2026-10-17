import Image from "next/image";
import Link from "next/link";
import {
  CreditCard,
  Heart,
  Headset,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { MobileMenu } from "./mobile-menu";

const navigation = [
  { label: "Accueil", href: "/#top" },
  { label: "Boutique", href: "/products/" },
  { label: "Prise de masse", href: "/#goals" },
  { label: "Perte de poids", href: "/#goals" },
  { label: "Vitamines & santé", href: "/#categories" },
  { label: "Qui sommes-nous ?", href: "/qui-sommes-nous/" },
];

const services = [
  { label: "Livraison partout au Maroc", Icon: Truck },
  { label: "Paiement à la livraison", Icon: CreditCard },
  { label: "Conseils d’experts", Icon: Headset },
  { label: "Produits 100% authentiques", Icon: ShieldCheck },
];

function NavigationLinks() {
  return (
    <nav
      className="hidden items-center justify-center gap-[clamp(10px,1.35vw,22px)] min-[701px]:flex"
      aria-label="Navigation principale"
    >
      {navigation.map((item) => (
        <Link
          key={item.label}
          className="relative whitespace-nowrap py-3 text-[clamp(11px,.9vw,14px)] font-semibold text-charcoal transition-colors hover:text-brand-red-deep after:absolute after:inset-x-0 after:bottom-[3px] after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-red after:transition-transform hover:after:scale-x-100 aria-[current=page]:after:scale-x-100"
          href={item.href}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

function AnnouncementSet() {
  return (
    <div className="flex min-h-[30px] flex-none items-center px-[clamp(18px,3.2vw,48px)] max-[700px]:min-h-[28px] max-[700px]:px-[18px]">
      {services.map(({ label, Icon }, index) => (
        <span
          key={label}
          className={`flex flex-none items-center gap-[9px] whitespace-nowrap max-[700px]:gap-[7px] max-[700px]:text-[9px] ${index === 0 ? "" : "ml-[clamp(22px,3.2vw,48px)] border-l border-white/40 pl-[clamp(22px,3.2vw,48px)] max-[700px]:ml-5 max-[700px]:pl-5"}`}
        >
          <Icon size={15} aria-hidden="true" />
          {label}
        </span>
      ))}
    </div>
  );
}

export function Header() {
  return (
    <header id="top" className="relative z-10 bg-paper">
      <div
        className="overflow-hidden bg-brand-red py-0 text-[10px] font-semibold uppercase tracking-[.085em] text-white"
        role="region"
        aria-label="Services Mes Proteines Nutrition"
      >
        <div className="flex w-max flex-none animate-[announcement-scroll_90s_linear_infinite] items-center motion-reduce:animate-none" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="flex flex-none items-center whitespace-nowrap" key={copy}>
              {Array.from({ length: 8 }, (_, repeat) => (
                <AnnouncementSet key={repeat} />
              ))}
            </div>
          ))}
        </div>
        <span className="sr-only">
          Livraison partout au Maroc. Paiement à la livraison. Conseils d’experts. Produits 100% authentiques.
        </span>
      </div>

      <div className="grid min-h-[88px] grid-cols-[minmax(190px,1fr)_auto_minmax(100px,1fr)] items-center gap-[clamp(10px,1.4vw,22px)] border-b border-[#e9e6e0] px-[clamp(18px,3vw,52px)] max-[700px]:grid-cols-[1fr_auto] max-[700px]:gap-3 max-[700px]:px-[19px] max-[700px]:min-h-[72px]">
        <Link
          className="block w-[210px] max-[700px]:w-[184px]"
          href="/"
          aria-label="Mes Proteines Nutrition, accueil"
        >
          <Image
            src="/images/mes-proteines-logo.webp"
            alt="Mes Protéines Nutrition"
            width={958}
            height={284}
            priority
            className="h-auto w-full"
          />
        </Link>

        <NavigationLinks />

        <div className="hidden items-center justify-end gap-2 min-[701px]:flex">
          <a
            className="inline-flex size-10 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-surface-soft hover:text-brand-red"
            href="#products"
            aria-label="Favoris"
          >
            <Heart size={21} strokeWidth={1.75} />
          </a>
          <a
            className="relative inline-flex size-10 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-surface-soft hover:text-brand-red"
            href="#products"
            aria-label="Voir le panier"
          >
            <ShoppingBag size={21} strokeWidth={1.75} />
            <span className="absolute -right-0.5 -top-px grid size-[17px] place-items-center rounded-full bg-brand-red text-[9px] font-extrabold text-white" aria-hidden="true">
              0
            </span>
          </a>
        </div>

        <MobileMenu items={navigation} />
      </div>
    </header>
  );
}
