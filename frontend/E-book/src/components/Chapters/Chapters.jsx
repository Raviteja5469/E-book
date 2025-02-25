import React from "react";
import Slider from "react-slick"; // React-Slick for the slider
import "slick-carousel/slick/slick.css"; // Core slick styles
import "slick-carousel/slick/slick-theme.css"; // Default slick theme styles

// Example data for books
const books = [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    description: "A wizard's journey begins with magic and mystery.",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
  },
  {
    id: 2,
    title: "Atomic Habits",
    description: "Transform your life by building powerful, positive habits.",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
  },
  {
    id: 3,
    title: "A Game of Thrones",
    description: "The epic tale of power, politics, and dragons.",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/81GqtNbs%2BPL.jpg",
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    description: "A timeless story of justice and racial inequality.",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/81gepf1eMqL.jpg",
  },
  {
    id: 5,
    title: "The Great Gatsby",
    description: "The American dream, love, and Gatsby's mysterious past.",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/The_Great_Gatsby_Cover_1925_Retri.jpg",
  },
];

export function Chapters() {
  // React-Slick slider settings
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show (desktop)
    slidesToScroll: 1, // Slides to scroll per click
    autoplay: true, // Automatically scroll slides
    autoplaySpeed: 2500, // Autoplay interval
    responsive: [
      {
        breakpoint: 1024, // Breakpoint for tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // Breakpoint for mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-b from-blue-900 via-gray-900 to-black py-16 px-6 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-yellow-500 mb-12">
          Featured Chapters
        </h2>

        {/* React-Slick Slider */}
        <Slider {...settings}>
          {books.map((book) => (
            <div key={book.id} className="px-6">
              {/* Enhanced Book Card */}
              <div
                className="flex flex-col items-center bg-gray-800 rounded-lg overflow-hidden 
                shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 relative"
              >
                {/* Book Image */}
                <img
                  src={book.thumbnail}
                  alt={book.title}
                  className="w-full h-80 object-cover rounded-t-lg"
                />
                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 
                  hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6"
                >
                  <p className="text-white text-base font-medium">
                    {book.description}
                  </p>
                </div>

                {/* Book Info */}
                <div className="p-6 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 w-full rounded-b-lg text-center">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                    {book.title}
                  </h3>
                  <button
                    className="mt-3 px-6 py-2 bg-yellow-500 hover:bg-yellow-400 rounded-full 
                    text-black font-bold transition duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Chapters;
