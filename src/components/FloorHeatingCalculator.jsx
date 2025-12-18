import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Progress from "./Progress";
import StepRenderer from "./StepRenderer";

export const STEPS = [
  "Address",
  "WorkType",
  "Rooms",
  "Floors",
  "Surface",
  "HeatingType",
  "CurrentHeating",
  "Summary",
];

export default function FloorHeatingCalculator() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    postalCode: "",
    houseNumber: "",
    workType: "",
    rooms: [],
    floors: 1,
    surface: "",
    heatingType: "",
    currentHeating: "",
  });

  const update = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleArray = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const isValidStep = () => {
    switch (STEPS[step]) {
      case "Address":
        return form.postalCode.trim() !== "" && form.houseNumber.trim() !== "";

      case "WorkType":
        return form.workType !== "";

      case "Rooms":
        return form.rooms.length > 0;

      case "Floors":
        return Number(form.floors) > 0;

      case "Surface":
        return Number(form.surface) > 0;

      case "HeatingType":
        return form.heatingType !== "";

      case "CurrentHeating":
        return form.currentHeating !== "";

      default:
        return true;
    }
  };

  const next = () => {
    if (!isValidStep()) return;
    setStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  };

  const back = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Progress currentStep={step} totalSteps={STEPS.length} />

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
        >
          <StepRenderer
            step={STEPS[step]}
            form={form}
            update={update}
            toggleArray={toggleArray}
          />
        </motion.div>
      </AnimatePresence>

      {/* NAVIGATION */}
      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className={`px-4 py-2 rounded ${
            step === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Back
        </button>

        <button
          type="button"
          onClick={next}
          disabled={!isValidStep()}
          className={`px-6 py-2 rounded text-white ${
            isValidStep()
              ? "bg-cyan-600 hover:bg-cyan-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {step === STEPS.length - 2 ? "Review" : "Next"}
        </button>
      </div>
    </div>
  );
}
