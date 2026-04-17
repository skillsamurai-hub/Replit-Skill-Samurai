import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import MediaBanner from "@/components/sections/media-banner";
import Relatability from "@/components/sections/relatability";
import ChildBenefits from "@/components/sections/child-benefits";
import ParentBenefits from "@/components/sections/parent-benefits";
import BeforeAfter from "@/components/sections/before-after";
import Proof from "@/components/sections/proof";
import HowItWorks from "@/components/sections/how-it-works";
import Schedule from "@/components/sections/schedule";
import Results from "@/components/sections/results";
import WhyDifferent from "@/components/sections/why-different";
import Faq from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MediaBanner />
        <Relatability />
        <ChildBenefits />
        <ParentBenefits />
        <BeforeAfter />
        <Proof />
        <HowItWorks />
        <Schedule />
        <Results />
        <WhyDifferent />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
