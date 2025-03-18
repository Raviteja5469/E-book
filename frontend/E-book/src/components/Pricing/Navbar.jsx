import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Benefits", href: "#benefits" },
    { label: "Chapters", href: "#chapters" },
    { label: "Pricing", href: "#pricing" },
    { label: "Author", href: "#author" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolling
          ? "bg-gradient-to-b from-[#1A2A44]/95 to-[#1A2A44]/80 shadow-lg backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer transition-all duration-300 hover:scale-105 group">
          <img
            src={logo}
            alt="Book cover"
            className="w-12 h-12 rounded-md shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-500/50"
          />
          <span className="text-[#F5F5F5] text-xl font-serif tracking-wide ml-3 group-hover:text-teal-400">
            My E-Book {/* Replace with your book title */}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between space-x-8">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-[#F5F5F5] hover:text-teal-400 text-sm font-medium tracking-wide transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-teal-400 after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Auth"
            className="bg-teal-500 text-[#F5F5F5] px-5 py-2 rounded-full shadow-md text-sm font-medium hover:bg-teal-600 hover:shadow-teal-500/40 transition-all duration-300"
          >
            Sign In
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-teal-500 p-2 text-[#F5F5F5] hover:text-teal-400 transition-colors duration-300"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-[#1A2A44]/90 backdrop-blur-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#F5F5F5] hover:text-teal-400 focus:outline-none transition-colors duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-8 mt-12">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-[#F5F5F5] hover:text-teal-400 text-lg font-medium tracking-wide transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Auth"
            className="bg-teal-500 text-[#F5F5F5] px-8 py-3 rounded-full shadow-md text-lg font-medium hover:bg-teal-600 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;