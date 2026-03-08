import React from "react";
import YogaPose from "../../public/assests/images/YogaPose.png"
import { useNavigate } from "react-router-dom";

function Yoga() {
  const navigate = useNavigate()
  return (
    <section
      className="relative min-h-screen px-6 py-20 text-white overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #d5a6efff, #431564ff)"
      }}
    >
      {/* Background glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          Yoga, Reinvented with AI
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Experience real-time posture detection, alignment correction, and
          intelligent feedback designed to help you practice safely and
          confidently.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Demo Preview */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6">
          <img
            src={YogaPose}
            alt="Yoga Pose Detection Demo"
            className="w-full rounded-xl"
          />
        </div>

        {/* Features + CTA */}
        <div className="space-y-8">
          <ul className="space-y-4 text-white/90">
            <li className="flex items-start gap-3">
              <span className="text-violet-300 text-xl">●</span>
              Real-time pose detection and skeletal tracking
            </li>
            <li className="flex items-start gap-3">
              <span className="text-violet-300 text-xl">●</span>
              Intelligent alignment and posture feedback
            </li>
            <li className="flex items-start gap-3">
              <span className="text-violet-300 text-xl">●</span>
              Injury prevention through form correction
            </li>
            <li className="flex items-start gap-3">
              <span className="text-violet-300 text-xl">●</span>
              Designed for beginners and advanced practitioners
            </li>
          </ul>

          <button
            onClick={() => {
              navigate("/y-pose-detect")
            }}
            className="w-full md:w-auto bg-gradient-to-r from-violet-500 to-purple-600 hover:from-purple-600 hover:to-violet-500 text-white px-10 py-4 rounded-xl font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Start Pose Detection
          </button>
        </div>
      </div>

    </section>
  );
}

export default Yoga;
