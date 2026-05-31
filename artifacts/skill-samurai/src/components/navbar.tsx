"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import logoUrl from "@assets/SkillSamurai_Logo_Full_(1)_(1)_(1)_1776400767722.png";
import { openCalendarModal, openBookingModal, openMakeupModal } from "@/components/ui/modal-events";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleHashNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const hash = href.split("#")[1];
    setOpen(false);
    if (pathname === "/") {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 120);
    }
  };

  const scrollLinks = [
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#relatability", label: "Why Us" },
    { href: "/#student-spotlight", label: "Results" },
  ];

  const programLinks = [
    { href: "https://winnipeg.jumbula.com/north-east-coding-classes", label: "North East Location", external: true },
    { href: "https://winnipeg.jumbula.com/seven-oaks-coding-classes", label: "Seven Oaks Location", external: true },
    { href: "/schools", label: "For Schools", external: false },
    { href: "/non-profits", label: "For Non-Profits & Community", external: false },
  ];

  const resourceLinks = [
    { label: "Contact Us", href: "/contact", type: "internal" as const },
    { label: "Live Parent Calendar 2026", href: null, type: "popup" as const },
    { label: "FAQ", href: "/faq", type: "internal" as const },
    { label: "Blog", href: "/blog", type: "internal" as const },
    { label: "Shop / Merch", href: "/shop", type: "internal" as const },
    { label: "Careers", href: "/careers", type: "internal" as const },
    { label: "Free Coding Resources", href: "https://www.youtube.com/@SkillSamuraiWinnipeg/playlists", type: "external" as const },
    { label: "Parent Log In", href: "https://winnipeg.jumbula.com/", type: "external" as const },
    { label: "Staff Log In", href: "https://app.skillsamurai.com/", type: "external" as const },
  ];

  const dropdownItemClass = "block px-5 py-3.5 text-sm font-semibold text-secondary hover:bg-primary hover:text-white transition-colors border-b border-border last:border-b-0";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-secondary/95 backdrop-blur-md">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center group shrink-0" data-testid="link-home">
          <Image
            src={logoUrl}
            alt="Skill Samurai — Coding, Robotics & STEM Academy"
            height={80}
            priority
            className="h-20 w-auto group-hover:scale-105 transition-transform duration-300"
            style={{ width: "auto" }}
          />
        </Link>

        {/* Desktop nav — 3 items only */}
        <nav className="hidden lg:flex items-center gap-8">

          {/* Programs dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProgramsOpen(true)}
            onMouseLeave={() => setProgramsOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-primary transition-colors cursor-pointer"
              aria-haspopup="true"
              aria-expanded={programsOpen}
            >
              Programs
              <ChevronDown className={`h-4 w-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 min-w-[280px] transition-all ${
                programsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
                {/* Enroll links */}
                {programLinks.map((p) =>
                  p.external ? (
                    <a
                      key={p.label}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setProgramsOpen(false)}
                      className={dropdownItemClass}
                    >
                      {p.label}
                    </a>
                  ) : (
                    <Link
                      key={p.label}
                      href={p.href}
                      onClick={() => setProgramsOpen(false)}
                      className={dropdownItemClass}
                    >
                      {p.label}
                    </Link>
                  )
                )}
                {/* Divider + Homepage sections */}
                <div className="px-5 py-2 bg-secondary/5 border-b border-border">
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary/40">Explore</span>
                </div>
                {scrollLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { handleHashNav(e, link.href); setProgramsOpen(false); }}
                    className={dropdownItemClass + " cursor-pointer"}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* About Us */}
          <Link
            href="/about"
            className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-primary transition-colors whitespace-nowrap"
          >
            About Us
          </Link>

          {/* Resources dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-primary transition-colors cursor-pointer"
              aria-haspopup="true"
              aria-expanded={resourcesOpen}
            >
              Resources
              <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`absolute right-0 top-full pt-3 min-w-[240px] transition-all ${
                resourcesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
                {resourceLinks.map((r) =>
                  r.type === "internal" ? (
                    <Link
                      key={r.label}
                      href={r.href!}
                      onClick={() => setResourcesOpen(false)}
                      className={dropdownItemClass}
                    >
                      {r.label}
                    </Link>
                  ) : r.type === "external" ? (
                    <a
                      key={r.label}
                      href={r.href!}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setResourcesOpen(false)}
                      className={dropdownItemClass}
                    >
                      {r.label}
                    </a>
                  ) : (
                    <button
                      key={r.label}
                      type="button"
                      onClick={() => { openCalendarModal(); setResourcesOpen(false); }}
                      className={`w-full text-left ${dropdownItemClass} cursor-pointer`}
                    >
                      {r.label}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openMakeupModal}
            className="hidden lg:inline-flex h-10 xl:h-11 items-center justify-center whitespace-nowrap rounded-full bg-accent px-5 xl:px-8 text-xs font-semibold text-white shadow-md transition-all hover:bg-accent/90 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
          >
            BOOK MAKEUP CLASS
          </button>

          <button
            type="button"
            onClick={openBookingModal}
            className="inline-flex h-10 xl:h-11 items-center justify-center whitespace-nowrap rounded-full bg-primary px-5 xl:px-8 text-xs sm:text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <span className="sm:hidden">FREE TRIAL</span>
            <span className="hidden sm:inline">BOOK A FREE SESSION</span>
          </button>
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

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-secondary/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">

            {/* Programs */}
            <div>
              <span className="text-base font-semibold text-white">Programs</span>
              <div className="mt-3 ml-4 flex flex-col gap-3 border-l border-white/15 pl-4">
                {programLinks.map((p) =>
                  p.external ? (
                    <a
                      key={p.label}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-white/80 hover:text-primary"
                      onClick={() => setOpen(false)}
                    >
                      {p.label}
                    </a>
                  ) : (
                    <Link
                      key={p.label}
                      href={p.href}
                      className="text-sm font-medium text-white/80 hover:text-primary"
                      onClick={() => setOpen(false)}
                    >
                      {p.label}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* About Us */}
            <Link
              href="/about"
              className="text-base font-semibold text-white hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>

            {/* Scroll links */}
            {scrollLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleHashNav(e, link.href)}
                className="text-base font-semibold text-white/70 cursor-pointer hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Resources group */}
            <div>
              <span className="text-base font-semibold text-white">Resources</span>
              <div className="mt-3 ml-4 flex flex-col gap-3 border-l border-white/15 pl-4">
                <Link href="/contact" className="text-sm font-medium text-white/80 hover:text-primary" onClick={() => setOpen(false)}>Contact Us</Link>
                <button
                  type="button"
                  onClick={() => { openCalendarModal(); setOpen(false); }}
                  className="text-sm font-medium text-white/80 hover:text-primary text-left cursor-pointer"
                >
                  Live Parent Calendar 2026
                </button>
                <Link href="/faq" className="text-sm font-medium text-white/80 hover:text-primary" onClick={() => setOpen(false)}>FAQ</Link>
                <Link href="/blog" className="text-sm font-medium text-white/80 hover:text-primary" onClick={() => setOpen(false)}>Blog</Link>
                <Link href="/shop" className="text-sm font-medium text-white/80 hover:text-primary" onClick={() => setOpen(false)}>Shop / Merch</Link>
                <Link href="/careers" className="text-sm font-medium text-white/80 hover:text-primary" onClick={() => setOpen(false)}>Careers</Link>
                <a href="https://www.youtube.com/@SkillSamuraiWinnipeg/playlists" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/80 hover:text-primary" onClick={() => setOpen(false)}>Free Coding Resources</a>
                <a href="https://winnipeg.jumbula.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/80 hover:text-primary" onClick={() => setOpen(false)}>Parent Log In</a>
                <a href="https://app.skillsamurai.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/80 hover:text-primary" onClick={() => setOpen(false)}>Staff Log In</a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => { openMakeupModal(); setOpen(false); }}
              className="text-base font-semibold text-white text-left cursor-pointer"
            >
              Book Makeup Class
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
