import type { Metadata } from "next";
import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { GraduationCap, CheckCircle2, Calendar, Users, BookOpen, Award, Star } from "lucide-react";
import FinalCta from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "School Workshops & Programs | Skill Samurai Winnipeg",
  description:
    "Skill Samurai Winnipeg delivers curriculum-aligned coding, robotics, and STEM workshops for K–12 schools — on-site, in-class, or after-school.",
};

const offerings = [
  {
    icon: Calendar,
    title: "Hour of Code Events",
    desc: "A single-day, high-energy intro to coding and computational thinking — perfect for Computer Science Education Week or any time of year.",
  },
  {
    icon: BookOpen,
    title: "In-Class Workshops",
    desc: "Multi-session units that slot into your existing timetable. Curriculum-aligned content for Math, Science, and Technology outcomes.",
  },
  {
    icon: Users,
    title: "After-School Programs",
    desc: "Weekly sessions hosted at your school. Students build real projects — games, apps, and robots — over a full semester.",
  },
  {
    icon: Award,
    title: "STEM Enrichment Days",
    desc: "Half-day or full-day special events featuring robotics challenges, hackathons, and hands-on tech exploration for the whole school.",
  },
];

const details = [
  "On-site delivery — we come to you",
  "All materials and equipment provided",
  "Experienced instructors with school experience",
  "Curriculum-aligned to Manitoba outcomes",
  "Grades K to 12",
  "Flexible scheduling around your calendar",
];

export default function SchoolsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary text-white py-24 md:py-36">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-primary font-bold tracking-wider uppercase text-xs">For Schools</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-[1.05] tracking-tight mb-6">
              Bring coding &amp; STEM directly into your school.
            </h1>
            <p className="text-lg md:text-xl text-white/85 font-medium leading-relaxed max-w-2xl mb-8">
              We deliver hands-on coding, robotics, and STEM workshops for Winnipeg schools — on-site, curriculum-aligned, and built for every grade level from K to 12.
            </p>
            <a
              href="https://meetings.hubspot.com/skillsamurai/school-hour-of-code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-black uppercase tracking-wide text-white shadow-2xl shadow-primary/40 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
            >
              Book a School Workshop
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">What We Offer</h2>
            <h3 className="text-3xl md:text-4xl font-black font-heading text-secondary leading-tight tracking-tight">
              Programs for every school, every grade.
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
                Everything handled.<br />You just open the door.
              </h2>
              <p className="text-muted-foreground font-medium leading-relaxed mb-8">
                We handle all the planning, materials, and delivery. Your teachers don't need any coding experience — we take care of everything so your students get a great experience from start to finish.
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
                <h3 className="text-2xl font-black font-heading mb-3">Ready to book?</h3>
                <p className="text-white/80 font-medium mb-6 leading-relaxed">
                  Tell us about your school, grade level, and goals — we'll put together a program that fits your schedule and curriculum.
                </p>
                <a
                  href="https://meetings.hubspot.com/skillsamurai/school-hour-of-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-7 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
                >
                  Schedule an Intro Call
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* High School Co-op callout */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-5xl mx-auto rounded-3xl bg-secondary p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 h-16 w-16 rounded-2xl bg-accent flex items-center justify-center shadow-lg">
                <Star className="h-8 w-8 text-secondary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-accent font-bold tracking-wider uppercase text-xs mb-2">High School Co-op Program</p>
                <h3 className="text-2xl md:text-3xl font-black font-heading text-white leading-tight mb-2">
                  Register your school as a co-op placement partner.
                </h3>
                <p className="text-white/70 font-medium leading-relaxed">
                  We accept Grade 10–12 co-op students as classroom assistants. Students earn <strong className="text-white">1 credit per 100 hours</strong> — and gain real experience in STEM education alongside our instructors.
                </p>
              </div>
              <a
                href="https://meetings.hubspot.com/skillsamurai/school-hour-of-code"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-black uppercase tracking-wide text-secondary shadow-lg shadow-accent/30 transition-all hover:opacity-90 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Register Your School
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
