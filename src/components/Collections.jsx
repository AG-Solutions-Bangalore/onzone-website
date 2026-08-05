import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { img } from "../lib/utils.js";

const Collections = () => {
  const cards = [
    {
      title: "Formals",
      desc: "Boardroom to Evening",
      img: img("img_12.jpeg"),
    },
    {
      title: "Smart Casuals",
      desc: "Effortless Presence",
      img: img("img_8.jpeg"),
    },
    {
      title: "Trousers",
      desc: "Perfectly Tailored",
      img: img("img_6.jpeg"),
    },
    {
      title: "Denims",
      desc: "Everyday Essential",
      img: img("image.webp"),
    },
    {
      title: "Cargos",
      desc: "Utility meets Style",
      img: img("img_10.jpeg"),
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const headingVariant = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section className="pt-12 pb-24 bg-[#ffffff]" id="collections">
      <div className="max-w-[1700px] mx-auto px-6 md:px-10">
        {/* Heading */}
        <motion.div
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6"
        >
          <div>
            <div className="flex relative items-center gap-3.5 mb-1">
              <div className="w-12 h-[2px] bg-[#C6963F]" />
              <span className="font-mono text-[13px] font-bold tracking-[0.22em] uppercase text-[#C6963F]">
                THE COLLECTION
              </span>
            </div>
            <h2 className="font-serif-luxury font-bold text-3xl sm:text-5xl text-[#0E1A30] leading-[1.08] mb-6 normal-case">
              Five categories.
              <br />
              <em className="italic text-[#A87B31] block">
                one season at a time.
              </em>
            </h2>
          </div>
          <p className="max-w-md text-[#6B665A] leading-7 text-sm md:text-base">
            Autumn/Winter '25 is built around deliberate silhouettes—from
            boardroom to boulevard, without ever raising its voice.
          </p>
        </motion.div>

        {/* Grid – all five cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Link
                to="/collections"
                className="group relative block overflow-hidden rounded-sm h-[420px]"
              >
                {/* Image */}
                <img
                  src={card.img}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                {/* Text */}
                <div className="absolute bottom-8 left-8 z-10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C6963F]">
                    {card.desc}
                  </p>
                  <h3 className="mt-3 text-white text-2xl md:text-2xl font-serif-luxury">
                    {card.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Collections;
