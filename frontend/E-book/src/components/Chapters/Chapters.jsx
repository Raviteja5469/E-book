import React from "react";
import Slider from "react-slick"; // React-Slick for the slider
import "slick-carousel/slick/slick.css"; // Core slick styles
import "slick-carousel/slick/slick-theme.css"; // Default slick theme styles

// Example data for books
const books = [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    description: "A young wizard's journey begins with magic and mystery.",
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
    autoplaySpeed: 3000, // Autoplay interval
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

        {/* Slick Slider */}
        <Slider {...settings}>
          {books.map((book) => (
            <div key={book.id} className="px-4">
              {/* Book Card */}
              <div className="flex flex-col items-center bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={book.thumbnail}
                  alt={book.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                    {book.title}
                  </h3>
                  <p className="text-gray-300">{book.description}</p>
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
