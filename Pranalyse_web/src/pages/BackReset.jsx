import React from "react";
import { useNavigate } from "react-router-dom";

function BackReset() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-violet-50 via-white to-violet-50 text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[80vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1663134070608-85c0ce9e3f3b?q=80&w=3236&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
              Back Reset
            </h1>
            <p className="text-xl text-slate-700 mb-6">
              Loosen your spine and improve posture in minutes.
            </p>
            <p className="text-slate-600 max-w-xl">
              A focused routine to release tension in your back, restore spinal
              alignment, and reduce stiffness caused by prolonged sitting or
              poor posture.
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

      {/* ================= WHAT IS BACK RESET ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-violet-800">
          What is Back Reset?
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-4xl">
          Back Reset is a set of gentle stretches, mobility exercises, and
          posture-correcting movements designed to relieve tension, strengthen
          the spine, and improve overall back flexibility.
        </p>
      </section>

      {/* ================= PROBLEMS ================= */}
      <section className="py-20 px-6 bg-violet-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-violet-800">
            Common Back Problems from Sitting
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Lower back pain and stiffness",
              "Rounded shoulders and poor posture",
              "Tight hip flexors affecting spine",
              "Upper back tension",
              "Reduced mobility and flexibility",
              "Fatigue and discomfort during work"
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
          Exercises & Yoga Included
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Cat-Cow stretch",
            "Seated spinal twist",
            "Child’s pose for back release",
            "Hip opener stretches",
            "Thoracic spine mobilization",
            "Posture reset breathing"
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
            Benefits of Back Reset
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Relieves back stiffness and pain",
              "Improves spinal alignment and posture",
              "Enhances flexibility and mobility",
              "Reduces risk of long-term back issues",
              "Boosts energy and reduces fatigue",
              "Encourages daily movement consistency"
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
          Reset Your Back. Feel the Freedom.
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Just a few minutes of mindful back movements can greatly improve your
          comfort, mobility, and posture.
        </p>
        <button
          onClick={() => navigate("/pose-detect")}
          className="px-10 py-4 text-lg font-semibold rounded-xl
            bg-violet-600 text-white
            hover:bg-violet-500
            shadow-lg hover:shadow-xl
            transition-all"
        >
          Start Back Reset Now
        </button>
      </section>

    </div>
  );
}

export default BackReset;
