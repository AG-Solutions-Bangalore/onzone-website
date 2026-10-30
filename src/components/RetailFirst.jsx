import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { img } from "../lib/utils.js";

const RetailFirst = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 50,
    });
  }, []);

  return (
    <section className="bg-[#FDFAF5] text-[#0E1A30] overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Two‑column layout – image on left, text on right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: image with fade-right transition */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={img("img_5.jpeg")}
              alt="Onzone retail"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover min-h-[280px] md:min-h-[450px]"
            />
          </div>

          {/* Right: copy with staggered transitions */}
          <div data-aos="fade-up" data-aos-delay="200">
            {/* Gold label */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-[2px] bg-[#C6963F]" />
              <span className="font-mono text-[0.8rem] font-bold tracking-[0.22em] uppercase text-[#C6963F]">
                Retail First
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif-luxury font-normal text-3xl md:text-[clamp(2rem,3.5vw,3.2rem)] leading-[1.1] mb-5 normal-case not-italic">
              We grow <em className="text-[#C6963F] italic">with our</em>{" "}
              retailers.
              <br />
              Not over them.
            </h2>

            {/* Description */}
            <p className="text-[#0E1A30]/70 leading-[1.8] mb-10 max-w-[540px] text-sm md:text-base">
              Today we work directly with 2,500+ active retail stores, across
              formats ranging from 200 sq. ft. outlets to 100,000 sq. ft.
              large-format stores — including standalone retailers, multi-outlet
              chains and export partners.
            </p>

            {/* Stats – presented as a bullet list (like the screenshot) */}
            <div data-aos="fade-up" data-aos-delay="400" className="space-y-4">
              {[
                { val: "2,500+", label: "Direct Retail Partners" },
                { val: "100K+", label: "Shirts In Stock" },
                { val: "50K+", label: "Trousers & Denims" },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  data-aos="fade-up"
                  data-aos-delay={500 + idx * 100}
                  className="flex items-baseline gap-3 border-b border-[#C6963F]/20 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-[#C6963F] font-mono text-lg font-bold">
                    —
                  </span>
                  <div>
                    <span className="font-serif-luxury text-xl md:text-2xl font-normal block leading-tight">
                      {stat.val}
                    </span>
                    <span className="font-mono text-[0.6rem] md:text-[0.65rem] tracking-[0.15em] uppercase text-[#0E1A30]/50">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Extra stat: 45% (as seen in screenshot) */}
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="mt-8 pt-6 border-t border-[#C6963F]/30 flex items-center gap-4"
            >
              <span className="font-serif-luxury text-3xl md:text-4xl text-[#C6963F]">
                45%
              </span>
              <span className="font-mono text-[0.6rem] md:text-[0.7rem] tracking-[0.1em] uppercase text-[#0E1A30]/60">
                Growth in retail partnerships
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetailFirst;
