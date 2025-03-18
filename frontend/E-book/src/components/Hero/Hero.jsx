import React from "react";
import { motion } from "framer-motion";

// E-book image (replace with your cover)
const ebookCover = "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg";

export default function Hero() {
  const heroHeadingSmall = "DISCOVER YOUR PATH";
  const heroHeadingMain = "Ride the Wave of Wisdom";
  const heroSubText =
    "Embark on a journey of knowledge with our e-book—simple, profound, and yours to explore.";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.4 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const ebookVariants = {
    initial: { opacity: 0, y: 100, scale: 0.8 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
    hover: { y: -10, rotate: 2, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-16 bg-[#0F172A] text-[#F1F5F9] overflow-hidden">
      {/* Starry Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#6B21A8]/20 to-[#2DD4BF]/10 -z-10"></div>

      {/* Cosmic Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#2DD4BF]/30 to-transparent rounded-t-[50%] shadow-[0_-10px_30px_rgba(43,212,191,0.5)] animate-[waveSway_6s_infinite_ease-in-out]"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-20 max-w-5xl flex flex-col items-center text-center space-y-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Small Heading */}
        <motion.span
          className="text-sm uppercase tracking-widest text-[#F1F5F9]/80 font-inter"
          variants={textVariants}
        >
          {heroHeadingSmall}
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-extrabold text-[#F1F5F9] drop-shadow-md"
          variants={textVariants}
        >
          {heroHeadingMain.split(" ").map((word, index) => (
            <span key={index} className={index === 2 ? "bg-gradient-to-r from-[#FBBF24] to-[#2DD4BF] bg-clip-text text-transparent" : ""}>
              {word}{" "}
            </span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="max-w-xl text-base sm:text-lg text-[#F1F5F9]/90 font-inter"
          variants={textVariants}
        >
          {heroSubText}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="px-8 py-4 rounded-full bg-[#FBBF24] text-[#0F172A] font-inter font-semibold shadow-md relative overflow-hidden group"
          variants={textVariants}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(251, 191, 36, 0.7)" }}
          aria-label="Start Reading"
        >
          <span className="relative z-10">Start Reading</span>
          <span className="absolute inset-0 bg-[#2DD4BF] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full transform scale-0 group-hover:scale-150 origin-center"></span>
        </motion.button>
      </motion.div>

      {/* E-Book Reveal */}
      <motion.div
        className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 z-10"
        initial="initial"
        animate="animate"
        variants={ebookVariants}
        whileHover="hover"
      >
        <div className="w-48 h-64 sm:w-64 sm:h-80 bg-[#1E293B] rounded-lg shadow-[0_10px_40px_rgba(43,212,191,0.4)] border border-[#2DD4BF]/30 overflow-hidden">
          <img
            src={ebookCover}
            alt="E-Book Cover"
            className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:brightness-110"
          />
        </div>
      </motion.div>

      {/* Minimal Starfield */}
      <div className="absolute inset-0 -z-5">
        <div className="w-1 h-1 bg-[#FBBF24] rounded-full absolute top-1/4 left-1/5 animate-[twinkle_3s_infinite]"></div>
        <div className="w-1 h-1 bg-[#2DD4BF] rounded-full absolute bottom-1/3 right-1/4 animate-[twinkle_4s_infinite_delay-1s]"></div>
      </div>
    </section>
  );
}