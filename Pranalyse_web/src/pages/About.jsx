import React from "react";

function About() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-lavender via-white to-gray-50 text-black px-6 py-20">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-violet mb-6">
          About Pranalyse
        </h1>
        <p className="text-lg md:text-xl text-black/80 leading-relaxed">
          Pranalyse is an AI-powered movement intelligence platform built to
          understand the human body in motion and transform how people move,
          recover, and live.
        </p>
      </div>

      {/* Company Statement */}
      <div className="max-w-5xl mx-auto mb-20">
        <p className="text-center text-xl md:text-2xl font-light text-black/70 leading-relaxed">
          We combine <span className="font-semibold text-violet">artificial intelligence</span>, 
          <span className="font-semibold text-blue"> biomechanics</span>, and 
          <span className="font-semibold text-purple"> wellness science</span> 
          to deliver real-time, personalized insights across yoga, physiotherapy,
          fitness, and nutrition — all in one unified system.
        </p>
      </div>

      {/* Core Pillars */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        
        {/* Mission */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-violet mb-4">
            Our Mission
          </h2>
          <p className="text-black/75 leading-relaxed">
            To make wellness intelligent, safe, and accessible by empowering
            people with real-time feedback and data-driven guidance.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-blue mb-4">
            Our Vision
          </h2>
          <p className="text-black/75 leading-relaxed">
            To become the global intelligence layer for human movement, habits,
            and lifestyle optimization.
          </p>
        </div>

        {/* Impact */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-purple mb-4">
            Our Impact
          </h2>
          <p className="text-black/75 leading-relaxed">
            Reducing injuries, improving posture, and enabling millions to move
            better, recover faster, and live healthier lives.
          </p>
        </div>

      </div>

      {/* Closing Statement */}
      <div className="max-w-4xl mx-auto text-center mt-24">
        <p className="text-lg md:text-xl text-black/70">
          At Pranalyse, we believe the future of wellness lies in
          <span className="font-semibold text-violet"> understanding movement</span>,
          not just tracking it.
        </p>
      </div>
    </section>
  );
}

export default About;
