import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Rocket, BookOpen, Brain, Lightbulb } from "lucide-react";

const features = [
  { title: "Goals", icon: <Target size={40} className="text-[#FBBF24]" /> },
  { title: "Vision", icon: <Eye size={40} className="text-[#FBBF24]" /> },
  { title: "Motivation", icon: <Rocket size={40} className="text-[#FBBF24]" /> },
  { title: "Knowledge", icon: <BookOpen size={40} className="text-[#FBBF24]" /> },
  { title: "Insight", icon: <Brain size={40} className="text-[#FBBF24]" /> },
  { title: "Inspiration", icon: <Lightbulb size={40} className="text-[#FBBF24]" /> },
];

export default function Benefits() {
  return (
    <div className="relative min-h-screen w-full py-10">
      {/* Cosmic Gradient Background */}
      <div className="absolute inset-0 bg-[#0F172A] bg-gradient-to-br from-[#6B21A8]/20 via-[#2DD4BF]/10 to-[#0F172A] -z-10" />

      <section className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#F1F5F9]">
            What You’ll <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#2DD4BF]">Gain</span>
          </h2>
          <p className="mt-2 text-base md:text-lg text-[#F1F5F9]/80 font-inter max-w-xl mx-auto">
            Unlock the tools and insights to transform your journey with this e-book.
          </p>
        </motion.div>

        {/* Grid of Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#1E293B]/80 rounded-xl p-6 text-center border border-[#2DD4BF]/20 backdrop-blur-sm
                         hover:shadow-xl hover:shadow-[#2DD4BF]/30 transition-all duration-300 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-playfair font-semibold text-[#FBBF24] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#F1F5F9]/80 font-inter mb-4">
                Discover strategies and ideas to elevate your potential.
              </p>
              <a
                href="#"
                className="text-[#2DD4BF] text-sm font-inter font-medium px-3 py-2 border border-[#2DD4BF]/50 rounded-md 
                           hover:bg-[#2DD4BF]/20 hover:text-[#F1F5F9] transition-colors duration-300"
              >
                Learn More ➝
              </a>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          className="mt-12 bg-[#1E293B]/50 rounded-xl p-8 text-center max-w-2xl mx-auto border border-[#2DD4BF]/30 backdrop-blur-sm shadow-xl shadow-[#0F172A]/50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-playfair font-bold text-[#FBBF24] mb-2">
            Ready to Transform?
          </h3>
          <p className="text-[#F1F5F9]/80 font-inter mb-6">
            Get the full e-book to unlock a universe of knowledge and growth.
          </p>
          <a
            href="#purchase"
            className="inline-block px-6 py-3 rounded-full bg-[#FBBF24] text-[#0F172A] font-inter font-medium 
                       shadow-md hover:bg-[#FBBF24]/90 hover:shadow-[#FBBF24]/40 transition-all duration-300"
          >
            Get the Full Book Now
          </a>
        </motion.div>
      </section>

      {/* Decorative Element */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#2DD4BF]/20 rounded-full blur-3xl animate-[float_7s_infinite_alternate]" aria-hidden="true"></div>
    </div>
  );
}