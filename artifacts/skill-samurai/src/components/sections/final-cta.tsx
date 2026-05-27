import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight, Sparkles, Brain, Smile, ShieldCheck } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="py-16 md:py-24 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="max-w-5xl mx-auto relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative bg-secondary text-white border-[3px] border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-14 shadow-2xl shadow-secondary/30 text-center overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/20 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10">
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-accent mb-4">
                Free trial · No commitment
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white uppercase tracking-tight mb-5 leading-[1.05]">
                Let your child try it.<br />
                You'll see the <span className="text-primary">difference</span>.
              </h2>

              <p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto mb-6 md:mb-10">
                One free hour. A real class, a real project, and a clear picture of what your child walks away with.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-10 text-left max-w-4xl mx-auto">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <Smile className="h-6 w-6 text-accent mb-3" />
                  <h3 className="text-white font-bold text-base mb-1">A confident, proud kid</h3>
                  <p className="text-white/70 text-sm leading-snug">They'll show you something they built — and actually want to keep going.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <Brain className="h-6 w-6 text-accent mb-3" />
                  <h3 className="text-white font-bold text-base mb-1">Screen time that builds skills</h3>
                  <p className="text-white/70 text-sm leading-snug">Coding, problem-solving, and focus — instead of endless scrolling.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <Sparkles className="h-6 w-6 text-accent mb-3" />
                  <h3 className="text-white font-bold text-base mb-1">A real taste of class</h3>
                  <p className="text-white/70 text-sm leading-snug">Meet the instructors, see the curriculum, and watch your child in action.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <ShieldCheck className="h-6 w-6 text-accent mb-3" />
                  <h3 className="text-white font-bold text-base mb-1">Zero pressure to sign up</h3>
                  <p className="text-white/70 text-sm leading-snug">No sales pitch. Just an honest hour to see if it's the right fit.</p>
                </div>
              </div>

              <a
                href="#locations"
                className="inline-flex h-14 md:h-16 items-center justify-center rounded-full bg-primary px-7 md:px-10 text-sm md:text-xl font-black uppercase tracking-wide text-white shadow-2xl shadow-primary/40 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 group border-b-4 border-primary-foreground/20"
              >
                LEARN MORE
                <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="mt-6 text-white/60 text-sm font-medium">
                Takes 1 hour · Both Winnipeg locations · Ages 6–18
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
