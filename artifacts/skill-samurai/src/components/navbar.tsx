"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, Instagram } from "lucide-react";
import logoUrl from "@assets/SkillSamurai_Logo_Full_(1)_(1)_(1)_1776400767722.png";
import { openCalendarModal, openBookingModal, openMakeupModal } from "@/components/ui/modal-events";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
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

  const programLinks = [
    { href: "https://winnipeg.jumbula.com/north-east-coding-classes", label: "North East Coding Classes", external: true },
    { href: "https://winnipeg.jumbula.com/seven-oaks-coding-classes", label: "Seven Oaks Coding Classes", external: true },
    { href: "/camps", label: "Coding & STEM Camps", external: false },
    { href: "/birthday-parties", label: "Birthday Parties", external: false },
    { href: "/schools", label: "For Schools", external: false },
    { href: "/non-profits", label: "For Non-Profits & Community", external: false },
  ];

  const moreLinks = [
    { label: "Blog", href: "/blog", type: "internal" as const },
    { label: "Live Parent Calendar 2026", href: null, type: "popup" as const },
    { label: "Shop / Merch", href: "/shop", type: "internal" as const },
    { label: "Free Coding Resources", href: "https://www.youtube.com/@SkillSamuraiWinnipeg/playlists", type: "external" as const },
    { label: "Parent Log In", href: "https://winnipeg.jumbula.com/", type: "external" as const },
    { label: "Staff Log In", href: "https://app.skillsamurai.com/", type: "external" as const },
    { label: "Careers", href: "/careers", type: "internal" as const },
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

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">

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

          {/* FAQ */}
          <Link
            href="/faq"
            className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-primary transition-colors whitespace-nowrap"
          >
            FAQ
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-primary transition-colors whitespace-nowrap"
          >
            Contact
          </Link>

          {/* More dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-white/50 hover:text-white/80 transition-colors cursor-pointer"
              aria-haspopup="true"
              aria-expanded={moreOpen}
            >
              Resources
              <ChevronDown className={`h-4 w-4 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`absolute right-0 top-full pt-3 min-w-[240px] transition-all ${
                moreOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
                {moreLinks.map((r) =>
                  r.type === "internal" ? (
                    <Link
                      key={r.label}
                      href={r.href!}
                      onClick={() => setMoreOpen(false)}
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
                      onClick={() => setMoreOpen(false)}
                      className={dropdownItemClass}
                    >
                      {r.label}
                    </a>
                  ) : (
                    <button
                      key={r.label}
                      type="button"
                      onClick={() => { openCalendarModal(); setMoreOpen(false); }}
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
          {/* Social icons — desktop only */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://www.facebook.com/skillsamuraiwinnipeg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 hover:text-white transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.9v-2.89h2.538V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/skillsamuraiwinnipeg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 hover:text-primary transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={openMakeupModal}
            className="hidden xl:inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full bg-accent px-5 text-xs font-semibold text-white shadow-md transition-all hover:bg-accent/90 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
          >
            BOOK MAKEUP CLASS
          </button>

          <button
            type="button"
            onClick={openBookingModal}
            className="inline-flex h-10 sm:h-11 items-center justify-center whitespace-nowrap rounded-full bg-primary px-5 sm:px-8 text-xs sm:text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <span className="lg:hidden">FREE TRIAL</span>
            <span className="hidden lg:inline">BOOK A FREE SESSION</span>
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

            <Link href="/about" className="text-base font-semibold text-white hover:text-primary transition-colors" onClick={() => setOpen(false)}>About Us</Link>
            <Link href="/faq" className="text-base font-semibold text-white hover:text-primary transition-colors" onClick={() => setOpen(false)}>FAQ</Link>
            <Link href="/contact" className="text-base font-semibold text-white hover:text-primary transition-colors" onClick={() => setOpen(false)}>Contact</Link>

            {/* More */}
            <div>
              <span className="text-base font-semibold text-white/50">Resources</span>
              <div className="mt-3 ml-4 flex flex-col gap-3 border-l border-white/15 pl-4">
                <Link href="/blog" className="text-sm font-medium text-white/70 hover:text-primary" onClick={() => setOpen(false)}>Blog</Link>
                <button type="button" onClick={() => { openCalendarModal(); setOpen(false); }} className="text-sm font-medium text-white/70 hover:text-primary text-left cursor-pointer">Live Parent Calendar 2026</button>
                <Link href="/shop" className="text-sm font-medium text-white/70 hover:text-primary" onClick={() => setOpen(false)}>Shop / Merch</Link>
                <a href="https://www.youtube.com/@SkillSamuraiWinnipeg/playlists" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/70 hover:text-primary" onClick={() => setOpen(false)}>Free Coding Resources</a>
                <a href="https://winnipeg.jumbula.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/70 hover:text-primary" onClick={() => setOpen(false)}>Parent Log In</a>
                <a href="https://app.skillsamurai.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/70 hover:text-primary" onClick={() => setOpen(false)}>Staff Log In</a>
                <Link href="/careers" className="text-sm font-medium text-white/70 hover:text-primary" onClick={() => setOpen(false)}>Careers</Link>
              </div>
            </div>

            <button
              type="button"
              onClick={() => { openMakeupModal(); setOpen(false); }}
              className="text-base font-semibold text-white text-left cursor-pointer"
            >
              Book Makeup Class
            </button>

            {/* Social icons — mobile */}
            <div className="flex items-center gap-4 pt-2 border-t border-white/10">
              <a
                href="https://www.facebook.com/skillsamuraiwinnipeg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.9v-2.89h2.538V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/skillsamuraiwinnipeg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
