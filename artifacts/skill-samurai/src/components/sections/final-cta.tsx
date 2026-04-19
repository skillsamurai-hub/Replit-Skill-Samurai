import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="max-w-5xl mx-auto relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative bg-gradient-to-br from-primary/5 via-white to-accent/10 border-[3px] border-primary/15 rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-14 shadow-2xl shadow-primary/10 text-center">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">
              Free trial · No commitment
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-secondary uppercase tracking-tight mb-5 leading-[1.05]">
              Let your child try it.<br />
              <span className="text-primary">You'll see the difference.</span>
            </h2>

            <p className="text-lg md:text-xl text-secondary/70 font-medium max-w-2xl mx-auto mb-8">
              One free 60-minute class. No experience needed. No pressure to sign up.
            </p>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 mb-10 text-secondary/80 text-sm md:text-base font-semibold">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> No experience needed
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Fun &amp; structured
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Month-to-month
              </span>
            </div>

            <a
              href="#locations"
              className="inline-flex h-14 md:h-16 items-center justify-center rounded-full bg-primary px-7 md:px-10 text-sm md:text-xl font-black uppercase tracking-wide text-white shadow-2xl shadow-primary/40 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 group border-b-4 border-primary-foreground/20"
            >
              BOOK YOUR FREE TRIAL
              <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="mt-6 text-secondary/60 text-sm font-medium">
              Zero commitment. A safe answer to the screen-time battle.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
