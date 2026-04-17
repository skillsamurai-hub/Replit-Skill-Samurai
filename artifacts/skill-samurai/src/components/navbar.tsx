import React from "react";
import { Link } from "wouter";
import logoUrl from "@assets/SkillSamurai_Logo_Full_(1)_(1)_(1)_1776400767722.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center group" data-testid="link-home">
          <img
            src={logoUrl}
            alt="Skill Samurai — Coding, Robotics & STEM Academy"
            className="h-20 w-auto group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="https://skillsamurai.ca/book-a-free-trial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Book Free Trial
          </a>
        </div>
      </div>
    </header>
  );
}
