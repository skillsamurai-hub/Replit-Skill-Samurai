import React from "react";
import { Box, Gamepad2, PenTool, ArrowRight, Quote } from "lucide-react";

export function Grid() {
  const students = [
    {
      name: "Kai",
      age: 12,
      project: "Bob's Burgers 3D Build",
      type: "3D Modeling",
      quote: "I got to build something I actually love.",
      icon: Box,
      color: "bg-[hsl(335,84%,59%)]", // hot pink
      borderColor: "border-[hsl(335,84%,59%)]",
      textColor: "text-[hsl(335,84%,59%)]",
      lightBg: "bg-[hsl(335,84%,95%)]",
    },
    {
      name: "Aria",
      age: 12,
      project: "Robot Picture Frame",
      type: "3D Design",
      quote: "I wanted to make something that was actually mine.",
      icon: PenTool,
      color: "bg-[#F59100]", // orange
      borderColor: "border-[#F59100]",
      textColor: "text-[#F59100]",
      lightBg: "bg-[#FFF6EB]",
    },
    {
      name: "Jack",
      age: 7,
      project: "Froggy Flap",
      type: "Scratch Game",
      quote: "I made my own game and my frog is the main character!",
      icon: Gamepad2,
      color: "bg-[hsl(218,42%,29%)]", // navy
      borderColor: "border-[hsl(218,42%,29%)]",
      textColor: "text-[hsl(218,42%,29%)]",
      lightBg: "bg-[hsl(218,42%,95%)]",
    },
    {
      name: "Owen",
      age: 8,
      project: "Dino Defense",
      type: "Game Design",
      quote: "I finally finished my game. Showing it to everyone was really fun.",
      icon: Gamepad2,
      color: "bg-[hsl(335,84%,59%)]",
      borderColor: "border-[hsl(335,84%,59%)]",
      textColor: "text-[hsl(335,84%,59%)]",
      lightBg: "bg-[hsl(335,84%,95%)]",
    },
    {
      name: "Jayrel",
      age: 16,
      project: "Interactive Robot Game",
      type: "Game Design",
      quote: "Built an interactive robot game using block-based coding.",
      icon: Gamepad2,
      color: "bg-[#F59100]",
      borderColor: "border-[#F59100]",
      textColor: "text-[#F59100]",
      lightBg: "bg-[#FFF6EB]",
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#F59100] uppercase mb-3">
            Kids Who Build
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[hsl(218,42%,29%)] uppercase tracking-tight">
            Real Things
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {students.map((student, idx) => {
            const Icon = student.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 ${student.borderColor} relative group flex flex-col h-full`}
              >
                {/* Icon Badge */}
                <div
                  className={`w-14 h-14 rounded-xl ${student.lightBg} flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-7 h-7 ${student.textColor}`} />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-slate-900 mb-1">
                      {student.project}
                    </h4>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${student.lightBg} ${student.textColor}`}
                    >
                      {student.type}
                    </span>
                  </div>

                  <div className="relative mb-6">
                    <Quote
                      className="w-8 h-8 text-slate-100 absolute -top-2 -left-2 -z-10"
                      strokeWidth={3}
                    />
                    <p className="text-slate-600 font-medium leading-relaxed italic z-10 relative">
                      "{student.quote}"
                    </p>
                  </div>
                </div>

                {/* Author footer */}
                <div className="pt-6 mt-auto border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 leading-none">
                      {student.name}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      Age {student.age}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center flex justify-center">
          <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[hsl(218,42%,29%)] text-white font-bold rounded-full overflow-hidden transition-all hover:bg-[hsl(218,42%,15%)] focus:outline-none focus:ring-4 focus:ring-[hsl(218,42%,29%)]/30">
            <span className="relative z-10">See All Student Projects</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
