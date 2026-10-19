import { ArrowRightIcon, PhoneIcon } from "lucide-react";

 function CTA() {
  return (
    <section className="relative overflow-hidden w-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-16 md:py-20">

      {/* Glow */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

      <div className="relative text-center px-5">

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ready to Make Your Move?
        </h2>

        <p className="text-sm md:text-base text-blue-100 mt-4 max-w-xl mx-auto leading-relaxed">
          Join 25,000+ families who trusted SwiftMove for a stress-free
          relocation. Get your free quote today or call us now.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">

          <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition">
            Get Free Quote
            <ArrowRightIcon className="w-4 h-4" />
          </button>

          <a
            href="tel:5558901234"
            className="inline-flex items-center gap-2 border border-white/70 text-white hover:bg-white hover:text-blue-700 font-medium px-6 py-3 rounded-lg transition"
          >
            <PhoneIcon className="w-4 h-4" />
            Call Now
          </a>

        </div>

      </div>

    </section>
  );
}

export default CTA;
