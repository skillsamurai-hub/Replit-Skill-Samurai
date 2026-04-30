import React, { useEffect, useState } from "react";
import { X, CalendarDays, ExternalLink } from "lucide-react";

const EVENT = "skill-samurai:open-calendar";

export function openCalendarModal() {
  window.dispatchEvent(new CustomEvent(EVENT));
}

export function CalendarModal() {
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
      aria-label="Parent Calendar"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-sm rounded-3xl bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-secondary px-6 pt-6 pb-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20">
              <CalendarDays className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-0.5">
                For Current Parents
              </p>
              <h2 className="text-lg font-extrabold text-white leading-tight">
                Live Parent Calendar
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
        <div className="px-6 py-6 flex flex-col gap-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            View upcoming class dates, holiday closures, and schedule changes for the current session. This calendar is kept up to date for enrolled families.
          </p>

          <button
            type="button"
            onClick={() => {
              const w = 900, h = 700;
              const left = Math.max(0, (window.screen.width - w) / 2);
              const top = Math.max(0, (window.screen.height - h) / 2);
              window.open(
                "https://canva.link/17rddy244ftzthp",
                "SkillSamuraiCalendar",
                `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no`
              );
              setOpen(false);
            }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ExternalLink className="h-4 w-4" />
            Open Calendar
          </button>

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
