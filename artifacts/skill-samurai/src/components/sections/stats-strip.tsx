import React from "react";

const stats = [
  { value: "6–18", label: "Ages we teach" },
  { value: "60–90 min", label: "Class length" },
  { value: "Small groups", label: "More personal support" },
  { value: "Month-to-month", label: "No long contracts" },
];

export default function StatsStrip() {
  return (
    <section className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-center backdrop-blur-sm"
            >
              <div className="text-2xl md:text-3xl font-black font-heading text-white">
                {stat.value}
              </div>
              <div className="mt-1 text-xs md:text-sm font-medium text-white/75">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
