"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How much do weekly coding classes cost?",
    a: "Our weekly coding classes are $169/month for one 55-minute class each week. There is also a one-time $99 registration fee, which includes student account setup, learning platform access, progress tracking, resources your child can use to continue coding at home, and administrative onboarding. Our memberships are month-to-month, so there's no long-term contract.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. Everything is month-to-month. We earn your trust and your child's excitement every month.",
  },
  {
    q: "What happens in the free trial class?",
    a: "Your child joins a real class, meets a Coding Instructor, and builds an actual mini-project they can show you at the end. You'll get a clear sense of the environment, the instructors, and whether your child enjoys the experience before making any commitment.",
  },
  {
    q: "What ages do you teach?",
    a: "We work with students ages 6 through 18. Younger students start with visual, game-based coding, while older students can explore Python, JavaScript, artificial intelligence, robotics, app development, game development, and more.",
  },
  {
    q: "My child has never coded before. Will they fit in?",
    a: "Absolutely. Most kids who walk into Skill Samurai have zero coding experience — and that's exactly who our beginner curriculum is designed for. Our Coding Instructors start with visual, game-based tools and grow with your child as they're ready.",
  },
  {
    q: "Do you accommodate different learning abilities?",
    a: "Yes. We accommodate all learning abilities, including autistic, ADHD, and dyslexic students, students with anxiety, and students who read below grade level. Instructors keep group sizes small and adjust their approach to how each child learns best — including noise-cancelling headphones available for every student, advance notice before transitions, the option to arrive early to settle in, and visual, drag-and-drop tools for younger or beginner coders so reading level doesn't hold them back.",
  },
  {
    q: "Are your instructors screened and certified?",
    a: "Yes. All instructors undergo background checks, child abuse registry checks, and training before working with students. Your child's safety is always a top priority.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We offer flexible month-to-month memberships. If you need to cancel, we simply require 30 days' notice before your next billing date. This helps us manage class sizes and instructor scheduling while giving families the flexibility they need.",
  },
  {
    q: "Do you offer make-up classes?",
    a: "Yes. We know that kids get sick, family plans come up, and sometimes life happens. If your child misses a class, we'll do our best to arrange a make-up class based on availability. Make-up classes need to be scheduled within the same month as the missed class and cannot be carried forward to future months.",
  },
  {
    q: "Do you offer a sibling or multi-child discount?",
    a: "Yes. Families enrolling more than one child receive 10% off for each additional sibling.",
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
