const steps = [
  {
    no: "01",
    title: "Request a Quote",
    desc: "Fill out our quick form or call us for a free, no-obligation estimate tailored to your move.",
  },
  {
    no: "02",
    title: "Schedule Your Move",
    desc: "Pick your preferred date and time. We will confirm all the details and assign your crew.",
  },
  {
    no: "03",
    title: "We Handle Everything",
    desc: "Our professional team handles packing, loading, and transporting with care and precision.",
  },
  {
    no: "04",
    title: "Welcome Home",
    desc: "We unload, place furniture exactly where you want it, and do a final walkthrough with you.",
  },
];

 function Ayanpitan() {
  return (
    <section id="how-it-works" className="w-full bg-white dark:bg-slate-900 py-16 md:py-20">

      {/* HEADER */}
      <div className="text-center px-5">

        <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full">
          How It Works
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-5">
          Your Move in 4 Easy Steps
        </h2>

        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
          We have streamlined the moving process to make it as simple and
          transparent as possible.
        </p>

      </div>


      {/* STEPS / TIMELINE */}
      <div className="relative max-w-6xl mx-auto px-5 mt-14">

        {/* Horizontal line (desktop) */}
        <div className="hidden md:block absolute left-5 right-5 top-8 h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900"></div>

        <div className="grid grid-cols-1 gap-9 md:grid-cols-4 md:gap-6">

          {steps.map((step, index) => (
            <div
              key={step.no}
              className="relative flex items-start gap-5 md:block md:text-center"
            >

              {/* Vertical connector (mobile only) */}
              {index < steps.length - 1 && (
                <div className="md:hidden absolute left-8 top-16 -bottom-9 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
              )}

              {/* Number Circle */}
              <div className="relative z-10 w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white text-lg font-bold flex items-center justify-center shadow-lg shadow-blue-500/30 md:mx-auto">
                {step.no}
              </div>

              {/* Text */}
              <div className="md:mt-6">
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-1 md:mt-2">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Ayanpitan;
