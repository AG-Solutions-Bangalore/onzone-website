import React from "react";
import { img } from "../lib/utils.js";

const Lookbook = () => {
  const cards = [
    {
      tag: "Style Formals",
      cap: "From Sun to Scene",
      img: img("img_6.jpeg"),
      tall: true,
    },
    {
      tag: "Evening Formals",
      cap: "After Hours, Done Right",
      img: img("img_7.jpeg"),
      tall: false,
    },
    {
      tag: "Retail Ally",
      cap: "Heritage Tones",
      img: img("img_8.jpeg"),
      tall: false,
    },
    {
      tag: "Cargo Edit",
      cap: "Built for Real Days",
      img: img("img_9.jpeg"),
      tall: true,
    },
    {
      tag: "Smart Casual",
      cap: "Built for Your Vibe",
      img: img("img_10.jpeg"),
      tall: false,
    },
    {
      tag: "Weekend",
      cap: "Crafted for Movement",
      img: img("img_11.jpeg"),
      tall: false,
    },
    {
      tag: "AW'25",
      cap: "On Holiday Mode",
      img: img("img_12.jpeg"),
      tall: false,
    },
    {
      tag: "Casual Ally",
      cap: "Crafted for Confidence",
      img: img("img_13.jpeg"),
      tall: false,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FDFAF5]" id="lookbook">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4 sm:gap-0">
          <div>
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-12 h-[2px] bg-[#C6963F]" />
              <span className="font-mono text-[0.82rem] font-bold tracking-[0.22em] uppercase text-[#C6963F]">
                AW'25 · Lookbook
              </span>
            </div>
            <h2 className="font-serif-luxury font-normal text-3xl md:text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.1] text-[#2B2820] normal-case not-italic">
              Style is a journey.
              <br />
              <em className="text-[#A87B31] italic">Not a destination.</em>
            </h2>
          </div>
          <a
            href="#"
            className="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-[#2B2820] opacity-65 hover:opacity-100 whitespace-nowrap mb-1.5 transition-opacity"
          >
            Request Full Catalogue →
          </a>
        </div>

        {/* Masonry grid — 1 col mobile, 2 col sm, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-2">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden cursor-pointer bg-cover bg-center ${card.tall ? "row-span-2" : "row-span-1"}`}
              style={{ backgroundImage: `url('${card.img}')` }}
            >
              {/* Gradient overlay — always visible at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,26,48,0.75)] via-[rgba(14,26,48,0.1)_50%] to-transparent transition-opacity duration-400 group-hover:opacity-100" />

              {/* Caption block pinned to bottom-left */}
              <div className="absolute bottom-0 left-0 p-[14px_16px]">
                <div className="font-mono text-[0.58rem] tracking-[0.14em] uppercase text-[#C6963F] mb-1">
                  {card.tag}
                </div>
                <div className="font-serif-luxury text-[0.95rem] font-normal text-white leading-[1.2] normal-case not-italic">
                  {card.cap}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lookbook;
