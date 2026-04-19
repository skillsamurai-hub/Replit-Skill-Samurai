import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { MapPin, Clock, ArrowRight, CalendarClock, Sparkles } from "lucide-react";

const locations = [
  {
    name: "Seven Oaks",
    tag: "After-school coding classes for ages 6–18",
    region: "Great for families in North/West Winnipeg",
    address: "745 Kingsbury Ave., Winnipeg, MB",
    days: "Tue – Sat",
    times: "After-school options",
    bookHref: "https://link.skillsamurai.com/widget/booking/uLciDSsBTUDqpqKRDaZq",
    makeupHref: "https://link.skillsamurai.com/widget/booking/RjGKMmLLevpPEAJx8FnW",
    accent: "primary",
  },
  {
    name: "North East",
    tag: "After-school coding classes for ages 6–18",
    region: "Great for families in East/North East Winnipeg",
    address: "1199 Rothesay St., Winnipeg, MB",
    days: "Mon – Sat",
    times: "After-school options",
    bookHref: "https://link.skillsamurai.com/widget/booking/Ku7skA5XAkgQpg8rQqN1",
    makeupHref: "https://link.skillsamurai.com/widget/booking/SGsgwBr4folY53lMpMYc",
    accent: "secondary",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-20 md:py-28 bg-secondary/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
            Two Winnipeg Locations
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-secondary leading-tight tracking-tight mb-4">
            Choose the location that works best for your family.
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground font-medium mb-3">
            Choose a location below to book a free trial or schedule a makeup class.
          </p>
          <p className="text-sm sm:text-base text-primary font-semibold">
            Most kids start with a free trial. No experience needed.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="text-center mb-8 md:mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/5 border border-secondary/10 px-4 py-2 text-xs sm:text-sm font-semibold text-secondary/80">
            <CalendarClock className="h-4 w-4 text-primary" />
            Classes available after school.
          </span>
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
                <article className={`h-full bg-secondary/5 rounded-3xl p-6 sm:p-8 border-2 border-border ${ring} shadow-xl shadow-secondary/5 hover:-translate-y-1 transition-all duration-300 flex flex-col`}>
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

                  <p className="text-sm font-semibold text-secondary/80 mb-1">
                    {loc.tag}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2 italic">
                    Beginner-friendly — most kids start with no experience.
                  </p>
                  <p className={`text-xs font-bold uppercase tracking-wider ${accentText} mb-5`}>
                    {loc.region}
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

                  <div className="mt-auto flex flex-col gap-3">
                    <div className="flex flex-col items-center">
                      <a
                        href={loc.bookHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-black uppercase tracking-wide text-white shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 ${accentBg} hover:opacity-90`}
                      >
                        <Sparkles className="h-4 w-4" />
                        Book a Free Trial
                        <ArrowRight className="h-4 w-4" />
                      </a>
                      <span className="mt-1.5 text-[11px] font-bold uppercase tracking-wider text-primary">
                        Best place to start
                      </span>
                    </div>
                    <a
                      href={loc.makeupHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wide text-secondary/70 border border-border hover:text-secondary hover:bg-muted/40 transition-all"
                    >
                      Schedule a Makeup Class
                    </a>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.25} className="mt-10 text-center">
          <p className="text-base md:text-lg text-secondary/80 font-semibold">
            No contracts. Flexible, month-to-month membership that fits your schedule.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
