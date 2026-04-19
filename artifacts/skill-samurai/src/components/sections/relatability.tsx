import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Gamepad2, Brain, Timer, Trophy } from "lucide-react";

export default function Relatability() {
  const painPoints = [
    {
      icon: <Gamepad2 className="h-10 w-10 text-primary" />,
      title: "They're already deep into Roblox, Minecraft, or YouTube",
      desc: "They'll happily lose hours in there. The question is — are they building anything from it, or just consuming it?"
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "You can't tell what's actually helping them",
      desc: "Every app says it's 'educational.' How do you know which ones are building your child's brain — and which ones are just keeping them quiet?"
    },
    {
      icon: <Timer className="h-10 w-10 text-primary" />,
      title: "The 'time's up' fight is wearing everyone down",
      desc: "How is the daily screen-time battle going? Most parents tell us they're tired of being the bad guy — and the kids resent it anyway."
    },
    {
      icon: <Trophy className="h-10 w-10 text-primary" />,
      title: "You know they're smart — but where does that go?",
      desc: "If nothing changes in the next year… where does all that screen-focused energy actually end up?"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-secondary/10 relative overflow-hidden">
      {/* Background dot grid */}

      <div className="container mx-auto px-4 relative z-10 pt-10">
        <FadeIn className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">A few honest questions...</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight">
            <span className="text-secondary block mb-2">DOES ANY OF THIS</span>
            <span className="text-primary block">SOUND LIKE YOUR HOUSE?</span>
          </h3>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {painPoints.map((point, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up" className="bg-white rounded-3xl p-8 border-[3px] border-secondary/15 hover:-translate-y-2 hover:border-primary/40 transition-all shadow-2xl shadow-secondary/15">
              <div className="h-20 w-20 rounded-[1.5rem] bg-primary/15 flex items-center justify-center mb-6 rotate-3 group-hover:-rotate-3 transition-transform">
                {point.icon}
              </div>
              <h4 className="text-xl font-bold font-heading text-secondary mb-3 leading-snug">
                {point.title}
              </h4>
              <p className="text-secondary/70 leading-relaxed font-medium">
                {point.desc}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} direction="up" className="w-full max-w-6xl mx-auto bg-secondary text-white rounded-[2rem] md:rounded-[3rem] p-8 sm:p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-secondary/30 rotate-0 hover:rotate-0 transition-transform">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/10"></div>
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent rounded-full blur-[60px] opacity-40"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black uppercase font-heading mb-6 leading-tight tracking-tight">
              <span className="text-white block">SO HERE'S THE QUESTION</span>
              <span className="text-accent block">WE KEPT ASKING OURSELVES</span>
            </h3>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-medium">
              Your child is on a screen either way — what would it look like if those hours quietly turned into real skills?
            </p>
          </div>
        </FadeIn>
      </div>
      
      <div className="absolute bottom-0 left-0 h-px w-full bg-border/70" />
    </section>
  );
}