import { Header } from "@/layout/header";
import { Hero } from "@/components/hero";
import { FeaturedProducts } from "@/components/featured-products";
import { FeaturedCarnibolic } from "@/components/featured-carnibolic";
import { CategoriesSection } from "@/components/categories-section";
import { GoalsSection } from "@/components/goals-section";
import { AudienceSection } from "@/components/audience-section";
import { FaqSection } from "@/components/faq-section";
import { TrustStrip } from "@/components/trust-strip";
import { ReviewsSection } from "@/components/reviews-section";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts />
      <AudienceSection />
      <GoalsSection />
      <CategoriesSection />
      <FeaturedCarnibolic />
      <ReviewsSection />

      <FaqSection />
      <TrustStrip />
    </>
  );
}
