import { Header } from "@/layout/header";
import { Hero } from "@/components/hero";
import { FeaturedProducts } from "@/components/featured-products";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts />
    </>
  );
}
