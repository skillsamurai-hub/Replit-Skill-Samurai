import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Star } from "lucide-react";
import ScheduleTable from "@/components/schedule-table";
import type { Slot } from "@/components/schedule-table";
import { northEastReviews } from "@/lib/program-reviews";

export const metadata: Metadata = {
  title: "Enroll in North East Coding Classes | Skill Samurai Winnipeg",
  description:
    "Enroll your child in weekly coding, robotics, and STEM classes at Skill Samurai's North East Winnipeg location. Ages 6–18. 1199 Rothesay St. Mon & Tue evenings.",
  alternates: {
    canonical: "https://www.skillsamuraiwinnipeg.com/north-east-coding-classes",
  },
};

const slots: Slot[] = [
  { day: "Monday",  time: "5:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Monday start date",  url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Monday530pmWeeklyCodingClasses_143", spotsLeft: 1 },
  { day: "Monday",  time: "6:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Monday start date",  url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Monday630pmWeeklyCodingClasses", spotsLeft: 0 },
  { day: "Tuesday", time: "5:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Tuesday start date", url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Tuesday530pmWeeklyCodingClasses", spotsLeft: 0 },
  { day: "Tuesday", time: "6:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–12", note: "Choose a Tuesday start date", url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Tuesday630pmWeeklyCodingClasses", spotsLeft: 1 },
];

const freeClassUrl = "https://book.skillsamuraiwinnipeg.com/widget/booking/TnDl1OMZ4UVFMhbBfc8g";
const parentCalendarUrl = "https://www.canva.com/design/DAGcsP92848/sxBR1gprktasTlngE9VZww/view?utm_content=DAGcsP92848&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0cfe7f44c1#2";

export default function NorthEastCodingClasses() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Page header */}
      <div className="bg-secondary border-b border-white/10 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm font-medium mb-5 transition-colors">
            <ArrowRight className="h-3.5 w-3.5 rotate-180" />
            Home
          </Link>
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">After-School Program · North East Winnipeg</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white leading-tight tracking-tight mb-2">
            Coding Classes — North East
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-medium max-w-2xl">
            Weekly coding &amp; STEM classes for kids ages 6–18. No experience needed.
          </p>
          <div className="flex flex-wrap gap-4 mt-5 text-sm text-white/80">
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" />1199 Rothesay St., Winnipeg, MB R2G 0J7</span>
            <span className="flex items-center gap-1.5 text-white/60">·</span>
            <span className="flex items-center gap-1.5">Ages 6–18</span>
            <span className="flex items-center gap-1.5 text-white/60">·</span>
            <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />161+ five-star reviews</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-7">
            <a
              href={freeClassUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-black px-6 py-3 rounded-xl shadow-lg shadow-primary/30 transition-all hover:scale-105"
            >
              Book a Free Class <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={parentCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 bg-white/10 hover:bg-white/20 text-white font-black px-6 py-3 rounded-xl transition-all hover:scale-105"
            >
              View Parent Calendar
            </a>
          </div>
        </div>
      </div>

      {/* Schedule table */}
      <div className="container mx-auto px-4 py-10">
        <ScheduleTable
          slots={slots}
          locationName="North East Location"
          locationAddress="1199 Rothesay St., Winnipeg, MB R2G 0J7"
          locationId="north-east"
          defaultWaitlistUrl="https://book.skillsamuraiwinnipeg.com/widget/form/JKoCjgAhRxcyySexZMhq"
          testimonials={northEastReviews}
        />
      </div>

    </div>
  );
}
