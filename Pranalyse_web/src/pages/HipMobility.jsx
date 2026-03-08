import React from "react";
import { useNavigate } from "react-router-dom";

function HipMobility() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-violet-50 via-white to-violet-50 text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[80vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1720788073779-04a9e709935c?q=80&w=1673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
              Hip Mobility
            </h1>
            <p className="text-xl text-slate-700 mb-6">
              Release tight hips from prolonged sitting.
            </p>
            <p className="text-slate-600 max-w-xl">
              A simple routine designed to stretch and strengthen your hips,
              improve flexibility, and relieve discomfort caused by long hours
              of sitting.
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

      {/* ================= WHAT IS HIP MOBILITY ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-violet-800">
          What is Hip Mobility?
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-4xl">
          Hip Mobility is a set of stretches and exercises that release tension
          in the hip flexors, glutes, and surrounding muscles. Regular practice
          improves posture, reduces lower back pain, and enhances overall
          movement efficiency.
        </p>
      </section>

      {/* ================= PROBLEMS ================= */}
      <section className="py-20 px-6 bg-violet-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-violet-800">
            Problems Caused by Tight Hips
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Hip stiffness and limited range of motion",
              "Lower back and pelvis discomfort",
              "Poor posture and anterior pelvic tilt",
              "Difficulty standing or walking long periods",
              "Tight glutes and hamstrings",
              "Reduced athletic performance or mobility"
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
          Hip Exercises Included
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Seated figure-four stretch",
            "Hip flexor lunges",
            "Glute bridges",
            "Pigeon pose",
            "Standing side lunges",
            "Pelvic tilts & rotations"
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
            Benefits of Hip Mobility
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Increases hip flexibility",
              "Reduces lower back pain",
              "Improves posture and pelvic alignment",
              "Enhances overall mobility",
              "Relieves tight glutes and hamstrings",
              "Supports daily movement and activity"
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
          Release Your Hips. Move Freely.
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Just a few minutes of daily hip mobility exercises can improve comfort,
          posture, and movement efficiency.
        </p>
        <button
          onClick={() => navigate("/pose-detect")}
          className="px-10 py-4 text-lg font-semibold rounded-xl
            bg-violet-600 text-white
            hover:bg-violet-500
            shadow-lg hover:shadow-xl
            transition-all"
        >
          Start Hip Mobility Now
        </button>
      </section>

    </div>
  );
}

export default HipMobility;
