import { Link } from "react-router-dom";
import {
  AwardIcon,
  ClockIcon,
  HeartHandshakeIcon,
  MapPinIcon,
  ShieldCheckIcon,
  TargetIcon,
  TruckIcon,
  UsersIcon,
} from "lucide-react";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const stats = [
  { value: "25,000+", label: "Moves Completed" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "15+", label: "Years Experience" },
  { value: "50", label: "States Covered" },
];

const values = [
  {
    icon: ShieldCheckIcon,
    title: "Safety First",
    text: "Every item is padded, wrapped and secured by trained crews. Full insurance coverage comes standard on every move.",
    tile: "bg-blue-100 text-blue-600 dark:bg-blue-900/60 dark:text-blue-400",
  },
  {
    icon: ClockIcon,
    title: "On-Time, Every Time",
    text: "We show up in the window we promise. A 98% on-time record is something we work hard to protect.",
    tile: "bg-green-100 text-green-600 dark:bg-green-900/60 dark:text-green-400",
  },
  {
    icon: HeartHandshakeIcon,
    title: "Honest Pricing",
    text: "The quote you get is the price you pay. No hidden fees, no fuel surcharges, no surprises on moving day.",
    tile: "bg-amber-100 text-amber-600 dark:bg-amber-900/60 dark:text-amber-400",
  },
  {
    icon: TargetIcon,
    title: "Detail Driven",
    text: "From labelling every box by room to a final walkthrough, we handle the small things so you don't have to.",
    tile: "bg-violet-100 text-violet-600 dark:bg-violet-900/60 dark:text-violet-400",
  },
];

const team = [
  { name: "Marcus Reed", role: "Founder & CEO", initial: "M" },
  { name: "Dana Whitfield", role: "Operations Director", initial: "D" },
  { name: "Luis Ortega", role: "Head of Crew Training", initial: "L" },
];

 const About = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="w-full bg-[#f5f9ff] dark:bg-slate-900 py-16 md:py-20 text-center px-5">

        <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full">
          About Us
        </span>

        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mt-5">
          We Move Families, Not Just Boxes
        </h1>

        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          Since 2011, SwiftMove has helped more than 25,000 families and
          businesses relocate with less stress and more care.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            to="/shop"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Visit the Shop
          </Link>

          <Link
            to="/"
            className="border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium px-6 py-3 rounded-lg transition"
          >
            Back to Home
          </Link>
        </div>

      </section>

      {/* STATS */}
      <section className="w-full bg-white dark:bg-slate-900 py-14">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                {stat.value}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="w-full bg-gray-50 dark:bg-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1200&q=80"
              alt="SwiftMove moving truck"
              className="w-full h-[380px] object-cover"
            />
          </div>

          <div>
            <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full">
              Our Story
            </span>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-4">
              Started with one truck and a promise
            </h2>

            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
              SwiftMove began in 2011 with a single pickup truck and a simple
              idea: moving should not be the worst part of starting over. We
              treated every customer's belongings the way we would want ours
              treated.
            </p>

            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
              Today we run a fleet of more than 50 vehicles across the country,
              but the promise has not changed. Careful crews, honest quotes, and
              a team that shows up when we say we will.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <TruckIcon className="w-4 h-4" />
                </div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  50+ Vehicles
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-100 dark:bg-green-900/60 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                  <UsersIcon className="w-4 h-4" />
                </div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  200+ Trained Crews
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <AwardIcon className="w-4 h-4" />
                </div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  BBB A+ Rated
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-violet-100 dark:bg-violet-900/60 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                  <MapPinIcon className="w-4 h-4" />
                </div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  Nationwide Coverage
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="w-full bg-white dark:bg-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-5">

          <div className="text-center">
            <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full">
              Why Choose Us
            </span>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-4">
              What we stand for
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div key={value.title} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm p-6">
                  <div className={"w-11 h-11 rounded-lg flex items-center justify-center " + value.tile}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-semibold text-slate-900 dark:text-white mt-4">
                    {value.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-2">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* TEAM */}
      <section className="w-full bg-gray-50 dark:bg-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-5 text-center">

          <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full">
            Our Team
          </span>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-4">
            The people behind the move
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-white dark:bg-slate-900 rounded-xl shadow-sm p-6">

                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 text-xl font-bold flex items-center justify-center mx-auto">
                  {member.initial}
                </div>

                <h3 className="font-semibold text-slate-900 dark:text-white mt-4">
                  {member.name}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">{member.role}</p>

              </div>
            ))}
          </div>

        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
};

export default About;
