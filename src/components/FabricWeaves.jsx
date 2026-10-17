import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Wind, ShieldCheck, Sun, ArrowRight, Check } from "lucide-react";

const fabrics = [
  {
    id: "oxford",
    name: "Royal Oxford",
    type: "Basket Weave",
    yarn: "80s Two-Ply Compact",
    origin: "Egyptian Giza Cotton",
    breathability: 95,
    wrinkleResistance: 88,
    drape: 90,
    season: "All-Season Executive",
    tagline: "The Quintessential British Boardroom Weave",
    desc: "Woven with distinctive basket-weave geometry that creates tactile depth and exceptional breathability. Softens with every wear while maintaining a crisp, assertive collar line.",
    accentColor: "#2F5C8F",
    patternStyle: "radial-gradient(#2F5C8F 1.5px, transparent 1.5px)",
    patternSize: "8px 8px",
    sampleColor: "#D6E3F2",
    bestFor: "Monday to Thursday Boardrooms, Executive Travel",
  },
  {
    id: "twill",
    name: "Fine Italian Twill",
    type: "Diagonal Weave",
    yarn: "100s Two-Ply High Count",
    origin: "Extra-Long Staple Cotton",
    breathability: 85,
    wrinkleResistance: 96,
    drape: 98,
    season: "Evening & Formal Seasons",
    tagline: "Silken Luster with High Natural Wrinkle Resistance",
    desc: "Features microscopic diagonal ridges that catch ambient light with a liquid-like sheen. Its heavy thread count allows it to drape cleanly without clinging, making it the supreme choice under tailored blazers.",
    accentColor: "#C6963F",
    patternStyle: "repeating-linear-gradient(45deg, #E6DAC4, #E6DAC4 2px, #FDFAF5 2px, #FDFAF5 6px)",
    patternSize: "10px 10px",
    sampleColor: "#F4ECE1",
    bestFor: "Black-Tie, Receptions, Corporate Galas",
  },
  {
    id: "poplin",
    name: "Pristine Poplin",
    type: "Dense Plain Weave",
    yarn: "120s Ultra-Fine Egyptian",
    origin: "Giza 87 Delta Harvest",
    breathability: 92,
    wrinkleResistance: 82,
    drape: 92,
    season: "Spring / Summer / Autumn",
    tagline: "Featherlight Smoothness with Razor-Sharp Clarity",
    desc: "A timeless tight weave utilizing twice as many warp threads as weft threads. The result is a featherlight, razor-flat fabric that feels like second skin and takes vibrant dyes with immaculate purity.",
    accentColor: "#4B6B82",
    patternStyle: "radial-gradient(#C4D6E5 1px, #FDFAF5 1px)",
    patternSize: "4px 4px",
    sampleColor: "#EDF2F7",
    bestFor: "Daytime Negotiations, Crisp Power Meetings",
  },
  {
    id: "linen",
    name: "Air-Washed Flax Linen",
    type: "Organic Slub Weave",
    yarn: "60 Lea Natural Flax",
    origin: "Normandy French Flax",
    breathability: 100,
    wrinkleResistance: 70,
    drape: 84,
    season: "Summer & Tropical Respite",
    tagline: "Unstructured Sophistication & Organic Breathability",
    desc: "Spun from natural European flax fibers and washed in artisanal tumbling baths for zero scratchiness. Naturally anti-bacterial, thermo-regulating, and celebrated for its dignified, gentlemanly rumple.",
    accentColor: "#9C7A4A",
    patternStyle: "repeating-linear-gradient(90deg, #E3D7C5 0px, #FDFAF5 3px, #E3D7C5 5px)",
    patternSize: "12px 12px",
    sampleColor: "#EAE0CF",
    bestFor: "Weekend Retreats, Destination Weddings, Warm Climates",
  },
  {
    id: "dobby",
    name: "Micro-Dobby & Jacquard",
    type: "Textured Micro-Geometric",
    yarn: "70s Two-Ply Mercerized",
    origin: "Giza Cotton with Silk Touch",
    breathability: 88,
    wrinkleResistance: 92,
    drape: 94,
    season: "Evening & Statement Wear",
    tagline: "Understated Tactile Luxury for the Connoisseur",
    desc: "Engineered on specialized geometric looms to produce microscopic raised diamond patterns. Invisible from ten feet away, but strikingly luxurious upon close contact.",
    accentColor: "#7B5267",
    patternStyle: "radial-gradient(#936980 1.5px, transparent 1.5px), radial-gradient(#936980 1.5px, #FDFAF5 1.5px)",
    patternSize: "12px 12px",
    sampleColor: "#EDE4E9",
    bestFor: "Cocktail Hours, Club Dinners, Modern Festivities",
  },
];

const FabricWeaves = () => {
  const [selectedId, setSelectedId] = useState("oxford");
  const activeFabric = fabrics.find((f) => f.id === selectedId) || fabrics[0];

  return (
    <section className="py-20 md:py-28 bg-[#0E1A30] text-[#FDFAF5] relative overflow-hidden" id="fabric-library">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C6963F]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2B4B75]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16 border-b border-white/10 pb-8"
          data-aos="fade-up"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#C6963F]" />
              <span className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase text-[#C6963F]">
                The Connoisseur’s Textile Archive
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-white">
              Fine Weaves. <span className="text-[#C6963F] italic">Uncompromised Touch.</span>
            </h2>
          </div>

          <p className="text-white/60 max-w-md text-sm sm:text-[15px] leading-relaxed font-sans">
            A shirt is only as distinguished as the thread that gave it life. Explore our curated library of master mill textiles.
          </p>
        </div>

        {/* Horizontal Swatch Selector Tabs */}
        <div
          className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 scrollbar-none"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {fabrics.map((f) => {
            const isCurrent = f.id === selectedId;
            return (
              <button
                key={f.id}
                onClick={() => setSelectedId(f.id)}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 cursor-pointer shrink-0 border ${
                  isCurrent
                    ? "bg-white/15 border-[#C6963F] text-white shadow-[0_8px_25px_rgba(198,150,63,0.2)]"
                    : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {/* Micro Swatch Preview Circle */}
                <span
                  className="w-5 h-5 rounded-full border border-white/40 shrink-0 shadow-inner"
                  style={{
                    backgroundColor: f.sampleColor,
                    backgroundImage: f.patternStyle,
                    backgroundSize: f.patternSize,
                  }}
                />
                <div className="text-left">
                  <span className="block font-serif-luxury text-sm font-medium leading-none">
                    {f.name}
                  </span>
                  <span className="block font-mono text-[10px] tracking-wider uppercase text-white/50 mt-1">
                    {f.type}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Swatch Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.04] backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          {/* Left: Tactile Weave Macro Lens (5 cols) */}
          <div className="lg:col-span-5 relative" data-aos="fade-right">
            <div
              className="w-full h-80 sm:h-96 rounded-2xl relative overflow-hidden border border-white/20 shadow-2xl flex flex-col justify-between p-6 transition-all duration-500"
              style={{
                backgroundColor: activeFabric.sampleColor,
                backgroundImage: activeFabric.patternStyle,
                backgroundSize: activeFabric.patternSize,
              }}
            >
              {/* Overlay Glass Badge */}
              <div className="backdrop-blur-md bg-[#0E1A30]/80 border border-white/20 rounded-xl p-3.5 max-w-[240px] text-left">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#C6963F] block">
                  Macro Weave Inspection
                </span>
                <span className="font-serif-luxury text-lg text-white font-medium block">
                  {activeFabric.yarn}
                </span>
                <span className="font-mono text-[10px] text-white/70 block mt-0.5">
                  Origin: {activeFabric.origin}
                </span>
              </div>

              {/* Bottom Stamp */}
              <div className="backdrop-blur-md bg-[#0E1A30]/80 border border-white/20 rounded-xl px-4 py-2 self-end text-right">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#C6963F] font-bold block">
                  {activeFabric.season}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Technical Provenance Specs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6" data-aos="fade-left">
            <div>
              <span className="font-mono text-[11px] font-bold tracking-[0.22em] uppercase text-[#C6963F] block mb-2">
                {activeFabric.type} · {activeFabric.yarn}
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-normal mb-3">
                {activeFabric.name}
              </h3>
              <p className="text-[#C6963F] font-mono text-sm tracking-wide mb-4">
                "{activeFabric.tagline}"
              </p>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed font-sans">
                {activeFabric.desc}
              </p>
            </div>

            {/* Performance Indicators (Blackberrys / Andamen metrics) */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-white/60 mb-1.5">
                  <span className="flex items-center gap-1">
                    <Wind className="w-3.5 h-3.5 text-[#C6963F]" /> Breathability
                  </span>
                  <span className="text-[#C6963F] font-bold">{activeFabric.breathability}%</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#C6963F] h-full rounded-full transition-all duration-700"
                    style={{ width: `${activeFabric.breathability}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-mono text-white/60 mb-1.5">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C6963F]" /> Wrinkle Recovery
                  </span>
                  <span className="text-[#C6963F] font-bold">{activeFabric.wrinkleResistance}%</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#C6963F] h-full rounded-full transition-all duration-700"
                    style={{ width: `${activeFabric.wrinkleResistance}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-mono text-white/60 mb-1.5">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#C6963F]" /> Clean Drape
                  </span>
                  <span className="text-[#C6963F] font-bold">{activeFabric.drape}%</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#C6963F] h-full rounded-full transition-all duration-700"
                    style={{ width: `${activeFabric.drape}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Best For Occasion pill + CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="text-xs text-white/70 font-mono">
                <span className="text-[#C6963F] font-bold">Recommended For: </span>
                <span>{activeFabric.bestFor}</span>
              </div>

              <Link
                to="/collections/formal"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C6963F] text-[#0E1A30] font-mono text-xs uppercase tracking-wider font-bold hover:bg-white transition-all shadow-md group shrink-0"
              >
                <span>View {activeFabric.name} Shirts</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FabricWeaves;
