import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Perte de poids",
    count: "14 produits",
    image: "/images/categories/lose-weight-v2.jpg",
    imagePosition: "object-[center_68%]",
    href: "https://mesproteines.ma/categorie/perte-de-poids/",
  },
  {
    name: "Prise de masse",
    count: "16 produits",
    image: "/images/categories/gain-muscles.jpg",
    imagePosition: "object-[center_35%]",
    href: "https://mesproteines.ma/categorie/prise-de-masse/",
  },
  {
    name: "Protéines",
    count: "4 produits",
    image: "/images/categories/proteins.jpg",
    imagePosition: "object-[center_52%]",
    href: "https://mesproteines.ma/categorie/2/",
  },
  {
    name: "Gainers",
    count: "7 produits",
    image: "/images/categories/gainers.jpg",
    imagePosition: "object-[center_48%]",
    href: "https://mesproteines.ma/categorie/3/",
  },
];

export function CategoriesSection() {
  return (
    <section
      className="bg-[#f5f2ec] px-[clamp(20px,4vw,60px)] py-[clamp(32px,4vw,56px)]"
      aria-labelledby="categories-title"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2
            id="categories-title"
            className="m-0 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.2em] text-brand-red"
          >
            Nos catégories <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
          </h2>
          <a
            className="inline-flex items-center gap-2 whitespace-nowrap text-[12px] font-bold text-brand-red transition-colors hover:text-brand-red-deep"
            href="https://mesproteines.ma/boutique/"
          >
            Voir toute la boutique <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-4 gap-[clamp(12px,1.4vw,22px)] max-[700px]:-mx-5 max-[700px]:flex max-[700px]:snap-x max-[700px]:snap-mandatory max-[700px]:gap-3 max-[700px]:overflow-x-auto max-[700px]:px-5 max-[700px]:pb-2">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="group relative block min-w-0 overflow-hidden bg-charcoal outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-4"
              aria-label={`${category.name}, ${category.count}`}
            >
              <div className="relative aspect-[1.05/1] overflow-hidden">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 72vw, (max-width: 1100px) 32vw, 24vw"
                  className={`object-cover ${category.imagePosition} transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none`}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/15 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-white">
                  <div>
                    <h3 className="m-0 font-heading text-[clamp(19px,2vw,27px)] font-black uppercase leading-[.98]">
                      {category.name}
                    </h3>
                    <p className="mb-0 mt-1.5 text-[10px] font-semibold uppercase tracking-[.13em] text-white/70">
                      {category.count}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="mb-0.5 flex-none text-[#e46a61] transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
