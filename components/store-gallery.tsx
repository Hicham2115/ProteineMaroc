"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

type StoreGalleryProps = {
  name: string;
  images: string[];
};

export function StoreGallery({ name, images }: StoreGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  function showPrevious() {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % images.length);
  }

  return (
    <div className="relative min-h-[320px] overflow-hidden bg-charcoal sm:min-h-[420px] lg:min-h-[520px]">
      <Image
        key={images[activeIndex]}
        src={images[activeIndex]}
        alt={`${name} · photo ${activeIndex + 1}`}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        quality={90}
        priority={activeIndex === 0}
        className="animate-[hero-rise_450ms_ease_both] object-cover motion-reduce:animate-none"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-charcoal/10" />

      <span className="absolute left-5 top-5 border border-white/35 bg-charcoal/55 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[.16em] text-white backdrop-blur-sm">
        Photo {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </span>

      <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
        <button
          type="button"
          onClick={showPrevious}
          aria-label={`Photo précédente · ${name}`}
          className="grid size-11 place-items-center border border-white/40 bg-charcoal/50 text-white backdrop-blur-sm transition-colors hover:border-brand-red hover:bg-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={showNext}
          aria-label={`Photo suivante · ${name}`}
          className="grid size-11 place-items-center border border-white/40 bg-charcoal/50 text-white backdrop-blur-sm transition-colors hover:border-brand-red hover:bg-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 px-5 pb-5 sm:px-7">
        <div className="flex gap-2" aria-label="Choisir une photo">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Afficher la photo ${index + 1} · ${name}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-1.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white ${index === activeIndex ? "w-8 bg-brand-red" : "w-3 bg-white/70 hover:bg-white"}`}
            />
          ))}
        </div>
        <span className="text-[9px] font-bold uppercase tracking-[.14em] text-white/85">
          Mes Protéines Nutrition
        </span>
      </div>
    </div>
  );
}
