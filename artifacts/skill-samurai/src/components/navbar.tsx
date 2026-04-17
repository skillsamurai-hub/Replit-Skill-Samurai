import React, { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import logoUrl from "@assets/SkillSamurai_Logo_Full_(1)_(1)_(1)_1776400767722.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#relatability", label: "Why Skill Samurai" },
    { href: "#proof", label: "Results" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center group" data-testid="link-home">
          <img
            src={logoUrl}
            alt="Skill Samurai — Coding, Robotics & STEM Academy"
            className="h-20 w-auto group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-secondary/80 hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://skillsamurai.ca/book-a-free-trial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Book Free Trial
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-secondary"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-base font-semibold text-secondary" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
