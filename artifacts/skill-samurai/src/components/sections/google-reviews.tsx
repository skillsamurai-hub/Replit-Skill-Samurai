"use client";

import React, { useRef, useState, useMemo, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

type Review = {
  name: string;
  initials: string;
  color: string;
  weeksAgo: string;
  rating: number;
  text: string;
  tags: string[];
};

const reviews: Review[] = [
  {
    name: "Maxcine Symons",
    initials: "MS",
    color: "bg-primary",
    weeksAgo: "Jul 2026",
    rating: 5,
    tags: ["Free Trial", "Game Making", "Builds Sprites"],
    text: "It is awesome they offer a free trial class to see if your child enjoys the class. My son was able to make two mini games within the free hour time slot as well as build his own sprite 🙌",
  },
  {
    name: "Ryan Cansino",
    initials: "RC",
    color: "bg-secondary",
    weeksAgo: "Jul 2026",
    rating: 5,
    tags: ["Engaged & Motivated", "Builds Confidence", "Asks Questions"],
    text: "Amazing staff. Team do an excellent job of keeping my daughter engaged and motivated. Daughter feels more comfortable in asking questions and making mistakes.",
  },
  {
    name: "Tracy E",
    initials: "TE",
    color: "bg-accent text-secondary",
    weeksAgo: "Jul 2026",
    rating: 5,
    tags: ["Kind Instructors", "Engaged the Whole Hour", "Encouraging"],
    text: "My son really enjoyed the class. The instructors are very kind and enthusiastic. My son was engaged for the entire hour and received encouragement and support when needed.",
  },
  {
    name: "Aysha Nadeem",
    initials: "AN",
    color: "bg-primary",
    weeksAgo: "Jun 2026",
    rating: 5,
    tags: ["Ages 7 & 10", "Free Trial", "Screen Time → Skills"],
    text: "My kids got a free class at Skill Samurai — they are 7 and 10 years old and they really liked it and wanted to join. My son doesn't like to join other classes but he likes to use screens to create something good.",
  },
  {
    name: "Rupinder Gill",
    initials: "RG",
    color: "bg-secondary",
    weeksAgo: "Jun 2026",
    rating: 5,
    tags: ["Siblings", "Free Trial", "Builds Confidence"],
    text: "My son and daughter attended the free trial class in this coding program — they both loved it. Had a very good experience in the one-day class with the Skill Samurai team. It's a very good program to help build skills and confidence in children.",
  },
  {
    name: "Iryna Mahdanas",
    initials: "IM",
    color: "bg-accent text-secondary",
    weeksAgo: "Jun 2026",
    rating: 5,
    tags: ["Since Sep 2025", "Fun & Educational", "Girls in Coding"],
    text: "My daughter has been attending Skill Samurai Coding Classes since September 2025, and she really enjoys it. The classes are fun, engaging, and educational. The instructors are supportive, and it's great to see her excited about learning coding. Highly recommended for kids interested in technology and creativity!",
  },
  {
    name: "Rupinder Mudhar",
    initials: "RM",
    color: "bg-primary",
    weeksAgo: "Jun 2026",
    rating: 5,
    tags: ["Future-Ready", "Supportive Team", "Always Excited"],
    text: "Skill Samurai is an excellent place to prepare your kids for the coming high-tech world. Genesis, Akil and team are very supportive. Kids learn new skills and are always excited to be learning.",
  },
  {
    name: "Richard Imus",
    initials: "RI",
    color: "bg-secondary",
    weeksAgo: "Jun 2026",
    rating: 5,
    tags: ["Free Trial", "Wants to Return"],
    text: "My daughter enjoyed her trial and wants to do it again.",
  },
  {
    name: "Ladonna Nabess",
    initials: "LN",
    color: "bg-accent text-secondary",
    weeksAgo: "May 2026",
    rating: 5,
    tags: ["1+ Year Member", "Safe Environment", "North Kildonan"],
    text: "My son attended Skill Samurai for over a year and enjoyed using new skills each week in a safe, positive learning environment. Genesis, Akil and their team are skilled at making sure individual strengths are highlighted and accomplishments are celebrated. As parents we enjoyed seeing the growth and confidence that came from these classes. Thanks for all the work you do to provide this learning in North Kildonan!",
  },
  {
    name: "Bria Lylyk",
    initials: "BL",
    color: "bg-accent text-secondary",
    weeksAgo: "Mar 14, 2025",
    rating: 5,
    tags: ["Age 6", "Screen Time → Skills", "Builds Patience"],
    text: "My 6-year-old son, Hudson, started at Skill Samurai last fall, and I can't praise the program enough! Thanks to Skill Samurai, we've transformed screen time into valuable learning, and I feel so confident in the skills he's developing. Hudson often gets discouraged quickly, but we've noticed he's become much more patient and persistent since he began coding. Genesis and Akil are amazing — so supportive and attentive. They're teaching him not only how to create video games but also how to present them, and he practices this skill often. Hudson looks forward to coding class every week and proudly shares his experiences with his friends and teachers. I'm incredibly grateful we found Skill Samurai and can offer him these valuable skills, which I am confident he will use for a lifetime.",
  },
  {
    name: "Olga Talmatska",
    initials: "OT",
    color: "bg-secondary",
    weeksAgo: "33 weeks ago",
    rating: 5,
    tags: ["Grade 10", "High School", "1+ Year Member", "Affordable"],
    text: "My son has been attending these computer classes for over a year, and he really enjoys them! The atmosphere is very welcoming, and the instructors provide an individual approach to every child. There are many interesting directions to choose from — coding, robotics, STEM, and game development. My son has already completed more than three programs and continues to learn with great interest. I love that these classes help him focus, think critically, and be creative while doing something he truly enjoys. The schedule and location are convenient, and the price is affordable. I highly recommend this program for kids in Winnipeg!",
  },
  {
    name: "Cheryl D",
    initials: "CD",
    color: "bg-secondary",
    weeksAgo: "May 19, 2025",
    rating: 5,
    tags: ["Selective Mutism", "Special Needs", "Patient Staff"],
    text: "My son has been coming here for almost a year now and absolutely loves it! He has Select Mutism and it has been difficult finding an extra curricular activity for him that he is comfortable with and actually enjoys. Akil has been so amazing with him, and can see if he's struggling even without the verbal cues for help. Genesis is also so friendly and helpful. The class is held in a coffee shop with a little play area for toddlers. It's a great place to catch up on work or some reading while my son does his coding.",
  },
  {
    name: "Christine Remoquillo",
    initials: "CR",
    color: "bg-primary",
    weeksAgo: "24 weeks ago",
    rating: 5,
    tags: ["Builds Confidence", "Game Making", "Beginner-Friendly"],
    text: "With a few sessions in my son Isaiah felt so comfortable and at ease. The Skill Samurai team have been super helpful and patient. It's refreshing to see him use his creativity and imagination to program fun games! The skills that he's learning will serve him well in the long run and help build on his self-confidence. Highly recommend the Skill Samurai Winnipeg program; Akil, Genesis and the entire team are the absolute best!",
  },
  {
    name: "Jennifer Grayda",
    initials: "JG",
    color: "bg-secondary",
    weeksAgo: "31 weeks ago",
    rating: 5,
    tags: ["Homeschooling", "Multiple Kids", "Learning Through Play"],
    text: "My kids have been coming for almost two months now, and they absolutely love it! As a homeschooling family, I really appreciate how Skill Samurai makes learning feel like play. What I love most is how Skill Samurai sneaks in so many different subjects without the kids feeling like they're doing \"work\". They just think they're playing games! The staff is amazing, patient, and encouraging, and the location is super convenient with plenty of parking. Highly recommend for any parent who wants to make learning fun and meaningful.",
  },
  {
    name: "Chris K",
    initials: "CK",
    color: "bg-secondary",
    weeksAgo: "11 weeks ago",
    rating: 5,
    tags: ["Free Demo Class", "Beyond Coding", "Instantly Hooked"],
    text: "Had a great experience participating in a demo coding class the other day. The environment was welcoming and well organized, instructors were attentive to students unique needs, and everyone was engaged in their projects. Genesis (the owner) answered all my questions and also educated me on all the various benefits this program provides beyond just coding. My son had a blast and was hooked from the start. Looking forward to watching him flourish as he develops his coding skills, builds confidence and becomes more comfortable with evolving technology and software.",
  },
  {
    name: "Tanvir Soor",
    initials: "TS",
    color: "bg-primary",
    weeksAgo: "33 weeks ago",
    rating: 5,
    tags: ["Nervous at First", "Builds Confidence", "Encouraging"],
    text: "At first, I wasn't sure how my child would take to coding, but these classes have been amazing! The teachers are so encouraging and make every session exciting. It's wonderful to see my child gaining confidence while learning valuable skills for the future. Genesis is amazing and super helpful. We would highly recommend anyone wanting to have their kid try a new skill to go and visit them once. You will not be disappointed from the beginning till end. Thank you to the amazing team — keep up the good work!",
  },
  {
    name: "Beverly Ranario",
    initials: "BR",
    color: "bg-secondary",
    weeksAgo: "40 weeks ago",
    rating: 5,
    tags: ["Girls in Coding", "Fast Progress", "Builds Confidence"],
    text: "Our daughter is enrolled in coding course at Skill Samurai, and she absolutely loved it! As parents, we were thrilled to see her so engaged and excited about learning. The instructors are fantastic (Gen has been so awesomely accommodating) — they're not only knowledgeable but also great at making the classes fun and interactive. Our daughter learned so much in a short time, from the basics of programming to building her own projects. It's been amazing to watch her confidence grow. We highly recommend Skill Samurai to any parent looking for a high-quality, fun, and educational experience for their child. Thank you",
  },
  {
    name: "Jasmine Zhang",
    initials: "JZ",
    color: "bg-accent text-secondary",
    weeksAgo: "40 weeks ago",
    rating: 5,
    tags: ["Age 7", "Never Coded Before", "Builds Focus"],
    text: "My son has been attending Skill Samurai for several months now, and I've noticed tremendous progress in him. I'm so proud of him! He is 7 years old and had never been exposed to coding before. At the beginning, he lacked patience, but over time, he has become more confident, focused, and truly enjoys attending the classes. I must sincerely thank the teachers there, they are incredibly patient, friendly, and professional, always ready to answer questions. Their guidance has made a huge difference in my son's learning experience.",
  },
  {
    name: "Olena Pelahina",
    initials: "OP",
    color: "bg-primary",
    weeksAgo: "12 weeks ago",
    rating: 5,
    tags: ["Trial Class", "Welcoming", "Caring Staff"],
    text: "Really impressed with Skill Samurai! The staff is very caring and attentive to every student. The trial lesson was well-organized and the atmosphere was very encouraging. Thank you for the warm welcome!",
  },
  {
    name: "Garret Chapa",
    initials: "GC",
    color: "bg-accent text-secondary",
    weeksAgo: "25 weeks ago",
    rating: 5,
    tags: ["First Class", "Instantly Hooked", "Game Making"],
    text: "My son Mason tried out a coding class with a friend and loved it. He was so excited to show off what he was able to code just within his first class! Will definitely be signing him up for more programs in the future.",
  },
  {
    name: "Josh Gilbert",
    initials: "JG",
    color: "bg-primary",
    weeksAgo: "May 9, 2025",
    rating: 5,
    tags: ["Girls in Coding", "Instantly Hooked", "Excited for Days"],
    text: "My daughter loved it from the first minute! Great instructor and owners! Caring and great with kids! My daughter talked about it for days leading up to her class. She's hooked!",
  },
  {
    name: "Caitlin Black",
    initials: "CB",
    color: "bg-secondary",
    weeksAgo: "May 13, 2025",
    rating: 5,
    tags: ["Siblings", "Ages 6 & 8", "Free Trial"],
    text: "My 8 and 6 year olds tried the free trial class and absolutely loved it. Genesis and Akil were so welcoming and helpful, they can't wait to go back!",
  },
  {
    name: "Eva Riddell",
    initials: "ER",
    color: "bg-accent text-secondary",
    weeksAgo: "6 weeks ago",
    rating: 5,
    tags: ["School Teacher", "Grade 2 Workshop", "School Visit"],
    text: "A very fun experience for students and they love it! I have attended two classroom workshops with my Grade 2 students and it has been engaging and inspiring for them each time.",
  },
  {
    name: "Arlene Estrada",
    initials: "AE",
    color: "bg-accent text-secondary",
    weeksAgo: "32 weeks ago",
    rating: 5,
    tags: ["Builds Confidence", "Own Projects", "Highly Recommend"],
    text: "My son really enjoyed learning how to code! He said it was so much fun! It's amazing to see how much confidence he's gained in creating his own projects. I highly recommend this program for kids!",
  },
  {
    name: "NuhMannaz Thompson",
    initials: "NT",
    color: "bg-accent text-secondary",
    weeksAgo: "37 weeks ago",
    rating: 5,
    tags: ["Instantly Hooked", "Excited to Return"],
    text: "This class was right up my son's alley .. he enjoyed it so much that he asked when he's going back. I can't wait to see what he creates with you guys guiding him.",
  },
  {
    name: "Rochel Salonga",
    initials: "RS",
    color: "bg-primary",
    weeksAgo: "38 weeks ago",
    rating: 5,
    tags: ["Free Trial", "Multiple Programs", "Multiple Kids"],
    text: "Took my children to a free coding class to help them find their interest. Genesis and the team are super friendly and very accommodating. They really try to find what the child is interested in and there's so many programs to choose from. The kids look forward to their next class.",
  },
  {
    name: "Aimee Wermann",
    initials: "AW",
    color: "bg-primary",
    weeksAgo: "44 weeks ago",
    rating: 5,
    tags: ["Begged to Go Back", "Laid Back & Fun", "Free Trial"],
    text: "My son loved the trial class and begged to go back asap. Genesis was helpful and gave us all the information needed to get him started. Laid back, fun, educational class. Highly recommend!",
  },
  {
    name: "Melanie Deakin",
    initials: "MD",
    color: "bg-secondary",
    weeksAgo: "50 weeks ago",
    rating: 5,
    tags: ["Gaming → Creating", "Builds Confidence", "Girls in Coding"],
    text: "My child had a great time building her confidence on the computer. She was able to use her skills from playing games to further them in creating them instead. Great experience and wonderful staff.",
  },
  {
    name: "Jenn Martens",
    initials: "JM",
    color: "bg-accent text-secondary",
    weeksAgo: "50 weeks ago",
    rating: 5,
    tags: ["Young Kids", "Animations & Music", "Beginner"],
    text: "My son loves creating his own animations, music and games and we heard through our friend that Skill Samurai was a great place to go for young kids interested in coding. My son jumped right in and really enjoyed the structured learning provided about something he's passionate about. Genesis is amazing to chat with and it's obvious that she's in this field for the right reasons. We've just gotten started but are really excited to see where this takes him! Highly recommend!",
  },
  {
    name: "Rebecca Sereda",
    initials: "RS",
    color: "bg-primary",
    weeksAgo: "Oct 7, 2024",
    rating: 5,
    tags: ["Builds Confidence", "Game Making", "Goes At Own Pace"],
    text: "My son has had a great experience thus far! It has boosted his confidence, allowing him to be creative with video game creation at a speed that suits him. He looks forward to his class every week.",
  },
  {
    name: "Louise Hargave",
    initials: "LH",
    color: "bg-primary",
    weeksAgo: "Mar 18, 2025",
    rating: 5,
    tags: ["ADHD", "Grades 4 & 6", "Siblings"],
    text: "My grandsons really enjoyed the class and have signed up for 3 mths now and looking forward to going. My oldest has ADHD and found it kept his interest for the whole class. The teacher helped him out when he needed it and he did a great job. The younger one didn't want to leave. They are grades 4 and 6. I would highly recommend this program as it is also very professionally done and all staff very accessible!",
  },
  {
    name: "Natasha Penniston",
    initials: "NP",
    color: "bg-secondary",
    weeksAgo: "Mar 5, 2025",
    rating: 5,
    tags: ["First Month", "Flexible Schedule", "Welcoming"],
    text: "My son expressed interest in coding and I came across Skill Samurai on Instagram. After trying the first class, my son absolutely loved it and has enjoyed learning with them for the past month. Everything about the program is welcoming and flexible. I am blown away with what the kids learn and are capable of creating… Great program!!",
  },
  {
    name: "Jeffrey Reyes",
    initials: "JR",
    color: "bg-accent text-secondary",
    weeksAgo: "May 17, 2025",
    rating: 5,
    tags: ["Two Kids", "Free Trial", "Gaming"],
    text: "My two children did the trial class and fell in love instantly. We have them coming back already and the kids are talking about the vision they have on their game they want to create!! If your kids are into gaming, you have to get them to try this. The trial class is free… you don't have anything to lose!!!",
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

type FilterGroup = { label: string; emoji: string; tags: string[] };

const FILTERS: FilterGroup[] = [
  { label: "All", emoji: "⭐", tags: [] },
  { label: "Neurodivergent Kids", emoji: "🤝", tags: ["Selective Mutism", "Special Needs", "ADHD", "Nervous at First"] },
  { label: "Try for Free", emoji: "🎯", tags: ["Free Trial", "Free Demo Class", "Trial Class", "Wants to Return", "Begged to Go Back", "Instantly Hooked"] },
  { label: "Confidence & Growth", emoji: "💪", tags: ["Builds Confidence", "Screen Time → Skills", "Builds Patience", "Builds Focus", "Future-Ready", "Engaged & Motivated", "Always Excited", "Fast Progress"] },
  { label: "Shy Kids Welcome", emoji: "😊", tags: ["Kind Instructors", "Encouraging", "Caring Staff", "Patient Staff", "Supportive Team", "Welcoming", "Laid Back & Fun", "Nervous at First", "Engaged the Whole Hour"] },
  { label: "Girls in Coding", emoji: "👩‍💻", tags: ["Girls in Coding"] },
  { label: "Make Real Games", emoji: "🎮", tags: ["Game Making", "Gaming", "Builds Sprites", "Animations & Music", "Gaming → Creating", "Fun & Educational"] },
  { label: "2+ Kids in Family", emoji: "👨‍👩‍👧‍👦", tags: ["Siblings", "Multiple Kids", "Two Kids", "Ages 7 & 10", "Ages 6 & 8"] },
];

export default function GoogleReviews() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return reviews;
    const group = FILTERS.find((f) => f.label === activeFilter);
    if (!group) return reviews;
    return reviews.filter((r) => r.tags.some((t) => group.tags.includes(t)));
  }, [activeFilter]);

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeFilter]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.9, 480);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16 bg-secondary/10 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/5 border border-secondary/10 mb-6">
            <GoogleG className="w-5 h-5" />
            <span className="text-secondary font-bold tracking-wide text-sm uppercase">Winnipeg&apos;s Top Rated Kids Coding Academy</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight mb-6">
            <span className="text-secondary block mb-2">PARENTS IN WINNIPEG</span>
            <span className="text-primary">LOVE WHAT WE DO</span>
          </h2>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Stars count={5} />
            <span className="text-secondary font-bold">5.0</span>
            <span className="text-secondary/60">·</span>
            <span className="text-secondary font-black">155+ five-star reviews</span>
            <span className="text-secondary/60">·</span>
            <span className="text-secondary/70 font-medium">from local Winnipeg families</span>
          </div>
        </FadeIn>

        {/* Filter bar */}
        <div className="-mx-4 px-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mb-6 md:mb-8">
          <div className="flex gap-2 w-max mx-auto pb-1">
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.label;
              const count = f.tags.length === 0
                ? reviews.length
                : reviews.filter((r) => r.tags.some((t) => f.tags.includes(t))).length;
              return (
                <button
                  key={f.label}
                  type="button"
                  onClick={() => setActiveFilter(f.label)}
                  className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                      : "bg-white text-secondary/70 border border-secondary/15 hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  <span>{f.emoji}</span>
                  <span>{f.label}</span>
                  <span className={`text-[10px] ${isActive ? "text-white/70" : "text-secondary/40"}`}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous reviews"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 lg:-translate-x-14 z-20 h-12 w-12 items-center justify-center rounded-full bg-white text-secondary shadow-xl shadow-secondary/20 border border-secondary/10 hover:bg-primary hover:text-white hover:border-primary transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next reviews"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 lg:translate-x-14 z-20 h-12 w-12 items-center justify-center rounded-full bg-white text-secondary shadow-xl shadow-secondary/20 border border-secondary/10 hover:bg-primary hover:text-white hover:border-primary transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div ref={scrollerRef} className="-mx-4 px-4 overflow-x-auto overflow-y-visible scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" style={{ overscrollBehaviorX: "contain", touchAction: "pan-y pan-x" }}>
            <div className="flex gap-6 md:gap-8 pb-4 w-max min-w-full">
              {filtered.length > 0 ? filtered.map((r) => (
                <div key={r.name} className="snap-start shrink-0 w-[85vw] sm:w-[420px] md:w-[460px]">
                  <article className="h-full flex flex-col bg-white rounded-3xl p-5 md:p-6 border border-secondary/10 shadow-xl shadow-secondary/10">
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

                    <div className="flex items-center gap-3 mt-1">
                      <Stars count={r.rating} />
                      <span className="inline-flex items-center gap-1 text-xs text-secondary/50 font-medium">
                        <GoogleG className="w-3.5 h-3.5" />
                        Google Review
                      </span>
                    </div>

                    <p className="mt-4 text-secondary/80 leading-relaxed text-[15px] flex-1">
                      {r.text}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-secondary/8">
                      {r.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2.5 py-1 rounded-full bg-secondary/6 text-secondary/60 text-[11px] font-semibold tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              )) : (
                <div className="w-full min-w-[300px] flex flex-col items-center justify-center py-16 text-center px-4">
                  <p className="text-secondary/60 font-semibold text-lg mb-2">No reviews for this topic yet</p>
                  <button type="button" onClick={() => setActiveFilter("All")} className="text-primary font-bold underline underline-offset-2 text-sm cursor-pointer">Show all reviews</button>
                </div>
              )}
            </div>
          </div>
        </div>

        <FadeIn delay={0.3} className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=skill+samurai+winnipeg&sca_esv=0584e342056e488a&ei=wGZ-aM_7NLKC0PEPtpOWoAY&gs_ssp=eJzj4tVP1zc0zDHNTk8zKTY3YLRSNagwMTS2ME5ONTI1NrdISU4ytjKoMDWzSDU1Skk0skw1NEi0SPMSK87OzMlRKE7MLS1KzFQoz8zLyyxITQcAW4YXtg&oq=skill+samura&sclient=gws-wiz-serp#mpd=~8442050446591582271/customers/reviews"
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
