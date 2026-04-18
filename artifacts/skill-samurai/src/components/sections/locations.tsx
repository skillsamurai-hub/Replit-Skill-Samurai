import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { MapPin, Clock, ArrowRight, CalendarClock } from "lucide-react";

const locations = [
  {
    name: "Seven Oaks",
    tag: "After-school coding classes",
    address: "Seven Oaks area, Winnipeg, MB",
    days: "Tue – Sat",
    times: "After-school & weekend slots",
    bookHref: "https://winnipeg.jumbula.com/seven-oaks-coding-classes",
    makeupHref: "https://meetings.hubspot.com/skillsamurai/school-hour-of-code?uuid=b840de06-ab04-43d2-a397-5c3889bf58c7",
    accent: "primary",
  },
  {
    name: "North East",
    tag: "After-school coding classes",
    address: "North East Winnipeg, MB",
    days: "Mon – Sat",
    times: "After-school & weekend slots",
    bookHref: "https://winnipeg.jumbula.com/north-east-coding-classes",
    makeupHref: "https://meetings.hubspot.com/skillsamurai/school-hour-of-code?uuid=b840de06-ab04-43d2-a397-5c3889bf58c7",
    accent: "secondary",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
            Two Winnipeg Locations
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-secondary leading-tight tracking-tight mb-4">
            Find the location that works for your family.
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground font-medium">
            Pick a location below to book a free trial or schedule a makeup class.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {locations.map((loc, i) => {
            const isPrimary = loc.accent === "primary";
            const accentBg = isPrimary ? "bg-primary" : "bg-secondary";
            const accentText = isPrimary ? "text-primary" : "text-secondary";
            const accentSoft = isPrimary ? "bg-primary/10" : "bg-secondary/10";
            const ring = isPrimary ? "hover:border-primary/30" : "hover:border-secondary/30";

            return (
              <FadeIn key={loc.name} delay={i * 0.1} direction="up">
                <article className={`h-full bg-white rounded-3xl p-6 sm:p-8 border-2 border-border ${ring} shadow-xl shadow-secondary/5 hover:-translate-y-1 transition-all duration-300 flex flex-col`}>
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

                  <p className="text-sm font-semibold text-muted-foreground mb-5">
                    {loc.tag}
                  </p>

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
                      </div>
                    </li>
                  </ul>

                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <a
                      href={loc.bookHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-lg transition-all hover:scale-[1.03] active:scale-95 ${accentBg} hover:opacity-90`}
                    >
                      Book Free Trial
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href={loc.makeupHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black uppercase tracking-wide border-2 transition-all hover:scale-[1.03] active:scale-95 ${
                        isPrimary
                          ? "border-primary text-primary hover:bg-primary hover:text-white"
                          : "border-secondary text-secondary hover:bg-secondary hover:text-white"
                      }`}
                    >
                      Schedule Makeup
                    </a>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
