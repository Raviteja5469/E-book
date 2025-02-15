import React from "react";
import "./Hero.css"; // Make sure to adjust the path if you split files.
import Herobanner from "/src/assets/images/hero-banner.png";

export function Hero() {
  const heroHeadingSmall = "LET'S MAKE THE BEST INVESTMENT";
  const heroHeadingMain = "Read More And Make Success The Result Of Perfection.";
  const heroSubText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.";
  const heroImage = "https://placehold.co/250x400?text=Book+Cover";

  return (
    <section className="hero-section" >
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-title-small">{heroHeadingSmall}</span>
          <h1 className="hero-main-heading">{heroHeadingMain}</h1>
          <p className="hero-subtext">{heroSubText}</p>
          <button className="hero-button">
            Get Started
          </button>
        </div>
        <div className="hero-image-container">
          <img src={Herobanner} alt="Book cover" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero