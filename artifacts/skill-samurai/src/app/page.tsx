import { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/hero";
import MediaBanner from "@/components/sections/media-banner";
import StatsStrip from "@/components/sections/stats-strip";
import Relatability from "@/components/sections/relatability";
import ChildBenefits from "@/components/sections/child-benefits";
import BeforeAfter from "@/components/sections/before-after";
import HowItWorks from "@/components/sections/how-it-works";
import Schedule from "@/components/sections/schedule";
import FinalCta from "@/components/sections/final-cta";
import StudentSpotlightTeaser from "@/components/sections/student-spotlight-teaser";

const WeeklyClasses = dynamic(() => import("@/components/sections/weekly-classes"));
const GoogleReviews = dynamic(() => import("@/components/sections/google-reviews"));
const Locations = dynamic(() => import("@/components/sections/locations"));

export default function HomePage() {
  return (
    <>
      <Hero />
      <MediaBanner />
      <Relatability />
      <BeforeAfter />
      <ChildBenefits />
      <StatsStrip />
      <HowItWorks />
      <Suspense fallback={null}>
        <GoogleReviews />
      </Suspense>
      <StudentSpotlightTeaser />
      <Suspense fallback={null}>
        <WeeklyClasses />
      </Suspense>
      <Suspense fallback={null}>
        <Locations />
      </Suspense>
      <Schedule />
      <FinalCta />
    </>
  );
}
