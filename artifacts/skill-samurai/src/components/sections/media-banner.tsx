import React from "react";
import { SiSpotify } from "react-icons/si";

function SpotifyLogo() {
  return (
    <div className="flex items-center gap-2 text-white">
      <SiSpotify className="h-7 w-7 text-[#1DB954]" />
      <span className="font-black text-lg tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        Spotify
      </span>
    </div>
  );
}

function FoxLogo() {
  return (
    <span
      className="text-white font-black text-4xl italic"
      style={{
        fontFamily: '"Arial Black", Impact, sans-serif',
        letterSpacing: '0.02em',
      }}
    >
      FOX
    </span>
  );
}

function CbsLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="white" />
        <ellipse cx="12" cy="12" rx="9" ry="4" fill="#003366" />
        <ellipse cx="12" cy="12" rx="3" ry="3" fill="white" />
        <ellipse cx="12" cy="12" rx="1.5" ry="1.5" fill="#003366" />
      </svg>
      <span className="text-white font-black text-xl tracking-[0.05em]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        CBS
      </span>
    </div>
  );
}

function NbcNewsLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <g transform="translate(12 12)">
          <path d="M0,-10 A10,10 0 0,1 8.66,-5 L0,0 Z" fill="#FCBF11" />
          <path d="M8.66,-5 A10,10 0 0,1 8.66,5 L0,0 Z" fill="#F37021" />
          <path d="M8.66,5 A10,10 0 0,1 0,10 L0,0 Z" fill="#CC004C" />
          <path d="M0,10 A10,10 0 0,1 -8.66,5 L0,0 Z" fill="#6460AA" />
          <path d="M-8.66,5 A10,10 0 0,1 -8.66,-5 L0,0 Z" fill="#0089D0" />
          <path d="M-8.66,-5 A10,10 0 0,1 0,-10 L0,0 Z" fill="#6DBE45" />
          <circle r="2" fill="white" />
        </g>
      </svg>
      <span className="text-white font-bold text-sm tracking-[0.15em]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        NBC NEWS
      </span>
    </div>
  );
}

function TodaysParentLogo() {
  return (
    <span className="text-white font-bold text-base lg:text-lg italic" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
      Today's <span className="font-black">Parent</span>
    </span>
  );
}

function YourMorningLogo() {
  return (
    <div className="flex items-center gap-1">
      <span className="text-white font-light italic text-base lg:text-lg lowercase tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
        your
      </span>
      <span className="text-white font-black text-base lg:text-lg uppercase tracking-tight" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        Morning
      </span>
    </div>
  );
}

const logos = [
  { name: "Spotify", el: <SpotifyLogo /> },
  { name: "FOX", el: <FoxLogo /> },
  { name: "CBS", el: <CbsLogo /> },
  { name: "NBC News", el: <NbcNewsLogo /> },
  { name: "Today's Parent", el: <TodaysParentLogo /> },
  { name: "Your Morning", el: <YourMorningLogo /> },
];

export default function MediaBanner() {
  return (
    <section className="bg-secondary border-y border-white/10 py-7">
      <div className="container mx-auto px-4">
        <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-white/50 mb-5">
          As featured in
        </p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6 items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center text-center opacity-90 hover:opacity-100 transition-opacity"
            >
              {logo.el}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
