import React, { useRef, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Gem,
  Shirt,
  Handshake,
  Users,
  Store,
  Layers,
  Award,
  ArrowRight,
} from "lucide-react";
import { img } from "../lib/utils.js";

gsap.registerPlugin(ScrollTrigger);

/* ── 3 Curated Chapters matching the exact UI design ── */
const storySlides = [
  {
    id: 1,
    chapter: "01",
    tabLabel: "OUR JOURNEY",
    tabLine1: "OUR",
    tabLine2: "JOURNEY",
    statIcon: Store,
    statNumber: "2,500+",
    statTitle: "RETAIL PARTNERS",
    statDesc:
      "Grew organically from Bangalore across Karnataka, South India, and today operates across South, Central, Central-West, North-East, and North India.",
    img: "/assets/red-printed.png",
    fallbackImg: "/assets/red-printed.png",
    alt: "Onzone Handcrafted Floral & Printed Mens Shirt",
    imageStyle: {
      objectPosition: "80% 40%",
      transform: "scale(1.18) translate(-8%, 2%)",
    },
  },
  {
    id: 2,
    chapter: "02",
    tabLabel: "OUR COLLECTIONS",
    tabLine1: "OUR",
    tabLine2: "COLLECTIONS",
    statIcon: Layers,
    statNumber: "150,000+",
    statTitle: "GARMENTS CRAFTED",
    statDesc:
      "From formal shirts to sharp trousers, smart casuals, denims, pyjamas and cargos — perfected across 25 years of quiet shop-floor insight.",
    img: "/assets/formal.png",
    fallbackImg: "/assets/formal.png",
    alt: "Onzone Tailored Leaf Print Shirt",
    imageStyle: {
      objectPosition: "80% 40%",
      transform: "scale(1.06) translate(0%, 2%)",
    },
  },
  {
    id: 3,
    chapter: "03",
    tabLabel: "OUR IMPACT",
    tabLine1: "OUR",
    tabLine2: "IMPACT",
    statIcon: Award,
    statNumber: "25+ Years",
    statTitle: "OF SHIRTMAKING EXPERTISE",
    statDesc:
      "Woven for modern versatility from boardroom to weekend gatherings. Quarter-century of dependable fabric standards and repeat retailer trust.",
    img: "/assets/white-printed.png",
    fallbackImg: "/assets/white-printed.png",
    alt: "Onzone Classic Heritage Check Shirt",
    imageStyle: {
      objectPosition: "80% 40%",
      transform: "scale(1.06) translate(0%, 1%)",
    },
  },
];

/* ── 4 Trust Pillars ── */
const featurePillars = [
  { icon: Gem, line1: "PREMIUM", line2: "QUALITY" },
  { icon: Shirt, line1: "MODERN", line2: "STYLES" },
  { icon: Handshake, line1: "RETAILER", line2: "TRUST" },
  { icon: Users, line1: "25 YEARS", line2: "OF EXPERTISE" },
];

const AUTO_SLIDE_MS = 4000;

export default function Story() {
  const navigate = useNavigate();
  const [slideIdx, setSlideIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isTransitioningRef = useRef(false);

  // Animation Refs
  const sectionRef = useRef(null);
  const watermarkRef = useRef(null);
  const eyebrowLineRef = useRef(null);
  const eyebrowTextRef = useRef(null);
  const headlineLine1Ref = useRef(null);
  const headlineLine2Ref = useRef(null);
  const bodyTextRef = useRef(null);
  const pillarsRef = useRef(null);
  const quoteRef = useRef(null);
  const ctaBrandsRef = useRef(null);

  // Right Hero Composition Refs
  const navyArchRef = useRef(null);
  const photoFrameRef = useRef(null);
  const currentImageRef = useRef(null);
  const imageMotionWrapperRef = useRef(null);
  const cardWrapperRef = useRef(null);
  const cardInnerRef = useRef(null);
  const rightSidebarRef = useRef(null);
  const badgeRef = useRef(null);
  const badgeRotatingRingRef = useRef(null);
  const counterRef = useRef(null);
  const activeTabLineRef = useRef(null);

  const activeSlide = storySlides[slideIdx];
  const totalSlides = storySlides.length;

  // ── GSAP Powered Slide Transition ──
  const transitionToSlide = useCallback(
    (nextIdx) => {
      if (isTransitioningRef.current || nextIdx === slideIdx) return;
      isTransitioningRef.current = true;

      const motionWrapper = imageMotionWrapperRef.current;
      const cardEl = cardInnerRef.current;
      const counterEl = counterRef.current;

      const tl = gsap.timeline({
        onComplete: () => {
          isTransitioningRef.current = false;
        },
      });

      // 1. Image Fade Cross-transition on Motion Wrapper
      if (motionWrapper) {
        tl.to(
          motionWrapper,
          {
            opacity: 0.15,
            scale: 0.98,
            duration: 0.3,
            ease: "power2.inOut",
            onComplete: () => {
              setSlideIdx(nextIdx);
            },
          },
          0
        ).to(
          motionWrapper,
          {
            opacity: 1,
            scale: 1,
            duration: 0.45,
            ease: "power3.out",
          },
          0.3
        );
      } else {
        setSlideIdx(nextIdx);
      }

      // 2. Card Content Slide & Fade
      if (cardEl) {
        tl.fromTo(
          cardEl.children,
          { opacity: 0.3, y: 12 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: "power3.out" },
          0.3
        );
      }

      // 3. Counter Number Flip
      if (counterEl) {
        tl.fromTo(
          counterEl,
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
          0.25
        );
      }
    },
    [slideIdx]
  );

  const handleNext = useCallback(() => {
    const next = (slideIdx + 1) % totalSlides;
    transitionToSlide(next);
  }, [slideIdx, totalSlides, transitionToSlide]);

  const handlePrev = useCallback(() => {
    const prev = (slideIdx - 1 + totalSlides) % totalSlides;
    transitionToSlide(prev);
  }, [slideIdx, totalSlides, transitionToSlide]);

  // ── Auto-slide timer ──
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, AUTO_SLIDE_MS);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // ── Master ScrollTrigger Entrance & Ambient GSAP Animations ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Watermark parallax
      gsap.to(watermarkRef.current, {
        y: -40,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // 2. Continuous slow rotation of badge dashed ring
      if (badgeRotatingRingRef.current) {
        gsap.to(badgeRotatingRingRef.current, {
          rotation: 360,
          repeat: -1,
          duration: 22,
          ease: "none",
        });
      }

      // 3. Subtle floating levitation on the dark card
      if (cardWrapperRef.current) {
        gsap.to(cardWrapperRef.current, {
          y: "-=7",
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // 4. Main ScrollTrigger Entrance Timeline
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          end: "bottom 18%",
          toggleActions: "restart reset restart reset",
        },
      });

      // Eyebrow
      masterTl
        .fromTo(
          eyebrowLineRef.current,
          { width: 0 },
          { width: 36, duration: 0.6, ease: "power3.out" }
        )
        .from(
          eyebrowTextRef.current,
          { opacity: 0, x: -15, duration: 0.5, ease: "power2.out" },
          "-=0.4"
        )
        // Headline Masked Reveal
        .from(
          [headlineLine1Ref.current, headlineLine2Ref.current],
          {
            y: 45,
            opacity: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.3"
        )
        // Body Paragraphs
        .from(
          bodyTextRef.current ? bodyTextRef.current.children : [],
          {
            y: 20,
            opacity: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        // Feature Pillars
        .from(
          pillarsRef.current ? pillarsRef.current.children : [],
          {
            scale: 0.8,
            y: 15,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "back.out(1.5)",
          },
          "-=0.3"
        )
        // Quote
        .from(
          quoteRef.current,
          {
            x: -25,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        )
        // CTA & Brands
        .fromTo(
          ctaBrandsRef.current ? ctaBrandsRef.current.children : [],
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "all",
          },
          "-=0.3"
        )
        // Dark Navy Arch Portal
        .from(
          navyArchRef.current,
          {
            scale: 0.82,
            rotation: -14,
            opacity: 0,
            duration: 1.1,
            ease: "power3.out",
          },
          0.2
        )
        // Main Photo Frame
        .from(
          photoFrameRef.current,
          {
            scale: 1.08,
            opacity: 0,
            duration: 1.1,
            ease: "expo.out",
          },
          0.35
        )
        // Floating Card 3D Settle
        .from(
          cardWrapperRef.current,
          {
            x: -40,
            y: 30,
            opacity: 0,
            duration: 0.85,
            ease: "back.out(1.4)",
          },
          0.6
        )
        // Right Sidebar Navigation
        .from(
          rightSidebarRef.current ? rightSidebarRef.current.children : [],
          {
            x: 25,
            opacity: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power3.out",
          },
          0.6
        )
        // Circular Badge Pop-in
        .from(
          badgeRef.current,
          {
            scale: 0,
            rotation: -75,
            opacity: 0,
            duration: 0.75,
            ease: "back.out(1.7)",
          },
          0.75
        );
    }, sectionRef);

    ScrollTrigger.refresh();
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative w-full bg-[#FAF7F2] py-8 sm:py-10 lg:py-14 overflow-hidden select-none"
    >
      {/* ── Giant Background Watermark "25" ── */}
      <div
        ref={watermarkRef}
        className="pointer-events-none absolute left-[28%] sm:left-[32%] lg:left-[35%] top-[1%] z-0 select-none opacity-[0.07] text-[#A67C38] font-serif-luxury font-normal italic text-[160px] sm:text-[210px] lg:text-[260px] leading-none tracking-tighter"
        aria-hidden="true"
      >
        25
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1520px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* ============================================================ */}
          {/* LEFT COLUMN: Narrative, Pillars & Official Brand Logos       */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 xl:col-span-5 z-10 pr-0 lg:pr-4 flex flex-col justify-center">
            {/* Top Eyebrow */}
            <div className="flex items-center gap-2.5 mb-2.5">
              <div
                ref={eyebrowLineRef}
                className="h-[2px] bg-[#C6963F]"
                style={{ width: "36px" }}
              />
              <span
                ref={eyebrowTextRef}
                className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#B88736]"
              >
                Our Story &amp; Heritage
              </span>
            </div>

            {/* Headline with Masked Lines */}
            <h2 className="font-serif-luxury text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.08] tracking-tight mb-3.5 normal-case">
              <div className="overflow-hidden">
                <span
                  ref={headlineLine1Ref}
                  className="block font-bold text-[#0E1A30]"
                >
                  25 years of trust,
                </span>
              </div>
              <div className="overflow-hidden">
                <span
                  ref={headlineLine2Ref}
                  className="block italic text-[#B38338] font-normal mt-0.5"
                >
                  one season at a time.
                </span>
              </div>
            </h2>

            {/* Body Paragraphs */}
            <div
              ref={bodyTextRef}
              className="space-y-2 mb-4 text-[#5A554A] font-sans text-xs sm:text-[12.5px] leading-[1.65] max-w-xl"
            >
              <p>
                Established in 1999 by Rajesh and Mukesh Parekh, Onzone began
                with a single, unwavering ambition — to create men&apos;s
                clothing that retailers could rely on, season after season.
              </p>
              <p>
                From formal shirts to trousers, smart casuals, denims, pyjamas
                and cargos — every addition is shaped by retailer feedback and
                25 years of quiet shop-floor insight.
              </p>
            </div>

            {/* 4 Feature Badges in a Row */}
            <div className="relative mb-4 max-w-md sm:max-w-lg">
              {/* Subtle background dot matrix decorative motif */}
              <div
                className="absolute -right-3 -bottom-2 w-16 h-10 opacity-35 pointer-events-none select-none"
                style={{
                  backgroundImage:
                    "radial-gradient(#C6963F 1.5px, transparent 1.5px)",
                  backgroundSize: "8px 8px",
                }}
                aria-hidden="true"
              />

              <div
                ref={pillarsRef}
                className="grid grid-cols-4 gap-2 sm:gap-3 relative z-10"
              >
                {featurePillars.map((pillar, i) => {
                  const IconComp = pillar.icon;
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center group cursor-default"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#C6963F]/45 bg-[#FAF7F2] flex items-center justify-center shadow-sm group-hover:border-[#C6963F] group-hover:scale-105 transition-all duration-300">
                        <IconComp className="w-4 h-4 text-[#B38338] stroke-[1.6]" />
                      </div>
                      <div className="mt-1.5 text-center">
                        <span className="block font-mono text-[8px] sm:text-[8.5px] font-bold tracking-[0.14em] uppercase text-[#615B4F] leading-tight">
                          {pillar.line1}
                        </span>
                        <span className="block font-mono text-[8px] sm:text-[8.5px] font-bold tracking-[0.14em] uppercase text-[#615B4F] leading-tight">
                          {pillar.line2}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quote Block with Gold Accent Bar */}
            <blockquote
              ref={quoteRef}
              className="border-l-2 border-[#C6963F] pl-3 py-0.5 mb-5 text-[#0E1A30] font-serif-luxury italic text-xs sm:text-[13px] font-medium tracking-[0.06em] uppercase"
            >
              “Retail quality and credibility — before promotion.”
            </blockquote>

            {/* Bottom Row: CTA Button + Our Brands */}
            <div
              ref={ctaBrandsRef}
              className="flex flex-wrap items-center gap-5 sm:gap-7 lg:gap-8 mt-2"
            >
              {/* Button */}
              <button
                type="button"
                onClick={() => navigate("/about")}
                className="inline-flex items-center gap-2.5 bg-[#0E1A30] text-[#FDFAF5] hover:bg-[#C6963F] hover:text-[#0E1A30] font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 shrink-0 cursor-pointer"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Our Brands Group */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 justify-center mb-1">
                  <span className="h-[1px] w-3.5 bg-[#C6963F]/40" />
                  <span className="font-mono text-[8.5px] sm:text-[9px] tracking-[0.2em] uppercase text-[#968D7D] font-medium">
                    Our Brands
                  </span>
                  <span className="h-[1px] w-3.5 bg-[#C6963F]/40" />
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* ONZONE Official Brand Logo */}
                  <div className="flex items-center select-none hover:scale-105 transition-transform duration-200">
                    <img
                      src="/assets/onzone-logo.png"
                      alt="ONZONE - Timeless Elegance"
                      className="h-7 sm:h-8 w-auto object-contain"
                    />
                  </div>

                  {/* Vertical Separator */}
                  <div className="w-[1px] h-6 sm:h-7 bg-[#C6963F]/30" />

                  {/* Scot Lee Official Brand Logo */}
                  <div className="flex items-center select-none hover:scale-105 transition-transform duration-200">
                    <img
                      src="/assets/scot-lee-logo.png"
                      alt="Scot Lee - Style On The Edge"
                      className="h-7 sm:h-8 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: The Complete Hero Architectural Composition    */}
          {/* ============================================================ */}
          <div
            className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0 lg:-translate-x-3 xl:-translate-x-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative w-full max-w-[490px] sm:max-w-[530px] lg:max-w-[570px] xl:max-w-[600px] flex items-center">
              {/* ── Outer Gold Curved Geometric Arc Behind Composition ── */}
              <div
                className="absolute -top-6 -right-6 w-[280px] h-[280px] rounded-full border border-[#C6963F]/35 pointer-events-none select-none z-0"
                aria-hidden="true"
              />
              <div
                className="absolute -top-3 right-16 w-32 h-[1px] bg-[#C6963F]/30 rotate-[24deg] pointer-events-none select-none z-0"
                aria-hidden="true"
              />

              {/* ── Layer 1: Dark Navy Arch Frame Sweeping from Top-Left ── */}
              <div
                ref={navyArchRef}
                className="absolute -left-5 sm:-left-8 lg:-left-12 top-[-6%] w-[260px] sm:w-[320px] lg:w-[350px] h-[360px] sm:h-[410px] lg:h-[460px] rounded-tl-[160px] sm:rounded-tl-[200px] lg:rounded-tl-[240px] rounded-bl-[160px] sm:rounded-bl-[200px] bg-[#0E1A30] shadow-2xl z-0 pointer-events-none"
                aria-hidden="true"
              >
                {/* Subtle inner gold arch accent line */}
                <div className="absolute inset-2 rounded-tl-[150px] sm:rounded-tl-[190px] lg:rounded-tl-[230px] rounded-bl-[150px] border border-[#C6963F]/20 pointer-events-none" />
              </div>

              {/* ── Layer 2: Main Arched Photo Portal ── */}
              <div
                ref={photoFrameRef}
                className="relative z-10 w-full h-[420px] sm:h-[460px] lg:h-[500px] rounded-tl-[140px] sm:rounded-tl-[170px] lg:rounded-tl-[210px] rounded-tr-[40px] rounded-b-[24px] overflow-hidden shadow-2xl bg-[#0E1A30] border border-[#C6963F]/45 ml-auto"
              >
                {/* Motion wrapper for smooth cross-fading */}
                <div
                  ref={imageMotionWrapperRef}
                  className="w-full h-full overflow-hidden flex items-center justify-center relative"
                >
                  <img
                    ref={currentImageRef}
                    key={activeSlide.id}
                    src={activeSlide.img}
                    alt={activeSlide.alt}
                    style={activeSlide.imageStyle}
                    onError={(e) => {
                      if (activeSlide.fallbackImg && e.target.src !== activeSlide.fallbackImg) {
                        e.target.src = activeSlide.fallbackImg;
                      }
                    }}
                    className="w-full h-full object-cover will-change-transform"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A30]/40 via-transparent to-transparent pointer-events-none" />

                {/* ── Layer 3: Architectural Right Sidebar (Vertical Tabs) ── */}
                <div
                  ref={rightSidebarRef}
                  className="absolute right-0 top-0 bottom-0 w-[82px] sm:w-[92px] lg:w-[100px] bg-[#FAF7F2]/90 backdrop-blur-md border-l border-[#C6963F]/35 z-20 flex flex-col justify-center py-6 px-2.5 sm:px-3"
                >
                  {/* Vertical Tabs List */}
                  <div className="flex flex-col gap-5 sm:gap-6">
                    {storySlides.map((slide, idx) => {
                      const isActive = idx === slideIdx;
                      return (
                        <button
                          key={slide.id}
                          onClick={() => transitionToSlide(idx)}
                          className={`group text-left transition-all duration-300 relative pl-2.5 sm:pl-3 py-1 cursor-pointer ${
                            isActive ? "opacity-100" : "opacity-45 hover:opacity-85"
                          }`}
                        >
                          {/* Active gold vertical bar indicator */}
                          {isActive && (
                            <span
                              ref={activeTabLineRef}
                              className="absolute left-0 top-1 bottom-1 w-[2.5px] bg-[#C6963F] rounded-full shadow-[0_0_8px_rgba(198,150,63,0.5)]"
                            />
                          )}
                          <span
                            className={`font-mono text-[8px] sm:text-[8.5px] uppercase tracking-[0.14em] block transition-colors leading-[1.3] whitespace-nowrap ${
                              isActive
                                ? "text-[#0E1A30] font-bold"
                                : "text-[#736B5E] font-medium group-hover:text-[#0E1A30]"
                            }`}
                          >
                            <span className="block">{slide.tabLine1}</span>
                            <span className="block mt-0.5">{slide.tabLine2}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* ── Layer 4: 3D Flip Dark Floating Card Overlapping Navy Arch ── */}
              <div
                ref={cardWrapperRef}
                className="absolute -left-6 sm:-left-10 lg:-left-16 top-[22%] sm:top-[24%] z-20"
                style={{ perspective: "1200px" }}
              >
                <div
                  ref={cardInnerRef}
                  className="w-[170px] sm:w-[195px] lg:w-[210px] bg-[#0E1A30] text-[#FDFAF5] rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-[0_24px_48px_-12px_rgba(14,26,48,0.7)] border border-white/10 select-none will-change-transform"
                >
                  {/* Store / Stat Icon in gold rounded square */}
                  <div className="w-8 h-8 rounded-lg bg-[#C6963F]/15 border border-[#C6963F]/35 flex items-center justify-center mb-2.5 shrink-0">
                    <activeSlide.statIcon className="w-4 h-4 text-[#E5B558]" />
                  </div>

                  {/* Big Number */}
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#E5B558] tracking-tight">
                    {activeSlide.statNumber}
                  </h3>

                  {/* Subtitle */}
                  <p className="font-mono text-[8px] sm:text-[8.5px] uppercase tracking-[0.18em] text-[#E8D4B4] mt-0.5 font-bold">
                    {activeSlide.statTitle}
                  </p>

                  {/* Divider Rule */}
                  <div className="w-7 h-[1.5px] bg-[#C6963F]/60 my-2.5" />

                  {/* Description */}
                  <p className="font-sans text-[10px] sm:text-[10.5px] text-[#D2C8BA] leading-[1.6]">
                    {activeSlide.statDesc}
                  </p>
                </div>
              </div>

              {/* ── Layer 5: Bottom Right Circular Badge ("STYLES THAT MOVE WITH YOU") ── */}
              <div
                ref={badgeRef}
                className="absolute right-0 sm:right-1 -bottom-4 sm:-bottom-5 z-30 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0E1A30] shadow-[0_16px_36px_rgba(0,0,0,0.45)] border border-[#C6963F]/55 flex items-center justify-center p-2 group cursor-default"
              >
                {/* Rotating accent dashed ring */}
                <div
                  ref={badgeRotatingRingRef}
                  className="absolute inset-1.5 rounded-full border border-dashed border-[#C6963F]/45 pointer-events-none"
                />

                <div className="relative z-10 text-center flex flex-col items-center justify-center leading-tight">
                  <span className="font-mono text-[7px] sm:text-[7.5px] font-bold uppercase tracking-[0.18em] text-[#E5B558] block">
                    STYLES
                  </span>
                  <span className="font-mono text-[7px] sm:text-[7.5px] font-bold uppercase tracking-[0.18em] text-[#E5B558] block">
                    THAT
                  </span>
                  <span className="font-mono text-[7px] sm:text-[7.5px] font-bold uppercase tracking-[0.18em] text-[#E5B558] block">
                    MOVE
                  </span>
                  <span className="font-mono text-[7px] sm:text-[7.5px] font-bold uppercase tracking-[0.18em] text-[#E5B558] block">
                    WITH
                  </span>
                  <span className="font-mono text-[7px] sm:text-[7.5px] font-bold uppercase tracking-[0.18em] text-[#E5B558] block">
                    YOU
                  </span>
                  <span className="block text-[#E5B558] text-[7.5px] mt-0.5 font-sans">
                    —
                  </span>
                </div>
              </div>

              {/* Decorative Dot Matrix in Bottom-Right Corner */}
              <div
                className="absolute -right-2 -bottom-4 w-16 h-14 opacity-25 pointer-events-none select-none z-0"
                style={{
                  backgroundImage:
                    "radial-gradient(#C6963F 1.5px, transparent 1.5px)",
                  backgroundSize: "8px 8px",
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
