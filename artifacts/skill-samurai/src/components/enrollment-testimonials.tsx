const REVIEWS = [
  {
    name: "Sarah M.",
    label: "North East parent",
    text: "My son has been coming for 6 months and absolutely loves it. He built his first game in the very first month. The instructors are patient and genuinely make it fun.",
  },
  {
    name: "Mike T.",
    label: "Winnipeg parent",
    text: "We tried a few coding programs — Skill Samurai is by far the best. My daughter went from knowing nothing to building her own websites. The month-to-month is a big plus too.",
  },
  {
    name: "Jennifer K.",
    label: "Seven Oaks parent",
    text: "My kids look forward to every single class. The instructors are amazing at meeting each child at their level — my 8-year-old and 13-year-old are both thriving.",
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
              <p className="text-secondary/40 text-xs">{r.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
