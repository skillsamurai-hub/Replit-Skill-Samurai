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
  return (
    <>
      {/* Section heading */}
      <h2 className="text-xl font-black text-secondary text-center mb-1">Available Sessions</h2>
      <p className="text-secondary/50 text-sm text-center mb-8">
        Select a time slot and click Enroll Now to register on our secure registration portal.
      </p>

      {/* Desktop table */}
      <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-secondary text-white">
              <th className="text-left px-5 py-3.5 font-bold text-xs uppercase tracking-wider">Program</th>
              <th className="text-left px-5 py-3.5 font-bold text-xs uppercase tracking-wider">Restrictions</th>
              <th className="text-left px-5 py-3.5 font-bold text-xs uppercase tracking-wider">Location</th>
              <th className="text-left px-5 py-3.5 font-bold text-xs uppercase tracking-wider">Additional Note</th>
              <th className="text-right px-5 py-3.5 font-bold text-xs uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {slots.map((slot, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4 font-semibold text-secondary">
                  {slot.day} {slot.time} – {slot.program}
                </td>
                <td className="px-5 py-4 text-secondary/60">{slot.grades}</td>
                <td className="px-5 py-4 text-secondary/60">
                  {locationName},<br />
                  <span className="text-secondary/40">{locationAddress}</span>
                </td>
                <td className="px-5 py-4 text-secondary/50 text-xs">{slot.note}</td>
                <td className="px-5 py-4 text-right">
                  <a
                    href={slot.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wide transition-all hover:scale-105 shadow-sm shadow-primary/30 whitespace-nowrap"
                  >
                    Enroll Now
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3 mb-8">
        {slots.map((slot, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <p className="font-black text-secondary text-base mb-1">{slot.day} {slot.time}</p>
            <p className="text-secondary/70 text-sm font-semibold mb-1">{slot.program}</p>
            <p className="text-secondary/50 text-xs mb-1">{slot.grades}</p>
            <p className="text-secondary/40 text-xs mb-4">{locationAddress}</p>
            <a
              href={slot.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wide transition-all w-full"
            >
              Enroll Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
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
          <p className="text-white/60 text-sm">We&apos;re happy to help you find the right fit for your child.</p>
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
