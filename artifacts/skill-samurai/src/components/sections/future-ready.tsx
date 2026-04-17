import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import statBanner1 from "@assets/Screenshot_2026-04-16_234931_1776401391361.png";
import statBanner2 from "@assets/Screenshot_2026-04-16_234941_1776401391361.png";

export default function FutureReady() {
  return (
    <section aria-label="Will your child be future-ready?">
      <FadeIn>
        <img
          src={statBanner1}
          alt="Will your child be Future-Ready? 85% of jobs that will exist in 2030 haven't been invented yet — Dell Technologies & the Institute for the Future."
          className="w-full h-auto block"
        />
      </FadeIn>
      <FadeIn delay={0.1}>
        <img
          src={statBanner2}
          alt="By 2030, 80% of all jobs will require digital skills — LinkedIn Workforce Report."
          className="w-full h-auto block"
        />
      </FadeIn>
    </section>
  );
}
