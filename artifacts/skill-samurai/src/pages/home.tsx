import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import MediaBanner from "@/components/sections/media-banner";
import StatsStrip from "@/components/sections/stats-strip";
import Relatability from "@/components/sections/relatability";
import ChildBenefits from "@/components/sections/child-benefits";
import BeforeAfter from "@/components/sections/before-after";
import Proof from "@/components/sections/proof";
import GoogleReviews from "@/components/sections/google-reviews";
import HowItWorks from "@/components/sections/how-it-works";
import Schedule from "@/components/sections/schedule";
import WeeklyClasses from "@/components/sections/weekly-classes";
import CommunitySchools from "@/components/sections/community-schools";
import Locations from "@/components/sections/locations";
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
        <WeeklyClasses />
        <BeforeAfter />
        <Proof />
        <GoogleReviews />
        <StatsStrip />
        <HowItWorks />
        <Schedule />
        <Locations />
        <FinalCta />
        <CommunitySchools />
      </main>
      <Footer />
    </div>
  );
}
