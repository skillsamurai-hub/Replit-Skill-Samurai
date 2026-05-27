import React from "react";
import { ChevronLeft, ChevronRight, Quote, Instagram, Box, Code, Gamepad2 } from "lucide-react";

export function Carousel() {
  const students = [
    {
      name: "Kai",
      age: 12,
      project: "Bob's Burgers 3D Build",
      type: "3D Modeling",
      quote: "I got to build something I actually love.",
      color: "bg-[#E9367F]",
      icon: <Box className="w-6 h-6 text-white" />,
      instagram: true,
    },
    {
      name: "Aria",
      age: 12,
      project: "Robot Picture Frame",
      type: "3D Design",
      quote: "I wanted to make something that was actually mine.",
      color: "bg-[#F59100]",
      icon: <Box className="w-6 h-6 text-white" />,
      instagram: false,
    },
    {
      name: "Jack",
      age: 7,
      project: "Froggy Flap",
      type: "Scratch Game",
      quote: "I made my own game and my frog is the main character!",
      color: "bg-[#4364A1]",
      icon: <Code className="w-6 h-6 text-white" />,
      instagram: false,
    },
    {
      name: "Owen",
      age: 8,
      project: "Dino Defense",
      type: "Game Design",
      quote: "I finally finished my game. Showing it to everyone was really fun.",
      color: "bg-[#E9367F]",
      icon: <Gamepad2 className="w-6 h-6 text-white" />,
      instagram: false,
    },
    {
      name: "Jayrel",
      age: 16,
      project: "Interactive Robot Game",
      type: "Game Design",
      quote: "Built an interactive robot game using block-based coding.",
      color: "bg-[#F59100]",
      icon: <Gamepad2 className="w-6 h-6 text-white" />,
      instagram: true,
    },
  ];

  return (
    <section className="bg-[#2B4169] py-20 px-4 md:px-8 overflow-hidden font-sans min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="flex justify-between items-end mb-8 md:mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">
              STUDENT SPOTLIGHT
            </h2>
            <p className="text-blue-200 text-lg md:text-xl max-w-xl">
              See what our amazing students are building each week.
            </p>
          </div>
          <div className="hidden md:flex gap-3">
            <button className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#E9367F] flex items-center justify-center text-white hover:bg-[#d02c6d] transition-colors shadow-lg">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Strip */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {students.map((student, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-[320px] w-[280px] md:w-[320px] shrink-0 bg-white rounded-3xl overflow-hidden shadow-xl snap-start flex flex-col h-[400px] transform hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Card Banner */}
              <div className={`${student.color} h-24 flex items-center justify-center relative`}>
                <div className="absolute -bottom-6 w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-md rotate-3">
                  <div className={`${student.color} w-12 h-12 rounded-xl flex items-center justify-center -rotate-3`}>
                    {student.icon}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="px-6 pt-10 pb-6 flex-1 flex flex-col">
                <div className="flex items-end gap-2 mb-1">
                  <h3 className="text-2xl font-black text-gray-900 leading-none">
                    {student.name}
                  </h3>
                  <span className="text-gray-500 font-bold text-sm mb-0.5">
                    Age {student.age}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-[#2B4169] font-bold text-lg leading-tight">
                    {student.project}
                  </p>
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    {student.type}
                  </p>
                </div>

                <div className="mt-auto relative">
                  <Quote className="w-8 h-8 text-gray-100 absolute -top-2 -left-2 z-0" />
                  <p className="text-gray-600 font-medium relative z-10 italic">
                    "{student.quote}"
                  </p>
                </div>

                {student.instagram && (
                  <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
                    <button className="text-[#E9367F] hover:text-[#d02c6d] transition-colors flex items-center gap-1.5 font-bold text-sm">
                      <Instagram className="w-4 h-4" />
                      View Project
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-4">
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4].map((dot) => (
              <div
                key={dot}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  dot === 0 ? "w-8 bg-[#F59100]" : "bg-white/30 hover:bg-white/50 cursor-pointer"
                }`}
              />
            ))}
          </div>

          <button className="bg-white text-[#2B4169] px-8 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 duration-200">
            See All Student Projects
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
