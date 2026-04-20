import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Gamepad2, Brain, Timer, Trophy } from "lucide-react";

export default function Relatability() {
  const painPoints = [
    {
      icon: <Gamepad2 className="h-10 w-10 text-primary" />,
      title: "Your child loves Roblox, Minecraft, or YouTube",
      desc: "They can spend hours on it… and part of you wonders, \"Is this actually helping them?\""
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "You're not against screens",
      desc: "You just don't want all that time to go to waste — you want it to lead somewhere."
    },
    {
      icon: <Timer className="h-10 w-10 text-primary" />,
      title: "You've tried setting limits",
      desc: "But it usually turns into \"just five more minutes\" — and then frustration on both sides."
    },
    {
      icon: <Trophy className="h-10 w-10 text-primary" />,
      title: "When you ask what they did, it's \"nothing\"",
      desc: "Even though you know they're smart and capable of so much more than what you're seeing."
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-secondary/10 relative overflow-hidden">
      {/* Background dot grid */}

      <div className="container mx-auto px-4 relative z-10 pt-10">
        <FadeIn className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">This might sound familiar...</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight">
            <span className="text-secondary block mb-2">THE SCREEN TIME BATTLE</span>
            <span className="text-primary block">EVERY PARENT KNOWS</span>
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

        <FadeIn delay={0.4} direction="up" className="w-full bg-secondary text-white rounded-[2rem] md:rounded-[3rem] p-8 sm:p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-secondary/30 rotate-0 hover:rotate-0 transition-transform">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/10"></div>
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent rounded-full blur-[60px] opacity-40"></div>
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase font-heading mb-8 leading-tight tracking-tight">
              <span className="text-white block">THAT'S EXACTLY WHY</span>
              <span className="text-accent block">WE BUILT SKILL SAMURAI</span>
            </h3>
            <p className="text-lg md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto font-medium leading-snug">
              Your child already loves being on screens. We turn that into something you can actually feel good about.
            </p>
          </div>
        </FadeIn>
      </div>
      
      <div className="absolute bottom-0 left-0 h-px w-full bg-border/70" />
    </section>
  );
}