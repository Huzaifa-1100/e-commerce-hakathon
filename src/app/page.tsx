import FlashSales from "@/components/flashSales";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import TopHeader from "@/components/topHeader";
import Image from "next/image";

export default function Home() {
  return (
   <>
   {/* Top Header */}
   <TopHeader/>
   {/* Header */}
   <Header/>
   {/* Hero Section */}
   <Hero/>
   {/* Flash sales */}
   <FlashSales/>
   {/* Footer Section */}
   <Footer/>
   </>
  );
}
