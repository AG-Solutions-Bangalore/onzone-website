import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Strengths = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 50,
    });
  }, []);

  const pillars = [
    {
      title: "Fabric",
      desc: "Sourced with intent from mills we've partnered with for decades.",
    },
    {
      title: "Pattern",
      desc: "Cut for the Indian silhouette — modern, never fleeting.",
    },
    {
      title: "Construction",
      desc: "Reinforced seams, precise plackets, hand-finished collars.",
    },
    {
      title: "Quality",
      desc: "Structured checks across every batch, before it leaves us.",
    },
    {
      title: "Finishing",
      desc: "Pressed, polished and packed like it's still our own wardrobe.",
    },
  ];

  // Helper to render 5 gold stars
  const renderStars = () => (
    <div className="flex gap-0.5 text-[#C6963F] text-sm">
      {[...Array(5)].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );

  return (
    <section
      className="py-16 md:py-24 bg-[#0E1A30] overflow-hidden"
      id="strengths"
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        {/* Header – unchanged */}
        <div
          data-aos="fade-up"
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3.5 mb-3.5">
            <div className="w-12 h-[2px] bg-[#C6963F]" />
            <span className="font-mono text-[0.82rem] font-bold tracking-[0.22em] uppercase text-[#C6963F]">
              Our Strength
            </span>
          </div>
          <h2 className="font-serif-luxury font-normal text-3xl md:text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.08] mb-3.5 normal-case not-italic text-[#FDFAF5]">
            More than fabric.{" "}
            <em className="text-[#C6963F] italic">More than stitching.</em>
          </h2>
          <p className="text-[#FDFAF5]/70 leading-[1.7] max-w-[560px] text-sm md:text-base mx-auto md:mx-0">
            Precision in every stitch. Trust is not built through announcements
            — it's earned through repeat seasons.
          </p>
        </div>

        {/* Redesigned Pillar Grid – Testimonial‑style Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={100 + i * 80}
              className="group relative bg-[#FDFAF5] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              {/* Decorative gold quote mark (top left) */}
              <div className="absolute top-3 left-4 text-[#C6963F]/20 text-4xl font-serif-luxury leading-none">
                “
              </div>

              {/* Star rating – always 5 stars */}
              <div className="mb-2">{renderStars()}</div>

              {/* Description as testimonial text */}
              <p className="text-[#0E1A30]/80 leading-[1.6] text-sm flex-1 mb-4 italic">
                {p.desc}
              </p>

              {/* Author / pillar title */}
              <div className="flex items-center justify-between mt-auto">
                <span className="font-serif-luxury text-base font-normal text-[#0E1A30]">
                  {p.title}
                </span>
                <span className="text-[#C6963F] text-xs font-mono tracking-widest uppercase opacity-60">
                  ★ trust
                </span>
              </div>

              {/* Bottom gold line (on hover) */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-[#C6963F] transition-all duration-500 rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
