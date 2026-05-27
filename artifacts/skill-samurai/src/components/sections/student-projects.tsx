"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { Code2, Gamepad2, Rocket, Globe, Star, ArrowLeft } from "lucide-react";

const projects = [
  {
    name: "Kai",
    age: 12,
    project: "Bob's Burgers 3D Build",
    projectType: "3D Modeling",
    category: "app",
    tag: "3D Designer",
    emoji: "🍔",
    description:
      "For her sandbox project, Kai built a detailed 3D replica of the Bob's Burgers restaurant — applying every tool and technique she'd mastered throughout her curriculum. She then presented her work to the class, walking through her creative process from concept to completion.",
    quote:
      "I got to build something I actually love. Presenting it to everyone made me realize how much I really learned.",
    videoUrl: "https://www.instagram.com/reel/DQxMBWdD9i6/",
    featured: true,
  },
  {
    name: "Aria",
    age: 12,
    grade: "Grade 5",
    project: "Robot Picture Frame",
    projectType: "3D Design",
    category: "app",
    tag: "3D Designer",
    videoUrl: "https://www.instagram.com/reel/DO54lAVjSGh/",
    emoji: "🤖",
    description:
      "After completing Skill Samurai's 3D design curriculum, Aria created a Robot Picture Frame entirely from her own imagination — no template, no instructions. Just her creativity and everything she'd learned.",
    quote:
      "I wanted to make something that was actually mine. Once I learned the tools, I knew exactly what I wanted to build.",
    featured: false,
  },
  {
    name: "Owen",
    age: 8,
    project: "Dino Defense",
    projectType: "Game Design",
    category: "game",
    tag: "Game Creator",
    emoji: "🦕",
    description:
      "Owen built and finished Dino Defense — a complete game he designed from start to finish. He then presented it to the class, walking through how it works and what he created. His coaches were blown away by both the game and his presentation skills.",
    quote:
      "I finally finished my game. Showing it to everyone was actually really fun.",
    videoUrl: "https://www.instagram.com/reel/DCeiahwRq3v/",
    featured: false,
  },
  {
    name: "Sofia",
    age: 14,
    project: "Study Timer App",
    projectType: "Python App",
    category: "app",
    tag: "App Developer",
    emoji: "⏱️",
    description:
      "Sofia built a Pomodoro-style study timer with a custom GUI, sound alerts, and a stats tracker that logs her sessions to a CSV file.",
    quote:
      "My teachers noticed I started coding instead of scrolling. That said everything.",
    featured: false,
  },
  {
    name: "Jayrel",
    age: 16,
    grade: null,
    project: "Interactive Robot Game",
    projectType: "Game Design",
    category: "game",
    tag: "Game Creator",
    emoji: "🤖",
    description:
      "Jarrell, 16, built an interactive robot gameplay experience using block-based coding as his first game development project. A strong start that shows exactly how quickly older beginners can bring a real idea to life.",
    quote: null,
    videoUrl: "https://www.instagram.com/reel/DPjNdEQja7L/",
    featured: false,
  },
  {
    name: "Kaleb",
    age: null,
    grade: "Grade 1",
    project: "Dino Launch",
    projectType: "Game Design",
    category: "game",
    tag: "Game Creator",
    emoji: "🦖",
    description:
      "Kaleb, a first-grader, built Dino Launch — a game completely driven by his own storytelling and imagination. He was so excited to show it off that his coaches were blown away. One of our youngest builders, and already thinking like a game designer.",
    quote:
      "I made the dino fly and then it launches! I want to add more dinosaurs next.",
    videoUrl: "https://www.instagram.com/reel/C_Lt7F8vGEa/",
    featured: false,
  },
  {
    name: "Soren",
    age: 15,
    project: "Breakfast Obby",
    projectType: "Game Design",
    category: "game",
    tag: "Game Creator",
    emoji: "🥓",
    description:
      "Soren designed a breakfast-themed obstacle course game — complete with bacon, eggs, and his own custom level design. His coaches had a blast playing it. The bacon level was a highlight.",
    quote:
      "I wanted to make something funny and nobody had done a breakfast game before so I went for it.",
    videoUrl: "https://www.instagram.com/reel/C_boC2RA4CJ/",
    featured: false,
  },
  {
    name: "Melanie",
    age: null,
    project: "Obby + Face Tracker",
    projectType: "Game Design + Scripting",
    category: "game",
    tag: "Game Developer",
    emoji: "🎭",
    description:
      "Melanie scripted her first obstacle course game from scratch and got her face tracker working in the same session — two milestones in one day. Her coaches couldn't have been more proud.",
    quote:
      "I didn't think I could get the face tracker to work but I figured it out!",
    videoUrl: "https://www.instagram.com/reel/C8GDhNUA0Rm/",
    featured: false,
  },
  {
    name: "Jack",
    age: 7,
    project: "Froggy Flap",
    projectType: "Scratch Game",
    category: "game",
    tag: "Game Creator",
    emoji: "🐸",
    description:
      "At just 7 years old, Jack built his own Flappy Bird-style game in Scratch — but with a twist: the hero is a frog. He designed the character, programmed the movement, and added his own obstacles and score.",
    quote:
      "I made my own game and my frog is the main character. I want to make more levels!",
    videoUrl: "https://www.instagram.com/reel/DHego-dytfS/",
    featured: false,
  },
  {
    name: "Aiden",
    age: 10,
    project: "Platformer Game",
    projectType: "Scratch Game",
    category: "game",
    tag: "Game Creator",
    emoji: "🎯",
    description:
      "Aiden built a multi-level platformer with moving platforms, coins to collect, and a boss enemy at the end — all with his own hand-drawn sprites.",
    quote:
      "My little sister plays it every day and asks me to add more levels.",
    featured: false,
  },
];

const FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "game", label: "Games" },
  { key: "app", label: "Apps" },
  { key: "web", label: "Websites" },
];

const categoryIcon: Record<string, React.ReactNode> = {
  game: <Gamepad2 className="w-4 h-4" />,
  app: <Code2 className="w-4 h-4" />,
  web: <Globe className="w-4 h-4" />,
};

const categoryColor: Record<string, { text: string; bg: string }> = {
  game: { text: "text-primary", bg: "bg-primary/10" },
  app: { text: "text-[#F59100]", bg: "bg-[#F59100]/10" },
  web: { text: "text-secondary", bg: "bg-secondary/10" },
};

export default function StudentProjectsSection() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#F59100]/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-secondary/60 hover:text-secondary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </FadeIn>

        <FadeIn className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">
            Student Spotlight
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight mb-6">
            <span className="text-secondary block mb-2">KIDS WHO BUILD</span>
            <span className="text-primary">REAL THINGS</span>
          </h3>
          <p className="text-xl text-muted-foreground font-medium">
            Every week, Skill Samurai students ship projects they're proud of.
            <br />Here are a few who blew us away.
          </p>
        </FadeIn>

        <FadeIn className="flex items-center justify-center gap-3 flex-wrap mb-12">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-black uppercase tracking-wide transition-all ${
                filter === f.key
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white border-2 border-secondary/15 text-secondary hover:border-primary/40 hover:text-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map((p, i) => {
            const colors = categoryColor[p.category];
            return (
              <FadeIn key={p.name} direction="up" delay={i * 0.07}>
                <div
                  className={`h-full bg-white rounded-3xl p-6 border shadow-sm flex flex-col ${
                    p.featured
                      ? "border-primary/30 shadow-primary/10 shadow-lg md:col-span-2 lg:col-span-1"
                      : "border-secondary/10"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                      style={{ background: "hsl(204 35% 92%)" }}
                    >
                      {p.emoji}
                    </div>
                    {p.featured && (
                      <span className="flex items-center gap-1 bg-primary text-white text-[10px] font-black uppercase tracking-wide px-2.5 py-1 rounded-full shadow-md shadow-primary/30">
                        <Star className="w-3 h-3 fill-white" />
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="mb-3">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="font-black text-lg font-heading text-secondary">
                        {p.name}{"age" in p && p.age ? `, age ${p.age}` : "grade" in p && p.grade ? ` · ${p.grade}` : ""}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`${colors.text}`}>{categoryIcon[p.category]}</span>
                      <span className="text-sm font-bold text-secondary">{p.project}</span>
                      <span className="text-sm text-secondary/50">— {p.projectType}</span>
                    </div>
                  </div>

                  <p className="text-sm text-secondary/70 leading-relaxed mb-4 flex-1">
                    {p.description}
                  </p>

                  <blockquote className="bg-secondary/5 border-l-[3px] border-primary rounded-xl px-4 py-3 text-sm italic text-secondary/75 font-medium">
                    "{p.quote}"
                  </blockquote>
                  {"videoUrl" in p && p.videoUrl && (
                    <a
                      href={p.videoUrl as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-xs font-black uppercase tracking-wide text-primary hover:underline"
                    >
                      ▶ See it in action
                    </a>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="text-center">
          <div className="inline-block bg-white rounded-3xl border border-secondary/10 px-8 py-8 max-w-xl mx-auto shadow-sm">
            <p className="font-black text-2xl font-heading text-secondary mb-2">
              Is your child next?
            </p>
            <p className="text-secondary/70 font-medium mb-6">
              Every student here started with zero experience. Book a free trial and see what your child can build.
            </p>
            <Link
              href="/#locations"
              className="inline-flex items-center gap-2 bg-primary text-white font-black text-sm uppercase tracking-wide px-8 py-4 rounded-full shadow-xl shadow-primary/30 hover:bg-primary/90 hover:scale-105 transition-all"
            >
              Book a Free Trial Class
              <Rocket className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
