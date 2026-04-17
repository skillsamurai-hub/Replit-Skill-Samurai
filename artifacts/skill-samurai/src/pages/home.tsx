import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import FeaturedIn from "@/components/sections/featured-in";
import FutureReady from "@/components/sections/future-ready";
import Relatability from "@/components/sections/relatability";
import ChildBenefits from "@/components/sections/child-benefits";
import ParentBenefits from "@/components/sections/parent-benefits";
import BeforeAfter from "@/components/sections/before-after";
import Proof from "@/components/sections/proof";
import HowItWorks from "@/components/sections/how-it-works";
import Results from "@/components/sections/results";
import WhyDifferent from "@/components/sections/why-different";
import FinalCta from "@/components/sections/final-cta";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedIn />
        <FutureReady />
        <Relatability />
        <ChildBenefits />
        <ParentBenefits />
        <BeforeAfter />
        <Proof />
        <HowItWorks />
        <Results />
        <WhyDifferent />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
