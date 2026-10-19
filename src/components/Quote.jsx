import { useState } from "react";
import {
  BadgeCheckIcon,
  ChevronDownIcon,
  PhoneIcon,
  ShieldCheckIcon,
  StarIcon,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeCheckIcon,
    title: "Licensed & Insured",
    sub: "Fully licensed in all 50 states",
    box: "bg-blue-100 text-blue-600 dark:bg-blue-900/60 dark:text-blue-400",
  },
  {
    icon: ShieldCheckIcon,
    title: "BBB A+ Rated",
    sub: "Top rated member for Business Reviews",
    box: "bg-green-100 text-green-600 dark:bg-green-900/60 dark:text-green-400",
  },
  {
    icon: StarIcon,
    title: "4.9/5 Rating",
    sub: "Based on 2,500+ reviews",
    box: "bg-amber-100 text-amber-500 dark:bg-amber-900/60 dark:text-amber-400",
  },
];

const hours = [
  { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
  { day: "Saturday", time: "9:00 AM - 4:00 PM" },
  { day: "Sunday", time: "9:00 AM - 4:00 PM" },
];

const services = ["Packing & Unpacking", "Storage", "Piano/Specialty Items"];

 function Quote() {
  const [sent, setSent] = useState(false);

  const label = "block text-xs text-slate-500 dark:text-slate-400 mb-1.5";
  const input =
    "w-full border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 bg-white dark:bg-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition";

  return (
    <section id="quote" className="w-full bg-white dark:bg-slate-900 py-16 md:py-20">

      {/* HEADER */}
      <div className="text-center px-5">

        <span className="inline-flex items-center bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 text-xs font-semibold px-4 py-1.5 rounded-full">
          Free Quote
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-5">
          Get Your Free Moving Quote
        </h2>

        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-4 max-w-xl mx-auto">
          Tell us about your move and we will provide a detailed, no-obligation
          estimate within 24 hours.
        </p>

      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-5 mt-14">

        {/* =====================
            FORM CARD
        ===================== */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 p-6 md:p-8"
        >

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Full Name */}
            <div>
              <label className={label} htmlFor="fullname">Full Name</label>
              <input id="fullname" type="text" placeholder="John Smith" className={input} />
            </div>

            {/* Email */}
            <div>
              <label className={label} htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="john@example.com" className={input} />
            </div>

            {/* Phone */}
            <div>
              <label className={label} htmlFor="phone">Phone</label>
              <input id="phone" type="tel" placeholder="555-000-0000" className={input} />
            </div>

            {/* Move Date */}
            <div>
              <label className={label} htmlFor="movedate">Move Date</label>
              <input id="movedate" type="date" className={input} />
            </div>

            {/* Moving From */}
            <div>
              <label className={label} htmlFor="from">Moving From</label>
              <input id="from" type="text" placeholder="City or ZIP code" className={input} />
            </div>

            {/* Moving To */}
            <div>
              <label className={label} htmlFor="to">Moving To</label>
              <input id="to" type="text" placeholder="City or ZIP code" className={input} />
            </div>

          </div>

          {/* Home Size */}
          <div className="mt-4">
            <label className={label} htmlFor="homesize">Home Size</label>

            <div className="relative">
              <select id="homesize" defaultValue="" className={input + " appearance-none pr-10"}>
                <option value="" disabled>Select home size</option>
                <option>Studio / 1BR</option>
                <option>2-3 Bedrooms</option>
                <option>4+ Bedrooms</option>
                <option>Office / Commercial</option>
              </select>

              <ChevronDownIcon className="w-5 h-5 text-slate-500 dark:text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-5">
            <span className={label}>Additional Services</span>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {services.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 dark:bg-slate-700 text-blue-600 focus:ring-blue-400"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          {/* Additional Details */}
          <div className="mt-5">
            <label className={label} htmlFor="details">Additional Details</label>
            <textarea
              id="details"
              rows="4"
              placeholder="Tell us about any special requirements..."
              className={input + " resize-y"}
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
          >
            {sent ? "Request Sent!" : "Get Free Quote"}
          </button>

        </form>


        {/* =====================
            SIDEBAR
        ===================== */}
        <aside className="space-y-6">

          {/* Why Choose */}
          <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-5">
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-4">
              Why Choose SwiftMove?
            </h3>

            <div className="space-y-4">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="flex items-start gap-3">

                    <div className={"w-8 h-8 rounded-lg flex items-center justify-center shrink-0 dark:bg-slate-700 " + reason.box}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                        {reason.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{reason.sub}</p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Prefer to Call */}
          <div className="bg-blue-600 rounded-xl p-5 text-center">
            <h3 className="font-semibold text-white">Prefer to Call?</h3>
            <p className="text-xs text-blue-100 mt-1">
              Speak with a move specialist now
            </p>

            <a
              href="tel:5558901234"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-100 text-blue-600 dark:text-blue-700 text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:bg-blue-50 dark:hover:bg-white transition"
            >
              <PhoneIcon className="w-4 h-4" />
              (555) 890-1234
            </a>
          </div>

          {/* Business Hours */}
          <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-5">
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-3">
              Business Hours
            </h3>

            <div className="divide-y divide-slate-200 dark:divide-slate-700">
              {hours.map((row) => (
                <div key={row.day} className="flex items-center justify-between py-2 text-xs">
                  <span className="text-slate-500 dark:text-slate-400">{row.day}</span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium">{row.time}</span>
                </div>
              ))}
            </div>
          </div>

        </aside>

      </div>

    </section>
  );
}

export default Quote;
