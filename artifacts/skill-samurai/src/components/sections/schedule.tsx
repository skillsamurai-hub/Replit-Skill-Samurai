import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Clock, Users, CalendarDays, Tag, ArrowRight } from "lucide-react";

export default function Schedule() {
  const facts = [
    {
      icon: <Clock className="h-7 w-7" />,
      label: "Class length",
      value: "60 minutes",
      detail: "Focused, hands-on sessions that keep kids engaged without it feeling like more school."
    },
    {
      icon: <Users className="h-7 w-7" />,
      label: "Group size",
      value: "15 students · 2 instructors",
      detail: "A 1:7.5 ratio, so your child gets help when they need it while still learning with other kids."
    },
    {
      icon: <CalendarDays className="h-7 w-7" />,
      label: "When",
      value: "Weekly, after school & weekends",
      detail: "Pick a recurring time slot that fits around school, sports, and the rest of your week."
    },
    {
      icon: <Tag className="h-7 w-7" />,
      label: "Pricing",
      value: "Try your first class free",
      detail: "Come check it out before committing. We'll walk you through pricing once you've seen it in action."
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">At a glance</h2>
          <h3 className="text-4xl md:text-5xl font-black font-heading text-secondary leading-tight tracking-tight mb-5">
            Everything you need to know,<br className="hidden sm:block" /> in one place.
          </h3>
          <p className="text-lg text-muted-foreground font-medium">
            Most parents start here just to see if it's the right fit for their child. No surprises, no pressure — just a clear look at how classes work and how it fits into your routine without adding more to your plate.
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
