import Image from "next/image";
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  Flame,
  Leaf,
  ShoppingCart,
  Star,
  Zap,
} from "lucide-react";

const highlights = [
  { icon: Zap, title: "2 000 mg", detail: "L-Carnitine", tone: "carnibolic-theme__icon--accent" },
  { icon: Flame, title: "Soutient", detail: "le métabolisme", tone: "carnibolic-theme__icon--accent" },
  { icon: ChartNoAxesColumnIncreasing, title: "Énergie", detail: "au quotidien", tone: "carnibolic-theme__icon--accent" },
  { icon: Leaf, title: "Convient", detail: "aux régimes vegan", tone: "carnibolic-theme__icon--vegan" },
];

const flavors = ["Peach Mango", "Iced Raspberry"];
const productUrl = "https://mesproteines.ma/produit/carnibolic-150-grammes/";

export function FeaturedCarnibolic() {
  return (
    <section className="bg-[#212326] px-3 py-8 text-white sm:px-6 lg:px-8" aria-labelledby="carnibolic-title">
      <div className="mx-auto grid max-w-[1440px] overflow-hidden border border-[#303337] bg-[#212326] lg:min-h-[630px] lg:grid-cols-[1.1fr_.9fr]">
        <div className="relative aspect-[1.1/1] min-h-[340px] bg-[#090b0d] sm:min-h-[440px] lg:aspect-auto lg:min-h-0">
          <Image
            src="/images/products/carnibolic-product-scene.png"
            alt="Pot Carnibolic Peach Mango mis en scène avec des morceaux de pêche, de mangue et un splash d’eau"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="scale-[.95] object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-9 sm:px-10 sm:py-12 lg:px-[clamp(28px,4vw,56px)] lg:py-10">
          <p className="mb-4 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.18em] text-brand-red">
            <span className="h-px w-4 bg-brand-red" aria-hidden="true" />
            Produit phare
            <span className="h-px w-4 bg-brand-red" aria-hidden="true" />
          </p>

          <h2
            id="carnibolic-title"
            className="m-0 font-heading text-[clamp(38px,4.2vw,58px)] font-black uppercase leading-[.88] tracking-[-.015em] text-[#f4f4f2]"
          >
            Carnibolic
            <br />
            30 Servings
          </h2>
          <p className="mb-0 mt-3 font-serif text-[clamp(17px,1.7vw,22px)] leading-tight text-[#ededeb]">
            Soutien à la perte de poids et au métabolisme
          </p>
          <p className="mb-0 mt-3 max-w-[520px] text-[13px] leading-[1.55] text-[#a7a9aa] sm:text-[14px]">
            Une formule avancée à base de L-Carnitine pour vous accompagner dans vos objectifs, avec un goût délicieux et une qualité signée Nutrabolics.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-y-4 border-b border-white/10 pb-5 sm:grid-cols-4 sm:gap-0">
            {highlights.map(({ icon: Icon, title, detail, tone }, index) => (
              <div
                className={`flex min-h-10 items-center gap-2.5 ${index % 2 === 1 ? "pl-3" : ""} ${index > 0 ? "sm:border-l sm:border-white/10 sm:pl-3" : ""}`}
                key={title}
              >
                <Icon size={20} strokeWidth={2.5} className={`flex-none ${tone}`} aria-hidden="true" />
                <p className="m-0 text-[10px] leading-[1.4] text-[#dedfdd] sm:text-[9px] lg:text-[10px]">
                  <span className="block font-bold">{title}</span>
                  <span className="block text-[#a7a9aa]">{detail}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1" aria-label="Note moyenne 4,9 sur 5, plus de 1 500 avis clients">
            <span className="flex gap-0.5 text-[#f4bb24]" aria-hidden="true">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} size={16} fill="currentColor" strokeWidth={1.5} />
              ))}
            </span>
            <span className="text-[12px] font-bold">4.9</span>
            <span className="ml-1 text-[12px] text-[#a7a9aa]">+1.5k avis clients</span>
          </div>

          <div className="mt-4 flex flex-wrap items-baseline gap-x-3">
            <span className="text-[34px] font-bold leading-none tracking-[-.04em]">400Dhs</span>
            <del className="text-[16px] font-semibold text-brand-red">500Dhs</del>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href={productUrl}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-brand-red px-3 text-[12px] font-bold text-white transition-colors hover:bg-brand-red-deep focus-visible:outline-white sm:px-4"
            >
              <ShoppingCart size={16} aria-hidden="true" />
              Ajouter au panier <ArrowRight size={15} aria-hidden="true" />
            </a>
            <a
              href={productUrl}
              className="inline-flex min-h-[48px] items-center justify-center border border-[#6f7273] px-3 text-[12px] font-bold text-white transition-colors hover:border-white focus-visible:outline-white sm:px-4"
            >
              Voir les détails
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px]">
            <span className="mr-1 text-[#dedfdd]">Arômes disponibles :</span>
            {flavors.map((flavor, index) => (
              <span
                key={flavor}
                className={`rounded-full border px-3 py-1.5 ${index === 0 ? "border-brand-red bg-brand-red text-white" : "border-[#45494b] text-[#b9bbbc]"}`}
              >
                {flavor}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
