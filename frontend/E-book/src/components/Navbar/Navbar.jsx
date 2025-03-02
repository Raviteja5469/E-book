import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.webp";
{/* functions */}

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolling ? "bg-black/90 shadow-lg backdrop-blur-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-110">
        <img src={logo} alt="Book cover" className="w-10 h-10 rounded-lg shadow-md"
/>
          <span className="text-white text-xl font-semibold tracking-wide ml-3">
            E-Book
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between space-x-6">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/sign-in"
            className="bg-cyan-500 text-white px-4 py-2 rounded-md shadow-md text-sm font-medium hover:bg-cyan-400 transition-all duration-300"
          >
            Sign In
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-cyan-500 p-2 text-gray-300"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-black/80 backdrop-blur-md transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-300 focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-10">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-300 hover:text-cyan-400 text-lg font-medium transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Signin"
            className="bg-cyan-500 text-white px-6 py-2 rounded-md shadow-md text-lg font-medium hover:bg-cyan-400 transition-all duration-300"
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
