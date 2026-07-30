"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How much does it cost?",
    a: "$169/month for one 55-minute class per week, plus a one-time $99 registration fee. Month-to-month — no contracts.",
  },
  {
    q: "What ages do you teach?",
    a: "Ages 6–18. Younger kids start with visual, game-based coding. Older students can explore Python, JavaScript, AI, app development, game development, and more.",
  },
  {
    q: "My child has never coded before — will they fit in?",
    a: "Absolutely. Most kids start with zero experience. Our instructors begin with beginner-friendly, visual tools and grow with your child at their own pace.",
  },
  {
    q: "Do you accommodate different learning needs?",
    a: "Yes — ADHD, autism, dyslexia, anxiety, and more. Small group sizes, noise-cancelling headphones, flexible transitions, and visual tools so every child can succeed.",
  },
  {
    q: "What's your cancellation policy?",
    a: "30 days' written notice before your next billing date. That's it — no penalties, no lock-in.",
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
