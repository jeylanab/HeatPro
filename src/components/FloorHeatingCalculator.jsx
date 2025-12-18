import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMapPin,
  FiHome,
  FiSettings,
  FiUser,
  FiCheckCircle
} from "react-icons/fi";

/* ================= PRICING CONFIG ================= */

const MANIFOLD_PRICES = [
  { max: 20, excl: 1791.2, incl: 2167.35, groups: 2 },
  { max: 30, excl: 1854.83, incl: 2244.34, groups: 3 },
  { max: 40, excl: 1935.26, incl: 2341.66, groups: 4 },
  { max: 50, excl: 2066.5, incl: 2500.47, groups: 5 },
  { max: 60, excl: 2147.37, incl: 2598.32, groups: 6 },
  { max: 70, excl: 2433.76, incl: 2944.85, groups: 7 },
  { max: 80, excl: 2626.05, incl: 3177.52, groups: 8 }
];

/* ================= MAIN COMPONENT ================= */

export default function QuoteCalculator() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    postcode: "",
    houseNumber: "",
    jobType: "",
    rooms: [],
    area: "",
    heatingType: "",
    currentHeating: "",
    floorFinish: "",
    subfloor: "",
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (k, v) => setForm({ ...form, [k]: v });

  const toggleArrayValue = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value]
    }));
  };

  /* ================= PRICING LOGIC (UNCHANGED) ================= */

  const area = Number(form.area);
  const groups = Math.ceil(area / 10);

  const manifold = MANIFOLD_PRICES.find((m) => groups <= m.groups);

  const baseExcl = manifold ? manifold.excl : 0;

  let adjustments = 0;
  if (form.subfloor === "Concrete") adjustments += 375 * groups;
  if (form.floorFinish === "Tiles") adjustments += 75 * groups;
  if (form.currentHeating === "District heating") adjustments += 75 * groups;

  const totalExcl = baseExcl + adjustments;
  const vat = totalExcl * 0.21;
  const totalIncl = totalExcl + vat;

  /* ================= UI HELPERS ================= */

  const steps = [
    { id: 1, label: "Location", icon: <FiMapPin /> },
    { id: 2, label: "Rooms", icon: <FiHome /> },
    { id: 3, label: "Technical", icon: <FiSettings /> },
    { id: 4, label: "Contact", icon: <FiUser /> }
  ];

  const slide = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  };

  /* ================= RENDER ================= */

  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-10 text-cyan-600">
        Underfloor Heating Quote Calculator
      </h2>

      {/* PROGRESS */}
      <div className="flex justify-between mb-10">
        {steps.map((s) => (
          <div
            key={s.id}
            className={`flex flex-col items-center flex-1 ${
              step >= s.id ? "text-cyan-600" : "text-gray-300"
            }`}
          >
            <div className="text-2xl mb-1">{s.icon}</div>
            <span className="text-sm">{s.label}</span>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          variants={slide}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.35 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <Input placeholder="Postal code" value={form.postcode} onChange={(e) => handleChange("postcode", e.target.value)} />
              <Input placeholder="House number" value={form.houseNumber} onChange={(e) => handleChange("houseNumber", e.target.value)} />
              <Select label="What needs to be done?" options={[
                "New underfloor heating installation",
                "Replace existing underfloor heating",
                "Connect to heating system only",
                "Repair underfloor heating"
              ]} value={form.jobType} onChange={(v) => handleChange("jobType", v)} />
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <CheckboxGroup label="Rooms" options={[
                "Living room",
                "Kitchen",
                "Bedroom(s)",
                "Bathroom",
                "Hallway",
                "Toilet",
                "Other"
              ]} values={form.rooms} onToggle={(v) => toggleArrayValue("rooms", v)} />
              <Input placeholder="Total surface area (m²)" value={form.area} onChange={(e) => handleChange("area", e.target.value)} />
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <Select label="Subfloor material" options={["Concrete", "Wood", "Stone", "I don’t know", "Other"]} value={form.subfloor} onChange={(v) => handleChange("subfloor", v)} />
              <Select label="Current floor finish" options={["None", "Carpet", "Wood", "Laminate", "PVC", "Concrete", "Tiles", "Other"]} value={form.floorFinish} onChange={(v) => handleChange("floorFinish", v)} />
              <Select label="Current heating system" options={["Gas boiler", "Hybrid heat pump", "Full electric heat pump", "District heating", "Other"]} value={form.currentHeating} onChange={(v) => handleChange("currentHeating", v)} />
            </>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <>
              <Input placeholder="Full name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} />
              <Input placeholder="Email address" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
              <Input placeholder="Phone number" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} />

              {manifold && (
                <div className="mt-6 bg-cyan-50 p-5 rounded-xl">
                  <p>Heating groups: <strong>{groups}</strong></p>
                  <p>Total incl. VAT:</p>
                  <p className="text-2xl font-bold text-cyan-600">
                    €{totalIncl.toFixed(2)}
                  </p>
                </div>
              )}
            </>
          )}

          {/* NAV */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button onClick={() => setStep(step - 1)} className="flex-1 border py-3 rounded-xl">
                Back
              </button>
            )}
            {step < 4 ? (
              <button onClick={() => setStep(step + 1)} className="flex-1 bg-cyan-500 text-white py-3 rounded-xl">
                Next
              </button>
            ) : (
              <button className="flex-1 bg-cyan-600 text-white py-3 rounded-xl flex items-center justify-center gap-2">
                <FiCheckCircle /> Submit Quote
              </button>
            )}
          </div>

        </motion.div>
      </AnimatePresence>
    </section>
  );
}

/* ================= REUSABLE UI ================= */

const Input = ({ ...props }) => (
  <input {...props} className="w-full mb-4 border rounded-xl px-4 py-3" />
);

const Select = ({ label, options, value, onChange }) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium">{label}</label>
    <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full border rounded-xl px-4 py-3">
      <option value="">Select</option>
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
  </div>
);

const CheckboxGroup = ({ label, options, values, onToggle }) => (
  <div className="mb-4">
    <p className="font-medium mb-2">{label}</p>
    <div className="grid grid-cols-2 gap-2">
      {options.map((o) => (
        <label key={o} className="flex items-center gap-2">
          <input type="checkbox" checked={values.includes(o)} onChange={() => onToggle(o)} />
          {o}
        </label>
      ))}
    </div>
  </div>
);
