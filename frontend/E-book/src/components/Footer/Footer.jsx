import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const colors = {
    background: "#000000", // black background
    accent: "#6366F1",     // Tailwind's indigo-500
    text: "#FFFFFF",
    gray: "#9CA3AF"        // Tailwind's gray-400
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Chapters", href: "#chapters" },
    { label: "Pricing", href: "#pricing" },
    { label: "About Author", href: "#author" },
    { label: "Contact", href: "#contact" }
  ];

  const resourceLinks = [
    { label: "Blog", href: "#" },
    { label: "Free Samples", href: "#" },
    { label: "Worksheets", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Support", href: "#" }
  ];

  const policies = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" }
  ];

  const socialLinks = [
    { Icon: Facebook, href: "#", label: "Visit our Facebook" },
    { Icon: Twitter, href: "#", label: "Visit our Twitter" },
    { Icon: Instagram, href: "#", label: "Visit our Instagram" },
    { Icon: Linkedin, href: "#", label: "Visit our LinkedIn" },
    { Icon: Youtube, href: "#", label: "Visit our YouTube" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer
      className="pt-12 pb-8"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand & Social */}
          <div className="lg:col-span-1 flex flex-col space-y-4">
            {/* Brand */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg">
                <svg
                  className="text-white w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-label="E-book icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4h16a2 2 0 012 2v10a2 2 0 01-2 2H6.5A2.5 2.5 0 004 16.5V4z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">My E-Book</span>
            </div>
            {/* Tagline */}
            <p className="text-sm" style={{ color: colors.gray }}>
              Unlock knowledge with our digital library—your gateway to endless learning!
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4 mt-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: colors.accent }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:opacity-80 transition-opacity"
                    style={{ color: colors.gray }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: colors.accent }}>
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:opacity-80 transition-opacity"
                    style={{ color: colors.gray }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: colors.accent }}>
              Stay Updated
            </h3>
            <p className="text-sm mb-4" style={{ color: colors.gray }}>
              Subscribe for the latest updates.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full py-2 px-4 rounded-md text-sm outline-none"
                style={{
                  backgroundColor: "#2D3748",
                  border: "1px solid #373F50",
                  color: colors.text
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email input for newsletter"
              />
              <button
                type="submit"
                className="absolute right-2 top-1 bottom-1 px-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium text-sm rounded-md flex items-center justify-center transition-colors hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-600"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: colors.gray }}>
            &copy; {new Date().getFullYear()} My E-Book. All rights reserved.
          </p>
          <ul className="flex flex-wrap space-x-4 text-sm">
            {policies.map((policy) => (
              <li key={policy.label}>
                <a
                  href={policy.href}
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: colors.gray }}
                >
                  {policy.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
