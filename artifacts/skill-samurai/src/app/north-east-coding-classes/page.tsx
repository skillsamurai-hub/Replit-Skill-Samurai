import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, CheckCircle2, ArrowRight, Star, Phone, Code2, Bot, FlaskConical, Gamepad2, Smartphone, BrainCircuit } from "lucide-react";

export const metadata: Metadata = {
  title: "North East Coding Classes for Kids | Skill Samurai Winnipeg",
  description:
    "Weekly coding, robotics, and STEM classes for kids ages 6–18 at our North East Winnipeg location. 1199 Rothesay St. Monday & Tuesday evenings. Book a free trial class.",
  alternates: {
    canonical: "https://www.skillsamuraiwinnipeg.com/north-east-coding-classes",
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

const features = [
  "Small class sizes — max 6 students per instructor",
  "Project-based, self-paced curriculum",
  "No experience needed — beginners welcome",
  "Same day & time every week, year-round",
  "Easy makeup class options if your child misses",
  "Free trial class — no commitment required",
];

export default function NorthEastCodingClasses() {
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
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">Skill Samurai Winnipeg — North East</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white leading-tight tracking-tight mb-5">
            North East<br />Coding Classes
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8">
            Weekly coding, robotics &amp; STEM classes for kids ages 6–18. Small groups, project-based learning, and instructors who genuinely love teaching.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="https://book.skillsamuraiwinnipeg.com/widget/booking/TnDl1OMZ4UVFMhbBfc8g"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-black px-7 py-4 rounded-full text-sm uppercase tracking-wide shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95 border-b-4 border-black/10"
            >
              Book Free Trial Class
            </a>
            <a
              href="https://winnipeg.jumbula.com/north-east-coding-classes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-4 rounded-full text-sm uppercase tracking-wide border border-white/20 transition-all hover:scale-105 active:scale-95"
            >
              Register for Classes <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span className="text-white text-sm font-semibold">1199 Rothesay St., Winnipeg</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5">
              <Clock className="h-4 w-4 text-primary shrink-0" />
              <span className="text-white text-sm font-semibold">Mon &amp; Tue · 5:30pm &amp; 6:30pm</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 shrink-0" />
              <span className="text-white text-sm font-semibold">155+ Five-Star Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3 text-center">What We Teach</p>
          <h2 className="text-3xl md:text-4xl font-black font-heading text-secondary text-center mb-3 tracking-tight">Programs at North East</h2>
          <p className="text-secondary/60 text-center mb-10 max-w-xl mx-auto">Every student follows their own learning path. We match your child to the right program based on their age and interests.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">Why Families Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-black font-heading text-white mb-6 tracking-tight leading-tight">What makes Skill Samurai different</h2>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-3xl p-7 border border-white/10">
              <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Pricing</p>
              <div className="mb-5">
                <p className="text-4xl font-black text-white">$169<span className="text-lg font-bold text-white/60">/month</span></p>
                <p className="text-white/60 text-sm mt-1">One 55-minute class per week</p>
              </div>
              <div className="border-t border-white/10 pt-5 mb-5">
                <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-3">One-time registration fee</p>
                <p className="text-2xl font-black text-white">$99</p>
                <ul className="mt-3 space-y-1.5 text-sm text-white/70">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />Student account &amp; platform access</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />Progress tracking</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />At-home coding resources</li>
                </ul>
              </div>
              <p className="text-white/50 text-xs font-semibold">Month-to-month · No contracts · Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Schedule */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3 text-center">Location &amp; Schedule</p>
          <h2 className="text-3xl md:text-4xl font-black font-heading text-secondary text-center mb-10 tracking-tight">North East Location Details</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-secondary/50 mb-1">Address</p>
              <p className="text-secondary font-black text-lg leading-snug mb-1">1199 Rothesay St.</p>
              <p className="text-secondary/60 text-sm mb-3">Winnipeg, MB R2G 1T6</p>
              <a
                href="https://www.google.com/maps/place/Scout:+Coffee+%2B+Community/@49.93695,-97.0822149,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:underline"
              >
                Get Directions <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-secondary/50 mb-1">Class Schedule</p>
              <p className="text-secondary font-black text-lg leading-snug mb-1">Monday &amp; Tuesday</p>
              <p className="text-secondary/70 text-sm mb-1">5:30 PM &amp; 6:30 PM</p>
              <p className="text-secondary/50 text-xs font-medium">Year-round · Weekly · 55 minutes per class</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-secondary/50 mb-1">Questions?</p>
              <p className="text-secondary font-black text-lg mb-1">431-998-2155</p>
              <a href="tel:+14319982155" className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:underline">
                Call Us <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="bg-primary rounded-3xl p-6 text-white">
              <p className="text-white/70 text-xs font-bold uppercase tracking-wider mb-2">Ready to start?</p>
              <p className="text-white font-black text-lg mb-4">Book a free trial class — no commitment required.</p>
              <a
                href="https://book.skillsamuraiwinnipeg.com/widget/booking/TnDl1OMZ4UVFMhbBfc8g"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary font-black px-5 py-3 rounded-full text-sm uppercase tracking-wide hover:bg-white/90 transition-all"
              >
                Book Free Trial <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">Get Started Today</p>
          <h2 className="text-3xl md:text-4xl font-black font-heading text-secondary mb-4 tracking-tight">Ready to enroll at North East?</h2>
          <p className="text-secondary/60 mb-8 max-w-lg mx-auto">Start with a free trial class, or go straight to registration. Either way, your child will love it.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://book.skillsamuraiwinnipeg.com/widget/booking/TnDl1OMZ4UVFMhbBfc8g"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-black px-7 py-4 rounded-full text-sm uppercase tracking-wide shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95"
            >
              Book Free Trial Class
            </a>
            <a
              href="https://winnipeg.jumbula.com/north-east-coding-classes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-black px-7 py-4 rounded-full text-sm uppercase tracking-wide transition-all hover:scale-105 active:scale-95"
            >
              Register for Classes <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-5 text-secondary/40 text-sm">Questions? Call us at <a href="tel:+14319982155" className="text-primary font-bold hover:underline">431-998-2155</a></p>
        </div>
      </section>

    </div>
  );
}
