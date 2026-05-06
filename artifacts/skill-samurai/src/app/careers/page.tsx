import type { Metadata } from "next";
import React from "react";
import FinalCta from "@/components/sections/final-cta";
import { FadeIn } from "@/components/ui/fade-in";
import { MapPin, Clock, Briefcase, Heart, Zap, Users, GraduationCap, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Skill Samurai Winnipeg",
  description:
    "Join the Skill Samurai Winnipeg team. We're looking for passionate coding instructors and STEM educators to inspire the next generation of tech innovators.",
};

const openings = [
  {
    title: "Coding Instructor – After School Programs",
    type: "Part-Time",
    location: "North East Winnipeg",
    description:
      "Lead engaging after-school coding classes for kids aged 6–18. You'll guide students through Scratch, Roblox scripting, Python, and more using our proven curriculum. No teaching degree required — just passion, patience, and a love of tech.",
    skills: ["Python or JavaScript", "Patience with kids", "Reliable & punctual", "Team player"],
  },
  {
    title: "Coding Instructor – After School Programs",
    type: "Part-Time",
    location: "Seven Oaks Winnipeg",
    description:
      "Same great role at our Seven Oaks location. Help young coders build real projects, develop confidence, and discover their love for technology. Training provided — we set you up for success.",
    skills: ["Coding fundamentals", "Enthusiasm for STEM", "Communication skills", "Background check required"],
  },
  {
    title: "STEM Program Assistant",
    type: "Part-Time / Casual",
    location: "Both Locations",
    description:
      "Support our lead instructors in delivering hands-on STEM sessions. Perfect for university students in Computer Science, Education, or related fields looking to gain real teaching experience.",
    skills: ["Interest in STEM education", "University student welcome", "Organized & dependable", "Bilingual a plus"],
  },
];

const perks = [
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: "Meaningful Work",
    desc: "Watch kids go from nervous beginners to confident builders. You'll see the impact of your work every single class.",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Full Training Provided",
    desc: "We give you our curriculum, lesson plans, and ongoing coaching. You bring the enthusiasm — we handle the rest.",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Tight-Knit Team",
    desc: "Join a small, supportive crew that genuinely cares about each other and the families we serve.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Flexible Hours",
    desc: "Classes run after school and on weekends — ideal for students, teachers, or anyone with a day-time commitment.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <FadeIn>
            <p className="text-center text-xs font-bold uppercase tracking-widest text-primary mb-3">
              We&apos;re Hiring
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center leading-tight mb-4">
              Help Shape Winnipeg&apos;s<br className="hidden sm:block" /> Next Generation of Coders
            </h1>
            <p className="text-center text-white/70 max-w-xl mx-auto text-lg">
              If you love technology and love working with kids, you&apos;re in the right place. Join a team that&apos;s building something that actually matters.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <p className="text-center text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Why Skill Samurai
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary text-center mb-14">
              A Place Worth Showing Up To
            </h2>
          </FadeIn>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk, i) => (
              <FadeIn key={perk.title} delay={i * 0.08}>
                <div className="flex flex-col items-start gap-4 rounded-3xl border border-border bg-white p-7 shadow-sm h-full">
                  <div className="rounded-2xl bg-primary/10 p-3">
                    {perk.icon}
                  </div>
                  <h3 className="text-base font-bold text-secondary">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{perk.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* High School Co-op */}
      <section className="py-20 md:py-28 bg-white border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-accent/15 border border-accent/30">
                <GraduationCap className="h-4 w-4 text-accent" />
                <span className="text-accent font-bold tracking-wider uppercase text-xs">High School Co-op</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight mb-4">
                Earn a high school credit while teaching kids to code.
              </h2>
              <p className="text-muted-foreground font-medium leading-relaxed mb-6">
                We accept high school students through Manitoba's co-op and community service programs. Volunteer alongside our instructors, support students in class, and build real experience in education and technology.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "100 volunteer hours = 1 high school credit",
                  "Work directly with our instructors",
                  "Gain hands-on experience in STEM education",
                  "Counts toward community involvement requirements",
                  "Letter of reference provided upon completion",
                  "Open to students at both locations",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm font-medium text-secondary/80">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="https://meetings.hubspot.com/skillsamurai/studentcoopprogram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-black uppercase tracking-wide text-secondary shadow-lg shadow-accent/30 transition-all hover:opacity-90 hover:scale-105 active:scale-95"
              >
                Book Your Interview →
              </a>
            </FadeIn>
            <FadeIn delay={0.15} direction="up">
              <div className="rounded-3xl bg-secondary p-8 md:p-10 text-white">
                <div className="text-6xl font-black font-heading text-primary mb-2">100</div>
                <div className="text-xl font-bold text-white/90 mb-6">volunteer hours<br/>= 1 high school credit</div>
                <div className="h-px bg-white/15 mb-6" />
                <p className="text-white/70 font-medium leading-relaxed text-sm mb-6">
                  This program is ideal for Grade 10–12 students interested in technology, teaching, or community service. No prior coding experience is required — just enthusiasm and reliability.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm font-medium text-white/80">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    North East &amp; Seven Oaks locations
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-white/80">
                    <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                    After school &amp; weekend shifts available
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-white/80">
                    <GraduationCap className="h-4 w-4 text-primary flex-shrink-0" />
                    Grades 10–12 welcome
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-20 md:py-28 bg-[hsl(204_35%_96%)]">
        <div className="container mx-auto px-4">
          <FadeIn>
            <p className="text-center text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Open Positions
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary text-center mb-14">
              Current Openings
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            {openings.map((job, i) => (
              <FadeIn key={job.title + job.location} delay={i * 0.1}>
                <div className="rounded-3xl border border-border bg-white shadow-sm p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-secondary leading-snug">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 shrink-0">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                        <Clock className="h-3 w-3" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-border/60 px-3 py-1 text-xs font-semibold text-secondary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="py-20 md:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-4 relative text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Ready to Apply?
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Send Us a Quick Message
            </h2>
            <p className="text-white/70 max-w-lg mx-auto text-base mb-10">
              Email us a brief intro about yourself, which role you&apos;re interested in, and why you&apos;d be a great fit. No formal cover letter needed — just be real.
            </p>
            <a
              href="mailto:winnipeg@skillsamurai.com?subject=Career Application – Skill Samurai Winnipeg"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-base font-black text-white shadow-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
            >
              Apply via Email →
            </a>
            <p className="mt-5 text-xs text-white/40">
              winnipeg@skillsamurai.com · We reply within 2 business days
            </p>
          </FadeIn>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
