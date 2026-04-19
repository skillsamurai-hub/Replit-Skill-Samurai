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
    <section className="bg-secondary py-20 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid gap-5 lg:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-[2rem] border-[3px] border-white/10 bg-white/10 backdrop-blur-md p-7 md:p-9 shadow-2xl shadow-black/20"
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">
                {stat.eyebrow}
              </p>
              <h3 className="text-2xl md:text-3xl font-black font-heading text-white leading-tight mb-4">
                {stat.value}
              </h3>
              <p className="text-base md:text-lg text-white/75 font-medium leading-relaxed mb-2 italic">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
