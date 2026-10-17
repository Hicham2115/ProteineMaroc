import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BadgeCheck, PackageCheck, Truck } from "lucide-react";
import { Header } from "@/layout/header";
import { SiteFooter } from "@/components/site-footer";
import { formatPrice, products } from "@/lib/products";

type Product = (typeof products)[number];

const productNotes: Record<string, { eyebrow: string; intro: string; points: string[] }> = {
  "dymatize-iso100": {
    eyebrow: "Whey isolate · récupération",
    intro: "Une whey isolate pensée pour compléter votre routine sportive et vos apports en protéines, avec une formule sans lactose annoncée par la marque.",
    points: ["Isolat de whey", "Sans lactose", "Format 2.3 kg"],
  },
  "whey-gold-standard": {
    eyebrow: "Whey protein · quotidien",
    intro: "Une whey polyvalente à intégrer simplement à votre routine, après l’entraînement ou au cours de la journée selon vos besoins.",
    points: ["Mélange de protéines de whey", "Format 900 g", "Pour votre routine quotidienne"],
  },
  "serious-mass": {
    eyebrow: "Gainer · prise de masse",
    intro: "Un gainer conçu pour compléter une alimentation adaptée aux objectifs de prise de masse, associé à un entraînement régulier.",
    points: ["Formule gainer", "Format 5.4 kg", "À intégrer à une alimentation équilibrée"],
  },
  "super-mass-gainer": {
    eyebrow: "Gainer · apport énergétique",
    intro: "Un complément gainer pour accompagner les routines axées sur la prise de masse et les besoins énergétiques plus élevés.",
    points: ["Formule gainer", "Format 2.7 kg", "Pour les objectifs de prise de masse"],
  },
  "c4-pre-workout": {
    eyebrow: "Pré-entraînement · performance",
    intro: "Un pré-entraînement à utiliser selon les indications du fabricant et en fonction de votre routine et de votre tolérance personnelle.",
    points: ["Pré-entraînement", "Format 30 portions", "Suivre les conseils de l’étiquette"],
  },
};

function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) return { title: "Produit introuvable | Mes Protéines Nutrition" };

  return {
    title: `${product.name} | Mes Protéines Nutrition`,
    description: `${product.brand} ${product.name}, ${product.detail}. Découvrez ce produit dans la boutique Mes Protéines Nutrition.`,
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const notes = productNotes[product.slug];
  const discounted = "oldPrice" in product;
  const related = products.filter((item) => item.slug !== product.slug && item.category === product.category).slice(0, 3);

  return (
    <>
      <Header />
      <main className="bg-paper px-[clamp(20px,5vw,80px)] pb-20 pt-7 sm:pt-10">
        <div className="mx-auto max-w-[1440px]">
          <nav aria-label="Fil d’Ariane" className="mb-7 flex items-center gap-2 text-[11px] font-semibold text-charcoal/45">
            <Link href="/" className="transition-colors hover:text-brand-red">Accueil</Link>
            <span aria-hidden="true">/</span>
            <Link href="/products/" className="transition-colors hover:text-brand-red">Boutique</Link>
            <span aria-hidden="true">/</span>
            <span className="max-w-[55vw] truncate text-charcoal">{product.name}</span>
          </nav>

          <div className="grid gap-9 lg:grid-cols-[1.03fr_.97fr] lg:gap-16">
            <div className="relative overflow-hidden bg-[#efeee9]">
              <span className="absolute left-5 top-5 z-[1] bg-white/90 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[.17em] text-charcoal">{product.category}</span>
              <div className="relative aspect-square min-h-[320px]">
                <Image src={product.image} alt={`${product.brand} ${product.name}`} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-[clamp(24px,6vw,88px)]" />
              </div>
              <span className="pointer-events-none absolute -bottom-10 -right-2 font-heading text-[clamp(130px,22vw,280px)] font-black leading-none text-charcoal/[.035]" aria-hidden="true">MP</span>
            </div>

            <section className="flex flex-col justify-center py-1 lg:py-8">
              <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[.2em] text-brand-red">{product.brand}</p>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[.15em] text-charcoal/45">{notes.eyebrow}</p>
              <h1 className="m-0 max-w-[700px] font-heading text-[clamp(40px,6vw,72px)] font-black uppercase leading-[.94] tracking-[-.025em] text-charcoal">{product.name}</h1>
              <p className="mb-0 mt-4 text-[14px] font-semibold text-charcoal/55">{product.detail}</p>

              <div className="mt-7 flex flex-wrap items-baseline gap-3 border-y border-charcoal/10 py-5">
                <p className="m-0 text-3xl font-extrabold tracking-tight text-charcoal">{formatPrice(product.price)} <span className="text-sm">DHS</span></p>
                {discounted && <><del className="text-sm text-charcoal/40">{formatPrice(product.oldPrice)} DHS</del><span className="bg-brand-red/10 px-2 py-1 text-[9px] font-extrabold uppercase tracking-[.1em] text-brand-red">Prix spécial</span></>}
              </div>

              <p className="mb-0 mt-6 max-w-[600px] text-[14px] leading-7 text-charcoal/70">{notes.intro}</p>
              <ul className="mt-5 grid gap-3 p-0 text-[12px] font-semibold text-charcoal/75 sm:grid-cols-2">
                {notes.points.map((point) => <li key={point} className="flex items-center gap-2.5"><BadgeCheck size={16} className="shrink-0 text-brand-red" aria-hidden="true" />{point}</li>)}
              </ul>

              <a href={product.href} className="mt-7 inline-flex min-h-14 items-center justify-center gap-3 bg-brand-red px-7 text-[12px] font-extrabold uppercase tracking-[.12em] text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-red-deep sm:w-fit">
                Commander ce produit <ArrowRight size={17} aria-hidden="true" />
              </a>
              <div className="mt-6 grid gap-3 border-t border-charcoal/10 pt-5 text-[11px] font-semibold text-charcoal/55 sm:grid-cols-2">
                <p className="m-0 flex items-center gap-2"><Truck size={16} className="text-brand-red" aria-hidden="true" /> Livraison partout au Maroc</p>
                <p className="m-0 flex items-center gap-2"><PackageCheck size={16} className="text-brand-red" aria-hidden="true" /> Produits sélectionnés avec soin</p>
              </div>
              <Link href="/products/" className="mt-7 inline-flex items-center gap-2 text-[11px] font-bold text-charcoal/55 transition-colors hover:text-brand-red"><ArrowLeft size={14} aria-hidden="true" /> Retour à la boutique</Link>
            </section>
          </div>

          {related.length > 0 && (
            <section className="mt-20 border-t border-charcoal/10 pt-10" aria-labelledby="related-title">
              <p className="mb-2 text-[9px] font-extrabold uppercase tracking-[.2em] text-brand-red">À découvrir aussi</p>
              <h2 id="related-title" className="m-0 font-heading text-3xl font-black uppercase text-charcoal sm:text-4xl">Dans la même catégorie</h2>
              <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
                {related.map((item) => (
                  <Link href={`/products/${item.slug}/`} key={item.slug} className="group grid grid-cols-[88px_1fr] items-center gap-4 border border-charcoal/10 bg-white p-3 transition-colors hover:border-brand-red/40 sm:grid-cols-[120px_1fr] sm:p-4">
                    <span className="relative aspect-square bg-[#f0efeb]"><Image src={item.image} alt="" fill sizes="120px" className="object-contain p-2 transition-transform group-hover:scale-105" /></span>
                    <span><span className="block text-[9px] font-bold uppercase tracking-[.12em] text-charcoal/45">{item.brand}</span><span className="mt-1 block text-[12px] font-bold text-charcoal">{item.name}</span><span className="mt-2 block text-[11px] font-extrabold text-brand-red">{formatPrice(item.price)} DHS</span></span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
