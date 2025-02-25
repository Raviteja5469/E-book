import React, { useState } from "react";
import {
  BookOpenCheck,
  Award,
  Star,
  GraduationCap,
  Brain,
  Lightbulb,
  PenTool,
  Key,
  FileSearch,
  Atom,
  Code,
  Layers,
  Heart,
  Shield,
  Monitor,
  Pencil,
  Compass,
  Globe,
  Music,
  Rocket,
} from "lucide-react";

const iconList = [
  BookOpenCheck, Award, Star, GraduationCap, Brain, Lightbulb, PenTool, Key, 
  FileSearch, Atom, Code, Layers, Heart, Shield, Monitor, Pencil, Compass, 
  Globe, Music, Rocket
];

export default function Hero() {
  const heroHeadingSmall = "LET'S MAKE THE BEST INVESTMENT";
  const heroHeadingMain = "Read More And Make Success The Result Of Perfection.";
  const heroSubText =
    "Explore the limitless potential of knowledge. With our books, dive into new ideas, strategies, and opportunities to transform your future.";

  // Generate random position within the screen bounds
  const getRandomPosition = () => ({
    top: `${Math.floor(Math.random() * 80) + 5}%`,
    left: `${Math.floor(Math.random() * 80) + 5}%`,
  });

  // State for 20 dynamic icons
  const [icons, setIcons] = useState(
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      Icon: iconList[i % iconList.length], // Cycle through icons
      position: getRandomPosition(),
    }))
  );

  // Function to handle icon click
  const handleIconClick = (id) => {
    setIcons((prevIcons) =>
      prevIcons.map((icon) =>
        icon.id === id
          ? {
              ...icon,
              Icon: iconList[Math.floor(Math.random() * iconList.length)], // Change to a random icon
              position: getRandomPosition(), // Move to a new random position
            }
          : icon
      )
    );
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      
      {/* Floating Icons */}
      {icons.map(({ id, Icon, position }) => (
        <div
          key={id}
          className="absolute transition-all duration-500 ease-in-out transform hover:scale-125 cursor-pointer z-10"
          style={position}
          onClick={() => handleIconClick(id)}
        >
          <Icon color={`hsl(${Math.random() * 360}, 100%, 70%)`} size={48} />
        </div>
      ))}

      {/* Decorative Floating Shapes */}
      <div className="absolute top-10 left-8 w-32 h-32 bg-purple-700/60 rounded-full blur-3xl animate-[float_5s_infinite_alternate]" aria-hidden="true"></div>
      <div className="absolute bottom-8 right-8 w-36 h-36 bg-pink-500/60 rounded-full blur-3xl animate-[floatReverse_6s_infinite_alternate]" aria-hidden="true"></div>
      <div className="absolute -top-16 right-1/4 w-64 h-64 bg-green-500/30 rounded-full blur-3xl animate-[floatReverse_7s_infinite_alternate]" aria-hidden="true"></div>

      {/* Main Content */}
      <div className="relative z-20 max-w-4xl flex flex-col items-center text-center space-y-8">
        <span className="block text-sm uppercase tracking-wider text-gray-200/80">
          {heroHeadingSmall}
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-xl">
          {heroHeadingMain}
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-gray-100/90">
          {heroSubText}
        </p>
        <button
          className="px-8 py-4 rounded-full bg-white text-gray-900 font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition-transform duration-300 hover:scale-105 text-sm sm:text-base"
          aria-label="Get Started"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
