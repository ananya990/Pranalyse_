import React from "react";

function FeaturesCard({ title, desc, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
      {icon && <img src={icon} alt={title} className="w-16 h-16 mb-4" />}
      <h3 className="text-xl font-semibold text-violet mb-2">{title}</h3>
      <p className="text-black">{desc}</p>
    </div>
  );
}

export default FeaturesCard;
