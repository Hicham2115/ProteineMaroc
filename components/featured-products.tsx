import Image from "next/image";
import { ArrowRight, ShoppingCart, Star } from "lucide-react";

const products = [
  {
    brand: "Nutrabolics",
    name: "Carnibolic",
    detail: "30 Servings",
    price: "400",
    rating: "4.9",
    reviews: "1.5k",
    image: "/images/products/carnibolic.svg",
    href: "https://mesproteines.ma/produit/carnibolic-150-grammes/",
  },
  {
    brand: "Optimum Nutrition",
    name: "Gold Standard Whey",
    detail: "2.27kg",
    price: "790",
    rating: "4.8",
    reviews: "950",
    image: "/images/products/gold-standard-whey.svg",
    href: "https://mesproteines.ma/produit/gold-standard-09kg/",
  },
  {
    brand: "MuscleTech",
    name: "Creatine Monohydrate",
    detail: "300g",
    price: "350",
    rating: "4.7",
    reviews: "620",
    image: "/images/products/creatine.svg",
    href: "https://mesproteines.ma/boutique/",
  },
  {
    brand: "Scivation",
    name: "Xtend BCAA",
    detail: "30 Servings",
    price: "350",
    rating: "4.6",
    reviews: "430",
    image: "/images/products/xtend-bcaa.svg",
    href: "https://mesproteines.ma/boutique/",
  },
  {
    brand: "Cellucor",
    name: "C4 Pre-Workout",
    detail: "30 Servings",
    price: "390",
    rating: "4.7",
    reviews: "520",
    image: "/images/products/c4-pre-workout.svg",
    href: "https://mesproteines.ma/boutique/",
  },
];

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <article className="group min-w-0">
      <a className="block" href={product.href} aria-label={`${product.name}, ${product.price} dirhams`}>
        <div className="relative mb-3 grid aspect-[1.05/1] place-items-center overflow-hidden bg-[#f3f1ed]">
          <Image
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            fill
            sizes="(max-width: 700px) 72vw, (max-width: 1100px) 32vw, 18vw"
            className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.04]"
          />
        </div>
        <p className="mb-0.5 text-[9px] font-bold uppercase tracking-[.08em] text-ink-muted">{product.brand}</p>
        <h3 className="m-0 text-[13px] font-bold leading-snug text-ink">{product.name}</h3>
        <p className="mt-0.5 text-[12px] text-ink-muted">{product.detail}</p>
      </a>
      <div className="mt-2 flex items-center gap-1.5 text-[11px]" aria-label={`Note ${product.rating} sur 5, ${product.reviews} avis`}>
        <span className="flex text-[#efaa18]" aria-hidden="true">
          {Array.from({ length: 5 }, (_, index) => <Star key={index} size={12} fill="currentColor" strokeWidth={1.4} />)}
        </span>
        <span className="text-ink-muted">{product.rating} ({product.reviews})</span>
      </div>
      <div className="mt-2 flex items-center justify-between gap-2">
        <p className="m-0 text-[13px] font-extrabold">{product.price} DHS</p>
        <a
          href={product.href}
          aria-label={`Ajouter ${product.name} au panier`}
          className="grid size-[34px] place-items-center bg-charcoal text-white transition-colors hover:bg-brand-red"
        >
          <ShoppingCart size={17} strokeWidth={2} />
        </a>
      </div>
    </article>
  );
}

export function FeaturedProducts() {
  return (
    <section className="bg-paper px-[clamp(20px,4vw,60px)] py-[clamp(32px,4vw,56px)]" aria-labelledby="featured-products-title">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 id="featured-products-title" className="m-0 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.2em] text-brand-red">
            Nos produits phares <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
          </h2>
          <a className="inline-flex items-center gap-2 whitespace-nowrap text-[12px] font-bold text-brand-red transition-colors hover:text-brand-red-deep" href="https://mesproteines.ma/boutique/">
            Voir toute la boutique <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="grid grid-cols-5 gap-[clamp(12px,1.4vw,22px)] max-[700px]:-mx-5 max-[700px]:flex max-[700px]:snap-x max-[700px]:snap-mandatory max-[700px]:gap-3 max-[700px]:overflow-x-auto max-[700px]:px-5 max-[700px]:pb-2">
          {products.map((product) => (
            <div className="max-[700px]:w-[72vw] max-[700px]:flex-none max-[700px]:snap-start" key={product.name}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
