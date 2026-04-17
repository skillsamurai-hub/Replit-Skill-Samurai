import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import pressLogos from "@assets/Screenshot_2026-04-16_234926_1776401391361.png";

export default function FeaturedIn() {
  return (
    <section className="bg-secondary border-b border-white/10 py-6 md:py-8">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-4">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/60">
            As Featured In
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <img
            src={pressLogos}
            alt="As featured in Spotify, FOX, CBS, NBC News, Today's Parent, MyMorning"
            className="mx-auto w-full max-w-5xl h-auto block"
          />
        </FadeIn>
      </div>
    </section>
  );
}
