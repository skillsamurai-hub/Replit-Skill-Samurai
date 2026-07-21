"use client";

import React, { useId, useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Plus } from "lucide-react";
import { openBookingModal } from "@/components/ui/modal-events";

const faqGroups = [
  {
    category: "Getting Started",
    items: [
      {
        q: "My child has never coded before. Will they fit in?",
        a: "Absolutely. Most kids who walk into Skill Samurai have zero coding experience — and that's exactly who our beginner curriculum is designed for. Our Coding Instructors start with visual, game-based tools and grow with your child as they're ready.",
      },
      {
        q: "What happens in the free trial class?",
        a: "Your child joins a real class, meets a Coding Instructor, and builds an actual mini-project they can show you at the end. You'll get a clear sense of the environment, the instructors, and whether your child enjoys the experience before making any commitment.",
      },
      {
        q: "Why do parents choose Skill Samurai?",
        a: "Parents choose Skill Samurai because we're focused on more than just coding. Our students build confidence, problem-solving skills, creativity, and future-ready technology skills in a fun and supportive environment. We keep class sizes small, provide personalized guidance, and help each child progress at their own pace. We've earned over 148 five-star Google reviews from Winnipeg families who have trusted us with their child's learning journey.",
      },
      {
        q: "How do you determine the right class for my child?",
        a: "We consider your child's age, experience level, interests, and goals. During the trial class, we'll recommend the learning path that's the best fit for them.",
      },
      {
        q: "Can my child start at any time?",
        a: "Yes. New students can join throughout the year. We'll help place them into the appropriate class based on their age and experience level.",
      },
    ],
  },
  {
    category: "Programs & Learning",
    items: [
      {
        q: "What ages do you teach?",
        a: "We work with students ages 6 through 18. Younger students start with visual, game-based coding, while older students can explore Python, JavaScript, artificial intelligence, robotics, app development, game development, and more.",
      },
      {
        q: "How long is each class?",
        a: "Classes run between 60 and 90 minutes depending on the program. Long enough for students to build something meaningful and gain momentum, while keeping learning engaging and fun.",
      },
      {
        q: "My child loves video games like Minecraft. Do you teach that?",
        a: "Yes. Many of our students start because they love video games. We use those interests as a gateway to teach coding, game design, creativity, and computer science concepts in a fun and engaging way.",
      },
      {
        q: "Will my child build real projects?",
        a: "Yes. Students create games, apps, websites, animations, AI projects, and robotics projects they can proudly share with family and friends.",
      },
      {
        q: "Will my child work on the same thing every week?",
        a: "No. Students follow structured learning pathways and continue building new projects as they progress. As their skills grow, they unlock more advanced technologies, coding languages, and real-world applications.",
      },
      {
        q: "What skills will my child learn besides coding?",
        a: "Coding is only part of what we teach. Students also develop problem-solving, creativity, critical thinking, communication, persistence, confidence, and teamwork — skills that help them succeed both in school and in life.",
      },
    ],
  },
  {
    category: "Student Experience",
    items: [
      {
        q: "What if my child is shy or nervous?",
        a: "That's completely normal. Many students are a little nervous on their first day. Our Coding Instructors create a welcoming environment and help kids settle in at their own pace. Most students feel comfortable within their first few classes.",
      },
      {
        q: "What if my child is already advanced?",
        a: "We meet students where they are. Advanced learners receive more challenging projects, coding languages, and opportunities to continue growing rather than repeating concepts they already know.",
      },
      {
        q: "Is this just more screen time?",
        a: "We believe in productive screen time. Instead of consuming content, students learn how to create games, apps, websites, robots, and AI projects while building problem-solving, creativity, and critical thinking skills.",
      },
      {
        q: "Can coding help my child in school?",
        a: "Yes. Coding helps students strengthen problem-solving, logical thinking, creativity, and persistence. Many parents tell us they notice increased confidence and stronger critical-thinking skills that carry over into schoolwork.",
      },
      {
        q: "Can coding help prepare my child for future careers?",
        a: "Technology is becoming part of nearly every industry. Learning to code helps students develop future-ready skills and exposes them to fields such as artificial intelligence, robotics, engineering, software development, entrepreneurship, and digital design.",
      },
    ],
  },
  {
    category: "Scheduling & Membership",
    items: [
      {
        q: "Is there a long-term contract?",
        a: "No. Everything is month-to-month. We earn your trust and your child's excitement every month. There are no long-term contracts.",
      },
      {
        q: "What is your cancellation policy?",
        a: "We offer flexible month-to-month memberships. If you need to cancel, we simply require 30 days' notice before your next billing date. This helps us manage class sizes and instructor scheduling while giving families the flexibility they need.",
      },
      {
        q: "Do you offer make-up classes?",
        a: "Yes. We know that kids get sick, family plans come up, and sometimes life happens. If your child misses a class, we'll do our best to arrange a make-up class based on availability. To keep things fair for all families, make-up classes need to be scheduled within the same month as the missed class and cannot be carried forward to future months.",
      },
      {
        q: "What if my child plays sports or has other activities?",
        a: "Many of our students participate in sports, music, dance, and other extracurricular activities. If space is available, we can often help find a class time that works with your family's schedule.",
      },
      {
        q: "Can we change class times later?",
        a: "Yes. If your schedule changes and space is available, we'll do our best to find another class time that works for your family.",
      },
    ],
  },
  {
    category: "Safety & Instructors",
    items: [
      {
        q: "Are your instructors screened and certified?",
        a: "Yes. All instructors undergo background checks, child abuse registry checks, and training before working with students. Your child's safety is always a top priority.",
      },
      {
        q: "How much individual attention does my child receive?",
        a: "We keep class sizes small so Coding Instructors can provide personalized guidance while still allowing students to collaborate and learn alongside their peers.",
      },
    ],
  },
];

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const reactId = useId();
  const buttonId = `faq-btn-${reactId}`;
  const panelId = `faq-panel-${reactId}`;
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        type="button"
        id={buttonId}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 text-left py-6 group"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="text-base md:text-lg font-bold font-heading text-white group-hover:text-accent transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 h-8 w-8 rounded-full bg-white/10 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white ${
            open ? "rotate-45 bg-primary text-white" : ""
          }`}
        >
          <Plus className="h-4 w-4" strokeWidth={2.5} />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm md:text-base text-white/75 leading-relaxed pr-4 md:pr-10">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section className="py-28 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr,1.6fr] gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
          <FadeIn className="lg:sticky lg:top-28 relative z-20">
            <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">FAQ</h2>
            <h3 className="text-4xl md:text-5xl font-black font-heading text-white leading-tight tracking-tight mb-5">
              Parent questions,<br />honestly answered.
            </h3>
            <p className="text-lg text-white/75 font-medium mb-6">
              The things parents actually ask before booking a trial. If you don't see your question here, just ask us — we'd rather over-explain than oversell.
            </p>
            <button
              type="button"
              onClick={openBookingModal}
              className="relative z-20 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-base font-bold text-white shadow-lg hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              BOOK A FREE TRIAL
            </button>
          </FadeIn>

          <FadeIn delay={0.15} className="relative z-10 space-y-6">
            {faqGroups.map((group) => (
              <div key={group.category} className="bg-black/15 rounded-3xl border border-white/10 shadow-xl shadow-black/20 px-7 md:px-10 py-3 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-accent pt-5 pb-2">
                  {group.category}
                </p>
                {group.items.map((f, i) => (
                  <FaqItem key={i} q={f.q} a={f.a} />
                ))}
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
