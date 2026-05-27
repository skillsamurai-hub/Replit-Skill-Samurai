"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { Code2, Gamepad2, Palette, ArrowRight } from "lucide-react";

const cards = [
  {
    name: "Kai",
    age: 12,
    project: "Bob's Burgers 3D Build",
    projectType: "3D Modeling",
    tag: "3D Designer",
    quote:
      "I got to present it to the whole class. My hands were shaking but I was so proud. I actually made something real.",
    Icon: Palette,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    videoUrl: "https://www.instagram.com/reel/DQxMBWdD9i6/",
  },
  {
    name: "Jayrel",
    age: 16,
    project: "Interactive Robot Game",
    projectType: "Game Design",
    tag: "Game Creator",
    quote: "I used to say I wasn't good at school stuff. This changed that. Now I know I can learn anything.",
    Icon: Gamepad2,
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    videoUrl: "https://www.instagram.com/reel/DPjNdEQja7L/",
  },
  {
    name: "Aria",
    age: 12,
    project: "Robot Picture Frame",
    projectType: "3D Design",
    tag: "3D Designer",
    quote: "My mom saw it and said 'Aria, you built that?' I was like — yeah Mom, I did.",
    Icon: Code2,
    color: "text-[#F59100]",
    bg: "bg-[#F59100]/10",
    border: "border-[#F59100]/20",
    videoUrl: "https://www.instagram.com/reel/DO54lAVjSGh/",
  },
  {
    name: "Jack",
    age: 7,
    project: "Froggy Flap",
    projectType: "Scratch Game",
    tag: "Game Creator",
    quote: "I showed my mom my game and she asked if she could play it. A mom asking to play your game is the coolest thing ever.",
    Icon: Gamepad2,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    videoUrl: "https://www.instagram.com/reel/DHego-dytfS/",
  },
];

export default function StudentSpotlightTeaser() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#F59100]/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-14">
          <FadeIn className="max-w-2xl">
            <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">
              Student Spotlight
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight">
              <span className="text-secondary block mb-2">KIDS WHO BUILD</span>
              <span className="text-primary">REAL THINGS</span>
            </h3>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href="/student-projects"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-primary hover:underline"
            >
              See All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((s, i) => (
            <FadeIn key={s.name} direction="up" delay={0.1 + i * 0.08}>
              <div className={`h-full bg-white rounded-3xl p-6 border ${s.border} shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4`}>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-2xl ${s.bg} flex items-center justify-center flex-shrink-0`}>
                    <s.Icon className={`w-5 h-5 ${s.color}`} />
                  </div>
                  <div>
                    <p className="font-black text-base font-heading text-secondary leading-tight">
                      {s.name}{s.age ? `, ${s.age}` : ""}
                    </p>
                    <span className={`text-[10px] font-bold uppercase tracking-wide ${s.color}`}>
                      {s.tag}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-secondary">{s.project}</p>
                  <p className="text-xs text-secondary/50">{s.projectType}</p>
                </div>

                <blockquote className="flex-1 text-sm italic text-secondary/65 leading-relaxed">
                  "{s.quote}"
                </blockquote>

                {s.videoUrl && (
                  <a
                    href={s.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs font-black uppercase tracking-wide ${s.color} hover:underline`}
                  >
                    ▶ See it in action
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.45} className="mt-8 text-center">
          <Link
            href="/student-projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-white font-black text-sm uppercase tracking-wide shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
          >
            See All Student Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
