import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Code, Lightbulb, Rocket, Blocks } from "lucide-react";
import classroomPhoto from "@assets/IG_WINNIPEG_POST_1776405350952.png";
import classroomPhotoTwo from "@assets/IG_WINNIPEG_POST_6_1776404931683.png";

export default function ChildBenefits() {
  const benefits = [
    {
      icon: <Blocks className="h-8 w-8 text-white" />,
      title: "Critical thinking",
      desc: "They learn how to break big problems into smaller steps and solve them one piece at a time.",
      color: "bg-accent"
    },
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: "Focus",
      desc: "Coding helps kids stay engaged, follow through, and build attention on tasks that matter.",
      color: "bg-primary"
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Patience",
      desc: "They learn that mistakes are part of the process and that progress comes with practice.",
      color: "bg-secondary"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Confidence",
      desc: "When they build something real, they start believing they can tackle harder things too.",
      color: "bg-[#F59100]"
    },
    {
      icon: <Blocks className="h-8 w-8 text-white" />,
      title: "Communication",
      desc: "They learn to explain ideas clearly, ask for help, and work better with other kids.",
      color: "bg-accent"
    },
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: "Teamwork",
      desc: "Group projects help them listen, collaborate, and support each other through challenges.",
      color: "bg-primary"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Creativity",
      desc: "They get to imagine, design, and build their own ideas from scratch.",
      color: "bg-[#F59100]"
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Resilience",
      desc: "When something breaks, they learn how to try again, adjust, and keep going.",
      color: "bg-secondary"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-primary/5 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <FadeIn direction="right">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">For Your Child</h2>
              <h3 className="text-4xl md:text-6xl font-black font-heading uppercase leading-tight tracking-tight mb-8">
                <span className="text-secondary block">WHAT YOUR CHILD ACTUALLY</span>
                <span className="text-primary block">GETS OUT OF IT</span>
              </h3>
              <p className="text-xl text-secondary/80 mb-10 font-medium">
                We meet your child exactly where they're at. No experience needed. Just a structured, fun environment where playing on a tablet becomes learning that builds real skills they’ll use everywhere.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-5">
                {benefits.map((benefit, i) => (
                  <div key={i} className="bg-white rounded-[1.75rem] p-5 shadow-xl shadow-secondary/5 border-2 border-white hover:border-primary/20 transition-all hover:-translate-y-2 group">
                    <div className={`h-16 w-16 rounded-[1.25rem] flex items-center justify-center ${benefit.color} transition-transform group-hover:scale-110 mb-4 shadow-lg rotate-3 group-hover:-rotate-3`}>
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-bold font-heading text-secondary mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground font-medium">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
            <FadeIn direction="left" className="relative">
              <div className="grid gap-3 max-w-[520px] mx-auto">
                <div className="aspect-[4/3] rounded-[2.25rem] overflow-hidden shadow-2xl relative z-10 border-[10px] border-white bg-white rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <img
                    src={classroomPhoto}
                    alt="Children learning together in a classroom"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="aspect-[4/3] rounded-[2.25rem] overflow-hidden shadow-2xl relative z-10 border-[10px] border-white bg-white rotate-2 hover:rotate-0 transition-transform duration-500 md:ml-12">
                  <img
                    src={classroomPhotoTwo}
                    alt="Kids smiling while coding together"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              
              {/* Decorative blobs */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent rounded-full blur-[60px] opacity-60 z-0 animate-pulse"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary rounded-full blur-[60px] opacity-40 z-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="absolute top-1/2 -left-8 md:-left-12 -translate-y-1/2 bg-white rounded-[2rem] p-5 shadow-2xl z-20 border-[4px] border-muted animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-5xl">🚀</span>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-[2rem] p-5 shadow-2xl z-20 border-[4px] border-muted animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
                <span className="text-5xl">💡</span>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 h-px w-full bg-border/70" />
    </section>
  );
}