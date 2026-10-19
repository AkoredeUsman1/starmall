function Hero() {
  return (
    <section className="bg-[#f5f9ff] dark:bg-slate-900 min-h-[calc(100vh-72px)]">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* =========================
              LEFT SIDE
          ========================= */}
          <div>

            {/* Licensed Badge */}
            <div className="inline-flex items-center gap-2 border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-7">
              <span>♢</span>
              <span>Licensed & Insured in All 50 States</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-slate-900 dark:text-white">

              Moving Made

            <div className="text-black dark:text-white">
                Safe & Secure
            </div>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-7 text-slate-600 dark:text-slate-400">
              From local moves to cross-country relocations, our professional
              team handles every detail so you can focus on settling into your
              new home.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-4 rounded-lg shadow-md transition">
                Get Free Quote
                <span className="ml-2">→</span>
              </button>

              <button className="border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium px-7 py-4 rounded-lg transition">
                <span className="text-blue-600 dark:text-blue-400 mr-2">⌕</span>
                Call (555) 890-1234
              </button>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  25,000+
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Moves Completed
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  98%
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Satisfaction Rate
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  15+
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Same-Day
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Available
                </p>
              </div>

            </div>

          </div>


          {/* =========================
              RIGHT SIDE
          ========================= */}
          <div className="relative">

            {/* Main Image */}
            <div className="overflow-hidden rounded-2xl shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1200&q=80"
                alt="Professional moving truck"
                className="w-full h-[430px] lg:h-[500px] object-cover"
              />

            </div>

            {/* Fully Insured Card */}
            <div className="absolute -bottom-5 left-5 bg-white dark:bg-slate-800 rounded-xl shadow-lg px-5 py-4 flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 text-xl">
                  ✓
                </span>
              </div>

              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm">
                  Fully Insured
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  All belongings protected
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
