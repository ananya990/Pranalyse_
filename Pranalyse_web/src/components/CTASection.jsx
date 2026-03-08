import React from "react";
import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="relative px-6 py-20 text-center text-white overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600">
      
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Ready to move smarter?
        </h2>

        <p className="text-lg md:text-xl mb-10 text-white/90">
          Start your journey with <span className="font-semibold">Pranalyse</span> and get AI-powered feedback instantly.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          {/* Primary CTA */}
          <Link
            to="/signin"
            className="bg-white text-violet-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Sign In
          </Link>


        </div>
      </div>
    </section>
  );
}

export default CTASection;
