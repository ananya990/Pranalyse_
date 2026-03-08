import React from "react";
import { useNavigate } from "react-router-dom";

function PostureCheck() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-violet-50 via-white to-violet-50 text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[80vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556817411-31ae72fa3ea0')",
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
              Posture Check
            </h1>
            <p className="text-xl text-slate-700 mb-6">
              Quick alignment check for better posture.
            </p>
            <p className="text-slate-600 max-w-xl">
              Simple movements to assess and correct your posture. Sit and stand
              taller, feel more confident, and prevent aches caused by poor
              alignment.
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

      {/* ================= WHAT IS POSTURE CHECK ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-violet-800">
          What is Posture Check?
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-4xl">
          Posture Check is a quick routine of stretches and alignment exercises
          designed to help you identify and correct poor posture habits.
          It promotes spinal health, reduces strain on muscles, and improves
          overall body awareness.
        </p>
      </section>

      {/* ================= COMMON PROBLEMS ================= */}
      <section className="py-20 px-6 bg-violet-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-violet-800">
            Why Posture Matters
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Rounded shoulders",
              "Forward head posture",
              "Lower back tension",
              "Fatigue and low energy",
              "Neck and shoulder stiffness",
              "Poor body alignment"
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
          Quick Posture Exercises
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Chin tucks",
            "Shoulder blade squeezes",
            "Wall angels",
            "Seated spinal alignment",
            "Chest opener stretch",
            "Core activation exercises"
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
            Benefits of Posture Check
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Improves spine alignment",
              "Reduces neck and back tension",
              "Boosts confidence",
              "Prevents musculoskeletal problems",
              "Increases energy and focus",
              "Supports healthy movement habits"
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
          Align Your Body in Just Minutes
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Quick posture checks and exercises can transform your comfort, energy,
          and confidence throughout the day.
        </p>
        <button
          onClick={() => navigate("/pose-detect")}
          className="px-10 py-4 text-lg font-semibold rounded-xl
            bg-violet-600 text-white
            hover:bg-violet-500
            shadow-lg hover:shadow-xl
            transition-all"
        >
          Start Posture Check Now
        </button>
      </section>

    </div>
  );
}

export default PostureCheck;
