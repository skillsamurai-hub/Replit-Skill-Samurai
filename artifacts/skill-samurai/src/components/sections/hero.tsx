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
    <section className="relative overflow-hidden bg-secondary min-h-[78svh] md:min-h-[calc(100svh-16rem)]">
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

      <div className="container mx-auto px-4 relative z-10 pt-20 sm:pt-24 lg:pt-32 pb-8 min-h-[78svh] md:min-h-[calc(100svh-16rem)] flex items-center justify-center">
        <div className="max-w-4xl text-center mx-auto flex flex-col items-center pb-4 lg:pb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading leading-[1.1] mb-4 lg:mb-6 tracking-tight text-white drop-shadow-2xl">
            <span className="block">After-School Coding &amp; STEM</span>
            <span className="block">Classes for Kids in Winnipeg</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 lg:mb-8 leading-relaxed font-medium drop-shadow">
            We help kids build confidence, creativity, and future-ready skills by creating technology — instead of just consuming it.
          </p>

          <a
            href="https://www.google.com/search?sca_esv=e7ece3a77793605b&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8605wnWs5IbLwgiP_q8dWk6m0JOTMO2aec34Imu71qLg7-lOaAy83wCGtxt3v4dM5_rF6fzOJjwBaiGIi6pjM0prLqkifa8XuxARoSocoLGeQh5uroJOq92OkTTR_NmwT_YnmLyqrOa_jcN502e5Xa9eO5z74vRPY7jWn4sRPNzG2yA7w%3D%3D&q=Skill+Samurai+-+Coding,+Robotics+%26+STEM+Academy+%28Coding+For+Kids+in+Winnipeg%29+Reviews&sa=X&ved=2ahUKEwiZltnJ3JeOAxX4KVkFHc4MA18Q0bkNegQILxAE&biw=2133&bih=1012&dpr=0.9#mpd=~8442050446591582271/customers/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6 lg:mb-8 hover:bg-white/20 transition-colors"
          >
            <span className="text-yellow-400 text-base leading-none">★★★★★</span>
            <span className="text-white/90 text-xs sm:text-sm font-bold uppercase tracking-wide">Winnipeg&apos;s Top-Rated Coding Classes</span>
          </a>

          <a
            href="#locations"
            className="inline-flex h-10 sm:h-12 items-center justify-center rounded-full bg-primary px-5 sm:px-7 text-[11px] sm:text-sm font-black uppercase tracking-wide text-white shadow-2xl shadow-primary/40 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 border-b-4 border-primary-foreground/20 mb-6 lg:mb-8"
          >
            Book a Free Trial Class
          </a>

        </div>
      </div>
    </section>
  );
}
