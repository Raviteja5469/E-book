import React from 'react';
import './Benifits.css';
import { motion } from 'framer-motion';

const features = [
  { title: 'Goals', icon: '📺' },
  { title: 'Vision', icon: '🎯' },
  { title: 'Mission', icon: '🤖' },
  { title: 'Strategy', icon: '🔗' },
  { title: 'Experience', icon: '📑' },
  { title: 'Motivation', icon: '💎' },
];

function Benifits() {
  return (
    <section className="container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="heading">What you'll achieve by this book</h2>
        <p className="subheading">
          Lorem ipsum dolor sit amet, consectetuer laoreet dolore magna.
        </p>
      </motion.div>

      <div className="grid-container">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 12px 25px rgba(0,0,0,0.15)',
            }}
          >
            <div className="icon">{feature.icon}</div>
            <h3 className="card-title">{feature.title}</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a href="#" className="read-more">Read more ➝</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Benifits;