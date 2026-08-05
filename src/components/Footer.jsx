import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const collectionLinks = [
    { label: "Formals", href: "/collections" },
    { label: "Smart Casuals", href: "/collections" },
    { label: "Trousers", href: "/collections" },
    { label: "Denims", href: "/collections" },
    { label: "Cargos", href: "/collections" },
  ];

  const companyLinks = [
    { label: "Our Story", href: "/about" },
    { label: "Retail Ethos", href: "/about" },
    { label: "Craftsmanship", href: "/process" },
    { label: "Trade Enquiries", href: "/contact" },
    { label: "Collections", href: "/collections" },
  ];

  return (
    <footer className="bg-[#0E1A30] text-[#FDFAF5] pt-12 md:pt-[60px] border-t border-white/10">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        {/* Grid: now 5 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-baseline gap-2 mb-4 no-underline"
            >
              <div className="flex items-center">
                <div className="flex items-center min-w-[100px] sm:min-w-[140px] md:min-w-[180px]">
                  <img
                    src="/hoo_logo.svg"
                    alt="Onzone – House of Onzone"
                    /* Responsive heights: h-8 for tiny phones -> lg:h-16 for desktops */
                    className="h-8 sm:h-10 md:h-14 lg:h-16 w-auto object-contain"
                  />
                </div>
              </div>
            </Link>
            <p className="text-white/60 leading-[1.7] text-[0.88rem] max-w-[280px]">
              Onzone designs for the modern Indian man — formal shirts, smart
              casuals, trousers, denims and cargos, made for twenty-five years
              and counting.
            </p>
          </div>

          {/* Collection */}
          <div>
            <h5 className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-[#C6963F] mb-4">
              Collection
            </h5>
            {collectionLinks.map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                className="block text-white/60 text-[0.88rem] mb-2 no-underline hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h5 className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-[#C6963F] mb-4">
              Company
            </h5>
            {companyLinks.map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                className="block text-white/60 text-[0.88rem] mb-2 no-underline hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Store – with icons */}
          <div>
            <h5 className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-[#C6963F] mb-4">
              Store
            </h5>
            <div className="flex items-center gap-2 text-white/60 text-[0.88rem] mb-2">
              <FaMapMarkerAlt className="text-[#C6963F] text-sm" />
              <span>Bangalore · Karnataka · India</span>
            </div>
            <a
              href="tel:+919916082518"
              className="flex items-center gap-2 text-white/60 text-[0.88rem] mb-2 no-underline hover:text-white transition-colors"
            >
              <FaPhoneAlt className="text-[#C6963F] text-sm" />
              <span>+91 99160 82518</span>
            </a>
            <a
              href="mailto:enquiries@houseofonzone.com"
              className="flex items-center gap-2 text-white/60 text-[0.88rem] mb-2 no-underline hover:text-white transition-colors"
            >
              <FaEnvelope className="text-[#C6963F] text-sm" />
              <span>enquiries@houseofonzone.com</span>
            </a>
          </div>

          {/* Follow Us – new section */}
          <div>
            <h5 className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-[#C6963F] mb-4">
              Follow Us
            </h5>
            <div className="flex items-center gap-4 mb-3">
              <a
                href="https://facebook.com/houseofonzone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://instagram.com/houseofonzone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
            {/* <span className="text-white/60 text-[0.88rem]">@houseofonzone</span> */}
          </div>
        </div>

        {/* Bottom bar (unchanged) */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 py-5 font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.1em] uppercase text-white/45 gap-2 md:gap-0 text-center">
          <span>© 2025 House of Onzone. All rights reserved.</span>
          <span>Formals · Smart Casuals · Trousers · Denims · Cargos</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
