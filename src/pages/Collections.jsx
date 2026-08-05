import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { img } from "../lib/utils.js";

const allCards = [
  {
    title: "Formals",
    desc: "Boardroom to Evening",
    img: img("img_6.jpeg"),
    cat: "Formal",
  },
  {
    title: "Smart Casuals",
    desc: "Effortless Presence",
    img: img("img_7.jpeg"),
    cat: "Casual",
  },
  {
    title: "Trousers",
    desc: "Perfectly Tailored",
    img: img("img_8.jpeg"),
    cat: "Bottoms",
  },
  {
    title: "Denims",
    desc: "Everyday Essential",
    img: img("img_9.jpeg"),
    cat: "Bottoms",
  },
  {
    title: "Cargos",
    desc: "Utility meets Style",
    img: img("img_10.jpeg"),
    cat: "Casual",
  },
  {
    title: "Club Wear",
    desc: "After Hours",
    img: img("img_12.jpeg"),
    cat: "Premium",
  },
  {
    title: "Pyjamas",
    desc: "Comfort, Reimagined",
    img: img("img_13.jpeg"),
    cat: "Casual",
  },
  {
    title: "Smart Casuals",
    desc: "Weekend Ready",
    img: img("img_4.jpeg"),
    cat: "Casual",
  },
];

const lookbook = [
  {
    tag: "Crafted for Movement",
    cap: "Wherever the day takes you.",
    img: img("img_11.jpeg"),
    wide: true,
  },
  {
    tag: "Style Formals",
    cap: "From Sun to Scene",
    img: img("img_6.jpeg"),
    wide: false,
  },
  {
    tag: "Evening Formals",
    cap: "After Hours, Done Right",
    img: img("img_7.jpeg"),
    wide: false,
  },
  {
    tag: "Measured Boldness",
    cap: "Expressed through clarity.",
    img: img("img_1.jpeg"),
    wide: true,
  },
  {
    tag: "Heritage Tones",
    cap: "Retail Ally",
    img: img("img_8.jpeg"),
    wide: false,
  },
  {
    tag: "On Holiday Mode",
    cap: "Where days slow down.",
    img: img("img_12.jpeg"),
    wide: false,
  },
];

const Collections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalProducts, setModalProducts] = useState([]);

  const productsByCat = {
    Formal: [
      {
        id: "F101",
        name: "Navy Wool Suit",
        img: img("img_6.jpeg"),
      },
      {
        id: "F102",
        name: "Charcoal Blazer",
        img: img("img_1.jpeg"),
      },
      {
        id: "F103",
        name: "Crisp White Shirt",
        img: img("img_2.jpeg"),
      },
    ],
    Casual: [
      {
        id: "C201",
        name: "Linen Shirt",
        img: img("img_7.jpeg"),
      },
      {
        id: "C202",
        name: "Chino Trousers",
        img: img("img_8.jpeg"),
      },
      {
        id: "C203",
        name: "Relaxed Blazer",
        img: img("img_4.jpeg"),
      },
    ],
    Bottoms: [
      {
        id: "B301",
        name: "Tailored Trousers",
        img: img("img_8.jpeg"),
      },
      {
        id: "B302",
        name: "Slim Denims",
        img: img("img_9.jpeg"),
      },
      {
        id: "B303",
        name: "Corduroy Pants",
        img: img("img_10.jpeg"),
      },
    ],
    Premium: [
      {
        id: "P401",
        name: "Velvet Jacket",
        img: img("img_12.jpeg"),
      },
      {
        id: "P402",
        name: "Silk Shirt",
        img: img("img_11.jpeg"),
      },
    ],
  };

  function openModal(cat) {
    setModalTitle(cat);
    setModalProducts(productsByCat[cat] || []);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setModalProducts([]);
    setModalTitle("");
  }

  return (
    <div className="bg-[#0E1A30] text-[#FDFAF5] overflow-hidden">
      {/* Hero */}
      <section className="relative bg-[#0E1A30] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${img("img_6.jpeg")}')` }}
        />
        <div className="relative max-w-[1180px] mx-auto px-6 md:px-10 py-20 md:py-32">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-serif-luxury text-4xl md:text-6xl leading-tight mb-6 normal-case not-italic"
          >
            Six categories.
            <br />
            <em className="text-[#C6963F] italic">One wardrobe.</em>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/70 max-w-xl text-base leading-relaxed"
          >
            Autumn/Winter '25 is built around six deliberate silhouettes — from
            boardroom to boulevard, without ever raising its voice.
          </p>
        </div>
      </section>

      {/* Category Strip – unchanged */}
      <div className="flex flex-wrap items-center justify-center gap-4 py-4 px-6 text-center font-mono text-[0.65rem] uppercase tracking-[0.15em] bg-[#1a2634] text-white/80 border-b border-white/5">
        {[
          "Formals",
          "Smart Casuals",
          "Trousers",
          "Denims",
          "Cargos",
          "Club Wear",
          "Pyjamas",
        ].map((cat, i, arr) => (
          <React.Fragment key={cat}>
            <span className="hover:text-[#C6963F] transition cursor-default">
              {cat}
            </span>
            {i < arr.length - 1 && (
              <span className="text-[#C6963F] opacity-40">·</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Collections Grid – unchanged */}
      <section className="py-16 md:py-20 bg-[#0E1A30]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {allCards.map((card, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={100 + i * 50}
                className="group relative overflow-hidden cursor-pointer bg-cover  bg-center rounded-xl shadow-xl"
                style={{
                  backgroundImage: `url('${card.img}')`,
                  height: "420px",
                }}
                onClick={() => openModal(card.cat)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,26,48,0.92)] via-[rgba(14,26,48,0.2)_55%] to-transparent transition-all duration-500 group-hover:from-[rgba(14,26,48,0.98)]" />
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[0.58rem] tracking-widest uppercase bg-[#C6963F] text-[#0E1A30] px-2.5 py-1 rounded-full font-semibold">
                    {card.cat}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 p-5 md:p-6">
                  <div className="font-mono text-[0.58rem] tracking-widest uppercase text-[#C6963F] mb-1.5">
                    {card.desc}
                  </div>
                  <div className="font-serif-luxury text-xl font-normal text-white normal-case not-italic">
                    {card.title}
                  </div>
                  <div className="mt-3 overflow-hidden h-0 group-hover:h-8 transition-all duration-300">
                    <span className="font-mono text-[0.62rem] tracking-wider uppercase text-white/80 border-b border-[#C6963F] pb-0.5 inline-block">
                      View Collection →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – unchanged */}
      <section className="py-16 bg-[#0E1A30] text-center text-white border-t border-white/5">
        <div className="max-w-xl mx-auto px-6">
          <div
            data-aos="fade-up"
            className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#C6963F] mb-4"
          >
            Become a Retail Partner
          </div>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-serif-luxury font-normal text-3xl md:text-4xl leading-tight mb-6 normal-case not-italic"
          >
            Ready to stock <em className="text-[#C6963F] italic">Onzone?</em>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/60 mb-8 leading-relaxed"
          >
            Request our full AW'25 catalogue or speak directly with our trade
            team.
          </p>
          <Link
            to="/contact"
            data-aos="fade-up"
            data-aos-delay="300"
            className="inline-block font-mono text-[0.7rem] tracking-[0.1em] uppercase bg-[#C6963F] text-[#0E1A30] py-4 px-8 no-underline hover:bg-white transition-colors font-semibold rounded-full shadow-lg hover:shadow-[#C6963F]/30"
          >
            Request Catalogue
          </Link>
        </div>
      </section>

      {/* ==================== REDESIGNED MODAL ==================== */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-[#0E1A30] text-[#FDFAF5] max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-white/10 p-6 md:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gold accent and close button */}
            <div className="flex justify-between items-start mb-6 border-b border-[#C6963F]/20 pb-4">
              <div>
                <div className="flex items-center gap-3.5 mb-1">
                  <div className="w-8 h-[2px] bg-[#C6963F]" />
                  <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[#C6963F]">
                    Collection
                  </span>
                </div>
                <h3 className="font-serif-luxury text-2xl md:text-3xl font-normal">
                  {modalTitle}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="text-[#FDFAF5]/40 hover:text-[#FDFAF5] transition text-2xl p-2 hover:bg-white/5 rounded-full"
              >
                ✕
              </button>
            </div>

            {/* Product grid – image‑first, no prices */}
            {modalProducts.length === 0 ? (
              <p className="text-white/60 text-center py-12">
                No products in this collection yet.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {modalProducts.map((prod) => (
                  <Link
                    key={prod.id}
                    to={`/product/${prod.id}`}
                    className="group block bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url('${prod.img}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A30]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="font-mono text-[0.6rem] tracking-widest uppercase text-[#C6963F]">
                          View Details →
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="font-mono text-[0.55rem] tracking-[0.15em] uppercase text-[#C6963F]">
                        {prod.id}
                      </div>
                      <div className="font-serif-luxury text-lg font-normal mt-0.5">
                        {prod.name}
                      </div>
                      {/* Price removed intentionally */}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collections;
