import React from "react";
import { Star } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

type Review = {
  name: string;
  initials: string;
  color: string;
  weeksAgo: string;
  rating: number;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Christine Remoquillo",
    initials: "CR",
    color: "bg-primary",
    weeksAgo: "18 weeks ago",
    rating: 5,
    text: "With a few sessions in my son Isaiah felt so comfortable and at ease. The Skill Samurai team have been super helpful and patient. It's refreshing to see him use his creativity and imagination to program fun games! The skills that he's learning will serve him well in the long run and help build on his self-confidence. Highly recommend the Skill Samurai Winnipeg program; Akil, Genesis and the entire team are the absolute best!",
  },
  {
    name: "Jennifer Grayda",
    initials: "JG",
    color: "bg-secondary",
    weeksAgo: "25 weeks ago",
    rating: 5,
    text: "My kids have been coming for almost two months now, and they absolutely love it! As a homeschooling family, I really appreciate how Skill Samurai makes learning feel like play. What I love most is how Skill Samurai sneaks in so many different subjects without the kids feeling like they're doing \"work\". They just think they're playing games! The staff is amazing, patient, and encouraging, and the location is super convenient with plenty of parking. Highly recommend for any parent who wants to make learning fun and meaningful.",
  },
  {
    name: "Olga Talmatska",
    initials: "OT",
    color: "bg-secondary",
    weeksAgo: "27 weeks ago",
    rating: 5,
    text: "My son has been attending these computer classes for over a year, and he really enjoys them! The atmosphere is very welcoming, and the instructors provide an individual approach to every child. There are many interesting directions to choose from — coding, robotics, STEM, and game development. My son has already completed more than three programs and continues to learn with great interest. I love that these classes help him focus, think critically, and be creative while doing something he truly enjoys. The schedule and location are convenient, and the price is affordable. I highly recommend this program for kids in Winnipeg!",
  },
  {
    name: "Tanvir Soor",
    initials: "TS",
    color: "bg-accent text-secondary",
    weeksAgo: "27 weeks ago",
    rating: 5,
    text: "At first, I wasn't sure how my child would take to coding, but these classes have been amazing! The teachers are so encouraging and make every session exciting. It's wonderful to see my child gaining confidence while learning valuable skills for the future. Genesis is amazing and super helpful. We would highly recommend anyone wanting to have their kid try a new skill to go and visit them once. You will not be disappointed from the beginning till end. Thank you to the amazing team — keep up the good work!",
  },
];

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
        />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section className="py-20 md:py-32 bg-secondary/10 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/5 border border-secondary/10 mb-6">
            <GoogleG className="w-5 h-5" />
            <span className="text-secondary font-bold tracking-wide text-sm uppercase">Verified Google Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight mb-6">
            <span className="text-secondary block mb-2">PARENTS IN WINNIPEG</span>
            <span className="text-primary">LOVE WHAT WE DO</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <Stars count={5} />
            <span className="text-secondary font-bold">5.0</span>
            <span className="text-secondary/60">·</span>
            <span className="text-secondary/70 font-medium">Real reviews from local families</span>
          </div>
        </FadeIn>

        <div className="-mx-4 px-4 overflow-x-auto overflow-y-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" style={{ overscrollBehaviorX: "contain", touchAction: "pan-y pan-x" }}>
          <div className="flex gap-6 md:gap-8 pb-4 w-max min-w-full">
            {reviews.map((r, i) => (
            <div key={r.name} className="snap-start shrink-0 w-[85vw] sm:w-[420px] md:w-[460px]">
              <article className="h-full flex flex-col bg-secondary/5 rounded-3xl p-7 md:p-8 border border-secondary/10 shadow-xl shadow-secondary/5">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-full ${r.color} text-white flex items-center justify-center font-black text-sm shrink-0`}>
                      {r.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-secondary truncate">{r.name}</div>
                      <div className="text-xs text-secondary/60">{r.weeksAgo}</div>
                    </div>
                  </div>
                  <GoogleG className="w-5 h-5 shrink-0 mt-1" />
                </div>

                <Stars count={r.rating} />

                <p className="mt-4 text-secondary/80 leading-relaxed text-[15px] flex-1">
                  {r.text}
                </p>
              </article>
            </div>
            ))}
          </div>
        </div>

        <FadeIn delay={0.3} className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=skill+samurai+winnipeg&sca_esv=0584e342056e488a#mpd=~8442050446591582271/customers/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-white font-bold hover:bg-secondary/90 transition-colors"
          >
            <GoogleG className="w-5 h-5" />
            Read all reviews on Google
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
