import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    <nav className="sticky top-0 z-50 bg-[#FDFAF5] border-b border-[rgba(14,26,48,0.12)]">
      {/* Updated padding: smaller on mobile, wider on desktop */}
      <div className="flex items-center justify-between py-2 md:py-3 px-4 sm:px-6 md:px-10 gap-3 sm:gap-4 lg:gap-10">
        {/* Brandmark – Logo with improved responsiveness */}
        <Link
          to="/"
          className="flex items-center no-underline shrink-0"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Updated min-width to prevent forcing too much space on small screens */}
          <div className="flex items-center min-w-[100px] sm:min-w-[140px] md:min-w-[180px]">
            <img
              src="/hoo_logo.svg"
              alt="Onzone – House of Onzone"
              /* Responsive heights: h-8 for tiny phones -> lg:h-16 for desktops */
              className="h-5 sm:h-6 md:h-7 lg:h-9 xl:h-10 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav links – larger font */}
        <div className="hidden lg:flex gap-10 text-base font-medium text-[#2B2820]">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              className={`pb-0.5 transition-all duration-200 no-underline ${
                isActive(href)
                  ? "opacity-100 font-semibold border-b-2 border-[#0E1A30] text-[#0E1A30]"
                  : "opacity-70 font-normal border-b-2 border-transparent hover:opacity-100 hover:border-[#A87B31] text-[#2B2820]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/contact"
            className="hidden lg:inline-block font-mono text-sm tracking-[0.08em] uppercase bg-[#0E1A30] text-[#FDFAF5] py-[10px] px-[24px] rounded-full no-underline transition-colors duration-200 hover:bg-[#A87B31]"
          >
            Become a Partner
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-1.5 sm:p-2 text-[#0E1A30] focus:outline-none touch-manipulation"
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
      </div>

      {/* Mobile Menu – larger font */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#FDFAF5] border-b border-[rgba(14,26,48,0.12)] shadow-lg py-4 px-6 flex flex-col gap-2">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-base py-3 border-b border-[rgba(14,26,48,0.06)] transition-all duration-200 no-underline ${
                isActive(href)
                  ? "font-semibold text-[#A87B31]"
                  : "text-[#2B2820] opacity-80"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-mono text-sm tracking-[0.08em] uppercase bg-[#0E1A30] text-[#FDFAF5] py-[12px] px-[28px] rounded-full no-underline transition-colors duration-200 hover:bg-[#A87B31] text-center mt-3"
          >
            Become a Partner
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
