import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight, Instagram, Facebook } from "lucide-react";
import { ContactForm } from "@/components/ui/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Skill Samurai Winnipeg",
  description:
    "Get in touch with Skill Samurai Winnipeg. Call, email, or visit our two locations — North East and Seven Oaks. We'd love to answer your questions.",
};

const locations = [
  {
    name: "North East",
    address: "1199 Rothesay St.",
    city: "Winnipeg, MB",
    days: "Mon & Tue",
    times: "5:30 PM & 6:30 PM",
    mapsHref: "https://maps.google.com/?q=1199+Rothesay+St+Winnipeg+MB",
  },
  {
    name: "Seven Oaks",
    address: "745 Kingsbury Ave.",
    city: "Winnipeg, MB",
    days: "Wed & Thu",
    times: "4:30, 5:30 & 6:30 PM",
    mapsHref: "https://maps.google.com/?q=745+Kingsbury+Ave+Winnipeg+MB",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
            Get In Touch
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white leading-tight tracking-tight">
            We&apos;d Love to Hear from You
          </h1>
          <p className="mt-4 text-white/75 text-base sm:text-lg max-w-xl mx-auto font-medium leading-relaxed">
            Questions about classes, locations, or pricing? Fill out the form and we&apos;ll be in touch shortly.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[380px_1fr] max-w-5xl mx-auto items-start">

            {/* Left column — contact details */}
            <div className="flex flex-col gap-6">

              <a
                href="tel:+12048182155"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-white px-6 py-5 shadow-sm hover:border-primary hover:shadow-md transition-all"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary/50 mb-0.5">Phone</p>
                  <p className="text-base font-extrabold text-secondary">204-818-2155</p>
                </div>
                <ArrowRight className="h-4 w-4 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="mailto:winnipeg@skillsamurai.com"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-white px-6 py-5 shadow-sm hover:border-primary hover:shadow-md transition-all"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary/50 mb-0.5">Email</p>
                  <p className="text-base font-extrabold text-secondary">winnipeg@skillsamurai.com</p>
                </div>
                <ArrowRight className="h-4 w-4 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-white px-6 py-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary/50 mb-0.5">Hours</p>
                  <p className="text-base font-extrabold text-secondary">Mon – Fri, 4–8 PM</p>
                  <p className="text-xs text-muted-foreground mt-0.5">By appointment only</p>
                </div>
              </div>

              {locations.map((loc) => (
                <div
                  key={loc.name}
                  className="rounded-2xl border border-border bg-white px-6 py-5 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                      <MapPin className="h-4 w-4 text-secondary" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-sm font-extrabold text-secondary">{loc.name}</h3>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <p className="font-semibold text-secondary/80">{loc.address}, {loc.city}</p>
                    <p><span className="font-semibold text-secondary/60">Days:</span> {loc.days}</p>
                    <p><span className="font-semibold text-secondary/60">Times:</span> {loc.times}</p>
                  </div>
                  <a
                    href={loc.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                  >
                    Open in Google Maps
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              ))}

              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/skillsamuraiwinnipeg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-white hover:bg-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-white hover:bg-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>

              <Link
                href="/#locations"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
              >
                Book a Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right column — embedded form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
