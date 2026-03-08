import React from "react";

function DemoSection({ title, demoSrc, isVideo=false }) {
  return (
    <section className="bg-blue text-white px-6 py-12 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
      {isVideo ? (
        <video src={demoSrc} autoPlay loop muted className="w-full max-w-lg mx-auto rounded-md shadow-lg" />
      ) : (
        <img src={demoSrc} alt={title} className="w-full max-w-lg mx-auto rounded-md shadow-lg" />
      )}
    </section>
  );
}

export default DemoSection;
