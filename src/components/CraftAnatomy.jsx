import React, { useState } from "react";
import { Sparkles, Shield, Compass, CheckCircle2, ChevronRight, Layers } from "lucide-react";

const hotspots = [
  {
    id: "collar",
    title: "German-Fused Collar",
    tag: "STRUCTURAL RIGIDITY",
    subtitle: "Engineered 75° Roll That Never Wilts",
    desc: "Fused with premium German interlining to retain an impeccable roll through 14-hour days, boardrooms, and long flights — without the uncomfortable stiffness of cheap synthetic backings.",
    specs: ["100% German Interlining", "Non-curl Collar Tips", "Removable Stays Ready"],
    pinPos: { top: "34%", left: "48%" },
  },
  {
    id: "buttons",
    title: "Mother-of-Pearl Buttons",
    tag: "NATURAL LUXURY",
    subtitle: "Heat-Welded Lock Stitch",
    desc: "Cut from genuine natural iridescent trocas shells with polished bevelled edges. Each button is anchored with heat-sealed cross-locking thread so it never falls off or chips during dry cleans.",
    specs: ["Natural Trocas Shell", "Cross-Stitched & Heat-Welded", "Laser-Etched Onzone Edge"],
    pinPos: { top: "50%", left: "50%" },
  },
  {
    id: "fabric",
    title: "100% Egyptian Giza Cotton",
    tag: "MATERIAL PROVENANCE",
    subtitle: "Extra-Long Staple Liquid Ammonia Finish",
    desc: "Sourced from premier mills, spun with extra-long staple Egyptian Giza fibers and 20 SPI single-needle craft for a buttery silk-like sheen, thermo-regulating breathability, and rich drape.",
    specs: ["Extra-Long Staple (ELS)", "20 SPI Single-Needle Precision", "Natural Non-Iron Drape"],
    pinPos: { top: "64%", left: "62%" },
  },
];

const CraftAnatomy = () => {
  const [activeId, setActiveId] = useState("collar");
  const activeSpot = hotspots.find((h) => h.id === activeId) || hotspots[0];

  return (
    <section className="py-20 md:py-28 bg-[#FDFAF5] text-[#0E1A30] relative overflow-hidden border-t border-[#0E1A30]/10" id="craft-anatomy">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0E1A30_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
        {/* Section Header with English / Savile Row Crest Style */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1A30]/5 border border-[#C6963F]/40 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C6963F]" />
            <span className="font-mono text-[11px] font-bold tracking-[0.22em] uppercase text-[#C6963F]">
              The Andamen & Savile Row Benchmark
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-[#0E1A30] mb-4">
            The Anatomy of an <span className="text-[#C6963F] italic">Onzone Garment</span>
          </h2>
          <p className="text-[#0E1A30]/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            True luxury is never accidental. Every millimeter is engineered for poise, permanence, and comfort across 25 years of master craftsmanship.
          </p>
        </div>

        {/* Main Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Interactive Hotspot Garment Canvas (7 Columns) */}
          <div
            className="lg:col-span-7 bg-[#F4EFE6] rounded-3xl p-6 sm:p-10 border border-[#0E1A30]/10 shadow-[0_20px_50px_rgba(14,26,48,0.06)] relative flex items-center justify-center min-h-[500px] sm:min-h-[580px]"
            data-aos="fade-right"
          >
            {/* Corner Badge */}
            <div className="absolute top-4 left-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase text-[#0E1A30]/50">
              <span className="w-2 h-2 rounded-full bg-[#C6963F]" />
              <span>Interactive Inspection Point</span>
            </div>

            {/* Central Garment Display */}
            <div className="relative w-full max-w-[400px] h-[460px] sm:h-[520px] flex items-center justify-center">
              <img
                src="/assets/formal.png"
                alt="Onzone Tailored Garment Anatomy"
                className="max-h-full max-w-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />

              {/* Glowing Pulsing Hotspot Pins */}
              {hotspots.map((spot) => {
                const isActive = spot.id === activeId;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveId(spot.id)}
                    style={{ top: spot.pinPos.top, left: spot.pinPos.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20 cursor-pointer"
                    aria-label={spot.title}
                  >
                    {/* Pulsing halo */}
                    <span
                      className={`absolute -inset-2.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#C6963F]/35 scale-125 animate-ping"
                          : "bg-[#0E1A30]/15 group-hover:bg-[#C6963F]/30"
                      }`}
                    />
                    {/* Center Core Button */}
                    <span
                      className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-all duration-300 font-mono text-xs font-bold shadow-lg ${
                        isActive
                          ? "bg-[#C6963F] text-[#0E1A30] border-white scale-110"
                          : "bg-[#0E1A30] text-[#FDFAF5] border-[#C6963F]/60 group-hover:scale-105"
                      }`}
                    >
                      +
                    </span>

                    {/* Mini Floating Tooltip Label */}
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 -bottom-7 whitespace-nowrap text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded shadow transition-all duration-200 pointer-events-none ${
                        isActive
                          ? "bg-[#0E1A30] text-[#C6963F] opacity-100 translate-y-0"
                          : "bg-[#0E1A30]/80 text-white opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
                      }`}
                    >
                      {spot.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Detailed Specification & Narrative Card (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6" data-aos="fade-left">
            {/* Quick Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {hotspots.map((h) => {
                const isSelected = h.id === activeId;
                return (
                  <button
                    key={h.id}
                    onClick={() => setActiveId(h.id)}
                    className={`text-xs font-mono tracking-wider uppercase px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer border ${
                      isSelected
                        ? "bg-[#0E1A30] text-[#FDFAF5] border-[#0E1A30] shadow-sm font-bold"
                        : "bg-white/80 text-[#0E1A30]/70 border-[#0E1A30]/15 hover:border-[#C6963F] hover:text-[#0E1A30]"
                    }`}
                  >
                    {h.title}
                  </button>
                );
              })}
            </div>

            {/* Active Detail Showcase Box */}
            <div className="bg-[#0E1A30] text-[#FDFAF5] rounded-3xl p-7 sm:p-9 shadow-xl border border-[#C6963F]/25 relative overflow-hidden transition-all duration-300">
              {/* Subtle Gold Watermark Crest */}
              <div className="absolute top-4 right-5 opacity-10">
                <Compass className="w-24 h-24 text-[#C6963F]" />
              </div>

              {/* Tag / Category */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C6963F]" />
                <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-[#C6963F]">
                  {activeSpot.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-white mb-2 leading-snug">
                {activeSpot.title}
              </h3>
              <p className="font-mono text-xs sm:text-[13px] text-[#C6963F] tracking-wide mb-4">
                {activeSpot.subtitle}
              </p>

              {/* Description */}
              <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {activeSpot.desc}
              </p>

              {/* Technical Specifications checklist */}
              <div className="border-t border-white/10 pt-5 space-y-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 block mb-2">
                  Artisanal Standard Verified:
                </span>
                {activeSpot.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#C6963F] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Trust Note */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#EFE8DD] rounded-xl border border-[#C6963F]/20 text-xs text-[#0E1A30]/80">
              <Shield className="w-5 h-5 text-[#C6963F] shrink-0" />
              <span>
                Engineered for repeat washing without loss of structure. <strong>25 years of Indian body-geometry fitting.</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftAnatomy;
