"use client";

import React, { useId, useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Plus } from "lucide-react";

const faqGroups: { category: string; items: { q: string; a: React.ReactNode }[] }[] = [
  {
    category: "Quick Answers",
    items: [
      {
        q: "How much do weekly coding classes cost?",
        a: <>
          <p>Our weekly coding classes are <strong>$169/month</strong> for one 55-minute class each week.</p>
          <p className="mt-3">There is also a one-time <strong>$99 registration fee</strong>, which includes:</p>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>Student account setup</li>
            <li>Learning platform access</li>
            <li>Progress tracking</li>
            <li>Resources your child can use to continue coding at home</li>
            <li>Administrative onboarding</li>
          </ul>
          <p className="mt-3">Our memberships are month-to-month, so there&apos;s no long-term contract.</p>
        </>,
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
    ],
  },
  {
    category: "Getting Started",
    items: [
      {
        q: "Why do parents choose Skill Samurai?",
        a: <>Parents choose Skill Samurai because we&apos;re focused on more than just coding. Our students build confidence, problem-solving skills, creativity, and future-ready technology skills in a fun and supportive environment. We keep class sizes small, provide personalized guidance, and help each child progress at their own pace. It&apos;s also an easy activity to hand off — no homework to manage, no equipment to buy, just an hour your child looks forward to. We&apos;ve earned <a href="http://skillsamuraiwinnipeg.com/reviews" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-white transition-colors" style={{pointerEvents:"auto"}}>over 155 five-star Google reviews</a> from Winnipeg families who have trusted us with their child&apos;s learning journey.</>,
      },
      {
        q: "How do you determine the right class for my child?",
        a: "We consider your child's age, experience level, interests, and goals. During the trial class, we'll recommend the learning path that's the best fit for them.",
      },
      {
        q: "Can my child start at any time?",
        a: "Yes. New students can join throughout the year. We'll help place them into the appropriate class based on their age and experience level.",
      },
      {
        q: "Do you offer a sibling or multi-child discount?",
        a: "Yes. Families enrolling more than one child receive 10% off for each additional sibling.",
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
        q: "My child loves video games like Minecraft — is this just playing, or actually creating?",
        a: "Creating, not playing. Many students start because they love video games, and we use that interest as a gateway — but students aren't handed a finished game to play. They build their own games, apps, animations, and robots from the ground up, writing the code and logic behind them. A student who loves Minecraft, for example, learns to build and code their own game mechanics rather than just play someone else's. Students here are creators, not consumers.",
      },
      {
        q: "Will my child work on the same thing every week, or move at their own pace?",
        a: "Neither one-size-fits-all. Students follow structured, individual learning pathways and continue building new projects as they progress — advanced learners get more challenging projects rather than repeating what they know, and no one is held back or rushed to keep pace with the group.",
      },
      {
        q: "How does this help my child beyond just coding?",
        a: "Coding is only part of what we teach. Students also develop problem-solving, logical thinking, creativity, persistence, communication, and confidence — skills that carry over into schoolwork, and expose them to future-ready fields like AI, robotics, engineering, software development, and design.",
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
        q: "What if my child needs extra support or a different pace?",
        a: "Just let us know before the trial class. We're happy to talk through what works for your child and build it into how we teach them.",
      },
    ],
  },
  {
    category: "Scheduling & Membership",
    items: [
      {
        q: "What is your cancellation policy?",
        a: "We offer flexible month-to-month memberships. If you need to cancel, we simply require 30 days' notice before your next billing date. This helps us manage class sizes and instructor scheduling while giving families the flexibility they need.",
      },
      {
        q: "Do you offer make-up classes?",
        a: "Yes. We know that kids get sick, family plans come up, and sometimes life happens. If your child misses a class, we'll do our best to arrange a make-up class based on availability. To keep things fair for all families, make-up classes need to be scheduled within the same month as the missed class and cannot be carried forward to future months.",
      },
      {
        q: "What if my child has sports or other activities, or our schedule changes later?",
        a: "Many of our students participate in sports, music, dance, and other extracurricular activities. If space is available, we can often help find — or move to — a class time that works with your family's schedule.",
      },
    ],
  },
  {
    category: "Safety & Instructors",
    items: [
      {
        q: "How much individual attention does my child receive?",
        a: "We keep class sizes small so Coding Instructors can provide personalized guidance while still allowing students to collaborate and learn alongside their peers.",
      },
    ],
  },
];

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: React.ReactNode; defaultOpen?: boolean }) {
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
          <div className="text-sm md:text-base text-white/75 leading-relaxed pr-4 md:pr-10">{a}</div>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section className="pt-16 pb-28 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeIn className="mb-10">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-black font-heading text-white leading-tight tracking-tight mb-4">
            Parent questions,<br />honestly answered.
          </h3>
          <p className="text-lg text-white/75 font-medium max-w-2xl">
            The things parents actually ask before booking a trial. If you don't see your question here, just ask us — we'd rather over-explain than oversell.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="space-y-6">
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
    </section>
  );
}
