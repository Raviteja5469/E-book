import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Chapters.css";

const chapters = [
  { id: 1, title: "Chapter 1: The Spark", description: "Ignite your journey with foundational insights.", thumbnail: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg" },
  { id: 2, title: "Chapter 2: Building Momentum", description: "Master habits that drive lasting change.", thumbnail: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg" },
  { id: 3, title: "Chapter 3: Power Plays", description: "Strategies to conquer challenges.", thumbnail: "https://images-na.ssl-images-amazon.com/images/I/81GqtNbs%2BPL.jpg" },
  { id: 4, title: "Chapter 4: Justice Prevails", description: "Lessons in integrity and resilience.", thumbnail: "https://images-na.ssl-images-amazon.com/images/I/81gepf1eMqL.jpg" },
  { id: 5, title: "Chapter 5: The Dream", description: "Chase your vision with purpose.", thumbnail: "https://upload.wikimedia.org/wikipedia/commons/a/a3/The_Great_Gatsby_Cover_1925_Retri.jpg" },
];

export function Chapters() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    customPaging: () => (
      <div className="w-3 h-3 bg-[#2DD4BF]/50 rounded-full hover:bg-[#2DD4BF] transition-colors duration-300"></div>
    ),
  };

  return (
    <section className="bg-[#0F172A] py-16 px-6 lg:px-20 text-[#F1F5F9] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B21A8]/20 via-[#2DD4BF]/10 to-[#0F172A] -z-10"></div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#F1F5F9] text-center mb-12">
          Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#2DD4BF]">Chapters</span>
        </h2>
        <Slider {...settings} className="relative">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="px-4">
              <div
                className="flex flex-col items-center bg-[#1E293B]/80 rounded-lg overflow-hidden
                           border border-[#2DD4BF]/20 backdrop-blur-sm shadow-md
                           hover:shadow-[#2DD4BF]/40 hover:scale-105 transition-all duration-300 relative"
              >
                <img src={chapter.thumbnail} alt={chapter.title} className="w-full h-80 object-cover rounded-t-lg" />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent
                             opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6"
                >
                  <p className="text-[#F1F5F9]/90 text-sm font-inter">{chapter.description}</p>
                </div>
                <div className="p-6 w-full rounded-b-lg text-center">
                  <h3 className="text-xl font-playfair font-bold text-[#FBBF24] mb-3">{chapter.title}</h3>
                  <button
                    className="mt-3 px-6 py-2 rounded-full bg-[#FBBF24] text-[#0F172A] font-inter font-medium
                               hover:bg-[#FBBF24]/90 hover:shadow-[#FBBF24]/40 transition-all duration-300"
                  >
                    Preview Chapter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-[#2DD4BF]/20 rounded-full blur-3xl animate-[float_6s_infinite_alternate]" aria-hidden="true"></div>
    </section>
  );
}

export default Chapters;