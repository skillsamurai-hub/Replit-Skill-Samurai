import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, CheckCircle2, ArrowRight, Star, Phone, Code2, Bot, FlaskConical, Gamepad2, Smartphone, BrainCircuit, Users, CalendarCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Enroll in St. Alphonsus Coding Classes | Skill Samurai Winnipeg",
  description:
    "Enroll your child in weekly coding, robotics, and STEM classes at Skill Samurai's St. Alphonsus location in Winnipeg. Ages 6–18. No experience needed.",
  alternates: {
    canonical: "https://www.skillsamuraiwinnipeg.com/st-alphonsus-coding-classes",
  },
};

const programs = [
  { icon: Code2,        label: "Coding",                  ages: "Ages 7–18" },
  { icon: Bot,          label: "Robotics",                 ages: "Ages 7–14" },
  { icon: FlaskConical, label: "STEM",                     ages: "Ages 7–12" },
  { icon: Gamepad2,     label: "Game Development",         ages: "Ages 10–18" },
  { icon: Smartphone,   label: "App Development",          ages: "Ages 12–18" },
  { icon: BrainCircuit, label: "Artificial Intelligence",  ages: "Ages 13–18" },
];

const ENROLL_URL = "https://winnipeg.jumbula.com/st-alphonsus-coding-classes";

export default function StAlphonsusCodingClasses() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-secondary relative overflow-hidden py-16 md:py-24">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <Link href="/" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm font-medium mb-8 transition-colors">
            <ArrowRight className="h-3.5 w-3.5 rotate-180" />
            Home
          </Link>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">St. Alphonsus · Winnipeg</p>
              <h1 className="text-4xl sm:text-5xl font-black font-heading text-white leading-tight tracking-tight mb-4">
                Enroll Your Child in Coding Classes
              </h1>
              <p className="text-white/70 text-lg mb-6">
                Weekly after-school coding, robotics &amp; STEM for kids ages 6–18. Small groups. Real projects. Instructors who genuinely care.
              </p>
              <div className="flex flex-wrap gap-3 mb-6 text-sm">
                <span className="flex items-center gap-1.5 text-white/80 font-medium"><MapPin className="h-3.5 w-3.5 text-primary" />St. Alphonsus School, Winnipeg</span>
                <span className="flex items-center gap-1.5 text-white/80 font-medium"><Clock className="h-3.5 w-3.5 text-primary" />Weekly after-school classes</span>
                <span className="flex items-center gap-1.5 text-white/80 font-medium"><Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />155+ five-star reviews</span>
              </div>
              <a
                href={ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-black px-8 py-5 rounded-full text-base uppercase tracking-wide shadow-2xl shadow-primary/40 transition-all hover:scale-105 active:scale-95 border-b-4 border-black/10"
              >
                Enroll Now <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-3 text-white/40 text-xs">$169/month · $99 one-time registration · No contracts</p>
            </div>

            {/* Pricing card */}
            <div className="bg-white rounded-3xl p-7 shadow-2xl shadow-black/30">
              <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">What You Pay</p>
              <div className="flex items-end gap-2 mb-1">
                <p className="text-5xl font-black text-secondary">$169</p>
                <p className="text-secondary/50 font-semibold mb-1.5">/month</p>
              </div>
              <p className="text-secondary/60 text-sm mb-5">One 55-minute class per week</p>
              <div className="bg-gray-50 rounded-2xl p-4 mb-5">
                <p className="text-xs font-bold uppercase tracking-wider text-secondary/50 mb-2">One-time registration fee</p>
                <p className="text-2xl font-black text-secondary">$99 <span className="text-base font-bold text-secondary/40">once</span></p>
                <ul className="mt-3 space-y-1.5 text-sm text-secondary/70">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />Student account &amp; platform access</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />Progress tracking &amp; reports</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />At-home coding resources</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />Administrative onboarding</li>
                </ul>
              </div>
              <a
                href={ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-white font-black py-4 rounded-2xl text-sm uppercase tracking-wide transition-all hover:scale-[1.02] shadow-lg shadow-primary/30"
              >
                Enroll Now <ArrowRight className="h-4 w-4" />
              </a>
              <p className="text-center text-secondary/40 text-xs mt-3">Month-to-month · Cancel anytime with 30 days notice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-primary/5 border-y border-primary/10 py-4">
        <div className="container mx-auto px-4 max-w-5xl flex flex-wrap justify-center gap-6 text-sm font-semibold text-secondary/70">
          <span className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" />Max 6 students per instructor</span>
          <span className="flex items-center gap-2"><CalendarCheck className="h-4 w-4 text-primary" />Year-round weekly classes</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />No experience needed</span>
          <span className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />Winnipeg's top-rated coding academy</span>
        </div>
      </div>

      {/* Programs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3 text-center">What Your Child Will Learn</p>
          <h2 className="text-3xl md:text-4xl font-black font-heading text-secondary text-center mb-3 tracking-tight">Choose a Program</h2>
          <p className="text-secondary/60 text-center mb-10 max-w-xl mx-auto">We'll help match your child to the right program. Every student follows their own pace — no one gets left behind.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
            {programs.map(({ icon: Icon, label, ages }) => (
              <div key={label} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-secondary font-black text-sm leading-snug">{label}</p>
                <span className="text-xs font-bold text-primary/70 bg-primary/8 px-2.5 py-1 rounded-full">{ages}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-black px-8 py-4 rounded-full text-sm uppercase tracking-wide shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95"
            >
              Enroll at St. Alphonsus <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why enroll */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3 text-center">Why Parents Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-black font-heading text-white text-center mb-10 tracking-tight">Built for kids who want to build things</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Small groups", body: "Max 6 students per instructor — your child gets real attention, not just a seat." },
              { title: "Real projects", body: "Every class produces something your child built themselves. They'll show you after every session." },
              { title: "Any skill level", body: "We've taught thousands of beginners. No experience means no bad habits to unlearn." },
              { title: "Consistent schedule", body: "Same day and time every week. Easy to fit into your family's routine." },
              { title: "Makeup classes", body: "Life happens. If your child misses, we offer easy makeup options — no stress." },
              { title: "No contracts", body: "Month-to-month only. We earn your trust every single month, not just once." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/10 rounded-2xl p-5 border border-white/10">
                <p className="text-white font-black text-base mb-2">{title}</p>
                <p className="text-white/60 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3 text-center">Location &amp; Schedule</p>
          <h2 className="text-3xl md:text-4xl font-black font-heading text-secondary text-center mb-10 tracking-tight">St. Alphonsus Location Details</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6">
              <MapPin className="h-6 w-6 text-primary mb-3" />
              <p className="text-xs font-bold uppercase tracking-wider text-secondary/50 mb-1">Address</p>
              <p className="text-secondary font-black text-xl mb-1">St. Alphonsus School</p>
              <p className="text-secondary/60 text-sm mb-4">Winnipeg, MB</p>
              <a href="https://maps.google.com/?q=St+Alphonsus+School+Winnipeg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:underline">
                Get Directions <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6">
              <Clock className="h-6 w-6 text-primary mb-3" />
              <p className="text-xs font-bold uppercase tracking-wider text-secondary/50 mb-1">Class Schedule</p>
              <p className="text-secondary font-black text-xl mb-1">Weekly after-school classes</p>
              <p className="text-secondary/50 text-xs">See registration form for current schedule &amp; times</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6">
              <Phone className="h-6 w-6 text-primary mb-3" />
              <p className="text-xs font-bold uppercase tracking-wider text-secondary/50 mb-1">Have a question first?</p>
              <p className="text-secondary font-black text-xl mb-1">431-998-2155</p>
              <a href="tel:+14319982155" className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:underline">Call Us <ArrowRight className="h-3.5 w-3.5" /></a>
            </div>
            <div className="bg-primary rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <p className="text-white/70 text-xs font-bold uppercase tracking-wider mb-2">Spots are limited</p>
                <p className="text-white font-black text-xl mb-1">Ready to enroll?</p>
                <p className="text-white/70 text-sm mb-5">Click below to complete registration and secure your child's spot.</p>
              </div>
              <a href={ENROLL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-primary font-black px-5 py-3.5 rounded-full text-sm uppercase tracking-wide hover:bg-white/90 transition-all">
                Enroll Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-secondary border-t border-white/5">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="flex justify-center gap-0.5 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
          </div>
          <p className="text-white/60 text-sm font-medium mb-6">"My son looks forward to every single class. Best decision we made." — Winnipeg parent</p>
          <h2 className="text-3xl md:text-4xl font-black font-heading text-white mb-3 tracking-tight">Secure your child's spot today.</h2>
          <p className="text-white/50 mb-8 text-sm">$169/month · $99 one-time registration · No long-term commitment</p>
          <a
            href={ENROLL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-black px-10 py-5 rounded-full text-base uppercase tracking-wide shadow-2xl shadow-primary/40 transition-all hover:scale-105 active:scale-95"
          >
            Enroll at St. Alphonsus <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-4 text-white/30 text-sm">Questions? <a href="tel:+14319982155" className="text-primary hover:underline">431-998-2155</a></p>
        </div>
      </section>

    </div>
  );
}
