import React from "react";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="w-full py-20 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-500 text-white py-3 rounded-xl font-semibold hover:bg-cyan-600 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Info</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <FiMapPin className="text-cyan-500 text-2xl" />
              <span className="text-gray-700">123 Heating Street, City, Country</span>
            </div>
            <div className="flex items-center gap-3">
              <FiMail className="text-cyan-500 text-2xl" />
              <span className="text-gray-700">support@heatpro.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-cyan-500 text-2xl" />
              <span className="text-gray-700">+123 456 7890</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-xl">
            <motion.a whileHover={{ scale: 1.2, color: "#06b6d4" }} href="#">
              <FaFacebookF />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#06b6d4" }} href="#">
              <FaTwitter />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#06b6d4" }} href="#">
              <FaInstagram />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#06b6d4" }} href="#">
              <FaLinkedinIn />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
