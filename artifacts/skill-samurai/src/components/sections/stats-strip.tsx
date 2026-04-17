import React from "react";

const stats = [
  {
    eyebrow: "Dell Technologies + Institute for the Future",
    value: "85% of jobs that will exist in 2030 haven't been invented yet",
    note: "Will your child be future-ready?",
  },
  {
    eyebrow: "LinkedIn Workforce Report",
    value: "By 2030, 80% of all jobs will require digital skills.",
    note: "That means coding, problem-solving, and comfort with tech matter more than ever.",
  },
];

export default function StatsStrip() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 lg:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-[2rem] border border-border/70 bg-muted/30 p-6 md:p-8 shadow-lg shadow-secondary/5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
                {stat.eyebrow}
              </p>
              <h3 className="text-2xl md:text-3xl font-black font-heading text-secondary leading-tight mb-4">
                {stat.value}
              </h3>
              <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed mb-4 italic">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
