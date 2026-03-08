import React from "react";

function Problem() {
  return (
    <section className="bg-lavender px-6 py-12 mt-10">
      <h2 className="text-3xl font-bold text-violet text-center mb-8">
        The Problem
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {[
          { title: "Wrong Form", desc: "Workout & yoga without feedback causes injury and slow recovery." },
          { title: "Disconnected Habits", desc: "Diet advice rarely aligns with movement and lifestyle." },
          { title: "No Feedback", desc: "Apps solve one problem at a time, leaving users frustrated." }
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-violet mb-2">{item.title}</h3>
            <p className="text-black">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Problem;
