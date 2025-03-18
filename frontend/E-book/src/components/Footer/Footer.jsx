import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Chapters", href: "#chapters" },
    { label: "Pricing", href: "#pricing" },
    { label: "About Author", href: "#author" },
    { label: "Contact", href: "#contact" },
  ];

  const resourceLinks = [
    { label: "Blog", href: "#" },
    { label: "Free Samples", href: "#" },
    { label: "Worksheets", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Support", href: "#" },
  ];

  const policies = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ];

  const socialLinks = [
    { Icon: Facebook, href: "#", label: "Visit our Facebook" },
    { Icon: Twitter, href: "#", label: "Visit our Twitter" },
    { Icon: Instagram, href: "#", label: "Visit our Instagram" },
    { Icon: Linkedin, href: "#", label: "Visit our LinkedIn" },
    { Icon: Youtube, href: "#", label: "Visit our YouTube" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="pt-12 pb-8 bg-[#0F172A] text-[#F1F5F9] relative overflow-hidden">
      {/* Cosmic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B21A8]/20 via-[#2DD4BF]/10 to-[#0F172A] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand & Social */}
          <div className="lg:col-span-1 flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#FBBF24] to-[#2DD4BF] shadow-lg">
                <svg
                  className="text-[#0F172A] w-6 h-6"
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
              <span className="text-xl font-playfair font-bold text-[#FBBF24]">
                My E-Book
              </span>
            </div>
            <p className="text-sm font-inter text-[#F1F5F9]/80">
              Your Cosmic Guide to Knowledge and Growth.
            </p>
            <div className="flex items-center space-x-4 mt-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition-all duration-200 hover:scale-110 hover:text-[#2DD4BF]"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4 text-[#FBBF24]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm font-inter">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#2DD4BF] transition-colors duration-200"
                    style={{ color: "#F1F5F9" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4 text-[#FBBF24]">
              Resources
            </h3>
            <ul className="space-y-2 text-sm font-inter">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#2DD4BF] transition-colors duration-200"
                    style={{ color: "#F1F5F9" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4 text-[#FBBF24]">
              Stay Updated
            </h3>
            <p className="text-sm font-inter mb-4 text-[#F1F5F9]/80">
              Subscribe for exclusive e-book updates.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full py-2 px-4 rounded-md text-sm outline-none bg-[#1E293B] border border-[#2DD4BF]/20 text-[#F1F5F9] placeholder-[#F1F5F9]/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email input for newsletter"
              />
              <button
                type="submit"
                className="absolute right-2 top-1 bottom-1 px-4 bg-[#FBBF24] text-[#0F172A] font-inter font-medium text-sm rounded-md flex items-center justify-center transition-all hover:bg-[#FBBF24]/90 hover:shadow-[#FBBF24]/40"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="border-t border-[#2DD4BF]/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-inter text-[#F1F5F9]/80">
            © {new Date().getFullYear()} My E-Book. All rights reserved.
          </p>
          <ul className="flex flex-wrap space-x-4 text-sm font-inter">
            {policies.map((policy) => (
              <li key={policy.label}>
                <a
                  href={policy.href}
                  className="hover:text-[#2DD4BF] transition-colors duration-200"
                  style={{ color: "#F1F5F9" }}
                >
                  {policy.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#2DD4BF]/20 rounded-full blur-3xl animate-[float_6s_infinite_alternate]" aria-hidden="true"></div>
    </footer>
  );
}