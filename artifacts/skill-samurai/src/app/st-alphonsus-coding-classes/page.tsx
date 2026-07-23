import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "St. Alphonsus Coding Classes — Register | Skill Samurai Winnipeg",
  description:
    "Register for weekly coding, robotics, and STEM classes at our St. Alphonsus location in Winnipeg. Ages 6–18. No experience needed.",
  alternates: {
    canonical: "https://www.skillsamuraiwinnipeg.com/st-alphonsus-coding-classes",
  },
};

export default function StAlphonsusCodingClasses() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-secondary py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link href="/#locations" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium mb-6 transition-colors">
            <ArrowRight className="h-3.5 w-3.5 rotate-180" />
            Back to Locations
          </Link>
          <div className="flex flex-wrap items-start gap-6 md:gap-10">
            <div className="flex-1 min-w-0">
              <p className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Skill Samurai Winnipeg</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white leading-tight tracking-tight mb-4">
                St. Alphonsus<br />Coding Classes
              </h1>
              <p className="text-white/70 text-base md:text-lg max-w-xl">
                Register your child for weekly coding, robotics, and STEM classes at our St. Alphonsus location. Ages 6–18. No experience needed.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <div className="flex items-start gap-3 bg-white/10 rounded-xl px-4 py-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">St. Alphonsus School</p>
                  <p className="text-white/60 text-xs">Winnipeg, MB</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/10 rounded-xl px-4 py-3">
                <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">Weekly after-school classes</p>
                  <p className="text-white/60 text-xs">See registration form for schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-50">
        <iframe
          src="https://winnipeg.jumbula.com/st-alphonsus-coding-classes"
          title="St. Alphonsus Coding Classes — Registration"
          className="w-full border-0"
          style={{ minHeight: "85vh", display: "block" }}
          allow="payment"
        />
        <noscript>
          <div className="text-center py-10">
            <p className="text-secondary font-semibold mb-3">Registration form requires JavaScript to load.</p>
            <a
              href="https://winnipeg.jumbula.com/st-alphonsus-coding-classes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Open Registration Page <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </noscript>
      </div>
    </div>
  );
}
