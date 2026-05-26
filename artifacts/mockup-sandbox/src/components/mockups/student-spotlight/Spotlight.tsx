import { Star, Code2, Gamepad2, Rocket, ArrowRight, Trophy } from "lucide-react";

const featured = {
  name: "Ethan",
  age: 11,
  location: "North East",
  project: "Haunted Maze",
  projectType: "Roblox Game",
  description:
    "Ethan spent 6 weeks designing and scripting his own Roblox horror maze complete with jump scares, a leaderboard, and custom sound effects. Over 200 players have visited his game.",
  quote:
    "I didn't just want to play games anymore — I wanted to make them. Now I have friends from school playing something I actually built.",
  badge: "Game Developer",
  color: "#E91E8C",
  weeks: 6,
};

const spotlights = [
  {
    name: "Sofia",
    age: 14,
    project: "Study Timer App",
    projectType: "Python App",
    icon: Code2,
    quote: "My teachers noticed I started coding instead of scrolling. That said everything.",
    color: "#F59100",
    badge: "Python Dev",
  },
  {
    name: "Marcus",
    age: 9,
    project: "Space Shooter",
    projectType: "Scratch Game",
    icon: Gamepad2,
    quote: "I made a game my whole class plays at lunch. It's the best feeling ever.",
    color: "#E91E8C",
    badge: "Game Creator",
  },
  {
    name: "Priya",
    age: 16,
    project: "Portfolio Website",
    projectType: "HTML/CSS/JS",
    icon: Rocket,
    quote: "I put it on my college application. My counsellor was really impressed.",
    color: "#2D5086",
    badge: "Web Dev",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function Spotlight() {
  return (
    <section
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "hsl(218 42% 29%)" }}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Outfit:wght@700;800;900&display=swap"
      />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(233,30,140,0.18) 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{ background: "rgba(233,30,140,0.12)", borderColor: "rgba(233,30,140,0.3)", color: "#E91E8C" }}
          >
            <Trophy className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Student Spotlight</span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-black uppercase leading-tight mb-4"
            style={{ fontFamily: "'Outfit', sans-serif", color: "#fff" }}
          >
            KIDS WHO BUILD
            <span style={{ color: "#E91E8C" }}> REAL THINGS</span>
          </h2>
          <p className="text-white/70 text-lg font-medium max-w-xl mx-auto">
            Every week, Skill Samurai students ship projects they're proud of. Here are a few who blew us away.
          </p>
        </div>

        <div
          className="rounded-3xl p-8 md:p-10 mb-8 flex flex-col md:flex-row gap-8 items-center"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          <div className="flex-shrink-0">
            <div
              className="w-48 h-48 rounded-2xl flex items-center justify-center relative"
              style={{ background: "linear-gradient(135deg, rgba(233,30,140,0.3), rgba(245,145,0,0.3))", border: "2px solid rgba(233,30,140,0.4)" }}
            >
              <div className="text-center">
                <div className="text-6xl mb-2">🎮</div>
                <div className="text-white/60 text-xs font-bold uppercase tracking-wider">Project Photo</div>
              </div>
              <div
                className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-white text-xs font-black uppercase tracking-wide"
                style={{ background: "#E91E8C" }}
              >
                Featured
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <span className="text-white font-black text-2xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {featured.name}, age {featured.age}
              </span>
              <span
                className="px-2 py-1 rounded-lg text-xs font-bold uppercase tracking-wide"
                style={{ background: "rgba(233,30,140,0.2)", color: "#E91E8C" }}
              >
                {featured.badge}
              </span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <Gamepad2 className="w-4 h-4" style={{ color: "#F59100" }} />
              <span className="font-bold text-white">{featured.project}</span>
              <span className="text-white/50 text-sm">— {featured.projectType}</span>
            </div>
            <p className="text-white/70 mb-5 leading-relaxed text-sm">{featured.description}</p>
            <blockquote
              className="rounded-2xl p-4 italic text-white/90 font-medium text-sm relative"
              style={{ background: "rgba(233,30,140,0.1)", borderLeft: "3px solid #E91E8C" }}
            >
              <span className="text-3xl leading-none absolute -top-1 left-3 text-pink-400 opacity-40">"</span>
              <span className="pl-4 block">{featured.quote}</span>
            </blockquote>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {spotlights.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${s.color}22` }}
                >
                  <s.icon className="w-5 h-5" style={{ color: s.color }} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{s.name}, age {s.age}</p>
                  <p className="text-white/50 text-xs">{s.project}</p>
                </div>
              </div>
              <Stars />
              <p className="text-white/65 text-sm italic mt-3 leading-relaxed">"{s.quote}"</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-sm uppercase tracking-wide text-white transition-all hover:scale-105"
            style={{ background: "#E91E8C", boxShadow: "0 8px 30px rgba(233,30,140,0.4)" }}
          >
            See More Student Projects
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-white/40 text-sm mt-3">New spotlights added every month</p>
        </div>
      </div>
    </section>
  );
}
