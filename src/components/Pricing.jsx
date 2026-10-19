import { CheckIcon, XIcon } from "lucide-react";

const plans = [
  {
    name: "Studio / 1BR",
    tagline: "Small apartments and studios",
    price: "$299",
    highlighted: false,
    features: [
      { text: "2-3 professional movers", included: true },
      { text: "Small moving truck", included: true },
      { text: "3-5 hours estimated", included: true },
      { text: "Blankets & basic protection", included: true },
      { text: "Packing services", included: false },
      { text: "Storage available", included: false },
    ],
  },
  {
    name: "2-3 Bedrooms",
    tagline: "Houses and larger apartments",
    price: "$599",
    highlighted: true,
    features: [
      { text: "3-4 professional movers", included: true },
      { text: "Large moving truck", included: true },
      { text: "5-8 hours estimated", included: true },
      { text: "Full padding & wrapping", included: true },
      { text: "Disassembly & reassembly", included: true },
      { text: "Packing services add-on", included: true },
    ],
  },
  {
    name: "4+ Bedrooms",
    tagline: "Large homes and estates",
    price: "$999",
    highlighted: false,
    features: [
      { text: "4-5 professional movers", included: true },
      { text: "2 moving trucks", included: true },
      { text: "Full day service", included: true },
      { text: "Premium protection", included: true },
      { text: "Packing & unpacking", included: true },
      { text: "Storage available", included: true },
    ],
  },
];

 function Pricing() {
  return (
    <section id="pricing" className="w-full bg-white dark:bg-slate-900 py-16 md:py-20">

      {/* HEADER */}
      <div className="text-center px-5">

        <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full">
          Pricing
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-5">
          Transparent, Honest Pricing
        </h2>

        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-4 max-w-xl mx-auto">
          No hidden fees, no surprises. Get a clear estimate before your move day.
        </p>

      </div>


      {/* PRICING CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-5 mt-14">

        {plans.map((plan) => (
          <div
            key={plan.name}
            className={
              "relative rounded-2xl p-6 flex flex-col " +
              (plan.highlighted
                ? "bg-white dark:bg-slate-800 border-2 border-blue-600 shadow-xl md:-mt-6 md:-mb-6"
                : "bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-700")
            }
          >

            {/* Popular Badge */}
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                Best Popular
              </span>
            )}

            {/* Plan Name */}
            <h3 className="font-semibold text-slate-900 dark:text-white text-center">
              {plan.name}
            </h3>

            <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-1">
              {plan.tagline}
            </p>

            {/* Price */}
            <div className="text-center mt-5">
              <span className="text-xs text-slate-400 dark:text-slate-500">From</span>
              <div className="text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                {plan.price}
              </div>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-3 flex-1">

              {plan.features.map((feature) => (
                <li
                  key={feature.text}
                  className="flex items-center gap-2 text-sm"
                >

                  {feature.included ? (
                    <CheckIcon className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  ) : (
                    <XIcon className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0" />
                  )}

                  <span
                    className={
                      feature.included
                        ? "text-slate-600 dark:text-slate-300"
                        : "text-slate-400 dark:text-slate-500"
                    }
                  >
                    {feature.text}
                  </span>

                </li>
              ))}

            </ul>

            {/* Button */}
            <button
              className={
                "w-full mt-7 py-2.5 rounded-lg text-sm font-semibold transition " +
                (plan.highlighted
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-700 dark:text-slate-200")
              }
            >
              Get Exact Quote
            </button>

          </div>
        ))}

      </div>

      {/* FOOTER NOTE */}
      <p className="text-xs text-slate-400 dark:text-slate-500 text-center mt-10 px-5">
        Final price based on distance, items, and additional services. All
        quotes are free and no-obligation.
      </p>

    </section>
  );
}

export default Pricing;
