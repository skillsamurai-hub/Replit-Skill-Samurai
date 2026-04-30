import type { Metadata } from "next";
import React from "react";
import FinalCta from "@/components/sections/final-cta";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Skill Samurai Winnipeg",
  description:
    "Tips, guides, and insights for Winnipeg parents on coding, STEM, and raising future-ready kids.",
};

const posts = [
  {
    slug: "why-coding-is-the-new-literacy",
    title: "Why Coding Is the New Literacy — And Why Your Child Needs It Now",
    excerpt:
      "Reading and writing were once reserved for the elite. Today, coding is following the same path. Here's why getting your child started early is one of the best investments you'll ever make.",
    date: "April 22, 2025",
    readTime: "4 min read",
    tag: "Parent Guide",
    tagColor: "bg-primary/10 text-primary",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
  },
  {
    slug: "roblox-and-minecraft-gateway-to-real-coding",
    title: "Roblox & Minecraft: Gateway to Real Programming Skills",
    excerpt:
      "Kids already love these games — we use that passion to teach actual coding concepts like variables, loops, and logic. See how play-based learning accelerates skill development.",
    date: "March 10, 2025",
    readTime: "5 min read",
    tag: "STEM Learning",
    tagColor: "bg-accent/15 text-orange-700",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&q=80",
  },
  {
    slug: "screen-time-vs-productive-screen-time",
    title: "Screen Time vs. Productive Screen Time: What Every Parent Should Know",
    excerpt:
      "Not all screens are created equal. Discover the difference between passive consumption and active creation — and how coding classes flip the script on your child's device time.",
    date: "February 3, 2025",
    readTime: "3 min read",
    tag: "Parent Guide",
    tagColor: "bg-primary/10 text-primary",
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=800&q=80",
  },
  {
    slug: "stem-careers-winnipeg-kids",
    title: "The Fastest-Growing Careers Are Tech — Is Your Winnipeg Kid Ready?",
    excerpt:
      "Software, AI, cybersecurity, and robotics jobs are exploding across Canada. We break down the career landscape and how early STEM education puts kids ahead of the curve.",
    date: "January 15, 2025",
    readTime: "6 min read",
    tag: "Future Ready",
    tagColor: "bg-secondary/10 text-secondary",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  },
  {
    slug: "building-confidence-through-coding",
    title: "Building Confidence, Resilience, and Problem-Solving Through Code",
    excerpt:
      "Debugging a program teaches kids that failure is a step, not a destination. Learn how our students develop a growth mindset that carries over into every subject at school.",
    date: "December 5, 2024",
    readTime: "4 min read",
    tag: "Child Development",
    tagColor: "bg-accent/15 text-orange-700",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    slug: "what-age-should-kids-start-coding",
    title: "What Age Should Kids Start Coding? (Hint: Sooner Than You Think)",
    excerpt:
      "We answer the #1 question parents ask us. From our youngest 6-year-old Roblox builders to our 17-year-old JavaScript developers, there's a right time — and it might be now.",
    date: "November 18, 2024",
    readTime: "4 min read",
    tag: "Parent Guide",
    tagColor: "bg-primary/10 text-primary",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  },
  {
    slug: "ai-robotics-kids-winnipeg",
    title: "AI Is Already Here — Here's How We're Preparing Winnipeg Kids for It",
    excerpt:
      "Artificial intelligence will reshape every industry in your child's lifetime. At Skill Samurai, we introduce AI concepts early so kids grow up as creators — not just consumers — of this technology.",
    date: "October 30, 2024",
    readTime: "5 min read",
    tag: "Future Ready",
    tagColor: "bg-secondary/10 text-secondary",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
  },
  {
    slug: "girls-in-stem-closing-the-gap",
    title: "Girls in STEM: Why We're Passionate About Closing the Gender Gap",
    excerpt:
      "Women make up just 25% of Canada's tech workforce. We're proud to serve families raising the next generation of female engineers, developers, and innovators — and we know how to keep girls engaged.",
    date: "September 14, 2024",
    readTime: "4 min read",
    tag: "Child Development",
    tagColor: "bg-accent/15 text-orange-700",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
  },
  {
    slug: "coding-helps-kids-at-school",
    title: "How Learning to Code Makes Kids Better at Math, Reading, and Science",
    excerpt:
      "Coding isn't just a tech skill — it's a thinking skill. Studies show that students who learn to code improve in logical reasoning, math scores, and reading comprehension. Here's the science.",
    date: "August 5, 2024",
    readTime: "5 min read",
    tag: "STEM Learning",
    tagColor: "bg-accent/15 text-orange-700",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  },
  {
    slug: "summer-coding-camp-winnipeg",
    title: "Why Summer Is the Best Time to Start Coding Classes",
    excerpt:
      "No homework, no rush — summer gives kids the mental space to explore something new. See why families across Winnipeg use the break to give their child a massive head start in tech.",
    date: "July 1, 2024",
    readTime: "3 min read",
    tag: "Parent Guide",
    tagColor: "bg-primary/10 text-primary",
    image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=800&q=80",
  },
  {
    slug: "is-coding-class-worth-the-cost",
    title: "Is a Coding Class Worth the Cost? An Honest Answer for Winnipeg Parents",
    excerpt:
      "Between hockey, dance, and tutoring, budgets are tight. We break down exactly what your child gains from a month of classes — and why most parents tell us it's the highest-value activity their kid does.",
    date: "June 12, 2024",
    readTime: "4 min read",
    tag: "Parent Guide",
    tagColor: "bg-primary/10 text-primary",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-secondary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <FadeIn>
            <p className="text-center text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Skill Samurai Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center leading-tight mb-4">
              Resources for STEM-Forward<br className="hidden sm:block" /> Winnipeg Families
            </h1>
            <p className="text-center text-white/70 max-w-xl mx-auto text-lg">
              Tips, guides, and insights to help your child thrive in a tech-driven world.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 60}>
                <article className="group flex flex-col rounded-3xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className={`absolute top-3 left-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${post.tagColor}`}>
                      <Tag className="h-3 w-3" />
                      {post.tag}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-secondary leading-snug mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-5">
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
                        Read article <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <p className="text-center text-muted-foreground text-sm mt-16">
              Follow us on Instagram and Facebook for the latest tips and updates.
            </p>
          </FadeIn>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
