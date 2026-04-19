import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Heart, ShieldCheck, Eye, TrendingUp } from "lucide-react";

export default function ParentBenefits() {
  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Less guilt about screen time",
      desc: "Stop worrying that they're rotting their brains. They're actively engaged in high-value learning."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      title: "No more battles over devices",
      desc: "Channel their obsession with screens into a scheduled, productive outlet that you both agree on."
    },
    {
      icon: <Eye className="h-8 w-8 text-white" />,
      title: "You'll actually see what they're learning",
      desc: "They won't just say 'nothing' when asked what they did. They'll show you the app they just coded."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: "You're investing in skills that matter",
      desc: "Beyond coding, they learn resilience, logic, and how to push through failure to solve problems."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-[#c91668] text-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-secondary/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10 pt-10">
        <FadeIn className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">For You</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight mb-8">
            <span className="text-white block mb-2">WHAT THIS MEANS</span>
            <span className="text-accent block">FOR YOU AS A PARENT</span>
          </h3>
          <p className="text-xl text-white/80 font-medium max-w-3xl mx-auto">
            A safe answer to the screen time battle. We provide a warm, expert hand on the shoulder saying, "we've got this."
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up">
              <div className="bg-white/15 backdrop-blur-md border-[3px] border-white/20 rounded-[2.5rem] p-8 hover:bg-white/20 transition-all hover:-translate-y-2 hover:border-white/30 group shadow-2xl shadow-black/30">
                <div className="h-16 w-16 rounded-[1.25rem] bg-secondary flex items-center justify-center mb-6 shadow-lg shadow-secondary/40 group-hover:scale-110 transition-transform rotate-3 group-hover:-rotate-3">
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