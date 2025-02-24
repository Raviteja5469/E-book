import React, { useState } from "react";
// Optional: If you want to enable smooth scrolling to sections within the page,
// you can use a library like react-scroll or just anchor links.
// import { Link } from "react-scroll";  // example if using react-scroll

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Example navigation links. 
  // Replace href or use react-scroll's “to” and “smooth” props for smooth scrolling.
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Benefits", href: "#benefits" },
    { label: "Chapters", href: "#chapters" },
    { label: "Pricing", href: "#pricing" },
    { label: "Author", href: "#author" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Brand / Logo Section */}
        <div className="flex items-center cursor-pointer transform transition-transform duration-300 hover:scale-105">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-blue-500 mr-2">
            <span className="text-white text-lg font-bold">E</span>
          </div>
          <span className="text-white text-xl font-semibold">
            E-book
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              // If using react-scroll instead of a normal anchor, do:
              // <Link to={item.to} smooth={true} offset={-64} ...>
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-indigo-500 p-2 text-gray-300"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <span className="text-2xl">&times;</span>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation (Slide Down) */}
      {isOpen && (
        <nav className="md:hidden bg-gray-900 px-4 pb-4">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300 py-1"
                  onClick={() => setIsOpen(false)} // Close the menu when a link is clicked
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;