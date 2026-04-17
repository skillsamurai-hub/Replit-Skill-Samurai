import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Clock, Users, CalendarDays, Wallet, ArrowRight } from "lucide-react";

export default function Schedule() {
  const facts = [
    {
      icon: <Clock className="h-7 w-7" />,
      label: "Class length",
      value: "60 minutes",
      detail: "Focused, hands-on classes designed to keep kids engaged while fitting into a busy schedule."
    },
    {
      icon: <Users className="h-7 w-7" />,
      label: "Group size",
      value: "15 students · 2 instructors",
      detail: "A 1:7.5 ratio gives kids the support they need while still learning alongside peers."
    },
    {
      icon: <CalendarDays className="h-7 w-7" />,
      label: "When",
      value: "After school only",
      detail: "Weekday classes only — no weekends."
    },
    {
      icon: <Wallet className="h-7 w-7" />,
      label: "Pricing",
      value: "Pricing varies by program",
      detail: "The trial class is free — you only continue if it’s the right fit for your child."
    },
  ];

  return (
    <section className="py-28 bg-secondary/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">At a glance</h2>
          <h3 className="text-4xl md:text-5xl font-black font-heading text-secondary leading-tight tracking-tight mb-5">
            Everything you need to know,<br className="hidden sm:block" /> in one place.
          </h3>
          <p className="text-lg text-muted-foreground font-medium">
            No surprises, no pressure. Here's exactly what classes look like and how it works for your family.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {facts.map((f, i) => (
            <FadeIn key={i} delay={i * 0.08} direction="up">
              <div className="h-full bg-muted/40 border border-border rounded-2xl p-6 hover:border-primary/40 hover:bg-white hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  {f.icon}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">{f.label}</p>
                <p className="text-xl font-black font-heading text-secondary mb-2 leading-tight">{f.value}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-12 text-center">
          <a
            href="https://skillsamurai.ca/book-a-free-trial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-primary font-bold text-lg hover:gap-3 transition-all"
          >
            See available trial times
            <ArrowRight className="h-5 w-5" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
