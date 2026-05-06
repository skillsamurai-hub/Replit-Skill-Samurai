import type { Metadata } from "next";
import Faq from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "FAQ | Skill Samurai Winnipeg",
  description:
    "Answers to common questions about Skill Samurai Winnipeg's coding and STEM classes for kids — ages, pricing, locations, and more.",
};

export default function FaqPage() {
  return (
    <>
      <Faq />
      <FinalCta />
    </>
  );
}
