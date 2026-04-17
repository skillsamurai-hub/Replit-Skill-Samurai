import React from "react";
import { Link } from "wouter";
import { Facebook, Instagram, Twitter } from "lucide-react";
import logoUrl from "@assets/SkillSamurai_Logo_Full_(1)_(1)_(1)_1776400767722.png";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
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
            <p className="text-secondary-foreground/80 max-w-sm mb-8">
              Turning screen time into something parents feel great about. 
              We help kids ages 6–18 build confidence, focus, and real-world 
              skills through coding and STEM.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-secondary-foreground/80">
              <li>123 Main St, Winnipeg, MB</li>
              <li>(204) 555-0123</li>
              <li>hello@skillsamurai.ca</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-secondary-foreground/80">
              <li>
                <a href="https://skillsamurai.ca/book-a-free-trial" className="hover:text-primary transition-colors">
                  Book a Free Trial
                </a>
              </li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-secondary-foreground/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Skill Samurai Winnipeg. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
