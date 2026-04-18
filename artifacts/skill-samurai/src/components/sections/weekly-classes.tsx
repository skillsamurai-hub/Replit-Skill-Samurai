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
  { icon: Code2, label: "Coding", color: "bg-primary" },
  { icon: Bot, label: "Robotics", color: "bg-accent" },
  { icon: FlaskConical, label: "STEM", color: "bg-secondary" },
  { icon: Gamepad2, label: "Game Development", color: "bg-primary" },
  { icon: Smartphone, label: "App Development", color: "bg-accent" },
  { icon: Box, label: "3D Printing", color: "bg-secondary" },
  { icon: BrainCircuit, label: "Artificial Intelligence", color: "bg-primary" },
  { icon: Clapperboard, label: "Video Editing", color: "bg-accent" },
];

const features = [
  "Project-based and self-paced",
  "Same day & time each week",
  "Easy makeup class options",
  "Year-round at two Winnipeg locations",
];

export default function WeeklyClasses() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeLocation, setActiveLocation] = useState<"north-east" | "seven-oaks">("north-east");

  const scrollBy = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="weekly-classes" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Weekly Classes</h2>
          <h3 className="text-4xl md:text-5xl font-black font-heading text-secondary leading-tight tracking-tight mb-5">
            After School Tech Accelerator Classes
          </h3>
          <p className="text-lg text-muted-foreground font-medium">
            Hands-on classes that let kids explore game design, robotics, AI, app development and more — personalized to their age, interests, and learning style.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
          {features.map((f) => (
            <div key={f} className="inline-flex items-center gap-2 text-secondary font-semibold text-sm md:text-base">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              {f}
            </div>
          ))}
        </FadeIn>

        <div className="relative">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollBy(-1)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white border border-border shadow-xl text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollBy(1)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white border border-border shadow-xl text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth -mx-4 px-4 scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {classes.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  data-card
                  className="snap-start flex-shrink-0 w-[260px] md:w-[280px] bg-white rounded-3xl border-2 border-white hover:border-primary/30 shadow-xl shadow-secondary/5 p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div
                    className={`h-20 w-20 rounded-2xl ${c.color} flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:-rotate-3 group-hover:scale-110 transition-all`}
                  >
                    <Icon className="h-10 w-10 text-white" strokeWidth={2} />
                  </div>
                  <h4 className="text-xl font-bold font-heading text-secondary leading-tight">
                    {c.label}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        <FadeIn delay={0.2} className="mt-12 max-w-xl mx-auto text-center">
          <p className="text-base md:text-lg text-secondary/80 font-semibold mb-6">
            No contracts. Flexible, month-to-month memberships.
          </p>

          <div className="inline-flex flex-col items-center bg-white border border-border rounded-2xl shadow-md p-2 mb-6">
            <div className="flex p-1 rounded-full bg-muted/40">
              <button
                type="button"
                onClick={() => setActiveLocation("north-east")}
                className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                  activeLocation === "north-east"
                    ? "bg-secondary text-white shadow"
                    : "text-secondary hover:text-primary"
                }`}
              >
                North East
              </button>
              <button
                type="button"
                onClick={() => setActiveLocation("seven-oaks")}
                className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                  activeLocation === "seven-oaks"
                    ? "bg-secondary text-white shadow"
                    : "text-secondary hover:text-primary"
                }`}
              >
                Seven Oaks
              </button>
            </div>
            <p className="text-sm text-muted-foreground font-medium px-4 py-3">
              {activeLocation === "north-east"
                ? "1199 Rothesay St., Winnipeg, MB"
                : "745 Kingsbury Ave., Winnipeg, MB"}
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <a
              href={activeLocation === "north-east" ? "https://winnipeg.jumbula.com/north-east-coding-classes" : "https://winnipeg.jumbula.com/seven-oaks-coding-classes"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-black uppercase tracking-wide text-white shadow-xl shadow-primary/30 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
            >
              {activeLocation === "north-east" ? "North East Programs" : "Seven Oaks Programs"}
            </a>
            <span className="text-sm font-semibold text-secondary/70">{activeLocation === "north-east" ? "North East Location" : "Seven Oaks Location"}</span>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
