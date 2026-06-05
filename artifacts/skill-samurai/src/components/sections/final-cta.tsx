import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight, Sparkles, Brain, Smile, ShieldCheck } from "lucide-react";
import instructorPhoto from "@assets/Skill_Samurai_Instructor_1780643130655.png";

export default function FinalCta() {
  return (
    <section className="py-16 md:py-24 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="max-w-6xl mx-auto relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative bg-secondary text-white border-[3px] border-white/10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-secondary/30 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/20 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row">

              <div className="lg:w-[58%] p-6 sm:p-8 md:p-10 xl:p-14 text-center lg:text-left flex flex-col justify-center">
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-accent mb-4">
                  Free trial · No commitment
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white uppercase tracking-tight mb-5 leading-[1.05]">
                  Let your child try it.<br />
                  You'll see the <span className="text-primary">difference</span>.
                </h2>

                <p className="text-base md:text-lg text-white/80 font-medium mb-6 md:mb-8">
                  One free hour. A real class, a real project, and a clear picture of what your child walks away with.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-6 md:mb-8 text-left">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <Smile className="h-5 w-5 text-accent mb-2" />
                    <h3 className="text-white font-bold text-sm mb-1">A confident, proud kid</h3>
                    <p className="text-white/70 text-xs leading-snug">They'll show you something they built — and actually want to keep going.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <Brain className="h-5 w-5 text-accent mb-2" />
                    <h3 className="text-white font-bold text-sm mb-1">Screen time that builds skills</h3>
                    <p className="text-white/70 text-xs leading-snug">Coding, problem-solving, and focus — instead of endless scrolling.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <Sparkles className="h-5 w-5 text-accent mb-2" />
                    <h3 className="text-white font-bold text-sm mb-1">A real taste of class</h3>
                    <p className="text-white/70 text-xs leading-snug">Meet the instructors, see the curriculum, and watch your child in action.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <ShieldCheck className="h-5 w-5 text-accent mb-2" />
                    <h3 className="text-white font-bold text-sm mb-1">Zero pressure to sign up</h3>
                    <p className="text-white/70 text-xs leading-snug">No sales pitch. Just an honest hour to see if it's the right fit.</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3">
                  <a
                    href="#locations"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-sm font-black uppercase tracking-wide text-white shadow-2xl shadow-primary/40 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 group border-b-4 border-primary-foreground/20"
                  >
                    Book a Free Trial Class
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <p className="mt-4 text-white/50 text-xs font-medium text-center lg:text-left">
                  Takes 1 hour · Both Winnipeg locations · Ages 6–18
                </p>

                <p className="mt-5 hidden lg:block text-white/40 text-xs font-bold uppercase tracking-widest border-t border-white/10 pt-5">
                  Real instructors. Real one-on-one attention.
                </p>
              </div>

              <div className="lg:w-[42%] flex-shrink-0 relative order-first lg:order-last">
                <div className="relative h-72 sm:h-80 lg:h-full min-h-[400px]">
                  <Image
                    src={instructorPhoto}
                    alt="Skill Samurai instructor working one-on-one with a student at a computer"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-secondary/80" />
                  <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                    <p className="text-white/90 text-xs font-bold uppercase tracking-widest">
                      Real instructors. Real one-on-one attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
