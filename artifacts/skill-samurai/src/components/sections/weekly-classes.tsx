"use client";

import React, { useRef, useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import {
  Code2,
  Bot,
  FlaskConical,
  Gamepad2,
  Smartphone,
  Box,
  BrainCircuit,
  Clapperboard,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const classes = [
  { icon: Code2,        label: "Coding",               color: "bg-primary",   ageMin: 7,  ageMax: 18 },
  { icon: Bot,          label: "Robotics",              color: "bg-accent",    ageMin: 7,  ageMax: 14 },
  { icon: FlaskConical, label: "STEM",                  color: "bg-secondary", ageMin: 7,  ageMax: 12 },
  { icon: Gamepad2,     label: "Game Development",      color: "bg-primary",   ageMin: 10, ageMax: 18 },
  { icon: Smartphone,   label: "App Development",       color: "bg-accent",    ageMin: 12, ageMax: 18 },
  { icon: Box,          label: "3D Printing",           color: "bg-secondary", ageMin: 8,  ageMax: 14 },
  { icon: BrainCircuit, label: "Artificial Intelligence", color: "bg-primary", ageMin: 13, ageMax: 18 },
  { icon: Clapperboard, label: "Video Editing",         color: "bg-accent",    ageMin: 9,  ageMax: 16 },
];

const ageFilters = [
  { label: "All Ages",    min: 6,  max: 18 },
  { label: "Ages 6–10",  min: 6,  max: 10 },
  { label: "Ages 11–14", min: 11, max: 14 },
  { label: "Ages 15–18", min: 15, max: 18 },
];

const features = [
  "Project-based and self-paced",
  "Same day & time each week",
  "Easy makeup class options",
  "Year-round at two Winnipeg locations",
];

export default function WeeklyClasses() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState(0);

  const scrollBy = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const handleFilter = (idx: number) => {
    setActiveFilter(idx);
    if (scrollerRef.current) {
      scrollerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const { min, max } = ageFilters[activeFilter];
  const filtered = classes.filter((c) => c.ageMin <= max && c.ageMax >= min);

  return (
    <section id="weekly-classes" className="py-20 md:py-28 bg-white border-y border-secondary/10 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/6 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/6 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">Weekly Classes</h2>
          <h3 className="text-4xl md:text-5xl font-black font-heading text-secondary leading-tight tracking-tight mb-5">
            After School Tech Accelerator Classes
          </h3>
          <p className="text-lg text-secondary/65 font-medium">
            Hands-on classes that let kids explore game design, robotics, AI, app development and more — personalized to their age, interests, and learning style.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
          {features.map((f) => (
            <div key={f} className="inline-flex items-center gap-2 text-secondary font-semibold text-sm md:text-base">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              {f}
            </div>
          ))}
        </FadeIn>

        <FadeIn delay={0.15} className="flex justify-center gap-2 mb-8 flex-wrap">
          {ageFilters.map((f, i) => (
            <button
              key={f.label}
              type="button"
              onClick={() => handleFilter(i)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                activeFilter === i
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-secondary/8 text-secondary hover:bg-secondary/15"
              }`}
            >
              {f.label}
            </button>
          ))}
        </FadeIn>

        <div className="relative">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollBy(-1)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white border border-white/20 shadow-xl text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollBy(1)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white border border-white/20 shadow-xl text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth -mx-4 px-4 scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {filtered.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  data-card
                  className="snap-start flex-shrink-0 w-[260px] md:w-[280px] bg-white rounded-3xl border-2 border-secondary/10 hover:border-primary/30 shadow-lg shadow-secondary/8 p-8 flex flex-col items-center text-center transition-all duration-300 group"
                >
                  <div
                    className={`h-20 w-20 rounded-2xl ${c.color} flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:-rotate-3 group-hover:scale-110 transition-all`}
                  >
                    <Icon className="h-10 w-10 text-white" strokeWidth={2} />
                  </div>
                  <h4 className="text-xl font-bold font-heading text-secondary leading-tight mb-2">
                    {c.label}
                  </h4>
                  <span className="text-xs font-bold uppercase tracking-wide text-secondary/50 bg-secondary/8 rounded-full px-3 py-1">
                    Ages {c.ageMin}–{c.ageMax}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <FadeIn delay={0.2} className="mt-10 flex flex-col items-center gap-4">
          <p className="text-secondary/60 text-sm font-bold uppercase tracking-wider">Choose your location to enroll:</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/north-east-coding-classes"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary/90 hover:scale-105 active:scale-95 text-white px-7 py-4 text-sm font-black uppercase tracking-wide shadow-lg shadow-primary/30 transition-all border-b-4 border-primary-foreground/20"
            >
              Enroll — North East
            </a>
            <a
              href="/seven-oaks-coding-classes"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:bg-accent/90 hover:scale-105 active:scale-95 text-white px-7 py-4 text-sm font-black uppercase tracking-wide shadow-lg shadow-accent/30 transition-all border-b-4 border-primary-foreground/20"
            >
              Enroll — Seven Oaks
            </a>
          </div>
          <p className="text-secondary/50 text-sm font-medium">
            No contracts. Flexible, month-to-month membership that fits your schedule.
          </p>
        </FadeIn>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
