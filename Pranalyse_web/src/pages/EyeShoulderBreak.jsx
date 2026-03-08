import React from "react";
import { useNavigate } from "react-router-dom";

function EyeShoulder() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-violet-50 via-white to-violet-50 text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[80vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Light overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-violet-800">
              Eye & Shoulder Break
            </h1>
            <p className="text-xl text-slate-700 mb-6">
              Reduce screen fatigue and shoulder tension.
            </p>
            <p className="text-slate-600 max-w-xl">
              A set of simple exercises and stretches to refresh your eyes,
              relieve shoulder and neck tension, and help you stay comfortable
              during long hours in front of screens.
            </p>
          </div>

          {/* Right CTA */}
          <div className="flex md:justify-end">
            <button
              onClick={() => navigate("/pose-detect")}
              className="px-8 py-4 text-lg font-semibold rounded-xl
                bg-violet-600 text-white
                hover:bg-violet-500
                shadow-lg hover:shadow-xl
                transition-all duration-300"
            >
              Start Now
            </button>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS EYE & SHOULDER BREAK ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-violet-800">
          What is Eye & Shoulder Break?
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-4xl">
          Eye & Shoulder Break is a quick routine of eye exercises, neck stretches,
          and shoulder mobility movements designed to prevent strain from prolonged
          screen time. It refreshes your mind and reduces physical tension.
        </p>
      </section>

      {/* ================= COMMON PROBLEMS ================= */}
      <section className="py-20 px-6 bg-violet-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-violet-800">
            Problems Caused by Screen & Desk Work
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Eye strain and dry eyes",
              "Neck stiffness",
              "Rounded shoulders",
              "Tension headaches",
              "Lower back discomfort",
              "Reduced focus and fatigue"
            ].map((problem, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-violet-100"
              >
                <p className="text-slate-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXERCISES ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-violet-800">
          Exercises Included
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Eye rolling & blinking exercises",
            "Neck side stretches",
            "Shoulder rolls",
            "Upper back extensions",
            "Chest opener stretches",
            "Seated posture reset"
          ].map((exercise, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-violet-100 to-indigo-100
              p-6 rounded-xl shadow-sm border border-violet-200"
            >
              <p className="font-medium text-slate-700">{exercise}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-20 px-6 bg-violet-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-violet-800">
            Benefits of Eye & Shoulder Break
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Reduces eye strain and headaches",
              "Relieves shoulder and neck tension",
              "Improves posture",
              "Enhances focus and productivity",
              "Prevents long-term musculoskeletal issues",
              "Supports consistent healthy breaks"
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="text-violet-600 text-xl">✔</div>
                <p className="text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl font-extrabold mb-6 text-violet-800">
          Refresh Your Eyes & Shoulders
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Just a few minutes of daily exercises can relieve tension, refresh your mind,
          and improve overall comfort at work.
        </p>
        <button
          onClick={() => navigate("/pose-detect")}
          className="px-10 py-4 text-lg font-semibold rounded-xl
            bg-violet-600 text-white
            hover:bg-violet-500
            shadow-lg hover:shadow-xl
            transition-all"
        >
          Start Now
        </button>
      </section>

    </div>
  );
}

export default EyeShoulder;
