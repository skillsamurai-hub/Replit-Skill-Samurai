import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Star } from "lucide-react";
import ScheduleTable from "@/components/schedule-table";
import type { Slot, TermSchedule } from "@/components/schedule-table";
import type { FAQItem } from "@/components/enrollment-faq";
import { stAlphonsusReviews } from "@/lib/program-reviews";

export const metadata: Metadata = {
  title: "Enroll in St. Alphonsus Coding Classes | Skill Samurai Winnipeg",
  description:
    "Enroll your child in Friday coding, robotics, and STEM classes for Grades 1–8 at St. Alphonsus School in Winnipeg. Classes at 3:15, 4:30, and 5:45 PM.",
  alternates: {
    canonical: "https://www.skillsamuraiwinnipeg.com/st-alphonsus-coding-classes",
  },
};

const slots: Slot[] = [
  { day: "Friday", time: "3:15 PM", program: "Weekly Coding Classes", grades: "Grades 1–8", note: "Choose a Friday start date", url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Friday315pmWeeklyCodingClasses", spotsLeft: 20 },
  { day: "Friday", time: "4:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–8", note: "Choose a Friday start date", url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Friday430pmWeeklyCodingClasses", spotsLeft: 20 },
  { day: "Friday", time: "5:30 PM", program: "Weekly Coding Classes", grades: "Grades 1–8", note: "Choose a Friday start date", url: "https://winnipeg.jumbula.com/JanuaryDec2028Subscription/Friday530pmWeeklyCodingClasses", spotsLeft: 20 },
];

const terms = [
  { label: "Term 1", dates: "Oct 16, 2026 – Feb 5, 2027", classCount: "12 classes", sessionTimes: "3:15 PM, 4:30 PM & 5:45 PM" },
  { label: "Term 2", dates: "Feb 19, 2027 – May 28, 2027", classCount: "", sessionTimes: "3:15 PM, 4:30 PM & 5:45 PM" },
];

const term1Slots: Slot[] = slots.map((slot) =>
  slot.time === "3:15 PM"
    ? { ...slot, spotsLeft: 6, url: "https://winnipeg.jumbula.com/StAlphonsusCodingClubTerm1Oct2026Jan2027Final/StAlphonsusCodingClubTerm1Oct16th2026Feb5th2027315pm415pm" }
    : slot.time === "4:30 PM"
      ? { ...slot, spotsLeft: 8, url: "https://winnipeg.jumbula.com/StAlphonsusCodingClubTerm1Oct2026Jan2027Final/StAlphonsusCodingClubTerm1Oct16th2026Feb5th2027430pm530pm" }
      : slot.time === "5:30 PM"
        ? { ...slot, time: "5:45 PM", spotsLeft: 18, url: "https://winnipeg.jumbula.com/StAlphonsusCodingClubTerm1Oct2026Jan2027Final/StAlphonsusCodingClubTerm1Oct16th2026Feb5th2027545pm645pm" }
        : slot
);

const term2Slots: Slot[] = slots.map((slot) =>
  slot.time === "3:15 PM"
    ? { ...slot, url: "https://winnipeg.jumbula.com/StAlphonsusCodingClubTerm2FebMay2027/StAlphonsusCodingClubTerm2Feb19thMay28th2027315pm415pm" }
    : slot.time === "4:30 PM"
      ? { ...slot, url: "https://winnipeg.jumbula.com/StAlphonsusCodingClubTerm2FebMay2027/StAlphonsusCodingClubTerm2Feb19thMay28th2027430pm530pm" }
      : slot.time === "5:30 PM"
        ? { ...slot, time: "5:45 PM", url: "https://winnipeg.jumbula.com/StAlphonsusCodingClubTerm2FebMay2027/StAlphonsusCodingClubTerm2Feb19thMay28th2027545pm645pm" }
        : slot
);

const freeTrialUrl = "https://book.skillsamuraiwinnipeg.com/widget/booking/agzgaYAJGGRT4YEiGkJy";
const parentCalendarUrl = "https://www.canva.com/design/DAGcsP92848/sxBR1gprktasTlngE9VZww/view?utm_content=DAGcsP92848&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0cfe7f44c1#2";

const stAlphonsusFAQs: FAQItem[] = [
  {
    q: "Who can register?",
    a: "The St. Alphonsus Coding Club is for students in Grades 1–8. The 3:15–4:15 PM class is for St. Alphonsus students only. The 4:30–5:30 PM and 5:45–6:45 PM classes are open to all students in Winnipeg and the surrounding community.",
  },
  {
    q: "When are classes?",
    a: "Classes are held on Fridays in two terms. Term 1 includes 12 classes, starting October 16, 2026 and ending February 5, 2027. Term 2 starts February 19, 2027 and ends May 28, 2027. There are no classes on school closures, holidays, or scheduled non-instruction days. Families receive a full class calendar for each term. The one-time $99 registration fee is waived when you enroll by the Early Bird deadline: October 9, 2026 for Term 1 or February 12, 2027 for Term 2. No promo code is required.",
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
    q: "My child attended Coding Club last year. Where will they start?",
    a: "Returning students continue from where they left off. Our instructors will review your child’s progress and place them at the appropriate point in the curriculum so they can keep building their skills.",
  },
  {
    q: "My child is enrolled in Term 1. Can we enroll in Term 2?",
    a: "Yes. Term 1 students can enroll in Term 2 and will continue from where they left off. Term 2 enrollment opens on December 1, 2026. Until then, use the “Join Waitlist” button for your preferred class time.",
  },
  {
    q: "What if my child misses a class?",
    a: "Make-up classes can be booked at any of our three Winnipeg Skill Samurai locations, subject to availability.",
    link: {
      action: "makeup",
      label: "Book a Makeup Class at Any Location",
    },
  },
  {
    q: "What happens on school in-service days?",
    a: "When a Friday class is affected by a school in-service day, you’ll receive a class credit that can be used to book a make-up class at any of our three Winnipeg locations. Click the “Book Makeup Class” button at the top right of the website to choose an available class.",
    link: {
      href: parentCalendarUrl,
      label: "View the live parent calendar",
    },
  },
  {
    q: "What is the cancellation policy?",
    a: "Registration is for the full four-month term, and your child’s spot is reserved for the entire term. Once registered, instructors, curriculum, software, and program resources are planned and allocated based on enrollment for the full term. There are no refunds. Cancellations, pauses, and early withdrawals are not available once the term begins.",
  },
];

const termSchedules: TermSchedule[] = terms.map((term, index) => ({
  label: `${term.label} · ${term.dates}${term.classCount ? ` · ${term.classCount}` : ""}`,
  slots: index === 0 ? term1Slots : term2Slots,
  ...(index === 1
    ? {
        enrollmentOpensAt: "2026-12-01T00:00:00-06:00",
        enrollmentOpensLabel: "Opens Dec. 1",
      }
    : {}),
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
          <div className="mb-3">
            <span className="inline-flex rounded-full bg-primary px-3 py-1 text-[11px] font-black uppercase tracking-widest text-white shadow-lg shadow-primary/20">
              New Friday Classes
            </span>
          </div>
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
            <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />159 five-star reviews</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-7">
            <a
              href={freeTrialUrl}
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
          termSchedules={termSchedules}
          locationName="St. Alphonsus School"
          locationAddress="343 Munroe Avenue, Winnipeg, MB R2K 1H2"
          locationId="st-alphonsus"
          freeTrialUrl={freeTrialUrl}
          faqs={stAlphonsusFAQs}
          registrationFeeNote=""
          registrationFeePromotion="Waived by Early Bird deadlines: Oct. 9 / Feb. 12"
          subscriptionLabel="4-Month Term"
          subscriptionNote="4 monthly payments · Taxes, software & resources included"
          pricingFooter="Registration is for the full 4-month term. Make-up classes are available at either Winnipeg location."
          studentRangeLabel="Grades 1–8"
          testimonials={stAlphonsusReviews}
          reviewCountLabel="159 five-star reviews"
        />
      </div>
    </div>
  );
}
