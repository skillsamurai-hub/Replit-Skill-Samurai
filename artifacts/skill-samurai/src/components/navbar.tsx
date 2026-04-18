import React, { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import logoUrl from "@assets/SkillSamurai_Logo_Full_(1)_(1)_(1)_1776400767722.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  const links = [
    { href: "#relatability", label: "Why Skill Samurai" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#proof", label: "Results" },
    { href: "/faq", label: "FAQ" },
  ];

  const programLinks = [
    {
      href: "https://winnipeg.jumbula.com/north-east-coding-classes",
      label: "North East Location",
      external: true,
    },
    {
      href: "https://winnipeg.jumbula.com/seven-oaks-coding-classes",
      label: "Seven Oaks Location",
      external: true,
    },
    {
      href: "https://meetings.hubspot.com/skillsamurai/school-hour-of-code?uuid=b840de06-ab04-43d2-a397-5c3889bf58c7",
      label: "School Workshops",
      external: false,
    },
    {
      href: "https://meetings.hubspot.com/skillsamurai/school-hour-of-code?uuid=b840de06-ab04-43d2-a397-5c3889bf58c7",
      label: "Non-Profit Partnerships",
      external: true,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-secondary/95 backdrop-blur-md">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center group" data-testid="link-home">
          <img
            src={logoUrl}
            alt="Skill Samurai — Coding, Robotics & STEM Academy"
            className="h-20 w-auto group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <div
            className="relative"
            onMouseEnter={() => setProgramsOpen(true)}
            onMouseLeave={() => setProgramsOpen(false)}
          >
            <a
              href="#weekly-classes"
              className="inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-primary transition-colors"
              aria-haspopup="true"
              aria-expanded={programsOpen}
            >
              Programs
              <ChevronDown className={`h-4 w-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
            </a>
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 min-w-[260px] transition-all ${
                programsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
                {programLinks.map((p) => (
                  <a
                    key={p.label}
                    href={p.href}
                    {...(p.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    onClick={() => setProgramsOpen(false)}
                    className="block px-5 py-3.5 text-sm font-semibold text-secondary hover:bg-primary hover:text-white transition-colors border-b border-border last:border-b-0"
                  >
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://winnipeg.jumbula.com/north-east-coding-classes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 sm:h-11 items-center justify-center whitespace-nowrap rounded-full bg-primary px-4 sm:px-8 text-xs sm:text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <span className="sm:hidden">FREE TRIAL</span>
            <span className="hidden sm:inline">BOOK A FREE SESSION</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-secondary/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {links.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <div>
              <a
                href="#weekly-classes"
                className="text-base font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Programs
              </a>
              <div className="mt-3 ml-4 flex flex-col gap-3 border-l border-white/15 pl-4">
                {programLinks.map((p) => (
                  <a
                    key={p.label}
                    href={p.href}
                    {...(p.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm font-medium text-white/80 hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
