import { useState } from "react";
import { PlusIcon } from "lucide-react";

const faqs = [
  {
    q: "Are my belongings insured during the move?",
    a: "Yes. Every move is fully covered by our standard liability protection, and you can upgrade to full-value protection for high-value items. We are licensed and insured in all 50 states, and we will walk you through your coverage options before move day.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking 2 to 4 weeks ahead for local moves and 4 to 6 weeks for long-distance moves. That said, we handle last-minute moves regularly, so call us and we will do everything we can to fit you in.",
  },
  {
    q: "Do you provide packing services?",
    a: "We do. Our crew can pack everything or just the fragile items, using premium boxes, padding and wrapping. We can also unpack and place everything where you want it, so you settle in faster.",
  },
  {
    q: "Can you move specialty items like pianos?",
    a: "Absolutely. Pianos, antiques, fine art, safes and other specialty items are handled by trained specialists with custom crating, dollies and straps designed for the job.",
  },
  {
    q: "Do you offer storage solutions?",
    a: "Yes. We offer short- and long-term storage in clean, climate-controlled and secure facilities. It is perfect for staged moves or when your new home is not ready yet.",
  },
];

 function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="w-full bg-white dark:bg-slate-900 py-16 md:py-20">

      {/* HEADER */}
      <div className="text-center px-5">

        <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full">
          FAQ
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-5">
          Frequently Asked Questions
        </h2>

        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-4 max-w-xl mx-auto">
          Find answers to common questions about our moving services and process.
        </p>

      </div>


      {/* ACCORDION */}
      <div className="max-w-3xl mx-auto px-5 mt-12">

        {faqs.map((item, index) => {

          const isOpen = open === index;

          return (
            <div key={item.q} className="border-b border-slate-200 dark:border-slate-700">

              {/* Question */}
              <button
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 py-4 text-left group"
              >
                <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {item.q}
                </span>

                <span
                  className={
                    "w-6 h-6 shrink-0 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 flex items-center justify-center transition-transform duration-300 " +
                    (isOpen ? "rotate-45 bg-blue-600 text-white" : "")
                  }
                >
                  <PlusIcon className="w-3.5 h-3.5" />
                </span>
              </button>

              {/* Answer */}
              {isOpen && (
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pb-5 pr-10 -mt-1">
                  {item.a}
                </p>
              )}

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default FAQ;
