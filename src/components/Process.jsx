import React from "react";
import { FaClipboardList, FaRuler, FaTools, FaFire, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaClipboardList />,
    title: "Request a Quote",
    description: "Submit your postcode and heating details to get a personalized quote instantly."
  },
  {
    icon: <FaRuler />,
    title: "Site Measurement",
    description: "Our expert visits your home to measure the space accurately for underfloor heating."
  },
  {
    icon: <FaTools />,
    title: "Professional Installation",
    description: "Certified team installs your underfloor heating efficiently and safely."
  },
  {
    icon: <FaFire />,
    title: "System Activation",
    description: "We test and activate your heating system to ensure optimal performance."
  },
  {
    icon: <FaCheckCircle />,
    title: "Enjoy Comfort",
    description: "Relax and enjoy warm and cozy floors all year round."
  }
];

export default function ProcessSection() {
  return (
    <section className="w-full py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-900"
        >
          Our Heating Installation Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-600 mt-4 text-lg"
        >
          Step by step, we ensure a smooth and professional installation.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-cyan-300"></div>

        {steps.map((step, idx) => {
          const isLeft = idx % 2 === 0; // Alternate left/right
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              className={`mb-12 flex justify-between items-center w-full ${
                isLeft ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className="w-1/2 flex justify-center">
                <div className="bg-white rounded-full shadow-lg p-5 text-cyan-500 text-4xl z-10">
                  {step.icon}
                </div>
              </div>
              <div
                className={`w-1/2 bg-white backdrop-blur-md shadow-lg rounded-2xl p-6 text-gray-800 relative ${
                  isLeft ? "mr-6" : "ml-6"
                }`}
              >
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
