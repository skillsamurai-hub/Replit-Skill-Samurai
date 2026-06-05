import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Calendar, Laptop, Sparkles, ThumbsUp } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: "Book a free trial",
      desc: "Pick a time that works for your family. Zero commitment, zero pressure."
    },
    {
      icon: <Laptop className="h-8 w-8 text-white" />,
      title: "Child builds first project",
      desc: "They jump right in with our expert Coding Instructors in a fun, supportive environment."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-white" />,
      title: "See what they learned",
      desc: "At the end of the class, they'll proudly show you the exact thing they created."
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-white" />,
      title: "Decide if it fits",
      desc: "If they love it (most do!), we'll help you pick the right program — and the right pace — for your child."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 pt-4 md:pt-10">
        <FadeIn className="text-center max-w-4xl mx-auto mb-10 md:mb-20">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">Simple Process</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight mb-6">
            <span className="text-secondary block mb-2">GETTING STARTED</span>
            <span className="text-primary">IS EASY</span>
          </h3>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            We make it simple for Winnipeg families to get their child started right away.
          </p>
        </FadeIn>

        <div className="max-w-6xl mx-auto relative">
          <div className="hidden md:block absolute top-14 left-[10%] right-[10%] h-3 bg-secondary/15 rounded-full z-0"></div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.15} direction="up" className="text-center group">
                <div className="mx-auto h-28 w-28 rounded-[2rem] bg-secondary border-[6px] border-white shadow-xl flex items-center justify-center mb-8 relative group-hover:-translate-y-2 group-hover:bg-primary transition-all duration-300 group-hover:rotate-3">
                  {step.icon}
                  <div className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-accent text-secondary font-black flex items-center justify-center text-lg border-4 border-white shadow-md">
                    {i + 1}
                  </div>
                </div>
                <h4 className="text-2xl font-black font-heading text-secondary mb-3 uppercase tracking-wide group-hover:text-primary transition-colors">{step.title}</h4>
                <p className="text-muted-foreground font-medium leading-relaxed">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.4} className="text-center mt-12 md:mt-16">
          <a
            href="#locations"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
          >
            Get Your Child Started
          </a>
          <p className="mt-3 text-sm text-secondary/50 font-medium">First class is free · No experience needed · Ages 6–18</p>
        </FadeIn>
      </div>
      
      <div className="absolute bottom-0 left-0 h-px w-full bg-border/70" />
    </section>
  );
}
