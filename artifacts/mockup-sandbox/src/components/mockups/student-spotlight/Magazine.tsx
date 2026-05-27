import React from 'react';
import { ArrowRight, Play, Box, Gamepad2, Code, MonitorPlay } from 'lucide-react';

export function Magazine() {
  const students = [
    {
      name: "Aria",
      age: 12,
      project: "Robot Picture Frame",
      category: "3D Design",
      quote: "I wanted to make something that was actually mine — and I did.",
      icon: <Box className="w-5 h-5" />,
      color: "bg-[hsl(335,84%,59%)]"
    },
    {
      name: "Jack",
      age: 7,
      project: "Froggy Flap",
      category: "Scratch Game",
      quote: "I made my own game and my frog is the main character!",
      icon: <Gamepad2 className="w-5 h-5" />,
      color: "bg-[#F59100]"
    },
    {
      name: "Owen",
      age: 8,
      project: "Dino Defense",
      category: "Game Design",
      quote: "I finally finished my game. Showing it to everyone was really fun.",
      icon: <MonitorPlay className="w-5 h-5" />,
      color: "bg-[hsl(218,42%,29%)]"
    },
    {
      name: "Jayrel",
      age: 16,
      project: "Interactive Robot Game",
      category: "Game Design",
      quote: "Built an interactive robot game using block-based coding.",
      icon: <Code className="w-5 h-5" />,
      color: "bg-[hsl(335,84%,59%)]"
    }
  ];

  return (
    <section className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 border-b-4 border-[hsl(218,42%,29%)] pb-8">
          <p className="text-[hsl(335,84%,59%)] font-bold tracking-widest text-sm uppercase mb-4">
            Student Spotlight
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-[hsl(218,42%,29%)] tracking-tight leading-none uppercase" style={{ fontFamily: '"Impact", "Arial Black", sans-serif' }}>
            Kids Who Build<br />Real Things
          </h2>
        </div>

        {/* Magazine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Hero Feature (Left) */}
          <div className="lg:col-span-7 group relative">
            <div className="absolute inset-0 bg-[hsl(218,42%,29%)] transform translate-x-4 translate-y-4 rounded-xl transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-300"></div>
            <div className="relative bg-white rounded-xl border-2 border-[hsl(218,42%,29%)] overflow-hidden h-full flex flex-col">
              {/* Image Area - Placeholder */}
              <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" 
                  alt="Student working" 
                  className="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-[#F59100] text-white px-3 py-1 text-xs font-black uppercase tracking-wider rounded-sm transform -rotate-2">
                    Featured
                  </span>
                  <span className="bg-[hsl(335,84%,59%)] text-white px-3 py-1 text-xs font-black uppercase tracking-wider rounded-sm transform rotate-1">
                    3D Modeling
                  </span>
                </div>
              </div>
              
              <div className="p-8 md:p-10 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-end justify-between mb-6">
                    <h3 className="text-4xl md:text-5xl font-black text-[hsl(218,42%,29%)] leading-none uppercase">
                      Kai, <span className="text-[hsl(335,84%,59%)]">12</span>
                    </h3>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Project</p>
                      <p className="text-lg font-black text-[hsl(218,42%,29%)]">Bob's Burgers 3D Build</p>
                    </div>
                  </div>
                  
                  <blockquote className="border-l-4 border-[#F59100] pl-6 my-8">
                    <p className="text-2xl md:text-3xl font-serif text-[hsl(218,42%,29%)] italic leading-tight">
                      "I got to build something I actually love. Presenting it to everyone made me realize how much I really learned."
                    </p>
                  </blockquote>
                </div>

                <div className="pt-6 border-t-2 border-gray-100 flex justify-between items-center mt-auto">
                  <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-[hsl(218,42%,29%)] hover:text-[hsl(335,84%,59%)] transition-colors group/btn">
                    <div className="w-10 h-10 rounded-full bg-[hsl(218,42%,29%)] flex items-center justify-center text-white group-hover/btn:bg-[hsl(335,84%,59%)] transition-colors">
                      <Play className="w-4 h-4 fill-current" />
                    </div>
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Story Stack (Right) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <h4 className="text-xl font-black text-[hsl(218,42%,29%)] uppercase tracking-wider border-b-2 border-black pb-2 mb-4">
              More Stories
            </h4>
            
            <div className="flex flex-col gap-6 flex-grow">
              {students.map((student, idx) => (
                <div key={idx} className="group flex gap-5 items-start bg-white p-5 rounded-lg border border-gray-200 hover:border-[hsl(218,42%,29%)] hover:shadow-lg transition-all cursor-pointer">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white shrink-0 shadow-inner ${student.color}`}>
                    {student.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-baseline mb-1">
                      <h5 className="font-black text-lg text-[hsl(218,42%,29%)] uppercase">
                        {student.name}, <span className="text-gray-500 text-sm">{student.age}</span>
                      </h5>
                      <span className="text-xs font-bold text-[hsl(335,84%,59%)] bg-pink-50 px-2 py-0.5 rounded">
                        {student.category}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-gray-800 mb-2">{student.project}</p>
                    <p className="text-sm text-gray-600 italic font-serif border-l-2 border-gray-300 pl-3">
                      "{student.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 flex justify-end">
              <a href="#projects" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[hsl(335,84%,59%)] hover:text-[#F59100] transition-colors group">
                See All Student Projects 
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
