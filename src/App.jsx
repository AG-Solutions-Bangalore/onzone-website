import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// import UtilityBar from "./components/UtilityBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppBroadcast from "./components/WhatsAppBroadcast";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Collections = lazy(() => import("./pages/Collections"));
const Process = lazy(() => import("./pages/Process"));
const CategoryProducts = lazy(() => import("./pages/CategoryProducts"));
const Product = lazy(() => import("./pages/Product"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const MobilePopup = lazy(() => import("./components/MobilePopup"));

import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Scrolls to top on route change & re-initializes all scroll effects
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const timer = setTimeout(() => {
      AOS.refreshHard();
      ScrollTrigger.refresh();
    }, 120);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      duration: 750,
      easing: "ease-out-cubic",
      offset: 60,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-cream-light font-sans text-ink">
        {/* <UtilityBar /> */}
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
        <WhatsAppBroadcast />
      </div>
    </BrowserRouter>
  );
};

export default App;
