"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "My child has never coded before. Will they fit in?",
    a: "Absolutely. Most kids who walk into Skill Samurai have zero coding experience — and that's exactly who our beginner curriculum is designed for. Our Coding Instructors start with visual, game-based tools and grow with your child as they're ready.",
  },
  {
    q: "What happens in the free trial class?",
    a: "Your child joins a real class, meets a Coding Instructor, and builds an actual mini-project they can show you at the end. You'll get a clear sense of the environment, the instructors, and whether your child enjoys the experience before making any commitment.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. Everything is month-to-month. We earn your trust and your child's excitement every month.",
  },
  {
    q: "Do you offer a sibling or multi-child discount?",
    a: "Yes. Families enrolling more than one child receive 10% off for each additional sibling.",
  },
  {
    q: "My child learns differently — will they be supported?",
    a: "Absolutely. We warmly welcome neurodivergent learners and every child who learns in their own way. Our instructors are experienced at adapting to different needs — we keep class sizes small, adjust our approach to how each child learns best, and have practical supports in place like noise-cancelling headphones, advance notice before transitions, and the option to arrive early to settle in. Just let us know before the first class and we'll make sure they're set up for success.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We offer flexible month-to-month memberships. If you need to cancel, we simply require 30 days' notice before your next billing date. This helps us manage class sizes and instructor scheduling while giving families the flexibility they need.",
  },
  {
    q: "Do you offer make-up classes?",
    a: "Yes. If your child misses a class, we'll do our best to arrange a make-up class based on availability. Make-up classes need to be scheduled within the same month as the missed class.",
  },
  {
    q: "Are your instructors screened and certified?",
    a: "Yes. All instructors undergo background checks, child abuse registry checks, and training before working with students. Your child's safety is always a top priority.",
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
