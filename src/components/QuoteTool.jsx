import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FloorHeatingCalculator from "./FloorHeatingCalculator";

export default function QuoteTool() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10">
      
      {/* PAGE HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-10 max-w-2xl"
      >
        <h1 className="text-4xl font-bold text-cyan-800">
          Vloerverwarming Offerte
        </h1>
        <p className="text-cyan-600 mt-3 text-lg">
          Beantwoord enkele korte vragen en ontvang direct een
          persoonlijke prijsindicatie voor uw vloerverwarming.
        </p>
      </motion.div>

      {/* BACK BUTTON */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        onClick={() => navigate("/")}
        className="mb-8 inline-flex items-center gap-2
                   bg-white border border-cyan-200 text-cyan-700
                   px-5 py-2 rounded-xl hover:bg-cyan-50
                   transition shadow-sm"
      >
        ← Terug naar home
      </motion.button>

      {/* CALCULATOR CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 md:p-8"
      >
        <FloorHeatingCalculator />
      </motion.div>
    </div>
  );
}
