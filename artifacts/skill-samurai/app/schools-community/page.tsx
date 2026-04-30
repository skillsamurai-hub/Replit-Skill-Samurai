import type { Metadata } from "next";
import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { GraduationCap, HeartHandshake, Building2 } from "lucide-react";
import FinalCta from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Schools & Community | Skill Samurai Winnipeg",
  description:
    "Skill Samurai Winnipeg partners with schools and non-profits to bring coding, robotics, and STEM workshops to more kids across Winnipeg.",
};

export default function SchoolsCommunityPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary text-white py-24 md:py-32">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="max-w-3xl">
            <p className="text-primary font-bold tracking-wider uppercase text-sm mb-4">
              Schools &amp; Non-Profits
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-[1.05] tracking-tight mb-6">
              Bringing coding, robotics &amp; STEM to more kids across Winnipeg.
            </h1>
            <p className="text-lg md:text-xl text-white/85 font-medium leading-relaxed max-w-2xl">
              We partner with Winnipeg schools and non-profit organizations to deliver hands-on
              tech education — on-site, in-class, or as co-hosted community events.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: GraduationCap,
                title: "For Schools",
                desc: "Curriculum-aligned coding and robotics workshops, after-school programs, and full-semester enrichment for K–12.",
                ctaLabel: "Learn More",
                ctaHref: "https://meetings.hubspot.com/skillsamurai/school-hour-of-code",
              },
              {
                icon: HeartHandshake,
                title: "For Non-Profits",
                desc: "Sponsored seats, flexible group rates, and co-hosted community events that make tech education accessible.",
                ctaLabel: "Learn More",
                ctaHref: "https://meetings.hubspot.com/skillsamurai/non-profit-workshop",
              },
              {
                icon: Building2,
                title: "For Community Groups",
                desc: "Pop-up Hour of Code events, summer camps, and family STEM days tailored to your group.",
                ctaLabel: "Learn More",
                ctaHref: "https://meetings.hubspot.com/skillsamurai/community-workshop",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1} direction="up">
                <div className="h-full flex flex-col bg-white rounded-3xl p-7 border-[3px] border-secondary/15 shadow-xl shadow-secondary/10 hover:-translate-y-1 hover:border-primary/40 transition-all duration-300">
                  <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center mb-5 shadow-lg rotate-3">
                    <item.icon className="h-7 w-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-black font-heading text-secondary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    {item.desc}
                  </p>
                  {item.ctaHref && (
                    <div className="mt-auto pt-6">
                      <a
                        href={item.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-white px-5 py-2.5 text-xs font-black uppercase tracking-wide shadow-lg shadow-primary/30 transition-all"
                      >
                        {item.ctaLabel}
                      </a>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black font-heading uppercase leading-tight tracking-tight mb-5">
              Let's build something together.
            </h2>
            <p className="text-lg text-white/85 font-medium mb-8">
              Tell us about your school or organization and we'll put together a plan that fits.
            </p>
            <a
              href="https://meetings.hubspot.com/skillsamurai/school-hour-of-code?uuid=b840de06-ab04-43d2-a397-5c3889bf58c7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-black uppercase tracking-wide text-white shadow-2xl shadow-primary/40 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
            >
              Book an Intro Call
            </a>
          </FadeIn>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
