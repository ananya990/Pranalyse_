import React from "react";
import { Link } from "react-router-dom";
import LogoBg from "../../public/assests/images/logobg.png"
import HeroVid from "../../public/assests/videos/hero-vid-bg.mp4"

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={HeroVid} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0 flex justify-center md:justify-center">
          <img
            src={LogoBg}
            alt="Pranalyse Logo"
            className="w-72 h-72 md:w-84 md:h-84 animate-fadeIn"
          />
        </div>

        {/* Right: Heading, subheading, CTA */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600 leading-tight mb-4">
            Analyse Your Prana(life)
          </h1>

          <p className="text-lg md:text-lg text-violet-700 mb-6">
            Move Better. Eat Smarter. Live Better.
          </p>

          <p className="text-gray-700 text-base md:text-lg mb-8">
            AI-powered real-time movement, posture, and wellness intelligence for a healthier, more mindful life.
          </p>

          <Link
            to="/yoga"
            className="bg-violet-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;