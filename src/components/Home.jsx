// HomeHero.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bgImage from "../assets/hero.png";
import Process from "./Process.jsx";
export default function Hero() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="relative flex justify-center overflow-hidden px-4 md:px-6"
        style={{ minHeight: "calc(100vh - 80px)", paddingTop: "6rem" }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 mx-auto max-w-7xl w-full h-full bg-cover bg-center rounded-2xl brightness-75 transition-transform duration-700"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 rounded-2xl" />
        </div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl mt-20 md:mt-24 px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug drop-shadow-lg">
            <span className="text-cyan-400">Floor Heating</span> Quotes Made Easy
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mt-4 drop-shadow-md">
            Get instant quotes. Professional installation. Comfortable warmth guaranteed.
          </p>
        </motion.div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="absolute bottom-12 w-full flex justify-center z-20 px-4"
        >
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 flex flex-col md:flex-row items-center gap-3 max-w-3xl w-full border border-gray-200 hover:scale-105 transition-transform duration-300">
            <input
              placeholder="Enter your postcode"
              className="flex-1 border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-400 text-gray-800 font-medium transition"
            />
            <button
              onClick={() => navigate("/quote")}
              className="bg-cyan-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-cyan-600 shadow-md transition"
            >
              Get Your Quote
            </button>
          </div>
        </motion.div>

        {/* Floating Decorations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-24 left-8 w-20 h-20 bg-cyan-400 rounded-full mix-blend-overlay blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
          className="absolute bottom-28 right-12 w-28 h-28 bg-purple-400 rounded-full mix-blend-overlay blur-3xl"
        />
      </div>
      <Process />
    </div>
  );
}
