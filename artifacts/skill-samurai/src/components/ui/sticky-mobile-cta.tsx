"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("stickyCtaDismissed")) {
      setDismissed(true);
      return;
    }
    const handleScroll = () => setVisible(window.scrollY > 350);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: Event) => setNavOpen((e as CustomEvent<{ open: boolean }>).detail.open);
    window.addEventListener("mobileNavToggle", handler);
    return () => window.removeEventListener("mobileNavToggle", handler);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem("stickyCtaDismissed", "1");
    }
  };

  if (dismissed) return null;

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 transition-transform duration-300 ${
        visible && !navOpen ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="bg-secondary rounded-2xl flex items-center gap-3 p-3 shadow-2xl shadow-black/40 border border-white/10">
        <a
          href="#locations"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-primary/30 active:scale-95 transition-transform"
        >
          Book a Free Trial Class
          <ArrowRight className="h-4 w-4" />
        </a>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss"
          className="h-11 w-11 flex-shrink-0 flex items-center justify-center rounded-xl text-white/50 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
