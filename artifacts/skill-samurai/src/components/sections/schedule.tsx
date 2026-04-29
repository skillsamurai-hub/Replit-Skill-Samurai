import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Clock, Users, CalendarDays, Tag, ArrowRight } from "lucide-react";

export default function Schedule() {
  const facts = [
    {
      icon: <Clock className="h-7 w-7" />,
      label: "Class length",
      value: "60 minutes",
      detail: "Focused, hands-on sessions that keep kids engaged without it feeling like more school.",
      iconBg: "bg-primary",
      tint: "bg-primary/5",
      hoverBorder: "hover:border-primary/40",
    },
    {
      icon: <Users className="h-7 w-7" />,
      label: "Group size",
      value: "Small Group",
      detail: "Your child gets personal attention while still learning alongside other kids.",
      iconBg: "bg-secondary",
      tint: "bg-secondary/5",
      hoverBorder: "hover:border-secondary/40",
    },
    {
      icon: <CalendarDays className="h-7 w-7" />,
      label: "When",
      value: "Weekly, after school",
      detail: "Pick a recurring after-school time slot that fits around school and the rest of your week.",
      iconBg: "bg-accent text-secondary",
      tint: "bg-accent/10",
      hoverBorder: "hover:border-accent/50",
    },
    {
      icon: <Tag className="h-7 w-7" />,
      label: "Pricing",
      value: "Free trial first",
      detail: "We’ll recommend the right program after your trial. Then you can review pricing, month-to-month terms, and the 10% sibling discount.",
      iconBg: "bg-primary",
      tint: "bg-primary/5",
      hoverBorder: "hover:border-primary/40",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
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
              <div className={`h-full ${f.tint} border-2 border-secondary/10 rounded-2xl p-6 ${f.hoverBorder} hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300`}>
                <div className={`h-12 w-12 rounded-xl ${f.iconBg} text-white flex items-center justify-center mb-5 shadow-md`}>
                  {f.icon}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-secondary/60 mb-1.5">{f.label}</p>
                <p className="text-xl font-black font-heading text-secondary mb-2 leading-tight">{f.value}</p>
                <p className="text-sm text-secondary/70 leading-relaxed">{f.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-12 text-center">
          <a
            href="#locations"
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
