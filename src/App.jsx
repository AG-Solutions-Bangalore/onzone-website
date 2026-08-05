import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import UtilityBar from "./components/UtilityBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Collections = lazy(() => import("./pages/Collections"));
const Process = lazy(() => import("./pages/Process"));
const CategoryProducts = lazy(() => import("./pages/CategoryProducts"));
const Product = lazy(() => import("./pages/Product"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const MobilePopup = lazy(() => import("./components/MobilePopup"));

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
          <Suspense
            fallback={
              <div className="min-h-[50vh] flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-[#C6963F]/30 border-t-[#C6963F] rounded-full animate-spin" />
              </div>
            }
          >
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
          </Suspense>
        </main>
        <Footer />
        <MobilePopup />
      </div>
    </BrowserRouter>
  );
};

export default App;
