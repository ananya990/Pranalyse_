import React from "react";
import PhysioPose from "../../public/assests/images/PhysioPose.png"
import { useNavigate } from "react-router-dom";

function Physio() {
  const navigate = useNavigate()
  return (
    <section
      className="relative min-h-screen px-6 py-20 text-white overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #e0f2fe, #1e3a8a)"
      }}
    >
      {/* Background glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          AI-Powered Physiotherapy
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Guided rehabilitation with real-time posture correction, injury-safe
          movements, and progress tracking—designed with clinical precision.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Demo Preview */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6">
          <img
            src={PhysioPose}
            alt="Physiotherapy Pose Detection Demo"
            className="w-full rounded-xl"
          />
        </div>

        {/* Features */}
        <div className="space-y-8">
          <ul className="space-y-4 text-white/90">
            <li className="flex items-start gap-3">
              <span className="text-blue-300 text-xl">●</span>
              Real-time rehabilitation pose detection
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-300 text-xl">●</span>
              Safe movement enforcement to prevent reinjury
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-300 text-xl">●</span>
              Joint-specific correction and alignment feedback
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-300 text-xl">●</span>
              Progress tracking for recovery milestones
            </li>
          </ul>

          {/* CTA */}
          <button
            onClick={() => {
              navigate("/p-pose-detect");
            }}
            className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white px-10 py-4 rounded-xl font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Start Rehab Session
          </button>
        </div>
      </div>
    </section>
  );
}

export default Physio;
