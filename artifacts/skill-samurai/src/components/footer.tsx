import React from "react";
import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import logoUrl from "@assets/SkillSamurai_Logo_Full_(1)_(1)_(1)_1776400767722.png";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-6 group" data-testid="link-footer-home">
              <img
                src={logoUrl}
                alt="Skill Samurai — Coding, Robotics & STEM Academy"
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-white/75 max-w-sm mb-8 font-medium leading-relaxed">
              Turning screen time into something parents feel great about. We help kids ages 6–18 build confidence, focus, and real-world skills through coding and STEM.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="h-11 w-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white hover:border-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="h-11 w-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white hover:border-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="h-11 w-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white hover:border-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white uppercase tracking-wide">Contact</h4>
            <ul className="space-y-4 text-white/75 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Winnipeg, MB</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>(204) 555-0123</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>hello@skillsamurai.ca</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-white/75 font-medium">
              <li>
                <a href="https://skillsamurai.ca/book-a-free-trial" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  BOOK A FREE TRIAL
                </a>
              </li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 text-sm text-white/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Skill Samurai Winnipeg. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
