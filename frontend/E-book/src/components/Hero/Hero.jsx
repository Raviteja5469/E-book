import React, { useState } from "react";
import './Hero.css';
import {
  Book,
  Feather,
  Scroll,
  Award,
  Star,
  Brain,
  Lightbulb,
  Key,
  Rocket,
} from "lucide-react";

const iconList = [
  Book, Feather, Scroll, Award, Star, Brain, Lightbulb, Key, Rocket
];

export default function Hero() {
  const heroHeadingSmall = "LET'S UNLOCK YOUR POTENTIAL";
  const heroHeadingMain = "Dive Into Knowledge, Master Perfection.";
  const heroSubText =
    "Discover a world of ideas, strategies, and stories. Your journey to success starts with a single page.";

  const getRandomPosition = () => ({
    top: `${Math.floor(Math.random() * 80) + 5}%`,
    left: `${Math.floor(Math.random() * 80) + 5}%`,
  });

  const [icons, setIcons] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      Icon: iconList[i % iconList.length],
      position: getRandomPosition(),
    }))
  );

  const handleIconClick = (id) => {
    setIcons((prevIcons) =>
      prevIcons.map((icon) =>
        icon.id === id
          ? {
              ...icon,
              Icon: iconList[Math.floor(Math.random() * iconList.length)],
              position: getRandomPosition(),
            }
          : icon
      )
    );
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 py-16 bg-[#0F172A] text-[#F1F5F9] overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B21A8]/20 via-[#2DD4BF]/10 to-[#0F172A] z-0"></div>

      {/* Floating Icons */}
      {icons.map(({ id, Icon, position }) => (
        <div
          key={id}
          className="absolute transition-all duration-500 ease-in-out transform hover:scale-125 hover:rotate-12 cursor-pointer z-10 opacity-70"
          style={position}
          onClick={() => handleIconClick(id)}
        >
          <Icon color={Math.random() > 0.5 ? "#FBBF24" : "#2DD4BF"} size={40} />
        </div>
      ))}

      {/* Decorative Elements */}
      <div className="absolute top-16 left-12 w-24 h-24 bg-[#FBBF24]/30 rounded-full blur-2xl animate-[float_6s_infinite_alternate]" aria-hidden="true"></div>
      <div className="absolute bottom-12 right-16 w-32 h-32 bg-[#2DD4BF]/30 rounded-full blur-2xl animate-[floatReverse_5s_infinite_alternate]" aria-hidden="true"></div>

      {/* Main Content */}
      <div className="relative z-20 max-w-4xl flex flex-col items-center text-center space-y-8">
        <span className="block text-sm uppercase tracking-widest text-[#F1F5F9]/80 font-inter">
          {heroHeadingSmall}
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-playfair font-extrabold leading-tight drop-shadow-lg bg-gradient-to-r from-[#FBBF24] to-[#2DD4BF] bg-clip-text text-transparent">
          {heroHeadingMain}
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-[#F1F5F9]/90 font-inter">
          {heroSubText}
        </p>
        <button
          className="px-8 py-4 rounded-full bg-[#FBBF24] text-[#0F172A] font-inter font-semibold shadow-lg hover:shadow-[#FBBF24]/50 focus:outline-none focus:ring-4 focus:ring-[#2DD4BF]/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          aria-label="Start Reading"
        >
          Start Reading
        </button>
      </div>

      {/* Subtle Book Animation (CSS in Hero.css) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-20 book-animation z-10 opacity-30" aria-hidden="true"></div>
    </section>
  );
}