import React from "react";
import { Link } from "wouter";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";
import logoUrl from "@assets/SkillSamurai_Logo_Full_(1)_(1)_(1)_1776400767722.png";

const locations = [
  {
    name: "North East",
    address: "1199 Rothesay St.",
    city: "Winnipeg, MB",
  },
  {
    name: "Seven Oaks",
    address: "745 Kingsbury Ave.",
    city: "Winnipeg, MB",
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white relative overflow-hidden">
      <div className="absolute -top-40 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="border-b border-white/10 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-black font-heading leading-tight tracking-tight">
              Ready to see your child light up?
            </h3>
            <p className="text-white/70 font-medium mt-2">
              Book a free trial class — no pressure, no contracts.
            </p>
          </div>
          <a
            href="https://link.skillsamurai.com/widget/booking/uLciDSsBTUDqpqKRDaZq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 self-start md:self-auto rounded-full bg-primary px-7 py-3.5 text-base font-black uppercase tracking-wide text-white shadow-xl shadow-primary/30 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
          >
            Book a Free Trial
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="py-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center mb-6 group"
              data-testid="link-footer-home"
            >
              <img
                src={logoUrl}
                alt="Skill Samurai — Coding, Robotics & STEM Academy"
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-white/75 max-w-sm mb-8 font-medium leading-relaxed">
              Turning screen time into something parents feel great about. We
              help kids ages 6–18 build confidence, focus, and real-world skills
              through coding and STEM.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/skillsamuraiwinnipeg/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-11 w-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:scale-110 transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="h-11 w-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:scale-110 transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="h-11 w-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:scale-110 transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-heading font-black text-sm mb-5 text-accent uppercase tracking-[0.15em]">
              Our Locations
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {locations.map((loc) => (
                <div
                  key={loc.name}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-primary/40 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <span className="font-bold font-heading text-white">
                      {loc.name}
                    </span>
                  </div>
                  <p className="text-white/75 text-sm leading-relaxed font-medium">
                    {loc.address}
                    <br />
                    {loc.city}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-heading font-black text-sm mb-5 text-accent uppercase tracking-[0.15em]">
                Contact
              </h4>
              <ul className="space-y-4 text-white/75 font-medium text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <a
                    href="tel:+12048182155"
                    className="hover:text-white transition-colors"
                  >
                    204-818-2155
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <a
                    href="mailto:hello@skillsamurai.ca"
                    className="hover:text-white transition-colors break-all"
                  >
                    hello@skillsamurai.ca
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-white font-semibold mb-0.5">
                      Learning Center Hours
                    </div>
                    <div>Mon – Fri, 4–8 PM</div>
                    <div className="text-white/55 text-xs mt-0.5">
                      By appointment only
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-black text-sm mb-5 text-accent uppercase tracking-[0.15em]">
                Quick Links
              </h4>
              <ul className="space-y-3 text-white/75 font-medium text-sm">
                <li>
                  <a
                    href="https://link.skillsamurai.com/widget/booking/uLciDSsBTUDqpqKRDaZq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Book a Free Trial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-sm text-white/55 flex flex-col md:flex-row justify-between items-center gap-3">
          <p>
            © {new Date().getFullYear()} Skill Samurai Winnipeg. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
