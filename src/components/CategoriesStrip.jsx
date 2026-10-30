import React from "react";
import { Link } from "react-router-dom";
import { Award, Sparkles, ShieldCheck } from "lucide-react";

const CategoriesStrip = () => {
  const tickerItems = [
    { type: "badge", label: "THE WARDROBE EDIT", isGoldBadge: true },
    { type: "category", label: "Crisp Formals", href: "/collections/formal" },
    { type: "highlight", label: "EST. 1999 • House of Fine Tailoring" },
    { type: "category", label: "Smart Casuals", href: "/collections/casual" },
    { type: "spec", icon: ShieldCheck, label: "100% Giza & Supima Grade" },
    { type: "category", label: "Tailored Trousers", href: "/collections/bottoms" },
    { type: "spec", icon: Sparkles, label: "20 SPI Single-Needle Craft" },
    { type: "category", label: "Selvedge Denims", href: "/collections/bottoms" },
    { type: "highlight", label: "Savile Row Inspiration" },
    { type: "category", label: "Utility Cargos", href: "/collections/casual" },
    { type: "spec", icon: Award, label: "2,500+ Partner Stores" },
    { type: "category", label: "Linen & Club Wear", href: "/collections" },
    { type: "highlight", label: "Architectural Power Fit" },
  ];

  // Duplicate for seamless 0% -> -50% infinite loop
  const displayItems = [...tickerItems, ...tickerItems];

  return (
    <aside
      aria-label="Brand Highlights and Collections"
      className="relative w-full bg-[#0E1A30] border-y border-[#C6963F]/30 text-[#FDFAF5] overflow-hidden select-none py-3 sm:py-3.5"
    >
      {/* Edge gradient fades for luxury seamless marquee blending */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#0E1A30] to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#0E1A30] to-transparent z-10"
        aria-hidden="true"
      />

      {/* Auto-moving continuous marquee ticker with hover pause */}
      <div
        className="animate-marquee flex items-center gap-6 sm:gap-9 whitespace-nowrap will-change-transform"
        style={{ animationDuration: "38s" }}
      >
        {displayItems.map((item, idx) => {
          const Icon = item.icon;

          return (
            <React.Fragment key={`${item.label}-${idx}`}>
              {item.type === "badge" && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C6963F]/15 border border-[#C6963F]/40 text-[#C6963F] font-mono font-bold text-[10px] sm:text-[11px] tracking-[0.2em] uppercase shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6963F] animate-pulse" />
                  {item.label}
                </span>
              )}

              {item.type === "category" && (
                <Link
                  to={item.href}
                  className="font-mono text-xs sm:text-[13px] tracking-[0.16em] uppercase text-white/85 hover:text-[#C6963F] transition-colors py-0.5 flex items-center gap-1 shrink-0 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    {item.label}
                  </span>
                </Link>
              )}

              {item.type === "highlight" && (
                <span className="font-mono font-bold text-[10px] sm:text-xs tracking-[0.18em] uppercase text-[#C6963F] shrink-0">
                  {item.label}
                </span>
              )}

              {item.type === "spec" && (
                <span className="font-mono text-[10px] sm:text-xs tracking-[0.14em] uppercase text-white/65 flex items-center gap-1.5 shrink-0">
                  {Icon && <Icon className="w-3.5 h-3.5 text-[#C6963F]" />}
                  {item.label}
                </span>
              )}

              {/* Diamond separator */}
              <span
                className="text-[#C6963F]/40 text-[9px] sm:text-[10px] select-none shrink-0"
                aria-hidden="true"
              >
                ◆
              </span>
            </React.Fragment>
          );
        })}
      </div>
    </aside>
  );
};

export default CategoriesStrip;
