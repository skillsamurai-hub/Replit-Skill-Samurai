import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import FinalCta from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Shop | Skill Samurai Winnipeg",
  description:
    "Rep Skill Samurai with official gear — tees, hoodies, hats and more. Premium quality coding & STEM apparel for young coders.",
};

const SHOP_URL = "https://skillsamuraigear.itemorder.com/shop/home/";

export default function ShopPage() {
  return (
    <main>
      {/* Hero banner */}
      <section className="relative w-full bg-[#0a0a1a]">
        <a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block group relative"
          aria-label="Shop Skill Samurai gear — opens in a new tab"
        >
          <img
            src="/shop-banner.png"
            alt="Rep Skill Samurai — Tees, Hoodies, Hats and more. Shop now."
            className="w-full h-auto max-h-[80vh] object-cover object-center"
          />
          {/* Hover overlay CTA */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
            <span className="inline-flex items-center gap-3 rounded-full bg-primary px-10 py-4 text-xl font-black text-white shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-300">
              Shop Now →
            </span>
          </div>
        </a>
      </section>

      {/* Info strip */}
      <section className="bg-secondary py-10 md:py-14">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">
            Official Skill Samurai Store
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Level Up Your Style
          </h2>
          <p className="text-white/70 text-base max-w-xl mx-auto mb-8">
            Premium hoodies, tees, hats and more — built for coders and STEM enthusiasts. Every purchase supports our Winnipeg community programs.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["Hoodies", "T-Shirts", "Hats", "Joggers"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-base font-black text-white shadow-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
          >
            Browse the Full Store →
          </a>
          <p className="mt-4 text-xs text-white/40">
            Opens skillsamuraigear.itemorder.com
          </p>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
