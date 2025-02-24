import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

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
  return (
    <section className="bg-gradient-to-b from-blue-900 via-gray-900 to-black py-16 px-6 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-yellow-500 mb-12">
          Featured Chapters
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-lg"
        >
          {books.map((book) => (
            <SwiperSlide key={book.id} className="text-center">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Chapters;
