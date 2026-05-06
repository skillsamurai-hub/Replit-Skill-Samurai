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
import Locations from "@/components/sections/locations";
import FinalCta from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MediaBanner />
      <Relatability />
      <ChildBenefits />
      <StatsStrip />
      <BeforeAfter />
      <WeeklyClasses />
      <GoogleReviews />
      <Proof />
      <HowItWorks />
      <Locations />
      <Schedule />
      <FinalCta />
    </>
  );
}
