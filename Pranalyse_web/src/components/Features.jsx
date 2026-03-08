import React from "react";

function Features() {
  return (
    <section className="bg-white px-6 py-16">
      <h2 className="text-3xl font-bold text-violet text-center mb-12">
        Why Pranalyse?
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            title: "AI Motion Analysis",
            desc: "Real-time posture and movement tracking using advanced AI models."
          },
          {
            title: "Personalized Wellness",
            desc: "Smart insights that adapt to your body, habits, and lifestyle."
          },
          {
            title: "Holistic Approach",
            desc: "Yoga, physiotherapy, diet, and movement—connected in one platform."
          }
        ].map((feature, i) => (
          <div
            key={i}
            className="rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition bg-gray-50"
          >
            <h3 className="text-xl font-semibold text-violet mb-3">
              {feature.title}
            </h3>
            <p className="text-black/80">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
