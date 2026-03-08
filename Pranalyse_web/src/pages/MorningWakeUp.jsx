import React from "react";
import { useNavigate } from "react-router-dom";

function MorningWakeUp() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-violet-50 via-white to-violet-50 text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[80vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
              Morning Wake-Up
            </h1>
            <p className="text-xl text-slate-700 mb-6">
              Energizing moves to start your day right.
            </p>
            <p className="text-slate-600 max-w-xl">
              A short routine designed to wake up your body, boost energy, and
              kickstart your day with improved focus and vitality.
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

      {/* ================= WHAT IS MORNING WAKE-UP ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-violet-800">
          What is Morning Wake-Up?
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-4xl">
          Morning Wake-Up is a quick set of stretches and energizing movements
          that gently activate your muscles, improve circulation, and prepare
          your body and mind for the day ahead.
        </p>
      </section>

      {/* ================= COMMON MORNING PROBLEMS ================= */}
      <section className="py-20 px-6 bg-violet-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-violet-800">
            Common Morning Stiffness & Fatigue
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Stiff neck and shoulders",
              "Lower back tension",
              "Low energy or grogginess",
              "Tight hips and hamstrings",
              "Reduced flexibility after sleep",
              "Difficulty focusing in the morning"
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
          Morning Exercises Included
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Neck rolls & shoulder shrugs",
            "Cat-Cow spine stretch",
            "Standing side stretches",
            "Hip openers",
            "Forward folds for hamstrings",
            "Deep breathing & posture reset"
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
            Benefits of Morning Wake-Up
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Boosts morning energy levels",
              "Reduces stiffness and tension",
              "Improves flexibility and mobility",
              "Enhances focus and mental clarity",
              "Promotes better posture",
              "Supports consistent daily movement habits"
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
          Start Your Day Energized
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          A few minutes of morning stretches can drastically improve your energy,
          mobility, and mood throughout the day.
        </p>
        <button
          onClick={() => navigate("/pose-detect")}
          className="px-10 py-4 text-lg font-semibold rounded-xl
            bg-violet-600 text-white
            hover:bg-violet-500
            shadow-lg hover:shadow-xl
            transition-all"
        >
          Start Morning Wake-Up Now
        </button>
      </section>

    </div>
  );
}

export default MorningWakeUp;
