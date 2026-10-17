import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <main className="relative isolate flex min-h-[clamp(430px,37.2vw,640px)] items-center overflow-hidden bg-charcoal text-white max-[700px]:min-h-0 max-[700px]:flex-col max-[700px]:items-stretch">
      <div className="absolute inset-0 z-0 max-[700px]:hidden" aria-hidden="true">
        <Image
          className="object-cover object-center"
          src="/images/hero-athletes-desktop-upscaled.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="relative hidden aspect-[2/3] w-full max-[700px]:block" aria-hidden="true">
        <Image
          className="object-cover object-center"
          src="/images/hero-athletes-mobile-portrait.png"
          alt=""
          fill
          priority
          sizes="(max-width: 700px) 100vw, 0px"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-[linear-gradient(180deg,transparent_0%,rgba(32,35,38,.72)_42%,#202326_100%)]" />
      </div>

      <div
        className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(12,12,12,.68)_0%,rgba(12,12,12,.46)_30%,rgba(12,12,12,.12)_48%,transparent_62%)] max-[700px]:hidden"
        aria-hidden="true"
      />

      <div className="relative z-[2] ml-[3.6%] w-[min(34%,520px)] py-8 pr-5 max-[700px]:-mt-[clamp(160px,42vw,240px)] max-[700px]:w-full max-[700px]:bg-transparent max-[700px]:px-[14px] max-[700px]:pb-[clamp(30px,7vw,54px)] max-[700px]:pt-[clamp(32px,8vw,52px)] max-[700px]:text-left">
        <p className="hero-support mb-3 hidden text-[10px] font-bold uppercase tracking-[.2em] text-white/75 max-[700px]:block max-[600px]:text-[9px]">
          Nutrition · performance · bien-être
        </p>
        <h1 className="hero-title-enter m-0 max-w-[500px] font-heading text-[clamp(42px,4.1vw,76px)] font-black uppercase leading-[.9] tracking-[-.025em] [text-wrap:balance] max-[700px]:max-w-[680px] max-[700px]:text-[clamp(40px,8vw,76px)] max-[600px]:max-w-full max-[600px]:font-serif max-[600px]:text-[clamp(30px,7.2vw,42px)] max-[600px]:font-bold max-[600px]:leading-[.98] max-[600px]:tracking-[-.055em]">
          La performance
          <br />
          se vit <em className="hero-title-emphasis font-normal">à votre façon</em><span className="hero-title-period text-brand-red">.</span>
        </h1>
        <span
          className="hero-rule my-[22px] block h-1 w-[116px] -rotate-[3deg] rounded-full bg-brand-red max-[700px]:my-[17px] max-[700px]:h-[3px] max-[700px]:w-[96px] max-[600px]:my-[20px] max-[600px]:w-[68px]"
          aria-hidden="true"
        />
        <p className="hero-copy m-0 max-w-[390px] text-[clamp(17px,1.35vw,32px)] leading-[1.5] text-white/90 max-[700px]:max-w-[560px] max-[700px]:text-[clamp(16px,2.2vw,21px)] max-[600px]:text-[clamp(16px,4.5vw,20px)] max-[600px]:leading-[1.35]">
          Retrouvez des protéines, compléments et vitamines sélectionnés pour accompagner vos objectifs, avec une livraison partout au Maroc.
        </p>
        <a
          className="hero-cta mt-[19px] inline-flex min-h-[clamp(48px,2.65vw,68px)] items-center gap-[15px] bg-brand-red px-6 text-sm font-bold text-white transition-[background-color,transform] duration-150 hover:-translate-y-0.5 hover:bg-brand-red-deep max-[700px]:mt-[18px] max-[700px]:min-h-[54px] max-[700px]:px-5 max-[600px]:min-h-[58px] max-[600px]:w-[calc(100%-12px)] max-[600px]:justify-center max-[600px]:rounded-[14px] max-[600px]:text-[16px]"
          href="https://mesproteines.ma/boutique/"
        >
          Découvrir la boutique <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>
    </main>
  );
}
