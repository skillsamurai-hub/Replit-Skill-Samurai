"use client";

import React, { useEffect, useState } from "react";
import { X, MapPin, Sparkles } from "lucide-react";

const EVENT = "skill-samurai:open-booking";

const locations = [
  {
    name: "North East",
    address: "1199 Rothesay St.",
    days: "Mon – Tue",
    href: "https://link.skillsamurai.com/widget/booking/Ku7skA5XAkgQpg8rQqN1",
  },
  {
    name: "Seven Oaks",
    address: "745 Kingsbury Ave.",
    days: "Wed – Thu",
    href: "https://link.skillsamurai.com/widget/booking/uLciDSsBTUDqpqKRDaZq",
  },
];

function openPopup(url: string) {
  const w = 900, h = 700;
  const left = Math.max(0, (window.screen.width - w) / 2);
  const top = Math.max(0, (window.screen.height - h) / 2);
  window.open(
    url,
    "SkillSamuraiBooking",
    `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no`
  );
}

export function BookingModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(EVENT, handler);
    return () => window.removeEventListener(EVENT, handler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Book a Free Trial"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      <div className="relative z-10 w-full max-w-sm rounded-3xl bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-secondary px-6 pt-6 pb-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-0.5">
                100% Free · No Contracts
              </p>
              <h2 className="text-lg font-extrabold text-white leading-tight">
                Book Your Free Trial Class
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 flex flex-col gap-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Choose your nearest location. Your child tries a real class — no experience needed, no pressure to continue.
          </p>

          <div className="flex flex-col gap-3">
            {locations.map((loc) => (
              <button
                key={loc.name}
                type="button"
                onClick={() => {
                  openPopup(loc.href);
                  setOpen(false);
                }}
                className="group flex items-center gap-4 w-full rounded-2xl border-2 border-border hover:border-primary bg-neutral-50 hover:bg-primary/5 px-5 py-4 text-left transition-all"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-5 w-5 text-primary" strokeWidth={2.4} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-extrabold text-secondary">{loc.name}</p>
                  <p className="text-xs text-muted-foreground">{loc.address} · {loc.days}</p>
                </div>
                <span className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Select →
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
