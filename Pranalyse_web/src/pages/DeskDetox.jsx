import React from "react";
import { useNavigate } from "react-router-dom";

function DeskDetox() {
    const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-b from-violet-50 via-white to-violet-50 text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[80vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf')",
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
              Desk Detox
            </h1>
            <p className="text-xl text-slate-700 mb-6">
              Undo long hours of sitting. Move better. Feel lighter.
            </p>
            <p className="text-slate-600 max-w-xl">
              A simple, guided movement routine designed for desk workers to
              release stiffness, correct posture, and restore natural mobility.
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
              transition-all duration-300">
              Start Now
            </button>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS DESK DETOX ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-violet-800">
          What is Desk Detox?
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-4xl">
          Desk Detox is a curated set of gentle stretches, mobility drills, and
          yoga-inspired movements created to counteract the physical stress
          caused by prolonged sitting. It helps reset your body alignment,
          release tight muscles, and improve circulation — all in just a few
          minutes.
        </p>
      </section>

      {/* ================= PROBLEMS OF LONG SITTING ================= */}
      <section className="py-20 px-6 bg-violet-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-violet-800">
            Problems Caused by Prolonged Sitting
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Neck and shoulder stiffness",
              "Lower back and spine pain",
              "Poor posture and rounded shoulders",
              "Tight hips and weak glutes",
              "Reduced blood circulation",
              "Mental fatigue and low energy"
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

      {/* ================= EXERCISES & YOGA ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-violet-800">
          Exercises & Yoga Included
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Neck release & mobility",
            "Seated spinal twist",
            "Shoulder rolls & chest opener",
            "Hip flexor stretch",
            "Forward fold (seated/standing)",
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
            Benefits of Desk Detox
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Reduces pain and stiffness",
              "Improves posture and flexibility",
              "Boosts focus and productivity",
              "Enhances blood circulation",
              "Prevents long-term musculoskeletal issues",
              "Promotes consistency in daily movement"
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
          Take 5 Minutes. Reset Your Body.
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Small movements done consistently can create massive changes in how
          you feel every day.
        </p>
        <button 
        onClick={() => navigate("/pose-detect")}
        className="px-10 py-4 text-lg font-semibold rounded-xl
          bg-violet-600 text-white
          hover:bg-violet-500
          shadow-lg hover:shadow-xl
          transition-all">
          Start Desk Detox Now
        </button>
      </section>

    </div>
  );
}

export default DeskDetox;
