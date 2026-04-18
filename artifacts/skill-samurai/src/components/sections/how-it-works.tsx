import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Calendar, Laptop, Sparkles, ThumbsUp, ArrowRight } from "lucide-react";

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
      desc: "They jump right in with our expert coaches in a fun, supportive environment."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-white" />,
      title: "See what they learned",
      desc: "At the end of the class, they'll proudly show you the exact thing they created."
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-white" />,
      title: "Decide if it fits",
      desc: "If they love it (most do!), we'll find the right month-to-month program for them."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 pt-4 md:pt-10">
        <FadeIn className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">Simple Process</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight mb-6">
            <span className="text-secondary block mb-2">GETTING STARTED</span>
            <span className="text-primary">IS EASY</span>
          </h3>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            We make it simple for your child to start learning right away.
          </p>
        </FadeIn>

        <div className="max-w-6xl mx-auto relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-14 left-[10%] right-[10%] h-3 bg-muted rounded-full z-0"></div>

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

        <FadeIn delay={0.6} className="mt-20 text-center">
          <a
            href="https://skillsamurai.ca/book-a-free-trial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 md:h-16 items-center justify-center rounded-full bg-primary px-8 md:px-10 text-base md:text-xl font-black uppercase tracking-wide text-white shadow-2xl shadow-primary/40 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 group border-b-4 border-primary-foreground/20"
          >
            Book Free Trial
            <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>
      </div>
      
      <div className="absolute bottom-0 left-0 h-px w-full bg-border/70" />
    </section>
  );
}