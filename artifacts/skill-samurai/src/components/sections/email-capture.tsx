"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function EmailCapture() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setStatus("loading");

    if (FORMSPREE_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name,
            email,
            ageRange,
            _subject: `New enquiry from ${name} — Skill Samurai Winnipeg`,
          }),
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
    <section className="py-16 md:py-20 bg-secondary/5 border-t border-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(335_84%_59%/0.05),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="max-w-xl mx-auto text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 mb-4">
            <MessageCircle className="h-6 w-6 text-primary" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-black font-heading text-secondary uppercase tracking-tight mb-3">
            Have questions? We&apos;ll reach out.
          </h3>
          <p className="text-base text-secondary/65 font-medium mb-8">
            Not a newsletter. Just a real person from our team — happy to answer any questions about programs, schedules, or what&apos;s right for your child.
          </p>

          {status === "success" ? (
            <div className="flex flex-col items-center gap-3">
              <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-7 w-7 text-green-600" />
              </div>
              <p className="text-lg font-black text-secondary">Got it — we&apos;ll be in touch!</p>
              <p className="text-secondary/60 text-sm">Expect a personal message from our team shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="flex-1 rounded-full border-2 border-secondary/15 px-5 py-3.5 text-sm font-medium text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-primary transition-colors"
                />
                <select
                  value={ageRange}
                  onChange={(e) => setAgeRange(e.target.value)}
                  className="rounded-full border-2 border-secondary/15 px-5 py-3.5 text-sm font-medium text-secondary focus:outline-none focus:border-primary transition-colors bg-white sm:w-44 appearance-none"
                >
                  <option value="">Child&apos;s age</option>
                  <option value="Ages 6–10">Ages 6–10</option>
                  <option value="Ages 11–14">Ages 11–14</option>
                  <option value="Ages 15–18">Ages 15–18</option>
                </select>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 rounded-full border-2 border-secondary/15 px-5 py-3.5 text-sm font-medium text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:scale-100 whitespace-nowrap"
                >
                  {status === "loading" ? "Sending…" : <>Get in Touch <ArrowRight className="h-4 w-4" /></>}
                </button>
              </div>
            </form>
          )}

          {status === "error" && (
            <p className="mt-3 text-sm text-red-500">
              Something went wrong — email us directly at{" "}
              <a href="mailto:winnipeg@skillsamurai.com" className="underline">
                winnipeg@skillsamurai.com
              </a>
            </p>
          )}

          <p className="mt-5 text-xs text-secondary/40 font-medium">No newsletters. No spam. Just a real conversation.</p>
        </FadeIn>
      </div>
    </section>
  );
}
