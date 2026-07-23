"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export type Slot = {
  day: string;
  time: string;
  program: string;
  grades: string;
  note: string;
  url: string;
  spotsLeft?: number;
  waitlistUrl?: string;
};

type LiveSlot = { day: string; time: string; spots_left: number; waitlist_url: string | null };

type Props = {
  slots: Slot[];
  locationName: string;
  locationAddress: string;
  locationId?: string;
  defaultWaitlistUrl?: string;
};

const WHAT_KIDS_LEARN = [
  "Build real games, apps, and projects from day one",
  "Learn Python, Scratch, JavaScript, and more",
  "Progress at their own pace — beginner to advanced",
];

export default function ScheduleTable({ slots, locationName, locationAddress, locationId, defaultWaitlistUrl }: Props) {
  const [liveSlots, setLiveSlots] = useState<LiveSlot[]>([]);

  useEffect(() => {
    if (!locationId) return;
    fetch(`/api/slots?location=${locationId}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data: LiveSlot[] | null) => { if (data) setLiveSlots(data); })
      .catch(() => {});
  }, [locationId]);

  const displaySlots =
    liveSlots.length === 0
      ? slots
      : slots.map((slot) => {
          const live = liveSlots.find((l) => l.day === slot.day && l.time === slot.time);
          if (!live) return slot;
          return { ...slot, spotsLeft: live.spots_left, waitlistUrl: live.waitlist_url ?? slot.waitlistUrl };
        });

  const days = Array.from(new Set(displaySlots.map((s) => s.day)));

  return (
    <>
      {/* What kids learn */}
      <div className="mb-8">
        <h2 className="text-xl font-black text-secondary text-center mb-4">What Your Child Will Learn</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          {WHAT_KIDS_LEARN.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white rounded-xl border border-gray-200 px-4 py-3.5 shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <p className="text-secondary text-sm font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-secondary rounded-2xl p-6 mb-8">
        <h2 className="text-white font-black text-lg text-center mb-5">Simple, Transparent Pricing</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-xl px-5 py-4 text-center border border-white/20">
            <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-1">One-Time Registration</p>
            <p className="text-white font-black text-4xl mb-1">$99</p>
            <p className="text-white/60 text-xs">Paid once when you first enrol</p>
          </div>
          <div className="bg-primary rounded-xl px-5 py-4 text-center shadow-lg shadow-primary/30">
            <p className="text-white/80 text-xs uppercase tracking-widest font-bold mb-1">Monthly Subscription</p>
            <p className="text-white font-black text-4xl mb-1">$169<span className="text-lg font-bold">/mo</span></p>
            <p className="text-white/80 text-xs">Month-to-month · No contracts</p>
          </div>
        </div>
        <p className="text-white/50 text-xs text-center mt-4">
          Cancel anytime with 30 days written notice. Makeup classes available at either location.
        </p>
      </div>

      {/* Available sessions heading */}
      <h2 className="text-xl font-black text-secondary text-center mb-1">Pick Your Session</h2>
      <p className="text-secondary/60 text-sm text-center mb-6">
        {locationName} &nbsp;·&nbsp; Start any {days[0]}{days.length > 1 ? ` or ${days[days.length - 1]}` : ""}
      </p>

      {/* Day cards */}
      <div className={`grid gap-4 mb-4 ${days.length === 2 ? "sm:grid-cols-2" : days.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
        {days.map((day) => {
          const daySlots = displaySlots.filter((s) => s.day === day);
          return (
            <div key={day} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-secondary px-5 py-3 flex items-center justify-between">
                <p className="text-white font-black text-base tracking-wide">{day}</p>
                <span className="text-xs font-bold text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full">Limited spots</span>
              </div>
              <div className="divide-y divide-gray-100">
                {daySlots.map((slot, i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-4 hover:bg-primary/5 transition-colors">
                    <div>
                      <span className="text-secondary font-bold text-lg">{slot.time}</span>
                      {slot.spotsLeft !== undefined && (
                        <p className={`text-xs font-semibold mt-0.5 ${slot.spotsLeft <= 3 ? "text-red-500" : "text-secondary/50"}`}>
                          {slot.spotsLeft === 0 ? "Full — join waitlist" : `${slot.spotsLeft} spot${slot.spotsLeft === 1 ? "" : "s"} left`}
                        </p>
                      )}
                    </div>
                    <a
                      href={slot.spotsLeft === 0 ? (slot.waitlistUrl ?? defaultWaitlistUrl ?? "tel:+14319982155") : slot.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wide transition-all hover:scale-105 shadow-sm whitespace-nowrap ${slot.spotsLeft === 0 ? "bg-secondary/80 hover:bg-secondary text-white shadow-secondary/20" : "bg-primary hover:bg-primary/90 text-white shadow-primary/30"}`}
                    >
                      {slot.spotsLeft === 0 ? "Join Waitlist" : "Enroll Now"}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Free trial CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-primary/5 border border-primary/20 rounded-xl px-5 py-4 mb-8">
        <div>
          <p className="text-secondary font-black text-sm">Not ready to commit yet?</p>
          <p className="text-secondary/60 text-xs mt-0.5">Try a free class first — no registration fee, no obligation.</p>
        </div>
        <Link
          href="/#locations"
          className="inline-flex items-center gap-2 bg-white border border-primary/30 hover:border-primary text-primary font-bold px-5 py-2.5 rounded-xl text-sm transition-all whitespace-nowrap hover:bg-primary/5 shrink-0"
        >
          Book a Free Class →
        </Link>
      </div>

      {/* Trust strip */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-secondary/60 mb-8 py-4 border-y border-gray-200">
        <span className="flex items-center gap-1.5 font-semibold text-secondary">{locationName} &nbsp;·&nbsp; {locationAddress}</span>
        <span className="hidden sm:block text-gray-300">|</span>
        <span className="flex items-center gap-1.5">⭐ 155+ five-star reviews</span>
        <span className="hidden sm:block text-gray-300">|</span>
        <span className="flex items-center gap-1.5">📅 Start any week</span>
        <span className="hidden sm:block text-gray-300">|</span>
        <span className="flex items-center gap-1.5">🔓 No long-term contracts</span>
      </div>

      {/* Flexible membership */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
        <h3 className="text-base font-black text-secondary mb-4">Flexible Membership</h3>
        <div className="space-y-4 text-sm text-secondary/70">
          <div>
            <p className="font-bold text-secondary mb-1">Cancel or Pause Anytime</p>
            <p>We require 30 days written notice to cancel or pause your membership. Email us or call <a href="tel:+14319982155" className="text-primary font-bold hover:underline">431-998-2155</a> to make any changes.</p>
          </div>
          <div>
            <p className="font-bold text-secondary mb-1">Makeup Classes Included</p>
            <p>Missed a class? We offer makeup sessions at either location. Just contact us and we&apos;ll find a time that works.</p>
          </div>
          <div>
            <p className="font-bold text-secondary mb-1">Month-to-Month</p>
            <p>No annual contracts or commitments. Your membership continues month-to-month until you say otherwise.</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-secondary rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-white font-black text-base mb-1">Have questions before enrolling?</p>
          <p className="text-white/70 text-sm">We&apos;re happy to help you find the right fit for your child.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a href="tel:+14319982155" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2.5 rounded-xl text-sm border border-white/20 transition-colors">
            <Phone className="h-4 w-4 text-primary" /> 431-998-2155
          </a>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-colors">
            <Mail className="h-4 w-4" /> Email Us
          </Link>
        </div>
      </div>
    </>
  );
}
