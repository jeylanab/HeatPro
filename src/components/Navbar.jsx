import { FiMenu, FiX, FiLayers } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const primaryBlue = "text-[#0A3D62]";
  const primaryBg = "bg-[#0A3D62]";

  return (
    <nav className="fixed w-full top-4 left-0 z-50 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white rounded-2xl shadow-lg px-6 py-3 border border-gray-100">

        {/* Logo */}
        <div
          className={`flex items-center gap-2 text-2xl font-extrabold cursor-pointer text-cyan-500`}
          onClick={() => navigate("/")}
        >
          <FiLayers className="text-3xl" />
          HeatPro
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <button onClick={() => handleNavigate("/")} className="hover:text-[#0A3D62] transition">Home</button>
          <button onClick={() => handleNavigate("/quote")} className="hover:text-[#0A3D62] transition">Get Quote</button>
          <button onClick={() => handleNavigate("/steps")} className="hover:text-[#0A3D62] transition">Installation Process</button>
          <button onClick={() => handleNavigate("/contact")} className="hover:text-[#0A3D62] transition">Contact Us</button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <button
            onClick={() => handleNavigate("/quote")}
            className={`px-6 py-2 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-[#062a44] transition`}
          >
            Request Heating Quote
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white rounded-xl shadow-lg mt-2 px-6 py-4 flex flex-col gap-4 text-gray-700"
        >
          <button onClick={() => handleNavigate("/")} className="hover:text-[#0A3D62] text-lg font-medium">Home</button>
          <button onClick={() => handleNavigate("/quote")} className="hover:text-[#0A3D62] text-lg font-medium">Get Quote</button>
          <button onClick={() => handleNavigate("/steps")} className="hover:text-[#0A3D62] text-lg font-medium">Installation Process</button>
          <button onClick={() => handleNavigate("/contact")} className="hover:text-[#0A3D62] text-lg font-medium">Contact Us</button>

          <button
            onClick={() => handleNavigate("/quote")}
            className={`mt-2 px-6 py-2 ${primaryBg} text-white rounded-lg font-semibold hover:bg-[#062a44] transition`}
          >
            Request Heating Quote
          </button>
        </motion.div>
      )}
    </nav>
  );
}
