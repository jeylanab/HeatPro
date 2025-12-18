import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import QuoteTool from "./components/QuoteTool.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Process from "./components/Process.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="flex-1 pt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quote" element={<QuoteTool />} />
            <Route path="/steps" element={<Process />} />
            <Route path="/contact" element={<Contact />} /> {/* New Contact route */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
