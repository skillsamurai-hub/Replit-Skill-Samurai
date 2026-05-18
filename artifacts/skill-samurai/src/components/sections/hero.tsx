"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoSrc(
        "https://player.vimeo.com/video/799591701?background=1&autoplay=1&loop=1&muted=1&autopause=0"
      );
      // Fallback: show video after 4s even if onLoad never fires
      setTimeout(() => setVideoReady(true), 4000);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-secondary min-h-[78svh] md:min-h-[calc(100svh-16rem)]">
      <div className="absolute inset-0 z-0">
        {/* Background image — always visible, acts as placeholder on desktop while video loads */}
        <Image
          src="/images/hero-coding.webp"
          alt="Students learning to code at Skill Samurai Winnipeg"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />

        {/* Video overlay — desktop only, fades in over the image */}
        {videoSrc && (
          <iframe
            src={videoSrc}
            title="Skill Samurai students at work"
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute pointer-events-none"
            onLoad={() => setVideoReady(true)}
            style={{
              border: 0,
              top: "50%",
              left: "50%",
              width: "max(100%, calc(100% * 16 / 9))",
              height: "max(100%, calc(100% * 9 / 16))",
              minWidth: "177.77%",
              minHeight: "56.25vw",
              transform: "translate(-50%, -50%) translateZ(0)",
              willChange: "transform",
              backfaceVisibility: "hidden",
              opacity: videoReady ? 1 : 0,
              transition: "opacity 1.4s ease",
            }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/85 via-neutral-900/60 to-neutral-900/85" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 sm:pt-24 lg:pt-32 pb-8 min-h-[78svh] md:min-h-[calc(100svh-16rem)] flex items-center justify-center">
        <div className="max-w-4xl text-center mx-auto flex flex-col items-center pb-4 lg:pb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading leading-[1.1] mb-4 lg:mb-6 tracking-tight text-white drop-shadow-2xl">
            <span className="block">After-School Coding &amp; STEM</span>
            <span className="block">Classes for Kids in Winnipeg</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 lg:mb-8 leading-relaxed font-medium drop-shadow">
            Transform screen time into valuable skills that will shape your child&apos;s future.
          </p>

          <a
            href="#locations"
            className="inline-flex h-10 sm:h-12 items-center justify-center rounded-full bg-primary px-5 sm:px-7 text-[11px] sm:text-sm font-black uppercase tracking-wide text-white shadow-2xl shadow-primary/40 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 border-b-4 border-primary-foreground/20 mb-6 lg:mb-8"
          >
            START YOUR CHILD&apos;S JOURNEY
          </a>

          <div className="flex items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/skillsamuraiwinnipeg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all hover:scale-110"
              style={{ background: "radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/skillsamuraiwinnipeg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all hover:scale-110"
              style={{ backgroundColor: "#1877F2" }}
            >
              <Facebook className="h-5 w-5 fill-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
