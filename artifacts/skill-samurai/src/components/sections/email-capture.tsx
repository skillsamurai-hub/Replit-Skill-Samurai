"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    if (FORMSPREE_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email, ageRange, _subject: "New Schedule Request — Skill Samurai Winnipeg" }),
        });
        setStatus(res.ok ? "success" : "error");
      } catch {
        setStatus("error");
      }
    } else {
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white border-t border-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(335_84%_59%/0.04),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 mb-4">
            <Mail className="h-6 w-6 text-primary" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-black font-heading text-secondary uppercase tracking-tight mb-3">
            Not quite ready to book?
          </h3>
          <p className="text-base text-secondary/65 font-medium mb-8">
            Get the full class schedule, program details, and pricing sent straight to your inbox — no commitment needed.
          </p>

          {status === "success" ? (
            <div className="flex flex-col items-center gap-3">
              <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-7 w-7 text-green-600" />
              </div>
              <p className="text-lg font-black text-secondary">You're on the list!</p>
              <p className="text-secondary/60 text-sm">Check your inbox — we'll send the schedule shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 rounded-full border-2 border-secondary/15 px-5 py-3.5 text-sm font-medium text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-primary transition-colors"
              />
              <select
                value={ageRange}
                onChange={(e) => setAgeRange(e.target.value)}
                className="rounded-full border-2 border-secondary/15 px-5 py-3.5 text-sm font-medium text-secondary focus:outline-none focus:border-primary transition-colors bg-white sm:w-40 appearance-none"
              >
                <option value="">Child&apos;s age</option>
                <option value="Ages 6–10">Ages 6–10</option>
                <option value="Ages 11–14">Ages 11–14</option>
                <option value="Ages 15–18">Ages 15–18</option>
              </select>
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:scale-100 whitespace-nowrap"
              >
                {status === "loading" ? "Sending…" : <>Send It <ArrowRight className="h-4 w-4" /></>}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-3 text-sm text-red-500">Something went wrong — please try again or email us at <a href="mailto:winnipeg@skillsamurai.com" className="underline">winnipeg@skillsamurai.com</a></p>
          )}

          <p className="mt-5 text-xs text-secondary/40 font-medium">No spam. Unsubscribe anytime.</p>
        </FadeIn>
      </div>
    </section>
  );
}
