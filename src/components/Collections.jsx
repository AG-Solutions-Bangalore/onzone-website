import React, { useRef, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { img } from "../lib/utils.js";

// 5 Signature Curated Collections
const collections = [
  {
    id: 0,
    number: "01",
    category: "CRISP FORMALS",
    title: "Formals Showcase 2025",
    subtitle: "{ Explore Formals Collection }",
    tagline: "German-Fused Collar · 20 SPI Single-Needle",
    badge: "SAVILE ROW BENCHMARK",
    img: img("img_6.jpeg"),
    href: "/collections",
  },
  {
    id: 1,
    number: "02",
    category: "SMART CASUALS",
    title: "Air-Washed Linens & Casuals",
    subtitle: "{ Explore Smart Casuals }",
    tagline: "Normandy French Flax · Natural Breathability",
    badge: "SUMMER RESORT EDIT",
    img: img("img_7.jpeg"),
    href: "/collections",
  },
  {
    id: 2,
    number: "03",
    category: "TAILORED TROUSERS",
    title: "Merino Wool Blend Trousers",
    subtitle: "{ Explore Tailored Trousers }",
    tagline: "Ergonomic Flex Waistband · Flat-Front Cut",
    badge: "ALL-DAY COMFORT",
    img: img("img_8.jpeg"),
    href: "/collections",
  },
  {
    id: 3,
    number: "04",
    category: "AUTHENTIC DENIMS",
    title: "Selvedge Indigo Archive",
    subtitle: "{ Explore Selvedge Denims }",
    tagline: "13.5 Oz Shuttle-Loomed · Pure Ring-Spun",
    badge: "INDIGO ARCHIVE",
    img: "/assets/denims_bookshelf.webp",
    href: "/collections",
  },
  {
    id: 4,
    number: "05",
    category: "MODERN UTILITY",
    title: "Engineered Cargos",
    subtitle: "{ Explore Utility Cargos }",
    tagline: "Articulated Knee Pleats · Heavyweight Twill",
    badge: "CONTEMPORARY CUT",
    img: img("img_10.jpeg"),
    href: "/collections",
  },
];

const Collections = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const total = collections.length;

  const activeCollection = collections[activeIndex] || collections[0];

  const goToIndex = useCallback(
    (targetIdx) => {
      const nextIdx = (targetIdx + total) % total;
      setActiveIndex(nextIdx);
    },
    [total]
  );

  // Continuous auto-play: automatically advances every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 2500);

    return () => clearInterval(timer);
  }, [total]);

  // Synchronize text animation with active card change
  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      gsap.fromTo(
        [titleRef.current, subtitleRef.current],
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }
  }, [activeIndex]);

  // Compute exact cyclic offset relative to activeIndex (seamless wrapping)
  const getCardOffset = useCallback(
    (itemIndex) => {
      let offset = itemIndex - activeIndex;
      while (offset > total / 2) offset -= total;
      while (offset < -total / 2) offset += total;
      return offset;
    },
    [activeIndex, total]
  );

  // Pure Semi-Circle Arch Geometry: Peak at center, fanning gracefully down the sides
  const getArcCardStyle = (offset) => {
    if (Math.abs(offset) > 2) {
      const sign = Math.sign(offset) || 1;
      return {
        transform: `translate(-50%, -50%) translate(${sign * 420}px, 120px) rotate(${sign * 32}deg) scale(0.60)`,
        opacity: 0,
        zIndex: 0,
        pointerEvents: "none",
      };
    }

    // Mathematical Semi-Circle Arc:
    // Peak at offset 0 (y: -16px, 0° upright, scale 1.15)
    // Left & Right droop down (y: 26px and 80px) and fan outward (rotate: ±15° and ±30°)
    const x = offset * 215; // 0px, ±215px, ±430px
    const y = Math.abs(offset) === 2 ? 80 : Math.abs(offset) === 1 ? 26 : -16;
    const rotate = offset * 15; // -30°, -15°, 0°, +15°, +30°
    const scale = offset === 0 ? 1.15 : Math.abs(offset) === 1 ? 0.94 : 0.80;
    const opacity = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.88 : 0.65;
    const zIndex = 30 - Math.abs(offset) * 10;

    return {
      transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`,
      opacity,
      zIndex,
      pointerEvents: "auto",
    };
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0E100F] text-[#FFFCE1] py-16 sm:py-24 overflow-hidden select-none border-t border-white/10"
      id="collections"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6963F_1px,transparent_1px)] opacity-[0.03] [background-size:28px_28px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Section Eyebrow */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C6963F]/30 mb-3 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#C6963F]" />
            <span className="font-mono text-[10px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#C6963F]">
              THE ARCHIVAL SHOWCASE · SEMI-CIRCLE ARC
            </span>
          </div>
          <p className="text-white/60 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2">
            <span>Slide 0{activeIndex + 1} of 0{total}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6963F]/60" />
            <span className="text-[#C6963F]/90 font-semibold">Auto-Rotating</span>
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════
            1. THE SEMI-CIRCLE ARC (NO OUTER WHITE BOX - CLEAN LUXURY STAGE)
        ══════════════════════════════════════════════════════════ */}
        <div className="relative max-w-[1140px] mx-auto h-[400px] sm:h-[480px] md:h-[530px] flex items-center justify-center p-4 my-2">
          {/* Ambient Gold Radial Glow behind the fanned arc */}
          <div className="absolute w-[600px] sm:w-[800px] h-[320px] bg-[#C6963F]/12 rounded-full blur-[120px] pointer-events-none" />

          {/* Background Ambient Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none font-serif text-[180px] sm:text-[260px] font-bold text-white tracking-widest">
            ONZONE
          </div>

          {/* PERSISTENT FLUID CAROUSEL CARDS - TRUE SEMI-CIRCLE ARC GEOMETRY */}
          <div className="relative w-full h-[320px] sm:h-[390px] md:h-[440px] flex items-center justify-center">
            {collections.map((item, idx) => {
              const offset = getCardOffset(idx);
              const isCenter = offset === 0;
              const cardStyle = getArcCardStyle(offset);

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (!isCenter) {
                      goToIndex(idx);
                    }
                  }}
                  style={cardStyle}
                  className={`absolute top-1/2 left-1/2 w-36 sm:w-44 md:w-52 lg:w-56 h-52 sm:h-64 md:h-76 lg:h-80 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-[0_22px_50px_rgba(0,0,0,0.45)] transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform select-none ${
                    isCenter
                      ? "ring-4 ring-[#C6963F] shadow-[0_25px_60px_rgba(198,150,63,0.55)]"
                      : "hover:opacity-100"
                  }`}
                >
                  {/* Card Photography Canvas */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />

                  {/* Dark Vignette Overlay for Crisp Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider bg-[#C6963F] text-[#0E100F] px-2.5 py-0.5 rounded-full font-bold shadow">
                      {item.number}
                    </span>
                  </div>

                  {/* Bottom Card Caption */}
                  <div className="absolute bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-4 text-white z-10 pointer-events-none">
                    <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-[#C6963F] block mb-0.5">
                      {item.category}
                    </span>
                    <h4 className="font-serif-luxury text-xs sm:text-sm md:text-base font-normal leading-tight text-white drop-shadow">
                      {item.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Center Stage Indicator */}
          <div className="absolute bottom-2 inset-x-0 flex items-center justify-center gap-1.5 pointer-events-none">
            {collections.map((_, i) => (
              <span
                key={i}
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-[#C6963F]" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            2. SYNCHRONIZED HEADLINE & SUBTITLE
        ══════════════════════════════════════════════════════════ */}
        <div className="max-w-[1080px] mx-auto mt-6 sm:mt-10 text-center relative z-20">
          <h2
            ref={titleRef}
            className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-wide leading-tight uppercase"
          >
            {activeCollection.title}
          </h2>

          <div className="mt-3">
            <Link
              ref={subtitleRef}
              to={activeCollection.href}
              className="inline-flex items-center gap-2 font-mono text-sm sm:text-base text-white/80 hover:text-[#C6963F] transition-colors tracking-widest group"
            >
              <span>{activeCollection.subtitle}</span>
              <ArrowUpRight className="w-4 h-4 text-[#C6963F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <p className="font-mono text-xs text-white/50 uppercase tracking-widest mt-2">
            {activeCollection.tagline}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Collections;
