import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Star, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "St. Alphonsus Coding Classes — Coming Soon | Skill Samurai Winnipeg",
  description:
    "Weekly coding, robotics, and STEM classes are coming soon to Skill Samurai's St. Alphonsus location in Winnipeg. Ages 6–18. Three terms: Oct–Dec, Jan–Mar, Apr–Jun.",
  alternates: {
    canonical: "https://www.skillsamuraiwinnipeg.com/st-alphonsus-coding-classes",
  },
};

const TERMS = [
  { label: "Fall Term",   dates: "Oct – Dec",  key: "fall"   },
  { label: "Winter Term", dates: "Jan – Mar",  key: "winter" },
  { label: "Spring Term", dates: "Apr – Jun",  key: "spring" },
];

export default function StAlphonsusCodingClasses() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Page header */}
      <div className="bg-secondary border-b border-white/10 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm font-medium mb-6 transition-colors">
            <ArrowRight className="h-3.5 w-3.5 rotate-180" />
            Home
          </Link>
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Skill Samurai Winnipeg</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white leading-tight tracking-tight mb-2">
            Weekly Coding and STEM Classes
          </h1>
          <p className="text-lg font-semibold text-white/80 mb-1">(St. Alphonsus Location)</p>
          <p className="text-white/75 text-sm max-w-2xl">
            Fun and timely after-school coding sessions that teach students the fundamentals of software development.
          </p>
          <div className="flex flex-wrap gap-4 mt-5 text-sm text-white/80">
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" />St. Alphonsus School, Winnipeg, MB</span>
            <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />155+ five-star reviews</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        {/* Coming Soon */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Clock className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-black text-secondary mb-3">Coming Soon</h2>
          <p className="text-secondary/60 text-sm mb-8">
            We&apos;re finalising the schedule for our St. Alphonsus location. Classes will run across three terms each year — register your interest and we&apos;ll be in touch as soon as enrolment opens.
          </p>

          {/* Terms */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {TERMS.map((term) => (
              <div key={term.key} className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm text-center">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{term.label}</p>
                <p className="text-lg font-black text-secondary">{term.dates}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+14319982155"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors w-full sm:w-auto justify-center"
            >
              <Phone className="h-4 w-4" /> 431-998-2155
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors w-full sm:w-auto justify-center"
            >
              <Mail className="h-4 w-4" /> Email Us
            </Link>
          </div>
        </div>

        {/* Other locations */}
        <div className="border-t border-gray-200 pt-12">
          <p className="text-center text-secondary/50 text-xs uppercase tracking-widest font-bold mb-6">Enrol now at our other locations</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link
              href="/north-east-coding-classes"
              className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <p className="font-black text-secondary group-hover:text-primary transition-colors mb-1">North East Location</p>
              <p className="text-secondary/50 text-xs mb-3">1199 Rothesay St. · Mon &amp; Tue evenings</p>
              <span className="inline-flex items-center gap-1 text-primary text-xs font-bold">View schedule <ArrowRight className="h-3 w-3" /></span>
            </Link>
            <Link
              href="/seven-oaks-coding-classes"
              className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <p className="font-black text-secondary group-hover:text-primary transition-colors mb-1">Seven Oaks Location</p>
              <p className="text-secondary/50 text-xs mb-3">745 Kingsbury Ave. · Wed &amp; Thu evenings</p>
              <span className="inline-flex items-center gap-1 text-primary text-xs font-bold">View schedule <ArrowRight className="h-3 w-3" /></span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
