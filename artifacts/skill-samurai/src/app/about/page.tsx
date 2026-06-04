import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/components/sections/final-cta";
import { FadeIn } from "@/components/ui/fade-in";
import AboutHeroCta from "@/components/sections/about-hero-cta";

export const metadata: Metadata = {
  title: "About Skill Samurai Winnipeg | Kids Coding & STEM Academy",
  description:
    "Skill Samurai Winnipeg is an after-school coding & STEM academy built by parents, for parents. Two locations serving kids ages 6–18 across Winnipeg since 2023.",
  alternates: {
    canonical: "https://www.skillsamuraiwinnipeg.com/about",
  },
};

const stats = [
  { value: "146+", label: "Five-Star Google Reviews" },
  { value: "2", label: "Winnipeg Locations" },
  { value: "Ages 6–18", label: "Students Served" },
  { value: "Since 2023", label: "Serving Winnipeg Families" },
];

const values = [
  {
    title: "Real Projects, Not Busy Work",
    body: "Every student builds actual games, apps, websites, and AI experiments. They leave each class with something they made themselves — not a worksheet.",
  },
  {
    title: "Small Classes, Personal Attention",
    body: "We keep class sizes intentionally small so every student gets guidance tailored to their level, pace, and interests — not a one-size-fits-all lecture.",
  },
  {
    title: "The Skills Go Beyond Coding",
    body: "Coding teaches kids how to break big problems into small steps, persist when things go wrong, and think creatively. Those habits show up everywhere — not just on a laptop.",
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
    title: "We Meet Every Child Where They Are",
    body: "Six or sixteen, total beginner or self-taught — we start from where your child is today and keep the challenge just ahead of where they currently feel comfortable.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20 border-b border-secondary/10">
        <div className="absolute -top-40 -left-32 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-32 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <FadeIn>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Built by Parents, for Parents</p>
            <p className="text-secondary/40 font-semibold uppercase tracking-widest text-xs mb-5">An After-School Program with a Purpose</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-secondary leading-tight tracking-tight mb-6">
              We Were Parents Looking for the Same Thing You Are
            </h1>
            <p className="text-lg md:text-xl text-secondary/65 leading-relaxed max-w-2xl mx-auto mb-8">
              We started Skill Samurai Winnipeg as parents ourselves — searching for something that would turn our kids' time on screens into something we could actually feel good about. We couldn't find it. So we built it.
            </p>
            <AboutHeroCta />
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary border-b border-white/10 pb-16 md:pb-20 pt-12 md:pt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-xl">
            {stats.map((s) => (
              <div key={s.label} className="bg-secondary flex flex-col items-center justify-center py-8 md:py-10 px-4 md:px-6 text-center">
                <span className="text-3xl md:text-5xl font-black font-heading text-primary mb-2">{s.value}</span>
                <span className="text-xs md:text-sm font-semibold text-white/60 uppercase tracking-wider leading-snug">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Owners */}
      <section className="py-16 md:py-24 bg-white border-b border-secondary/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Meet the Owners</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-secondary leading-tight tracking-tight">
              We&apos;re Genesis &amp; Akil — and this started with our own kids.
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <FadeIn className="space-y-5 text-lg text-secondary/75 leading-relaxed">
              <p>
                We&apos;re parents to Evan (15) and Ava (5), and we proudly own two Skill Samurai locations here in Winnipeg.
              </p>
              <p>
                Like most parents, we wanted more for our kids than just endless screen time. When Evan was 8, he was deep into video games — but we knew he needed something more purposeful. At the time, there weren&apos;t any local programs for kids to learn coding. So Akil — who has a background in computer science and a big heart for helping kids — put together a simple coding curriculum using online resources.
              </p>
              <p className="font-semibold text-secondary">
                And that one decision changed everything.
              </p>
              <p>
                Evan went from playing games to building them. He started solving problems, thinking creatively, and for the first time, he was genuinely excited to learn. Watching that spark come alive in him was everything.
              </p>
            </FadeIn>

            <FadeIn delay={0.12} className="space-y-5 text-lg text-secondary/75 leading-relaxed">
              <p>
                With Akil&apos;s Computer Science background and Genesis&apos;s experience in sales, marketing, and growing businesses in tech, we launched Skill Samurai Winnipeg to help other kids find that same spark.
              </p>
              <p>
                Because the truth is — it&apos;s not just about coding. We&apos;re teaching kids how to be resourceful, how to think outside the box, and how to understand their own learning style. We help them build real confidence and skills they&apos;ll carry for life — whether they go into tech or not.
              </p>
              <p>
                As a mom with ADHD, Genesis knows how hard traditional classrooms can be. That&apos;s why we&apos;ve created something different — where kids can thrive being exactly who they are.
              </p>
              <p>
                We work with kids ages 6–18, helping them grow from curious beginners into capable creators — at their own pace, in a space where they feel seen, supported, and inspired.
              </p>
              <p className="font-semibold text-secondary">
                As parents, if we&apos;re investing every month in a program, we want to know it&apos;s leading somewhere. At Skill Samurai, it does.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-16 md:py-24 bg-white border-b border-secondary/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-12 md:mb-16">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Why Parents Choose Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-secondary leading-tight tracking-tight">
              There are other options.<br className="hidden md:block" /> Here's what makes us different.
            </h2>
            <p className="mt-5 text-lg text-secondary/65 max-w-2xl mx-auto">
              We help kids build confidence, creativity, and future-ready skills by creating technology — instead of just consuming it.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                label: "Kids actually look forward to class",
                detail: "Our hands-on, project-based format keeps kids genuinely excited — not just sitting through another screen session.",
              },
              {
                label: "Small class sizes with personalized support",
                detail: "Intentionally capped so every student gets real attention — not a one-size-fits-all lecture to a room of 30.",
              },
              {
                label: "Build confidence through real projects",
                detail: "Every student leaves class with something they made themselves — a game, app, or animation they're proud to show off.",
              },
              {
                label: "Coding, AI, robotics, and game development",
                detail: "A curriculum that keeps up with tech — so your child is always learning skills that are actually relevant today.",
              },
              {
                label: "Make friends with like-minded kids",
                detail: "A welcoming environment where kids bond over shared interests and build real friendships alongside real skills.",
              },
              {
                label: "Month-to-month, no long-term contracts",
                detail: "We earn your family's trust every single month — no lock-in, no pressure, no penalty for leaving.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="bg-secondary/5 rounded-2xl border border-secondary/10 p-6 md:p-7 h-full hover:shadow-md hover:border-primary/30 transition-all">
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center mb-4">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-secondary text-base md:text-lg mb-2">{item.label}</h3>
                  <p className="text-sm text-secondary/65 leading-relaxed">{item.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn>
              <img
                src="/images/student-headset.png"
                alt="Student coding at Skill Samurai Winnipeg"
                className="rounded-3xl shadow-2xl w-full object-cover object-[center_30%] aspect-[4/3]"
                loading="lazy"
                decoding="async"
              />
              <blockquote className="border-l-4 border-primary pl-5 mt-6">
                <p className="text-base text-secondary/70 italic leading-relaxed">
                  "Thanks to Skill Samurai, we've transformed screen time into valuable learning, and I feel so confident in the skills he's developing. Hudson looks forward to coding class every week and proudly shares his experiences with his friends and teachers."
                </p>
                <cite className="mt-2 block text-sm font-bold text-secondary not-italic">— Bria L., Skill Samurai Winnipeg parent</cite>
              </blockquote>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Why We Exist</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-secondary leading-tight tracking-tight mb-6">
                Where every class ends with something to show for it.
              </h2>
              <p className="text-lg text-secondary/75 leading-relaxed mb-5">
                As parents, we wanted a place where time on a screen actually built something: real skills, real confidence, real projects your child could point to and say "I made that."
              </p>
              <p className="text-lg text-secondary/75 leading-relaxed mb-8">
                At Skill Samurai Winnipeg, students spend their time <em>creating</em> — games, apps, animations, robots, AI projects — and walk out of every class with something tangible. The coding skills matter. But the persistence and problem-solving mindset they build? That travels with them everywhere.
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
      <section className="py-16 md:py-24 bg-secondary/5 border-y border-secondary/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-10 md:mb-14">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-secondary leading-tight tracking-tight">
              How we teach is as important<br className="hidden md:block" /> as what we teach.
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.07}>
                <div className="bg-white rounded-2xl border border-secondary/10 p-6 md:p-7 h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-black text-lg">{i + 1}</span>
                  </div>
                  <h3 className="font-heading font-bold text-secondary text-base md:text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-secondary/65 leading-relaxed">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-24 bg-white border-y border-secondary/10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <FadeIn>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Long-Term Goal</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-secondary leading-tight tracking-tight mb-6">
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
      <section className="py-16 md:py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <FadeIn>
            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Part of Something Bigger</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight mb-6">
              Global reach. Local roots.
            </h2>
            <p className="text-lg text-white/75 leading-relaxed mb-4 max-w-2xl mx-auto">
              With more than 20,000 students served across 7 countries, Skill Samurai brings a proven STEM and technology education program to families around the world.
            </p>
            <p className="text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
              Here in Winnipeg, we combine that global expertise with small class sizes, personalized support, and instructors who genuinely care about every student&apos;s success. As a locally owned and operated academy, we&apos;re proud to help Manitoba kids build confidence, creativity, and future-ready skills through coding, AI, robotics, and game development.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Reviews CTA */}
      <section className="py-16 md:py-20 bg-white border-b border-secondary/10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <FadeIn>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Don't Take Our Word For It</p>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-secondary leading-tight tracking-tight mb-5">
              146+ five-star reviews from Winnipeg families.
            </h2>
            <p className="text-lg text-secondary/70 mb-8">
              Read what local parents are saying about their child's experience at Skill Samurai Winnipeg.
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
