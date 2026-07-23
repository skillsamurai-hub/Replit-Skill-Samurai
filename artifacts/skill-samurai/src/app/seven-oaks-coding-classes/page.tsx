import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Star, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Enroll in Seven Oaks Coding Classes | Skill Samurai Winnipeg",
  description:
    "Enroll your child in weekly coding, robotics, and STEM classes at Skill Samurai's Seven Oaks Winnipeg location. Ages 6–18. 745 Kingsbury Ave. Wed & Thu evenings.",
  alternates: {
    canonical: "https://www.skillsamuraiwinnipeg.com/seven-oaks-coding-classes",
  },
};

const ENROLL_URL = "https://winnipeg.jumbula.com/seven-oaks-coding-classes";

const slots = [
  { day: "Wednesday", time: "4:30 PM",  program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Wednesday start date" },
  { day: "Wednesday", time: "5:30 PM",  program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Wednesday start date" },
  { day: "Wednesday", time: "6:30 PM",  program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Wednesday start date" },
  { day: "Thursday",  time: "4:30 PM",  program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Thursday start date"  },
  { day: "Thursday",  time: "5:30 PM",  program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Thursday start date"  },
  { day: "Thursday",  time: "6:30 PM",  program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Thursday start date"  },
];

export default function SevenOaksCodingClasses() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Page header */}
      <div className="bg-secondary border-b border-white/10 py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link href="/" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm font-medium mb-6 transition-colors">
            <ArrowRight className="h-3.5 w-3.5 rotate-180" />
            Home
          </Link>
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Skill Samurai Winnipeg</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white leading-tight tracking-tight mb-2">
            Weekly Coding and STEM Classes
          </h1>
          <p className="text-lg font-semibold text-white/60 mb-1">(Seven Oaks Location)</p>
          <p className="text-white/50 text-sm max-w-2xl">
            Fun and timely after-school coding sessions that teach students the fundamentals of software development.
          </p>
          <div className="flex flex-wrap gap-4 mt-5 text-sm text-white/60">
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" />745 Kingsbury Ave., Winnipeg, MB R2V 3N5</span>
            <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />155+ five-star reviews</span>
          </div>
        </div>
      </div>

      {/* Schedule table */}
      <div className="container mx-auto px-4 max-w-5xl py-10">

        <h2 className="text-xl font-black text-secondary text-center mb-1">Summer 2026 — Available Sessions</h2>
        <p className="text-secondary/50 text-sm text-center mb-8">Select a time slot and click Enroll Now to register on our secure registration portal.</p>

        {/* Desktop table */}
        <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="text-left px-5 py-3.5 font-bold text-xs uppercase tracking-wider">Program</th>
                <th className="text-left px-5 py-3.5 font-bold text-xs uppercase tracking-wider">Restrictions</th>
                <th className="text-left px-5 py-3.5 font-bold text-xs uppercase tracking-wider">Location</th>
                <th className="text-left px-5 py-3.5 font-bold text-xs uppercase tracking-wider">Additional Note</th>
                <th className="text-right px-5 py-3.5 font-bold text-xs uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {slots.map((slot, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4 font-semibold text-secondary">
                    {slot.day} {slot.time} – {slot.program}
                  </td>
                  <td className="px-5 py-4 text-secondary/60">{slot.grades}</td>
                  <td className="px-5 py-4 text-secondary/60">
                    Seven Oaks Location,<br />
                    <span className="text-secondary/40">745 Kingsbury Ave., Winnipeg, MB R2V 3N5</span>
                  </td>
                  <td className="px-5 py-4 text-secondary/50 text-xs">{slot.note}</td>
                  <td className="px-5 py-4 text-right">
                    <a
                      href={ENROLL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wide transition-all hover:scale-105 shadow-sm shadow-primary/30 whitespace-nowrap"
                    >
                      Enroll Now
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3 mb-8">
          {slots.map((slot, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <p className="font-black text-secondary text-base mb-1">{slot.day} {slot.time}</p>
              <p className="text-secondary/70 text-sm font-semibold mb-1">{slot.program}</p>
              <p className="text-secondary/50 text-xs mb-1">{slot.grades}</p>
              <p className="text-secondary/40 text-xs mb-4">745 Kingsbury Ave., Winnipeg, MB R2V 3N5</p>
              <a
                href={ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wide transition-all w-full"
              >
                Enroll Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Policies */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h3 className="text-base font-black text-secondary mb-4">Class Cancellation and Make-up Class Policy</h3>
          <div className="space-y-4 text-sm text-secondary/70">
            <div>
              <p className="font-bold text-secondary mb-1">How to Cancel or Pause Classes</p>
              <p>We require 30 days written notice to cancel or pause your membership. Please email us or call <a href="tel:+14319982155" className="text-primary font-bold hover:underline">431-998-2155</a> to initiate any changes.</p>
            </div>
            <div>
              <p className="font-bold text-secondary mb-1">Make-up Classes</p>
              <p>If your child misses a class, we offer makeup sessions at either location. Contact us to schedule a makeup at a time that works for your family.</p>
            </div>
            <div>
              <p className="font-bold text-secondary mb-1">Month-to-Month Membership</p>
              <p>There are no long-term contracts. Your membership continues month-to-month until you choose to cancel with 30 days notice.</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-secondary rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-black text-base mb-1">Have questions before enrolling?</p>
            <p className="text-white/60 text-sm">We&apos;re happy to help you find the right fit for your child.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="tel:+14319982155" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2.5 rounded-xl text-sm border border-white/20 transition-colors">
              <Phone className="h-4 w-4 text-primary" /> 431-998-2155
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-colors">
              <Mail className="h-4 w-4" /> Email Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
