const REVIEWS = [
  {
    name: "Louise Hargave",
    label: "Google Review",
    text: "My grandsons really enjoyed the class and have signed up for 3 months now and looking forward to going. My oldest has ADHD and found it kept his interest for the whole class. The teacher helped him out when he needed it. The younger one didn't want to leave. I would highly recommend this program.",
  },
  {
    name: "Natasha Penniston",
    label: "Google Review",
    text: "My son expressed interest in coding and I came across Skill Samurai on Instagram. After trying the first class, my son absolutely loved it and has enjoyed learning with them for the past month. Everything about the program is welcoming and flexible. I am blown away with what the kids learn and are capable of creating. Great program!!",
  },
  {
    name: "Hudson's Mom",
    label: "Google Review",
    text: "My 6-year-old son started at Skill Samurai last fall and I can't praise the program enough! Hudson often gets discouraged quickly, but we've noticed he's become much more patient and persistent since he began coding. Genesis and Akil are amazing — so supportive and attentive.",
  },
];

export default function EnrollmentTestimonials() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-black text-secondary text-center mb-1">What Parents Are Saying</h2>
      <p className="text-secondary/50 text-sm text-center mb-5">155+ five-star reviews on Google</p>
      <div className="grid sm:grid-cols-3 gap-4">
        {REVIEWS.map((r, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm px-5 py-5 flex flex-col gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <svg key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-secondary/80 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
            <div>
              <p className="text-secondary font-bold text-xs">{r.name}</p>
              <a
                href="https://www.google.com/search?q=skill+samurai+winnipeg#mpd=~8442050446591582271/customers/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-xs"
              >{r.label}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
