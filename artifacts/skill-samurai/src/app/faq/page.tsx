import type { Metadata } from "next";
import Faq from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "FAQ — Coding Classes for Kids in Winnipeg | Skill Samurai",
  description:
    "Answers to common questions about Skill Samurai Winnipeg's coding and STEM classes for kids — pricing, ages, schedules, neurodivergent support, and more.",
  alternates: {
    canonical: "https://www.skillsamuraiwinnipeg.com/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much do weekly coding classes cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our weekly coding classes are $169/month for one 55-minute class each week. There is also a one-time $99 registration fee, which includes student account setup, learning platform access, progress tracking, resources your child can use to continue coding at home, and administrative onboarding. Our memberships are month-to-month, so there's no long-term contract.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a long-term contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Everything is month-to-month. We earn your trust and your child's excitement every month.",
      },
    },
    {
      "@type": "Question",
      name: "What happens in the free trial class?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your child joins a real class, meets a Coding Instructor, and builds an actual mini-project they can show you at the end. You'll get a clear sense of the environment, the instructors, and whether your child enjoys the experience before making any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "My child has never coded before. Will they fit in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Most kids who walk into Skill Samurai have zero coding experience — and that's exactly who our beginner curriculum is designed for. Our Coding Instructors start with visual, game-based tools and grow with your child as they're ready.",
      },
    },
    {
      "@type": "Question",
      name: "Do you accommodate different learning abilities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We accommodate all learning abilities, including autistic, ADHD, and dyslexic students, students with anxiety, and students who read below grade level. Instructors keep group sizes small and adjust their approach to how each child learns best — including noise-cancelling headphones available for every student, advance notice before transitions, the option to arrive early to settle in, and visual, drag-and-drop tools for younger or beginner coders so reading level doesn't hold them back.",
      },
    },
    {
      "@type": "Question",
      name: "Are your instructors screened and certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All instructors undergo background checks, child abuse registry checks, and training before working with students. Your child's safety is always a top priority.",
      },
    },
    {
      "@type": "Question",
      name: "Why do parents choose Skill Samurai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Parents choose Skill Samurai because we're focused on more than just coding. Our students build confidence, problem-solving skills, creativity, and future-ready technology skills in a fun and supportive environment. We keep class sizes small, provide personalized guidance, and help each child progress at their own pace. It's also an easy activity to hand off — no homework to manage, no equipment to buy, just an hour your child looks forward to. We've earned over 155 five-star Google reviews from Winnipeg families who have trusted us with their child's learning journey.",
      },
    },
    {
      "@type": "Question",
      name: "How do you determine the right class for my child?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We consider your child's age, experience level, interests, and goals. During the trial class, we'll recommend the learning path that's the best fit for them.",
      },
    },
    {
      "@type": "Question",
      name: "Can my child start at any time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. New students can join throughout the year. We'll help place them into the appropriate class based on their age and experience level.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a sibling or multi-child discount?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Families enrolling more than one child receive 10% off for each additional sibling.",
      },
    },
    {
      "@type": "Question",
      name: "What ages do you teach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with students ages 6 through 18. Younger students start with visual, game-based coding, while older students can explore Python, JavaScript, artificial intelligence, robotics, app development, game development, and more.",
      },
    },
    {
      "@type": "Question",
      name: "How long is each class?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Classes run between 60 and 90 minutes depending on the program. Long enough for students to build something meaningful and gain momentum, while keeping learning engaging and fun.",
      },
    },
    {
      "@type": "Question",
      name: "My child loves video games like Minecraft — is this just playing, or actually creating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Creating, not playing. Many students start because they love video games, and we use that interest as a gateway — but students aren't handed a finished game to play. They build their own games, apps, animations, and robots from the ground up, writing the code and logic behind them. Students here are creators, not consumers.",
      },
    },
    {
      "@type": "Question",
      name: "Will my child work on the same thing every week, or move at their own pace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Neither one-size-fits-all. Students follow structured, individual learning pathways and continue building new projects as they progress — advanced learners get more challenging projects rather than repeating what they know, and no one is held back or rushed to keep pace with the group.",
      },
    },
    {
      "@type": "Question",
      name: "How does this help my child beyond just coding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coding is only part of what we teach. Students also develop problem-solving, logical thinking, creativity, persistence, communication, and confidence — skills that carry over into schoolwork, and expose them to future-ready fields like AI, robotics, engineering, software development, and design.",
      },
    },
    {
      "@type": "Question",
      name: "What if my child is shy or nervous?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's completely normal. Many students are a little nervous on their first day. Our Coding Instructors create a welcoming environment and help kids settle in at their own pace. Most students feel comfortable within their first few classes.",
      },
    },
    {
      "@type": "Question",
      name: "What if my child needs extra support or a different pace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Just let us know before the trial class. We're happy to talk through what works for your child and build it into how we teach them.",
      },
    },
    {
      "@type": "Question",
      name: "What is your cancellation policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer flexible month-to-month memberships. If you need to cancel, we simply require 30 days' notice before your next billing date. This helps us manage class sizes and instructor scheduling while giving families the flexibility they need.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer make-up classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We know that kids get sick, family plans come up, and sometimes life happens. If your child misses a class, we'll do our best to arrange a make-up class based on availability. To keep things fair for all families, make-up classes need to be scheduled within the same month as the missed class and cannot be carried forward to future months.",
      },
    },
    {
      "@type": "Question",
      name: "What if my child has sports or other activities, or our schedule changes later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many of our students participate in sports, music, dance, and other extracurricular activities. If space is available, we can often help find — or move to — a class time that works with your family's schedule.",
      },
    },
    {
      "@type": "Question",
      name: "How much individual attention does my child receive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We keep class sizes small so Coding Instructors can provide personalized guidance while still allowing students to collaborate and learn alongside their peers.",
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Faq />
      <FinalCta />
    </>
  );
}
