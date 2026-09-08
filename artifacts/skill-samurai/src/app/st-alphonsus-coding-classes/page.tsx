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
    "Enroll your child in Friday coding, robotics, and STEM classes for Grades 1–8 at St. Alphonsus School in Winnipeg. Classes at 3:15, 4:30, and 5:45 PM.",
  alternates: {
    canonical: "https://www.skillsamuraiwinnipeg.com/st-alphonsus-coding-classes",
  },
};

const slots: Slot[] = [
  { day: "Friday", time: "3:15 PM", program: "Weekly Coding Classes", grades: "Grades 1–8", note: "Choose a Friday start date", url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Friday315pmWeeklyCodingClasses" },
  { day: "Friday", time: "4:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–8", note: "Choose a Friday start date", url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Friday430pmWeeklyCodingClasses" },
  { day: "Friday", time: "5:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–8", note: "Choose a Friday start date", url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Friday530pmWeeklyCodingClasses" },
];

const terms = [
  { label: "Term 1", dates: "Oct 9, 2026 – Jan 29, 2027", sessionTimes: "3:15 PM, 4:30 PM & 5:45 PM" },
  { label: "Term 2", dates: "Feb 5, 2027 – May 28, 2027", sessionTimes: "3:15 PM, 4:30 PM & 5:45 PM" },
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
    q: "Who can register?",
    a: "The St. Alphonsus Coding Club is for students in Grades 1–8. The 3:15–4:15 PM class is for St. Alphonsus students only. The 4:30–5:30 PM and 5:45–6:45 PM classes are open to all students in Winnipeg and the surrounding community.",
  },
  {
    q: "When are classes?",
    a: "Classes are held on Fridays in two four-month terms: Term 1 starts October 9, 2026 and ends January 29, 2027, while Term 2 starts February 5, 2027 and ends May 28, 2027. There are no classes on school closures, holidays, or scheduled non-instruction days. Families receive a full class calendar for each term. The one-time $99 registration fee is waived when you enroll by the Early Bird deadline: October 2, 2026 for Term 1 or January 29, 2027 for Term 2. No promo code is required.",
  },
  {
    q: "How do you support different learning needs?",
    a: "We welcome students with different learning styles, abilities, and support needs. Our instructors work to create a supportive and encouraging learning environment for every student. If your child has specific accommodations or support needs, please contact us before registering so we can learn how to best support them during class.",
  },
  {
    q: "What will my child learn?",
    a: "Students build real coding and computer science skills through fun, hands-on projects, including game development, animations, interactive projects, and creative coding challenges. Along the way, they develop problem-solving, creativity, logical thinking, and confidence with technology.",
  },
  {
    q: "Does my child need to bring a laptop?",
    a: "No. We provide the laptops, software, and everything students need for class.",
  },
  {
    q: "How does the 3:15 PM class work for St. Alphonsus students?",
    a: "Students can transition directly from the school day into Coding Club. We’ll coordinate with the school and keep a clear list for parent pickup or return to the school’s after-school program after class.",
  },
  {
    q: "My child has never coded before. Will they fit in?",
    a: "Absolutely. No coding experience is required. Students learn at their own pace with support from Skill Samurai instructors.",
  },
  {
    q: "What if my child misses a class?",
    a: "Make-up classes are available at either of our two Winnipeg Skill Samurai locations, subject to availability. Make-up classes can be booked through our website or by calling 431-998-2155.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Registration is for the full four-month term, and your child’s spot is reserved for the entire term. Once registered, instructors, curriculum, software, and program resources are planned and allocated based on enrollment for the full term. For this reason, cancellations, pauses, and early withdrawals are not available once the term begins.",
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
            Friday Coding Classes — St. Alphonsus
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-medium max-w-none md:whitespace-nowrap">
            Weekly Friday coding &amp; STEM classes for <span className="whitespace-nowrap">Grades 1–8 (no experience needed).</span>
          </p>
          <div className="flex flex-wrap gap-4 mt-5 text-sm text-white/80">
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" />343 Munroe Avenue, Winnipeg, MB R2K 1H2</span>
            <span className="flex items-center gap-1.5 text-white/60">·</span>
            <span className="flex items-center gap-1.5">Grades 1–8</span>
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
          registrationFeeNote=""
          registrationFeePromotion="Waived by Early Bird deadlines: Oct. 2 / Jan. 29"
          subscriptionLabel="4-Month Term"
          subscriptionNote="4 monthly payments · Taxes, software & resources included"
          pricingFooter="Registration is for the full 4-month term. Make-up classes are available at either Winnipeg location."
          studentRangeLabel="Grades 1–8"
        />
      </div>
    </div>
  );
}
