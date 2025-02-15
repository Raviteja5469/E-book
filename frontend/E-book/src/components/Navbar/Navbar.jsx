import React, { useState } from "react";
import './Navbar.css';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ["Home", "Benefits", "Chapters", "Pricing", "Author", "Achievements", "Contact"];
  
    return (
      <header className="navbar-container">
        <div className="navbar-content">
          <div className="brand-name">
            E-Book
          </div>
          <nav className={`navbar-links ${isOpen ? "mobile-open" : ""}`}>
            {navLinks.map((link, index) => (
              <a href="#" key={index}>{link}</a>
            ))}
          </nav>
          <button 
            className="menu-button" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle Menu"
          >
            {/* Simple icon toggle */}
            {isOpen ? (
              <span className="close-icon">&times;</span>
            ) : (
              <span className="burger-icon">&#9776;</span>
            )}
          </button>
        </div>
      </header>
    );
  }

export default Navbar
