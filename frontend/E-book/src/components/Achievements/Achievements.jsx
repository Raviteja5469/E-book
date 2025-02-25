import React from "react";
import { useNavigate } from "react-router-dom";

const Achievements = () => {
  const navigate = useNavigate();

  const achievements = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500 group-hover:text-blue-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      title: "New York Times",
      subtitle: "Best Seller",
      description: "Ranked #1 for 12 consecutive weeks",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500 group-hover:text-purple-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: "Reader's Choice",
      subtitle: "Award Winner",
      description: "Top pick among 1,000+ books in 2024",
      gradient: "from-purple-500 to-purple-700",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 group-hover:text-green-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "500K+",
      subtitle: "Downloads",
      description: "Across 120+ countries worldwide",
      gradient: "from-green-500 to-green-700",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500 group-hover:text-yellow-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      title: "2,500+",
      subtitle: "5-Star Reviews",
      description: "Across major publishing platforms",
      gradient: "from-yellow-500 to-yellow-700",
    },
  ];

  return (
    <section className="bg-gray-900 py-16 px-6 lg:py-24 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Achievements</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Discover the impact our publication has made across the literary landscape, from awards and recognitions to readership milestones.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="relative group transition-transform duration-300 hover:scale-105 hover:rotate-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300`}></div>
              <div className="relative bg-gray-800 border border-gray-700 p-6 rounded-xl h-full overflow-hidden">
                <div className="mb-5 flex justify-center">{achievement.icon}</div>
                <h3 className="text-white text-2xl font-bold mb-2 text-center">{achievement.title}</h3>
                <p className="text-yellow-500 font-medium mb-3 text-center">{achievement.subtitle}</p>
                <p className="text-gray-300 text-sm text-center">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-purple-500/10 blur-sm"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Honored by the Literary Guild</h3>
              <p className="text-gray-300">Our publication received the prestigious Excellence in Literature award for 2024</p>
            </div>
            <button 
            onClick={() => navigate("/honors")}
            className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:shadow-lg hover:shadow-yellow-500/20 transform hover:scale-105 transition-all duration-200">
              View All Honors
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Achievements;
