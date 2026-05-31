"use client";

import Link from "next/link";
import { ArrowRight, Code2, Gamepad2 } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const cards = [
  {
    name: "Kai",
    age: 13,
    project: "Bob's Burgers 3D Model",
    projectType: "3D Modeling",
    tag: "3D Designer",
    quote: "I got to build something I actually love. Presenting it to everyone made me realize how much I really learned.",
    Icon: Code2,
    color: "text-[#F59100]",
    bg: "bg-[#F59100]/10",
    border: "border-[#F59100]/20",
    videoUrl: "https://www.instagram.com/reel/DQxMBWdD9i6/",
  },
  {
    name: "Owen",
    age: 8,
    project: "Dino Defense",
    projectType: "Game Design",
    tag: "Game Creator",
    quote: "I finally finished my game. Showing it to everyone was actually really fun.",
    Icon: Gamepad2,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    videoUrl: "https://www.instagram.com/reel/DCeiahwRq3v/",
  },
  {
    name: "Melanie",
    age: null,
    project: "Obby + Face Tracker",
    projectType: "Game Design + Scripting",
    tag: "Game Developer",
    quote: "I didn't think I could get the face tracker to work but I figured it out!",
    Icon: Gamepad2,
    color: "text-[#F59100]",
    bg: "bg-[#F59100]/10",
    border: "border-[#F59100]/20",
    videoUrl: "https://www.instagram.com/reel/C8GDhNUA0Rm/",
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
];

export default function StudentSpotlightTeaser() {
  return (
    <section id="student-spotlight" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#F59100]/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <FadeIn className="max-w-2xl">
            <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">
              Real Results
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight">
              <span className="text-white block mb-2">KIDS WHO BUILD</span>
              <span className="text-primary">REAL THINGS</span>
            </h3>
            <p className="text-lg text-white/70 font-medium mt-4">
              Most parents are surprised at what their kids can create after just a few classes. This isn&apos;t abstract theory — it&apos;s hands-on creation.
            </p>
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

        {/* Project images */}
        <div className="grid md:grid-cols-2 gap-6 mb-10 md:mb-14">
          <FadeIn direction="up" delay={0.1}>
            <div className="group rounded-[2.5rem] overflow-hidden relative aspect-video bg-secondary/80 border-[6px] border-white/90 shadow-2xl shadow-black/20 hover:-translate-y-2 hover:rotate-1 transition-all duration-500">
              <img
                src="/images/roblox-project.webp"
                alt="3D game level built by a student"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full p-5 md:p-8 md:translate-y-4 md:group-hover:translate-y-0 md:transition-transform">
                <div className="inline-block px-3 py-1.5 bg-accent text-secondary text-xs font-black uppercase tracking-wider rounded-full mb-2 shadow-lg md:rotate-2 md:group-hover:rotate-0 md:transition-transform">Game Design Studio</div>
                <h4 className="text-xl md:text-2xl font-black font-heading mb-1 text-white">Design Your Own 3D Game</h4>
                <p className="text-white/80 text-sm hidden sm:block">A complete multi-level obstacle course with checkpoints, moving platforms, and custom scripts.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="group rounded-[2.5rem] overflow-hidden relative aspect-video bg-secondary/80 border-[6px] border-white/90 shadow-2xl shadow-black/20 hover:-translate-y-2 hover:-rotate-1 transition-all duration-500 mt-0 md:mt-10">
              <img
                src="/images/kids-collaborating.webp"
                alt="Kids celebrating their coding project"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full p-5 md:p-8 md:translate-y-4 md:group-hover:translate-y-0 md:transition-transform">
                <div className="inline-block px-3 py-1.5 bg-primary text-white text-xs font-black uppercase tracking-wider rounded-full mb-2 shadow-lg md:-rotate-2 md:group-hover:rotate-0 md:transition-transform">Small Groups</div>
                <h4 className="text-xl md:text-2xl font-black font-heading mb-1 text-white">Confidence you can see</h4>
                <p className="text-white/80 text-sm hidden sm:block">Kids smile, collaborate, and leave proud of what they made together.</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Student spotlight eyebrow */}
        <FadeIn>
          <p className="text-accent font-bold tracking-wider uppercase text-sm mb-8">Student Spotlight</p>
        </FadeIn>

        {/* Student cards */}
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
                  &ldquo;{s.quote}&rdquo;
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
