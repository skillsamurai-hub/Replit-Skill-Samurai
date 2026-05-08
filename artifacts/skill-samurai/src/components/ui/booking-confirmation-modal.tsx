"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, Clock, Users, CalendarCheck, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import robloxProject from "@assets/trial-project-roblox.png";
import minecraftProject from "@assets/trial-project-minecraft.png";

const EVENT = "skill-samurai:open-booking-confirmation";

interface ConfirmationPayload {
  locationName: string;
  bookHref: string;
}

export function openBookingConfirmation(payload: ConfirmationPayload) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(EVENT, { detail: payload }));
  }
}

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

const whatToExpect = [
  {
    icon: Clock,
    label: "1-hour class",
    detail: "A real, hands-on coding session — not a tour or sales pitch.",
  },
  {
    icon: Users,
    label: "Ages 6–18",
    detail: "No prior experience needed. Small groups, instructor-led.",
  },
  {
    icon: CalendarCheck,
    label: "What happens next",
    detail: "Show up, have fun, and decide afterwards — zero pressure to enroll.",
  },
  {
    icon: ShieldCheck,
    label: "Completely free",
    detail: "No credit card, no contract, no catch.",
  },
];

export function BookingConfirmationModal() {
  const [open, setOpen] = useState(false);
  const [payload, setPayload] = useState<ConfirmationPayload | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<ConfirmationPayload>).detail;
      setPayload(detail);
      setOpen(true);
    };
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

  if (!open || !payload) return null;

  function handleContinue() {
    if (payload) openPopup(payload.bookHref);
    setOpen(false);
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`What to expect at Skill Samurai ${payload.locationName}`}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      <div className="relative z-10 w-full max-w-sm rounded-3xl bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-secondary px-6 pt-6 pb-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-0.5">
                Free Trial · {payload.locationName}
              </p>
              <h2 className="text-lg font-extrabold text-white leading-tight">
                Here's what to expect
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

        <div className="px-6 py-5 flex flex-col gap-4">
          <ul className="flex flex-col gap-3">
            {whatToExpect.map(({ icon: Icon, label, detail }) => (
              <li key={label} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-secondary leading-tight">{label}</p>
                  <p className="text-xs text-muted-foreground leading-snug mt-0.5">{detail}</p>
                </div>
              </li>
            ))}
          </ul>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-secondary/60 mb-2">
              What your child could build
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                <Image
                  src={robloxProject}
                  alt="Roblox Studio editor showing a colourful obstacle course being built by a student"
                  fill
                  sizes="(max-width: 640px) 50vw, 160px"
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-1.5">
                  <p className="text-[10px] font-bold text-white leading-tight">Roblox Obby</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                <Image
                  src={minecraftProject}
                  alt="Minecraft house with wood and stone built by a beginner student in survival mode"
                  fill
                  sizes="(max-width: 640px) 50vw, 160px"
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-1.5">
                  <p className="text-[10px] font-bold text-white leading-tight">Minecraft Build</p>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleContinue}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-primary/30 hover:bg-primary/90 active:scale-[0.98] transition-all"
          >
            <Sparkles className="h-4 w-4" />
            Continue to Book
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors text-center"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
