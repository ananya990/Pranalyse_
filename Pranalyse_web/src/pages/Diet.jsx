import React from "react";
import { Link } from "react-router-dom";

const dietParameters = [
  { title: "Calories", desc: "Track your daily caloric intake", link: "/diet/calories" },
  { title: "Protein", desc: "Monitor protein for muscle & recovery", link: "/diet/protein" },
  { title: "Carbs", desc: "Manage your energy intake", link: "/diet/carbs" },
  { title: "Fats", desc: "Track healthy fats for wellness", link: "/diet/fats" },
  { title: "Vitamins", desc: "Ensure essential vitamin intake", link: "/diet/vitamins" },
  { title: "Minerals", desc: "Check minerals for bone & nerve health", link: "/diet/minerals" },
  { title: "Hydration", desc: "Keep track of daily water intake", link: "/diet/hydration" },
  { title: "Fiber", desc: "Maintain digestive health", link: "/diet/fiber" }
];

function Diet() {
  return (
    <section
      className="relative min-h-screen px-6 py-20 text-white overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #7c3aed, #4c1d95)" }}
    >
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-black/20 rounded-full blur-3xl animate-pulse-slow delay-200"></div>

      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-lavender">
          Diet & Nutrition
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Personalized nutrition plans aligned with your workouts and habits for optimal results.
        </p>
      </div>

      {/* Diet Parameter Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dietParameters.map((param, index) => (
          <Link
            key={index}
            to={param.link}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition">
                {param.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition">
                {param.desc}
              </p>
            </div>
            <div className="mt-4 text-sm font-medium text-violet-300 group-hover:text-white transition">
              View Details →
            </div>
          </Link>
        ))}
      </div>

      {/* Footer line */}
      <div className="relative z-10 text-center mt-20 text-white/70">
        AI-powered nutrition insights • Personalized for you
      </div>
    </section>
  );
}

export default Diet;
