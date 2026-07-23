import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Star } from "lucide-react";
import ScheduleTable from "@/components/schedule-table";
import type { Slot } from "@/components/schedule-table";

export const metadata: Metadata = {
  title: "Enroll in North East Coding Classes | Skill Samurai Winnipeg",
  description:
    "Enroll your child in weekly coding, robotics, and STEM classes at Skill Samurai's North East Winnipeg location. Ages 6–18. 1199 Rothesay St. Mon & Tue evenings.",
  alternates: {
    canonical: "https://www.skillsamuraiwinnipeg.com/north-east-coding-classes",
  },
};

const slots: Slot[] = [
  { day: "Monday",  time: "5:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Monday start date",  url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Monday530pmWeeklyCodingClasses_143" },
  { day: "Monday",  time: "6:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Monday start date",  url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Monday630pmWeeklyCodingClasses" },
  { day: "Tuesday", time: "5:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Tuesday start date", url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Tuesday530pmWeeklyCodingClasses" },
  { day: "Tuesday", time: "6:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Tuesday start date", url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Tuesday630pmWeeklyCodingClasses" },
];

export default function NorthEastCodingClasses() {
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
          <p className="text-lg font-semibold text-white/60 mb-1">(North East Location)</p>
          <p className="text-white/50 text-sm max-w-2xl">
            Fun and timely after-school coding sessions that teach students the fundamentals of software development.
          </p>
          <div className="flex flex-wrap gap-4 mt-5 text-sm text-white/60">
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" />1199 Rothesay St., Winnipeg, MB R2G 0J7</span>
            <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />155+ five-star reviews</span>
          </div>
        </div>
      </div>

      {/* Schedule table */}
      <div className="container mx-auto px-4 py-10">
        <ScheduleTable
          slots={slots}
          locationName="North East Location (Scout Coffee + Community)"
          locationAddress="1199 Rothesay St., Winnipeg, MB R2G 0J7"
        />
      </div>

    </div>
  );
}
