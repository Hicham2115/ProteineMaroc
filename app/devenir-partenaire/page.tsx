import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Check,
} from "lucide-react";
import { Header } from "@/layout/header";
import { SiteFooter } from "@/components/site-footer";
import { PartnerForm } from "@/components/partner-form";

export const metadata: Metadata = {
  title: "Devenir partenaire | Mes Protéines Nutrition",
  description:
    "Rejoignez le programme partenaire de Mes Protéines Nutrition. Pour les coachs, salles de sport, créateurs de contenu et revendeurs au Maroc.",
};

const benefits = [
  {
    title: "Tarifs partenaires",
    description: "Des conditions adaptées à votre activité.",
  },
  {
    title: "Rémunération des ventes",
    description: "Une collaboration qui valorise les ventes générées.",
  },
  {
    title: "Nouveautés en priorité",
    description: "Découvrez les nouveaux produits et offres spéciales.",
  },
];

const partnerTypes = [
  { label: "Coachs sportifs", note: "Accompagnez vos clients avec des produits adaptés." },
  { label: "Salles de sport", note: "Proposez une offre complémentaire à vos adhérents." },
  { label: "Créateurs de contenu", note: "Partagez votre expérience avec votre communauté." },
  { label: "Revendeurs", note: "Développez votre sélection nutrition sportive." },
];

export default function PartnerPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-charcoal px-[clamp(20px,5vw,80px)] py-[clamp(64px,9vw,122px)] text-white">
          <Image
            src="/images/audience/men-editorial.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(24,26,28,.92)_0%,rgba(24,26,28,.82)_48%,rgba(24,26,28,.7)_100%)]"
            aria-hidden="true"
          />
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:gap-20">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.22em] text-[#ef7770]">
                <span className="h-px w-8 bg-brand-red" aria-hidden="true" />
                Ensemble, plus loin
              </p>
              <h1 className="m-0 max-w-[820px] font-heading text-[clamp(54px,8vw,112px)] font-black uppercase leading-[.84] tracking-[-.035em]">
                Devenez
                <br />
                <span className="text-brand-red">partenaire.</span>
              </h1>
              <p className="mb-0 mt-7 max-w-[600px] text-[15px] leading-7 text-white/70 sm:text-[17px] sm:leading-8">
                Vous êtes coach sportif, salle de sport, créateur de contenu ou
                revendeur ? Construisons ensemble une collaboration qui fait
                grandir votre activité et accompagne les sportifs au Maroc.
              </p>
              <a
                href="#candidature"
                className="mt-8 inline-flex min-h-12 items-center gap-3 bg-brand-red px-5 text-[13px] font-bold text-white transition-colors hover:bg-brand-red-deep focus-visible:outline-white"
              >
                Proposer un partenariat
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>

            <div className="border-t border-white/20 lg:mb-1">
              {benefits.map(({ title, description }, index) => (
                <article key={title} className="grid grid-cols-[34px_1fr] gap-3 border-b border-white/15 py-5 sm:grid-cols-[42px_1fr] sm:gap-4">
                  <span className="pt-0.5 font-heading text-[20px] leading-none text-[#ef7770]">0{index + 1}</span>
                  <div>
                    <h2 className="mb-1 mt-0 text-[14px] font-bold">{title}</h2>
                    <p className="m-0 text-[12px] leading-5 text-white/55">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f2ec] px-[clamp(20px,5vw,80px)] py-[clamp(56px,8vw,104px)]">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-9 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[.2em] text-brand-red">
                  Un réseau fait pour avancer
                </p>
                <h2 className="m-0 max-w-[700px] text-[clamp(30px,4vw,48px)] font-bold leading-[1.04] tracking-[-.04em] text-charcoal">
                  Un partenariat adapté à votre métier.
                </h2>
              </div>
              <p className="mb-1 max-w-[400px] text-[13px] leading-6 text-charcoal/65">
                Le programme s’adresse aux professionnels et passionnés qui
                partagent le goût du sport, du conseil et des produits de qualité.
              </p>
            </div>

            <div className="grid border-y border-charcoal/15 sm:grid-cols-2 lg:grid-cols-4">
              {partnerTypes.map(({ label, note }, index) => (
                <article key={label} className="border-b border-charcoal/15 py-5 pr-5 last:border-0 sm:px-5 sm:odd:border-r sm:odd:pl-0 sm:even:border-r-0 lg:border-b-0 lg:border-r lg:px-5 lg:first:pl-0 lg:last:border-0">
                  <p className="mb-5 text-[10px] font-bold tabular-nums tracking-[.16em] text-brand-red">0{index + 1} <span className="ml-1 text-charcoal/35">/ 04</span></p>
                  <h3 className="mb-2 mt-0 text-[15px] font-bold text-charcoal">{label}</h3>
                  <p className="m-0 max-w-[240px] text-[12px] leading-5 text-charcoal/60">{note}</p>
                </article>
              ))}
            </div>

            <div className="mt-14 grid gap-8 border-t border-charcoal/15 pt-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-16">
              <div>
                <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[.2em] text-brand-red">
                  Les prochaines étapes
                </p>
                <h2 className="m-0 text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.02] tracking-[-.04em] text-charcoal">
                  De votre premier contact à la collaboration.
                </h2>
              </div>
              <ol className="m-0 grid list-none border-t border-charcoal/15 p-0 sm:grid-cols-3">
                {[
                  ["Présentez votre activité", "Parlez-nous de votre projet et de votre public."],
                  ["Échangeons ensemble", "Notre équipe revient vers vous pour en discuter."],
                  ["Définissons la suite", "Nous précisons ensemble les modalités adaptées."],
                ].map((step, index) => (
                  <li key={step[0]} className="border-b border-charcoal/15 py-5 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-0">
                    <span className="mb-4 block font-heading text-[24px] leading-none text-brand-red">0{index + 1}</span>
                    <h3 className="mb-2 mt-0 text-[13px] font-bold text-charcoal">{step[0]}</h3>
                    <p className="m-0 text-[12px] leading-5 text-charcoal/60">{step[1]}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="candidature" className="scroll-mt-6 px-[clamp(20px,5vw,80px)] py-[clamp(64px,9vw,120px)]" aria-labelledby="partner-form-title">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-4 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.22em] text-brand-red">
                <span className="h-px w-7 bg-brand-red" aria-hidden="true" />
                On en parle ?
              </p>
              <h2 id="partner-form-title" className="m-0 font-heading text-[clamp(46px,7vw,86px)] font-black uppercase leading-[.86] tracking-[-.035em] text-charcoal">
                Parlons
                <br />
                partenariat.
              </h2>
              <p className="mb-0 mt-6 max-w-[430px] text-[14px] leading-7 text-charcoal/65">
                Dites-nous quelques mots sur vous et votre projet. Notre équipe
                vous recontactera pour échanger sur la suite.
              </p>
              <p className="mb-0 mt-6 inline-flex items-center gap-2 text-[12px] text-charcoal/60">
                <Check size={15} className="text-brand-red" aria-hidden="true" />
                Réponse par e-mail ou téléphone
              </p>
            </div>
            <PartnerForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
