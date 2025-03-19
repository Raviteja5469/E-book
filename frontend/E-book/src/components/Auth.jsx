import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp && password !== confirmPassword) {
      alert("Passwords don’t match!");
      return;
    }
    console.log(isSignUp ? "Sign Up" : "Sign In", { email, password });
    // Add your auth logic here (e.g., API call)
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-16 bg-[#0F172A] text-[#F1F5F9] overflow-hidden">
      {/* Starry Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#6B21A8]/20 to-[#2DD4BF]/10 -z-10"></div>

      {/* Cosmic Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#2DD4BF]/30 to-transparent rounded-t-[50%] shadow-[0_-10px_30px_rgba(43,212,191,0.5)] animate-[waveSway_6s_infinite_ease-in-out]"></div>

      {/* Auth Form */}
      <motion.div
        className="relative z-20 max-w-md w-full bg-[#1E293B]/80 backdrop-blur-sm rounded-xl p-8 shadow-[0_0_40px_rgba(43,212,191,0.3)] border border-[#2DD4BF]/20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl font-playfair font-bold text-center mb-6"
          variants={itemVariants}
        >
          {isSignUp ? "Join the" : "Access Your"}{" "}
          <span className="bg-gradient-to-r from-[#FBBF24] to-[#2DD4BF] bg-clip-text text-transparent">
            Library
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-center text-[#F1F5F9]/80 font-inter mb-8"
          variants={itemVariants}
        >
          {isSignUp
            ? "Create an account to start your journey."
            : "Sign in to unlock your e-book experience."}
        </motion.p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <Mail
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2DD4BF]"
              />
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-[#0F172A] border border-[#2DD4BF]/30 rounded-md text-[#F1F5F9] placeholder-[#F1F5F9]/50 focus:outline-none focus:border-[#2DD4BF] focus:shadow-[0_0_10px_rgba(43,212,191,0.5)] transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Password Input */}
          <motion.div variants={itemVariants}>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <Lock
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2DD4BF]"
              />
              <input
                id="password"
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-[#0F172A] border border-[#2DD4BF]/30 rounded-md text-[#F1F5F9] placeholder-[#F1F5F9]/50 focus:outline-none focus:border-[#2DD4BF] focus:shadow-[0_0_10px_rgba(43,212,191,0.5)] transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Confirm Password (Sign Up Only) */}
          {isSignUp && (
            <motion.div variants={itemVariants}>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <div className="relative">
                <Lock
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2DD4BF]"
                />
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[#0F172A] border border-[#2DD4BF]/30 rounded-md text-[#F1F5F9] placeholder-[#F1F5F9]/50 focus:outline-none focus:border-[#2DD4BF] focus:shadow-[0_0_10px_rgba(43,212,191,0.5)] transition-all duration-300"
                />
              </div>
            </motion.div>
          )}

          {/* Forgot Password (Sign In Only) */}
          {!isSignUp && (
            <motion.div className="text-right" variants={itemVariants}>
              <a
                href="#forgot-password"
                className="text-sm text-[#2DD4BF] hover:text-[#FBBF24] transition-colors duration-200"
              >
                Forgot Password?
              </a>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full px-6 py-3 bg-[#FBBF24] text-[#0F172A] rounded-full font-inter font-semibold flex items-center justify-center gap-2 relative overflow-hidden group shadow-md"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(251, 191, 36, 0.7)" }}
          >
            <span className="relative z-10">{isSignUp ? "Sign Up" : "Sign In"}</span>
            <ArrowRight
              size={20}
              className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"
            />
            <span className="absolute inset-0 bg-[#2DD4BF] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full transform scale-0 group-hover:scale-150 origin-center"></span>
          </motion.button>
        </form>

        {/* Toggle Sign In/Sign Up */}
        <motion.div className="mt-6 text-center" variants={itemVariants}>
          <p className="text-sm text-[#F1F5F9]/80 font-inter">
            {isSignUp ? "Already have an account?" : "Need an account?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-[#2DD4BF] hover:text-[#FBBF24] transition-colors duration-200"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </motion.div>
      </motion.div>

      {/* Minimal Starfield */}
      <div className="absolute inset-0 -z-5">
        <div className="w-1 h-1 bg-[#FBBF24] rounded-full absolute top-1/4 left-1/5 animate-[twinkle_3s_infinite]"></div>
        <div className="w-1 h-1 bg-[#2DD4BF] rounded-full absolute bottom-1/3 right-1/4 animate-[twinkle_4s_infinite_delay-1s]"></div>
      </div>
    </section>
  );
}