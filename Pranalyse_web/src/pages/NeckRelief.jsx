import React from "react";
import { useNavigate } from "react-router-dom";

function NeckRelief() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-violet-50 via-white to-violet-50 text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[80vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1679596990656-a0f2fd1fb3a6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
              Neck Relief
            </h1>
            <p className="text-xl text-slate-700 mb-6">
              Gentle movements to ease neck stiffness and tension.
            </p>
            <p className="text-slate-600 max-w-xl">
              A focused routine designed to relieve tight neck muscles, improve
              mobility, and reduce pain caused by screen time and poor posture.
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

      {/* ================= WHAT IS NECK RELIEF ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-violet-800">
          What is Neck Relief?
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-4xl">
          Neck Relief is a short, targeted movement sequence that focuses on
          releasing tension in the neck, upper shoulders, and upper spine. It is
          ideal for people who spend long hours on laptops, phones, or desks.
        </p>
      </section>

      {/* ================= PROBLEMS ================= */}
      <section className="py-20 px-6 bg-violet-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-violet-800">
            Common Neck Problems from Screen Time
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Neck stiffness and limited mobility",
              "Tech neck and forward head posture",
              "Tension headaches",
              "Upper shoulder tightness",
              "Burning or aching neck pain",
              "Reduced concentration due to discomfort"
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
          Neck Exercises Included
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Neck flexion & extension",
            "Side neck stretches",
            "Neck rotations",
            "Upper trapezius release",
            "Shoulder rolls",
            "Breathing for tension release"
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
            Benefits of Neck Relief
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Relieves neck stiffness and pain",
              "Improves head and neck posture",
              "Reduces headaches caused by tension",
              "Increases neck mobility",
              "Improves comfort during work",
              "Prevents long-term neck strain"
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
          Relax Your Neck. Feel the Difference.
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Just a few minutes of mindful movement can greatly reduce neck tension
          and improve your daily comfort.
        </p>
        <button
          onClick={() => navigate("/pose-detect")}
          className="px-10 py-4 text-lg font-semibold rounded-xl
            bg-violet-600 text-white
            hover:bg-violet-500
            shadow-lg hover:shadow-xl
            transition-all"
        >
          Start Neck Relief Now
        </button>
      </section>

    </div>
  );
}

export default NeckRelief;
