"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { Code2, Gamepad2, Rocket, Palette, ArrowRight } from "lucide-react";

const featured = {
  name: "Kai",
  age: 12,
  project: "Bob's Burgers 3D Build",
  projectType: "3D Modeling",
  tag: "3D Designer",
  description:
    "For her sandbox project, Kai built a detailed 3D replica of the Bob's Burgers restaurant — applying every tool and technique she'd mastered throughout her curriculum. She then presented her work to the class, walking through her creative process from concept to completion.",
  quote:
    "I got to build something I actually love. Presenting it to everyone made me realize how much I really learned.",
  Icon: Palette,
  color: "text-primary",
  bg: "bg-primary/10",
  videoUrl: "https://www.instagram.com/reel/DQxMBWdD9i6/",
};

const minis = [
  {
    name: "Aria",
    age: 12,
    project: "Robot Picture Frame",
    projectType: "3D Design",
    Icon: Code2,
    color: "text-[#F59100]",
    bg: "bg-[#F59100]/10",
    quote: "I wanted to make something that was actually mine — and I did.",
  },
  {
    name: "Jack",
    age: 7,
    project: "Froggy Flap",
    projectType: "Scratch Game",
    Icon: Gamepad2,
    color: "text-primary",
    bg: "bg-primary/10",
    quote: "I made my own game and my frog is the main character!",
  },
  {
    name: "Owen",
    age: 8,
    project: "Dino Defense",
    projectType: "Game Design",
    Icon: Rocket,
    color: "text-secondary",
    bg: "bg-secondary/10",
    quote: "I finally finished my game. Showing it to everyone was really fun.",
  },
  {
    name: "Jayrel",
    age: 16,
    project: "Interactive Robot Game",
    projectType: "Game Design",
    Icon: Gamepad2,
    color: "text-primary",
    bg: "bg-primary/10",
    quote: null,
  },
];

export default function StudentSpotlightTeaser() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#F59100]/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <FadeIn className="max-w-2xl">
            <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">
              Student Spotlight
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight">
              <span className="text-secondary block mb-2">KIDS WHO BUILD</span>
              <span className="text-primary">REAL THINGS</span>
            </h3>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <FadeIn className="lg:col-span-3" direction="up" delay={0.1}>
            <div className="h-full bg-white rounded-3xl p-7 border border-secondary/10 shadow-lg shadow-secondary/5 flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className={`w-16 h-16 rounded-2xl ${featured.bg} flex items-center justify-center relative`}>
                  <featured.Icon className={`w-8 h-8 ${featured.color}`} />
                  <div className="absolute -top-2.5 -right-2.5 bg-primary text-white text-[9px] font-black uppercase tracking-wide px-2 py-0.5 rounded-full shadow-lg shadow-primary/40">
                    ⭐ Featured
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="font-black text-xl font-heading text-secondary">
                    {featured.name}{featured.age ? `, age ${featured.age}` : ""}
                  </span>
                  <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wide bg-primary/10 text-primary">
                    {featured.tag}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mb-3">
                  <Gamepad2 className="w-3.5 h-3.5 text-[#F59100] flex-shrink-0" />
                  <span className="text-sm font-bold text-secondary">{featured.project}</span>
                  <span className="text-sm text-secondary/50">— {featured.projectType}</span>
                </div>
                <p className="text-sm text-secondary/70 leading-relaxed mb-4">
                  {featured.description}
                </p>
                <blockquote className="bg-primary/8 border-l-[3px] border-primary rounded-xl px-4 py-3 text-sm italic text-secondary/75 font-medium">
                  "{featured.quote}"
                </blockquote>
                {featured.videoUrl && (
                  <a
                    href={featured.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-xs font-black uppercase tracking-wide text-primary hover:underline"
                  >
                    ▶ Watch the video on Instagram
                  </a>
                )}
              </div>
            </div>
          </FadeIn>

          <div className="lg:col-span-2 flex flex-col gap-4">
            {minis.map((s, i) => (
              <FadeIn key={s.name} direction="up" delay={0.15 + i * 0.08}>
                <div className="bg-white rounded-2xl p-5 border border-secondary/10 shadow-sm flex items-start gap-4">
                  <div className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center flex-shrink-0`}>
                    <s.Icon className={`w-4.5 h-4.5 ${s.color}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-sm text-secondary">
                      {s.name}{s.age ? `, age ${s.age}` : ""}
                      <span className="text-secondary/50 font-medium"> · {s.projectType}</span>
                    </p>
                    {s.quote && <p className="text-xs text-secondary/60 italic mt-1">"{s.quote}"</p>}
                  </div>
                </div>
              </FadeIn>
            ))}
            <FadeIn delay={0.35}>
              <Link
                href="/student-projects"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-primary text-white font-black text-sm uppercase tracking-wide shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
              >
                See All Student Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
