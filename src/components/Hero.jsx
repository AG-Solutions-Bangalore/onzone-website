import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { img } from "../lib/utils.js";

const slides = [
  {
    id: 1,
    tag: "AUTUMN / WINTER 2025",
    headline: "Confidence, At Ease.",
    subtitle:
      "Celebrate your presence, no matter the distance. 150+ sharp tailored fits.",
    cta: "Explore Collection",
    ctaLink: "/collections",
    img: img("img_0.jpeg"),
    accent: "#C6963F",
  },
  {
    id: 2,
    tag: "CLASSIC CHECKS",
    headline: "Heritage Check Shirts",
    subtitle:
      "Woven for modern versatility from boardroom to weekend gatherings.",
    cta: "Shop Checks",
    ctaLink: "/collections",
    img: img("img_1.jpeg"),
    accent: "#C6963F",
  },
  {
    id: 3,
    tag: "SIGNATURE PRINTS",
    headline: "Crafted Cotton Casual Shirts",
    subtitle:
      "Breathable textures, perfect drape, engineered for everyday comfort.",
    cta: "Shop Casuals",
    ctaLink: "/collections",
    img: img("img_2.jpeg"),
    accent: "#C6963F",
  },
  {
    id: 4,
    tag: "REFINED STRIPES",
    headline: "Refined Stripe Collection",
    subtitle: "Bold tailored statement pieces designed to command attention.",
    cta: "View Prints",
    ctaLink: "/collections",
    img: img("img_4.jpeg"),
    accent: "#C6963F",
  },
];

const AUTO_PLAY_MS = 4000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const total = slides.length;

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(goNext, AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, [goNext]);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const dist = touchStart - touchEnd;
    if (dist > 40) goNext();
    if (dist < -40) goPrev();
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section
      className="relative w-full bg-[#FDFAF5] py-8 sm:py-12 overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      id="hero"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative">
        {/* Carousel Track */}
        <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] flex items-center justify-center">
          {slides.map((slide, i) => {
            let offset = i - index;
            if (offset < -2) offset += total;
            if (offset > 2) offset -= total;

            const isActive = offset === 0;
            const isPrev = offset === -1;
            const isNext = offset === 1;

            if (!isActive && !isPrev && !isNext) return null;

            return (
              <motion.div
                key={slide.id}
                initial={false}
                animate={{
                  x: isActive
                    ? "0%"
                    : isPrev
                      ? "calc(-100% - 16px)"
                      : "calc(100% + 16px)",
                  scale: isActive ? 1 : 0.92,
                  opacity: isActive ? 1 : 0.6,
                  zIndex: isActive ? 30 : 10,
                }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="absolute w-[90vw] sm:w-[80vw] lg:w-[1060px] h-full rounded-2xl overflow-hidden shadow-2xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-top bg-center"
                  style={{ backgroundImage: `url('${slide.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0E1A30]/90 via-[#0E1A30]/60 to-transparent" />

                <div className="relative w-full h-full flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-8">
                  <span className="inline-block w-fit px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase bg-[#C6963F] text-[#0E1A30] shadow-lg mb-4">
                    {slide.tag}
                  </span>
                  <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-[#FDFAF5] max-w-2xl">
                    {slide.headline}
                  </h1>
                  <p className="text-[#FDFAF5]/70 text-sm sm:text-lg max-w-lg mt-3 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="mt-6">
                    <Link
                      to={slide.ctaLink}
                      className="inline-flex items-center gap-2 bg-[#C6963F] text-[#0E1A30] hover:bg-[#a87d2a] font-mono text-xs sm:text-sm tracking-[0.1em] uppercase font-bold px-7 py-3.5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 no-underline"
                    >
                      {slide.cta}
                      <span className="text-lg">→</span>
                    </Link>
                  </div>
                  <Sparkles className="absolute bottom-6 right-6 w-8 h-8 text-[#C6963F] opacity-30 animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Arrows – adapted for light background */}
        <button
          onClick={goPrev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white shadow-xl border border-[#C6963F]/30 text-[#0E1A30] hover:bg-[#C6963F] hover:text-white transition-all duration-300 flex items-center justify-center"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white shadow-xl border border-[#C6963F]/30 text-[#0E1A30] hover:bg-[#C6963F] hover:text-white transition-all duration-300 flex items-center justify-center"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Dots – dark for light background */}
      <div className="flex items-center justify-center gap-2.5 mt-5 sm:mt-7">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="relative flex items-center justify-center p-2"
            aria-label={`Slide ${i + 1}`}
          >
            <span
              className={`block h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-[#C6963F]" : "w-2 bg-[#0E1A30]/30 hover:bg-[#0E1A30]/60"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
