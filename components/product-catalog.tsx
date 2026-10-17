"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, SlidersHorizontal, X } from "lucide-react";
import { StoreSelect } from "@/components/ui/store-select";
import { formatPrice, products } from "@/lib/products";

const categories = ["Tout", "Protéines", "Gainers", "Performance"] as const;

const brandOptions = [
  { value: "all", label: "Toutes les marques" },
  ...Array.from(new Set(products.map((product) => product.brand))).map((brand) => ({ value: brand, label: brand })),
];

const goalOptions = [
  { value: "all", label: "Tous les objectifs" },
  { value: "Prise de masse", label: "Prise de masse" },
  { value: "Performance", label: "Performance" },
];

const sortOptions = [
  { value: "featured", label: "Notre sélection" },
  { value: "price-low", label: "Prix : du plus bas au plus haut" },
  { value: "price-high", label: "Prix : du plus haut au plus bas" },
  { value: "name", label: "Nom : A à Z" },
];

function ProductTile({ product }: { product: (typeof products)[number] }) {
  const discounted = "oldPrice" in product;

  return (
    <article className="group flex min-w-0 flex-col">
      <Link href={`/products/${product.slug}/`} className="relative mb-4 block overflow-hidden bg-[#f0efeb]" aria-label={`Découvrir ${product.name}`}>
        <div className="relative aspect-[.92/1]">
          <Image
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 25vw"
            className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.055]"
          />
        </div>
        <span className="absolute left-3 top-3 bg-white/90 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[.12em] text-charcoal">
          {product.category}
        </span>
        {discounted && <span className="absolute right-3 top-3 bg-brand-red px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[.12em] text-white">Offre</span>}
        <span className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-charcoal px-4 py-3 text-[11px] font-bold text-white transition-transform duration-300 group-hover:translate-y-0">
          Découvrir le produit <ArrowRight size={14} aria-hidden="true" />
        </span>
      </Link>
      <p className="mb-1 text-[9px] font-extrabold uppercase tracking-[.16em] text-brand-red">{product.brand}</p>
      <h2 className="m-0 text-[15px] font-bold leading-snug text-charcoal">{product.name}</h2>
      <p className="mb-3 mt-1 text-[12px] text-charcoal/55">{product.detail}</p>
      <div className="mt-auto flex items-center gap-2 border-t border-charcoal/10 pt-3">
        <p className="m-0 text-[15px] font-extrabold text-charcoal">{formatPrice(product.price)} <span className="text-[10px]">DHS</span></p>
        {discounted && <del className="text-[11px] text-charcoal/40">{formatPrice(product.oldPrice)} DHS</del>}
      </div>
    </article>
  );
}

export function ProductCatalog() {
  const [category, setCategory] = useState<(typeof categories)[number]>("Tout");
  const [brand, setBrand] = useState("all");
  const [goal, setGoal] = useState("all");
  const [sort, setSort] = useState("featured");

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) =>
      (category === "Tout" || product.category === category) &&
      (brand === "all" || product.brand === brand) &&
      (goal === "all" || product.goal === goal),
    );

    if (sort === "price-low") return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === "price-high") return [...filtered].sort((a, b) => b.price - a.price);
    if (sort === "name") return [...filtered].sort((a, b) => a.name.localeCompare(b.name, "fr"));
    return filtered;
  }, [brand, category, goal, sort]);

  const hasFilters = category !== "Tout" || brand !== "all" || goal !== "all" || sort !== "featured";
  const resetFilters = () => {
    setCategory("Tout");
    setBrand("all");
    setGoal("all");
    setSort("featured");
  };

  return (
    <main className="bg-paper px-[clamp(20px,5vw,80px)] pb-24 pt-12 sm:pt-16">
      <div className="mx-auto max-w-[1440px]">
        <section className="relative mb-12 overflow-hidden bg-charcoal px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-16">
          <span className="pointer-events-none absolute -right-5 -top-12 font-heading text-[clamp(140px,22vw,300px)] font-black leading-none text-white/[.035]" aria-hidden="true">MP</span>
          <div className="relative max-w-[760px]">
            <p className="mb-4 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.22em] text-[#f07870]">
              <span className="h-px w-8 bg-brand-red" aria-hidden="true" /> Votre sélection nutrition
            </p>
            <h1 className="m-0 font-heading text-[clamp(44px,7vw,86px)] font-black uppercase leading-[.92] tracking-[-.025em]">
              Trouvez votre <span className="text-brand-red">prochain niveau.</span>
            </h1>
            <p className="mb-0 mt-5 max-w-[560px] text-[14px] leading-6 text-white/65 sm:text-[16px]">
              Protéines, gainers et essentiels performance, sélectionnés pour vous accompagner à chaque étape.
            </p>
          </div>
        </section>

        <div className="mb-7 flex flex-col gap-5 border-b border-charcoal/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.19em] text-brand-red"><SlidersHorizontal size={14} aria-hidden="true" /> Filtrer par catégorie</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par catégorie">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                  className={`min-h-10 border px-4 text-[12px] font-bold transition-colors ${category === item ? "border-charcoal bg-charcoal text-white" : "border-charcoal/15 bg-transparent text-charcoal/70 hover:border-brand-red hover:text-brand-red"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:w-[min(100%,650px)]">
            <label className="block text-[9px] font-extrabold uppercase tracking-[.14em] text-charcoal/55">
              Marque
              <StoreSelect name="brand" tone="light" value={brand} onValueChange={(value) => setBrand(value ?? "all")} options={brandOptions} className="[&>span>button]:mt-1 [&>span>button]:h-11 [&>span>button]:px-3 [&>span>button]:text-[12px]" />
            </label>
            <label className="block text-[9px] font-extrabold uppercase tracking-[.14em] text-charcoal/55">
              Objectif
              <StoreSelect name="goal" tone="light" value={goal} onValueChange={(value) => setGoal(value ?? "all")} options={goalOptions} className="[&>span>button]:mt-1 [&>span>button]:h-11 [&>span>button]:px-3 [&>span>button]:text-[12px]" />
            </label>
            <label className="block text-[9px] font-extrabold uppercase tracking-[.14em] text-charcoal/55">
              Trier par
              <StoreSelect name="sort" tone="light" value={sort} onValueChange={(value) => setSort(value ?? "featured")} options={sortOptions} className="[&>span>button]:mt-1 [&>span>button]:h-11 [&>span>button]:px-3 [&>span>button]:text-[12px]" />
            </label>
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="m-0 text-[12px] text-charcoal/55"><strong className="text-charcoal">{visibleProducts.length}</strong> produit{visibleProducts.length === 1 ? "" : "s"}</p>
          {hasFilters && <button type="button" onClick={resetFilters} className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-red hover:text-brand-red-deep"><X size={14} aria-hidden="true" /> Réinitialiser les filtres</button>}
        </div>

        {visibleProducts.length ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
            {visibleProducts.map((product) => <ProductTile key={`${product.name}-${product.detail}`} product={product} />)}
          </div>
        ) : (
          <div className="border border-charcoal/10 bg-white px-6 py-16 text-center">
            <h2 className="m-0 font-heading text-3xl uppercase text-charcoal">Aucun produit trouvé</h2>
            <p className="mb-5 mt-3 text-sm text-charcoal/60">Essayez une autre combinaison de filtres.</p>
            <button type="button" onClick={resetFilters} className="bg-brand-red px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-brand-red-deep">Tout afficher</button>
          </div>
        )}
      </div>
    </main>
  );
}
