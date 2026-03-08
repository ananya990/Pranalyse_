import React from "react";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Features from "../components/Features";
import CTASection from "../components/CTASection";

function Home() {
  return (
    <div className="relative overflow-hidden bg-white text-black">
      <Hero />
      <Problem />
      <Features />
      <CTASection />
    </div>
  );
}

export default Home;
