"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { Code2, Gamepad2, Rocket, Globe, Star, ArrowLeft } from "lucide-react";

const projects = [
  {
    name: "Ethan",
    age: 11,
    project: "Haunted Maze",
    projectType: "Roblox Game",
    category: "game",
    tag: "Game Developer",
    emoji: "🎮",
    description:
      "Ethan spent 6 weeks designing and scripting his own Roblox horror maze — complete with jump scares, a leaderboard, and custom sound effects. Over 200 players have visited his game.",
    quote:
      "I didn't just want to play games anymore — I wanted to make them. Now I have friends from school playing something I actually built.",
    featured: true,
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
    name: "Marcus",
    age: 9,
    project: "Space Shooter",
    projectType: "Scratch Game",
    category: "game",
    tag: "Game Creator",
    emoji: "🚀",
    description:
      "Marcus built a fully playable space shooter with lives, a scoring system, enemy waves, and his own pixel-art sprites — all in Scratch.",
    quote:
      "I made a game my whole class plays at lunch. It's the best feeling ever.",
    featured: false,
  },
  {
    name: "Priya",
    age: 16,
    project: "Portfolio Website",
    projectType: "HTML/CSS/JS",
    category: "web",
    tag: "Web Developer",
    emoji: "🌐",
    description:
      "Priya designed and coded her own personal portfolio from scratch — responsive layout, smooth animations, and a contact form that actually sends emails.",
    quote:
      "I put it on my college application. My counsellor was really impressed.",
    featured: false,
  },
  {
    name: "Jordan",
    age: 12,
    project: "Weather Dashboard",
    projectType: "Python + API",
    category: "app",
    tag: "App Developer",
    emoji: "🌦️",
    description:
      "Jordan connected to a live weather API and built a dashboard that shows current conditions, a 5-day forecast, and fun emoji for each weather type.",
    quote:
      "I showed my parents the live weather on my app and they couldn't believe I made it.",
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
                        {p.name}, age {p.age}
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
