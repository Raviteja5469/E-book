import React, { useState } from "react";

export default function EbookProductPage() {
  const [quantity, setQuantity] = useState(1);

  // Data for the book
  const bookData = {
    title: "Mastering Change",
    author: "John Doe",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg?auto=compress&h=400",
    price: "$14.99",
    shortDescription:
      "A concise guide that reveals how to adapt, evolve, and thrive in the face of uncertainty. Dive into real-life examples, proven methods, and transformative insights that will help you navigate an ever-changing world with ease and confidence.",
    chapters: [
      "1) Introduction to Change",
      "2) Building a Growth Mindset",
      "3) Strategies for Continuous Growth",
    ],
    features: [
      {
        title: "Built on Research",
        detail: "Rooted in extensive studies and psychological data.",
      },
      {
        title: "Easy to Read",
        detail: "Clear, concise language with actionable tips.",
      },
      {
        title: "Real-Life Examples",
        detail: "Stories from real people applying these strategies.",
      },
    ],
  };

  const decrementQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQty = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Floating shape background for visual interest */}
      <div className="absolute top-[-10rem] right-[-10rem] w-[300px] h-[300px] bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {bookData.title}
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            by <span className="text-yellow-500">{bookData.author}</span>
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Cover Image */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-xl blur-md opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <img
                src={bookData.coverImage}
                alt={bookData.title}
                className="relative z-10 rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1 space-y-8">
            {/* Short Description */}
            <p className="text-gray-300 leading-relaxed">
              {bookData.shortDescription}
            </p>

            {/* Chapters */}
            <div>
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                What's Inside:
              </h2>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-200">
                {bookData.chapters.map((ch, i) => (
                  <li key={i}>{ch}</li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                Key Features:
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {bookData.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-yellow-500/40 transition-colors"
                  >
                    <h3 className="text-lg text-white font-bold mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-gray-300">{feat.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & CTA */}
            <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="text-3xl font-bold text-yellow-400">
                    {bookData.price}
                  </span>
                </div>
                {/* Quantity */}
                <div className="mt-4 sm:mt-0 flex items-center">
                  <button
                    onClick={decrementQty}
                    className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-l-lg hover:bg-gray-700 transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    readOnly
                    value={quantity}
                    className="w-16 text-center bg-gray-900 border-t border-b border-gray-700 text-white outline-none"
                  />
                  <button
                    onClick={incrementQty}
                    className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-r-lg hover:bg-gray-700 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-lg transition-all font-bold text-center">
                  Add to Cart
                </button>
                <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg border border-yellow-500/40 transition-all text-center font-medium">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

