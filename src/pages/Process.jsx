import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  Scissors,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Eye,
  Sliders,
  Maximize2,
  RefreshCw,
  Compass,
  Boxes,
  Clock,
  Store,
  Check,
  X,
  Flame,
  Truck,
  ZoomIn,
  Shirt,
  UserCheck
} from "lucide-react";
import { img } from "../lib/utils.js";
import MacroMagnifierImage from "../components/MacroMagnifierImage";

gsap.registerPlugin(ScrollTrigger);

// 6 Master Sartorial Craft Stages with Multi-Angle Thumbnails & Architectural Diagrams
const craftStages = [
  {
    step: "01",
    tag: "FIBER ARCHITECTURE",
    eyebrow: "CERTIFIED EXTRA-LONG STAPLE COTTON & NORMANDY FLAX",
    title: "RAW FIBER & GIZA WEAVE",
    desc: "Sourced from Egyptian Nile Delta Giza 87 harvests. Two-ply compact yarns twisted to eliminate surface fuzz and guarantee permanent silk-like luster through hundreds of wears.",
    img: img("img_1.jpeg"),
    thumbnails: [
      img("img_1.jpeg"),
      img("img_2.jpeg"),
      img("img_7.jpeg"),
      img("img_8.jpeg"),
    ],
    hotspots: [
      { x: 32, y: 38, title: "Two-Ply Compact Warp", desc: "Doubled yarns twisted tightly to prevent fuzzing and fabric fatigue." },
      { x: 68, y: 62, title: "Lustrous Twill Weave", desc: "45-degree micro-twill gives rich optical depth and natural wrinkle recovery." }
    ],
    metrics: [
      {
        val: "120s / 2",
        label: "COMPACT YARN",
        svg: (
          <svg viewBox="0 0 100 60" className="w-full h-14 stroke-[#C6963F] fill-none stroke-[1.5]">
            <path d="M10 30 Q 30 10, 50 30 T 90 30" />
            <path d="M10 30 Q 30 50, 50 30 T 90 30" strokeDasharray="3 3" />
            <circle cx="50" cy="30" r="3" fill="#C6963F" />
          </svg>
        )
      },
      {
        val: "350 N",
        label: "TENSILE STRENGTH",
        svg: (
          <svg viewBox="0 0 100 60" className="w-full h-14 stroke-[#C6963F] fill-none stroke-[1.5]">
            <rect x="20" y="15" width="60" height="30" rx="3" strokeDasharray="4 4" />
            <line x1="10" y1="30" x2="20" y2="30" markerEnd="url(#arrow)" />
            <line x1="90" y1="30" x2="80" y2="30" markerEnd="url(#arrow)" />
            <line x1="50" y1="5" x2="50" y2="15" />
            <line x1="50" y1="55" x2="50" y2="45" />
            <circle cx="50" cy="30" r="2.5" fill="#C6963F" />
          </svg>
        )
      },
      {
        val: "100%",
        label: "ELS GIZA 87",
        svg: (
          <svg viewBox="0 0 100 60" className="w-full h-14 stroke-[#C6963F] fill-none stroke-[1.5]">
            <circle cx="50" cy="30" r="14" />
            <path d="M50 16 Q 40 25, 50 34 Q 60 43, 50 52" />
            <path d="M38 24 Q 50 30, 62 36" />
          </svg>
        )
      }
    ],
    specs: [
      { label: "FIBER PROVENANCE", val: "100% Certified Egyptian Giza & French Flax", icon: Sparkles },
      { label: "SPINNING METHOD", val: "Two-Ply Compact High-Twist (Zero Pilling)", icon: Layers },
      { label: "SURFACE FINISH", val: "Liquid Ammonia Silk Hand-Feel", icon: Award },
    ]
  },
  {
    step: "02",
    tag: "3D ANATOMICAL DRAFTING",
    eyebrow: "ARCHITECTED SPECIFICALLY FOR THE INDIAN MALE POSTURE",
    title: "3D ANATOMICAL DRAFTING",
    desc: "Engineered back-yoke contour and forward armhole pitch eliminate chest gaping with full 180° mobility. Designed using Indian posture data for a naturally balanced fit.",
    img: img("img_3.jpeg"),
    thumbnails: [
      img("img_3.jpeg"),
      img("img_4.jpeg"),
      img("img_5.jpeg"),
      img("img_1.jpeg"),
    ],
    hotspots: [
      { x: 48, y: 28, title: "Forward Clavicle Slope", desc: "14-degree shoulder pitch eliminates bunching along the collarbone." },
      { x: 62, y: 55, title: "Contoured Torso Taper", desc: "Subtle back darts eliminate boxy excess fabric around the lower lumbar." }
    ],
    metrics: [
      {
        val: "14°",
        label: "SHOULDER PITCH",
        svg: (
          <svg viewBox="0 0 100 60" className="w-full h-14 stroke-[#C6963F] fill-none stroke-[1.5]">
            {/* Collar & Shoulder Slope */}
            <path d="M30 45 L50 20 L85 30" />
            <path d="M50 20 L50 48" strokeDasharray="3 3" opacity="0.6" />
            <path d="M65 24.5 A 16 16 0 0 1 68 31" />
            <circle cx="50" cy="20" r="2.5" fill="#C6963F" />
          </svg>
        )
      },
      {
        val: "3.5 CM",
        label: "SCYE DEPTH",
        svg: (
          <svg viewBox="0 0 100 60" className="w-full h-14 stroke-[#C6963F] fill-none stroke-[1.5]">
            {/* Torso Silhouette */}
            <path d="M35 15 C42 12, 58 12, 65 15 L62 50 C55 52, 45 52, 38 50 Z" />
            <line x1="38" y1="30" x2="62" y2="30" strokeDasharray="2 2" opacity="0.7" />
            <line x1="42" y1="40" x2="58" y2="40" strokeDasharray="2 2" opacity="0.7" />
          </svg>
        )
      },
      {
        val: "180°",
        label: "FULL ARM MOBILITY",
        svg: (
          <svg viewBox="0 0 100 60" className="w-full h-14 stroke-[#C6963F] fill-none stroke-[1.5]">
            {/* Outstretched Arms 180 Arc */}
            <circle cx="50" cy="20" r="4" fill="#C6963F" />
            <path d="M50 24 L50 45" />
            <path d="M20 30 L50 26 L80 30" />
            <path d="M15 32 Q 50 52, 85 32" strokeDasharray="3 3" />
          </svg>
        )
      }
    ],
    specs: [
      { label: "VALUE ARCHITECTURE", val: "Split-Yoke Cut at 45° Bias", icon: Layers },
      { label: "TORSO PROPORTION", val: "Indian Posture Athletic Taper", icon: UserCheck },
      { label: "COLLAR BALANCE", val: "Zero-Pull Ergonomic Neck Stance", icon: Shirt },
    ]
  },
  {
    step: "03",
    tag: "PRECISION CUTTING",
    eyebrow: "COMPUTERIZED OPTICAL SENSOR ALIGNMENT",
    title: "OPTICAL LASER PATTERN MATCH",
    desc: "Checks and micro-stripes cut with high-precision optical cameras. Guarantees 0.5mm symmetrical continuity from the split-yoke through the front placket and directly into the breast pocket.",
    img: img("img_5.jpeg"),
    thumbnails: [
      img("img_5.jpeg"),
      img("img_1.jpeg"),
      img("img_3.jpeg"),
      img("img_8.jpeg"),
    ],
    hotspots: [
      { x: 38, y: 45, title: "Placket Pattern Match", desc: "Stripes continue uninterrupted through the folded button placket." },
      { x: 65, y: 30, title: "Split-Yoke Chevron", desc: "Bias cut allows fabric to stretch naturally across the shoulder blades." }
    ],
    metrics: [
      {
        val: "±0.5 MM",
        label: "PATTERN TOLERANCE",
        svg: (
          <svg viewBox="0 0 100 60" className="w-full h-14 stroke-[#C6963F] fill-none stroke-[1.5]">
            {/* Crosshair Target */}
            <circle cx="50" cy="30" r="16" />
            <line x1="26" y1="30" x2="74" y2="30" />
            <line x1="50" y1="6" x2="50" y2="54" />
            <circle cx="50" cy="30" r="2.5" fill="#C6963F" />
          </svg>
        )
      },
      {
        val: "100%",
        label: "CONTINUOUS STRIPE",
        svg: (
          <svg viewBox="0 0 100 60" className="w-full h-14 stroke-[#C6963F] fill-none stroke-[1.5]">
            {/* Parallel Continuous Stripe Lines */}
            <line x1="20" y1="15" x2="80" y2="15" />
            <line x1="20" y1="27" x2="80" y2="27" />
            <line x1="20" y1="39" x2="80" y2="39" />
            <line x1="20" y1="51" x2="80" y2="51" />
            <rect x="42" y="10" width="16" height="45" strokeDasharray="3 3" opacity="0.6" />
          </svg>
        )
      },
      {
        val: "45°",
        label: "CHEVRON SYMMETRY",
        svg: (
          <svg viewBox="0 0 100 60" className="w-full h-14 stroke-[#C6963F] fill-none stroke-[1.5]">
            {/* V-Chevron Pattern */}
            <path d="M20 20 L50 38 L80 20" />
            <path d="M20 30 L50 48 L80 30" />
            <line x1="50" y1="10" x2="50" y2="52" strokeDasharray="2 2" opacity="0.7" />
          </svg>
        )
      }
    ],
    specs: [
      { label: "CUTTING TECHNOLOGY", val: "Optical Laser Sensor Bed", icon: Maximize2 },
      { label: "POCKET INTEGRATION", val: "100% Invisible Motif Alignment", icon: Layers },
      { label: "COLLAR LEAF FLOW", val: "Symmetrical Left-Right Balance", icon: Compass },
    ]
  },
  {
    step: "04",
    tag: "FUSING TECHNOLOGY",
    eyebrow: "WENDLER GERMAN MICROFIBER INTERLINING",
    title: "140°C CALIBRATED COLLAR FUSION",
    desc: "Pneumatic multi-zone rollers fuse German Wendler interlining at 140°C under 3.5 bar pressure. Guarantees an architectural collar roll that will never bubble, wilt, or separate after 100+ dry cleans.",
    img: img("img_6.jpeg"),
    thumbnails: [
      img("img_6.jpeg"),
      img("img_9.jpeg"),
      img("img_1.jpeg"),
      "/assets/formal.png",
    ],
    hotspots: [
      { x: 50, y: 28, title: "Architectural Collar Roll", desc: "Curved collar leaf stays upright under neckties or jacket lapels." },
      { x: 75, y: 40, title: "Brass Stays Chamber", desc: "Reinforced stitched pockets housing removable shape-retaining stays." }
    ],
    metrics: [
      {
        val: "140°C",
        label: "FUSION TEMPERATURE",
        svg: (
          <svg viewBox="0 0 100 60" className="w-full h-14 stroke-[#C6963F] fill-none stroke-[1.5]">
            {/* Thermometer / Gauge */}
            <path d="M48 10 L52 10 L52 35 A 8 8 0 1 1 48 35 Z" />
            <circle cx="50" cy="42" r="5" fill="#C6963F" />
            <line x1="58" y1="18" x2="64" y2="18" />
            <line x1="58" y1="26" x2="64" y2="26" />
          </svg>
        )
      },
      {
        val: "3.5 BAR",
        label: "PNEUMATIC ROLLER",
        svg: (
          <svg viewBox="0 0 100 60" className="w-full h-14 stroke-[#C6963F] fill-none stroke-[1.5]">
            {/* Dual Roller Compression */}
            <circle cx="50" cy="18" r="10" />
            <circle cx="50" cy="42" r="10" />
            <line x1="20" y1="30" x2="80" y2="30" strokeDasharray="3 3" />
            <circle cx="50" cy="18" r="2.5" fill="#C6963F" />
            <circle cx="50" cy="42" r="2.5" fill="#C6963F" />
          </svg>
        )
      },
      {
        val: "100+",
        label: "ZERO-BUBBLE WASHES",
        svg: (
          <svg viewBox="0 0 100 60" className="w-full h-14 stroke-[#C6963F] fill-none stroke-[1.5]">
            {/* Collar Curve Leaf */}
            <path d="M20 35 C35 15, 65 15, 80 35 C65 25, 35 25, 20 35 Z" fill="#C6963F" fillOpacity="0.2" />
            <circle cx="50" cy="22" r="3" fill="#C6963F" />
          </svg>
        )
      }
    ],
    specs: [
      { label: "INTERLINING GRADE", val: "Wendler (Baden-Württemberg, Germany)", icon: ShieldCheck },
      { label: "COLLAR STAYS", val: "Removable Solid Brass Collar Bones", icon: Award },
      { label: "TIE ARCHITECTURE", val: "Permanent 3D Tie Space Spread", icon: Shirt },
    ]
  },
  {
    step: "05",
    tag: "SARTORIAL TAILORING",
    eyebrow: "SAVILE ROW 20 STITCHES PER INCH DISCIPLINE",
    title: "SINGLE-NEEDLE LOCKSTITCH",
    desc: "Crafted exclusively on high-precision single-needle lockstitch machines at 20 SPI — double commercial density. Ultra-narrow 4mm French seams leave zero raw overlock edges inside the garment.",
    img: img("img_11.jpeg"),
    thumbnails: [
      img("img_11.jpeg"),
      img("img_12.jpeg"),
      img("img_6.jpeg"),
      img("img_7.jpeg"),
    ],
    hotspots: [
      { x: 30, y: 60, title: "20 SPI Micro-Lockstitch", desc: "Double the thread density of commercial shirts for puck-free elegance." },
      { x: 55, y: 82, title: "Side-Hem Gusset", desc: "Reinforced pentagon prevents hem blowout during high movement." }
    ],
    metrics: [
      {
        val: "20 SPI",
        label: "STITCH DENSITY",
        svg: (
          <svg viewBox="0 0 100 60" className="w-full h-14 stroke-[#C6963F] fill-none stroke-[1.5]">
            {/* Dense Lockstitch Line */}
            <line x1="15" y1="30" x2="85" y2="30" strokeDasharray="2 3" strokeWidth="2.5" />
            <line x1="15" y1="20" x2="85" y2="20" strokeDasharray="6 6" opacity="0.4" />
            <text x="50" y="48" fill="#C6963F" fontSize="8" textAnchor="middle" fontFamily="monospace">MICRO DENSITY</text>
          </svg>
        )
      },
      {
        val: "4 MM",
        label: "FRENCH SEAM",
        svg: (
          <svg viewBox="0 0 100 60" className="w-full h-14 stroke-[#C6963F] fill-none stroke-[1.5]">
            {/* French Seam Fold Cross-Section */}
            <path d="M25 35 Q 40 20, 50 20 Q 60 20, 75 35" />
            <path d="M30 40 Q 45 27, 50 27 Q 55 27, 70 40" strokeDasharray="2 2" />
            <circle cx="50" cy="20" r="2.5" fill="#C6963F" />
          </svg>
        )
      },
      {
        val: "5-POINT",
        label: "HEM GUSSET",
        svg: (
          <svg viewBox="0 0 100 60" className="w-full h-14 stroke-[#C6963F] fill-none stroke-[1.5]">
            {/* Pentagon Reinforcing Gusset */}
            <polygon points="50,15 75,28 65,48 35,48 25,28" />
            <circle cx="50" cy="32" r="3" fill="#C6963F" />
          </svg>
        )
      }
    ],
    specs: [
      { label: "STITCH DISCIPLINE", val: "Savile Row Single-Needle Standard", icon: Scissors },
      { label: "INTERNAL FINISH", val: "100% Clean Enclosed French Seams", icon: Layers },
      { label: "HEM SHIELD", val: "Pentagonal Reinforcing Side Gusset", icon: ShieldCheck },
    ]
  },
  {
    step: "06",
    tag: "SHANK & QUALITY AUDIT",
    eyebrow: "ASCOLITE SWISS ELASTIC HEAT-SEAL TECHNOLOGY",
    title: "TROCAS BUTTONS & 7-POINT AUDIT",
    desc: "Genuine natural Trocas shell buttons cross-locked and thermally sealed with Swiss Ascolite elastic thread. Tested to 10kg pull-tension so buttons never pop off, followed by 100% illuminated light-table inspection.",
    img: img("img_13.jpeg"),
    thumbnails: [
      img("img_13.jpeg"),
      img("img_12.jpeg"),
      img("img_6.jpeg"),
      "/assets/formal.png",
    ],
    hotspots: [
      { x: 42, y: 48, title: "Ascolite Shank Wrapping", desc: "Creates 2mm stem height for smooth buttoning without cloth stress." },
      { x: 68, y: 72, title: "Light-Table Audit", desc: "Every millimeter inspected for tension, seam straightness, and loose threads." }
    ],
    metrics: [
      {
        val: "10 KG",
        label: "PULL RESISTANCE",
        svg: (
          <svg viewBox="0 0 100 60" className="w-full h-14 stroke-[#C6963F] fill-none stroke-[1.5]">
            {/* Button Tension Pull Test */}
            <circle cx="50" cy="22" r="12" />
            <circle cx="46" cy="20" r="1.5" fill="#C6963F" />
            <circle cx="54" cy="20" r="1.5" fill="#C6963F" />
            <circle cx="46" cy="24" r="1.5" fill="#C6963F" />
            <circle cx="54" cy="24" r="1.5" fill="#C6963F" />
            <line x1="50" y1="34" x2="50" y2="52" markerEnd="url(#arrow)" strokeWidth="2" />
          </svg>
        )
      },
      {
        val: "2 MM",
        label: "ELEVATED SHANK",
        svg: (
          <svg viewBox="0 0 100 60" className="w-full h-14 stroke-[#C6963F] fill-none stroke-[1.5]">
            {/* Elevated Button Stem */}
            <rect x="35" y="15" width="30" height="6" rx="2" />
            <rect x="46" y="21" width="8" height="14" fill="#C6963F" fillOpacity="0.4" />
            <line x1="25" y1="35" x2="75" y2="35" strokeWidth="2" />
            <line x1="58" y1="21" x2="58" y2="35" strokeDasharray="2 2" />
          </svg>
        )
      },
      {
        val: "7-POINT",
        label: "LIGHT AUDIT",
        svg: (
          <svg viewBox="0 0 100 60" className="w-full h-14 stroke-[#C6963F] fill-none stroke-[1.5]">
            {/* Illuminated Light Inspection Rays */}
            <rect x="25" y="42" width="50" height="6" rx="2" fill="#C6963F" fillOpacity="0.3" />
            <line x1="30" y1="40" x2="35" y2="15" strokeDasharray="3 3" opacity="0.7" />
            <line x1="50" y1="40" x2="50" y2="12" strokeDasharray="3 3" />
            <line x1="70" y1="40" x2="65" y2="15" strokeDasharray="3 3" opacity="0.7" />
            <circle cx="50" cy="22" r="3" fill="#C6963F" />
          </svg>
        )
      }
    ],
    specs: [
      { label: "BUTTON MATERIAL", val: "100% Genuine Natural Trocas Shell", icon: Sparkles },
      { label: "SHANK WRAPPING", val: "Ascolite Swiss Thermal Heat-Seal", icon: Award },
      { label: "QUALITY AUDIT", val: "7-Stage 100% Illuminated Inspection", icon: Eye },
    ]
  }
];

const Process = () => {
  const [activeStage, setActiveStage] = useState(1); // Default to Stage 02 as in reference image
  const [activeThumb, setActiveThumb] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);

  // GSAP animation refs
  const heroRef = useRef(null);
  const stageCardRef = useRef(null);

  // Continuous auto-move timer: automatically advances every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % craftStages.length);
      setActiveThumb(0);
      setActiveHotspot(null);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  // Reset active thumbnail when stage changes
  useEffect(() => {
    setActiveThumb(0);
    setActiveHotspot(null);
  }, [activeStage]);

  // Card entrance transition on stage change
  useEffect(() => {
    if (stageCardRef.current) {
      gsap.fromTo(
        stageCardRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
      );
    }
  }, [activeStage]);

  const currentStage = craftStages[activeStage];
  const currentImg = currentStage.thumbnails[activeThumb] || currentStage.img;

  const nextStage = () => {
    setActiveStage((prev) => (prev + 1) % craftStages.length);
  };

  const prevStage = () => {
    setActiveStage((prev) => (prev > 0 ? prev - 1 : craftStages.length - 1));
  };

  return (
    <div className="bg-[#0A0D14] text-[#FDFAF5] min-h-screen selection:bg-[#C6963F] selection:text-[#0A0D14] overflow-hidden">
      {/* ===== INDIAN TRICOLOR LUXURY ACCENT BAR ===== */}
      <div className="w-full h-1 bg-gradient-to-r from-[#FF9933]/90 via-[#FDFAF5]/80 to-[#138808]/90" />

      {/* =========================================================================
          SECTION: INSIDE THE 6 STAGES OF MASTERY
          Exact architectural replica of the attached reference design
          ========================================================================= */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-gradient-to-b from-[#0A0D14] via-[#0D111A] to-[#0A0D14]">
        {/* Subtle Luxury Golden Ribbon Background Flares */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C6963F]/8 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C6963F]/6 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-[1380px] mx-auto relative z-10">
          {/* ══════════════════════════════════════════════════════════
              1. SECTION HEADER WITH STEPPER CONTROLS (AUTO-MOVE CONTINUOUS)
          ══════════════════════════════════════════════════════════ */}
          <div
            className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-5"
            data-aos="fade-up"
          >
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-8 h-[2px] bg-[#C6963F]" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C6963F] font-bold">
                  INTERACTIVE ATELIER
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif-luxury font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-tight text-white tracking-wide">
                INSIDE THE 6 STAGES OF{" "}
                <span className="text-[#C6963F] italic font-serif">MASTERY</span>
              </h1>

              <p className="text-white/60 text-xs sm:text-sm mt-2 max-w-2xl font-light">
                From architectural fiber selection to final quality inspection — discover how precision becomes craftsmanship.
              </p>
            </div>

            {/* Top Right Controls (Stepper Only, Auto-Move is continuous) */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Stepper Pill */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-white/5 font-mono text-xs">
                <button
                  onClick={prevStage}
                  className="text-white/60 hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous Stage"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-white font-bold tracking-widest text-xs">
                  <span className="text-[#C6963F]">0{activeStage + 1}</span> / 0{craftStages.length}
                </span>
                <button
                  onClick={nextStage}
                  className="text-white/60 hover:text-white transition-colors cursor-pointer"
                  aria-label="Next Stage"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              2. CONTINUOUS CONNECTING TIMELINE STEPPER
          ══════════════════════════════════════════════════════════ */}
          <div
            className="relative mb-12 sm:mb-16 pt-2 pb-6 border-b border-white/10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* The Horizontal Track Line */}
            <div className="absolute top-[38px] left-[4%] right-[4%] h-[1px] bg-white/15 hidden sm:block pointer-events-none" />

            <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 sm:gap-2 relative z-10">
              {craftStages.map((stage, idx) => {
                const isActive = activeStage === idx;
                return (
                  <button
                    key={stage.step}
                    onClick={() => setActiveStage(idx)}
                    className="text-center group focus:outline-none cursor-pointer flex flex-col items-center"
                  >
                    {/* Step Number with Glowing Active Circle */}
                    <div className="relative mb-2.5 flex items-center justify-center">
                      {isActive ? (
                        <div className="w-10 h-10 rounded-full border-2 border-[#C6963F] bg-[#0A0D14] flex items-center justify-center shadow-[0_0_20px_rgba(198,150,63,0.5)] z-20">
                          <span className="font-serif-luxury text-base font-bold text-[#C6963F]">
                            {stage.step}
                          </span>
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full border border-white/20 bg-[#0A0D14] flex items-center justify-center group-hover:border-[#C6963F]/60 transition-colors z-20">
                          <span className="font-serif-luxury text-xs text-white/50 group-hover:text-white">
                            {stage.step}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Timeline Node Point (on track line) */}
                    <div className="hidden sm:flex items-center justify-center mb-2">
                      <div
                        className={`w-2 h-2 rounded-full transition-all ${
                          isActive
                            ? "bg-[#C6963F] ring-4 ring-[#C6963F]/30 scale-125"
                            : "bg-white/20 group-hover:bg-white/50"
                        }`}
                      />
                    </div>

                    {/* Label */}
                    <div
                      className={`font-mono text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-colors max-w-[120px] ${
                        isActive
                          ? "text-[#C6963F] font-bold"
                          : "text-white/40 group-hover:text-white/80"
                      }`}
                    >
                      {stage.tag}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              3. MAIN DISPLAY: LEFT CARD + RIGHT ARCHITECTURAL SPECS
          ══════════════════════════════════════════════════════════ */}
          <div
            ref={stageCardRef}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* ──────────────────────────────────────────────────────────
                LEFT COLUMN: GOLD-BORDERED INTERACTIVE IMAGE CARD
            ────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-6" data-aos="fade-right">
              <div className="relative rounded-3xl p-2.5 sm:p-3.5 border-2 border-[#C6963F]/80 shadow-[0_0_40px_rgba(198,150,63,0.25)] bg-gradient-to-b from-[#131926] via-[#0E1522] to-[#0A0E17]">
                {/* Main Interactive Photo with Macro Magnifier Lens */}
                <MacroMagnifierImage
                  src={currentImg}
                  alt={currentStage.title}
                  lensSize={180}
                  badgeText="1.5X LENS"
                  showHint={false}
                  className="rounded-2xl aspect-[4/3] sm:aspect-[16/11] bg-black/50"
                  imgClassName="object-cover object-center"
                >
                  {/* Subtle Contrast Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Top-Left Glassmorphic Badge: STAGE 0X / 06 */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-2 pointer-events-none z-10">
                    <span className="w-2 h-2 rounded-full bg-[#C6963F] animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#FDFAF5] font-bold">
                      STAGE {currentStage.step} / 06
                    </span>
                  </div>

                  {/* Interactive Hotspot Pin on the Garment */}
                  {currentStage.hotspots.map((hotspot, hIdx) => (
                    <div
                      key={hIdx}
                      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveHotspot(activeHotspot === hIdx ? null : hIdx);
                      }}
                    >
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-8 h-8 rounded-full bg-[#C6963F]/40 animate-ping" />
                        <button
                          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                            activeHotspot === hIdx
                              ? "bg-[#C6963F] border-white text-black scale-125 shadow-[0_0_20px_#C6963F]"
                              : "bg-black/90 border-[#C6963F] text-[#C6963F] hover:scale-115"
                          }`}
                          aria-label={`Inspect ${hotspot.title}`}
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Hotspot Floating Tooltip */}
                      {activeHotspot === hIdx && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 sm:w-64 p-3.5 rounded-xl bg-[#0E1A30]/95 border border-[#C6963F]/60 backdrop-blur-xl shadow-2xl text-left z-30 animate-in fade-in zoom-in-95 duration-200">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-mono text-[10px] text-[#C6963F] uppercase tracking-wider font-bold">
                              MACRO DETAIL
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveHotspot(null);
                              }}
                              className="text-white/60 hover:text-white"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                          <h5 className="font-semibold text-white text-xs mb-1">
                            {hotspot.title}
                          </h5>
                          <p className="text-white/70 text-[11px] leading-relaxed">
                            {hotspot.desc}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Bottom Controls Bar (Inside Image Card) */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-auto">
                    {/* Bottom-Left: "Tap to explore detail view" Pill */}
                    <div className="bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-[11px] font-mono text-white/80 flex items-center gap-2 pointer-events-none">
                      <ZoomIn className="w-3.5 h-3.5 text-[#C6963F]" />
                      <span>Hover for 1.5x lens</span>
                    </div>

                    {/* Bottom-Right: 4 Multi-Angle Interactive Thumbnails Bar */}
                    <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/80 backdrop-blur-md border border-white/20">
                      {currentStage.thumbnails.map((thumbUrl, tIdx) => (
                        <button
                          key={tIdx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveThumb(tIdx);
                          }}
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                            activeThumb === tIdx
                              ? "border-[#C6963F] scale-105 shadow-[0_0_12px_rgba(198,150,63,0.6)]"
                              : "border-transparent opacity-60 hover:opacity-100 hover:border-white/40"
                          }`}
                        >
                          <img
                            src={thumbUrl}
                            alt={`Angle 0${tIdx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </MacroMagnifierImage>
              </div>
            </div>

            {/* ──────────────────────────────────────────────────────────
                RIGHT COLUMN: EDITORIAL NARRATIVE & 3 ARCHITECTURAL PILLARS
            ────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-6 relative" data-aos="fade-left">
              {/* Giant Watermark Step Number in Background (e.g. "02") */}
              <div className="absolute right-0 top-[-20px] font-serif-luxury text-[130px] sm:text-[170px] leading-none text-white/[0.04] font-bold select-none pointer-events-none">
                {currentStage.step}
              </div>

              <div className="relative z-10">
                {/* Gold Subtitle / Eyebrow */}
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#C6963F] font-bold mb-3">
                  {currentStage.eyebrow}
                </div>

                {/* Main Step Headline */}
                <h2 className="font-serif-luxury font-normal text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-white tracking-wide mb-4">
                  {currentStage.title}
                </h2>

                {/* Narrative Description */}
                <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-light">
                  {currentStage.desc}
                </p>

                {/* ══════════════════════════════════════════════════════════
                    3 KEY METRIC PILLARS WITH ARCHITECTURAL LINE DIAGRAMS
                ══════════════════════════════════════════════════════════ */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 py-6 border-y border-white/10 mb-8">
                  {currentStage.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="text-left">
                      {/* Metric Value */}
                      <span className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl block text-white font-normal mb-1">
                        {metric.val}
                      </span>

                      {/* Metric Label */}
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#C6963F] font-bold block mb-2">
                        {metric.label}
                      </span>

                      {/* Gold Architectural Line Drawing / Illustration */}
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-1 flex items-center justify-center">
                        {metric.svg}
                      </div>
                    </div>
                  ))}
                </div>

                {/* ══════════════════════════════════════════════════════════
                    BOTTOM 3 SPECIFICATION CARDS WITH ICONS
                ══════════════════════════════════════════════════════════ */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentStage.specs.map((sp, spIdx) => {
                    const IconComponent = sp.icon;
                    return (
                      <div
                        key={spIdx}
                        className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#C6963F]/40 transition-colors flex items-start gap-2.5"
                      >
                        <div className="p-1.5 rounded-lg bg-[#C6963F]/10 text-[#C6963F] shrink-0 mt-0.5">
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-white/50 block mb-0.5">
                            {sp.label}
                          </span>
                          <span className="text-xs font-semibold text-white/90 line-clamp-2 leading-tight">
                            {sp.val}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* =========================================================================
          SECTION 3: SCALE PIPELINE & LOGISTICS
          ========================================================================= */}
      <section className="py-16 md:py-28 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#0A0D14] via-[#0E1522] to-[#0A0D14] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Visual 3-Stage Logistics Pipeline */}
            <div className="lg:col-span-6" data-aos="fade-right">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-[#C6963F]" />
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#C6963F]">
                  RETAIL SCALE PIPELINE
                </span>
              </div>

              <h2 className="font-serif-luxury font-normal text-3xl sm:text-4xl md:text-5xl leading-tight text-white mb-6">
                We grow <em className="text-[#C6963F] italic font-serif">with our retailers</em>,
                <br />
                never over them.
              </h2>

              <div className="space-y-3 mb-8">
                {[
                  {
                    step: "01",
                    title: "Central Atelier Buffer",
                    chip: "100K+ PIECES READY",
                    desc: "Permanent buffer of formal core whites and blues; zero stockout risk for stores.",
                    icon: Boxes,
                  },
                  {
                    step: "02",
                    title: "48-Hour Rapid Replenishment",
                    chip: "EXPRESS DISPATCH",
                    desc: "Dedicated logistics routing to replenish bestsellers across India within 48 hours.",
                    icon: Truck,
                  },
                  {
                    step: "03",
                    title: "Direct Retail Trust Network",
                    chip: "2,500+ STORES",
                    desc: "Direct partnerships from 200 sq. ft. boutiques to 100K sq. ft. large formats.",
                    icon: Store,
                  },
                ].map((pipe, pIdx) => {
                  const PipeIcon = pipe.icon;
                  return (
                    <div
                      key={pIdx}
                      className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#C6963F]/35 transition-all flex items-start gap-3.5"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#C6963F]/10 border border-[#C6963F]/30 flex items-center justify-center text-[#C6963F] shrink-0 mt-0.5">
                        <PipeIcon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <h4 className="font-semibold text-white text-xs sm:text-sm">
                            {pipe.title}
                          </h4>
                          <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#C6963F]/10 text-[#C6963F] font-bold shrink-0">
                            {pipe.chip}
                          </span>
                        </div>
                        <p className="text-white/60 text-xs leading-relaxed">
                          {pipe.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C6963F] text-[#0A0D14] text-xs font-bold uppercase tracking-wider hover:bg-[#D8A74E] transition-all"
                >
                  <span>Inquire for Retail B2B Partnership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Key Scale Metrics Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3.5 md:gap-5" data-aos="fade-left">
              {[
                {
                  val: "2,500+",
                  label: "Active Retail Partners",
                  desc: "Across Tier 1, 2, and 3 high-street markets",
                  icon: Store,
                },
                {
                  val: "100K+",
                  label: "Ready-to-Ship Buffer",
                  desc: "Always in stock in core sartorial weaves",
                  icon: Boxes,
                },
                {
                  val: "48 HRS",
                  label: "Dispatch Cycle",
                  desc: "Rapid logistics fulfillment pan-India",
                  icon: Clock,
                },
                {
                  val: "99.4%",
                  label: "Sell-Through Reliability",
                  desc: "Zero returns on structural fabric flaws",
                  icon: ShieldCheck,
                },
              ].map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={idx}
                    className="counter-card p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#C6963F]/40 transition-all duration-300 relative group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#C6963F]/10 border border-[#C6963F]/30 flex items-center justify-center text-[#C6963F] mb-3 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <b className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl block text-white mb-1">
                      {card.val}
                    </b>
                    <h4 className="font-sans text-xs md:text-sm font-semibold uppercase tracking-wider text-[#C6963F] mb-1.5">
                      {card.label}
                    </h4>
                    <p className="text-white/50 text-[11px] font-mono leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CULTURAL PRIDE & MASTER PLEDGE CALL TO ACTION
          ========================================================================= */}
      <section
        className="py-16 md:py-24 px-6 md:px-12 lg:px-20 text-center relative border-t border-white/10 overflow-hidden"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#C6963F]"
            >
              <path
                d="M12 2C8 4 4 8 4 12C4 16 8 20 12 22C16 20 20 16 20 12C20 8 16 4 12 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 6C9.5 8 8 10 8 12C8 14 9.5 16 12 18C14.5 16 16 14 16 12C16 10 14.5 8 12 6Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/80 font-semibold">
              CRAFTED WITH PRIDE IN BENGALURU, INDIA
            </span>
          </div>

          <h2 className="font-serif-luxury font-normal text-3xl sm:text-5xl md:text-6xl leading-[1.1] text-white mb-4">
            Experience the Shirt That Built a
            <br />
            <span className="text-[#C6963F] italic font-serif">Quarter-Century of Trust.</span>
          </h2>

          <p className="text-white/70 text-xs sm:text-base max-w-xl mx-auto mb-8 leading-relaxed font-light">
            Single-needle craftsmanship built for Indian gentlemen and dependable retail partners.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C6963F] text-[#0A0D14] font-bold text-xs md:text-sm uppercase tracking-wider hover:bg-[#D8A74E] hover:shadow-[0_0_30px_rgba(198,150,63,0.35)] transition-all"
            >
              <span>Explore Our Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-medium text-xs md:text-sm uppercase tracking-wider hover:bg-white/10 hover:border-[#C6963F]/50 transition-all"
            >
              <Store className="w-4 h-4 text-[#C6963F]" />
              <span>Partner as a Retailer</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
