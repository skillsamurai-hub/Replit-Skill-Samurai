import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary pt-24 pb-32 lg:pt-32 lg:pb-40">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-30 pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-primary blur-[120px]" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 opacity-20 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-accent blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-bold text-sm mb-6 border border-white/20 backdrop-blur-sm shadow-xl shadow-black/10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              NOW ENROLLING IN WINNIPEG
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black font-heading leading-[1.05] mb-6 tracking-tight text-white">
              Where screen time becomes a{" "}
              <span className="relative inline-block text-accent">
                real skill
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
              .
            </h1>
            
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-xl font-medium mt-4">
              After-school coding, robotics, and STEM classes in Winnipeg for ages 6–18 — taught by real coaches, in small groups, with no long-term contracts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8">
              <a
                href="https://skillsamurai.ca/book-a-free-trial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-16 items-center justify-center rounded-full bg-primary px-10 text-xl font-black uppercase tracking-wide text-white shadow-2xl shadow-primary/40 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 group w-full sm:w-auto hover:shadow-primary/60 border-b-4 border-primary-foreground/20"
              >
                Book a Free Trial Class
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm font-medium text-white/70 sm:ml-2">
                Free 60-minute trial.<br />No experience needed.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 border-t border-white/10 mt-2 pb-1">
              {[
                "Loved by Winnipeg families",
                "Small group classes",
                "Certified coaches",
                "Month-to-month, no contracts"
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-white/80">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl shadow-black/50 bg-secondary rotate-3 hover:rotate-0 transition-transform duration-500 aspect-[4/3] group">
              <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
              <iframe
                src="https://player.vimeo.com/video/799591701?background=1&autoplay=1&loop=1&muted=1&autopause=0"
                title="Skill Samurai students at work"
                allow="autoplay; fullscreen; picture-in-picture"
                loading="lazy"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, transform: 'scale(1.4)', transformOrigin: 'center' }}
              />
              
              {/* Floating element */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-[2rem] p-4 shadow-2xl z-20 flex items-center gap-4 border-[3px] border-muted"
              >
                <div className="h-14 w-14 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0 rotate-6 text-accent">
                  <Sparkles className="h-7 w-7" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-bold text-secondary text-sm md:text-base leading-tight">Most kids don't want to leave</p>
                  <p className="text-muted-foreground font-medium text-xs md:text-sm">after their first class.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}