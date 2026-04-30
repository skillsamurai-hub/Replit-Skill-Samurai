"use client";

import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { MapPin, Clock, ArrowRight, CalendarClock, Sparkles, CalendarCheck } from "lucide-react";
import { openCalendarModal } from "@/components/ui/calendar-modal";

const locations = [
  {
    name: "North East",
    tag: "After-school coding classes for ages 6–18",
    address: "1199 Rothesay St., Winnipeg, MB",
    days: "Mon – Tue",
    times: "5:30pm & 6:30pm",
    timesDetail: "Two flexible after-school start times",
    bookHref: "https://link.skillsamurai.com/widget/booking/Ku7skA5XAkgQpg8rQqN1",
    makeupHref: "https://link.skillsamurai.com/widget/booking/SGsgwBr4folY53lMpMYc",
    accent: "secondary",
  },
  {
    name: "Seven Oaks",
    tag: "After-school coding classes for ages 6–18",
    address: "745 Kingsbury Ave., Winnipeg, MB",
    days: "Wed – Thu",
    times: "4:30pm, 5:30pm & 6:30pm",
    timesDetail: "Three flexible after-school start times",
    bookHref: "https://link.skillsamurai.com/widget/booking/uLciDSsBTUDqpqKRDaZq",
    makeupHref: "https://link.skillsamurai.com/widget/booking/RjGKMmLLevpPEAJx8FnW",
    accent: "primary",
  },
];

const programTags = ["Roblox", "Minecraft", "Game Design"];

function openPopup(url: string) {
  const w = 900, h = 700;
  const left = Math.max(0, (window.screen.width - w) / 2);
  const top = Math.max(0, (window.screen.height - h) / 2);
  window.open(
    url,
    "SkillSamuraiBooking",
    `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no`
  );
}

export default function Locations() {
  return (
    <section id="locations" className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">
            Two Winnipeg Locations
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white leading-tight tracking-tight mb-4">
            Choose Your Location &amp; Book a Free Coding Class
          </h3>
          <p className="text-base sm:text-lg text-white/75 font-medium mb-3">
            Same hands-on programs at both locations — no experience needed.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {locations.map((loc, i) => {
            const isPrimary = loc.accent === "primary";
            const accentBg = isPrimary ? "bg-primary" : "bg-secondary";
            const accentText = isPrimary ? "text-primary" : "text-secondary";
            const accentSoft = isPrimary ? "bg-primary/10" : "bg-secondary/10";
            const ring = isPrimary ? "hover:border-primary/40" : "hover:border-secondary/40";
            const buttonShadow = isPrimary ? "shadow-primary/25" : "shadow-secondary/25";

            return (
              <FadeIn key={loc.name} delay={i * 0.1} direction="up">
                <button
                  type="button"
                  onClick={() => openPopup(loc.bookHref)}
                  aria-label={`Book a free trial at Skill Samurai ${loc.name}`}
                  className={`group block w-full h-full text-left bg-white rounded-3xl p-6 sm:p-8 border-2 border-white/20 ${ring} shadow-2xl shadow-black/30 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/60 cursor-pointer`}
                >
                  <div className="h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`h-12 w-12 sm:h-14 sm:w-14 rounded-2xl ${accentBg} flex items-center justify-center shadow-lg rotate-3 flex-shrink-0`}>
                        <MapPin className="h-6 w-6 sm:h-7 sm:w-7 text-white" strokeWidth={2.4} />
                      </div>
                      <div>
                        <p className={`text-[11px] font-bold uppercase tracking-[0.2em] ${accentText}`}>
                          Skill Samurai
                        </p>
                        <h4 className="text-2xl sm:text-3xl font-black font-heading text-secondary leading-tight">
                          {loc.name}
                        </h4>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-secondary/80 mb-4">
                      {loc.tag}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {programTags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${accentSoft} ${accentText}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-3 mb-7">
                      <li className="flex items-start gap-3">
                        <div className={`mt-0.5 h-8 w-8 rounded-lg ${accentSoft} ${accentText} flex items-center justify-center flex-shrink-0`}>
                          <MapPin className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">Address</p>
                          <p className="text-sm sm:text-base font-semibold text-secondary leading-snug">{loc.address}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className={`mt-0.5 h-8 w-8 rounded-lg ${accentSoft} ${accentText} flex items-center justify-center flex-shrink-0`}>
                          <CalendarClock className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">Days</p>
                          <p className="text-sm sm:text-base font-semibold text-secondary leading-snug">{loc.days}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className={`mt-0.5 h-8 w-8 rounded-lg ${accentSoft} ${accentText} flex items-center justify-center flex-shrink-0`}>
                          <Clock className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">Times</p>
                          <p className="text-sm sm:text-base font-semibold text-secondary leading-snug">{loc.times}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{loc.timesDetail}</p>
                        </div>
                      </li>
                    </ul>

                    <div className="mt-auto">
                      <span
                        className={`w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-black uppercase tracking-wide text-white shadow-xl ${buttonShadow} transition-all group-hover:scale-[1.02] ${accentBg} group-hover:opacity-95`}
                      >
                        <Sparkles className="h-4 w-4" />
                        Book a Free Trial
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <p className="mt-2 text-center text-[11px] font-semibold text-secondary/60">
                        Takes 1 hour · Free · Ages 6–18
                      </p>
                    </div>
                  </div>
                </button>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.25} className="mt-8 md:mt-10 text-center">
          <p className="text-sm md:text-base text-white/70 font-medium mb-3">
            Already a student? Check class updates or reschedule a missed class.
          </p>
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() => openCalendarModal()}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-secondary bg-accent hover:bg-accent/90 transition-all cursor-pointer"
            >
              <CalendarCheck className="h-4 w-4" />
              Live Parent Calendar
            </button>
            <a
              href={locations[0].makeupHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white border border-white/25 hover:bg-white/10 transition-all"
            >
              Makeup Options · Seven Oaks
            </a>
            <a
              href={locations[1].makeupHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white border border-white/25 hover:bg-white/10 transition-all"
            >
              Makeup Options · North East
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
