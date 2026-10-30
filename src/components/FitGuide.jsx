import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Compass, CheckCircle2, ChevronRight, Sparkles, User, Ruler } from "lucide-react";

const collars = [
  {
    id: "cutaway",
    name: "Cutaway Collar",
    spread: "120° Wide Spread",
    faceMatch: "Oval & Square Faces",
    tiePairing: "Full Windsor, Half Windsor, or Open Collar",
    desc: "Sculpted with wide-angled collar leaves that point toward the shoulders rather than the chest. Commands an unmistakably sharp, modern presence in boardrooms and evening celebrations.",
    features: [
      "Extra wide spread exposes full tie knot",
      "Reinforced collar points stay razor-flat",
      "The definitive Blackberrys power-dressing profile",
    ],
    svgShape: (
      <svg viewBox="0 0 100 60" className="w-24 h-14 stroke-current fill-none stroke-[2.5]">
        <path d="M 20 15 L 42 45 L 50 25 L 58 45 L 80 15" />
        <path d="M 42 45 L 50 55 L 58 45" />
      </svg>
    ),
  },
  {
    id: "semi-spread",
    name: "Savile Semi-Spread",
    spread: "85° Classic Proportion",
    faceMatch: "All Facial Geometries",
    tiePairing: "Four-in-Hand, Half Windsor, or Tie-Free",
    desc: "The quintessential British Savile Row proportion. Neither too conservative nor excessively modern. It balances boardroom gravity with effortless transitions to after-hours cocktails.",
    features: [
      "Universal versatility for any tie knot",
      "Stands proud with or without a blazer",
      "German interlining ensures zero collar slump",
    ],
    svgShape: (
      <svg viewBox="0 0 100 60" className="w-24 h-14 stroke-current fill-none stroke-[2.5]">
        <path d="M 25 15 L 44 48 L 50 25 L 56 48 L 75 15" />
        <path d="M 44 48 L 50 54 L 56 48" />
      </svg>
    ),
  },
  {
    id: "mandarin",
    name: "Mandarin / Band Collar",
    spread: "Contemporary Stand-Up",
    faceMatch: "Lean & Athletic Necks",
    tiePairing: "Strictly Tie-Free",
    desc: "A clean architectural band that hugs the neckline with regal composure. Perfect for tropical climates, destination events, or when you wish to stand apart without rigid ties.",
    features: [
      "Zero-tie contemporary minimalism",
      "Triple-fused stand remains vertical without choking",
      "Effortless under linen blazers or solo",
    ],
    svgShape: (
      <svg viewBox="0 0 100 60" className="w-24 h-14 stroke-current fill-none stroke-[2.5]">
        <path d="M 30 35 C 30 25, 70 25, 70 35 L 70 42 C 70 35, 30 35, 30 42 Z" />
      </svg>
    ),
  },
  {
    id: "button-down",
    name: "Classic Button-Down",
    spread: "70° Heritage Roll",
    faceMatch: "All Face Types",
    tiePairing: "Knit Ties or Open Neck",
    desc: "Born on English polo fields, refined for smart casual authority. Discreet buttons secure the points to the chest, producing a soft, beautiful roll that stays neat even under sweater vests.",
    features: [
      "Soft, organic S-curve collar roll",
      "Mother-of-pearl point anchoring buttons",
      "The definitive smart-casual & Friday choice",
    ],
    svgShape: (
      <svg viewBox="0 0 100 60" className="w-24 h-14 stroke-current fill-none stroke-[2.5]">
        <path d="M 32 15 L 45 46 L 50 25 L 55 46 L 68 15" />
        <circle cx="45" cy="50" r="1.5" className="fill-current" />
        <circle cx="55" cy="50" r="1.5" className="fill-current" />
      </svg>
    ),
  },
];

const fits = [
  {
    id: "slim",
    name: "Slim Fit",
    subtitle: "The Tapered Silhouette",
    desc: "Tailored with twin back darts, higher armholes, and a subtle taper through the chest and waist. Accentuates masculine shoulders while eliminating billowing at the beltline.",
    chestAllowance: "+3.5 to 4 inches ease",
    waistTaper: "-2.5 inches from chest",
    idealFor: "Athletic to lean physiques seeking a sharp, contoured profile.",
  },
  {
    id: "tailored",
    name: "Tailored Fit",
    subtitle: "The Savile Row Balance",
    desc: "Our most coveted silhouette. Contoured across the upper chest and shoulders, with comfortable ease through the midsection. Sits cleanly without pulling or clinging.",
    chestAllowance: "+4.5 to 5 inches ease",
    waistTaper: "-1.5 inches from chest",
    idealFor: "Modern professionals requiring day-long freedom and boardroom poise.",
  },
  {
    id: "classic",
    name: "Classic Comfort",
    subtitle: "The Heritage Ease",
    desc: "A relaxed cut with traditional box-pleated back yoke. Offers absolute freedom of movement for men who prefer traditional breathing room and generous draping.",
    chestAllowance: "+6 to 7 inches ease",
    waistTaper: "Straight drop from chest",
    idealFor: "Men prioritizing generous ease, warm climates, or layering.",
  },
];

const FitGuide = () => {
  const [activeTab, setActiveTab] = useState("collar"); // 'collar' | 'fit'
  const [selectedCollar, setSelectedCollar] = useState(collars[0]);
  const [selectedFit, setSelectedFit] = useState(fits[0]);

  return (
    <section className="py-20 md:py-28 bg-[#FDFAF5] text-[#0E1A30] relative overflow-hidden border-t border-[#0E1A30]/10" id="fit-architecture">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1A30]/5 border border-[#C6963F]/40 mb-4">
            <Ruler className="w-3.5 h-3.5 text-[#C6963F]" />
            <span className="font-mono text-[11px] font-bold tracking-[0.22em] uppercase text-[#C6963F]">
              The Blackberrys Fit Principle
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-[#0E1A30] mb-4">
            Architecture of <span className="text-[#C6963F] italic">Fit & Collar</span>
          </h2>
          <p className="text-[#0E1A30]/70 text-sm sm:text-base leading-relaxed">
            In fine menswear, fit is not a size — it is a geometry. Discover how our collar spreads and silhouette cuts frame your presence.
          </p>

          {/* Toggle Tab */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-[#EFE8DD] border border-[#0E1A30]/10 mt-8 shadow-inner">
            <button
              onClick={() => setActiveTab("collar")}
              className={`px-6 py-2 rounded-full text-xs font-mono tracking-wider uppercase font-bold transition-all cursor-pointer ${
                activeTab === "collar"
                  ? "bg-[#0E1A30] text-[#FDFAF5] shadow-sm"
                  : "text-[#0E1A30]/70 hover:text-[#0E1A30]"
              }`}
            >
              Collar Architecture
            </button>
            <button
              onClick={() => setActiveTab("fit")}
              className={`px-6 py-2 rounded-full text-xs font-mono tracking-wider uppercase font-bold transition-all cursor-pointer ${
                activeTab === "fit"
                  ? "bg-[#0E1A30] text-[#FDFAF5] shadow-sm"
                  : "text-[#0E1A30]/70 hover:text-[#0E1A30]"
              }`}
            >
              Body Silhouette Cuts
            </button>
          </div>
        </div>

        {/* TAB 1: Collar Architecture */}
        {activeTab === "collar" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Collar List (5 cols) */}
            <div className="lg:col-span-5 space-y-3" data-aos="fade-right">
              {collars.map((c) => {
                const isSelected = c.id === selectedCollar.id;
                return (
                  <div
                    key={c.id}
                    onClick={() => setSelectedCollar(c)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? "bg-[#0E1A30] text-[#FDFAF5] border-[#C6963F] shadow-lg translate-x-1"
                        : "bg-white text-[#0E1A30] border-[#0E1A30]/10 hover:border-[#C6963F]/50 hover:bg-[#FAF6EE]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isSelected ? "bg-[#C6963F]" : "bg-[#0E1A30]/30"
                          }`}
                        />
                        <span
                          className={`font-mono text-[10px] tracking-wider uppercase ${
                            isSelected ? "text-[#C6963F]" : "text-[#0E1A30]/60"
                          }`}
                        >
                          {c.spread}
                        </span>
                      </div>
                      <h4
                        className={`font-serif-luxury text-xl font-normal ${
                          isSelected ? "text-white" : "text-[#0E1A30]"
                        }`}
                      >
                        {c.name}
                      </h4>
                    </div>

                    <div className={isSelected ? "text-[#C6963F]" : "text-[#0E1A30]/40"}>
                      {c.svgShape}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Detailed Preview Card (7 cols) */}
            <div
              className="lg:col-span-7 bg-[#0E1A30] text-[#FDFAF5] rounded-3xl p-8 sm:p-10 border border-[#C6963F]/25 shadow-2xl relative overflow-hidden"
              data-aos="fade-left"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C6963F] block mb-1">
                    Spread Angle: {selectedCollar.spread}
                  </span>
                  <h3 className="font-serif-luxury text-3xl font-normal text-white">
                    {selectedCollar.name}
                  </h3>
                </div>
                <div className="text-[#C6963F] p-3 rounded-2xl bg-white/5 border border-white/10">
                  {selectedCollar.svgShape}
                </div>
              </div>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {selectedCollar.desc}
              </p>

              {/* Specs Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 rounded-2xl p-5 border border-white/10 mb-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#C6963F] block">
                    Best Facial Pairing:
                  </span>
                  <span className="font-serif-luxury text-sm text-white block mt-1">
                    {selectedCollar.faceMatch}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#C6963F] block">
                    Ideal Tie Pairing:
                  </span>
                  <span className="font-serif-luxury text-sm text-white block mt-1">
                    {selectedCollar.tiePairing}
                  </span>
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-2 mb-8">
                {selectedCollar.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#C6963F] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/collections/formal"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C6963F] text-[#0E1A30] font-mono text-xs uppercase tracking-wider font-bold hover:bg-white transition-all shadow-md group"
              >
                <span>Shop {selectedCollar.name} Shirts</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}

        {/* TAB 2: Fit Silhouette Cuts */}
        {activeTab === "fit" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
            {fits.map((f) => {
              const isSelected = f.id === selectedFit.id;
              return (
                <div
                  key={f.id}
                  onClick={() => setSelectedFit(f)}
                  className={`rounded-3xl p-7 transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#0E1A30] text-[#FDFAF5] border-[#C6963F] shadow-2xl scale-[1.02]"
                      : "bg-white text-[#0E1A30] border-[#0E1A30]/10 hover:border-[#C6963F]/40 shadow-sm"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`font-mono text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full ${
                          isSelected
                            ? "bg-[#C6963F] text-[#0E1A30]"
                            : "bg-[#0E1A30]/5 text-[#0E1A30]"
                        }`}
                      >
                        {f.name}
                      </span>
                      <User
                        className={`w-5 h-5 ${
                          isSelected ? "text-[#C6963F]" : "text-[#0E1A30]/40"
                        }`}
                      />
                    </div>

                    <h3
                      className={`font-serif-luxury text-2xl font-normal mb-2 ${
                        isSelected ? "text-white" : "text-[#0E1A30]"
                      }`}
                    >
                      {f.name}
                    </h3>
                    <p
                      className={`font-mono text-xs mb-4 ${
                        isSelected ? "text-[#C6963F]" : "text-[#0E1A30]/60"
                      }`}
                    >
                      {f.subtitle}
                    </p>

                    <p
                      className={`text-sm leading-relaxed mb-6 font-sans ${
                        isSelected ? "text-white/80" : "text-[#0E1A30]/70"
                      }`}
                    >
                      {f.desc}
                    </p>

                    {/* Fit Metrics Box */}
                    <div
                      className={`p-4 rounded-2xl border space-y-2 mb-6 ${
                        isSelected
                          ? "bg-white/5 border-white/10 text-white/90"
                          : "bg-[#F5F0E8] border-[#0E1A30]/5 text-[#0E1A30]"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="opacity-60">Chest Ease:</span>
                        <span className="font-bold text-[#C6963F]">{f.chestAllowance}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="opacity-60">Waist Profile:</span>
                        <span className="font-bold text-[#C6963F]">{f.waistTaper}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p
                      className={`text-xs italic font-serif mb-4 ${
                        isSelected ? "text-white/60" : "text-[#0E1A30]/60"
                      }`}
                    >
                      Best suited for: {f.idealFor}
                    </p>

                    <Link
                      to="/collections"
                      className={`w-full py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1.5 border ${
                        isSelected
                          ? "bg-[#C6963F] text-[#0E1A30] border-[#C6963F] hover:bg-white"
                          : "bg-transparent text-[#0E1A30] border-[#0E1A30]/20 hover:border-[#0E1A30]"
                      }`}
                    >
                      <span>Explore {f.name}</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default FitGuide;
