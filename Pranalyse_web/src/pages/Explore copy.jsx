import React from "react";
import { useNavigate } from "react-router-dom";

const exploreItems = [
  {
    title: "Desk Detox",
    desc: "Quick stretches to undo long hours of sitting.",
    path: "/desk-detox"
  },
  {
    title: "Neck Relief",
    desc: "Gentle movements to ease neck stiffness.",
    path: "/neck-relief"
  },
  {
    title: "Back Reset",
    desc: "Loosen your spine and improve posture in minutes.",
    path: "/back-reset"
  },
  {
    title: "Hip Mobility",
    desc: "Release tight hips from prolonged sitting.",
    path: "/hip-mobility"
  },
  {
    title: "Morning Wake-Up",
    desc: "Energizing moves to start your day right.",
    path: "/morning-wakeup"
  },
  {
    title: "Eye & Shoulder Break",
    desc: "Reduce screen fatigue and shoulder tension.",
    path: "/eye-shoulder"
  },
  {
    title: "5-Min Stretch",
    desc: "A full-body stretch when you're short on time.",
    path: "/5-min-stretch"
  },
  {
    title: "Posture Check",
    desc: "Quick alignment check to sit and stand better.",
    path: "/posture-check"
  },
  {
    title: "Evening Wind-Down",
    desc: "Relaxing movements to release daily stress.",
    path: "/evening-winddown"
  },
  {
    title: "Consistency Challenge",
    desc: "Daily streaks to build healthy movement habits.",
    path: "/consistency-challenge"
  }
];

function Explore() {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen px-6 py-20 text-white overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #1e3a8a, #312e81)"
      }}
    >
      {/* Background glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-black/30 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          Explore Mode
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Short, effective exercises and challenges designed to keep you moving,
          consistent, and energized throughout the day.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {exploreItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl 
                       hover:shadow-2xl hover:scale-105 transition-all 
                       duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {item.desc}
            </p>

            <div className="mt-4 text-sm font-medium text-violet-300">
              Try now →
            </div>
          </div>
        ))}
      </div>

      {/* Footer line */}
      <div className="relative z-10 text-center mt-20 text-white/70">
        Small movements • Big impact • Built for consistency
      </div>
    </section>
  );
}

export default Explore;
