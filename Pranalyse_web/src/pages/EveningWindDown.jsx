import React from "react";
import { useNavigate } from "react-router-dom";

function EveningWindDown() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-violet-50 via-white to-violet-50 text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[80vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
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
              Evening Wind-Down
            </h1>
            <p className="text-xl text-slate-700 mb-6">
              Relax your body. Release daily stress.
            </p>
            <p className="text-slate-600 max-w-xl">
              Gentle stretches and calming movements to help you unwind after
              a busy day, reduce tension, and prepare your body and mind for
              restful sleep.
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

      {/* ================= WHAT IS EVENING WIND-DOWN ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-violet-800">
          What is Evening Wind-Down?
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-4xl">
          Evening Wind-Down is a collection of soothing stretches, yoga poses,
          and breathing exercises that help release accumulated tension, calm
          your nervous system, and prepare your body for rest.
        </p>
      </section>

      {/* ================= DAILY STRESS PROBLEMS ================= */}
      <section className="py-20 px-6 bg-violet-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-violet-800">
            Common Daily Stress Effects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Muscle tension and stiffness",
              "Headaches and neck strain",
              "Fatigue and mental stress",
              "Difficulty sleeping",
              "Shoulder and back discomfort",
              "Anxiety or restlessness"
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
          Relaxing Exercises & Yoga
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Cat-Cow stretches",
            "Seated forward fold",
            "Legs-up-the-wall pose",
            "Neck & shoulder release",
            "Deep breathing exercises",
            "Gentle spinal twists"
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
            Benefits of Evening Wind-Down
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Reduces muscle tension",
              "Calms the nervous system",
              "Improves sleep quality",
              "Eases back and neck discomfort",
              "Enhances relaxation and mindfulness",
              "Promotes recovery after daily activity"
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
          Unwind and Recharge Tonight
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          A few minutes of gentle stretching each evening can help you sleep
          better and wake up refreshed.
        </p>
        <button
          onClick={() => navigate("/pose-detect")}
          className="px-10 py-4 text-lg font-semibold rounded-xl
            bg-violet-600 text-white
            hover:bg-violet-500
            shadow-lg hover:shadow-xl
            transition-all"
        >
          Start Evening Wind-Down
        </button>
      </section>

    </div>
  );
}

export default EveningWindDown;
