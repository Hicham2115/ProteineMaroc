import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const goals = [
  {
    title: "Prise de masse",
    description: "Découvrez notre gamme pour soutenir vos objectifs de prise de masse.",
    image: "/images/categories/prise-de-masse.webp",
    href: "https://mesproteines.ma/categorie/prise-de-masse/",
  },
  {
    title: "Perte de poids",
    description: "Explorez des produits adaptés à votre objectif de perte de poids.",
    image: "/images/categories/perte-de-poids.webp",
    href: "https://mesproteines.ma/categorie/perte-de-poids/",
  },
  {
    title: "Performance",
    description: "Trouvez les suppléments qui accompagnent vos entraînements.",
    image: "/images/categories/performance.webp",
    href: "https://mesproteines.ma/categorie/bcaa/",
  },
  {
    title: "Bien-être & santé",
    description: "Découvrez notre sélection pour le bien-être au quotidien.",
    image: "/images/categories/bien-etre.webp",
    href: "https://mesproteines.ma/categorie/6/",
  },
];

export function GoalsSection() {
  return (
    <section className="overflow-hidden bg-charcoal px-[clamp(20px,4vw,60px)] py-[clamp(52px,7vw,96px)] text-white" aria-labelledby="goals-title">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex items-end justify-between gap-8 max-[700px]:mb-6 max-[700px]:block">
          <div>
            <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[.22em] text-[#e46a61]">Votre entraînement, votre voie</p>
            <h2 id="goals-title" className="m-0 font-heading text-[clamp(34px,4.4vw,62px)] font-black uppercase leading-[.92] tracking-[-.025em]">
              Quel est votre <span className="text-[#e46a61]">objectif&nbsp;?</span>
            </h2>
          </div>
          <p className="mb-1 max-w-[370px] text-[14px] leading-6 text-white/65 max-[700px]:mt-4 max-[700px]:max-w-[520px]">
            Découvrez une sélection pensée pour chaque étape de votre parcours.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[600px]:-mx-5 max-[600px]:flex max-[600px]:snap-x max-[600px]:snap-mandatory max-[600px]:gap-3 max-[600px]:overflow-x-auto max-[600px]:px-5 max-[600px]:pb-2">
          {goals.map((goal) => (
            <a
              key={goal.title}
              href={goal.href}
              className="group relative isolate flex aspect-[.78/1] min-h-[260px] flex-col justify-end overflow-hidden bg-[#33383b] p-5 outline-none focus-visible:ring-2 focus-visible:ring-[#e46a61] focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal max-[600px]:w-[78vw] max-[600px]:flex-none max-[600px]:snap-start max-[600px]:p-4"
            >
              <Image
                src={goal.image}
                alt=""
                fill
                sizes="(max-width: 600px) 78vw, (max-width: 900px) 48vw, 24vw"
                className="-z-20 object-cover transition-transform duration-700 group-hover:scale-[1.045] motion-reduce:transition-none"
              />
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,17,18,.05)_20%,rgba(15,17,18,.28)_49%,rgba(15,17,18,.92)_100%)]" aria-hidden="true" />
              <span className="absolute inset-x-5 bottom-0 h-[3px] origin-left scale-x-0 bg-brand-red transition-transform duration-300 group-hover:scale-x-100 max-[600px]:inset-x-4" aria-hidden="true" />
              <span className="mb-2 block text-[9px] font-bold uppercase tracking-[.2em] text-white/65">Explorez la sélection</span>
              <span className="flex items-center justify-between gap-3 font-heading text-[clamp(21px,2.1vw,30px)] font-black uppercase leading-[.98]">
                {goal.title}
                <ArrowUpRight className="size-5 flex-none text-[#e46a61] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </span>
              <span className="mt-2 max-w-[260px] text-[12px] leading-[1.5] text-white/75">{goal.description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
