import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Gamepad2, Brain, Timer, Trophy } from "lucide-react";

export default function Relatability() {
  const painPoints = [
    {
      icon: <Gamepad2 className="h-10 w-10 text-primary" />,
      title: "Your child loves Roblox, Minecraft, or YouTube",
      desc: "They can spend hours absorbed in these worlds, but it feels like passive consumption rather than active creation."
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "It's hard to know what's actually helping them",
      desc: "With so many apps and games, distinguishing between empty calories and meaningful brain-building is exhausting."
    },
    {
      icon: <Timer className="h-10 w-10 text-primary" />,
      title: "You don't want to constantly limit screen time",
      desc: "The daily battle of 'time's up' leaves everyone frustrated. You want them off screens, or doing something better on them."
    },
    {
      icon: <Trophy className="h-10 w-10 text-primary" />,
      title: "You just want them doing something productive",
      desc: "You know they're smart. You just need a way to channel that screen-focused energy into real-world skills."
    }
  ];

  return (
    <section className="py-24 bg-muted/40 relative overflow-hidden">
      {/* Background dot grid */}

      <div className="container mx-auto px-4 relative z-10 pt-10">
        <FadeIn className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">This might sound familiar...</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight">
            <span className="text-secondary block mb-2">THE SCREEN TIME BATTLE</span>
            <span className="text-primary">EVERY PARENT KNOWS</span>
          </h3>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {painPoints.map((point, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up" className="bg-white rounded-3xl p-8 border-[3px] border-muted hover:-translate-y-2 hover:border-primary/30 transition-all shadow-xl shadow-black/5">
              <div className="h-20 w-20 rounded-[1.5rem] bg-primary/10 flex items-center justify-center mb-6 rotate-3 group-hover:-rotate-3 transition-transform">
                {point.icon}
              </div>
              <h4 className="text-xl font-bold font-heading text-secondary mb-3 leading-snug">
                {point.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed font-medium">
                {point.desc}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} direction="up" className="max-w-4xl mx-auto bg-secondary text-white rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-secondary/30 rotate-1 hover:rotate-0 transition-transform">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/10"></div>
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent rounded-full blur-[60px] opacity-40"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black uppercase font-heading mb-6 leading-tight tracking-tight">
              <span className="text-white block">THAT'S EXACTLY WHY</span>
              <span className="text-accent block">WE BUILT SKILL SAMURAI</span>
            </h3>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-medium">
              We replace the empty guilt of passive gaming with the profound pride of building something real. You'll finally feel good about their screen time.
            </p>
          </div>
        </FadeIn>
      </div>
      
      <div className="absolute bottom-0 left-0 h-px w-full bg-border/70" />
    </section>
  );
}