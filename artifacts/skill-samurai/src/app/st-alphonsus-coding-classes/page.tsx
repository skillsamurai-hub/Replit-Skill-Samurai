import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Star } from "lucide-react";
import ScheduleTable from "@/components/schedule-table";
import type { Slot, TermSchedule } from "@/components/schedule-table";
import type { FAQItem } from "@/components/enrollment-faq";
import type { FreeTrialTerm } from "@/components/schedule-table";

export const metadata: Metadata = {
  title: "Enroll in St. Alphonsus Coding Classes | Skill Samurai Winnipeg",
  description:
    "Enroll your child in Friday coding, robotics, and STEM classes at St. Alphonsus School in Winnipeg. Ages 6–18. Classes at 3:15, 4:30, and 5:45 PM.",
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
  { label: "Term 1", dates: "Oct – Jan", sessionTimes: "3:15 PM, 4:30 PM & 5:45 PM" },
  { label: "Term 2", dates: "Feb – May 2027", sessionTimes: "3:15 PM, 4:30 PM & 5:45 PM" },
];

const term1Slots: Slot[] = slots.map((slot) =>
  slot.time === "3:15 PM"
    ? { ...slot, url: "https://winnipeg.jumbula.com/StAlphonsusCodingClubTerm1Oct2026Jan2027Final/StAlphonsusCodingClubTerm1Oct2026Jan2027315pm415pm" }
    : slot.time === "4:30 PM"
      ? { ...slot, url: "https://winnipeg.jumbula.com/StAlphonsusCodingClubTerm1Oct2026Jan2027Final/StAlphonsusCodingClubTerm1Oct2026Jan2027430pm530pm" }
      : slot.time === "5:30 PM"
        ? { ...slot, time: "5:45 PM", url: "https://winnipeg.jumbula.com/StAlphonsusCodingClubTerm1Oct2026Jan2027Final/StAlphonsusCodingClubTerm1Oct2026Jan2027545pm645pm" }
        : slot
);

const term2Slots: Slot[] = slots.map((slot) =>
  slot.time === "3:15 PM"
    ? { ...slot, url: "https://winnipeg.jumbula.com/StAlphonsusCodingClubTerm2FebMay2027/StAlphonsusCodingClubTerm2FebMay2027315pm415pm" }
    : slot.time === "4:30 PM"
      ? { ...slot, url: "https://winnipeg.jumbula.com/StAlphonsusCodingClubTerm2FebMay2027/StAlphonsusCodingClubTerm2FebMay2027430pm530pm" }
      : slot.time === "5:30 PM"
        ? { ...slot, time: "5:45 PM", url: "https://winnipeg.jumbula.com/StAlphonsusCodingClubTerm2FebMay2027/StAlphonsusCodingClubTerm2FebMay2027545pm645pm" }
        : slot
);

const freeTrialUrl = "https://book.skillsamuraiwinnipeg.com/widget/booking/agzgaYAJGGRT4YEiGkJy";
const freeTrialTerms: FreeTrialTerm[] = terms;

const stAlphonsusFAQs: FAQItem[] = [
  {
    q: "What is the monthly tuition?",
    a: "Tuition is $169/month and includes weekly coding classes, curriculum, software, laptops, and materials. There is a one-time $99 registration fee. During Early Bird Enrollment, use promo code STA2026 to have the registration fee waived. Students continuing from Term 1 into Term 2 will also have the $99 registration fee waived.",
  },
  {
    q: "Who can join the St. Alphonsus Coding Club?",
    a: "Classes are designed for students in Grades 1–8. The 3:15–4:15 PM class is reserved for St. Alphonsus students only. The 4:30–5:30 PM and 5:45–6:45 PM classes are open to all students.",
  },
  {
    q: "When are classes?",
    a: "Classes are held on Fridays and are offered in two four-month terms: Term 1 runs October–January and Term 2 runs February–May. There are no classes on school closures, holidays, or scheduled non-instruction days. Families receive a full class calendar for each term.",
  },
  {
    q: "My child has never coded before. Will they fit in?",
    a: "Absolutely. No previous coding experience is required. Students work at their own level and pace with support from Skill Samurai instructors.",
  },
  {
    q: "What will my child learn?",
    a: "Students learn real coding skills through fun, hands-on projects using Scratch, Roblox, game design, and more. They also develop problem-solving, creativity, logical thinking, and confidence with technology.",
  },
  {
    q: "Does my child need to bring a laptop?",
    a: "No. Skill Samurai provides the laptops, software, and everything students need for class.",
  },
  {
    q: "How does the 3:15 PM class work for St. Alphonsus students?",
    a: "Students registered for the 3:15–4:15 PM class can transition directly from the school day into Coding Club. We’ll coordinate with the school and maintain a clear list for parent pickup or return to the school’s after-school program after class.",
  },
  {
    q: "What if my child misses a class?",
    a: "Make-up classes are available at either of our two Winnipeg Skill Samurai locations, subject to availability. Select Book a Make-Up Class on our website or call 431-998-2155.",
  },
  {
    q: "How big are the classes?",
    a: "Each class is limited to 20 students, with one Skill Samurai instructor for every 10 students.",
  },
  {
    q: "Do we need to register again for Term 2?",
    a: "Yes. Term 1 and Term 2 are registered separately. Families continuing into Term 2 need to re-register to reserve their child’s spot. Spaces are first-come, first-served, and continuing students will not pay the $99 registration fee again.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Registration reserves your child’s spot for the full four-month term. Once registration is confirmed, instructors, curriculum, software, and program resources are planned and allocated based on enrollment for the full term. Cancellations, pauses, and early withdrawals are not available once the term begins. Make-up classes are available at either Winnipeg location, subject to availability.",
  },
];

const termSchedules: TermSchedule[] = terms.map((term, index) => ({
  label: `${term.label} · ${term.dates}`,
  slots: index === 0 ? term1Slots : term2Slots,
}));

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
          <a
            href={freeTrialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-7 bg-primary hover:bg-primary/90 text-white font-black px-6 py-3 rounded-xl shadow-lg shadow-primary/30 transition-all hover:scale-105"
          >
            Book a Free Friday Trial <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Schedule table */}
      <div className="container mx-auto px-4 py-10">
        <ScheduleTable
          slots={slots}
          termSchedules={termSchedules}
          locationName="St. Alphonsus School"
          locationAddress="343 Munroe Avenue, Winnipeg, MB R2K 1H2"
          locationId="st-alphonsus"
          freeTrialUrl={freeTrialUrl}
          freeTrialTerms={freeTrialTerms}
          faqs={stAlphonsusFAQs}
        />
      </div>
    </div>
  );
}
