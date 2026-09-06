import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Star } from "lucide-react";
import ScheduleTable from "@/components/schedule-table";
import type { Slot } from "@/components/schedule-table";

export const metadata: Metadata = {
  title: "Enroll in St. Alphonsus Coding Classes | Skill Samurai Winnipeg",
  description:
    "Enroll your child in Friday coding, robotics, and STEM classes at St. Alphonsus School in Winnipeg. Ages 6–18. Classes at 3:15, 4:30, and 5:30 PM.",
  alternates: {
    canonical: "https://www.skillsamuraiwinnipeg.com/st-alphonsus-coding-classes",
  },
};

const slots: Slot[] = [
  { day: "Friday", time: "3:15 PM", program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Friday start date", url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Friday315pmWeeklyCodingClasses" },
  { day: "Friday", time: "4:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Friday start date", url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Friday430pmWeeklyCodingClasses" },
  { day: "Friday", time: "5:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Friday start date", url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Friday530pmWeeklyCodingClasses" },
];

const terms = [
  { label: "Term 1", dates: "Oct – Jan" },
  { label: "Term 2", dates: "Feb – May" },
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
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">After-School Program · St. Alphonsus Winnipeg</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white leading-tight tracking-tight mb-1">
            Coding Classes — St. Alphonsus
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-medium max-w-2xl">
            Weekly coding &amp; STEM classes for kids ages 6–18. No experience needed.
          </p>
          <div className="flex flex-wrap gap-4 mt-5 text-sm text-white/80">
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" />343 Munroe Avenue, Winnipeg, MB R2K 1H2</span>
            <span className="flex items-center gap-1.5 text-white/60">·</span>
            <span className="flex items-center gap-1.5">Ages 6–18</span>
            <span className="flex items-center gap-1.5 text-white/60">·</span>
            <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />155+ five-star reviews</span>
          </div>
        </div>
      </div>

      {/* Schedule table */}
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto mb-10">
          <h2 className="text-xl font-black text-secondary text-center mb-5">Program Terms</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {terms.map((term) => (
              <div key={term.label} className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm text-center">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{term.label}</p>
                <p className="text-xl font-black text-secondary">{term.dates}</p>
              </div>
            ))}
          </div>
        </div>
        <ScheduleTable
          slots={slots}
          locationName="St. Alphonsus School"
          locationAddress="343 Munroe Avenue, Winnipeg, MB R2K 1H2"
          locationId="st-alphonsus"
        />
      </div>
    </div>
  );
}
