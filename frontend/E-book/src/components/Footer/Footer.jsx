import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Implement newsletter logic here or call an API
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="w-full bg-gray-900 text-white pt-10 pb-6 px-6 md:px-16 relative overflow-hidden animate-[fadeInUp_0.8s_ease-in-out]">
      {/* Background radiating effect for advanced visual */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-20 w-[600px] h-[600px] rounded-full blur-3xl absolute -left-64 -top-64"></div>
        <div className="bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500 opacity-20 w-[600px] h-[600px] rounded-full blur-3xl absolute -right-64 -bottom-64"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Logo & name */}
        <div className="md:col-span-1 flex flex-col items-start">
          <div className="flex items-center space-x-2 mb-3 transform transition-transform duration-300 hover:scale-105">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <span className="text-xl font-bold">E</span>
            </div>
            <span className="text-xl font-semibold">E-book</span>
          </div>
          <p className="text-sm text-gray-400">
            Your one-stop destination for all digital reading needs.
          </p>
        </div>

        {/* Navigation links */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-white transition-all duration-300 block"
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-white transition-all duration-300 block"
              >
                Contact
              </a>
            </li>
            <li>
              <a 
                href="#privacy" 
                className="text-gray-300 hover:text-white transition-all duration-300 block"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a 
                href="#terms" 
                className="text-gray-300 hover:text-white transition-all duration-300 block"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social media icons */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a 
                href="#facebook" 
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition-all duration-300 inline-block transform hover:-translate-y-1"
                aria-label="Facebook Link"
              >
                <svg 
                  width="20" 
                  height="20" 
                  fill="currentColor" 
                  className="mx-auto text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.676 0H1.326C.594 0 0 .592 0 1.323v21.353C0 23.406.594 24 1.326 24h21.353c.73 0 1.321-.594 1.321-1.324V1.323C24 .592 23.406 0 22.676 0zm-2.845 6.584h-1.69c-1.326 0-1.582.63-1.582 1.555v2.04h3.164l-.413 3.205h-2.751V24h-3.309v-10.69H12V10.69h1.237V8.668c0-1.213.33-2.042 2.03-2.042h1.616v2.042z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a 
                href="#twitter" 
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-all duration-300 inline-block transform hover:-translate-y-1"
                aria-label="Twitter Link"
              >
                <svg 
                  width="20" 
                  height="20" 
                  fill="currentColor" 
                  className="mx-auto text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.9 9.9 0 0 1-2.828.775A4.932 4.932 0 0 0 23.336 3.4c-.951.555-2.003.952-3.127 1.168a4.92 4.92 0 0 0-8.391 4.482A13.957 13.957 0 0 1 1.671 3.149a4.905 4.905 0 0 0-.666 2.476c0 1.709.87 3.215 2.188 4.098a4.904 4.904 0 0 1-2.228-.616v.06c0 2.386 1.697 4.374 3.95 4.827a4.935 4.935 0 0 1-2.224.084 4.93 4.93 0 0 0 4.598 3.417 9.868 9.868 0 0 1-6.102 2.105c-.396 0-.79-.023-1.175-.068a13.945 13.945 0 0 0 7.548 2.213c9.057 0 14.01-7.514 14.01-14.01 0-.213-.005-.426-.014-.637A9.978 9.978 0 0 0 24 4.557z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a 
                href="#instagram" 
                className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition-all duration-300 inline-block transform hover:-translate-y-1"
                aria-label="Instagram Link"
              >
                <svg 
                  width="20" 
                  height="20" 
                  fill="currentColor" 
                  className="mx-auto text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.92 4.92.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.92 4.92-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.225-.149-4.771-1.664-4.92-4.92-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.92-4.92 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.322.013 7.052.07 2.88.249.249 2.88.07 7.052.013 8.322 0 8.756 0 12s.013 3.678.07 4.948c.179 4.172 2.809 6.803 6.982 6.982C8.322 23.987 8.756 24 12 24s3.678-.013 4.948-.07c4.172-.179 6.803-2.809 6.982-6.982.057-1.27.07-1.704.07-4.948s-.013-3.678-.07-4.948C23.929 2.86 21.312.256 17.052.07 15.782.013 15.244 0 12 0z"></path>
                  <path d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.099A3.937 3.937 0 1 1 15.937 12 3.937 3.937 0 0 1 12 15.937z"></path>
                  <circle cx="18.406" cy="5.595" r="1.439"></circle>
                </svg>
              </a>
            </li>
            <li>
              <a 
                href="#linkedin" 
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-700 transition-all duration-300 inline-block transform hover:-translate-y-1"
                aria-label="LinkedIn Link"
              >
                <svg 
                  width="20" 
                  height="20" 
                  fill="currentColor" 
                  className="mx-auto text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.119 2.5-2.49 2.5S0 4.881 0 3.5 1.119 1 2.49 1 4.98 2.119 4.98 3.5zM.48 8.75h4.999v14.75H.48zm7.52 0h4.78v2.01h.07c.666-1.258 2.292-2.58 4.72-2.58 5.044 0 5.97 3.318 5.97 7.63v8.69h-5v-7.69c0-1.83-.033-4.19-2.55-4.19-2.55 0-2.94 1.98-2.94 4.04v7.84H8V8.75z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact information & newsletter */}
        <div className="md:col-span-1 flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <address className="not-italic text-gray-300 text-sm">
            <p>support@ebook.com</p>
            <p>+1-234-567-890</p>
            <p>123 E-Book St, Booksville</p>
          </address>
          <div>
            <h3 className="text-lg font-semibold mb-2">Newsletter Signup</h3>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-auto flex-1 px-4 py-2 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 rounded-md bg-indigo-600 hover:bg-indigo-500 px-5 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Horizontal line */}
      <div className="relative z-10 border-t border-gray-700 px-0 mb-4"></div>

      {/* Copyright */}
      <div className="relative z-10 text-sm text-center text-gray-500">
        © 2025 E-Book. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
