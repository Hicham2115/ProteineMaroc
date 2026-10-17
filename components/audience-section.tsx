import Image from "next/image";
import { ArrowRight } from "lucide-react";

const wheyProducts = [
  {
    brand: "OPTIMUM NUTRITION",
    name: "Whey Gold Standard",
    detail: "900 g",
    image: "/images/products/gold-standard-full.jpg",
    imageScale: "scale-100",
    href: "https://mesproteines.ma/produit/gold-standard-09kg/",
  },
  {
    brand: "DYMATIZE",
    name: "ISO100 Whey Isolate",
    detail: "2.3 kg",
    image: "/images/products/dymatize-iso100-full.jpg",
    imageScale: "scale-[0.88]",
    href: "https://mesproteines.ma/produit/dymatize-iso100-2-3kg/",
  },
];

export function AudienceSection() {
  return (
    <section
      id="audience"
      className="bg-[#f1eee8] p-0"
      aria-label="Collections homme et femme et sélection de whey"
    >
      <div className="grid min-h-[min(760px,58vw)] w-full grid-cols-[.72fr_1.28fr] grid-rows-2 gap-0 max-[700px]:min-h-0 max-[700px]:grid-cols-1 max-[700px]:grid-rows-none">
        <article className="group relative row-span-2 min-h-[600px] overflow-hidden bg-[#e9e2d7] max-[700px]:row-span-1 max-[700px]:min-h-[440px]">
          <Image
            src="/images/audience/men-model-v2.jpg"
            alt="Un athlète en tenue claire dans un studio d’entraînement lumineux"
            fill
            sizes="(max-width: 700px) 100vw, 38vw"
            quality={90}
            className="object-cover object-[62%_center]"
          />
          <div className="absolute left-[clamp(18px,3vw,48px)] top-[clamp(22px,4vw,62px)] z-10 max-w-[44%] max-[700px]:max-w-[50%]">
            <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[.2em] text-charcoal/60">
              Collection homme
            </p>
            <h2 className="m-0 font-sans text-[clamp(27px,3.1vw,48px)] font-semibold leading-[.98] tracking-[-.055em] text-charcoal">
              Construis
              <br />
              plus fort.
            </h2>
            <p className="mb-0 mt-3 max-w-[250px] text-[clamp(11px,1vw,14px)] leading-[1.55] text-charcoal/75">
              Whey, créatine et gainers pour accompagner ta progression.
            </p>
            <a
              href="https://mesproteines.ma/boutique/"
              className="mt-5 inline-flex min-h-10 items-center gap-3 bg-paper px-4 text-[11px] font-bold text-charcoal transition-colors hover:bg-charcoal hover:text-white focus-visible:outline-brand-red"
            >
              Voir la sélection <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </article>

        <article className="group relative min-h-[260px] overflow-hidden bg-[#e9e2d7] max-[700px]:min-h-[300px]">
          <Image
            src="/images/audience/women-model-v2.jpg"
            alt="Une athlète dans un studio lumineux aux arches de pierre"
            fill
            sizes="(max-width: 700px) 100vw, 62vw"
            quality={90}
            className="object-cover object-[58%_center]"
          />
          <div className="absolute left-[clamp(18px,3vw,48px)] top-[clamp(20px,3vw,42px)] z-10 max-w-[48%]">
            <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[.2em] text-charcoal/60">
              Collection femme
            </p>
            <h2 className="m-0 max-w-[440px] font-sans text-[clamp(25px,2.7vw,42px)] font-semibold leading-[1] tracking-[-.05em] text-charcoal">
              Progresse à
              <br />
              ton rythme.
            </h2>
            <p className="mb-0 mt-3 max-w-[300px] text-[clamp(11px,.95vw,13px)] leading-[1.5] text-charcoal/75">
              Des essentiels pour soutenir tes objectifs et ta routine.
            </p>
            <a
              href="https://mesproteines.ma/boutique/"
              className="mt-4 inline-flex min-h-9 items-center gap-3 bg-paper px-4 text-[11px] font-bold text-charcoal transition-colors hover:bg-charcoal hover:text-white focus-visible:outline-brand-red"
            >
              Voir la sélection <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </article>

        <div className="grid min-h-[250px] grid-cols-2 gap-[3px] max-[520px]:grid-cols-1 max-[520px]:min-h-0">
          {wheyProducts.map((product) => (
            <a
              key={product.name}
              href={product.href}
              className="group relative grid min-h-[250px] grid-cols-[.82fr_1.18fr] overflow-hidden bg-[#f8f6f2] outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-inset max-[700px]:min-h-[215px]"
              aria-label={`${product.name}, voir le produit`}
            >
              <div className="relative z-10 flex flex-col justify-center px-[clamp(14px,2vw,28px)] py-5">
                <p className="mb-2 text-[8px] font-extrabold uppercase tracking-[.16em] text-brand-red">
                  {product.brand} · WHEY
                </p>
                <h3 className="m-0 max-w-[220px] font-sans text-[clamp(17px,1.7vw,25px)] font-semibold leading-[1.02] tracking-[-.04em] text-charcoal">
                  {product.name}
                </h3>
                <p className="mb-0 mt-1 text-[11px] text-ink-muted">{product.detail}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold text-charcoal transition-colors group-hover:text-brand-red">
                  Découvrir <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
              <div className="relative min-h-[250px] overflow-hidden bg-white max-[700px]:min-h-[215px]">
                <Image
                  src={product.image}
                  alt=""
                  fill
                  sizes="(max-width: 520px) 42vw, 22vw"
                  className={`${product.imageScale} object-contain`}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
