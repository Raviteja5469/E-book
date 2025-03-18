import React from "react";
import { useNavigate } from "react-router-dom";
import { Trophy, BookOpen, Download, Star } from "lucide-react";

const Achievements = () => {
  const navigate = useNavigate();

  const achievements = [
    {
      icon: <Trophy size={48} className="text-[#FBBF24] group-hover:text-[#2DD4BF] transition-colors duration-300" />,
      title: "New York Times",
      subtitle: "Best Seller",
      description: "Ranked #1 for 12 consecutive weeks",
      gradient: "from-[#6B21A8] to-[#2DD4BF]",
    },
    {
      icon: <Star size={48} className="text-[#FBBF24] group-hover:text-[#2DD4BF] transition-colors duration-300" />,
      title: "Reader's Choice",
      subtitle: "Award Winner",
      description: "Top pick among 1,000+ books in 2024",
      gradient: "from-[#6B21A8] to-[#2DD4BF]",
    },
    {
      icon: <Download size={48} className="text-[#FBBF24] group-hover:text-[#2DD4BF] transition-colors duration-300" />,
      title: "500K+",
      subtitle: "Downloads",
      description: "Across 120+ countries worldwide",
      gradient: "from-[#6B21A8] to-[#2DD4BF]",
    },
    {
      icon: <BookOpen size={48} className="text-[#FBBF24] group-hover:text-[#2DD4BF] transition-colors duration-300" />,
      title: "2,500+",
      subtitle: "5-Star Reviews",
      description: "Across major publishing platforms",
      gradient: "from-[#6B21A8] to-[#2DD4BF]",
    },
  ];

  return (
    <section className="bg-[#0F172A] py-16 px-6 lg:py-24 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#F1F5F9] mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#2DD4BF]">Literary Milestones</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#F1F5F9]/80 font-inter">
            Celebrate the accolades and impact our e-book has earned in the world of literature.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="relative group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#2DD4BF]/20 animate-[fadeIn_0.5s_ease-in-out] delay"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
              ></div>
              <div className="relative bg-[#1E293B]/80 border border-[#2DD4BF]/20 p-6 rounded-xl h-full backdrop-blur-sm">
                <div className="mb-5 flex justify-center">{achievement.icon}</div>
                <h3 className="text-[#F1F5F9] text-2xl font-playfair font-bold mb-2 text-center">
                  {achievement.title}
                </h3>
                <p className="text-[#FBBF24] font-inter font-medium mb-3 text-center">
                  {achievement.subtitle}
                </p>
                <p className="text-[#F1F5F9]/80 text-sm font-inter text-center">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-[#1E293B]/50 backdrop-blur-sm rounded-xl p-8 border border-[#2DD4BF]/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FBBF24]/10 to-[#2DD4BF]/10 blur-sm"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h3 className="text-2xl font-playfair font-bold text-[#F1F5F9] mb-2">
                Honored by the Literary Guild
              </h3>
              <p className="text-[#F1F5F9]/80 font-inter">
                Awarded Excellence in Literature for 2024
              </p>
            </div>
            <button
              onClick={() => navigate("/honors")}
              className="px-6 py-3 bg-[#FBBF24] text-[#0F172A] font-inter font-bold rounded-full hover:shadow-lg hover:shadow-[#FBBF24]/40 transform hover:scale-105 transition-all duration-200"
            >
              View All Honors
            </button>
            
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#2DD4BF]/20 rounded-full blur-3xl animate-[float_8s_infinite_alternate]" aria-hidden="true"></div>
    </section>
  );
};

export default Achievements;