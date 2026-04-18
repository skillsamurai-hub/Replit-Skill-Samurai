import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Faq from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";

export default function FaqPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
