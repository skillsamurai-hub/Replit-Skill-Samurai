"use client";

import { FadeIn } from "@/components/ui/fade-in";
import FinalCta from "@/components/sections/final-cta";
import { Cake, Gamepad2, Code2, Trophy, Clock, Users, Star, ArrowRight, CheckCircle, Sparkles, Phone, Mail } from "lucide-react";

const included = [
  {
    icon: Gamepad2,
    title: "Coding or Gaming Activity",
    desc: "Every kid builds or plays something real — a game, an animation, or a mini-project they take home.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Up to 12 Guests",
    desc: "Perfect for small groups. Every child gets hands-on time at their own computer with instructor guidance.",
    color: "text-[#F59100]",
    bg: "bg-[#F59100]/10",
  },
  {
    icon: Clock,
    title: "2-Hour Party",
    desc: "One hour of tech fun + one hour of free time for cake, presents, and celebrating.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Trophy,
    title: "Dedicated Instructor",
    desc: "One of our trained instructors runs the activity so you can relax and enjoy the party.",
    color: "text-[#F59100]",
    bg: "bg-[#F59100]/10",
  },
  {
    icon: Star,
    title: "Birthday Kid Gets the Spotlight",
    desc: "Special shoutouts, their choice of project theme, and a moment to show everyone what they built.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Sparkles,
    title: "Available at Both Locations",
    desc: "Book at our North East or Seven Oaks location — whichever is most convenient for your family.",
    color: "text-[#F59100]",
    bg: "bg-[#F59100]/10",
  },
];

const themes = [
  { icon: Gamepad2, label: "Game Design", desc: "Build and play a simple video game" },
  { icon: Code2, label: "Scratch Coding", desc: "Create animations and interactive stories" },
  { icon: Sparkles, label: "Roblox Studio", desc: "Design their own Roblox world" },
  { icon: Trophy, label: "Minecraft Edu", desc: "Code and build in a Minecraft world" },
];

const faqs = [
  {
    q: "What ages are birthday parties for?",
    a: "Ages 6–16. We tailor the activity to match the birthday kid's age and interest level.",
  },
  {
    q: "How many kids can attend?",
    a: "Up to 12 guests. If you have a larger group, contact us and we'll see what we can arrange.",
  },
  {
    q: "Do kids need any experience?",
    a: "None at all. Our instructors guide everyone through the activity — beginners and experienced coders alike.",
  },
  {
    q: "Can we bring our own food and decorations?",
    a: "Yes! You're welcome to bring a cake, snacks, and any decorations to make the space feel special.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking up to 3 months in advance — the sooner the better to secure your preferred date and time slot.",
  },
  {
    q: "Which locations offer birthday parties?",
    a: "Both our North East and Seven Oaks locations host birthday parties on weekends.",
  },
];

export default function BirthdayPartiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(335_84%_59%/0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(218_42%_29%/0.4),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <Cake className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Birthday Parties</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading text-white uppercase tracking-tight leading-[1.0] mb-6">
              Make Their Birthday<br /><span className="text-primary">Epic.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-8 leading-relaxed">
              A coding or gaming party at Skill Samurai — where every kid builds something cool, has a blast, and goes home talking about it.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:winnipeg@skillsamurai.ca?subject=Birthday Party Inquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-black text-sm uppercase tracking-wide shadow-lg shadow-primary/40 hover:bg-primary/90 transition-colors"
              >
                <Cake className="h-4 w-4" />
                Book a Party
              </a>
              <a
                href="tel:+12048182155"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm uppercase tracking-wide hover:bg-white/20 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mt-5 text-white/50 text-sm">Ages 6–16 · Up to 12 guests · Both Winnipeg locations</p>
          </FadeIn>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Everything you need</p>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-secondary uppercase tracking-tight">
              What's Included
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {included.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.07}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full">
                  <div className={`inline-flex p-2.5 rounded-xl ${item.bg} mb-4`}>
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                  </div>
                  <h3 className="font-black text-secondary text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary/60 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Party Themes */}
      <section className="py-16 md:py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">They pick the fun</p>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-secondary uppercase tracking-tight">
              Choose a Theme
            </h2>
            <p className="mt-3 text-secondary/60 max-w-xl mx-auto">The birthday kid chooses what everyone builds or plays — we handle the rest.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {themes.map((t, i) => (
              <FadeIn key={t.label} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 text-center hover:border-primary/30 hover:shadow-md transition-all">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-3">
                    <t.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-black text-secondary text-sm uppercase tracking-wide mb-1">{t.label}</h3>
                  <p className="text-xs text-secondary/55 leading-snug">{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Party Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Real parties, real kids</p>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-secondary uppercase tracking-tight">
              See It in Action
            </h2>
            <p className="mt-3 text-secondary/60 max-w-xl mx-auto">Highlights from real birthday parties at Skill Samurai Winnipeg.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {[
              {
                label: "Birthday Party Highlight",
                tag: "Party Fun",
                videoUrl: "https://www.instagram.com/reel/DADztP8AN41/",
                color: "text-primary",
                bg: "bg-primary/10",
                border: "border-primary/20",
                tagBg: "bg-primary text-white",
              },
              {
                label: "Birthday Party Highlight",
                tag: "Kids Coding",
                videoUrl: "https://www.instagram.com/reel/DI9g9RiSRDm/",
                color: "text-[#F59100]",
                bg: "bg-[#F59100]/10",
                border: "border-[#F59100]/20",
                tagBg: "bg-[#F59100] text-white",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`h-full bg-white rounded-3xl p-6 border ${item.border} shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-2xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                      <Cake className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <p className="font-black text-base font-heading text-secondary leading-tight">Skill Samurai Winnipeg</p>
                      <span className={`text-[10px] font-bold uppercase tracking-wide ${item.color}`}>{item.tag}</span>
                    </div>
                  </div>
                  <div>
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wide ${item.tagBg}`}>{item.label}</span>
                  </div>
                  <a
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs font-black uppercase tracking-wide ${item.color} hover:underline mt-auto`}
                  >
                    ▶ Watch on Instagram
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Simple process</p>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-secondary uppercase tracking-tight">
              How It Works
            </h2>
          </FadeIn>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { step: "01", title: "Contact us to check availability", desc: "Email or call to pick your date, location, and party theme. We'll confirm within 24 hours." },
              { step: "02", title: "We set everything up", desc: "Our team prepares the computers, activity, and space before your guests arrive." },
              { step: "03", title: "Kids code, build, and celebrate", desc: "One hour of guided tech activity, then one hour free for cake and presents." },
              { step: "04", title: "Everyone goes home with something cool", desc: "Each child keeps their project — a game, animation, or creation they made themselves." },
            ].map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.08}>
                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white font-black text-sm flex items-center justify-center shadow-md shadow-primary/30">
                    {s.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-black text-secondary text-base mb-1">{s.title}</h3>
                    <p className="text-sm text-secondary/60 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Common questions</p>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-secondary uppercase tracking-tight">
              FAQs
            </h2>
          </FadeIn>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-black text-secondary text-sm mb-1.5">{faq.q}</h3>
                      <p className="text-sm text-secondary/65 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <Cake className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-white uppercase tracking-tight mb-4">
              Ready to Book?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
              Reach out and we'll get your date locked in. Spots fill up fast — especially on weekends.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:winnipeg@skillsamurai.ca?subject=Birthday Party Inquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-black text-sm uppercase tracking-wide shadow-lg shadow-primary/40 hover:bg-primary/90 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email Us to Book
              </a>
              <a
                href="tel:+12048182155"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm uppercase tracking-wide hover:bg-white/20 transition-colors"
              >
                <Phone className="h-4 w-4" />
                (204) 818-2155
              </a>
            </div>
            <p className="mt-5 text-white/40 text-sm">Both Winnipeg locations · Weekends · Ages 6–16</p>
          </FadeIn>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
