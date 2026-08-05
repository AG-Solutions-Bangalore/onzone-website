import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  TrendingUp,
  Home,
  Store,
  Globe2,
  MapPinned,
} from "lucide-react";
import { img } from "../lib/utils.js";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FDFAF5] text-[#2B2820]">
      {/* ═══════════════════════════════════════════════
          HERO — Full bleed image with centered text
      ═══════════════════════════════════════════════ */}
      <section className="relative h-[40vh] md:h-[86vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url('${img("retail_store_1784887597607.jpg")}')` }}
        />
        <div className="absolute inset-0 bg-[#0E1A30]/65" />
        <div className="relative z-10 top-26 text-center px-6 max-w-4xl">
          <h1
            data-aos="fade-up"
            className="font-serif-luxury text-2xl sm:text-3xl md:text-5xl text-white leading-[1.1] mb-6 normal-case not-italic"
          >
            Built Without Noise. <br />
            <em className="text-[#C6963F] italic">Worn With Intention.</em>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/60 text-base md:text-md max-w-2xl mx-auto leading-[1.8]"
          >
            Since 1999, Onzone has grown from a single formal shirt line into
            one of India's most retail‑trusted menswear brands — built on
            partnerships, craftsmanship, and quiet conviction.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          01 · OUR STORY — Split text + image blocks
      ═══════════════════════════════════════════════ */}
      <section id="story">
        <div className="bg-[#f7f4ef] py-16 md:py-24">
          <div className="max-w-[1180px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <h2
              data-aos="fade-up"
              className="font-serif-luxury text-4xl md:text-6xl font-normal text-[#0E1A30] leading-[1.1] normal-case not-italic uppercase"
            >
              Our Story.
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-[#6B665A] text-base md:text-lg leading-[1.8] max-w-md"
            >
              For over two decades, we have built our story into the fabric of
              Indian menswear — one season, one retailer at a time.
            </p>
          </div>
        </div>

        {/* Story Block 1 — The Beginning */}
        <div className="flex flex-col md:flex-row min-h-[65vh]">
          <div className="md:w-1/2 bg-[#0E1A30] text-white flex items-center">
            <div
              className="px-8 md:px-16 lg:px-20 py-16 max-w-lg"
              data-aos="fade-right"
            >
              <h3 className="font-serif-luxury text-3xl md:text-4xl font-normal mb-6 normal-case not-italic uppercase">
                {" "}
                The Beginning
              </h3>
              <p className="text-white/70 leading-[1.85] text-[0.95rem] mb-6">
                Founded in 1999 by{" "}
                <strong className="text-white">Rajesh Parekh</strong> and{" "}
                <strong className="text-white">Mukesh Parekh</strong>, Onzone
                began with formal shirts and a single-minded focus — build men's
                clothing retailers could count on, season after season.
              </p>
              <p className="text-white/50 leading-[1.85] text-[0.95rem]">
                Every product addition was deliberate, guided by retailer
                feedback, market demand, and practical insight rather than trend
                chasing.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 min-h-[400px] md:min-h-0 bg-cover bg-center">
            <img
              src={img("img_5.jpeg")}
              alt=""
              className="w-full h-[450px] object-cover object-top"
            />
          </div>
        </div>

        {/* Story Block 2 — The Growth */}
        <div className="flex flex-col md:flex-row-reverse min-h-[65vh]">
          <div className="md:w-1/2 bg-[#f7f4ef] flex items-center">
            <div
              className="px-8 md:px-16 lg:px-20 py-16 max-w-lg"
              data-aos="fade-left"
            >
              <h3 className="font-serif-luxury text-3xl md:text-4xl font-normal mb-6 normal-case not-italic uppercase">
                The Growth
              </h3>
              <p className="text-[#6B665A] leading-[1.85] text-[0.95rem] mb-6">
                From formal shirts, we expanded into trousers, smart casuals,
                denims, pyjamas, cargos, and club wear trousers. Geographically,
                the journey followed the same philosophy — steady, earned, never
                rushed.
              </p>
              <p className=" text-[#6B665A] leading-[1.85] text-[0.95rem]">
                Beginning in Bangalore, expanding across Karnataka and South
                India, and today operating across{" "}
                <strong className="text-[#0E1A30]">
                  South, Central, Central-West, North-East, and North India.
                </strong>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 min-h-[400px] md:min-h-0 bg-cover bg-center">
            <img
              src={img("img_7.jpeg")}
              alt=""
              className="w-full h-[470px] object-cover object-top"
            />
          </div>
        </div>

        {/* Story Block 3 — Onzone Today */}
        <div className="flex flex-col md:flex-row min-h-[65vh]">
          <div className="md:w-1/2 bg-[#0E1A30] text-white flex items-center">
            <div
              className="px-8 md:px-16 lg:px-20 py-16 max-w-lg"
              data-aos="fade-right"
            >
              <h3 className="font-serif-luxury text-3xl md:text-4xl font-normal mb-6 normal-case not-italic uppercase">
                Onzone Today
              </h3>
              <p className="text-white/70 leading-[1.85] text-[0.95rem] mb-6">
                Today, Onzone stands at the intersection of trust and quiet
                ambition. With{" "}
                <strong className="text-[#C6963F]">
                  2,500+ active retail partners
                </strong>
                , a multi-category portfolio, and presence across five regions
                of India — we continue to build the future.
              </p>
              <p className="text-white/50 leading-[1.85] text-[0.95rem]">
                Reach, quality and credibility — before promotion. This
                quiet-first approach remains one of the defining strengths of
                the organisation.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 min-h-[400px] md:min-h-0 bg-cover bg-center">
            <img
              src={img("img_8.jpeg")}
              alt=""
              className="w-full h-[470px] object-cover object-top"
            />
          </div>
        </div>
      </section>
      <section id="style-journey" class="py-20 md:py-28 bg-[#FDFAF5]">
        <div class="max-w-[1100px] mx-auto px-6 text-center">
          <div data-aos="fade-up">
            <div class="flex items-center justify-center gap-4 mb-6">
              <div class="w-16 h-px bg-[#C6963F]" />
              <span class="font-mono text-[1rem] tracking-[0.3em] uppercase text-[#6B665A]">
                Our Philosophy
              </span>
              <div class="w-16 h-px bg-[#C6963F]" />
            </div>

            <h2 class="font-serif-luxury text-4xl md:text-5xl lg:text-5xl text-[#0E1A30] normal-case not-italic leading-[1.1]">
              STYLE IS A JOURNEY.
            </h2>
            <h2 class="font-serif-luxury text-4xl md:text-5xl lg:text-5xl text-[#C6963F] normal-case not-italic leading-[1.1] mt-2">
              NOT A DESTINATION.
            </h2>

            <div class="w-12 h-px bg-[#C6963F] mx-auto mt-8" />

            <p class="font-serif-luxury text-base md:text-lg text-[#2B2820]/60 leading-[1.8] not-italic max-w-2xl mx-auto mt-6">
              Every season brings new stories, new silhouettes, and new ways to
              express who you are.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F6F4] py-24 -mt-30">
        <div className="max-w-[1450px] mx-auto px-6 lg:px-10 space-y-32">
          {/* OUR MISSION */}
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Images */}
            <div className="relative">
              <img
                src={img("img_2.jpeg")}
                alt=""
                className="w-full h-[620px] object-cover"
              />

              <img
                src={img("img_2.jpeg")}
                alt=""
                className="absolute bottom-[-45px] right-[-35px] w-[170px] h-[190px] object-cover border-[8px] border-[#F7F6F4]"
              />
            </div>

            {/* Text */}
            <div className="max-w-[620px]">
              <h2 className="font-serif-luxury text-[58px] uppercase leading-none mb-8">
                Our Mission
              </h2>

              <p className="text-[#444] text-[19px] leading-9 mb-10">
                At Onzone, our mission is simple—to craft clothing that combines
                timeless design with exceptional comfort. Every collection is
                designed to make everyday dressing effortless while maintaining
                premium quality.
              </p>

              <p className="text-[#444] text-[19px] leading-9">
                We continue to innovate through better fabrics, refined
                silhouettes and thoughtful craftsmanship, ensuring every garment
                delivers style, confidence and lasting value.
              </p>
            </div>
          </div>

          {/* OUR VISION */}

          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Text */}

            <div className="max-w-[620px]">
              <h2 className="font-serif-luxury text-[58px] uppercase leading-none mb-8">
                Our Vision
              </h2>

              <p className="text-[#444] text-[19px] leading-9 mb-10">
                Our vision is to become India's most trusted fashion
                destination, creating apparel that seamlessly blends
                sophistication, functionality and affordability.
              </p>

              <p className="text-[#444] text-[19px] leading-9">
                We believe fashion should inspire confidence while remaining
                accessible to everyone, helping people express themselves
                through premium everyday essentials.
              </p>
            </div>

            {/* Image */}

            <div className="relative">
              <img
                src={img("img_2.jpeg")}
                alt=""
                className="w-full h-[620px] object-cover"
              />
              <img
                src={img("img_2.jpeg")}
                alt=""
                className="absolute bottom-[-45px] right-[-35px] w-[170px] h-[190px] object-cover border-[8px] border-[#F7F6F4]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          OUR REACH — With icons & consistent fonts
      ═══════════════════════════════════════════════ */}
      <section
        id="reach"
        className="relative overflow-hidden py-24 lg:py-32 bg-[#FCFAF7]"
      >
        {/* Background Blur */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#C6963F]/10 blur-[120px]" />

        <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full bg-[#0E1A30]/5 blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="text-center mb-20" data-aos="fade-up">
            <span className="uppercase tracking-[0.35em] text-xs text-[#C6963F] font-semibold">
              Nationwide Presence
            </span>

            <h2 className="mt-5 font-serif-luxury text-5xl md:text-6xl text-[#0E1A30]">
              Connecting Retail
              <br />
              Across India
            </h2>

            <p className="max-w-2xl mx-auto mt-7 text-[#777] leading-8">
              For more than two decades, Onzone has expanded through trusted
              relationships, serving retailers across metropolitan cities,
              emerging markets and export destinations.
            </p>
          </div>

          {/* Statistics */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              {
                number: "25+",
                label: "Years of Trust",
              },
              {
                number: "2500+",
                label: "Retail Partners",
              },
              {
                number: "5",
                label: "Regions",
              },
              {
                number: "150K+",
                label: "Garment Capacity",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="
          bg-white/80
          backdrop-blur-xl
          rounded-[28px]
          border
          border-[#ECE7DD]
          p-8
          text-center
          transition-all
          duration-500
          hover:-translate-y-3
          hover:shadow-2xl
          hover:border-[#C6963F]/50
          "
              >
                <h3 className="font-serif-luxury text-5xl text-[#0E1A30]">
                  {item.number}
                </h3>

                <p className="mt-3 uppercase tracking-[0.22em] text-xs text-[#8B8478]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Cards */}

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Card */}

            <div
              data-aos="fade-right"
              className="
        group
        bg-white/80
        backdrop-blur-xl
        rounded-[32px]
        border
        border-[#ECE7DD]
        p-10
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-2xl
        "
            >
              <h3 className="font-serif-luxury text-3xl text-[#0E1A30] mb-10">
                Our Network
              </h3>

              <div className="space-y-7">
                {[
                  {
                    icon: Building2,
                    title: "Tier 1 Metropolitan Cities",
                    desc: "Established presence across major urban markets.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Tier 2 & Tier 3 Growth Markets",
                    desc: "Rapid expansion through trusted regional retailers.",
                  },
                  {
                    icon: Home,
                    title: "Emerging Semi-Urban Belts",
                    desc: "Building long-term partnerships beyond metro cities.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="
                flex
                gap-5
                pb-6
                border-b
                last:border-none
                border-[#ECE7DD]
                "
                    >
                      <div
                        className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#F8F5EF]
                  flex
                  items-center
                  justify-center
                  text-[#C6963F]
                  transition-all
                  duration-500
                  group-hover:bg-[#0E1A30]
                  group-hover:text-white
                  "
                      >
                        <Icon size={24} />
                      </div>

                      <div>
                        <h4 className="font-serif-luxury text-2xl text-[#0E1A30]">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-[#777] leading-7">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Card */}

            <div
              data-aos="fade-left"
              className="
        group
        bg-white/80
        backdrop-blur-xl
        rounded-[32px]
        border
        border-[#ECE7DD]
        p-10
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-2xl
        "
            >
              <h3 className="font-serif-luxury text-3xl text-[#0E1A30] mb-10">
                Retail Presence
              </h3>

              <div className="space-y-7">
                {[
                  {
                    icon: Store,
                    title: "Standalone Retailers",
                    desc: "Serving thousands of independent menswear retailers.",
                  },
                  {
                    icon: MapPinned,
                    title: "Compact Retail Stores",
                    desc: "Designed for efficient stores from 200 sq. ft. onward.",
                  },
                  {
                    icon: Globe2,
                    title: "Export Partnerships",
                    desc: "Building international relationships with trusted partners.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="
                flex
                gap-5
                pb-6
                border-b
                last:border-none
                border-[#ECE7DD]
                "
                    >
                      <div
                        className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#F8F5EF]
                  flex
                  items-center
                  justify-center
                  text-[#C6963F]
                  transition-all
                  duration-500
                  group-hover:bg-[#0E1A30]
                  group-hover:text-white
                  "
                      >
                        <Icon size={24} />
                      </div>

                      <div>
                        <h4 className="font-serif-luxury text-2xl text-[#0E1A30]">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-[#777] leading-7">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          BUILT OVER TIME — Each item as a card with descriptive icon
      ═══════════════════════════════════════════════ */}
      <section
        id="built-over-time"
        className="relative py-20 bg-[#FDFAF5] bg-[url('https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1600')] bg-cover bg-center bg-blend-overlay overflow-hidden"
      >
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-[#FDFAF5]/80 -z-0" />

        <div className="relative z-10">
          <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="font-serif-luxury text-4xl md:text-5xl font-normal text-[#0E1A30] normal-case not-italic">
              Built Over Time
            </h2>
            <div className="w-12 h-px bg-[#C6963F] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-8 gap-6 px-5 mx-auto">
            {/* 1. 25+ Years */}
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#0E1A30]/5 p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-3 text-[#2B2820]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V7l7-5 7 5v14" />
                  <path d="M9 21v-4h6v4" />
                  <path d="M9 11h.01" />
                  <path d="M15 11h.01" />
                  <path d="M9 15h.01" />
                  <path d="M15 15h.01" />
                </svg>
              </div>
              <span className="font-serif-luxury text-base md:text-lg text-[#2B2820] normal-case not-italic leading-[1.3]">
                25+ Years of Continuous Operations
              </span>
            </div>

            {/* 2. 2500+ Direct Retail Partners */}
            <div
              data-aos="fade-up"
              data-aos-delay="60"
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#0E1A30]/5 p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-3 text-[#2B2820]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10"
                >
                  <path d="M17 11v4.5a2.5 2.5 0 0 1-5 0V11" />
                  <path d="M7 11v4.5a2.5 2.5 0 0 0 5 0V11" />
                  <path d="M12 8v3" />
                  <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                  <path d="M7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                  <path d="M17 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                  <path d="M5 12h.01" />
                  <path d="M19 12h.01" />
                  <path d="M5 16h.01" />
                  <path d="M19 16h.01" />
                </svg>
              </div>
              <span className="font-serif-luxury text-base md:text-lg text-[#2B2820] normal-case not-italic leading-[1.3]">
                2500+ Direct Retail Partners
              </span>
            </div>

            {/* 3. 150,000+ Garment Holding Capacity */}
            <div
              data-aos="fade-up"
              data-aos-delay="120"
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#0E1A30]/5 p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-3 text-[#2B2820]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10"
                >
                  <path d="M20 4h-4a3 3 0 0 0-3 3v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4z" />
                  <path d="M4 4h4a3 3 0 0 1 3 3v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" />
                  <path d="M12 7a3 3 0 0 0-3-3H7" />
                  <path d="M12 7a3 3 0 0 1 3-3h2" />
                  <path d="M8 2v2" />
                  <path d="M16 2v2" />
                </svg>
              </div>
              <span className="font-serif-luxury text-base md:text-lg text-[#2B2820] normal-case not-italic leading-[1.3]">
                150,000+ Garment Holding Capacity
              </span>
            </div>

            {/* 4. Multi-Generational Leadership */}
            <div
              data-aos="fade-up"
              data-aos-delay="180"
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#0E1A30]/5 p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-3 text-[#2B2820]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                  <path d="M12 11v3" />
                  <path d="M12 17v.01" />
                </svg>
              </div>
              <span className="font-serif-luxury text-base md:text-lg text-[#2B2820] normal-case not-italic leading-[1.3]">
                Multi-Generational Leadership
              </span>
            </div>

            {/* 5. Long-Term Vendor Associations */}
            <div
              data-aos="fade-up"
              data-aos-delay="240"
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#0E1A30]/5 p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-3 text-[#2B2820]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <span className="font-serif-luxury text-base md:text-lg text-[#2B2820] normal-case not-italic leading-[1.3]">
                Long-Term Vendor Associations
              </span>
            </div>

            {/* 6. Financially Disciplined Growth */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#0E1A30]/5 p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-3 text-[#2B2820]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <span className="font-serif-luxury text-base md:text-lg text-[#2B2820] normal-case not-italic leading-[1.3]">
                Financially Disciplined Growth
              </span>
            </div>

            {/* 7. Organic Market Expansion */}
            <div
              data-aos="fade-up"
              data-aos-delay="360"
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#0E1A30]/5 p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-3 text-[#2B2820]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span className="font-serif-luxury text-base md:text-lg text-[#2B2820] normal-case not-italic leading-[1.3]">
                Organic Market Expansion
              </span>
            </div>

            {/* 8. Zero Discount-Dumping Philosophy */}
            <div
              data-aos="fade-up"
              data-aos-delay="420"
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#0E1A30]/5 p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-3 text-[#2B2820]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <span className="font-serif-luxury text-base md:text-lg text-[#2B2820] normal-case not-italic leading-[1.3]">
                Zero Discount-Dumping Philosophy
              </span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center mt-16 pt-12 border-t border-[#0E1A30]/5">
            <p className="font-serif-luxury text-xl md:text-2xl text-[#2B2820]/80 italic leading-[1.6] not-italic">
              “Trust is not built through announcements.{" "}
              <br className="md:hidden" />
              It is built through repeat seasons.”
            </p>
            <div className="mt-10">
              <span className="font-mono text-[0.55rem] tracking-[0.3em] uppercase text-[#6B665A]">
                Precision
              </span>
              <div className="font-serif-luxury text-2xl md:text-3xl text-[#C6963F] normal-case not-italic mt-1">
                IN EVERY STITCH.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════
          PARTNER CTA
      ═══════════════════════════════════════════════ */}
      {/* <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${img("img_6.jpeg")}')` }}
        />
        <div className="absolute inset-0 bg-[#0E1A30]/75" />

        <div className="relative z-10 text-center px-6" data-aos="fade-up">
          <h2 className="font-serif-luxury text-3xl md:text-5xl text-white font-normal leading-[1.1] mb-6 normal-case not-italic">
            Partner with Onzone
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-lg mx-auto leading-[1.8] mb-10">
            Be part of a trusted journey. Speak directly with our trade team or
            request our latest AW'25 catalogue.
          </p>
          <Link
            to="/contact"
            className="inline-block font-mono text-[0.7rem] tracking-[0.18em] uppercase text-[#C6963F] border-b-2 border-[#C6963F] pb-2 hover:text-white hover:border-white transition-colors no-underline"
          >
            Get In Touch
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default About;
