import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { formatPrice, products } from "@/lib/products";

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
      <div className="mt-2 flex items-center justify-between gap-2">
        <p className="m-0 text-[13px] font-extrabold">{formatPrice(product.price)} DHS {"oldPrice" in product && <del className="ml-1 text-[10px] font-medium text-ink-muted">{formatPrice(product.oldPrice)}</del>}</p>
        <a
          href={product.href}
          aria-label={product.brand === "Cellucor" ? "Voir la boutique" : `Voir les options de ${product.name}`}
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
    <section id="products" className="scroll-mt-6 bg-paper px-[clamp(20px,4vw,60px)] py-[clamp(32px,4vw,56px)]" aria-labelledby="featured-products-title">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 id="featured-products-title" className="m-0 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.2em] text-brand-red">
            Nos produits phares <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
          </h2>
          <Link className="inline-flex items-center gap-2 whitespace-nowrap text-[12px] font-bold text-brand-red transition-colors hover:text-brand-red-deep" href="/products/">
            Voir toute la boutique <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-5 gap-[clamp(12px,1.4vw,22px)] max-[700px]:-mx-5 max-[700px]:flex max-[700px]:snap-x max-[700px]:snap-mandatory max-[700px]:gap-3 max-[700px]:overflow-x-auto max-[700px]:px-5 max-[700px]:pb-2">
          {products.map((product) => (
            <div className="max-[700px]:w-[72vw] max-[700px]:flex-none max-[700px]:snap-start" key={`${product.name}-${product.detail}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
