import type { Metadata } from "next";
import { Header } from "@/layout/header";
import { ProductCatalog } from "@/components/product-catalog";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "La boutique | Mes Protéines Nutrition",
  description: "Découvrez notre sélection de protéines, gainers et compléments de nutrition sportive au Maroc.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <ProductCatalog />
      <SiteFooter />
    </>
  );
}
