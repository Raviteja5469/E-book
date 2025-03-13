import React from "react";
import { motion } from "framer-motion";

// Sample features data
const features = [
  { title: "Goals", icon: "📺" },
  { title: "Vision", icon: "🎯" },
  { title: "Mission", icon: "🤖" },
  { title: "Strategy", icon: "🔗" },
  { title: "Experience", icon: "📑" },
  { title: "Motivation", icon: "💎" },
];

export default function Benifits() {
  return (
    <div className="relative min-h-screen w-full py-10">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 -z-10" />

      <section className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sky-400">
            What you'll achieve by this book
          </h2>
          <p className="mt-2 text-base md:text-lg text-slate-300 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetuer laoreet dolore magna.
          </p>
        </motion.div>

        {/* Grid of Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-xl p-6 text-center
                         hover:shadow-xl hover:shadow-sky-700/40 transition-shadow 
                         duration-300 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
              }}
            >
              <div className="text-4xl mb-3 text-slate-200">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-sky-400 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a
                href="#"
                className="text-sky-400 text-sm font-medium 
                           px-3 py-2 border border-sky-700 rounded-md 
                           hover:bg-sky-700 hover:text-slate-50 
                           transition-colors"
              >
                Read more ➝
              </a>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          className="mt-12 bg-slate-800 rounded-xl p-6 text-center max-w-2xl mx-auto shadow-xl shadow-slate-900/50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-sky-400 mb-2">
            Ready to dive deeper?
          </h3>
          <p className="text-slate-300 mb-6">
            Get the full eBook to unlock more insights and strategies.
          </p>
          <a
            href="#purchase"
            className="inline-block px-6 py-3 rounded-full 
                       bg-sky-600 text-white font-medium 
                       shadow-md hover:bg-sky-700 transition-colors"
          >
            Get the Full Book Now
          </a>
        </motion.div>
      </section>
    </div>
  );
}
