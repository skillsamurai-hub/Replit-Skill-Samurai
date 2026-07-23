"use client";

import { ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";

export type Slot = {
  day: string;
  time: string;
  program: string;
  grades: string;
  note: string;
  url: string;
};

type Props = {
  slots: Slot[];
  locationName: string;
  locationAddress: string;
};

export default function ScheduleTable({ slots, locationName, locationAddress }: Props) {
  const days = Array.from(new Set(slots.map((s) => s.day)));

  return (
    <>
      {/* Section heading */}
      <h2 className="text-xl font-black text-secondary text-center mb-1">Available Sessions</h2>
      <p className="text-secondary/70 text-sm text-center mb-1">
        Weekly Coding Classes &nbsp;·&nbsp; Grades 1–12 &nbsp;·&nbsp; Ages 6–18
      </p>
      <p className="text-secondary/50 text-xs text-center mb-8">
        {locationName} &nbsp;·&nbsp; {locationAddress}
      </p>

      {/* Start + billing notice */}
      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        <div className="flex items-start gap-3 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3.5">
          <span className="text-xl mt-0.5">📅</span>
          <div>
            <p className="text-secondary font-black text-sm">Start any week</p>
            <p className="text-secondary/70 text-xs mt-0.5">New students welcome every {days[0]}{days.length > 1 ? ` & ${days[days.length - 1]}` : ""}. Pick a day and time below.</p>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3.5">
          <span className="text-xl mt-0.5">💳</span>
          <div>
            <p className="text-secondary font-black text-sm">Prorated first month</p>
            <p className="text-secondary/70 text-xs mt-0.5">You only pay for the weeks remaining in the month. Month-to-month — no long-term contract.</p>
          </div>
        </div>
      </div>

      {/* Day cards */}
      <div className={`grid gap-4 mb-8 ${days.length === 2 ? "sm:grid-cols-2" : days.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
        {days.map((day) => {
          const daySlots = slots.filter((s) => s.day === day);
          return (
            <div key={day} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Day header */}
              <div className="bg-secondary px-5 py-3">
                <p className="text-white font-black text-base tracking-wide">{day}</p>
              </div>
              {/* Time slots */}
              <div className="divide-y divide-gray-100">
                {daySlots.map((slot, i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-4 hover:bg-primary/5 transition-colors">
                    <span className="text-secondary font-bold text-lg">{slot.time}</span>
                    <a
                      href={slot.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wide transition-all hover:scale-105 shadow-sm shadow-primary/30 whitespace-nowrap"
                    >
                      Enroll Now
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Policies */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
        <h3 className="text-base font-black text-secondary mb-4">Class Cancellation and Make-up Class Policy</h3>
        <div className="space-y-4 text-sm text-secondary/70">
          <div>
            <p className="font-bold text-secondary mb-1">How to Cancel or Pause Classes</p>
            <p>We require 30 days written notice to cancel or pause your membership. Please email us or call <a href="tel:+14319982155" className="text-primary font-bold hover:underline">431-998-2155</a> to initiate any changes.</p>
          </div>
          <div>
            <p className="font-bold text-secondary mb-1">Make-up Classes</p>
            <p>If your child misses a class, we offer makeup sessions at either location. Contact us to schedule a makeup at a time that works for your family.</p>
          </div>
          <div>
            <p className="font-bold text-secondary mb-1">Month-to-Month Membership</p>
            <p>There are no long-term contracts. Your membership continues month-to-month until you choose to cancel with 30 days notice.</p>
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
