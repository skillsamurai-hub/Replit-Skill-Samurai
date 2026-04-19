import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Code, Lightbulb, Rocket, Blocks } from "lucide-react";
import classroomPhoto from "@assets/IG_WINNIPEG_POST_1776405350952.png";
import classroomPhotoTwo from "@assets/IG_WINNIPEG_POST_5_(20)_1776481698162.png";
import classroomPhotoThree from "@assets/IG_WINNIPEG_POST_6_1776404931683.png";

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
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Confidence",
      desc: "When they build something real, they start believing they can tackle harder things too.",
      color: "bg-[#F59100]"
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
    <section className="py-20 md:py-32 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            <FadeIn direction="right">
              <h2 className="text-primary font-bold tracking-[0.28em] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
                For Your Child
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-[0.95] tracking-tight max-w-xl text-secondary">
                <span className="block">WHAT YOUR CHILD</span>
                <span className="block text-primary">GETS OUT OF IT</span>
              </h3>
              <p className="mt-5 sm:mt-6 text-lg sm:text-xl text-secondary/80 font-medium max-w-xl leading-relaxed">
                We meet your child exactly where they're at. No experience needed. Just a structured, fun environment where playing on a laptop becomes learning that builds real skills they’ll use everywhere.
              </p>
            </FadeIn>

            <div className="mt-8 grid sm:grid-cols-2 gap-4 sm:gap-5">
              {benefits.map((benefit, i) => (
                <FadeIn key={i} delay={i * 0.08} direction="up">
                  <div className="bg-white rounded-[1.75rem] p-5 shadow-xl shadow-secondary/5 border-2 border-white hover:border-primary/20 transition-all hover:-translate-y-2 group h-full">
                    <div className={`h-14 w-14 rounded-[1.1rem] flex items-center justify-center ${benefit.color} transition-transform group-hover:scale-110 mb-4 shadow-lg rotate-3 group-hover:-rotate-3`}>
                      {benefit.icon}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold font-heading text-secondary mb-2 leading-snug">
                      {benefit.title}
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn direction="left" className="relative lg:pt-6">
            <div className="grid gap-4 max-w-[560px] mx-auto">
              <div className="aspect-[4/3] rounded-[2.25rem] overflow-hidden shadow-2xl relative z-10 border-[10px] border-white bg-white rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <img
                  src={classroomPhoto}
                  alt="Children learning together in a classroom"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="aspect-[4/3] rounded-[2.25rem] overflow-hidden shadow-2xl relative z-10 border-[10px] border-white bg-white rotate-2 hover:rotate-0 transition-transform duration-500 lg:ml-14">
                <img
                  src={classroomPhotoTwo}
                  alt="Children using headphones and laptops in class"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="aspect-[4/3] rounded-[2.25rem] overflow-hidden shadow-2xl relative z-10 border-[10px] border-white bg-white rotate-[-1deg] hover:rotate-0 transition-transform duration-500 md:ml-6 lg:ml-24">
                <img
                  src={classroomPhotoThree}
                  alt="Kids smiling while coding together"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="absolute -top-10 -right-2 sm:-right-6 w-56 h-56 sm:w-64 sm:h-64 bg-secondary rounded-full blur-[60px] opacity-35 z-0 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-2 sm:-left-6 w-56 h-56 sm:w-64 sm:h-64 bg-accent rounded-full blur-[60px] opacity-30 z-0 animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="absolute top-1/2 -left-2 sm:-left-10 -translate-y-1/2 bg-white rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-5 shadow-2xl z-20 border-[4px] border-muted animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="text-4xl sm:text-5xl">🚀</span>
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-white rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-5 shadow-2xl z-20 border-[4px] border-muted animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
              <span className="text-4xl sm:text-5xl">💡</span>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-border/70" />
    </section>
  );
}