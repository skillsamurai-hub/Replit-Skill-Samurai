import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import FinalCta from "@/components/sections/final-cta";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { posts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Skill Samurai Winnipeg",
  description:
    "Tips, guides, and insights for Winnipeg parents on coding, STEM, and raising future-ready kids.",
};

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
              <FadeIn key={post.slug} delay={i * 0.06}>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col rounded-3xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-xl transition-all duration-300 h-full">
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
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
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
