import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import WhatsAppBroadcast from "./WhatsAppBroadcast";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Collections", href: "/collections" },
    { label: "Our Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 md:px-8 pointer-events-none transition-all duration-300">
      {/* Floating Capsule Bar */}
      <nav
        className={`pointer-events-auto max-w-[1240px] mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-xl bg-[#FDFAF5]/85 border border-white/80 shadow-[0_10px_35px_rgba(14,26,48,0.12)]"
            : "backdrop-blur-md bg-white/45 sm:bg-white/50 border border-white/60 shadow-[0_6px_28px_rgba(14,26,48,0.06)]"
        } px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 flex items-center justify-between gap-3 sm:gap-6`}
      >
        {/* Brandmark – House of ONZONE Logo */}
        <Link
          to="/"
          className="flex items-center no-underline shrink-0 group"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex items-center">
            <img
              src="/assets/hoo_logo.svg"
              alt="House of ONZONE"
              className="h-6 sm:h-7 md:h-8 lg:h-8.5 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </div>
        </Link>

        {/* Center Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {links.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Link
                key={label}
                to={href}
                className={`transition-all duration-200 no-underline text-sm md:text-[14.5px] ${
                  active
                    ? "bg-white/95 text-[#C6963F] font-semibold px-4 sm:px-5 py-1.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                    : "text-[#2B2820]/75 hover:text-[#0E1A30] font-medium px-3.5 sm:px-4 py-1.5 rounded-full hover:bg-white/30"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
         <a
  href="https://api.whatsapp.com/send/?phone=919916082518&text=Hello%20House%20of%20ONZONE%2C%20I%20would%20like%20to%20join%20your%20WhatsApp%20Broadcast%20for%20new%20catalogue%2C%20seasonal%20drops%2C%20and%20trade%20updates."
  target="_blank"
  rel="noopener noreferrer"
  className="hidden sm:inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-[0.08em] uppercase bg-[#0E1A30] text-[#FDFAF5] py-2 px-5 sm:px-6 rounded-full no-underline transition-all duration-200 hover:bg-[#C6963F] hover:text-[#0E1A30] shadow-sm hover:shadow group"
>
  <span>Join VIP</span>
  <span className="text-[#C6963F] group-hover:text-[#0E1A30] transition-colors font-sans text-sm font-bold">
    →
  </span>
</a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#0E1A30] hover:text-[#C6963F] rounded-full focus:outline-none transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto mt-2 max-w-sm sm:max-w-md mx-auto backdrop-blur-xl bg-[#FDFAF5]/95 border border-white/80 shadow-2xl rounded-3xl p-4 flex flex-col gap-1.5 transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          {links.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Link
                key={label}
                to={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2.5 px-4 rounded-full text-sm font-medium transition-all no-underline ${
                  active
                    ? "bg-white text-[#C6963F] font-semibold shadow-sm"
                    : "text-[#2B2820]/80 hover:text-[#0E1A30] hover:bg-white/40"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 font-mono text-xs tracking-wider uppercase bg-[#0E1A30] text-[#FDFAF5] py-2.5 px-6 rounded-full no-underline transition-colors hover:bg-[#C6963F] hover:text-[#0E1A30] text-center"
          >
            <span>Become a Partner</span>
            <span className="text-[#C6963F] font-sans text-sm font-bold">→</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
