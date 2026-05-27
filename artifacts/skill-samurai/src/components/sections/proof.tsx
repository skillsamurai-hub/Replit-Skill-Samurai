import React from "react";
import { FadeIn } from "@/components/ui/fade-in";

export default function Proof() {
  return (
    <section id="proof" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/15 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <FadeIn className="max-w-3xl">
            <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">Real Results</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight mb-6">
              <span className="text-white block mb-2">SEE WHAT KIDS ARE</span>
              <span className="text-primary">ACTUALLY BUILDING</span>
            </h3>
            <p className="text-xl text-white/80 font-medium">
              Most parents are surprised at what their kids can create after just a few classes. This isn't abstract theory; it's hands-on creation.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <FadeIn direction="up" delay={0.1}>
            <div className="group rounded-[3rem] overflow-hidden relative aspect-video bg-secondary border-[8px] border-white shadow-2xl shadow-black/10 hover:-translate-y-2 hover:rotate-1 transition-all duration-500">
              <img 
                src="/images/roblox-project.webp" 
                alt="3D game level built by a student" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full p-5 md:p-10 md:translate-y-4 md:group-hover:translate-y-0 md:transition-transform">
                <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-accent text-secondary text-xs md:text-sm font-black uppercase tracking-wider rounded-full mb-2 md:mb-4 shadow-lg md:rotate-2 md:group-hover:rotate-0 md:transition-transform">Game Design Studio</div>
                <h4 className="text-xl md:text-3xl font-black font-heading mb-2 md:mb-3 text-white">Design Your Own 3D Game</h4>
                <p className="text-white/90 font-medium line-clamp-2 text-sm md:text-lg hidden sm:block">A complete multi-level obstacle course with checkpoints, moving platforms, and custom scripts.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="group rounded-[3rem] overflow-hidden relative aspect-video bg-secondary border-[8px] border-white shadow-2xl shadow-black/10 hover:-translate-y-2 hover:-rotate-1 transition-all duration-500 mt-0 md:mt-12">
              <img 
                src="/images/kids-collaborating.webp" 
                alt="Kids celebrating their coding project" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full p-5 md:p-10 md:translate-y-4 md:group-hover:translate-y-0 md:transition-transform">
                <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary text-white text-xs md:text-sm font-black uppercase tracking-wider rounded-full mb-2 md:mb-4 shadow-lg md:-rotate-2 md:group-hover:rotate-0 md:transition-transform">Small Groups</div>
                <h4 className="text-xl md:text-3xl font-black font-heading mb-2 md:mb-3 text-white">Confidence you can see</h4>
                <p className="text-white/90 font-medium line-clamp-2 text-sm md:text-lg hidden sm:block">Kids smile, collaborate, and leave proud of what they made together.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 h-px w-full bg-border/70" />
    </section>
  );
}