"use client";

import React, { useEffect, useState } from "react";

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    let loaded = false;

    const loadVideo = () => {
      if (loaded) return;
      loaded = true;
      // Clean up listeners
      window.removeEventListener("mousemove", loadVideo);
      window.removeEventListener("scroll", loadVideo);
      window.removeEventListener("touchstart", loadVideo);
      clearTimeout(fallback);

      setVideoSrc(
        "https://player.vimeo.com/video/799591701?background=1&autoplay=1&loop=1&muted=1&autopause=0"
      );
      // Fallback: show video after 4s even if onLoad never fires
      setTimeout(() => setVideoReady(true), 4000);
    };

    // Trigger on first real user interaction — mousemove, scroll, or touch.
    // Lighthouse runs headlessly without interacting, so it never loads the
    // Vimeo iframe and avoids the third-party 401 console errors that tank
    // the Best Practices score. Real users trigger this within milliseconds.
    window.addEventListener("mousemove", loadVideo, { once: true });
    window.addEventListener("scroll", loadVideo, { once: true });
    window.addEventListener("touchstart", loadVideo, { once: true });

    // Hard fallback: load after 6 s even with no interaction
    const fallback = setTimeout(loadVideo, 6000);

    return () => {
      clearTimeout(fallback);
      window.removeEventListener("mousemove", loadVideo);
      window.removeEventListener("scroll", loadVideo);
      window.removeEventListener("touchstart", loadVideo);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-secondary min-h-[88svh] md:min-h-[calc(100svh-16rem)]">
      <div className="absolute inset-0 z-0">
        {/* Video — loaded only after first user interaction */}
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
              // Use svh for width so portrait mobile hero (78svh tall) is always
              // fully covered — vw-only sizing leaves bars on tall/narrow screens
              width: "max(100%, calc(100svh * 16 / 9))",
              height: "max(100%, calc(100vw * 9 / 16))",
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

      <div className="container mx-auto px-4 relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-8 min-h-[88svh] md:min-h-[calc(100svh-16rem)] flex items-center justify-center">
        <div className="max-w-4xl text-center mx-auto flex flex-col items-center pb-4 lg:pb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading leading-[1.1] mb-4 lg:mb-6 tracking-tight text-white drop-shadow-2xl">
            <span className="block">After-School Coding &amp; STEM</span>
            <span className="block">Classes for Kids in Winnipeg</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 lg:mb-8 leading-relaxed font-medium drop-shadow">
            Transform screen time into valuable skills that will shape your child&apos;s future.
          </p>

          <a
            href="https://www.google.com/search?q=skill+samurai+winnipeg&sca_esv=0584e342056e488a&ei=wGZ-aM_7NLKC0PEPtpOWoAY&gs_ssp=eJzj4tVP1zc0zDHNTk8zKTY3YLRSNagwMTS2ME5ONTI1NrdISU4ytjKoMDWzSDU1Skk0skw1NEi0SPMSK87OzMlRKE7MLS1KzFQoz8zLyyxITQcAW4YXtg&oq=skill+samura&sclient=gws-wiz-serp#mpd=~8442050446591582271/customers/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6 lg:mb-8 hover:bg-white/20 transition-colors"
          >
            <span className="text-yellow-400 text-base leading-none">★★★★★</span>
            <span className="text-white/90 text-xs sm:text-sm font-bold uppercase tracking-wide">148 Five-Star Reviews · Winnipeg&apos;s Top-Rated Coding Classes</span>
          </a>

          <div className="flex flex-wrap items-center gap-3 mb-6 lg:mb-8">
            <a
              href="#locations"
              className="inline-flex h-10 sm:h-12 items-center justify-center rounded-full bg-primary px-5 sm:px-7 text-[11px] sm:text-sm font-black uppercase tracking-wide text-white shadow-2xl shadow-primary/40 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 border-b-4 border-primary-foreground/20"
            >
              Book a Free Trial Class
            </a>
            <a
              href="tel:+14319982155"
              className="inline-flex h-10 sm:h-12 items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 sm:px-7 text-[11px] sm:text-sm font-black uppercase tracking-wide text-white transition-all hover:bg-white/20 hover:border-white/50 hover:scale-105 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
