import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { HeartHandshake, GraduationCap, ArrowRight } from "lucide-react";

const offerings = [
  {
    icon: HeartHandshake,
    eyebrow: "Non-Profit Partnerships",
    title: "Partner with us to bring coding to more kids",
    desc: "We work with Winnipeg non-profits and community organizations to make tech education accessible — through sponsored seats, group rates, and co-hosted workshops.",
    bullets: [
      "Subsidized seats for under-served families",
      "Co-branded community events",
      "Flexible group pricing",
    ],
    cta: "Start a Partnership",
    href: "https://meetings.hubspot.com/skillsamurai/school-hour-of-code?uuid=b840de06-ab04-43d2-a397-5c3889bf58c7",
    accent: "bg-primary",
    accentText: "text-primary",
    accentSoft: "bg-primary/10",
  },
  {
    icon: GraduationCap,
    eyebrow: "School Workshops",
    title: "Bring Skill Samurai into your school",
    desc: "On-site coding, robotics, and STEM workshops for Winnipeg schools — single-day sessions, after-school programs, or full-semester enrichment, tailored to your students.",
    bullets: [
      "On-site or in-class delivery",
      "Curriculum-aligned content",
      "All ages from K to grade 12",
    ],
    cta: "Request a Workshop",
    href: "https://meetings.hubspot.com/skillsamurai/school-hour-of-code?uuid=b840de06-ab04-43d2-a397-5c3889bf58c7",
    accent: "bg-secondary",
    accentText: "text-secondary",
    accentSoft: "bg-secondary/10",
  },
];

export default function CommunitySchools() {
  return (
    <section id="community-schools" className="py-20 md:py-28 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
            For Schools &amp; Community
          </h2>
          <h3 className="text-4xl md:text-5xl font-black font-heading text-secondary leading-tight tracking-tight mb-5">
            More than after-school classes.
          </h3>
          <p className="text-lg text-muted-foreground font-medium">
            We also partner with Winnipeg schools and non-profits to bring hands-on coding, robotics, and STEM learning to more kids across the city.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {offerings.map((o, i) => {
            const Icon = o.icon;
            return (
              <FadeIn key={o.eyebrow} delay={i * 0.1} direction="up">
                <article className="h-full bg-white rounded-3xl p-7 md:p-9 border-[3px] border-white hover:border-primary/20 shadow-xl shadow-secondary/5 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className={`h-14 w-14 rounded-2xl ${o.accent} flex items-center justify-center mb-5 shadow-lg rotate-3`}>
                    <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                  </div>
                  <p className={`text-xs font-bold uppercase tracking-[0.2em] ${o.accentText} mb-2`}>
                    {o.eyebrow}
                  </p>
                  <h4 className="text-2xl font-black font-heading text-secondary leading-tight mb-3">
                    {o.title}
                  </h4>
                  <p className="text-muted-foreground font-medium leading-relaxed mb-5">
                    {o.desc}
                  </p>
                  <ul className="space-y-2 mb-7">
                    {o.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm font-medium text-secondary/80">
                        <span className={`mt-1 h-1.5 w-1.5 rounded-full ${o.accent} flex-shrink-0`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={o.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto inline-flex items-center justify-center gap-2 self-start rounded-full px-6 py-3 text-sm font-black uppercase tracking-wide text-white shadow-lg transition-all hover:scale-105 active:scale-95 ${o.accent} hover:opacity-90`}
                  >
                    {o.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
