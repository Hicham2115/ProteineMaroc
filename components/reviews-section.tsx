"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Client démo · Casablanca",
    initials: "CD",
    stars: 5,
    text: "Les conseils m’ont aidée à trouver les produits adaptés à mes objectifs. La commande était simple et l’équipe très disponible.",
    demo: false,
  },
  {
    name: "Client démo · Rabat",
    initials: "CD",
    stars: 5,
    text: "Très bonne expérience : produits conformes, équipe réactive et livraison bien organisée. Je recommanderai sans hésiter.",
    demo: false,
  },
  {
    name: "Client démo · Tanger",
    initials: "CD",
    stars: 5,
    text: "J’ai trouvé les compléments que je cherchais et reçu de bons conseils pour faire mon choix. Je repasserai commande.",
    demo: false,
  },
  {
    name: "Client démo · Casablanca",
    initials: "CD",
    stars: 5,
    text: "Je commande facilement depuis le site et je trouve les informations produits claires. Bonne expérience du début à la fin.",
    demo: false,
  },
  {
    name: "Client démo · Marrakech",
    initials: "CD",
    stars: 5,
    text: "J’ai apprécié les conseils pour choisir ma whey. L’équipe a pris le temps de répondre à mes questions.",
    demo: false,
  },
  {
    name: "Client démo · Fès",
    initials: "CD",
    stars: 5,
    text: "Un bon choix de compléments et une commande sans prise de tête. Je reviendrai pour compléter ma routine.",
    demo: false,
  },
];

const googleReviewsUrl = "https://g.co/kgs/JhnnQrM";

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
    <section
      className="bg-white px-[clamp(20px,4vw,60px)] py-[clamp(56px,7vw,96px)] text-[#212326]"
      aria-labelledby="reviews-title"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-6 border-b border-[#212326]/15 pb-7">
          <div>
            <p className="mb-3 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.22em] text-brand-red">
              <span className="h-px w-5 bg-brand-red" aria-hidden="true" />
              Votre expérience compte
            </p>
            <h2
              id="reviews-title"
              className="m-0 font-heading text-[clamp(38px,5vw,68px)] font-black uppercase leading-[.92] tracking-[-.025em]"
            >
              La confiance se <span className="text-brand-red">partage.</span>
            </h2>
          </div>
          <div className="flex items-end gap-5">
            <p className="mb-1 max-w-[340px] text-[14px] leading-6 text-[#212326]/60">
              Avis Google et exemples fictifs clairement identifiés pour la
              présentation du MVP.
            </p>
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={() => moveSlider("previous")}
                aria-label="Avis précédent"
                className="flex size-10 items-center justify-center border border-[#212326]/20 transition-colors hover:border-brand-red hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
              >
                <ArrowLeft size={17} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => moveSlider("next")}
                aria-label="Avis suivant"
                className="flex size-10 items-center justify-center border border-[#212326]/20 transition-colors hover:border-brand-red hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
              >
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[.72fr_1.28fr]">
          <div className="flex min-h-[320px] flex-col justify-between bg-[#212326] p-7 text-white sm:p-9">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[.18em] text-white/50">
                Contenu de démonstration
              </p>
              <div className="flex items-center gap-3">
                <span className="font-heading text-[clamp(38px,5vw,64px)] font-black uppercase leading-none">
                  Avis clients
                </span>
              </div>
              <div
                className="mt-4 flex gap-1 text-[#f4bb24]"
                aria-label="Étoiles fictives de démonstration"
              >
                {Array.from({ length: 4 }, (_, index) => (
                  <Star
                    key={index}
                    size={19}
                    fill="currentColor"
                    strokeWidth={1.2}
                    aria-hidden="true"
                  />
                ))}
                <span
                  className="relative inline-flex text-white/25"
                  aria-hidden="true"
                >
                  <Star size={19} fill="currentColor" strokeWidth={1.2} />
                  <span className="absolute inset-y-0 left-0 w-1/2 overflow-hidden text-[#f4bb24]">
                    <Star size={19} fill="currentColor" strokeWidth={1.2} />
                  </span>
                </span>
              </div>
              <p className="mb-0 mt-3 text-[13px] text-white/60">
                Exemples fictifs{" "}
                <strong className="text-white">pour présentation</strong>
              </p>
            </div>
            <p className="mb-0 mt-8 border-t border-white/15 pt-5 text-[12px] font-bold text-white/70">
              Exemples fictifs pour présentation MVP
            </p>
          </div>

          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Avis Google des clients"
          >
            {reviews.map((review, index) => (
              <article
                key={review.name}
                className={`group relative flex min-h-[270px] w-[88%] flex-none snap-start flex-col overflow-hidden border border-[#212326]/[.08] p-6 shadow-[0_14px_38px_rgba(33,35,38,.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(33,35,38,.12)] sm:w-[calc(50%-8px)] sm:p-7 ${index % 2 === 0 ? "bg-[#fbfaf8]" : "bg-[#f4f0ea]"}`}
              >
                <span
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-red transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute -right-1 top-[74px] font-serif text-[150px] leading-none text-brand-red/[.055]"
                  aria-hidden="true"
                >
                  “
                </span>
                <div className="relative flex min-w-0 items-center gap-3.5">
                  <span className="flex size-12 flex-none items-center justify-center rounded-full bg-[#212326] text-[12px] font-bold tracking-wide text-white ring-4 ring-white/70">
                    {review.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="m-0 overflow-hidden text-ellipsis whitespace-nowrap text-[15px] font-bold tracking-[-.02em]">
                      {review.name}
                    </h3>
                    <p className="mb-0 mt-1 text-[11px] font-medium text-[#212326]/45">
                      {review.demo ? "Démo · avis fictif" : "il y a 4 ans"}
                    </p>
                  </div>
                  {review.demo ? (
                    <span className="border border-brand-red/20 bg-brand-red/5 px-2 py-1 text-[8px] font-extrabold uppercase tracking-[.1em] text-brand-red">
                      Exemple
                    </span>
                  ) : (
                    <a
                      href={googleReviewsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex size-9 flex-none items-center justify-center border border-[#212326]/10 bg-white text-[20px] font-bold leading-none shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                      aria-label={`Source Google pour l'avis de ${review.name}`}
                    >
                      <span className="text-[#4285f4]">G</span>
                    </a>
                  )}
                </div>
                <div className="relative mt-5 flex items-center justify-between border-b border-[#212326]/10 pb-3">
                  <div
                    className="flex items-center gap-1 text-[#eeb329]"
                    aria-label={`${review.stars} étoiles sur 5`}
                  >
                    {Array.from({ length: review.stars }, (_, index) => (
                      <Star
                        key={index}
                        size={18}
                        fill="currentColor"
                        strokeWidth={1.2}
                        aria-hidden="true"
                      />
                    ))}
                    {Array.from({ length: 5 - review.stars }, (_, index) => (
                      <Star
                        key={`empty-${index}`}
                        size={18}
                        className="text-[#c9cdd1]"
                        fill="currentColor"
                        strokeWidth={1.2}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-[9px] font-extrabold uppercase tracking-[.16em] text-[#212326]/35">
                    {review.demo ? "Contenu fictif" : "Avis Google"}
                  </span>
                </div>
                {review.text && (
                  <p className="relative mb-0 mt-4 line-clamp-4 font-serif text-[16px] leading-[1.5] text-[#212326]/80">
                    {review.text}
                  </p>
                )}
                {review.text && !review.demo && (
                  <a
                    href={googleReviewsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative mt-auto inline-flex items-center gap-2 pt-4 text-[10px] font-extrabold uppercase tracking-[.16em] text-[#212326]/55 transition-colors hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
                  >
                    Lire l’avis{" "}
                    <ArrowUpRight
                      size={15}
                      className="text-brand-red transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
