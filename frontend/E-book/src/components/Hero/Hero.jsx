import React from "react";

export function Hero() {
  const heroHeadingSmall = "LET'S MAKE THE BEST INVESTMENT";
  const heroHeadingMain = "Read More And Make Success The Result Of Perfection.";
  const heroSubText =
    "Explore the limitless potential of knowledge. With our books, dive into new ideas, strategies, and opportunities to transform your future.";
  const heroImage =
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJvb2slMjBjb3ZlcnxlbnwwfHx8fDE2NzcyNDUyNzk&ixlib=rb-4.0.3&q=80&w=400";

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <span className="block text-sm uppercase tracking-widest text-indigo-500">
            {heroHeadingSmall}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            {heroHeadingMain}
          </h1>
          <p className="text-lg text-gray-300">{heroSubText}</p>
          <div>
            <button className="bg-gradient-to-r from-green-400 to-indigo-500 hover:from-green-500 hover:to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold text-sm transition-transform transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          {/* Floating Gradient Effects */}
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full blur-3xl opacity-30 animate-float"></div>
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full blur-3xl opacity-30 animate-float-reverse"></div>

          <img
            src={heroImage}
            alt="Book Cover"
            className="relative z-10 w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
