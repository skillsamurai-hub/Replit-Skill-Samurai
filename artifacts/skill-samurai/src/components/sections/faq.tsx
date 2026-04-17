import React, { useId, useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "My child has never coded before. Will they fit in?",
    a: "Absolutely. Most kids who walk into Skill Samurai have zero coding experience — and that's exactly who our beginner curriculum is designed for. Our coaches start with visual, game-based tools and grow with your child as they're ready."
  },
  {
    q: "What ages do you teach?",
    a: "We work with kids ages 6 through 18. Younger students start with playful, drag-and-drop coding (Scratch, Roblox-style projects), and older students move into Python, JavaScript, AI/ML, robotics, and Minecraft modding."
  },
  {
    q: "How long is each class?",
    a: "Classes run 60 to 90 minutes depending on the program. Long enough for kids to build something real and feel proud of it — short enough that they leave excited to come back."
  },
  {
    q: "Is there a long-term contract?",
    a: "No. Everything is month-to-month. We earn your trust (and your child's excitement) every month — no long contracts, no cancellation games."
  },
  {
    q: "What happens in the free trial class?",
    a: "Your child joins a real class, meets a coach, and builds an actual mini-project they can show you at the end. You'll get a clear sense of the vibe, the coaches, and whether your child connects with it — before you pay anything."
  },
  {
    q: "What if my child is shy or already advanced?",
    a: "Our small group format means coaches get to know each kid quickly. Shy kids get gentle encouragement and patience. Advanced kids get harder challenges and stretch projects. Nobody gets left behind, nobody gets bored."
  },
  {
    q: "Are your instructors screened and certified?",
    a: "Yes. Our instructors are background checked, child abuse registry checked, and certified before they work with students."
  },
];

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const reactId = useId();
  const buttonId = `faq-btn-${reactId}`;
  const panelId = `faq-panel-${reactId}`;
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        id={buttonId}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 text-left py-6 group"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="text-lg md:text-xl font-bold font-heading text-secondary group-hover:text-primary transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 h-9 w-9 rounded-full bg-muted text-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white ${
            open ? "rotate-45 bg-primary text-white" : ""
          }`}
        >
          <Plus className="h-5 w-5" strokeWidth={2.5} />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed pr-4 md:pr-12">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section className="py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
          <FadeIn className="lg:sticky lg:top-28">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">FAQ</h2>
            <h3 className="text-4xl md:text-5xl font-black font-heading text-secondary leading-tight tracking-tight mb-5">
              Parent questions,<br />honestly answered.
            </h3>
            <p className="text-lg text-muted-foreground font-medium mb-6">
              The things parents actually ask before booking a trial. If you don't see your question here, just ask us — we'd rather over-explain than oversell.
            </p>
            <a
              href="https://skillsamurai.ca/book-a-free-trial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-7 py-3 text-base font-bold text-white shadow-lg hover:bg-secondary/90 hover:scale-[1.02] active:scale-95 transition-all"
            >
              Book a free trial
            </a>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="bg-white rounded-3xl border border-border shadow-xl shadow-secondary/5 px-7 md:px-10 py-2">
              {faqs.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
