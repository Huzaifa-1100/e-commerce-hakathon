import BestSellingProducts from "@/components/bestSellingProducts";
import Category from "@/components/category";
import FlashSales from "@/components/flashSales";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { MusicEnhancer } from "@/components/musicExp";
import OurProducts from "@/components/ourProducts";
import TopHeader from "@/components/topHeader";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Top Header */}
      <TopHeader />
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Flash sales */}
      <FlashSales />
      {/* Footer Section */}
      {/* Browse by categroy */}
      <Category />
      {/* Best Selling Products */}
      <BestSellingProducts/>
      {/* Enhance you music experience */}
      <MusicEnhancer/>  
      {/* Explore Our Products */}
      <OurProducts/>
      {/* Footer */}
      <Footer />
    </>
  );
}
