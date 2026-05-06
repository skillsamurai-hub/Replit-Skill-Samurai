import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react";
import { posts, getPostBySlug } from "@/lib/blog-posts";
import FinalCta from "@/components/sections/final-cta";
import { FadeIn } from "@/components/ui/fade-in";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Skill Samurai Winnipeg`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const paragraphs = post.content.split("\n\n");

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary pt-16 pb-0 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${post.tagColor}`}>
                <Tag className="h-3 w-3" />
                {post.tag}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-white/50">
                <Calendar className="h-3 w-3" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-white/50">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-10 max-w-3xl">
              {post.title}
            </h1>
          </FadeIn>
        </div>
        {/* Hero image */}
        <div className="container mx-auto px-4">
          <FadeIn delay={100}>
            <div className="rounded-t-3xl overflow-hidden max-w-4xl mx-auto h-64 md:h-80">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-2xl mx-auto prose-custom">
            {paragraphs.map((block, i) => {
              const trimmed = block.trim();
              if (!trimmed) return null;

              // Bold heading lines (e.g. **Heading**)
              if (trimmed.startsWith("**") && trimmed.endsWith("**") && !trimmed.slice(2, -2).includes("**")) {
                return (
                  <h2 key={i} className="text-xl md:text-2xl font-bold text-secondary mt-10 mb-3">
                    {trimmed.slice(2, -2)}
                  </h2>
                );
              }

              // Bullet lists
              if (trimmed.startsWith("- ")) {
                const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="my-4 space-y-2 pl-5">
                    {items.map((item, j) => (
                      <li key={j} className="text-base text-muted-foreground leading-relaxed list-disc">
                        {item.slice(2)}
                      </li>
                    ))}
                  </ul>
                );
              }

              // Inline bold within paragraphs
              const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} className="text-base md:text-lg text-muted-foreground leading-relaxed my-5">
                  {parts.map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={j} className="font-bold text-secondary">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}
          </article>

          {/* Back link */}
          <div className="max-w-2xl mx-auto mt-14 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
