import type { Metadata } from "next";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { StoreGallery } from "@/components/store-gallery";
import { SiteFooter } from "@/components/site-footer";
import { Header } from "@/layout/header";

export const metadata: Metadata = {
  title: "Qui sommes-nous ? | Mes Protéines Nutrition",
  description:
    "Découvrez Mes Protéines Nutrition et retrouvez nos magasins à Casablanca, Abdelmoumen et Twin Center.",
};

const stores = [
  {
    name: "Abdelmoumen",
    mapTitle: "Mes Protéines Maroc · Abdelmoumen",
    address:
      "4, Al Mawlid Residence, 37 angle boulevard Abdelmoumen & Anoual, Casablanca 20400",
    hours: ["10:00 – 21:30 · lundi au samedi", "11:00 – 21:00 · dimanche"],
    phone: "+212 522 980 410",
    phoneLink: "tel:+212522980410",
    mapUrl:
      "https://www.google.com/maps?cid=17848875908615251183&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF",
    embedUrl:
      "https://maps.google.com/maps?q=Mes%20Proteines%20Maroc%20ABDELMOUMEN%2C%20Casablanca&output=embed",
    images: [
      "/images/stores/abdelmoumen-01.jpg",
      "/images/stores/abdelmoumen-02.jpg",
      "/images/stores/abdelmoumen-03.jpg",
      "/images/stores/abdelmoumen-04.jpg",
      "/images/stores/abdelmoumen-05.jpg",
    ],
  },
  {
    name: "Twin Center",
    mapTitle: "Mes Protéines Maroc · Twin Center",
    address:
      "Twin Center, boutique n°166, boulevard Al Massira, Casablanca 20250",
    hours: ["10:00 – 21:00 · lundi au samedi", "11:00 – 21:00 · dimanche"],
    phone: "+212 522 958 982",
    phoneLink: "tel:+212522958982",
    mapUrl: "https://www.google.com/maps?cid=11375518540616280601",
    embedUrl:
      "https://maps.google.com/maps?q=Mes%20Proteines%20Maroc%20Twin%20Center%2C%20Casablanca&output=embed",
    images: [
      "/images/stores/twin-center-01.jpg",
      "/images/stores/twin-center-02.jpg",
      "/images/stores/twin-center-03.jpg",
      "/images/stores/twin-center-04.jpg",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#f5f2ec] px-[clamp(20px,5vw,80px)] py-[clamp(52px,8vw,112px)]">
          <div className="mx-auto max-w-[1440px]">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.22em] text-brand-red">
              <span className="h-px w-8 bg-brand-red" aria-hidden="true" />
              Depuis 2010 · Casablanca, Maroc
            </p>
            <div className="grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-end lg:gap-20">
              <h1 className="m-0 max-w-[850px] font-heading text-[clamp(52px,9vw,120px)] font-black uppercase leading-[.84] tracking-[-.035em] text-charcoal">
                La nutrition
                <br />
                <span className="text-brand-red">à vos côtés.</span>
              </h1>
              <div className="max-w-[570px] border-l-2 border-brand-red pl-5 lg:pb-1">
                <h2 className="mb-3 mt-0 text-[20px] font-bold tracking-[-.03em] text-charcoal sm:text-[24px]">
                  Mes Protéines Nutrition
                </h2>
                <p className="m-0 text-[14px] leading-7 text-charcoal/70 sm:text-[16px]">
                  Nous sélectionnons des compléments pour la nutrition sportive
                  et le bien-être au quotidien. Notre équipe met son expérience
                  à votre service pour vous aider à choisir selon vos objectifs,
                  avec des produits de marques reconnues et un accompagnement
                  de proximité.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-3 border-t border-charcoal/15 pt-6 sm:mt-16">
              <span className="inline-flex items-center gap-2 border border-charcoal/15 bg-white/60 px-4 py-3 text-[10px] font-extrabold uppercase tracking-[.14em] text-charcoal">
                <ShieldCheck size={15} className="text-brand-red" aria-hidden="true" />
                Produits authentiques
              </span>
              <span className="inline-flex items-center gap-2 border border-charcoal/15 bg-white/60 px-4 py-3 text-[10px] font-extrabold uppercase tracking-[.14em] text-charcoal">
                <MapPin size={15} className="text-brand-red" aria-hidden="true" />
                Deux magasins à Casablanca
              </span>
            </div>
          </div>
        </section>

        <section
          className="px-[clamp(20px,5vw,80px)] py-[clamp(56px,8vw,104px)]"
          aria-labelledby="stores-title"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-9 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[.2em] text-brand-red">
                  Venez nous rencontrer
                </p>
                <h2
                  id="stores-title"
                  className="m-0 font-heading text-[clamp(38px,6vw,72px)] font-black uppercase leading-[.92] tracking-[-.025em] text-charcoal"
                >
                  Nos magasins
                </h2>
              </div>
              <p className="mb-1 max-w-[390px] text-[13px] leading-6 text-charcoal/60">
                Passez en boutique pour découvrir notre sélection et échanger
                avec notre équipe.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {stores.map((store, index) => (
                <article
                  key={store.name}
                  className="grid overflow-hidden border border-charcoal/10 bg-white shadow-[0_18px_48px_rgba(32,35,38,.07)] lg:grid-cols-[1.05fr_.95fr]"
                >
                  <StoreGallery name={store.name} images={store.images} />

                  <div className="flex flex-col border-t-[3px] border-brand-red p-5 sm:p-7 lg:border-l lg:border-t-0">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div>
                        <p className="mb-1 text-[9px] font-extrabold uppercase tracking-[.2em] text-brand-red">
                          Casablanca · 0{index + 1}
                        </p>
                        <h3 className="m-0 font-heading text-[32px] font-black uppercase leading-none text-charcoal sm:text-[38px]">
                          {store.name}
                        </h3>
                      </div>
                      <MapPin
                        size={22}
                        className="shrink-0 text-brand-red"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="relative mb-2 h-[190px] overflow-hidden bg-[#e8e8e8] sm:h-[220px]">
                      <iframe
                        title={`Carte : ${store.mapTitle}`}
                        src={store.embedUrl}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                        className="absolute inset-0 size-full border-0 grayscale-[.15]"
                      />
                    </div>

                    <div className="divide-y divide-charcoal/10">
                      <div className="flex gap-4 py-4">
                        <MapPin
                          size={18}
                          className="mt-0.5 shrink-0 text-brand-red"
                          aria-hidden="true"
                        />
                        <p className="m-0 text-[13px] leading-6 text-charcoal/75">
                          {store.address}
                        </p>
                      </div>
                      <div className="flex gap-4 py-4">
                        <Clock3
                          size={18}
                          className="mt-0.5 shrink-0 text-brand-red"
                          aria-hidden="true"
                        />
                        <p className="m-0 text-[13px] leading-6 text-charcoal/75">
                          {store.hours.map((hours) => (
                            <span className="block" key={hours}>
                              {hours}
                            </span>
                          ))}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-4 py-4">
                        <a
                          href={store.phoneLink}
                          className="inline-flex items-center gap-3 text-[13px] font-semibold text-charcoal transition-colors hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
                        >
                          <Phone
                            size={17}
                            className="text-brand-red"
                            aria-hidden="true"
                          />
                          {store.phone}
                        </a>
                        <a
                          href={store.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-10 items-center gap-2 bg-charcoal px-4 text-[10px] font-extrabold uppercase tracking-[.1em] text-white transition-colors hover:bg-brand-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
                        >
                          Itinéraire
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
