import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import PrintPhotos from "./pages/PrintPhotos";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen text-white bg-foxBlack relative overflow-hidden">
      <div className="pointer-events-none absolute -top-44 -right-44 h-[520px] w-[520px] rounded-full bg-foxOrange/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-44 -left-44 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/prints" element={<PrintPhotos />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}
