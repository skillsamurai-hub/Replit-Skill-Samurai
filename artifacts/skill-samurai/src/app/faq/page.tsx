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
      name: "What ages do you teach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with students ages 6 through 18. Younger students start with visual, game-based coding, while older students can explore Python, JavaScript, artificial intelligence, robotics, app development, game development, and more.",
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
      name: "Do you offer a sibling or multi-child discount?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Families enrolling more than one child receive 10% off for each additional sibling.",
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
