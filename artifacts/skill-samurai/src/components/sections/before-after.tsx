import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { XCircle, CheckCircle2 } from "lucide-react";

export default function BeforeAfter() {
  const before = [
    "Screen time that feels unproductive",
    "Daily pushback around devices",
    "Gives up quickly when things get hard",
    "Hard to stay focused",
    "Not much to show for their time"
  ];

  const after = [
    "Creating their own games and projects",
    "Focused and engaged on something they care about",
    "Works through challenges instead of quitting",
    "Looks forward to class each week",
    "Excited to show you what they built"
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 pt-4 md:pt-10">
        <FadeIn className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">The Shift</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight mb-8">
            <span className="text-secondary block mb-2">WHAT YOU'LL START</span>
            <span className="text-primary">TO NOTICE AT HOME</span>
          </h3>
          <p className="text-xl text-muted-foreground font-medium">
            Your child goes from just playing games… to building something they're proud of.
          </p>
        </FadeIn>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          <FadeIn direction="right" className="bg-muted/30 border-[3px] border-muted rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 relative overflow-hidden h-full shadow-xl shadow-black/5 hover:-translate-y-2 transition-transform">
            <div className="absolute top-0 left-0 w-3 h-full bg-destructive/60"></div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-16 w-16 rounded-[1.25rem] bg-destructive/10 flex items-center justify-center text-destructive -rotate-3">
                <XCircle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-black font-heading text-secondary uppercase tracking-wide">BEFORE<br/>SKILL SAMURAI</h3>
            </div>
            
            <ul className="space-y-6">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <XCircle className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="bg-primary/5 border-[3px] border-primary/20 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 relative overflow-hidden h-full shadow-2xl shadow-primary/10 hover:-translate-y-2 transition-transform">
            <div className="absolute top-0 left-0 w-3 h-full bg-primary"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[40px]"></div>
            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div className="h-16 w-16 rounded-[1.25rem] bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 rotate-3">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-black font-heading text-secondary uppercase tracking-wide">AFTER<br/>SKILL SAMURAI</h3>
            </div>
            
            <ul className="space-y-6 relative z-10">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary font-bold text-lg">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 pt-8 border-t-[3px] border-primary/10 relative z-10">
              <p className="text-primary font-black italic text-center text-xl uppercase tracking-wide">
                "You'll see the difference — not just hear about it."
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 h-px w-full bg-border/70" />
    </section>
  );
}