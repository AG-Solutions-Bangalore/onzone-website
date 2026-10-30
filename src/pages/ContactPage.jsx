import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Award,
  Store,
  ExternalLink,
  ArrowRight,
  MessageSquare,
  Building2,
  User,
  Globe,
  Briefcase,
  Copy,
  Check,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    enquiryFullName: "",
    enquiryMobile: "",
    enquiryEmail: "",
    enquiryBusiness: "",
    enquiryCity: "",
    enquiryType: "Become a Retail Partner",
    enquiryMessage: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [errors, setErrors] = useState({});
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeChannel, setActiveChannel] = useState(0);
  const [copiedField, setCopiedField] = useState(null);
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 750,
      once: false,
      mirror: true,
      offset: 50,
    });

    const updateIstTime = () => {
      try {
        const now = new Date();
        const options = {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        };
        const timeStr = new Intl.DateTimeFormat("en-IN", options).format(now);
        setIstTime(timeStr);
      } catch {
        setIstTime("10:00 AM – 7:30 PM IST");
      }
    };
    updateIstTime();
    const interval = setInterval(updateIstTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text, key) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedField(key);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const handleSelectChannel = (index) => {
    setActiveChannel(index);
    const types = [
      "Become a Retail Partner",
      "VIP Bespoke / Corporate",
      "Visit Bangalore Atelier",
    ];
    if (types[index]) {
      setFormData((prev) => ({ ...prev, enquiryType: types[index] }));
    }
  };

  const handleJumpToForm = (index) => {
    handleSelectChannel(index);
    const formElement = document.getElementById("enquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const finalValue = name === "enquiryMobile" ? value.replace(/\D/g, "").slice(0, 10) : value;

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const nameTrimmed = formData.enquiryFullName.trim();
    if (!nameTrimmed) {
      newErrors.enquiryFullName = "Full name is required";
    } else if (nameTrimmed.length < 2) {
      newErrors.enquiryFullName = "Name must be at least 2 characters";
    }

    const mobileTrimmed = formData.enquiryMobile.trim();
    if (!mobileTrimmed) {
      newErrors.enquiryMobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(mobileTrimmed)) {
      newErrors.enquiryMobile = "Please enter a valid 10-digit mobile number";
    }

    const emailTrimmed = formData.enquiryEmail.trim();
    if (!emailTrimmed) {
      newErrors.enquiryEmail = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      newErrors.enquiryEmail = "Please enter a valid email address";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setStatus({
        type: "error",
        message: "Please provide all required fields highlighted below.",
      });
      return;
    }

    setErrors({});
    setLoading(true);

    const payload = {
      ...formData,
      utm_medium: searchParams.get("utm_medium") || "",
      utm_source: searchParams.get("utm_source") || "",
      utm_campaign: searchParams.get("utm_campaign") || "",
    };

    try {
      const response = await fetch(
        "https://houseofonzone.com/admin/public/api/createEnquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (response.ok || data.status === true || data.status === "success") {
        setStatus({
          type: "success",
          message:
            data.message ||
            "Thank you! Your enquiry has been received. Our Trade Director will contact you within 2 hours.",
        });
        setFormData({
          enquiryFullName: "",
          enquiryMobile: "",
          enquiryEmail: "",
          enquiryBusiness: "",
          enquiryCity: "",
          enquiryType: "Become a Retail Partner",
          enquiryMessage: "",
        });
      } else {
        setStatus({
          type: "error",
          message:
            data.message ||
            "Something went wrong while transmitting your enquiry. Please reach us directly on WhatsApp.",
        });
      }
    } catch (err) {
      console.error("Enquiry API error:", err);
      setStatus({
        type: "error",
        message: "Unable to connect to server. Please reach our Trade Desk directly on WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  };

  const tradeChannels = [
    {
      id: "retail",
      code: "CH · 01",
      title: "Retail & Trade Partnerships",
      tag: "B2B WHOLESALE ALLOTMENT",
      desc: "For multi-brand stores, specialty boutiques, and large formats exploring seasonal collections and retail door allotments.",
      contact: "+91 99160 82518",
      contactType: "phone",
      actionText: "Chat on WhatsApp Desk",
      actionHref:
        "https://wa.me/919916082518?text=Hello%20House%20of%20Onzone,%20I%20am%20interested%20in%20a%20retail%20trade%20partnership.",
      icon: Store,
      badge: "RESPONSE IN < 2 HRS",
      enquiryTypeValue: "Become a Retail Partner",
      specs: [
        { label: "Dispatch SLA", val: "48-Hour Pan-India" },
        { label: "Trial Allotment", val: "From 48 Pieces" },
        { label: "Active Network", val: "2,500+ Doors" },
        { label: "Direct Desk", val: "Founder & Director Line" },
      ],
      quickTip: "Direct priority line for store owners seeking territorial pin-code protection.",
    },
    {
      id: "vip",
      code: "CH · 02",
      title: "VIP Concierge & Bespoke",
      tag: "EXECUTIVE & CORPORATE DESK",
      desc: "For corporate dressing orders, boardroom wardrobe programs, private connoisseur inquiries, and institutional gifting.",
      contact: "enquiries@houseofonzone.com",
      contactType: "email",
      actionText: "Email Concierge Desk",
      actionHref: "mailto:enquiries@houseofonzone.com?subject=VIP%20Concierge%20Enquiry",
      icon: Sparkles,
      badge: "PRIVATE ATELIER",
      enquiryTypeValue: "VIP Bespoke / Corporate",
      specs: [
        { label: "Service Mode", val: "1-on-1 Bespoke Specialist" },
        { label: "Customization", val: "Monograms & Made-to-Measure" },
        { label: "Fabric Archive", val: "Giza 87, Royal Twill, Linen" },
        { label: "Turnaround", val: "Private Appointment < 24h" },
      ],
      quickTip: "Tailored bespoke packages with custom styling kits delivered to corporate suites.",
    },
    {
      id: "atelier",
      code: "CH · 03",
      title: "Bangalore Central Atelier",
      tag: "VISIT HEADQUARTERS",
      desc: "Experience our textile archives, master pattern cutting tables, single-needle finishing stations, and complete seasonal collections in person.",
      contact: "Bangalore · Karnataka · India",
      contactType: "location",
      actionText: "Open in Google Maps",
      actionHref: "https://maps.google.com/?q=Bangalore,Karnataka,India",
      icon: MapPin,
      badge: "MON - SAT · 10AM - 7:30PM",
      enquiryTypeValue: "Visit Bangalore Atelier",
      specs: [
        { label: "Location", val: "Bangalore Textile District" },
        { label: "Operational Hours", val: "Mon – Sat · 10:00 to 19:30 IST" },
        { label: "Live Demonstrations", val: "Pattern Cutting & Needle Craft" },
        { label: "Appointment", val: "Walk-ins & Trade Visits Welcome" },
      ],
      quickTip: "Schedule a physical consultation with our Master Pattern Maker and Senior Weave Curators.",
    },
  ];

  const faqs = [
    {
      q: "What is the Minimum Order Quantity (MOQ) for new retail store partners?",
      a: "We welcome new boutique partners with flexible trial packs starting from just 48 units across core formal and smart casual sizes. This enables you to experience customer sell-through firsthand with minimal capital commitment.",
    },
    {
      q: "How fast is replenishment for core white and blue shirts?",
      a: "Our central Bangalore distribution atelier maintains a permanent buffer of 100,000+ pieces in core weaves (Royal Oxford, Egyptian Giza, and Fine Twill), ensuring 48-hour express dispatch pan-India.",
    },
    {
      q: "Do you protect retail partners with territorial exclusivity?",
      a: "Yes. We respect retail relationships and strictly limit door density in local trading pin-codes to protect our partners' retail margins and uphold premium brand exclusivity.",
    },
    {
      q: "Can we inspect physical fabric swatches before placing an allotment?",
      a: "Absolutely. We dispatch our luxury Textile Connoisseur Swatch Kit (featuring actual Giza cotton, 20 SPI seams, and German-fused collar samples) to registered store owners free of charge.",
    },
    {
      q: "Do you support institutional, wedding, or corporate gifting orders?",
      a: "Yes. Our bespoke atelier accommodates corporate gifting packages with custom monogramming, tailored fits, and luxury gift presentation boxes.",
    },
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#0E1A30] overflow-hidden selection:bg-[#C6963F] selection:text-white">
      {/* ===== INDIAN TRICOLOR LUXURY ACCENT BAR ===== */}
      <div className="w-full h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

      {/* ══════════════════════════════════════════════════════════
          1. CINEMATIC EDITORIAL HERO BANNER
      ══════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#0E1A30] text-[#FDFAF5] pt-28 sm:pt-36 pb-20 sm:pb-28 px-6 md:px-12 overflow-hidden border-b border-[#C6963F]/25">
        {/* Subtle Luxury Radial Gold Ambient Flares */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C6963F]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#2B4B75]/25 rounded-full blur-[140px] pointer-events-none" />

        {/* Background Architectural Watermark */}
        <div className="absolute right-6 sm:right-16 top-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none font-serif text-[200px] sm:text-[320px] font-bold tracking-widest">
          1999
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto text-center md:text-left">
          <div data-aos="fade-up">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-[#C6963F]/40 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C6963F] animate-pulse" />
              <span className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase text-[#C6963F]">
                BENGALURU HEADQUARTERS · TRADE & CONCIERGE
              </span>
            </div>

            <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl leading-[1.08] mb-6 text-white uppercase font-normal">
              Build the Next Season <br className="hidden sm:inline" />
              <span className="text-[#C6963F] italic font-serif">With Onzone.</span>
            </h1>

            <p className="text-white/75 max-w-2xl text-base sm:text-lg leading-relaxed font-sans mb-10 font-light">
              Twenty-five years of quiet mastery, 2,500+ trusted retail partners, and an unwavering commitment to single-needle craftsmanship. Connect directly with our Bangalore trade office.
            </p>

            {/* Credibility Metric Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-xs font-mono uppercase tracking-wider text-white/80">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#C6963F]" />
                <span>2,500+ Partner Doors Pan-India</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Clock className="w-4 h-4 text-[#C6963F]" />
                <span>48-Hour Rapid Dispatch</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Award className="w-4 h-4 text-[#C6963F]" />
                <span>Direct Founder Oversight</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. SMART ATELIER DESK CONSOLE ([ 01 ], [ 02 ], [ 03 ] ARCHITECTURAL DOCK - NOT CARDS)
      ══════════════════════════════════════════════════════════ */}
      <section
        className="max-w-[1280px] mx-auto px-6 md:px-12 -mt-8 sm:-mt-12 relative z-20"
        data-aos="fade-up"
      >
        <div className="bg-[#0E1A30] text-[#FDFAF5] rounded-3xl border border-[#C6963F]/35 shadow-[0_25px_60px_rgba(14,26,48,0.25)] overflow-hidden">
          {/* Top Real-Time Status Bar */}
          <div className="px-6 sm:px-8 py-3 bg-[#08101E]/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono tracking-wider uppercase">
            <div className="flex items-center gap-2.5 text-white/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-bold">LIVE TRADE DESK ONLINE</span>
              <span className="text-white/30">·</span>
              <span className="text-[#C6963F]">BENGALURU HEADQUARTERS</span>
            </div>
            <div className="flex items-center gap-3 text-white/60 text-[10px] sm:text-xs">
              <span>AVERAGE RESPONSE: <strong className="text-[#C6963F]">&lt; 2 HOURS</strong></span>
              <span className="text-white/30 hidden sm:inline">|</span>
              <span className="hidden sm:inline">MON – SAT · 10AM – 7:30PM IST</span>
            </div>
          </div>

          {/* 3 Connected Seamless Segments with Hairline Dividers ([ 01 ], [ 02 ], [ 03 ]) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Segment 01: Retail & B2B Partnerships */}
            <div className="p-7 sm:p-9 flex flex-col justify-between hover:bg-white/[0.02] transition-colors group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  {/* <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#C6963F]">
                    [ 01 ]
                  </span> */}
                  <span className="font-mono text-[9px] uppercase tracking-wider bg-[#C6963F]/15 border border-[#C6963F]/30 text-[#C6963F] px-2.5 py-0.5 rounded-full font-bold">
                    WHOLESALE ALLOTMENT
                  </span>
                </div>

                <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-normal mb-2 group-hover:text-[#C6963F] transition-colors">
                  Retail & Trade Desk
                </h3>
                <p className="text-white/65 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  Direct priority line for multi-brand stores, specialty boutiques & distributors requesting trial allotments.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <a
                  href="https://wa.me/919916082518?text=Hello%20House%20of%20Onzone,%20I%20am%20interested%20in%20a%20retail%20trade%20partnership."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-mono text-[11px] uppercase tracking-wider font-bold transition-transform hover:scale-105 shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
                <span className="font-mono text-[11px] text-[#C6963F] uppercase tracking-wider font-medium">
                  Official Trade Line
                </span>
              </div>
            </div>

            {/* Segment 02: VIP Concierge & Corporate */}
            <div className="p-7 sm:p-9 flex flex-col justify-between hover:bg-white/[0.02] transition-colors group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  {/* <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#C6963F]">
                    [ 02 ]
                  </span> */}
                  <span className="font-mono text-[9px] uppercase tracking-wider bg-white/10 border border-white/15 text-white/80 px-2.5 py-0.5 rounded-full font-bold">
                    PRIVATE ATELIER
                  </span>
                </div>

                <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-normal mb-2 group-hover:text-[#C6963F] transition-colors">
                  VIP Concierge & Bespoke
                </h3>
                <p className="text-white/65 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  Corporate executive gifting, private label consultations & custom boardroom packages.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <a
                  href="mailto:enquiries@houseofonzone.com?subject=VIP%20Concierge%20Enquiry"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C6963F] hover:bg-[#D8A74E] text-[#0A0D14] font-mono text-[11px] uppercase tracking-wider font-bold transition-transform hover:scale-105 shadow-md"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Concierge</span>
                </a>
                <span className="font-mono text-xs text-white/80 truncate max-w-[150px]">
                  enquiries@houseofonzone.com
                </span>
              </div>
            </div>

            {/* Segment 03: Bangalore Central Atelier */}
            <div className="p-7 sm:p-9 flex flex-col justify-between hover:bg-white/[0.02] transition-colors group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  {/* <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#C6963F]">
                    [ 03 ]
                  </span> */}
                  <span className="font-mono text-[9px] uppercase tracking-wider bg-white/10 border border-white/15 text-white/80 px-2.5 py-0.5 rounded-full font-bold">
                    ATELIER FLOOR
                  </span>
                </div>

                <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-normal mb-2 group-hover:text-[#C6963F] transition-colors">
                  Bangalore Headquarters
                </h3>
                <p className="text-white/65 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  Visit our physical cutting tables, master pattern rooms & 25-year textile archive.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <a
                  href="https://maps.google.com/?q=Bangalore,Karnataka,India"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-[11px] uppercase tracking-wider font-bold transition-transform hover:scale-105 border border-white/15"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C6963F]" />
                  <span>Map Location</span>
                </a>
                <span className="font-mono text-xs text-white/80">
                  Karnataka · India
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. MAIN INTERACTION GRID: ENQUIRY FORM + BANGALORE HQ ATELIER
      ══════════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-20 px-6 md:px-12 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ──────────────────────────────────────────────────────────
              LEFT: ELEVATED LUXURY TRADE ENQUIRY FORM (7 COLUMNS)
          ────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7" id="enquiry-form" data-aos="fade-right">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#0E1A30]/10 shadow-[0_20px_50px_rgba(14,26,48,0.06)] relative overflow-hidden">
              {/* Corner Watermark */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C6963F]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-[2px] bg-[#C6963F]" />
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C6963F] font-bold">
                    Official Trade Transmission
                  </span>
                </div>
                <h2 className="font-serif-luxury text-2xl sm:text-4xl text-[#0E1A30] font-normal">
                  Send Your Enquiry
                </h2>
                <p className="text-[#6B665A] text-xs sm:text-sm mt-1.5 font-sans">
                  Directly dispatched to the Director of Retail Allotments.
                </p>
              </div>

              {/* Status Alert */}
              {status.message && (
                <div
                  className={`mb-6 p-4 rounded-xl text-xs sm:text-sm font-sans flex items-start gap-3 ${
                    status.type === "success"
                      ? "bg-[#F0FDF4] text-[#166534] border border-[#BBF7D0]"
                      : "bg-[#FEF2F2] text-[#991B1B] border border-[#FECACA]"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 text-[#16a34a] shrink-0 mt-0.5" />
                  ) : (
                    <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      !
                    </span>
                  )}
                  <span className="leading-relaxed">{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Quick Role Selector Pills */}
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.16em] uppercase text-[#6B665A] font-bold mb-2.5">
                    I am representing *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Become a Retail Partner",
                      "Multi-Brand Chain Outlet",
                      "Corporate / Bulk Gifting",
                      "Request Product Catalogue",
                    ].map((type) => {
                      const isSelected = formData.enquiryType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, enquiryType: type }))}
                          className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                            isSelected
                              ? "bg-[#0E1A30] text-[#FDFAF5] border-[#0E1A30] shadow-sm font-bold"
                              : "bg-[#FDFAF5] text-[#0E1A30]/70 border-[#0E1A30]/15 hover:border-[#C6963F] hover:text-[#0E1A30]"
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Business */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.16em] uppercase text-[#6B665A] font-bold mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="enquiryFullName"
                        value={formData.enquiryFullName}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Mehta"
                        className={`w-full bg-[#FDFAF5] border rounded-xl px-4 py-3 text-sm font-sans outline-none transition-all placeholder:text-[#B0A99A] ${
                          errors.enquiryFullName
                            ? "border-red-400 focus:border-red-500 bg-red-50/20"
                            : "border-[#0E1A30]/15 focus:border-[#C6963F] focus:bg-white focus:shadow-sm"
                        }`}
                      />
                      <User className="w-4 h-4 text-[#B0A99A] absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                    {errors.enquiryFullName && (
                      <p className="text-red-500 text-[11px] mt-1 font-sans">{errors.enquiryFullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.16em] uppercase text-[#6B665A] font-bold mb-1.5">
                      Store / Business Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="enquiryBusiness"
                        value={formData.enquiryBusiness}
                        onChange={handleChange}
                        placeholder="e.g. Heritage Menswear, MG Road"
                        className="w-full bg-[#FDFAF5] border border-[#0E1A30]/15 focus:border-[#C6963F] focus:bg-white focus:shadow-sm rounded-xl px-4 py-3 text-sm font-sans outline-none transition-all placeholder:text-[#B0A99A]"
                      />
                      <Building2 className="w-4 h-4 text-[#B0A99A] absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Phone & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.16em] uppercase text-[#6B665A] font-bold mb-1.5">
                      10-Digit Mobile / WhatsApp *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3.5 top-3 text-xs font-mono text-[#0E1A30]/60 pointer-events-none">
                        +91
                      </div>
                      <input
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        name="enquiryMobile"
                        value={formData.enquiryMobile}
                        onChange={handleChange}
                        placeholder="98765 43210"
                        className={`w-full bg-[#FDFAF5] border rounded-xl pl-12 pr-4 py-3 text-sm font-sans outline-none transition-all placeholder:text-[#B0A99A] ${
                          errors.enquiryMobile
                            ? "border-red-400 focus:border-red-500 bg-red-50/20"
                            : "border-[#0E1A30]/15 focus:border-[#C6963F] focus:bg-white focus:shadow-sm"
                        }`}
                      />
                      <Phone className="w-4 h-4 text-[#B0A99A] absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                    {errors.enquiryMobile && (
                      <p className="text-red-500 text-[11px] mt-1 font-sans">{errors.enquiryMobile}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.16em] uppercase text-[#6B665A] font-bold mb-1.5">
                      City & State
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="enquiryCity"
                        value={formData.enquiryCity}
                        onChange={handleChange}
                        placeholder="e.g. Ahmedabad, Gujarat"
                        className="w-full bg-[#FDFAF5] border border-[#0E1A30]/15 focus:border-[#C6963F] focus:bg-white focus:shadow-sm rounded-xl px-4 py-3 text-sm font-sans outline-none transition-all placeholder:text-[#B0A99A]"
                      />
                      <MapPin className="w-4 h-4 text-[#B0A99A] absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.16em] uppercase text-[#6B665A] font-bold mb-1.5">
                    Official Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="enquiryEmail"
                      value={formData.enquiryEmail}
                      onChange={handleChange}
                      placeholder="e.g. rajesh@store.com"
                      className={`w-full bg-[#FDFAF5] border rounded-xl px-4 py-3 text-sm font-sans outline-none transition-all placeholder:text-[#B0A99A] ${
                        errors.enquiryEmail
                          ? "border-red-400 focus:border-red-500 bg-red-50/20"
                            : "border-[#0E1A30]/15 focus:border-[#C6963F] focus:bg-white focus:shadow-sm"
                      }`}
                    />
                    <Mail className="w-4 h-4 text-[#B0A99A] absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                  {errors.enquiryEmail && (
                    <p className="text-red-500 text-[11px] mt-1 font-sans">{errors.enquiryEmail}</p>
                  )}
                </div>

                {/* Message / Details */}
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.16em] uppercase text-[#6B665A] font-bold mb-1.5">
                    Your Requirements / Message
                  </label>
                  <textarea
                    name="enquiryMessage"
                    value={formData.enquiryMessage}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your store location, existing brand mix, or expected monthly volume..."
                    className="w-full bg-[#FDFAF5] border border-[#0E1A30]/15 focus:border-[#C6963F] focus:bg-white focus:shadow-sm rounded-xl px-4 py-3 text-sm font-sans outline-none resize-none transition-all placeholder:text-[#B0A99A]"
                  />
                </div>

                {/* Submit Action Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0E1A30] hover:bg-[#C6963F] text-[#FDFAF5] hover:text-[#0E1A30] font-mono text-xs uppercase tracking-[0.2em] font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    <span>{loading ? "Transmitting..." : "Send Trade Enquiry"}</span>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <span className="font-mono text-[10px] text-[#6B665A] tracking-wider">
                    🔒 Confidential Trade Transmission
                  </span>
                </div>
              </form>
            </div>
          </div>

          {/* ──────────────────────────────────────────────────────────
              RIGHT: BANGALORE HQ ATELIER & INTERACTIVE CARD (5 COLUMNS)
          ────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-left">
            {/* Atelier Address Card */}
            <div className="bg-[#0E1A30] text-[#FDFAF5] rounded-3xl p-8 sm:p-10 border border-[#C6963F]/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
                <Building2 className="w-24 h-24 text-[#C6963F]" />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C6963F] animate-pulse" />
                <span className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-[#C6963F]">
                  Central Trade Secretariat
                </span>
              </div>

              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-white mb-2">
                House of Onzone Atelier
              </h3>
              <p className="font-mono text-xs text-[#C6963F] tracking-wide mb-6">
                Bangalore · Karnataka · 560001 · India
              </p>

              <div className="space-y-4 border-t border-white/10 pt-6 text-xs sm:text-sm text-white/80 font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C6963F] shrink-0 mt-1" />
                  <span>
                    Textile Commercial Hub, Central Atelier District, Bangalore, Karnataka, India.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C6963F] shrink-0 mt-1" />
                  <div>
                    <span className="block font-semibold text-white">Trade Desk Operating Hours:</span>
                    <span className="text-white/60">Monday to Saturday: 10:00 AM – 7:30 PM (IST)</span>
                    <span className="block text-white/40 text-xs mt-0.5">Sunday: By prior trade appointment only</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-4 h-4 text-[#C6963F] shrink-0 mt-1" />
                  <span>
                    Valet & private boardroom available for visiting multi-brand retail delegations.
                  </span>
                </div>
              </div>

              {/* Direct Maps CTA Button */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href="https://maps.google.com/?q=Bangalore,Karnataka,India"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#C6963F] hover:text-white transition-colors font-bold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="font-mono text-xs text-[#C6963F] tracking-wide">
                  Central Trade Secretariat
                </span>
              </div>
            </div>

            {/* Embedded Interactive Map Card */}
            <div className="rounded-3xl overflow-hidden border border-[#0E1A30]/15 shadow-xl bg-white h-64 sm:h-72 relative">
              <iframe
                title="House of Onzone Bangalore Headquarters Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124419.67389815167!2d77.51368945417861!3d12.969966144574903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter contrast-[1.05] grayscale-[0.2]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. RETAIL PARTNER & TRADE FAQ ACCORDION
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#F2EDE4] border-t border-[#0E1A30]/10" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1A30]/5 border border-[#C6963F]/40 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C6963F]" />
              <span className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-[#C6963F]">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#0E1A30] font-normal">
              Retail Trade & Partnership Enquiries
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#0E1A30]/10 overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2]/60 transition-colors"
                  >
                    <span className="font-serif-luxury text-base sm:text-lg text-[#0E1A30] font-normal leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-[#C6963F] text-[#0E1A30] rotate-180"
                          : "bg-[#0E1A30]/5 text-[#0E1A30]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed text-[#6B665A] font-sans border-t border-[#0E1A30]/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. DIRECT 1-CLICK WHATSAPP CONCIERGE STRIP
      ══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-18 bg-[#0E1A30] text-[#FDFAF5] text-center border-t border-[#C6963F]/25 relative overflow-hidden" data-aos="fade-up">
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C6963F] font-bold block mb-3">
            Immediate Dialogue
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal leading-tight text-white mb-4">
            Prefer a direct conversation?
          </h2>
          <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-8 font-light">
            Skip the form and connect with our Retail Trade Desk directly on WhatsApp for catalogue requests and price sheets.
          </p>

          <a
            href="https://wa.me/919916082518?text=Hello%20House%20of%20Onzone,%20I%20would%20like%20to%20request%20the%20Wholesale%20Lookbook%20and%20Price%20Sheet."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-mono text-xs uppercase tracking-widest font-bold transition-all shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:scale-105 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
