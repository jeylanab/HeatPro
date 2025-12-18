import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaHome,
  FaTools,
  FaWrench,
  FaPlug,
  FaCouch,
  FaUtensils,
  FaBed,
  FaBath,
  FaDoorOpen,
  FaLayerGroup,
  FaRulerCombined,
  FaFire,
  FaBolt,
  FaWater
} from "react-icons/fa";

export default function StepRenderer({ step, form, update, toggleArray }) {
  return (
    <div>
      {/* ADDRESS */}
      {step === "Address" && (
        <Step title="Your address" icon={<FaMapMarkerAlt />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Postal Code" value={form.postalCode} onChange={(v) => update("postalCode", v.replace(/\D/g, ""))} />
            <Input label="House Number" value={form.houseNumber} onChange={(v) => update("houseNumber", v.replace(/\D/g, ""))} />
          </div>
        </Step>
      )}

      {/* WORK TYPE */}
      {step === "WorkType" && (
        <Step title="What needs to be done?" icon={<FaTools />}>
          <Grid>
            <SelectCard icon={<FaHome />} label="New installation" selected={form.workType === "New installation"} onClick={() => update("workType", "New installation")} />
            <SelectCard icon={<FaWrench />} label="Replace" selected={form.workType === "Replace"} onClick={() => update("workType", "Replace")} />
            <SelectCard icon={<FaPlug />} label="Connect only" selected={form.workType === "Connect only"} onClick={() => update("workType", "Connect only")} />
            <SelectCard icon={<FaTools />} label="Repair" selected={form.workType === "Repair"} onClick={() => update("workType", "Repair")} />
          </Grid>
        </Step>
      )}

      {/* ROOMS */}
      {step === "Rooms" && (
        <Step title="Rooms" icon={<FaLayerGroup />}>
          <Grid>
            <Room icon={<FaCouch />} label="Living room" form={form} toggle={toggleArray} />
            <Room icon={<FaUtensils />} label="Kitchen" form={form} toggle={toggleArray} />
            <Room icon={<FaBed />} label="Bedroom" form={form} toggle={toggleArray} />
            <Room icon={<FaBath />} label="Bathroom" form={form} toggle={toggleArray} />
            <Room icon={<FaDoorOpen />} label="Hallway" form={form} toggle={toggleArray} />
          </Grid>
        </Step>
      )}

      {/* FLOORS */}
      {step === "Floors" && (
        <Step title="Number of floors" icon={<FaLayerGroup />}>
          <BigInput value={form.floors} onChange={(v) => update("floors", v)} />
        </Step>
      )}

      {/* SURFACE */}
      {step === "Surface" && (
        <Step title="Total surface (m²)" icon={<FaRulerCombined />}>
          <BigInput value={form.surface} onChange={(v) => update("surface", v)} />
        </Step>
      )}

      {/* HEATING TYPE */}
      {step === "HeatingType" && (
        <Step title="Heating type" icon={<FaFire />}>
          <Grid>
            <SelectCard icon={<FaBolt />} label="Electric" selected={form.heatingType === "Electric"} onClick={() => update("heatingType", "Electric")} />
            <SelectCard icon={<FaWater />} label="Water-based" selected={form.heatingType === "Water-based"} onClick={() => update("heatingType", "Water-based")} />
            <SelectCard icon={<FaFire />} label="To be discussed" selected={form.heatingType === "To be discussed"} onClick={() => update("heatingType", "To be discussed")} />
          </Grid>
        </Step>
      )}

      {/* SUMMARY */}
      {step === "Summary" && (
        <Step title="Summary" icon={<FaHome />}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Summary icon={<FaMapMarkerAlt />} title="Address" value={`${form.postalCode || "—"} ${form.houseNumber || ""}`} />
            <Summary icon={<FaTools />} title="Work" value={form.workType || "—"} />
            <Summary icon={<FaLayerGroup />} title="Rooms" value={form.rooms.join(", ") || "—"} />
            <Summary icon={<FaRulerCombined />} title="Surface" value={form.surface ? `${form.surface} m²` : "—"} />
            <Summary icon={<FaFire />} title="Heating" value={form.heatingType || "—"} />
          </div>
        </Step>
      )}
    </div>
  );
}

/* ---------- UI ---------- */

function Step({ title, icon, children }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl text-cyan-600">{icon}</span>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Grid({ children }) {
  return <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">{children}</div>;
}

function SelectCard({ icon, label, selected, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`cursor-pointer rounded-xl border p-4 text-center transition ${
        selected ? "border-cyan-600 bg-cyan-50 ring-2 ring-cyan-500" : "border-gray-300 hover:border-cyan-400"
      }`}
    >
      <div className="text-3xl text-cyan-600 mb-2">{icon}</div>
      <p className="text-sm font-medium">{label}</p>
    </motion.div>
  );
}

function Room({ icon, label, form, toggle }) {
  return <SelectCard icon={icon} label={label} selected={form.rooms.includes(label)} onClick={() => toggle("rooms", label)} />;
}

function Input({ label, value, onChange }) {
  return (
    <div>
      <label className="text-sm text-gray-600 mb-1 block">{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none" />
    </div>
  );
}

function BigInput({ value, onChange }) {
  return (
    <input type="number" value={value} onChange={(e) => onChange(e.target.value)} className="w-full text-center text-2xl border rounded-xl px-6 py-4 focus:ring-2 focus:ring-cyan-500 outline-none" />
  );
}

function Summary({ icon, title, value }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-4 border rounded-xl p-4 bg-white shadow-sm">
      <div className="text-xl text-cyan-600">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </motion.div>
  );
}
