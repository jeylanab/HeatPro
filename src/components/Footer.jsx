import React from "react";
import { FiLayers } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full mt-auto px-4">
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 px-6 py-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8">

          {/* Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 text-2xl font-extrabold text-cyan-500">
              <FiLayers className="text-3xl" />
              HeatPro
            </div>
            <p className="text-gray-600 text-sm">
              Fast, reliable underfloor heating installation. Get instant quotes and expert results.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <a href="/" className="text-gray-600 hover:text-cyan-500 transition">Home</a>
            <a href="/quote" className="text-gray-600 hover:text-cyan-500 transition">Get Quote</a>
            <a href="/steps" className="text-gray-600 hover:text-cyan-500 transition">Installation Process</a>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <h4 className="font-semibold text-gray-900">Contact</h4>
            <p className="text-gray-600 text-sm">123 Heating Street, City</p>
            <p className="text-gray-600 text-sm">support@heatpro.com</p>
            <p className="text-gray-600 text-sm">+123 456 7890</p>
          </motion.div>

          {/* Services / Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <h4 className="font-semibold text-gray-900">Our Services</h4>
            <a href="#" className="text-gray-600 hover:text-cyan-500 transition">Electric Underfloor Heating</a>
            <a href="#" className="text-gray-600 hover:text-cyan-500 transition">Water-Based Heating</a>
            <a href="#" className="text-gray-600 hover:text-cyan-500 transition">Installation & Repair</a>
            <a href="#" className="text-gray-600 hover:text-cyan-500 transition">Custom Heating Solutions</a>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-100" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} HeatPro — All rights reserved.</p>

          <div className="flex gap-4 mt-4 md:mt-0 text-xl">
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
        </div>

      </div>
    </footer>
  );
}
