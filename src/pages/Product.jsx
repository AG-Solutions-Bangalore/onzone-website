import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { getProductById } from "../data/products";



const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 50,
    });
  }, []);

  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#FDFAF5] text-[#0E1A30] px-6">
        <div className="text-center max-w-md">
          <h2 className="font-serif-luxury text-3xl mb-4">Product not found</h2>
          <p className="text-[#0E1A30]/60 mb-6">
            We couldn't find a product with id <strong>{id}</strong>.
          </p>
          <Link
            to="/collections"
            className="inline-block px-8 py-3 bg-[#C6963F] text-[#FDFAF5] font-mono text-xs tracking-[0.15em] uppercase font-bold rounded-full hover:bg-[#a87d2a] transition"
          >
            Back to collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-[#FDFAF5] text-[#0E1A30] min-h-screen pt-28 pb-12 md:pb-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        {/* <div
          data-aos="fade-down"
          className="flex items-center gap-2 text-xs font-mono tracking-[0.1em] uppercase text-[#0E1A30]/40 mb-8"
        >
          <Link to="/" className="hover:text-[#C6963F] transition">
            Home
          </Link>
          <span>/</span>
          <Link to="/collections" className="hover:text-[#C6963F] transition">
            Collections
          </Link>
          <span>/</span>
          <Link
            to={`/collections ""}`}
            className="hover:text-[#C6963F] transition"
          >
            {product.category || "All"}
          </Link>
          <span>/</span>
          <span className="text-[#0E1A30]/80">{product.name}</span>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image with 1.5x Lens */}
          <div data-aos="fade-right">
            <div className="relative rounded-2xl bg-[#F0EDE8] shadow-xl h-96 md:h-[650px] overflow-hidden">

              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#FDFAF5]/30 to-transparent pointer-events-none" />

            </div>
          </div>

          {/* Details – no price, no extra meta */}
          <div className="flex flex-col justify-center">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex items-center gap-3.5 mb-4"
            >
              <div className="w-12 h-[2px] bg-[#C6963F]" />
              <span className="font-mono text-[0.7rem] font-bold tracking-[0.22em] uppercase text-[#C6963F]">
                {product.category || "Product"}
              </span>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-delay="150"
              className="font-serif-luxury font-normal text-3xl md:text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.1] mb-6"
            >
              {product.name}
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="text-[#0E1A30]/70 leading-[1.8] text-sm md:text-base max-w-[480px] mb-10"
            >
              {product.description ||
                "Crafted with precision and purpose. Each piece reflects our commitment to quality and timeless style."}
            </p>

            {/* Enquiry button only */}
            <div
              data-aos="fade-up"
              data-aos-delay="350"
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="group relative overflow-hidden px-8 py-3 bg-[#C6963F] text-[#FDFAF5] font-mono text-xs tracking-[0.15em] uppercase font-bold rounded-full transition-all duration-300 hover:bg-[#a87d2a] shadow-lg hover:shadow-[#C6963F]/30"
              >
                <span className="relative z-10">Enquire about this piece</span>
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products section removed entirely */}
      </div>
    </section>
  );
};

export default Product;
