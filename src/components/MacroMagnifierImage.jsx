import React, { useState, useRef } from "react";
import { ZoomIn } from "lucide-react";

/**
 * MacroMagnifierImage
 * A luxury gold-rimmed 1.5x inspection lens that follows cursor/touch.
 */
const MacroMagnifierImage = ({
  src,
  alt = "Garment Macro Inspection",
  zoomSrc,
  className = "",
  imgClassName = "",
  zoomScale = 1.5,
  lensSize = 170,
  badgeText = "1.5X LENS",
  showHint = true,
  fallbackSrc = "/assets/formal.png",
  children,
  onClick,
}) => {
  const [lensPos, setLensPos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  const activeSrc = src || fallbackSrc;
  const activeZoomSrc = zoomSrc || activeSrc;

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setLensPos({ x, y });
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current || !e.touches || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((touch.clientY - rect.top) / rect.height) * 100));
    setLensPos({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsHovering(true)}
      onTouchEnd={() => setIsHovering(false)}
      onTouchMove={handleTouchMove}
      onClick={onClick}
      className={`relative overflow-hidden cursor-crosshair select-none group ${className}`}
    >
      {/* Base Image */}
      <img
        src={activeSrc}
        alt={alt}
        onError={(e) => {
          e.currentTarget.src = fallbackSrc;
        }}
        className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102 ${imgClassName}`}
      />

      {/* ══════════════════════════════════════════════════════════
          GOLD-RIMMED 1.5X SARTORIAL MAGNIFIER LENS
      ══════════════════════════════════════════════════════════ */}
      {isHovering && (
        <div
          style={{
            left: `${lensPos.x}%`,
            top: `${lensPos.y}%`,
            width: `${lensSize}px`,
            height: `${lensSize}px`,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#C6963F] shadow-[0_0_35px_rgba(198,150,63,0.65)] overflow-hidden pointer-events-none z-30 ring-4 ring-black/40 animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Zoomed Background View */}
          <div
            style={{
              backgroundImage: `url(${activeZoomSrc})`,
              backgroundPosition: `${lensPos.x}% ${lensPos.y}%`,
              backgroundSize: `${zoomScale * 100}%`,
            }}
            className="w-full h-full bg-no-repeat"
          />

          {/* Center Precision Crosshair Reticle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-2.5 h-2.5 rounded-full border border-[#C6963F] bg-white/20 shadow" />
          </div>

          {/* Lens Gold Tag */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/85 border border-[#C6963F]/60 text-[9px] font-mono text-[#C6963F] tracking-widest font-bold whitespace-nowrap shadow-md">
            {badgeText}
          </div>
        </div>
      )}

      {/* Optional Subtle Lens Hint Pill */}
      {showHint && !isHovering && (
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-mono text-white/70 flex items-center gap-1.5 pointer-events-none transition-opacity duration-300 z-10">
          <ZoomIn className="w-3 h-3 text-[#C6963F]" />
          <span>1.5x Lens</span>
        </div>
      )}

      {/* Custom Children (overlays, pins, badges) */}
      {children}
    </div>
  );
};

export default MacroMagnifierImage;
