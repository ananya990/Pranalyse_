import React from "react";
import { useNavigate } from "react-router-dom";

function FiveMinStretch() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-violet-50 via-white to-violet-50 text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[80vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1')",
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
              5-Min Stretch
            </h1>
            <p className="text-xl text-slate-700 mb-6">
              Full-body stretch in just 5 minutes.
            </p>
            <p className="text-slate-600 max-w-xl">
              A quick, effective routine designed to wake up your body, improve
              flexibility, and relieve tension — perfect for when you’re short
              on time.
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

      {/* ================= WHAT IS 5-MIN STRETCH ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-violet-800">
          What is 5-Min Stretch?
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-4xl">
          The 5-Min Stretch is a compact full-body routine combining gentle
          stretches, yoga-inspired movements, and posture resets. It helps
          release stiffness, increase circulation, and energize your body in
          just a few minutes.
        </p>
      </section>

      {/* ================= COMMON PROBLEMS ================= */}
      <section className="py-20 px-6 bg-violet-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-violet-800">
            Problems Caused by Prolonged Sitting
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Neck and shoulder stiffness",
              "Lower back discomfort",
              "Tight hips",
              "Reduced flexibility",
              "Mental fatigue",
              "Posture deterioration"
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
          Quick Exercises Included
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Neck stretches",
            "Shoulder rolls & chest opener",
            "Seated spinal twist",
            "Hip flexor stretch",
            "Forward fold",
            "Breathing & posture reset"
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
            Benefits of 5-Min Stretch
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Releases full-body tension",
              "Improves flexibility",
              "Boosts energy & focus",
              "Enhances circulation",
              "Supports posture & alignment",
              "Quick and easy for busy schedules"
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
          Refresh Your Body in Just 5 Minutes
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Short, consistent movements can make a huge difference in your daily
          energy, posture, and comfort.
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

export default FiveMinStretch;
