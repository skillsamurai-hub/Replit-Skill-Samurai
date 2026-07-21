"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Rocket, Code2, Bot, Gamepad2, Sun, Users, Star, CheckCircle, Phone, Mail, Calendar, Zap, Trophy, Clock } from "lucide-react";

const camps = [
  {
    icon: Gamepad2,
    title: "Roblox Game Dev Camp",
    age: "Ages 7–14",
    desc: "Kids design and build their own Roblox games from scratch using Lua scripting and Roblox Studio. They'll publish a real, playable game by the end of the week.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Code2,
    title: "Python & App Dev Camp",
    age: "Ages 10–16",
    desc: "Learn Python — one of the world's most in-demand coding languages — to build apps, automate tasks, and solve real problems. Perfect for kids ready to level up.",
    color: "text-[#F59100]",
    bg: "bg-[#F59100]/10",
    border: "border-[#F59100]/20",
  },
  {
    icon: Bot,
    title: "Robotics & AI Camp",
    age: "Ages 8–15",
    desc: "Program robots, explore machine learning basics, and get hands-on with AI tools. Kids leave with a concrete understanding of how intelligent systems work.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Rocket,
    title: "Scratch & Creative Coding Camp",
    age: "Ages 6–10",
    desc: "The perfect first camp. Kids build animated stories, games, and art projects using Scratch — a visual block-based coding environment designed for young learners.",
    color: "text-[#F59100]",
    bg: "bg-[#F59100]/10",
    border: "border-[#F59100]/20",
  },
];

const included = [
  "Daily hands-on coding projects",
  "Qualified, CS-trained instructors",
  "All equipment provided",
  "Small groups — max 12 kids",
  "Kids keep their finished projects",
  "Safe, fun, structured environment",
];

const faqs = [
  {
    q: "What ages are camps for?",
    a: "Camps are available for kids ages 6–16. Each camp is designed for a specific age range so every child is challenged at the right level.",
  },
  {
    q: "Do kids need any prior experience?",
    a: "No experience needed! Camps are designed to welcome complete beginners while still engaging kids who already have some coding background.",
  },
  {
    q: "How long is each camp?",
    a: "Most camps run for a full week, Monday to Friday. Half-day and full-day options are available depending on the session.",
  },
  {
    q: "Where are camps held?",
    a: "At our two Winnipeg locations — North East and Seven Oaks. Location details are confirmed at registration.",
  },
  {
    q: "What do kids take home?",
    a: "Every camper leaves with a finished project — a game, app, or program they built themselves during the week.",
  },
  {
    q: "How do I register?",
    a: "Email or call us to find out about upcoming camp dates and availability. Spots are limited so we recommend registering early.",
  },
];

export default function CampsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(335_84%_59%/0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(218_42%_29%/0.4),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#F59100]/20 border border-[#F59100]/30 rounded-full px-4 py-1.5 mb-6">
              <Calendar className="h-4 w-4 text-[#F59100]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#F59100]">Launching Summer 2027</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading text-white uppercase tracking-tight leading-[1.0] mb-6">
              Coding & STEM<br /><span className="text-primary">Camps Are Coming.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-8 leading-relaxed">
              Week-long coding and STEM camps for kids ages 6–16 launching Summer 2027. Get on the early interest list to be first to know when registration opens.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:winnipeg@skillsamurai.com?subject=Summer 2027 Camp Interest"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-black text-sm uppercase tracking-wide shadow-lg shadow-primary/40 hover:bg-primary/90 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Join the Waitlist
              </a>
              <a
                href="tel:+12048182155"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm uppercase tracking-wide hover:bg-white/20 transition-colors"
              >
                <Phone className="h-4 w-4" />
                (204) 818-2155
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mt-5 text-white/50 text-sm">Ages 6–16 · North East & Seven Oaks locations · Limited spots per session</p>
          </FadeIn>
        </div>
      </section>

      {/* Camp Types */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Choose your adventure</p>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-secondary uppercase tracking-tight">
              Camp Tracks
            </h2>
            <p className="mt-3 text-secondary/60 max-w-xl mx-auto">Each camp is designed around a specific skill.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {camps.map((camp, i) => (
              <FadeIn key={camp.title} delay={i * 0.08}>
                <div className={`bg-white rounded-2xl p-6 border ${camp.border} shadow-sm h-full`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 p-3 rounded-xl ${camp.bg}`}>
                      <camp.icon className={`h-6 w-6 ${camp.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-black text-secondary text-base">{camp.title}</h3>
                        <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${camp.bg} ${camp.color}`}>{camp.age}</span>
                      </div>
                      <p className="text-sm text-secondary/60 leading-relaxed">{camp.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Every camp includes</p>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-secondary uppercase tracking-tight">
              What to Expect
            </h2>
          </FadeIn>
          <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
            {included.map((item, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-semibold text-secondary">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Skill Samurai */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Why Skill Samurai</p>
              <h2 className="text-3xl md:text-4xl font-black font-heading text-secondary uppercase tracking-tight mb-5">
                More Than Just Screen Time.
              </h2>
              <p className="text-secondary/65 leading-relaxed mb-5">
                Our camps are built around real project outcomes. Every day, kids make progress on something tangible — a game, an app, a robot. By Friday, they walk out with something they built themselves and the confidence to keep going.
              </p>
              <p className="text-secondary/65 leading-relaxed">
                Instructors are CS-trained, great with kids, and focused on keeping things fun while building real skills. Small groups mean every child gets attention.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: "Max 12 kids per camp", color: "text-primary", bg: "bg-primary/10" },
                  { icon: Trophy, label: "Real projects to take home", color: "text-[#F59100]", bg: "bg-[#F59100]/10" },
                  { icon: Zap, label: "CS-trained instructors", color: "text-primary", bg: "bg-primary/10" },
                  { icon: Star, label: "148+ five-star reviews", color: "text-[#F59100]", bg: "bg-[#F59100]/10" },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 text-center">
                    <div className={`inline-flex p-3 rounded-xl ${item.bg} mb-3`}>
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <p className="text-xs font-bold text-secondary leading-snug">{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Common questions</p>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-white uppercase tracking-tight">
              FAQs
            </h2>
          </FadeIn>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-black text-white text-sm mb-1.5">{faq.q}</h3>
                      <p className="text-sm text-white/65 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <Rocket className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-secondary uppercase tracking-tight mb-4">
              Get Early Access
            </h2>
            <p className="text-secondary/65 text-lg max-w-xl mx-auto mb-8">
              Camps launch Summer 2027. Join the interest list now and be first to know when registration opens — spots will be limited.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:winnipeg@skillsamurai.com?subject=Summer 2027 Camp Interest"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-black text-sm uppercase tracking-wide shadow-lg shadow-primary/40 hover:bg-primary/90 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Join the Waitlist
              </a>
              <a
                href="tel:+12048182155"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary text-white font-bold text-sm uppercase tracking-wide hover:bg-secondary/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                (204) 818-2155
              </a>
            </div>
            <p className="mt-5 text-secondary/40 text-sm">North East & Seven Oaks · Ages 6–16 · Launching Summer 2027</p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
