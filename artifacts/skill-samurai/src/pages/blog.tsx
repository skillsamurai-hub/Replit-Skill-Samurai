import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FinalCta from "@/components/sections/final-cta";
import { FadeIn } from "@/components/ui/fade-in";
import { Link } from "wouter";
import { ArrowRight, Clock, Tag } from "lucide-react";

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
];

export default function BlogPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
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

        {/* Posts grid */}
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

            {/* Coming soon note */}
            <FadeIn delay={400}>
              <p className="text-center text-muted-foreground text-sm mt-16">
                More articles coming soon — follow us on social media to stay updated.
              </p>
            </FadeIn>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
