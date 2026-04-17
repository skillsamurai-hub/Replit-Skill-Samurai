import React from "react";

const logos = ["Spotify", "FOX", "CBS", "NBC NEWS", "Today's Parent", "Your Morning"];

export default function MediaBanner() {
  return (
    <section className="bg-secondary border-y border-white/10 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3 lg:grid-cols-6 items-center">
          {logos.map((logo) => (
            <div key={logo} className="flex items-center justify-center text-center text-white/80 font-black uppercase tracking-[0.18em] text-[11px] sm:text-xs md:text-sm">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
