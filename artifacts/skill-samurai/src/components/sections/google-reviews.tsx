"use client";

import React, { useRef } from "react";
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
    name: "Cheryl D",
    initials: "CD",
    color: "bg-primary",
    weeksAgo: "48 weeks ago",
    rating: 5,
    tags: ["Selective Mutism", "Special Needs", "Patient Staff"],
    text: "My son has been coming here for almost a year now and absolutely loves it! He has Select Mutism and it has been difficult finding an extra curricular activity for him that he is comfortable with and actually enjoys. Akil has been so amazing with him, and can see if he's struggling even without the verbal cues for help. Genesis is also so friendly and helpful. The class is held in a coffee shop with a little play area for toddlers. It's a great place to catch up on work or some reading while my son does his coding.",
  },
  {
    name: "Olga Talmatska",
    initials: "OT",
    color: "bg-secondary",
    weeksAgo: "27 weeks ago",
    rating: 5,
    tags: ["1+ Year Member", "Coding & Robotics", "Affordable"],
    text: "My son has been attending these computer classes for over a year, and he really enjoys them! The atmosphere is very welcoming, and the instructors provide an individual approach to every child. There are many interesting directions to choose from — coding, robotics, STEM, and game development. My son has already completed more than three programs and continues to learn with great interest. I love that these classes help him focus, think critically, and be creative while doing something he truly enjoys. The schedule and location are convenient, and the price is affordable. I highly recommend this program for kids in Winnipeg!",
  },
  {
    name: "Louise Hargave",
    initials: "LH",
    color: "bg-accent text-secondary",
    weeksAgo: "Mar 18, 2025",
    rating: 5,
    tags: ["ADHD", "Grades 4 & 6", "Siblings"],
    text: "My grandsons really enjoyed the class and have signed up for 3 mths now and looking forward to going. My oldest has ADHD and found it kept his interest for the whole class. The teacher helped him out when he needed it and he did a great job. The younger one didn't want to leave. They are grades 4 and 6. I would highly recommend this program as it is also very professionally done and all staff very accessible!",
  },
  {
    name: "Christine Remoquillo",
    initials: "CR",
    color: "bg-primary",
    weeksAgo: "18 weeks ago",
    rating: 5,
    tags: ["Builds Confidence", "Game Making", "Beginner-Friendly"],
    text: "With a few sessions in my son Isaiah felt so comfortable and at ease. The Skill Samurai team have been super helpful and patient. It's refreshing to see him use his creativity and imagination to program fun games! The skills that he's learning will serve him well in the long run and help build on his self-confidence. Highly recommend the Skill Samurai Winnipeg program; Akil, Genesis and the entire team are the absolute best!",
  },
  {
    name: "Bria Lylyk",
    initials: "BL",
    color: "bg-secondary",
    weeksAgo: "Mar 14, 2025",
    rating: 5,
    tags: ["Age 6", "Screen Time → Skills", "Builds Patience"],
    text: "My 6-year-old son, Hudson, started at Skill Samurai last fall, and I can't praise the program enough! Thanks to Genesis, we've transformed screen time into valuable learning, and I feel so confident in the skills he's developing. Hudson often gets discouraged quickly, but we've noticed he's become much more patient and persistent since he began coding. Genesis and Akil are amazing — so supportive and attentive. They're teaching him not only how to create video games but also how to present them, and he practices this skill often. Hudson looks forward to coding class every week and proudly shares his experiences with his friends and teachers. I'm incredibly grateful we found Skill Samurai and can offer him these valuable skills, which I am confident he will use for a lifetime.",
  },
  {
    name: "RJ & Charlene Bernardo",
    initials: "RC",
    color: "bg-primary",
    weeksAgo: "Mar 12, 2025",
    rating: 5,
    tags: ["Roblox", "Problem Solving", "Free Trial"],
    text: "We signed up after hearing about this program through my sister-in-law. It was definitely more up Isaiah's alley in terms of his interests and personality. Isaiah looks forward to class every week! Puts his critical thinking and problem solving skills to work and challenges him. Yes, it's more screen time BUT he's learning too! Isaiah can't wait to create his own Roblox. It's conveniently located and Genesis & Akil are amazing. It's a very relaxed & comfortable environment. A plus for the parents is that it's a nice change from sitting on gym benches waiting for your kids to finish their extra curricular sports activities! Especially after being a basketball mom with my eldest for several years. Definitely recommend to everyone and take advantage of the free trial!",
  },
  {
    name: "Rosalia Esquibel",
    initials: "RE",
    color: "bg-secondary",
    weeksAgo: "Apr 10, 2025",
    rating: 5,
    tags: ["Free Trial", "Hands-On Learning", "3-Month Program"],
    text: "My son Lucas recently tried a free coding session at Skill Samurai Winnipeg and really enjoyed it. The hands-on approach made learning coding fun, and he's excited to attend each week. He's now enrolled in the 3-month program and hopes that the classes can be more than once a week. The owner and instructors are accommodating, friendly, and create a welcoming environment. So far, it's been a great experience, and we're excited to see his progress!",
  },
  {
    name: "Jasmine Zhang",
    initials: "JZ",
    color: "bg-accent text-secondary",
    weeksAgo: "34 weeks ago",
    rating: 5,
    tags: ["Age 7", "Never Coded Before", "Builds Focus"],
    text: "My son has been attending Skill Samurai for several months now, and I've noticed tremendous progress in him. I'm so proud of him! He is 7 years old and had never been exposed to coding before. At the beginning, he lacked patience, but over time, he has become more confident, focused, and truly enjoys attending the classes. I must sincerely thank the teachers there, they are incredibly patient, friendly, and professional, always ready to answer questions. Their guidance has made a huge difference in my son's learning experience.",
  },
  {
    name: "Jennifer Grayda",
    initials: "JG",
    color: "bg-secondary",
    weeksAgo: "25 weeks ago",
    rating: 5,
    tags: ["Homeschooling", "Multiple Kids", "Learning Through Play"],
    text: "My kids have been coming for almost two months now, and they absolutely love it! As a homeschooling family, I really appreciate how Skill Samurai makes learning feel like play. What I love most is how Skill Samurai sneaks in so many different subjects without the kids feeling like they're doing \"work\". They just think they're playing games! The staff is amazing, patient, and encouraging, and the location is super convenient with plenty of parking. Highly recommend for any parent who wants to make learning fun and meaningful.",
  },
  {
    name: "Beverly Ranario",
    initials: "BR",
    color: "bg-primary",
    weeksAgo: "34 weeks ago",
    rating: 5,
    tags: ["Girls in Coding", "Fast Progress", "Builds Confidence"],
    text: "Our daughter is enrolled in coding course at Skill Samurai, and she absolutely loved it! As parents, we were thrilled to see her so engaged and excited about learning. The instructors are fantastic (Gen has been so awesomely accommodating) — they're not only knowledgeable but also great at making the classes fun and interactive. Our daughter learned so much in a short time, from the basics of programming to building her own projects. It's been amazing to watch her confidence grow. We highly recommend Skill Samurai to any parent looking for a high-quality, fun, and educational experience for their child. Thank you",
  },
  {
    name: "Chris K",
    initials: "CK",
    color: "bg-secondary",
    weeksAgo: "5 weeks ago",
    rating: 5,
    tags: ["Free Demo Class", "Beyond Coding", "Instantly Hooked"],
    text: "Had a great experience participating in a demo coding class the other day. The environment was welcoming and well organized, instructors were attentive to students unique needs, and everyone was engaged in their projects. Genesis (the owner) answered all my questions and also educated me on all the various benefits this program provides beyond just coding. My son had a blast and was hooked from the start. Looking forward to watching him flourish as he develops his coding skills, builds confidence and becomes more comfortable with evolving technology and software.",
  },
  {
    name: "Natasha Penniston",
    initials: "NP",
    color: "bg-accent text-secondary",
    weeksAgo: "Mar 5, 2025",
    rating: 5,
    tags: ["First Month", "Flexible Schedule", "Welcoming"],
    text: "My son expressed interest in coding and I came across Skill Samurai on Instagram. After trying the first class, my son absolutely loved it and has enjoyed learning with them for the past month. Everything about the program is welcoming and flexible. I am blown away with what the kids learn and are capable of creating… Great program!!",
  },
  {
    name: "Jeffrey Reyes",
    initials: "JR",
    color: "bg-accent text-secondary",
    weeksAgo: "48 weeks ago",
    rating: 5,
    tags: ["Two Kids", "Free Trial", "Gaming"],
    text: "My two children did the trial class and fell in love instantly. We have them coming back already and the kids are talking about the vision they have on their game they want to create!! If your kids are into gaming, you have to get them to try this. The trial class is free… you don't have anything to lose!!!",
  },
  {
    name: "Jenn Martens",
    initials: "JM",
    color: "bg-secondary",
    weeksAgo: "50 weeks ago",
    rating: 5,
    tags: ["Young Kids", "Animations & Music", "Beginner"],
    text: "My son loves creating his own animations, music and games and we heard through our friend that Skill Samurai was a great place to go for young kids interested in coding. My son jumped right in and really enjoyed the structured learning provided about something he's passionate about. Genesis is amazing to chat with and it's obvious that she's in this field for the right reasons. We've just gotten started but are really excited to see where this takes him! Highly recommend!",
  },
  {
    name: "Jennifer Maslow",
    initials: "JM",
    color: "bg-primary",
    weeksAgo: "39 weeks ago",
    rating: 5,
    tags: ["Roblox", "Girls", "Career Skills"],
    text: "My daughter loves to play Roblox so this class is right up her alley. I have never seen her so excited as when she came out of the trial class and she can not wait to start creating her own games! Little does she know that she is developing skills that will help her excel in her career later in life. The staff as fantastic and such a joy to work with and have really found a way to take what the kids love and make it beneficial for their futures!",
  },
  {
    name: "Lovelle Villanueva",
    initials: "LV",
    color: "bg-accent text-secondary",
    weeksAgo: "43 weeks ago",
    rating: 5,
    tags: ["Roblox", "Video Games", "Reluctant to Try"],
    text: "My son loves going to coding class. We tried different after school programs but to no avail my son has no interest in any of them. My son loves to play roblox and different video games. This program allows him to be creative. He always looks forward on going every week. Recommended an all kids who's always on their phones and gadgets.",
  },
  {
    name: "Tanvir Soor",
    initials: "TS",
    color: "bg-secondary",
    weeksAgo: "27 weeks ago",
    rating: 5,
    tags: ["Nervous at First", "Builds Confidence", "Encouraging"],
    text: "At first, I wasn't sure how my child would take to coding, but these classes have been amazing! The teachers are so encouraging and make every session exciting. It's wonderful to see my child gaining confidence while learning valuable skills for the future. Genesis is amazing and super helpful. We would highly recommend anyone wanting to have their kid try a new skill to go and visit them once. You will not be disappointed from the beginning till end. Thank you to the amazing team — keep up the good work!",
  },
  {
    name: "cat Huynh",
    initials: "CH",
    color: "bg-primary",
    weeksAgo: "30 weeks ago",
    rating: 5,
    tags: ["Teens", "Any Age", "Go At Your Own Pace"],
    text: "Absolutely glad that I found this place! My teens have always asked to go into coding but I didn't know much about it. When I finally looked into it and talked to a friend who had their kid in this, it sounded like something my kids would enjoy to actually learn and love even more. The staff there are super friendly and helpful. I would highly recommend this place, doesn't matter the age, the instructions are easy to understand and the staff is hands on and go at your speed.",
  },
  {
    name: "Rochel Salonga",
    initials: "RS",
    color: "bg-accent text-secondary",
    weeksAgo: "32 weeks ago",
    rating: 5,
    tags: ["Free Trial", "Multiple Programs", "Multiple Kids"],
    text: "Took my children to a free coding class to help them find their interest. Genesis and the team are super friendly and very accommodating. They really try to find what the child is interested in and there's so many programs to choose from. The kids look forward to their next class.",
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
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.9, 480);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

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
            {reviews.map((r, i) => (
            <div key={r.name} className="snap-start shrink-0 w-[85vw] sm:w-[420px] md:w-[460px]">
              <article className="h-full flex flex-col bg-white rounded-3xl p-7 md:p-8 border border-secondary/10 shadow-xl shadow-secondary/10">
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
                    <span key={tag} className="inline-block px-2.5 py-1 rounded-full bg-secondary/6 text-secondary/60 text-[11px] font-semibold tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </div>
            ))}
            </div>
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
