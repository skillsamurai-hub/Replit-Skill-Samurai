"use client";

import { FadeIn } from "@/components/ui/fade-in";
import FinalCta from "@/components/sections/final-cta";
import { Cake, Gamepad2, Trophy, Clock, Users, Star, ArrowRight, CheckCircle, Sparkles, Phone, Mail, Pizza, Music, Wrench, ShieldCheck } from "lucide-react";

const included = [
  {
    icon: Gamepad2,
    title: "2 Hours of Coding & Gaming",
    desc: "Two separate 1-hour coding sessions — kids build their own Roblox Obby (obstacle game) with hands-on instructor guidance.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Pizza,
    title: "Pizza & Drinks Included",
    desc: "2 large pizzas (cheese and/or pepperoni) plus drinks — served between the coding sessions.",
    color: "text-[#F59100]",
    bg: "bg-[#F59100]/10",
  },
  {
    icon: Cake,
    title: "Cupcakes with Roblox Toppers",
    desc: "Roblox-themed cupcakes served at the end alongside presents — no need to bring your own cake (though you're welcome to!).",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Up to 12 Guests",
    desc: "Every child gets hands-on time at their own computer. Parent areas available (outdoor picnic tables + indoor near entrance).",
    color: "text-[#F59100]",
    bg: "bg-[#F59100]/10",
  },
  {
    icon: Trophy,
    title: "Dedicated Instructor",
    desc: "A qualified Skill Samurai instructor runs everything — CS-trained, experienced, and great with kids.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Wrench,
    title: "Full Setup & Cleanup",
    desc: "We handle everything before and after. Leave with no fuss and a clean home to return to.",
    color: "text-[#F59100]",
    bg: "bg-[#F59100]/10",
  },
];

const steps = [
  {
    step: "01",
    title: "Arrival & Check-In",
    desc: "Greeted by your host, quick tour of the party room, and waivers collected for all guests.",
  },
  {
    step: "02",
    title: "Coding & Gaming Session — 1 Hour",
    desc: "Kids dive into exciting coding activities. Everyone builds their own Roblox Obby obstacle game.",
  },
  {
    step: "03",
    title: "Pizza & Drinks",
    desc: "Host announces pizza time — enjoy 2 large pizzas (cheese and/or pepperoni) with drinks at your table.",
  },
  {
    step: "04",
    title: "More Coding & Gaming — 1 Hour",
    desc: "Back to the fun for another hour of coding. Kids continue their projects or take on new challenges.",
  },
  {
    step: "05",
    title: "Cupcakes & Presents",
    desc: "Roblox-themed cupcakes and present time — the birthday kid gets the full spotlight.",
  },
  {
    step: "06",
    title: "Cleanup (We Handle It)",
    desc: "We take care of all setup and cleanup. You and your guests just head home happy.",
  },
];

const faqs = [
  {
    q: "What age groups are the activities for?",
    a: "For kids aged 6–16. No experience needed — everyone is welcome!",
  },
  {
    q: "What will the kids do during the coding session?",
    a: "They'll create their own Roblox Obby (obstacle game). If your child has a Roblox login, share it with the instructor so they can access their project at home.",
  },
  {
    q: "Can we customize the activities?",
    a: "Yes — activities are tailored to the party theme.",
  },
  {
    q: "Can we play music during the party?",
    a: "Yes! We provide kid-friendly music. Roblox music is also available.",
  },
  {
    q: "Is food included?",
    a: "Yes — 2 large pizzas (cheese and/or pepperoni), drinks, and Roblox-themed cupcakes are all included. You're welcome to bring your own cake or additional snacks.",
  },
  {
    q: "Is there a deposit required?",
    a: "Yes, a $200 deposit is required to book. It's fully refundable if you cancel more than 2 weeks before the party.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Cancel more than 2 weeks before the party for a full deposit refund. Cancellations within 2 weeks are non-refundable, but you can reschedule within 1 year at no extra charge.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking up to 3 months in advance — the sooner the better to secure your preferred date.",
  },
  {
    q: "Are waivers required?",
    a: "Yes, all guests need to complete a waiver. These are collected at arrival.",
  },
  {
    q: "Are there any extra costs?",
    a: "No — everything outlined in the Roblox Birthday Package is included. No hidden fees.",
  },
  {
    q: "Do you accommodate dietary restrictions?",
    a: "We are a nut-free facility. Let us know about any allergies or dietary needs in advance.",
  },
  {
    q: "Is there space for parents?",
    a: "Yes — two designated parent areas are available: an outdoor space with picnic tables and an indoor area near the entrance. Seating is limited.",
  },
];

export default function BirthdayPartiesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(335_84%_59%/0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(218_42%_29%/0.4),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <Cake className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Roblox Birthday Party Package</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading text-white uppercase tracking-tight leading-[1.0] mb-6">
              Make Their<br />Birthday <span className="text-primary">Epic.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-8 leading-relaxed">
              A Roblox coding party at Skill Samurai — 2 hours of gaming, pizza, Roblox cupcakes, and a project every kid takes home.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:winnipeg@skillsamurai.com?subject=Birthday Party Inquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-black text-sm uppercase tracking-wide shadow-lg shadow-primary/40 hover:bg-primary/90 transition-colors"
              >
                <Cake className="h-4 w-4" />
                Request Info
              </a>
              <a
                href="tel:+12048182155"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm uppercase tracking-wide hover:bg-white/20 transition-colors"
              >
                <Phone className="h-4 w-4" />
                (204) 818-2155
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mt-5 text-white/50 text-sm">Ages 6–16 · Up to 12 guests · $200 deposit to book</p>
          </FadeIn>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Everything included</p>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-secondary uppercase tracking-tight">
              What&apos;s Included
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {included.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.07}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full">
                  <div className={`inline-flex p-2.5 rounded-xl ${item.bg} mb-4`}>
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                  </div>
                  <h3 className="font-black text-secondary text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary/60 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Party Highlights */}
      <section className="py-16 md:py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Real parties, real kids</p>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-secondary uppercase tracking-tight">
              See It in Action
            </h2>
            <p className="mt-3 text-secondary/60 max-w-xl mx-auto">Highlights from real birthday parties at Skill Samurai Winnipeg.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {[
              {
                tag: "Party Fun",
                videoUrl: "https://www.instagram.com/reel/DADztP8AN41/",
                color: "text-primary",
                bg: "bg-primary/10",
                border: "border-primary/20",
                tagBg: "bg-primary text-white",
              },
              {
                tag: "Kids Coding",
                videoUrl: "https://www.instagram.com/reel/DI9g9RiSRDm/",
                color: "text-[#F59100]",
                bg: "bg-[#F59100]/10",
                border: "border-[#F59100]/20",
                tagBg: "bg-[#F59100] text-white",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`h-full bg-white rounded-3xl p-6 border ${item.border} shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-2xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                      <Cake className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <p className="font-black text-base font-heading text-secondary leading-tight">Skill Samurai Winnipeg</p>
                      <span className={`text-[10px] font-bold uppercase tracking-wide ${item.color}`}>{item.tag}</span>
                    </div>
                  </div>
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wide ${item.tagBg} w-fit`}>Birthday Party Highlight</span>
                  <a
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs font-black uppercase tracking-wide ${item.color} hover:underline mt-auto`}
                  >
                    ▶ Watch on Instagram
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">The full party outline</p>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-secondary uppercase tracking-tight">
              How the Party Runs
            </h2>
          </FadeIn>
          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.07}>
                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white font-black text-sm flex items-center justify-center shadow-md shadow-primary/30">
                    {s.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-black text-secondary text-base mb-1">{s.title}</h3>
                    <p className="text-sm text-secondary/60 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Common questions</p>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-white uppercase tracking-tight">
              FAQs
            </h2>
          </FadeIn>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-black text-white text-sm mb-1.5">{faq.q}</h3>
                      <p className="text-sm text-white/65 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <Cake className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-secondary uppercase tracking-tight mb-4">
              Ready to Book?
            </h2>
            <p className="text-secondary/65 text-lg max-w-xl mx-auto mb-8">
              Reach out to lock in your date. A $200 deposit secures your spot — spots fill up fast, especially on weekends.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:winnipeg@skillsamurai.com?subject=Birthday Party Inquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-black text-sm uppercase tracking-wide shadow-lg shadow-primary/40 hover:bg-primary/90 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Request Info
              </a>
              <a
                href="tel:+12048182155"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary text-white font-bold text-sm uppercase tracking-wide hover:bg-secondary/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                (204) 818-2155
              </a>
            </div>
            <p className="mt-5 text-secondary/40 text-sm">Both Winnipeg locations · Ages 6–16 · $200 refundable deposit</p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
