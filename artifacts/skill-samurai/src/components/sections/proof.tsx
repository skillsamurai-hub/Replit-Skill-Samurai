import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { WaveDivider } from "@/components/ui/wave-divider";

export default function Proof() {
  return (
    <section className="py-32 bg-accent/10 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, hsl(var(--accent)/0.2) 2px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <FadeIn className="max-w-3xl">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Real Results</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight mb-6">
              <span className="text-secondary block mb-2">SEE WHAT KIDS ARE</span>
              <span className="text-primary">ACTUALLY BUILDING</span>
            </h3>
            <p className="text-xl text-secondary/80 font-medium">
              Most parents are surprised at what their kids can create after just a few classes. This isn't abstract theory; it's hands-on creation.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <FadeIn direction="up" delay={0.1}>
            <div className="group rounded-[3rem] overflow-hidden relative aspect-video bg-secondary border-[8px] border-white shadow-2xl shadow-black/10 hover:-translate-y-2 hover:rotate-1 transition-all duration-500">
              <img 
                src="/images/roblox-project.png" 
                alt="3D Roblox game level built by a student" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="inline-block px-4 py-2 bg-accent text-secondary text-sm font-black uppercase tracking-wider rounded-full mb-4 shadow-lg rotate-2 group-hover:rotate-0 transition-transform">Roblox Studio</div>
                <h4 className="text-3xl font-black font-heading mb-3 text-white">3D Obby Platformer</h4>
                <p className="text-white/90 font-medium line-clamp-2 text-lg">A complete multi-level obstacle course with checkpoints, moving platforms, and custom scripts.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="group rounded-[3rem] overflow-hidden relative aspect-video bg-secondary border-[8px] border-white shadow-2xl shadow-black/10 hover:-translate-y-2 hover:-rotate-1 transition-all duration-500 mt-0 md:mt-12">
              <img 
                src="/images/kids-collaborating.png" 
                alt="Kids celebrating their coding project" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="inline-block px-4 py-2 bg-primary text-white text-sm font-black uppercase tracking-wider rounded-full mb-4 shadow-lg -rotate-2 group-hover:rotate-0 transition-transform">In Our Studio</div>
                <h4 className="text-3xl font-black font-heading mb-3 text-white">Confidence you can see</h4>
                <p className="text-white/90 font-medium line-clamp-2 text-lg">From shy first-timers to proud creators — kids walk out standing a little taller after every class.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      
      <WaveDivider position="bottom" fill="#ffffff" />
    </section>
  );
}