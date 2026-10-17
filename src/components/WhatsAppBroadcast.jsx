import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X, Radio, ArrowRight, CheckCircle2 } from "lucide-react";

const WhatsAppBroadcast = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);

  // Phone number for House of ONZONE
  const phoneNumber = "919916082518";
  const defaultMessage = encodeURIComponent(
    "Hello House of ONZONE, I would like to join your WhatsApp Broadcast for new catalogue, seasonal drops, and trade updates."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  // Gentle reminder badge after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Expanded Broadcast Modal / Card */}
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[360px] rounded-2xl bg-[#0E1A30] text-[#FDFAF5] shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-[#C6963F]/30 p-5 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-300 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#25D366]/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-[#C6963F]/15 rounded-full blur-2xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close broadcast card"
            className="absolute top-4 right-4 p-1 text-white/60 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md shrink-0">
              <FaWhatsapp className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-serif text-base font-semibold tracking-wide text-white">
                  WhatsApp Broadcast
                </h4>
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#C6963F]">
                House of ONZONE VIP List
              </p>
            </div>
          </div>

          {/* Body */}
          <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed mb-4">
            Get instant access to our newest fabric catalogues, seasonal lookbook drops, and direct B2B trade releases delivered straight to your WhatsApp.
          </p>

          {/* Highlights */}
          <div className="space-y-1.5 mb-5 text-[11px] text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
              <span>Weekly new arrivals & stock availability</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
              <span>Direct high-resolution digital catalogues</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
              <span>Zero spam · Instant wholesale enquiries</span>
            </div>
          </div>

          {/* Action CTA Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-medium text-xs sm:text-sm shadow-lg hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-all no-underline group cursor-pointer"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Join WhatsApp Broadcast</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      )}

      {/* Floating Pill / Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle WhatsApp Broadcast"
        className="group relative flex items-center gap-2.5 bg-[#0E1A30] hover:bg-[#16233D] text-white pl-3.5 pr-4 py-2.5 rounded-full border border-[#C6963F]/40 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.3)] transition-all duration-300 cursor-pointer active:scale-95"
      >
        {/* Pulsing Green Broadcast Ping */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]" />
        </span>

        {/* WhatsApp Icon Circle */}
        <div className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm">
          <FaWhatsapp className="w-4 h-4" />
        </div>

        {/* Text Label */}
        <div className="flex flex-col text-left">
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#C6963F] leading-tight">
            Join VIP
          </span>
          <span className="font-sans text-xs font-semibold tracking-wide text-white leading-tight">
            WhatsApp Broadcast
          </span>
        </div>

        {/* Broadcast Radio Waves Icon */}
        <Radio className="w-3.5 h-3.5 text-white/50 group-hover:text-[#25D366] transition-colors ml-0.5" />
      </button>
    </div>
  );
};

export default WhatsAppBroadcast;
