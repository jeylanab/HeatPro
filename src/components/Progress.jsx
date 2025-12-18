// Progress.jsx
import { motion } from "framer-motion";

export default function Progress({ currentStep, totalSteps }) {
  const percent = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-6">
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-cyan-600"
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      <div className="mt-2 text-sm text-gray-600 text-right">
        Step {currentStep + 1} of {totalSteps}
      </div>
    </div>
  );
}
