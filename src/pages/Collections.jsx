import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Eye,
  X,
  SlidersHorizontal,
  LayoutGrid,
  Disc3
} from "lucide-react";
import { img } from "../lib/utils.js";
import MacroMagnifierImage from "../components/MacroMagnifierImage";

gsap.registerPlugin(ScrollTrigger);

// 12 Curated Luxury Garments Portfolio
const luxuryProducts = [
  {
    id: "F101",
    name: "Royal Oxford Crisp White",
    category: "Formal",
    tagline: "German-Fused Collar · 20 SPI Single-Needle",
    fabric: "100% Giza 87 Egyptian Cotton",
    weave: "Royal Basket Weave",
    badge: "BOARDROOM ESSENTIAL",
    img: img("img_6.jpeg"),
    hoverImg: "/assets/formal.png",
    color: "#FFFFFF",
    colorName: "Optic White",
    fit: "Tailored Savile Cut",
  },
  {
    id: "F102",
    name: "Fine Italian Twill Sky Blue",
    category: "Formal",
    tagline: "Natural Wrinkle Recovery",
    fabric: "100s Two-Ply Compact Yarn",
    weave: "Diagonal Luster Twill",
    badge: "BESTSELLER",
    img: img("img_1.jpeg"),
    hoverImg: img("img_6.jpeg"),
    color: "#D0E2EC",
    colorName: "Azure Blue",
    fit: "Modern Slim Fit",
  },
  {
    id: "C201",
    name: "Air-Washed Normandy Linen",
    category: "Casual",
    tagline: "Thermo-Regulating Comfort",
    fabric: "60 Lea French Flax",
    weave: "Organic Slub",
    badge: "SUMMER RESORT",
    img: img("img_7.jpeg"),
    hoverImg: "/assets/white-printed.png",
    color: "#E2DCD3",
    colorName: "Warm Sand",
    fit: "Relaxed Classic",
  },
  {
    id: "F103",
    name: "Heritage Micro-Check Executive",
    category: "Formal",
    tagline: "Liquid Ammonia Silky Finish",
    fabric: "80s Two-Ply Mercerized",
    weave: "Micro-Check Twill",
    badge: "POWER STATEMENT",
    img: img("img_2.jpeg"),
    hoverImg: img("img_1.jpeg"),
    color: "#DDE4EB",
    colorName: "Steel Blue",
    fit: "Tailored Savile Cut",
  },
  {
    id: "B301",
    name: "Four-Way Stretch Wool Trousers",
    category: "Bottoms",
    tagline: "Ergonomic Waistband Grip",
    fabric: "Australian Merino Blend",
    weave: "Micro-Herringbone",
    badge: "ALL-DAY COMFORT",
    img: img("img_8.jpeg"),
    hoverImg: img("img_8.jpeg"),
    color: "#2C343E",
    colorName: "Midnight Charcoal",
    fit: "Tapered Flat Front",
  },
  {
    id: "B302",
    name: "Authentic Selvedge Denim",
    category: "Bottoms",
    tagline: "Rope-Dyed Indigo · 13.5 Oz",
    fabric: "Pure Ring-Spun Cotton",
    weave: "Right-Hand Twill",
    badge: "INDIGO ARCHIVE",
    img: "/assets/denims_bookshelf.webp",
    hoverImg: img("img_9.jpeg"),
    color: "#1F2D44",
    colorName: "Deep Indigo",
    fit: "Clean Straight Slim",
  },
  {
    id: "C202",
    name: "Artisanal Floral Silk-Cotton",
    category: "Casual",
    tagline: "Hand-Drawn Botanical Motif",
    fabric: "Giza Cotton with Silk Touch",
    weave: "Featherlight Sateen",
    badge: "LIMITED EDITION",
    img: "/assets/red-printed.png",
    hoverImg: "/assets/red_yellow_shirt_1784885132692.jpg",
    color: "#8B263E",
    colorName: "Burgundy Crimson",
    fit: "Smart Casual Slim",
  },
  {
    id: "C203",
    name: "Engineered Utility Cargos",
    category: "Bottoms",
    tagline: "Articulated Knee Pleats",
    fabric: "Heavyweight Cotton Twill",
    weave: "Ripstop Reinforced",
    badge: "MODERN UTILITY",
    img: img("img_10.jpeg"),
    hoverImg: img("img_10.jpeg"),
    color: "#5B5E4E",
    colorName: "Olive Drab",
    fit: "Tapered Utility",
  },
  {
    id: "P401",
    name: "Midnight Royal Velvet Blazer",
    category: "Premium",
    tagline: "Silk Satin Shawl Lapel",
    fabric: "Pure Cotton Velvet",
    weave: "High-Pile Plush Velvet",
    badge: "BLACK-TIE GALA",
    img: img("img_12.jpeg"),
    hoverImg: img("img_12.jpeg"),
    color: "#0E1A30",
    colorName: "Midnight Navy",
    fit: "Sculpted Evening Fit",
  },
  {
    id: "P402",
    name: "Micro-Dobby Jacquard Party Shirt",
    category: "Premium",
    tagline: "Iridescent Trocas Shell Buttons",
    fabric: "Egyptian Long-Staple Cotton",
    weave: "Geometric Dobby Jacquard",
    badge: "AFTER-HOURS",
    img: img("img_11.jpeg"),
    hoverImg: img("img_11.jpeg"),
    color: "#18202F",
    colorName: "Onyx Black",
    fit: "Razor Slim Cut",
  },
  {
    id: "F104",
    name: "Executive Stripe Cutaway Shirt",
    category: "Formal",
    tagline: "Wide Windsor Spread Collar",
    fabric: "100s Two-Ply Giza Cotton",
    weave: "Bengal Stripe Twill",
    badge: "SAVILE ROW CUT",
    img: img("img_4.jpeg"),
    hoverImg: img("img_4.jpeg"),
    color: "#2C4A6F",
    colorName: "French Blue",
    fit: "Contoured Tailored",
  },
  {
    id: "C204",
    name: "Weekend Country House Pyjama Set",
    category: "Casual",
    tagline: "Featherlight Breathable Drape",
    fabric: "Extra-Fine Combed Cotton",
    weave: "Brushed Poplin",
    badge: "EASY LIVING",
    img: img("img_13.jpeg"),
    hoverImg: img("img_13.jpeg"),
    color: "#3F4F63",
    colorName: "Slate Grey",
    fit: "Comfort Relaxed",
  },
];

const categories = ["All", "Formal", "Casual", "Bottoms", "Premium"];

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [viewMode, setViewMode] = useState("arc"); // 'arc' | 'grid'
  const [arcActiveIdx, setArcActiveIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);
  const arcTitleRef = useRef(null);
  const arcSubtitleRef = useRef(null);

  const filteredProducts =
    activeCategory === "All"
      ? luxuryProducts
      : luxuryProducts.filter((p) => p.category === activeCategory);

  const totalFiltered = filteredProducts.length;

  const [activeIndex, setActiveIndex] = useState(0);

  const activeProduct = filteredProducts[activeIndex] || filteredProducts[0];

  const goToIndex = useCallback(
    (targetIdx) => {
      if (totalFiltered === 0) return;
      setActiveIndex((targetIdx + totalFiltered) % totalFiltered);
    },
    [totalFiltered]
  );

  // Continuous auto-play: automatically advances every 2.5 seconds without pausing on hover
  useEffect(() => {
    if (viewMode !== "arc" || totalFiltered === 0) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalFiltered);
    }, 2500);

    return () => clearInterval(timer);
  }, [viewMode, totalFiltered]);

  // Synchronize text animation with active card change
  useEffect(() => {
    if (arcTitleRef.current && arcSubtitleRef.current) {
      gsap.fromTo(
        [arcTitleRef.current, arcSubtitleRef.current],
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  // Reset index when category changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Compute exact cyclic offset relative to activeIndex (seamless wrapping)
  const getCardOffset = useCallback(
    (itemIndex) => {
      if (totalFiltered === 0) return 0;
      let offset = itemIndex - activeIndex;
      while (offset > totalFiltered / 2) offset -= totalFiltered;
      while (offset < -totalFiltered / 2) offset += totalFiltered;
      return offset;
    },
    [activeIndex, totalFiltered]
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
    <div
      ref={containerRef}
      className="bg-[#0E1A30] text-[#FDFAF5] overflow-hidden selection:bg-[#C6963F] selection:text-white"
    >
      {/* ══════════════════════════════════════════════════════════
          1. CINEMATIC EDITORIAL HERO
      ══════════════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════════════
          1. SLEEK EDITORIAL HEADER & INTEGRATED FILTER BAR
      ══════════════════════════════════════════════════════════ */}
      <section
        className="relative pt-28 sm:pt-32 pb-4 sm:pb-6 px-4 sm:px-6 md:px-10 text-center border-b border-white/10"
        data-aos="fade-down"
      >
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C6963F]/35 mb-4 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#C6963F]" />
            <span className="font-mono text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#C6963F]">
              AUTUMN / WINTER '25 · THE LUXURY DROP
            </span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal uppercase tracking-wide leading-tight">
            Six Silhouettes. <span className="text-[#C6963F] italic font-serif">One Sovereign Wardrobe.</span>
          </h1>

          <p className="mt-2.5 text-white/70 font-sans text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Crafted from premier Egyptian Giza 87 cottons, French flax, and Italian twills.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. CLEAN SEMI-CIRCLE ARC SHOWCASE
      ══════════════════════════════════════════════════════════ */}
      {viewMode === "arc" && (
        <section
          className="py-8 sm:py-12 px-4 sm:px-6 md:px-10 max-w-[1360px] mx-auto select-none"
          data-aos="fade-up"
        >
          {/* Section Eyebrow */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C6963F]/30 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C6963F]" />
              <span className="font-mono text-[10px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#C6963F]">
                THE ARCHIVAL SHOWCASE · SEMI-CIRCLE ARC
              </span>
            </div>
            <p className="text-white/60 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2">
              <span>Garment {activeIndex + 1} of {totalFiltered}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6963F]/60" />
              <span className="text-[#C6963F]/90 font-semibold">Auto-Rotating</span>
            </p>
          </div>

          {/* Seamless Open Luxury Stage (No outer white box, open fanned arc) */}
          <div className="relative max-w-[1140px] mx-auto h-[420px] sm:h-[490px] md:h-[540px] flex items-center justify-center p-4 my-2">
            {/* Ambient Gold Radial Glow behind the fanned arc */}
            <div className="absolute w-[600px] sm:w-[800px] h-[320px] bg-[#C6963F]/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Background Ambient Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none font-serif text-[180px] sm:text-[260px] font-bold text-white tracking-widest">
              ONZONE
            </div>

            {/* PERSISTENT FLUID CAROUSEL CARDS - TRUE SEMI-CIRCLE ARC GEOMETRY */}
            <div className="relative w-full h-[340px] sm:h-[400px] md:h-[450px] flex items-center justify-center">
              {filteredProducts.map((product, idx) => {
                const offset = getCardOffset(idx);
                const isCenter = offset === 0;
                const cardStyle = getArcCardStyle(offset);

                return (
                  <div
                    key={product.id}
                    onClick={() => {
                      if (isCenter) {
                        setSelectedProduct(product);
                      } else {
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
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    />

                    {/* Dark gradient for crisp text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                    {/* Top Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider bg-[#C6963F] text-[#0E100F] px-2.5 py-0.5 rounded-full font-bold shadow">
                        {product.id}
                      </span>
                    </div>

                    {/* Bottom Card Title */}
                    <div className="absolute bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-4 text-white z-10 pointer-events-none">
                      <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-[#C6963F] block mb-0.5">
                        {product.category}
                      </span>
                      <h4 className="font-serif-luxury text-xs sm:text-sm md:text-base font-normal leading-tight text-white drop-shadow">
                        {product.name}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Indicator Dots */}
            <div className="absolute bottom-2 inset-x-0 flex items-center justify-center gap-1.5 pointer-events-none">
              {filteredProducts.map((_, i) => (
                <span
                  key={i}
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "w-6 bg-[#C6963F]" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Synchronized Headline & Subtitle below the Arc Stage */}
          {activeProduct && (
            <div className="max-w-[1040px] mx-auto mt-8 sm:mt-12 text-center relative z-20">
              <h2
                ref={arcTitleRef}
                className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-wide leading-tight uppercase"
              >
                {activeProduct.name}
              </h2>

              <div className="mt-3">
                <button
                  ref={arcSubtitleRef}
                  onClick={() => setSelectedProduct(activeProduct)}
                  className="inline-flex items-center gap-2 font-mono text-sm sm:text-base text-white/80 hover:text-[#C6963F] transition-colors tracking-widest group cursor-pointer"
                >
                  <span>&#123; Inspect {activeProduct.name} Details &#125;</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C6963F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              <p className="font-mono text-xs text-white/60 uppercase tracking-widest mt-2">
                {activeProduct.tagline} · {activeProduct.fabric}
              </p>
            </div>
          )}

        </section>
      )}

      {/* ══════════════════════════════════════════════════════════
          4. ALTERNATE GRID VIEW (WHEN USER CLICKS GRID VIEW)
      ══════════════════════════════════════════════════════════ */}
      {viewMode === "grid" && (
        <section className="py-16 md:py-24 px-6 md:px-10 max-w-[1360px] mx-auto animate-fadeIn">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="group relative bg-white/[0.04] backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-xl transition-all duration-500 hover:border-[#C6963F]/60 hover:shadow-[0_20px_50px_rgba(198,150,63,0.15)] flex flex-col justify-between"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0A1324] cursor-pointer">
                  <img
                    src={prod.img}
                    alt={prod.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-108 will-change-transform"
                  />
                  <img
                    src={prod.hoverImg}
                    alt={prod.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A30] via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] bg-[#C6963F] text-[#0E1A30] px-3 py-1 rounded-full font-bold shadow-md">
                      {prod.badge}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(prod)}
                    className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#0E1A30]/80 backdrop-blur-md text-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#C6963F] hover:text-[#0E1A30] shadow-lg cursor-pointer"
                    title="Quick View"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#C6963F] block mb-0.5">
                      {prod.fabric}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-white/70 block">
                      {prod.fit}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                        {prod.category} · {prod.id}
                      </span>
                      <span
                        className="w-3 h-3 rounded-full border border-white/30 shrink-0"
                        style={{ backgroundColor: prod.color }}
                        title={prod.colorName}
                      />
                    </div>
                    <h3 className="font-serif-luxury text-lg sm:text-xl font-normal text-white group-hover:text-[#C6963F] transition-colors leading-snug mb-2">
                      {prod.name}
                    </h3>
                    <p className="font-mono text-xs text-white/70 mb-4 line-clamp-1">
                      {prod.tagline}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/60">
                      {prod.weave}
                    </span>
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-[#C6963F] hover:text-white transition-colors font-bold cursor-pointer"
                    >
                      <span>Inspect</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════
          5. RETAIL PARTNER CATALOGUE CTA
      ══════════════════════════════════════════════════════════ */}
      <section
        className="py-20 md:py-28 bg-[#091222] text-center border-t border-white/10 relative"
        data-aos="fade-up"
      >
        <div className="max-w-xl mx-auto px-6">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C6963F] font-bold block mb-3">
            B2B Trade & Multi-Brand Stores
          </span>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal leading-tight text-white mb-6">
            Ready to stock <em className="text-[#C6963F] italic">Onzone?</em>
          </h2>

          <p className="text-white/70 text-base leading-relaxed mb-8">
            Request our full Autumn/Winter 2025 Lookbook or discuss territory
            allotment with our Bangalore trade office.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C6963F] text-[#0E1A30] font-mono text-xs uppercase tracking-widest font-bold hover:bg-white transition-all shadow-xl"
          >
            <span>Request Wholesale Lookbook</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. MODAL: DETAILED GARMENT INSPECTION
      ══════════════════════════════════════════════════════════ */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-[#0E1A30] text-[#FDFAF5] max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl border border-white/15 p-6 sm:p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
              <MacroMagnifierImage
                src={selectedProduct.img}
                alt={selectedProduct.name}
                lensSize={180}
                badgeText="1.5X LENS"
                className="aspect-[3/4] rounded-2xl border border-white/15 shadow-2xl bg-[#091222]"
                imgClassName="object-top"
              >
                <div className="absolute top-4 left-4 pointer-events-none z-10">
                  <span className="font-mono text-[9px] uppercase tracking-wider bg-[#C6963F] text-[#0E1A30] px-3 py-1 rounded-full font-bold">
                    {selectedProduct.badge}
                  </span>
                </div>
              </MacroMagnifierImage>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#C6963F]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C6963F] font-bold">
                      {selectedProduct.category} · Ref: {selectedProduct.id}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-white leading-snug">
                    {selectedProduct.name}
                  </h3>

                  <p className="text-white/70 font-mono text-xs mt-1">
                    Color: {selectedProduct.colorName} · Cut: {selectedProduct.fit}
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white/50">Textile Provenance:</span>
                    <span className="text-white font-bold">{selectedProduct.fabric}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white/50">Weave Geometry:</span>
                    <span className="text-white font-bold">{selectedProduct.weave}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white/50">Stitch Standard:</span>
                    <span className="text-[#C6963F] font-bold">20 SPI Single-Needle</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50">Interlining:</span>
                    <span className="text-white font-bold">Fused German Microfiber</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to="/contact"
                    className="flex-1 py-3.5 rounded-full bg-[#C6963F] text-[#0E1A30] font-mono text-xs uppercase tracking-widest font-bold hover:bg-white transition-all text-center shadow-lg"
                  >
                    Trade Enquiry for {selectedProduct.id}
                  </Link>

                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-6 py-3.5 rounded-full border border-white/20 font-mono text-xs uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collections;
