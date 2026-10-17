import { ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "Comment choisir la protéine qui me convient ?",
    answer:
      "Le choix de la protéine dépend de vos objectifs personnels. La whey protein est idéale pour la récupération musculaire après l'entraînement, tandis que la caséine est plus adaptée pour une absorption lente, parfaite avant le coucher.",
  },
  {
    question: "Quand dois-je prendre ma protéine ?",
    answer:
      "Pour des résultats optimaux, prenez votre whey protein dans les 30 minutes suivant votre entraînement. La caséine est recommandée avant de dormir pour fournir des acides aminés pendant la nuit.",
  },
  {
    question: "Quels sont les délais et frais de livraison ?",
    answer:
      "Nous livrons partout au Maroc en 24 à 72 heures selon votre localisation. La livraison est gratuite à Casablanca, et seulement 30 DH pour le reste du Maroc.",
  },
  {
    question: "Comment savoir si les produits sont authentiques ?",
    answer:
      "Tous nos produits sont 100% authentiques et importés directement des fournisseurs officiels. Chaque produit est accompagné d'un code de vérification que vous pouvez contrôler sur le site officiel du fabricant.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-6 mt-8 bg-[#212326] px-[clamp(20px,4vw,60px)] py-[clamp(56px,7vw,96px)] text-white" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div className="flex flex-col items-start">
          <p className="mb-4 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.22em] text-[#e46a61]">
            <span className="h-px w-5 bg-[#e46a61]" aria-hidden="true" />
            Conseils & services
          </p>
          <h2 id="faq-title" className="m-0 max-w-[460px] font-heading text-[clamp(38px,5vw,68px)] font-black uppercase leading-[.92] tracking-[-.025em]">
            Une question<span className="text-[#e46a61]"> ?</span>
            <br />
            On vous répond.
          </h2>
          <p className="mb-7 mt-5 max-w-[380px] text-[14px] leading-6 text-white/60">
            Tout ce qu’il faut savoir sur nos suppléments et nos services, en quelques réponses.
          </p>
          <a
            href="https://wa.me/212522980410"
            className="group inline-flex min-h-11 items-center gap-3 border border-white/25 px-4 text-[12px] font-bold transition-colors hover:border-[#e46a61] hover:text-[#e46a61] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e46a61]"
          >
            Contactez-nous
            <ArrowUpRight size={16} className="text-[#e46a61] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        <div className="border-t border-white/15">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item group border-b border-white/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#e46a61] sm:py-6 [&::-webkit-details-marker]:hidden">
                <span className="max-w-[600px] text-[16px] font-semibold leading-snug text-white sm:text-[18px]">{faq.question}</span>
                <span className="flex size-8 flex-none items-center justify-center border border-white/20 text-[20px] font-light leading-none text-[#e46a61] transition-colors group-open:border-[#e46a61] group-open:bg-[#e46a61] group-open:text-[#171819]" aria-hidden="true">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <div className="faq-answer">
                <p className="mb-0 max-w-[650px] pb-6 pr-12 text-[13px] leading-6 text-white/60 sm:text-[14px]">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
