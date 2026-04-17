import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Star } from "lucide-react";

export default function Results() {
  const outcomes = [
    "More confidence to tackle hard problems",
    "Better focus that translates to schoolwork",
    "Genuine excitement to learn something new",
    "Immense pride in what they build",
    "Technical skills that last a lifetime"
  ];

  return (
    <section className="py-32 bg-secondary/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 pt-10">
        <div className="bg-secondary rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl shadow-secondary/20">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 4px 4px, rgba(255,255,255,0.4) 2px, transparent 0)', backgroundSize: '32px 32px' }}></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight mb-8">
                <span className="text-white block mb-2">WHAT PARENTS</span>
                <span className="text-accent">ACTUALLY NOTICE</span>
              </h2>
              <p className="text-xl text-white/80 mb-10 font-medium">
                The shift happens fast. It's not just about coding—it's about a change in how they approach the world.
              </p>
              
              <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 border-[3px] border-white/10 shadow-xl rotate-1 hover:rotate-0 transition-transform">
                <div className="flex gap-2 mb-4 text-accent">
                  <Star className="h-6 w-6 fill-current" />
                  <Star className="h-6 w-6 fill-current" />
                  <Star className="h-6 w-6 fill-current" />
                  <Star className="h-6 w-6 fill-current" />
                  <Star className="h-6 w-6 fill-current" />
                </div>
                <p className="text-white/90 italic mb-6 font-medium text-lg leading-relaxed">
                  "I was amazed. He used to complain when it was time to get off Roblox. Now he begs me to stay longer at Skill Samurai so he can finish his project. He's so proud of what he makes."
                </p>
                <p className="text-base font-black text-accent uppercase tracking-wide">— Local Winnipeg Parent</p>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <ul className="space-y-5">
                {outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-center gap-6 bg-white/10 backdrop-blur-sm border-[3px] border-white/5 rounded-[1.5rem] p-6 hover:bg-white/20 transition-all transform hover:translate-x-2 duration-300 shadow-lg group">
                    <div className="h-14 w-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 text-white font-black text-2xl shadow-inner group-hover:scale-110 transition-transform rotate-3 group-hover:-rotate-3">
                      {i + 1}
                    </div>
                    <span className="text-white font-bold text-xl">{outcome}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 h-px w-full bg-border/70" />
    </section>
  );
}