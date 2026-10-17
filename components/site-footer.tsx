import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { CurrentYear } from "@/components/current-year";

const shopLinks = [
  { label: "La boutique", href: "/products/" },
  {
    label: "Prise de masse",
    href: "/#goals",
  },
  {
    label: "Perte de poids",
    href: "/#goals",
  },
  { label: "Vitamines & santé", href: "/#categories" },
];

const aboutLinks = [
  { label: "Accueil", href: "/#top" },
  {
    label: "Qui sommes-nous ?",
    href: "/qui-sommes-nous/",
  },
  { label: "Nos conseils", href: "/#faq" },
];

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden border-t-[5px] border-brand-red bg-[#202326] px-[clamp(20px,4vw,60px)] text-white">
      <span
        className="pointer-events-none absolute -right-20 -top-20 -z-10 font-heading text-[clamp(220px,35vw,520px)] font-black uppercase leading-none text-white/[.025]"
        aria-hidden="true"
      >
        MP
      </span>

      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 py-[clamp(56px,7vw,88px)] md:grid-cols-[1.25fr_.75fr_.85fr_1.15fr] md:gap-8 lg:gap-14">
          <div className="max-w-[340px]">
            <Link
              href="/"
              aria-label="Mes Protéines Nutrition, accueil"
              className="inline-block w-[220px] max-w-full"
            >
              <Image
                src="/images/mes-proteines-logo.webp"
                alt="Mes Protéines Nutrition"
                width={958}
                height={284}
                className="h-auto w-full"
              />
            </Link>
            <p className="mb-0 mt-5 max-w-[290px] text-[13px] leading-6 text-white/55">
              La performance à votre façon. Des conseils et des compléments pour
              accompagner chaque objectif.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 border border-white/10 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[.16em] text-white/55">
              <span
                className="size-1.5 rounded-full bg-brand-red"
                aria-hidden="true"
              />
              Livraison partout au Maroc
            </span>
          </div>

          <nav aria-label="Liens boutique">
            <h2 className="mb-5 mt-1 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#e46a61]">
              La boutique
            </h2>
            <ul className="m-0 list-none space-y-3 p-0">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[13px] text-white/70 transition-colors hover:text-white"
                  >
                    <span className="footer-link-flip">{link.label}</span>
                    <ArrowUpRight
                      size={12}
                      className="text-brand-red opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="À propos">
            <h2 className="mb-5 mt-1 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#e46a61]">
              Mes Protéines
            </h2>
            <ul className="m-0 list-none space-y-3 p-0">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[13px] text-white/70 transition-colors hover:text-white"
                  >
                    <span className="footer-link-flip">{link.label}</span>
                    <ArrowUpRight
                      size={12}
                      className="text-brand-red opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-5 mt-1 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#e46a61]">
              Parlons ensemble
            </h2>
            <div className="space-y-4">
              <a
                href="tel:+212522980410"
                className="group flex items-start gap-3 text-[13px] text-white/75 transition-colors hover:text-white"
              >
                <Phone
                  size={15}
                  className="mt-0.5 flex-none text-brand-red"
                  aria-hidden="true"
                />
                <span>Abdelmoumen · +212 522 980 410</span>
              </a>
              <a
                href="tel:+212522958982"
                className="group flex items-start gap-3 text-[13px] text-white/75 transition-colors hover:text-white"
              >
                <Phone
                  size={15}
                  className="mt-0.5 flex-none text-brand-red"
                  aria-hidden="true"
                />
                <span>Twin Center · +212 522 958 982</span>
              </a>
              <a
                href="mailto:infos@mesproteines.ma"
                className="group flex items-start gap-3 text-[13px] text-white/75 transition-colors hover:text-white"
              >
                <Mail
                  size={15}
                  className="mt-0.5 flex-none text-brand-red"
                  aria-hidden="true"
                />
                <span>infos@mesproteines.ma</span>
              </a>
              <p className="m-0 flex items-start gap-3 text-[13px] text-white/55">
                <MapPin
                  size={15}
                  className="mt-0.5 flex-none text-brand-red"
                  aria-hidden="true"
                />
                <span>Casablanca, Maroc</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-5 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">
            © <CurrentYear /> Mes Protéines Nutrition. Tous droits
            réservés.
          </p>
          <p className="m-0 flex items-center gap-2 uppercase tracking-[.14em]">
            Fait pour vos objectifs{" "}
            <span className="h-px w-7 bg-brand-red" aria-hidden="true" />
          </p>
        </div>
      </div>
      <p className="mx-auto max-w-[1440px] px-6 py-4 text-center text-[12px] text-white/70 sm:px-8 lg:px-12">
        Designed &amp; developed by{" "}
        <a
          href="https://www.stallionadvertising.ma/"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-20 underline decoration-transparent underline-offset-2 transition-colors duration-200 hover:text-white hover:decoration-teal-400"
        >
          Stallion Advertising
        </a>
      </p>
    </footer>
  );
}
