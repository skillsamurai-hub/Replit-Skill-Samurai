import type { Metadata } from "next";
import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { HeartHandshake, CheckCircle2, Ticket, UsersRound, Megaphone, Handshake } from "lucide-react";


export const metadata: Metadata = {
  title: "Non-Profits & Community Groups | Skill Samurai Winnipeg",
  description:
    "Skill Samurai Winnipeg partners with non-profits and community organizations to bring coding and STEM to under-served kids across Winnipeg through subsidized seats, group rates, and co-hosted events.",
};

const offerings = [
  {
    icon: Ticket,
    title: "Subsidized Seats",
    desc: "We reserve sponsored spots in our regular classes for families who couldn't otherwise access coding education.",
  },
  {
    icon: UsersRound,
    title: "Group Rates",
    desc: "Flexible pricing for organizations bringing multiple youth participants — designed to stretch your program budget further.",
  },
  {
    icon: Megaphone,
    title: "Co-Hosted Events",
    desc: "Pop-up Hour of Code nights, family STEM days, and community showcases branded alongside your organization.",
  },
  {
    icon: Handshake,
    title: "Ongoing Partnerships",
    desc: "Long-term relationships with regular touchpoints — not just a one-off event — so kids build real skills over time.",
  },
];

const details = [
  "We come to your location or host at our centres",
  "All equipment and materials provided",
  "Bilingual delivery available on request",
  "Ages 6–18 welcome",
  "Year-round programming",
  "Co-branding and social media collaboration",
];

export default function NonProfitsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary text-white py-24 md:py-36">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
              <HeartHandshake className="h-4 w-4 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-xs">Non-Profits &amp; Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-[1.05] tracking-tight mb-6">
              Making coding accessible for every kid in Winnipeg.
            </h1>
            <p className="text-lg md:text-xl text-white/85 font-medium leading-relaxed max-w-2xl mb-8">
              We partner with non-profits and community groups to break down barriers to tech education — through subsidized seats, group rates, and co-hosted events that reach kids who need it most.
            </p>
            <a
              href="https://meetings.hubspot.com/skillsamurai/non-profit-workshop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-black uppercase tracking-wide text-white shadow-2xl shadow-primary/40 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
            >
              Start a Partnership
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">How We Partner</h2>
            <h3 className="text-3xl md:text-4xl font-black font-heading text-secondary leading-tight tracking-tight">
              Built around your community's needs.
            </h3>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {offerings.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08} direction="up">
                <div className="h-full flex flex-col bg-white rounded-3xl p-7 border-[3px] border-secondary/10 shadow-xl shadow-secondary/5 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                  <div className="h-13 w-13 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 self-start p-3">
                    <item.icon className="h-6 w-6 text-primary" strokeWidth={2} />
                  </div>
                  <h4 className="text-lg font-black font-heading text-secondary mb-2">{item.title}</h4>
                  <p className="text-muted-foreground font-medium leading-relaxed text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-black font-heading text-secondary leading-tight tracking-tight mb-6">
                More than a workshop.<br />A real partnership.
              </h2>
              <p className="text-muted-foreground font-medium leading-relaxed mb-8">
                We're committed to digital equity in Winnipeg. Every partnership is tailored to your organization, your community, and the youth you serve — with flexible formats that fit your budget and calendar.
              </p>
              <ul className="space-y-3">
                {details.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-sm font-semibold text-secondary/80">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.15} direction="up">
              <div className="rounded-3xl bg-secondary p-8 md:p-10 text-white">
                <h3 className="text-2xl font-black font-heading mb-3">Let's talk.</h3>
                <p className="text-white/80 font-medium mb-6 leading-relaxed">
                  Tell us about your organization and the youth you serve. We'll put together a partnership proposal that fits your goals and budget.
                </p>
                <a
                  href="https://meetings.hubspot.com/skillsamurai/non-profit-workshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-7 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
                >
                  Book an Intro Call
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
