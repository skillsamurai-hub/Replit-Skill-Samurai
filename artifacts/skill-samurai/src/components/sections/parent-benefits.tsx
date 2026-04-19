import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Heart, ShieldCheck, Eye, TrendingUp } from "lucide-react";

export default function ParentBenefits() {
  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "The screen-time guilt quietly fades",
      desc: "When the screen is teaching them to code, you stop wondering if they're wasting their afternoons."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      title: "The device fight stops being a fight",
      desc: "What changes when they're excited about what they're building — instead of being told to 'put it down'?"
    },
    {
      icon: <Eye className="h-8 w-8 text-white" />,
      title: "You finally see what they did all week",
      desc: "Imagine asking 'what'd you do today?' and getting a real answer — followed by them showing you what they built."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: "Skills that compound long after the class ends",
      desc: "Coding is the surface. Underneath it: patience, logic, and the ability to push through frustration — the things that quietly shape who they become."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary text-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10 pt-10">
        <FadeIn className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">For You</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight mb-8">
            <span className="text-white block mb-2">SO WHAT ACTUALLY</span>
            <span className="text-accent block">CHANGES FOR YOU?</span>
          </h3>
          <p className="text-xl text-white/80 font-medium max-w-3xl mx-auto">
            Most parents don't want another activity to manage — they want one less thing to worry about. Here's what quietly shifts when your child finds something on a screen that's actually building them.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up">
            <div className="bg-white/10 backdrop-blur-md border-[3px] border-white/10 rounded-[2.5rem] p-8 hover:bg-white/15 transition-all hover:-translate-y-2 hover:border-white/20 group shadow-2xl shadow-black/20">
                <div className="h-16 w-16 rounded-[1.25rem] bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform rotate-3 group-hover:-rotate-3">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold font-heading mb-3 uppercase tracking-wide">{benefit.title}</h4>
                <p className="text-white/70 leading-relaxed font-medium">
                  {benefit.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 h-px w-full bg-white/15" />
    </section>
  );
}