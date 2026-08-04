import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import UtilityBar from "./components/UtilityBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobilePopup from "./components/MobilePopup";

import Home from "./pages/Home";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Process from "./pages/Process";
import CategoryProducts from "./pages/CategoryProducts";
import Product from "./pages/Product";
import ContactPage from "./pages/ContactPage";

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream-light font-sans text-ink">
        <UtilityBar />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/collections" element={<Collections />} />
            <Route
              path="/collections/:category"
              element={<CategoryProducts />}
            />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <MobilePopup />
      </div>
    </BrowserRouter>
  );
};

export default App;
