import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Autors.css";

export function Authors() {
  const authors = [
    {
      name: "J.K. Rowling",
      title: "Author of Harry Potter",
      description:
        "J.K. Rowling is a British author, best known for writing the iconic Harry Potter series that captured the hearts of millions around the world.",
      photo:
        "https://images.pexels.com/photos/3727468/pexels-photo-3727468.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "James Clear",
      title: "Author of Atomic Habits",
      description:
        "James Clear is a bestselling author and expert in habit formation. His book Atomic Habits has transformed lives globally.",
      photo:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "George R.R. Martin",
      title: "Author of A Game of Thrones",
      description:
        "George R.R. Martin is an American novelist, celebrated for creating the epic fantasy series A Song of Ice and Fire, adapted into Game of Thrones.",
      photo:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Harper Lee",
      title: "Author of To Kill a Mockingbird",
      description:
        "Harper Lee was a Pulitzer Prize-winning author known for her profound storytelling in To Kill a Mockingbird.",
      photo:
        "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "F. Scott Fitzgerald",
      title: "Author of The Great Gatsby",
      description:
        "F. Scott Fitzgerald was an American novelist respected for his vivid depiction of the Jazz Age in The Great Gatsby.",
      photo:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <section className="bg-[#0F172A] py-16 px-6 lg:px-20 text-[#F1F5F9] relative overflow-hidden">
      {/* Cosmic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B21A8]/20 via-[#2DD4BF]/10 to-[#0F172A] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl lg:text-5xl font-playfair font-extrabold text-center text-[#F1F5F9] mb-12">
          Behind the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#2DD4BF]">
            Pages
          </span>
        </h2>

        {/* Swiper Slider for Authors */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {authors.map((author, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative bg-[#1E293B]/80 shadow-lg rounded-lg overflow-hidden border border-[#2DD4BF]/20 backdrop-blur-sm
                           transform hover:scale-105 hover:shadow-[#2DD4BF]/40 transition-all duration-300"
              >
                {/* Author Photo */}
                <img
                  src={author.photo}
                  alt={author.name}
                  className="w-full h-60 object-cover"
                />
                {/* Author Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-playfair font-bold text-[#FBBF24] mb-2">
                    {author.name}
                  </h3>
                  <p className="text-sm text-[#2DD4BF] font-inter font-medium mb-3">
                    {author.title}
                  </p>
                  <p className="text-sm text-[#F1F5F9]/80 font-inter line-clamp-3">
                    {author.description}
                  </p>
                  {/* Social Icons */}
                  <div className="mt-4 flex justify-center space-x-4">
                    <a
                      href="#"
                      className="text-[#F1F5F9]/60 hover:text-[#FBBF24] transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.354c0-.902.178-1.645 1.591-1.645h2.409v-5h-3.276c-3.917 0-5.724 1.576-5.724 5v2h-3v4h3v12h5v-12h3z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-[#F1F5F9]/60 hover:text-[#FBBF24] transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.947 8.305c.014.203.014.404.014.608 0 6.186-4.704 13.319-13.319 13.319-2.646 0-5.096-.752-7.17-2.048.368.052.729.067 1.111.067 2.2 0 4.184-.746 5.786-1.992-2.055-.037-3.786-1.395-4.378-3.253.288.054.575.088.879.088.424 0 .833-.054 1.221-.152-2.143-.417-3.766-2.322-3.766-4.589v-.059c.63.355 1.354.573 2.124.599-1.259-.832-2.072-2.244-2.072-3.843 0-.847.227-1.633.63-2.31 2.292 2.811 5.665 4.658 9.487 4.853-.079-.338-.124-.69-.124-1.046 0-2.459 1.992-4.451 4.451-4.451 1.282 0 2.442.545 3.26 1.423.991-.2 1.972-.564 2.832-1.068-.328 1.015-1.016 1.859-1.914 2.396.887-.098 1.735-.34 2.523-.687-.588.879-1.334 1.627-2.191 2.234z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="swiper-button-prev !text-[#2DD4BF] after:!text-[#2DD4BF] hover:!text-[#FBBF24]"></div>
        <div className="swiper-button-next !text-[#2DD4BF] after:!text-[#2DD4BF] hover:!text-[#FBBF24]"></div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-[#2DD4BF]/20 rounded-full blur-3xl animate-[float_7s_infinite_alternate]" aria-hidden="true"></div>
    </section>
  );
}

export default Authors;