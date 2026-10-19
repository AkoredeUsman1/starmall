import { useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "Moved our entire 4-bedroom house in one day. The crew was professional and nothing was damaged. Worth every penny.",
    name: "Brian & Kelly Adams",
    role: "Residential Move",
    initial: "B",
  },
  {
    quote:
      "SwiftMove handled our corporate office relocation over the weekend and we were running Monday morning with zero downtime.",
    name: "Patricia Nguyen",
    role: "Office Manager",
    initial: "P",
  },
  {
    quote:
      "The packing service saved us so much stress. They labeled every box by room. Made unpacking a breeze.",
    name: "David Hoffman",
    role: "Long Distance Move",
    initial: "D",
  },
  {
    quote:
      "They disassembled and reassembled everything without a scratch. The quote we got was the final price, no surprises.",
    name: "Maria Santos",
    role: "Local Move",
    initial: "M",
  },
  {
    quote:
      "Our move was across three states and the tracking updates gave us total peace of mind. Arrived exactly on schedule.",
    name: "James Carter",
    role: "Cross-Country Move",
    initial: "J",
  },
];

 const getPerView = () => {
  if (typeof window === "undefined") return 3;
  const w = window.innerWidth;
  return w < 640 ? 1 : w < 1024 ? 2 : 3;
};

 function Testimonials() {
  const [perView, setPerView] = useState(getPerView);
  const [index, setIndex] = useState(0);

  /* Responsive cards per view */
  useEffect(() => {
    const calc = () => setPerView(getPerView());

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const maxIndex = Math.max(testimonials.length - perView, 0);

  /* Keep index in range when the breakpoint changes */
  useEffect(() => {
    setIndex((i) => (i > maxIndex ? maxIndex : i));
  }, [maxIndex]);

  const prev = () => setIndex((i) => (i > 0 ? i - 1 : i));
  const next = () => setIndex((i) => (i < maxIndex ? i + 1 : i));

  return (
    <section id="testimonials" className="w-full bg-white dark:bg-slate-900 py-16 md:py-20">

      {/* HEADER */}
      <div className="text-center px-5">

        <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full">
          Testimonials
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-5">
          Trusted by Thousands of Families
        </h2>

        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-4 max-w-xl mx-auto">
          See what our customers say about their moving experience with SwiftMove.
        </p>

      </div>


      {/* CAROUSEL */}
      <div className="relative max-w-5xl mx-auto mt-14 px-12 sm:px-14">

        {/* Prev Arrow */}
        <button
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous testimonial"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:border-blue-300 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        {/* Viewport */}
        <div className="overflow-hidden">

          <div
            className="flex -mx-3 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
          >
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="px-3"
                style={{ flex: `0 0 ${100 / perView}%` }}
              >

                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 h-full flex flex-col items-center text-center">

                  {/* Stars */}
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-3 mt-6">

                    <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 text-sm font-semibold flex items-center justify-center shrink-0">
                      {item.initial}
                    </div>

                    <div className="text-left">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}</p>
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Next Arrow */}
        <button
          onClick={next}
          disabled={index === maxIndex}
          aria-label="Next testimonial"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:border-blue-300 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>

      </div>

      {/* DOTS */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={
              "h-2 rounded-full transition-all duration-300 " +
              (i === index
                ? "w-6 bg-blue-600"
                : "w-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500")
            }
          />
        ))}
      </div>

    </section>
  );
}

export default Testimonials;
