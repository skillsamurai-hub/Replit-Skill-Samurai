import { Star, Code2, Gamepad2, Rocket, ArrowRight, Trophy } from "lucide-react";

const PRIMARY = "hsl(335 84% 59%)";
const SECONDARY = "hsl(218 42% 29%)";
const ORANGE = "#F59100";
const BG = "hsl(204 35% 96%)";

const featured = {
  name: "Ethan",
  age: 11,
  project: "Haunted Maze",
  projectType: "Roblox Game",
  description:
    "Ethan spent 6 weeks designing and scripting his own Roblox horror maze — complete with jump scares, a leaderboard, and custom sound effects. Over 200 players have visited his game.",
  quote:
    "I didn't just want to play games anymore — I wanted to make them. Now I have friends from school playing something I actually built.",
};

const spotlights = [
  {
    name: "Sofia",
    age: 14,
    project: "Study Timer App",
    projectType: "Python App",
    icon: Code2,
    iconColor: ORANGE,
    quote: "My teachers noticed I started coding instead of scrolling. That said everything.",
  },
  {
    name: "Marcus",
    age: 9,
    project: "Space Shooter",
    projectType: "Scratch Game",
    icon: Gamepad2,
    iconColor: PRIMARY,
    quote: "I made a game my whole class plays at lunch. It's the best feeling ever.",
  },
  {
    name: "Priya",
    age: 16,
    project: "Portfolio Website",
    projectType: "HTML/CSS/JS",
    icon: Rocket,
    iconColor: SECONDARY,
    quote: "I put it on my college application. My counsellor was really impressed.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5" style={{ fill: "#FBBF24", color: "#FBBF24" }} />
      ))}
    </div>
  );
}

export function Spotlight() {
  return (
    <section
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: BG,
      }}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Outfit:wght@700;800;900&display=swap"
      />

      <div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: `${PRIMARY}1a`, filter: "blur(80px)" }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: `${ORANGE}26`, filter: "blur(80px)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        <div className="text-center mb-14">
          <p
            className="text-sm font-bold uppercase tracking-wider mb-3"
            style={{ color: "hsl(204 32% 62%)" }}
          >
            Student Spotlight
          </p>

          <h2
            className="text-5xl font-black uppercase leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="block mb-1" style={{ color: SECONDARY }}>KIDS WHO BUILD</span>
            <span style={{ color: PRIMARY }}>REAL THINGS</span>
          </h2>
          <p className="text-base font-medium max-w-xl mx-auto" style={{ color: `${SECONDARY}b3` }}>
            Every week, Skill Samurai students ship projects they're proud of.
            <br />Here are a few who blew us away.
          </p>
        </div>

        <div
          className="rounded-3xl p-8 mb-8 flex flex-col md:flex-row gap-8 items-center"
          style={{
            background: "#ffffff",
            border: `1px solid ${SECONDARY}1a`,
            boxShadow: "0 4px 24px rgba(45,80,134,0.08)",
          }}
        >
          <div className="flex-shrink-0">
            <div
              className="w-44 h-44 rounded-2xl flex flex-col items-center justify-center relative"
              style={{
                background: `linear-gradient(135deg, ${PRIMARY}22, ${ORANGE}22)`,
                border: `2px dashed ${PRIMARY}55`,
              }}
            >
              <div className="text-5xl mb-1">🎮</div>
              <div
                className="text-[10px] font-bold uppercase tracking-wider"
                style={{ color: `${SECONDARY}80` }}
              >
                Student Photo
              </div>
              <div
                className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-wide"
                style={{ background: PRIMARY, boxShadow: `0 4px 12px ${PRIMARY}55` }}
              >
                ⭐ Featured
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span
                className="font-black text-2xl"
                style={{ fontFamily: "'Outfit', sans-serif", color: SECONDARY }}
              >
                {featured.name}, age {featured.age}
              </span>
              <span
                className="px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wide"
                style={{ background: `${PRIMARY}15`, color: PRIMARY }}
              >
                Game Developer
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="w-4 h-4 flex-shrink-0" style={{ color: ORANGE }} />
              <span className="font-bold text-sm" style={{ color: SECONDARY }}>{featured.project}</span>
              <span className="text-sm" style={{ color: `${SECONDARY}60` }}>— {featured.projectType}</span>
            </div>

            <p className="text-sm leading-relaxed mb-5" style={{ color: `${SECONDARY}99` }}>
              {featured.description}
            </p>

            <blockquote
              className="rounded-2xl p-4 text-sm font-medium italic relative"
              style={{
                background: `${PRIMARY}0d`,
                borderLeft: `3px solid ${PRIMARY}`,
                color: `${SECONDARY}cc`,
              }}
            >
              <span
                className="text-3xl leading-none absolute top-1 left-3 opacity-30"
                style={{ color: PRIMARY }}
              >
                "
              </span>
              <span className="pl-4 block">{featured.quote}</span>
            </blockquote>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {spotlights.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl p-6"
              style={{
                background: "#ffffff",
                border: `1px solid ${SECONDARY}15`,
                boxShadow: "0 2px 12px rgba(45,80,134,0.06)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${s.iconColor}18` }}
                >
                  <s.icon className="w-5 h-5" style={{ color: s.iconColor }} />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: SECONDARY }}>
                    {s.name}, age {s.age}
                  </p>
                  <p className="text-xs font-medium" style={{ color: `${SECONDARY}70` }}>
                    {s.project}
                  </p>
                </div>
              </div>
              <Stars />
              <p
                className="text-sm italic mt-3 leading-relaxed"
                style={{ color: `${SECONDARY}80` }}
              >
                "{s.quote}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-sm uppercase tracking-wide text-white transition-all"
            style={{
              background: PRIMARY,
              fontFamily: "'Outfit', sans-serif",
              boxShadow: `0 8px 30px ${PRIMARY}40`,
            }}
          >
            See More Student Projects
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs font-medium mt-3" style={{ color: `${SECONDARY}60` }}>
            New spotlights added every month
          </p>
        </div>

      </div>
    </section>
  );
}
