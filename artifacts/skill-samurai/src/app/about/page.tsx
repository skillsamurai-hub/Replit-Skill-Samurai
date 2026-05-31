import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/components/sections/final-cta";
import { FadeIn } from "@/components/ui/fade-in";
import AboutHeroCta from "@/components/sections/about-hero-cta";

export const metadata: Metadata = {
  title: "About Us | Skill Samurai Winnipeg",
  description:
    "Skill Samurai Winnipeg is an after-school coding & STEM academy built by parents, for parents. Two locations serving kids ages 6–18 across Winnipeg since 2023.",
};

const stats = [
  { value: "160+", label: "Five-Star Google Reviews" },
  { value: "2", label: "Winnipeg Locations" },
  { value: "Ages 6–18", label: "Students Served" },
  { value: "Since 2023", label: "Serving Winnipeg Families" },
];

const values = [
  {
    title: "Real Skills, Not Just Concepts",
    body: "Every student builds actual projects — games, apps, websites, animations, and AI experiments. We measure success by what students create, not just what they memorize.",
  },
  {
    title: "Small Classes, Personal Attention",
    body: "We keep class sizes intentionally small so every student gets guidance tailored to their level, pace, and interests — not a one-size-fits-all lecture.",
  },
  {
    title: "Beyond Coding",
    body: "Coding is the vehicle, not the destination. Our students develop critical thinking, creativity, persistence, and communication skills that carry into every area of their lives.",
  },
  {
    title: "Safe, Screened, and Certified",
    body: "Every Coding Instructor undergoes background checks, child abuse registry checks, and structured training before stepping into a classroom. Your child's safety is never an afterthought.",
  },
  {
    title: "No Contracts, No Pressure",
    body: "Everything is month-to-month. We earn your family's trust every single month — through the quality of our teaching and the excitement your child brings home after class.",
  },
  {
    title: "Every Child Progresses",
    body: "Whether your child is six or sixteen, a total beginner or already building projects at home, we meet them exactly where they are and keep them challenged as they grow.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden pt-28 pb-20">
        <div className="absolute -top-40 -left-32 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-32 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <FadeIn>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Built by Parents, for Parents</p>
            <p className="text-white/50 font-semibold uppercase tracking-widest text-xs mb-5">An After-School Program with a Purpose</p>
            <h1 className="text-5xl md:text-6xl font-black font-heading text-white leading-tight tracking-tight mb-6">
              We Were Parents Looking for the Same Thing You Are
            </h1>
            <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto mb-8">
              We started Skill Samurai Winnipeg as parents ourselves — searching for something that would turn our kids' screen time into something we could actually feel good about. We couldn't find it. So we built it.
            </p>
            <AboutHeroCta />
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary border-t border-white/10 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-xl">
            {stats.map((s) => (
              <div key={s.label} className="bg-secondary flex flex-col items-center justify-center py-10 px-6 text-center">
                <span className="text-4xl md:text-5xl font-black font-heading text-primary mb-2">{s.value}</span>
                <span className="text-sm font-semibold text-white/60 uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <img
                src="/images/kids-collaborating.webp"
                alt="Students collaborating at Skill Samurai Winnipeg"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                decoding="async"
              />
              <blockquote className="border-l-4 border-primary pl-5 mt-6">
                <p className="text-base text-secondary/70 italic leading-relaxed">
                  "I am blown away with what the kids learn and are capable of creating… My son was enrolled in the 3-month program and hopes that the classes can be more than once a week."
                </p>
                <cite className="mt-2 block text-sm font-bold text-secondary not-italic">— Natasha P., Skill Samurai Winnipeg parent</cite>
              </blockquote>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Why We Exist</p>
              <h2 className="text-4xl md:text-5xl font-black font-heading text-secondary leading-tight tracking-tight mb-6">
                Screen time that builds something real.
              </h2>
              <p className="text-lg text-secondary/75 leading-relaxed mb-5">
                As parents, we saw our own kids spending hours in front of screens — consuming games, videos, and social media. We knew screens weren't going away. What we wanted was a place where that time actually built something: skills, confidence, a sense of achievement.
              </p>
              <p className="text-lg text-secondary/75 leading-relaxed mb-8">
                That's what Skill Samurai Winnipeg is. Students spend their screen time <em>creating</em> — games, apps, animations, robots, AI projects — and leave every class with something real to show for it.
              </p>
              <Link
                href="/#student-spotlight"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3 text-base font-bold text-white hover:bg-secondary/90 hover:scale-[1.02] active:scale-95 transition-all"
              >
                See Student Work →
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/5 border-y border-secondary/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-14">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-secondary leading-tight tracking-tight">
              How we teach is as important<br className="hidden md:block" /> as what we teach.
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.07}>
                <div className="bg-white rounded-2xl border border-secondary/10 p-7 h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-black text-lg">{i + 1}</span>
                  </div>
                  <h3 className="font-heading font-bold text-secondary text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-secondary/65 leading-relaxed">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-white border-y border-secondary/10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <FadeIn>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Long-Term Goal</p>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-secondary leading-tight tracking-tight mb-6">
              Every kid deserves access — not just the ones who can afford it.
            </h2>
            <p className="text-lg text-secondary/75 leading-relaxed mb-5">
              We believe coding and technology education shouldn't be a privilege. Every child — regardless of their family's income — deserves the chance to build real skills and discover what they're capable of.
            </p>
            <p className="text-lg text-secondary/75 leading-relaxed">
              We're working toward building a scholarship and free coding program for underserved kids in Winnipeg. It's a goal we're deeply committed to, and one that drives everything we do. The more families we serve, the closer we get.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Network */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <FadeIn>
            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Part of Something Bigger</p>
            <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight tracking-tight mb-6">
              Global reach. Local roots.
            </h2>
            <p className="text-lg text-white/75 leading-relaxed mb-4 max-w-2xl mx-auto">
              Skill Samurai is a trusted international brand with coding academies across Canada, Australia, New Zealand, and the United States. Our Winnipeg locations are proud to bring that proven, award-winning curriculum to Manitoba families.
            </p>
            <p className="text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
              You get the backing of a global network — and the personal care of a locally owned academy that genuinely knows your family.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Reviews CTA */}
      <section className="py-20 bg-white border-b border-secondary/10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <FadeIn>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Don't Take Our Word For It</p>
            <h2 className="text-4xl font-black font-heading text-secondary leading-tight tracking-tight mb-5">
              160+ five-star reviews from Winnipeg families.
            </h2>
            <p className="text-lg text-secondary/70 mb-8">
              Read what local parents are saying about their child's<br className="hidden sm:block" /> experience at Skill Samurai Winnipeg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.google.com/maps/place/Skill+Samurai+-+Coding,+Robotics+%26+STEM+Academy+(Coding+For+Kids+in+Winnipeg)/@49.9482295,-97.1391547,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-secondary px-7 py-3 text-base font-bold text-secondary hover:bg-secondary hover:text-white transition-all"
              >
                Read Google Reviews
              </a>
              <Link
                href="/#student-spotlight"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-base font-bold text-white hover:bg-primary/90 hover:scale-[1.02] transition-all"
              >
                See Student Projects
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
