import { ArrowLeftRight, BadgeCheck, Package, Truck } from "lucide-react";

const benefits = [
  {
    icon: BadgeCheck,
    title: <>Produits 100%<br />authentiques</>,
    description: "Garantie de qualité et d'authenticité pour tous nos produits",
  },
  {
    icon: Truck,
    title: <>Livraison partout<br />au Maroc</>,
    description: "Service de livraison disponible dans tout le Maroc",
  },
  {
    icon: ArrowLeftRight,
    title: <>Livraison gratuite<br />sur Casablanca</>,
    description: "Profitez de la livraison gratuite sur Casablanca",
  },
  {
    icon: Package,
    title: <>Vente<br />en gros</>,
    description: "Options disponibles pour les achats en gros",
  },
];

export function TrustStrip() {
  return (
    <section className="bg-[#212326] px-[clamp(20px,4vw,60px)] pb-[clamp(56px,7vw,96px)] pt-8 text-white" aria-label="Nos engagements">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ icon: Icon, title, description }) => (
          <article key={description} className="flex min-h-[250px] flex-col items-center justify-center border border-white/10 bg-[#292c30] px-7 py-8 text-center transition-colors hover:border-[#d72d32]/60">
            <Icon size={42} strokeWidth={1.8} className="mb-7 text-[#e46a61]" aria-hidden="true" />
            <h3 className="mb-3 mt-0 font-heading text-[19px] font-bold uppercase leading-[1.12] text-white">{title}</h3>
            <p className="m-0 max-w-[280px] font-serif text-[16px] leading-[1.5] text-white/60">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
