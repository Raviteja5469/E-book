import React, { useState } from "react";

const HonorsPage = () => {
  // State to track which award is being viewed in detail
  const [activeAward, setActiveAward] = useState(null);

  // Award categories
  const categories = [
    { id: "literary", name: "Literary Excellence" },
    { id: "readers", name: "Reader's Choice" },
    { id: "industry", name: "Industry Recognition" },
    { id: "international", name: "International Awards" },
  ];

  // Awards data
  const awards = [
    {
      id: 1,
      name: "Golden Quill Award",
      organization: "International Literary Foundation",
      year: 2025,
      category: "literary",
      description: "Awarded for outstanding contribution to contemporary literature that pushes boundaries and inspires readers worldwide.",
      icon: "🏆",
    },
    {
      id: 2,
      name: "Diamond Bookmark",
      organization: "Reader's Digest Annual Selection",
      year: 2024,
      category: "readers",
      description: "Selected by a panel of 10,000 readers as the most impactful non-fiction work that changed their perspective on personal growth.",
      icon: "🔖",
    },
    {
      id: 3,
      name: "Platinum Pages",
      organization: "National Book Critics Circle",
      year: 2024,
      category: "literary",
      description: "Recognized for exceptional storytelling technique and narrative structure that engages readers from beginning to end.",
      icon: "📚",
    },
    {
      id: 4,
      name: "Crystal Pen",
      organization: "Author's Guild of Excellence",
      year: 2023,
      category: "industry",
      description: "Honored for innovative writing style and groundbreaking approach to the subject matter that sets new standards in the industry.",
      icon: "✒️",
    },
    {
      id: 5,
      name: "Global Literature Prize",
      organization: "International Book Fair",
      year: 2024,
      category: "international",
      description: "Selected among thousands of publications worldwide for cultural impact and accessibility across diverse audiences.",
      icon: "🌍",
    },
    {
      id: 6,
      name: "Readers' Heart Award",
      organization: "GoodReads Choice Awards",
      year: 2024,
      category: "readers",
      description: "Voted by over 2 million readers as the most emotionally resonant and personally transformative book of the year.",
      icon: "❤️",
    },
    {
      id: 7,
      name: "Publisher's Crown",
      organization: "Association of American Publishers",
      year: 2023,
      category: "industry",
      description: "Recognized for exceptional market performance while maintaining the highest standards of literary quality.",
      icon: "👑",
    },
    {
      id: 8,
      name: "Eastern Sun Award",
      organization: "Asian Literature Council",
      year: 2024,
      category: "international",
      description: "Honored for successfully bridging cultural understanding and providing valuable insights across Eastern and Western perspectives.",
      icon: "🌅",
    },
  ];

  // State to track active category filter
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter awards based on active category
  const filteredAwards = activeCategory === "all" 
    ? awards 
    : awards.filter(award => award.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute -bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-yellow-500/10 rounded-full text-yellow-500 text-sm font-medium mb-4">
            RECOGNITION & PRESTIGE
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Honors</span> & Accolades
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Discover the remarkable journey of recognition our publication has received from esteemed institutions and readers worldwide.
          </p>
        </div>

        {/* Featured Award - Highlight Section */}
        <div className="mb-16 bg-gradient-to-r from-yellow-500/5 to-purple-500/5 rounded-2xl p-8 backdrop-blur-sm border border-yellow-500/10 relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-yellow-500/30 blur-2xl"></div>
          <div className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full bg-purple-500/30 blur-2xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-6xl transform rotate-12 shadow-lg shadow-yellow-500/30">
                🏆
              </div>
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h3 className="text-3xl font-bold text-white mb-2">Book of the Year</h3>
              <p className="text-yellow-500 font-medium mb-4">National Literary Association, 2025</p>
              <p className="text-gray-300">
                Our flagship publication was honored with the prestigious Book of the Year award, recognizing its extraordinary impact on readers and significant contribution to contemporary literature.
              </p>
              <button className="mt-6 px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:shadow-lg hover:shadow-yellow-500/20 transform hover:scale-105 transition-all duration-200">
                Read the Announcement
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === "all"
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              All Awards
            </button>
            
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAwards.map((award) => (
            <div
              key={award.id}
              className={`bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-500/30 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:rotate-1 ${
                activeAward === award.id ? "ring-2 ring-yellow-500" : ""
              }`}
              onClick={() => setActiveAward(activeAward === award.id ? null : award.id)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-500/30 flex items-center justify-center text-3xl">
                    {award.icon}
                  </div>
                  <span className="text-yellow-500 font-bold">{award.year}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{award.name}</h3>
                <p className="text-yellow-400 text-sm mb-4">{award.organization}</p>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeAward === award.id ? "max-h-40" : "max-h-0"
                }`}>
                  <p className="text-gray-300 text-sm">{award.description}</p>
                  <button className="mt-4 text-yellow-500 text-sm font-medium hover:text-yellow-400 flex items-center">
                    View Certificate
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
                
                <button 
                  className="mt-4 text-gray-400 text-sm flex items-center hover:text-yellow-500 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveAward(activeAward === award.id ? null : award.id);
                  }}
                >
                  {activeAward === award.id ? "Show Less" : "Learn More"}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 ml-1 transition-transform duration-200 ${activeAward === award.id ? "rotate-180" : ""}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Timeline Section */}
        <div className="mt-24 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-500/50 via-yellow-500/30 to-transparent"></div>
          
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Journey of Excellence
          </h2>
          
          <div className="space-y-12 relative z-10">
            {/* Timeline Item 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <h3 className="text-xl font-bold text-white mb-2">First Recognition</h3>
                <p className="text-yellow-500 font-medium mb-2">Fall 2023</p>
                <p className="text-gray-300">Our journey began with a nomination at the New Authors Festival, marking the first industry acknowledgment of our work.</p>
              </div>
              <div className="mx-auto md:mx-0 my-4 md:my-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center z-10">
                <div className="w-4 h-4 rounded-full bg-black"></div>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left"></div>
            </div>
            
            {/* Timeline Item 2 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right"></div>
              <div className="mx-auto md:mx-0 my-4 md:my-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center z-10">
                <div className="w-4 h-4 rounded-full bg-black"></div>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left">
                <h3 className="text-xl font-bold text-white mb-2">Reader's Choice Award</h3>
                <p className="text-yellow-500 font-medium mb-2">Spring 2024</p>
                <p className="text-gray-300">Our growing readership voted us as their favorite publication of the quarter, establishing our connection with the audience.</p>
              </div>
            </div>
            
            {/* Timeline Item 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <h3 className="text-xl font-bold text-white mb-2">International Recognition</h3>
                <p className="text-yellow-500 font-medium mb-2">Summer 2024</p>
                <p className="text-gray-300">Our work crossed borders and received acclaim at the International Literature Festival, opening doors to global audiences.</p>
              </div>
              <div className="mx-auto md:mx-0 my-4 md:my-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center z-10">
                <div className="w-4 h-4 rounded-full bg-black"></div>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left"></div>
            </div>
            
            {/* Timeline Item 4 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right"></div>
              <div className="mx-auto md:mx-0 my-4 md:my-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center z-10">
                <div className="w-4 h-4 rounded-full bg-black"></div>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left">
                <h3 className="text-xl font-bold text-white mb-2">Book of the Year</h3>
                <p className="text-yellow-500 font-medium mb-2">Fall 2024</p>
                <p className="text-gray-300">The pinnacle of our journey so far, being crowned Book of the Year by the National Literary Association.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial Section */}
        <div className="mt-24 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            What Critics Are Saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 relative">
              <div className="absolute top-4 left-4 text-5xl text-yellow-500/30">"</div>
              <p className="text-gray-300 italic mb-4 pt-4 pl-4">
                A groundbreaking publication that defies categorization. The author's voice is both authoritative and accessible, making complex ideas feel like illuminating conversations.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <div className="ml-3">
                  <p className="text-white font-medium">Elizabeth Chen</p>
                  <p className="text-yellow-500 text-sm">Literary Review Quarterly</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 relative">
              <div className="absolute top-4 left-4 text-5xl text-yellow-500/30">"</div>
              <p className="text-gray-300 italic mb-4 pt-4 pl-4">
                Rarely does a work come along that so perfectly captures the zeitgeist while offering timeless wisdom. This book deserves every accolade it has received and more.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <div className="ml-3">
                  <p className="text-white font-medium">Marcus Johnson</p>
                  <p className="text-yellow-500 text-sm">The Reading Post</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Award-Winning Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Experience the publication that critics and readers alike are celebrating. Start your reading journey today.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:shadow-lg hover:shadow-yellow-500/20 transform hover:scale-105 transition-all duration-200">
            Get Your Copy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HonorsPage;
