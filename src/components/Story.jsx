import React, { useRef, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { img } from "../lib/utils.js";

/* ── Story Slider Items ── */
const storySlides = [
  {
    id: 1,
    year: "1999",
    tag: "THE FOUNDING",
    title: "Founded in Bangalore",
    desc: "Built on an unglamorous ambition — crafting clothing retailers could rely on season after season. Founded by Rajesh Parekh and Mukesh Parekh.",
    img: img("red_yellow_shirt_1784885132692.jpg"),
  },
  {
    id: 2,
    tag: "CATEGORY EXPANSION",
    title: "Shirts to Trousers & Cargos",
    desc: "Steadily expanded from formal shirts into formal trousers, smart casuals, cotton trousers, jeans, pyjamas, cargos, and imported club wear trousers.",
    img: img("img_2.jpeg"),
  },
  {
    id: 3,
    tag: "RETAIL NETWORK",
    title: "2,500+ Retail Partners",
    desc: "Grew organically from Bangalore across Karnataka, South India, and today operates across South, Central, Central-West, North-East, and North India.",
    img: img("img_3.jpeg"),
  },
  {
    id: 4,
    tag: "OPERATIONAL STRENGTH",
    title: "150,000+ Garment Capacity",
    desc: "Stock depth of 100,000+ shirts and 50,000+ trousers & denims. Directly serving 2,500+ active retail partners.",
    img: img("img_4.jpeg"),
  },
  {
    id: 5,
    tag: "QUIET CONSISTENCY",
    title: "25+ Years of Trust",
    desc: "25 years of quiet, organic growth built on relationships, repeat business, and trust — not noise or aggressive marketing.",
    img: img("luxury_menswear_1_1784887541453.jpg"),
  },
];

const Story = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const total = storySlides.length;

  const goNext = useCallback(() => {
    setSlideIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setSlideIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [goNext]);

  /* Intersection observer for scroll reveal */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const activeSlide = storySlides[slideIndex];

  return (
    <section
      ref={sectionRef}
      className="bg-[#ffffff] py-16 sm:py-24 overflow-hidden"
      id="story"
    >
      <div className="max-w-full mx-auto px-6 sm:px-10">
        {/* ── Top Eyebrow ── */}
        <div
          className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="w-12 h-[2px] bg-[#c6963f]" />
          <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#C6963F]">
            Our Story & Heritage
          </span>
        </div>

        {/* ── Main Grid (Left Content + Right Image Slider) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT — Brand Narrative */}
          <div
            className={`transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="font-serif-luxury font-bold text-3xl sm:text-5xl text-[#0E1A30] leading-[1.08] mb-6 normal-case">
              25 years of trust,{" "}
              <em className="italic text-[#A87B31] block">
                one season at a time.
              </em>
            </h2>

            <p className="text-[#6B665A] text-sm sm:text-base leading-[1.78] mb-4 max-w-lg font-sans">
              Established in 1999 by Rajesh and Mukesh Parekh, Onzone began with
              a single, unglamorous ambition — build men's clothing that
              retailers could rely on, season after season.
            </p>

            <p className="text-[#6B665A] text-sm sm:text-base leading-[1.78] mb-6 max-w-lg font-sans">
              From formal shirts we grew into trousers, smart casuals, denims,
              pyjamas and cargos — every addition earned through retailer
              feedback and 25 years of quiet shop-floor insight.
            </p>

            {/* Quote Block */}
            <blockquote className="border-l-4 border-[#C6963F] pl-4 py-1 mb-6 text-[#2B2820] font-serif-luxury italic text-base sm:text-lg leading-relaxed">
              "Reach, quality and credibility — before promotion."
            </blockquote>

            {/* ── CTA BUTTON + BRAND COLLABORATION (right next to each other) ── */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              {/* Button */}
              <button
                onClick={() => navigate("/about")}
                className="inline-flex items-center gap-2.5 bg-[#0E1A30] text-[#FDFAF5] font-mono text-xs font-semibold uppercase tracking-widest px-7 py-3.5 rounded-sm hover:bg-[#C6963F] hover:text-[#0E1A30] transition-all duration-300 shadow-md hover:-translate-y-0.5 shrink-0"
              >
                <span>Read Our Full Story</span>
                <span>→</span>
              </button>
              <div className="flex flex-col ml-36 mt-[-20px] justify-center items-center gap-3 md:gap-2">
                <span className="text-[1rem] tracking-[0.2em] uppercase text-[#c9a84c] opacity-60 font-mono whitespace-nowrap">
                  Our Brands
                </span>
                <div className="flex items-center gap-2 md:gap-3">
                  <img
                    src="/hoo_logo.svg"
                    alt="Scot Lee"
                    className="h-8 md:h-12  w-auto object-contain transition-all duration-300 brightness-90 hover:brightness-100 hover:scale-105"
                  />
                  <span className="text-[#c9a84c] opacity-50 text-sm md:text-base">
                    ✦
                  </span>
                  <img
                    src={img("scotlee_logo.jpg")}
                    alt="Onzone – House of Onzone"
                    loading="lazy"
                    decoding="async"
                    className="h-8 md:h-22 w-auto object-contain transition-all duration-300 brightness-90 hover:brightness-100 hover:scale-105"
                  />
                </div>
              </div>

              {/* Brand Logos */}
            </div>

            {/* Tagline */}
          </div>

          {/* RIGHT — Interactive Image Slider */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative w-full h-[420px] sm:h-[480px] overflow-hidden shadow-2xl bg-[#0E1A30] border-4 border-none group select-none">
              {/* Image Transition Track */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={activeSlide.img}
                    alt={activeSlide.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top filter brightness-[0.88] hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A30]/90 via-[#0E1A30]/30 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#0E1A30]/80 backdrop-blur-md border border-[#C6963F]/40 px-3.5 py-1.5 rounded-full text-xs font-mono text-[#C6963F]">
                <Calendar className="w-3.5 h-3.5 text-[#C6963F]" />
                <span className="font-bold">{activeSlide.year}</span>
                <span className="text-white/40">|</span>
                <span className="text-white/80">{activeSlide.tag}</span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-6 left-6 right-6 z-20 text-[#FDFAF5]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-1"
                  >
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#FDFAF5]">
                      {activeSlide.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FDFAF5]/80 font-sans leading-relaxed line-clamp-2">
                      {activeSlide.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#0E1A30]/70 hover:bg-[#C6963F] text-white hover:text-[#0E1A30] border border-white/20 flex items-center justify-center backdrop-blur-md shadow-lg transition-all transform hover:scale-110 opacity-80 group-hover:opacity-100"
                aria-label="Previous Story Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#0E1A30]/70 hover:bg-[#C6963F] text-white hover:text-[#0E1A30] border border-white/20 flex items-center justify-center backdrop-blur-md shadow-lg transition-all transform hover:scale-110 opacity-80 group-hover:opacity-100"
                aria-label="Next Story Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Progress Dots Bar */}
              <div className="absolute bottom-3 right-6 z-30 flex items-center gap-1.5">
                {storySlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSlideIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === slideIndex
                        ? "w-6 bg-[#C6963F]"
                        : "w-1.5 bg-white/40 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
