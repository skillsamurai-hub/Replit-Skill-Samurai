"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Does my child need any coding experience?",
    a: "None at all. Most kids start from zero. We meet every child where they are — complete beginners start with visual coding and work up to Python and JavaScript at their own pace.",
  },
  {
    q: "What age is the right age to start?",
    a: "We work with kids ages 6–18. Younger kids (6–10) typically start with Scratch or block-based coding, while older kids jump into Python, JavaScript, game dev, and more.",
  },
  {
    q: "What if we miss a class?",
    a: "Makeup classes are available at either location. Just give us a call or send an email and we'll find a time that works.",
  },
  {
    q: "Can my child switch to a different time slot?",
    a: "Yes — just let us know and we'll move you to any available session at either location.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No contracts, ever. It's month-to-month. You can cancel with 30 days written notice whenever you like.",
  },
  {
    q: "What happens at the free trial class?",
    a: "Your child comes in, meets their instructor, and jumps straight into a project. It's a real class — not a sales pitch. If they love it, you enrol. If not, no hard feelings.",
  },
];

export default function EnrollmentFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-black text-secondary text-center mb-5">Common Questions</h2>
      <div className="space-y-2">
        {FAQS.map((faq, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="text-secondary font-bold text-sm pr-4">{faq.q}</span>
              <ChevronDown
                className={`h-4 w-4 text-secondary/40 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && (
              <div className="px-5 pb-4">
                <p className="text-secondary/70 text-sm leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
