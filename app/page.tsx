import { Header } from "@/layout/header";
import { Hero } from "@/components/hero";
import { FeaturedProducts } from "@/components/featured-products";
import { FeaturedCarnibolic } from "@/components/featured-carnibolic";
import { CategoriesSection } from "@/components/categories-section";
import { GoalsSection } from "@/components/goals-section";
import { AudienceSection } from "@/components/audience-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { BmiCalculator } from "@/components/bmi-calculator";
import { TrustStrip } from "@/components/trust-strip";
import { ReviewsSection } from "@/components/reviews-section";
import { SiteFooter } from "@/components/site-footer";
import { SectionReveal } from "@/components/section-reveal";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SectionReveal>
        <FeaturedProducts />
      </SectionReveal>
      <SectionReveal>
        <AudienceSection />
      </SectionReveal>
      <SectionReveal>
        <GoalsSection />
      </SectionReveal>
      <SectionReveal>
        <CategoriesSection />
      </SectionReveal>
      <SectionReveal>
        <FeaturedCarnibolic />
      </SectionReveal>
      <SectionReveal>
        <ReviewsSection />
      </SectionReveal>
      <SectionReveal>
        <FaqSection />
      </SectionReveal>
      <SectionReveal>
        <TrustStrip />
      </SectionReveal>
      <SectionReveal>
        <ContactSection />
      </SectionReveal>
      <SectionReveal>
        <BmiCalculator />
      </SectionReveal>
      <SectionReveal>
        <SiteFooter />
      </SectionReveal>
    </>
  );
}
