import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  Store,
  Compass,
  CheckCircle2,
  ChevronRight,
  Maximize2
} from "lucide-react";
import { img } from "../lib/utils.js";

gsap.registerPlugin(ScrollTrigger);

// 25-Year Timeline Milestones with visual photography
const milestones = [
  {
    year: "1999",
    tag: "THE GENESIS",
    title: "The First Cut in Bangalore",
    headline: "Two brothers. One relentless standard.",
    desc: "Founded by Rajesh & Mukesh Parekh with a singular obsession: formal shirts built with such dependable fabric and cut that retailers never saw a return.",
    img: img("img_5.jpeg"),
    stat: "1st Generation",
    statLabel: "Founding Atelier",
  },
  {
    year: "2008",
    tag: "PORTFOLIO EXPANSION",
    title: "Beyond the White Shirt",
    headline: "Engineered trousers and smart casuals.",
    desc: "Responding to shop-floor demand, Onzone introduced tailored trousers and weekend casuals cut with the same 20-SPI single-needle discipline.",
    img: img("img_8.jpeg"),
    stat: "500+",
    statLabel: "Stores by 2008",
  },
  {
    year: "2016",
    tag: "PAN-INDIA EXPANSION",
    title: "Quietly Earning the Nation",
    headline: "From Karnataka to North & North-East India.",
    desc: "Without billboards or discount campaigns, word-of-mouth among multi-brand retailers carried Onzone across 5 geographic zones.",
    img: img("img_7.jpeg"),
    stat: "1,500+",
    statLabel: "Retail Partners",
  },
  {
    year: "2021",
    tag: "FABRIC REVOLUTION",
    title: "Giza 87 & Liquid Ammonia Finishing",
    headline: "Master mills meet Indian body ergonomics.",
    desc: "Upgraded our fabric portfolio to 100% Egyptian Giza long-staple cottons with liquid ammonia silk finishes and natural non-iron recovery.",
    img: img("img_1.jpeg"),
    stat: "100%",
    statLabel: "ELS Egyptian Giza",
  },
  {
    year: "2025",
    tag: "HOUSE OF ONZONE",
    title: "A Quarter Century of Trust",
    headline: "2,500+ stores. 150,000+ garments crafted.",
    desc: "Standing as one of India's premier menswear institutions, balancing Savile Row sartorial pride with modern power dressing.",
    img: img("img_6.jpeg"),
    stat: "2,500+",
    statLabel: "Active Partners Today",
  },
];

// Curated Gallery Mosaic
const galleryImages = [
  {
    url: img("img_6.jpeg"),
    title: "The Boardroom White",
    tag: "20 SPI FORMAL",
    aspect: "col-span-12 md:col-span-7 h-[420px] md:h-[520px]",
    speed: 0.15,
  },
  {
    url: img("img_1.jpeg"),
    title: "Heritage Check Weave",
    tag: "TWO-PLY COMPACT",
    aspect: "col-span-12 md:col-span-5 h-[340px] md:h-[520px]",
    speed: -0.1,
  },
  {
    url: img("img_12.jpeg"),
    title: "Evening Club Velvet",
    tag: "MIDNIGHT SARTORIAL",
    aspect: "col-span-12 md:col-span-4 h-[380px] md:h-[460px]",
    speed: 0.2,
  },
  {
    url: img("img_7.jpeg"),
    title: "Air-Washed Casuals",
    tag: "PURE LINEN FLUIDITY",
    aspect: "col-span-12 md:col-span-4 h-[380px] md:h-[460px]",
    speed: -0.15,
  },
  {
    url: img("img_10.jpeg"),
    title: "Tailored Cargo Architecture",
    tag: "MODERN UTILITY",
    aspect: "col-span-12 md:col-span-4 h-[380px] md:h-[460px]",
    speed: 0.1,
  },
];

const About = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroFloatingRef = useRef(null);
  const headlineLine1Ref = useRef(null);
  const headlineLine2Ref = useRef(null);
  const timelineSectionRef = useRef(null);
  const statsRef = useRef(null);
  const galleryRef = useRef(null);
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // 1. Hero Reveal Animation
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTl
        .fromTo(
          heroImageRef.current,
          { scale: 1.15, filter: "brightness(0.5)" },
          { scale: 1.0, filter: "brightness(0.9)", duration: 1.8 }
        )
        .fromTo(
          [headlineLine1Ref.current, headlineLine2Ref.current],
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, stagger: 0.2 },
          "-=1.3"
        )
        .fromTo(
          heroFloatingRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.6"
        );

      // Hero Parallax on Scroll
      gsap.to(heroImageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 2. Parallax Image Cards in Staggered Grid
      const parallaxCards = gsap.utils.toArray(".about-parallax-img");
      parallaxCards.forEach((card, i) => {
        const speed = i % 2 === 0 ? 30 : -25;
        gsap.to(card, {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });

      // 3. Stats Counter Scrub / Reveal
      const statItems = gsap.utils.toArray(".about-stat-number");
      statItems.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      // 4. Split Gallery Reveal
      const galleryCards = gsap.utils.toArray(".gallery-zoom-item");
      galleryCards.forEach((item) => {
        gsap.fromTo(
          item,
          { scale: 0.94, opacity: 0.4 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const currentMilestone = milestones[activeTimelineIdx];

  return (
    <div
      ref={containerRef}
      className="bg-[#FDFAF5] text-[#0E1A30] overflow-hidden selection:bg-[#C6963F] selection:text-white"
    >
      {/* ══════════════════════════════════════════════════════════
          1. CINEMATIC EDITORIAL HERO WITH GSAP PARALLAX
      ══════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative h-[85vh] sm:h-[92vh] flex items-center justify-center overflow-hidden"
      >
        {/* Parallax Background Canvas */}
        <div
          ref={heroImageRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url('${img("img_1.jpeg")}')`,
          }}
        />

        {/* Cinematic Film Vignette & Moody Navy Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A30] via-[#0E1A30]/70 to-[#0E1A30]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0E1A30_100%)] opacity-80" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-12 sm:mt-16">
          {/* Savile Row Crest Pill */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#C6963F]/40 mb-6 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#C6963F] animate-ping" />
            <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#C6963F]">
              EST. 1999 · BANGALORE ATELIER
            </span>
          </div>

          {/* Majestic Animated Headlines */}
          <h1
            ref={headlineLine1Ref}
            className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight uppercase"
          >
            Built Without Noise.
          </h1>
          <h2
            ref={headlineLine2Ref}
            className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#C6963F] italic mt-2"
          >
            Worn With Intention.
          </h2>

          <p className="mt-6 text-white/80 font-sans text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Twenty-five years of quiet mastery. From a single cutting table in
            Bangalore to over 2,500 retail floors across India.
          </p>

          {/* Floating Key Badges */}
          <div
            ref={heroFloatingRef}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-10 text-xs sm:text-sm font-mono tracking-wider uppercase text-white/90"
          >
            <div className="flex items-center gap-2 bg-[#0E1A30]/70 px-4 py-2 rounded-full border border-white/15 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-[#C6963F]" />
              <span>Zero Discount-Dumping</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0E1A30]/70 px-4 py-2 rounded-full border border-white/15 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#C6963F]" />
              <span>20 SPI Precision Stitch</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0E1A30]/70 px-4 py-2 rounded-full border border-white/15 backdrop-blur-md">
              <Award className="w-4 h-4 text-[#C6963F]" />
              <span>2,500+ Partner Doors</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 font-mono text-[10px] tracking-[0.2em] uppercase">
          <span>SCROLL TO DISCOVER</span>
          <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
            <span className="w-1.5 h-2 bg-[#C6963F] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. THE EDITORIAL IMAGE SPREAD — MAGAZINE STYLE
      ══════════════════════════════════════════════════════════ */}
      <section
        className="py-20 md:py-32 px-6 md:px-12 max-w-[1340px] mx-auto"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Overlapping Staggered Visual Collage */}
          <div
            className="lg:col-span-7 relative min-h-[460px] sm:min-h-[580px]"
            data-aos="fade-right"
          >
            {/* Primary Main Image with 1.5x Lens */}
            {/* Primary Main Image */}
<div className="about-parallax-img relative w-4/5 h-[420px] sm:h-[500px] rounded-3xl shadow-2xl border border-[#0E1A30]/10 overflow-hidden">
  <img
    src={img("img_6.jpeg")}
    alt="Onzone Tailoring Masterpiece"
    className="w-full h-full object-cover object-top"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A30]/80 via-transparent to-transparent opacity-80 pointer-events-none" />

  <div className="absolute bottom-6 left-6 text-white pointer-events-none z-10">
    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C6963F] block">
      The White Shirt Benchmark
    </span>

    <span className="font-serif-luxury text-xl sm:text-2xl font-normal">
      Fused German Interlining
    </span>
  </div>
</div>

            {/* Secondary Floating Offset Image */}
<div className="about-parallax-img absolute right-0 bottom-4 w-1/2 sm:w-3/5 h-[280px] sm:h-[340px] rounded-3xl shadow-[0_25px_60px_rgba(14,26,48,0.25)] border-4 border-[#FDFAF5] z-10 overflow-hidden">

  <img
    src={img("img_7.jpeg")}
    alt="Onzone Linen Weave"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A30]/80 via-transparent to-transparent opacity-70 pointer-events-none" />

  <div className="absolute bottom-4 left-4 text-white pointer-events-none z-10">
    <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#C6963F] block">
      Textile Provenance
    </span>

    <span className="font-serif-luxury text-base sm:text-lg font-normal">
      Air-Washed Pure Flax
    </span>
  </div>

</div>

            {/* Savile Row Stamp Badge */}
            <div className="absolute -top-4 right-12 z-20 w-24 h-24 rounded-full bg-[#0E1A30] border-2 border-[#C6963F] text-[#FDFAF5] flex flex-col items-center justify-center text-center p-2 shadow-2xl rotate-12 hover:rotate-0 transition-transform">
              <span className="font-mono text-[8px] uppercase tracking-wider text-[#C6963F]">
                MAKERS OF
              </span>
              <span className="font-serif-luxury text-sm font-bold leading-none my-0.5">
                FINE SHIRTS
              </span>
              <span className="font-mono text-[8px] uppercase tracking-widest text-white/60">
                1999
              </span>
            </div>
          </div>

          {/* Right Column: Punchy Editorial Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center" data-aos="fade-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[#C6963F]" />
              <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#C6963F]">
                The Founding Conviction
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#0E1A30] leading-[1.1] mb-6">
              Respect the fabric. <br />
              <span className="text-[#C6963F] italic">Master the fit.</span>
            </h2>

            <p className="text-[#0E1A30]/75 text-base sm:text-lg leading-relaxed mb-6 font-sans">
              Founded in 1999 by <strong>Rajesh Parekh</strong> and{" "}
              <strong>Mukesh Parekh</strong>, House of Onzone was built on a
              simple truth: <em>the garment must sell itself on the rack</em>.
            </p>

            <p className="text-[#0E1A30]/70 text-sm sm:text-base leading-relaxed mb-8">
              No celebrity endorsements, no vanity bill-boards, no margin-eroding
              discount-dumping. Instead, we put our capital into German
              interlinings, Egyptian Giza cottons, and single-needle sewing
              machines.
            </p>

            {/* Checklist of Principles */}
            <div className="space-y-3.5 border-t border-[#0E1A30]/10 pt-6">
              {[
                "Cut strictly for the athletic & modern Indian silhouette",
                "Long-term mill partnerships securing first-pick fabric harvests",
                "Repeat retailer trust earned over 25 continuous seasons",
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-medium text-[#0E1A30]">
                  <CheckCircle2 className="w-4 h-4 text-[#C6963F] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. INTERACTIVE 25-YEAR GSAP TIMELINE (MORE VISUALS)
      ══════════════════════════════════════════════════════════ */}
      <section
        ref={timelineSectionRef}
        className="py-20 md:py-28 bg-[#0E1A30] text-[#FDFAF5] relative overflow-hidden"
        id="timeline"
        data-aos="fade-up"
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-8 h-[2px] bg-[#C6963F]" />
                <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#C6963F]">
                  A Quarter-Century Archive
                </span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-white">
                The Milestones of <span className="text-[#C6963F] italic">Craft</span>
              </h2>
            </div>
            <p className="text-white/60 text-sm max-w-sm">
              Click through the eras that transformed a humble workshop into an
              Indian menswear institution.
            </p>
          </div>

          {/* Year Navigation Bar */}
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {milestones.map((m, idx) => {
              const isActive = idx === activeTimelineIdx;
              return (
                <button
                  key={m.year}
                  onClick={() => setActiveTimelineIdx(idx)}
                  className={`px-5 sm:px-7 py-3 rounded-2xl font-mono text-xs sm:text-sm uppercase tracking-wider font-bold transition-all duration-300 cursor-pointer shrink-0 border ${
                    isActive
                      ? "bg-[#C6963F] text-[#0E1A30] border-[#C6963F] shadow-[0_10px_25px_rgba(198,150,63,0.3)] scale-105"
                      : "bg-white/5 text-white/60 border-white/10 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="block text-base sm:text-lg font-serif-luxury">
                    {m.year}
                  </span>
                  <span className="block text-[9px] sm:text-[10px] opacity-75 mt-0.5">
                    {m.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Display Card (Split Screen Photo + Story) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.04] backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
            {/* Left: Giant Cinematic Image with 1.5x Lens */}
           <div className="lg:col-span-6">
  <div className="relative h-[360px] sm:h-[480px] rounded-2xl border border-white/15 shadow-xl overflow-hidden">

    <img
      src={currentMilestone.img}
      alt={currentMilestone.title}
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A30]/90 via-transparent to-transparent pointer-events-none" />

    {/* Floating Stat Pill on Image */}
    <div className="absolute top-5 right-5 bg-[#0E1A30]/80 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center pointer-events-none z-10">
      <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#C6963F] block leading-none">
        {currentMilestone.stat}
      </span>
      <span className="font-mono text-[9px] uppercase tracking-wider text-white/70 block mt-1">
        {currentMilestone.statLabel}
      </span>
    </div>

    {/* Year Stamp */}
    <div className="absolute bottom-5 left-5 pointer-events-none z-10">
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C6963F] block">
        MILESTONE ARCHIVE
      </span>
      <span className="font-serif-luxury text-3xl sm:text-4xl font-normal text-white">
        {currentMilestone.year}
      </span>
    </div>

  </div>
</div>

            {/* Right: Narrative Story & Craft Details */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div>
                <span className="font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-[#C6963F] block mb-2">
                  {currentMilestone.tag}
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-4xl text-white font-normal mb-3">
                  {currentMilestone.title}
                </h3>
                <p className="text-white/60 font-mono text-sm tracking-wide mb-4 italic">
                  "{currentMilestone.headline}"
                </p>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed font-sans">
                  {currentMilestone.desc}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <button
                  onClick={() =>
                    setActiveTimelineIdx(
                      (prev) => (prev + 1) % milestones.length
                    )
                  }
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C6963F] text-[#0E1A30] font-mono text-xs uppercase tracking-wider font-bold hover:bg-white transition-all shadow-md cursor-pointer"
                >
                  <span>Next Milestone</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <Link
                  to="/collections"
                  className="font-mono text-xs tracking-wider uppercase text-white/70 hover:text-[#C6963F] transition-colors"
                >
                  Explore Modern Garments →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. THE VISUAL LOOKBOOK MOSAIC — MORE IMAGES USED
      ══════════════════════════════════════════════════════════ */}
      <section
        ref={galleryRef}
        className="py-20 md:py-32 px-6 md:px-10 max-w-[1360px] mx-auto"
        data-aos="fade-up"
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1A30]/5 border border-[#C6963F]/40 mb-4">
            <Layers className="w-3.5 h-3.5 text-[#C6963F]" />
            <span className="font-mono text-[11px] font-bold tracking-[0.22em] uppercase text-[#C6963F]">
              Visual Atelier Lookbook
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#0E1A30] mb-4">
            The Gallery of <span className="text-[#C6963F] italic">Presence</span>
          </h2>
          <p className="text-[#0E1A30]/70 text-sm sm:text-base leading-relaxed">
            Every garment begins on our cutting tables and ends commanding
            attention in boardrooms, celebrations, and quiet weekend mornings.
          </p>
        </div>

        {/* Dynamic Mosaic Grid with GSAP Zoom Scrub */}
        <div className="grid grid-cols-12 gap-6">
  {galleryImages.map((imgItem, idx) => (
    <div
      key={idx}
      className={`gallery-zoom-item group relative ${imgItem.aspect} rounded-3xl shadow-xl border border-[#0E1A30]/10 overflow-hidden`}
    >
      <img
        src={imgItem.url}
        alt={imgItem.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A30]/90 via-[#0E1A30]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none" />

      {/* Bottom Caption */}
      <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none z-10">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C6963F] block mb-1">
          {imgItem.tag}
        </span>

        <h4 className="font-serif-luxury text-xl sm:text-2xl font-normal leading-snug">
          {imgItem.title}
        </h4>
      </div>
    </div>
  ))}
</div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. ANIMATED STATS / CREDIBILITY BANNER WITH GSAP
      ══════════════════════════════════════════════════════════ */}
      <section
        ref={statsRef}
        className="py-16 md:py-24 bg-[#F2EDE4] border-y border-[#0E1A30]/10"
        data-aos="fade-up"
      >
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { num: "25+", label: "Years of Trust", sub: "Since 1999" },
              { num: "2,500+", label: "Active Retail Doors", sub: "Pan-India" },
              { num: "150,000+", label: "Garment Capacity", sub: "Per Season" },
              { num: "5", label: "National Zones", sub: "South to North-East" },
            ].map((stat, i) => (
              <div key={i} className="about-stat-number flex flex-col items-center">
                <span className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-normal text-[#0E1A30] leading-none mb-2">
                  {stat.num}
                </span>
                <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#C6963F] block mb-1">
                  {stat.label}
                </span>
                <span className="font-mono text-[10px] uppercase text-[#0E1A30]/50 tracking-wider">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. THE SAVILE ROW CALL TO ACTION
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-[#0E1A30] text-[#FDFAF5] overflow-hidden text-center">
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6963F]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C6963F]/40 mb-6">
            <Store className="w-3.5 h-3.5 text-[#C6963F]" />
            <span className="font-mono text-[11px] font-bold tracking-[0.22em] uppercase text-[#C6963F]">
              Partner with House of Onzone
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal leading-tight text-white mb-6">
            Join 2,500+ Retailers Who Refuse to Compromise on Craft.
          </h2>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto font-sans">
            Whether stocking independent boutiques or expanding multi-outlet
            chains, Onzone provides dependable season-after-season margins and
            unrivaled garment return resistance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C6963F] text-[#0E1A30] font-mono text-xs uppercase tracking-widest font-bold hover:bg-white transition-all shadow-xl"
            >
              <span>Initiate Trade Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/collections"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-white border border-white/20 font-mono text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-all"
            >
              <span>Explore The Collections</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
