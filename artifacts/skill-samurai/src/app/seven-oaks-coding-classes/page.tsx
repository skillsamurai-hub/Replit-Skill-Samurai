import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import ScheduleTable from "@/components/schedule-table";
import type { Slot } from "@/components/schedule-table";

export const metadata: Metadata = {
  title: "Enroll in Seven Oaks Coding Classes | Skill Samurai Winnipeg",
  description:
    "Enroll your child in weekly coding, robotics, and STEM classes at Skill Samurai's Seven Oaks Winnipeg location. Ages 6–18. 745 Kingsbury Ave. Wed & Thu evenings.",
  alternates: {
    canonical: "https://www.skillsamuraiwinnipeg.com/seven-oaks-coding-classes",
  },
};

const slots: Slot[] = [
  { day: "Wednesday", time: "4:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Wednesday start date", url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Wednesday430pmWeeklyCodingClasses", spotsLeft: 3 },
  { day: "Wednesday", time: "5:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Wednesday start date", url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Wednesday530pmWeeklyCodingClasses", spotsLeft: 5 },
  { day: "Wednesday", time: "6:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Wednesday start date", url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Wednesday630pmWeeklyCodingClasses", spotsLeft: 2 },
  { day: "Thursday",  time: "4:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Thursday start date",  url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Thursday430pmWeeklyCodingClasses", spotsLeft: 4 },
  { day: "Thursday",  time: "5:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Thursday start date",  url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Thursday530pmWeeklyCodingClasses", spotsLeft: 6 },
  { day: "Thursday",  time: "6:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Thursday start date",  url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Thursday630pmWeeklyCodingClasses", spotsLeft: 3 },
];

export default function SevenOaksCodingClasses() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Page header */}
      <div className="bg-secondary border-b border-white/10 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm font-medium mb-5 transition-colors">
            <ArrowRight className="h-3.5 w-3.5 rotate-180" />
            Home
          </Link>
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">After-School Program · Seven Oaks Winnipeg</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white leading-tight tracking-tight mb-2">
            Coding Classes — Seven Oaks
          </h1>
          <p className="text-white/70 text-sm max-w-2xl">
            Weekly coding &amp; STEM classes for kids ages 6–18. No experience needed.
          </p>
          <div className="flex flex-wrap gap-4 mt-5 text-sm text-white/80">
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" />745 Kingsbury Ave., Winnipeg, MB R2V 3N5</span>
            <span className="flex items-center gap-1.5 text-white/60">·</span>
            <span className="flex items-center gap-1.5">Ages 6–18</span>
            <span className="flex items-center gap-1.5 text-white/60">·</span>
            <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />155+ five-star reviews</span>
          </div>
        </div>
      </div>

      {/* Schedule table */}
      <div className="container mx-auto px-4 py-10">
        <ScheduleTable
          slots={slots}
          locationName="Seven Oaks Location"
          locationAddress="745 Kingsbury Ave., Winnipeg, MB R2V 3N5"
          locationId="seven-oaks"
          defaultWaitlistUrl="https://book.skillsamuraiwinnipeg.com/widget/form/7XZ4NFi0bH4aYHux9FRh"
        />
      </div>

    </div>
  );
}
