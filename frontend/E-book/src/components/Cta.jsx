import React from "react";
import { ArrowRight } from "lucide-react";

const Cta = () => {
  return (
    <section className="py-10 px-4 bg-[#0F172A] text-[#F1F5F9] relative overflow-hidden">
      {/* Cosmic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B21A8]/20 via-[#2DD4BF]/10 to-[#0F172A] -z-10"></div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 bg-gradient-to-r from-[#FBBF24] to-[#2DD4BF] bg-clip-text text-transparent">
          Ready to Unlock Your Potential?
        </h2>
        {/* Subtext */}
        <p className="text-[#F1F5F9]/80 font-inter mb-8 max-w-2xl mx-auto">
          Join thousands of readers who have transformed their lives with our e-book’s powerful insights.
        </p>
        {/* Button */}
        <button
          className="px-8 py-3 bg-[#FBBF24] text-[#0F172A] rounded-full font-inter font-medium
                     hover:bg-[#FBBF24]/90 hover:shadow-[#FBBF24]/40 transition-all duration-300 flex items-center mx-auto group"
        >
          Get Started Now
          <ArrowRight
            size={20}
            className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
          />
        </button>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#2DD4BF]/20 rounded-full blur-3xl animate-[float_5s_infinite_alternate]" aria-hidden="true"></div>
    </section>
  );
};

export default Cta;
