"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react";

const slides = [
  {
    label: "À vous la parole",
    title: "Votre expérience compte.",
    text: "Vous avez déjà commandé chez nous ? Partagez votre expérience et aidez la communauté à choisir en confiance.",
    link: "https://mesproteines.ma/",
    action: "Partager un avis",
  },
  {
    label: "Un conseil personnalisé",
    title: "On vous accompagne.",
    text: "Une question sur un produit ou votre commande ? Notre équipe est disponible pour vous aider à trouver ce qu’il vous faut.",
    link: "https://wa.me/212522980410",
    action: "Écrivez-nous",
  },
  {
    label: "Votre routine, votre rythme",
    title: "Chaque objectif est différent.",
    text: "Prise de masse, récupération ou bien-être : découvrez une sélection pensée pour accompagner votre quotidien sportif.",
    link: "https://mesproteines.ma/boutique/",
    action: "Explorer la boutique",
  },
];

export function ReviewsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  function moveSlider(direction: "previous" | "next") {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({
      left: direction === "next" ? slider.clientWidth : -slider.clientWidth,
      behavior: "smooth",
    });
  }

  return (
    <section className="bg-white px-[clamp(20px,4vw,60px)] py-[clamp(56px,7vw,96px)] text-[#212326]" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-6 border-b border-[#212326]/15 pb-7">
          <div>
            <p className="mb-3 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.22em] text-brand-red">
              <span className="h-px w-5 bg-brand-red" aria-hidden="true" />
              Votre expérience compte
            </p>
            <h2 id="reviews-title" className="m-0 font-heading text-[clamp(38px,5vw,68px)] font-black uppercase leading-[.92] tracking-[-.025em]">
              La confiance se <span className="text-brand-red">partage.</span>
            </h2>
          </div>
          <div className="flex items-end gap-5">
            <p className="mb-1 max-w-[340px] text-[14px] leading-6 text-[#212326]/60">
              Votre avis aide toute la communauté à choisir en confiance.
            </p>
            <div className="hidden gap-2 sm:flex">
              <button type="button" onClick={() => moveSlider("previous")} aria-label="Avis précédent" className="flex size-10 items-center justify-center border border-[#212326]/20 transition-colors hover:border-brand-red hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red">
                <ArrowLeft size={17} aria-hidden="true" />
              </button>
              <button type="button" onClick={() => moveSlider("next")} aria-label="Avis suivant" className="flex size-10 items-center justify-center border border-[#212326]/20 transition-colors hover:border-brand-red hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red">
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[.72fr_1.28fr]">
          <div className="flex min-h-[320px] flex-col justify-between bg-[#212326] p-7 text-white sm:p-9">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[.18em] text-white/50">Note affichée sur le site</p>
              <div className="flex items-center gap-3">
                <span className="font-heading text-[76px] font-black leading-none tracking-[-.06em]">4.9</span>
                <span className="pt-2">
                  <span className="flex gap-1 text-[#f4bb24]" aria-label="5 étoiles">
                    {Array.from({ length: 5 }, (_, index) => <Star key={index} size={17} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />)}
                  </span>
                  <span className="mt-2 block text-[11px] text-white/55">Avis sur nos produits</span>
                </span>
              </div>
            </div>
            <p className="mb-0 mt-8 border-t border-white/15 pt-5 font-serif text-[20px] leading-snug text-white/80">
              Un bon conseil, le bon produit, et une routine qui vous ressemble.
            </p>
          </div>

          <div ref={sliderRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Avis et conseils">
            {slides.map((slide, index) => (
              <article key={slide.title} className={`flex min-h-[320px] w-[88%] flex-none snap-start flex-col justify-between border border-[#212326]/10 p-7 sm:w-[calc(50%-8px)] sm:p-8 ${index === 1 ? "bg-[#f5f2ec]" : "bg-white"}`}>
                <div>
                  <span className="mb-6 block font-serif text-[54px] leading-[.65] text-brand-red" aria-hidden="true">“</span>
                  <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[.18em] text-brand-red">{slide.label}</p>
                  <h3 className="m-0 font-heading text-[clamp(22px,2.2vw,30px)] font-bold uppercase leading-[1.02]">{slide.title}</h3>
                  <p className="mb-0 mt-4 max-w-[400px] text-[13px] leading-6 text-[#212326]/65">{slide.text}</p>
                </div>
                <a href={slide.link} className="mt-7 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.12em] transition-colors hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red">
                  {slide.action} <ArrowUpRight size={15} className="text-brand-red" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
