import React from "react";
import { img } from "../lib/utils.js";

const BrandCollaboration = () => {
  return (
    <>
      {/* Inline keyframes definition — scoped to this component */}
      <style>
        {`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(12px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <section className="py-4 px-6" style={{ background: "transparent" }}>
        <div className="max-w-3xl mx-auto">
          {/* Label */}
          <p
            className="text-center text-[0.55rem] tracking-[0.25em] uppercase font-medium mb-3"
            style={{
              color: "#c9a84c",
              opacity: 0.7,
              animation: "fadeUp 0.6s ease-out forwards",
            }}
          >
            In Collaboration With
          </p>

          {/* Logos */}
          <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
            {/* Scot Lee Logo — trail delay 0.1s */}
            <div
              className="flex items-center transition-transform duration-300 hover:scale-105"
              style={{
                animation: "fadeUp 0.6s ease-out forwards",
                animationDelay: "0.1s",
                opacity: 0, // start hidden, animation reveals
              }}
            >
              <img
                src={img("cl_onzone.png")}
                alt="Scot Lee"
                className="h-8 md:h-12 w-auto object-contain brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </div>

            {/* Separator — trail delay 0.2s */}
            <span
              className="text-xl font-thin tracking-wider"
              style={{
                color: "#c9a84c",
                opacity: 0.6,
                animation: "fadeUp 0.6s ease-out forwards",
                animationDelay: "0.2s",
                opacity: 0,
              }}
            >
              ✦
            </span>

            {/* Onzone Logo — trail delay 0.3s */}
            <div
              className="flex items-center transition-transform duration-300 hover:scale-105"
              style={{
                animation: "fadeUp 0.6s ease-out forwards",
                animationDelay: "0.3s",
                opacity: 0,
              }}
            >
              <img
                src="/hoo_logo.svg"
                alt="Onzone – House of Onzone"
                className="h-8 md:h-12 w-auto object-contain brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </div>
          </div>

          {/* Tagline — trail delay 0.4s */}
          <p
            className="text-center text-[0.5rem] tracking-[0.2em] uppercase mt-3"
            style={{
              color: "#6b645a",
              opacity: 0.6,
              animation: "fadeUp 0.6s ease-out forwards",
              animationDelay: "0.4s",
              opacity: 0,
            }}
          >
            Timeless Patterns · Modern Fit
          </p>
        </div>
      </section>
    </>
  );
};

export default BrandCollaboration;
