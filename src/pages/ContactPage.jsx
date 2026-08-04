import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
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
    enquiryType: "",
    enquiryMessage: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

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
        message: "Please fix the errors below before submitting.",
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
            "Thank you! Your enquiry has been submitted successfully.",
        });
        setFormData({
          enquiryFullName: "",
          enquiryMobile: "",
          enquiryEmail: "",
          enquiryBusiness: "",
          enquiryCity: "",
          enquiryType: "",
          enquiryMessage: "",
        });
      } else {
        setStatus({
          type: "error",
          message:
            data.message ||
            "Something went wrong while sending your enquiry. Please try again.",
        });
      }
    } catch (err) {
      console.error("Enquiry API error:", err);
      setStatus({
        type: "error",
        message: "Unable to connect to server. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      label: "WhatsApp / Call",
      value: "+91 99160 82518",
      link: "tel:+919916082518",
    },
    {
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      label: "Email",
      value: "enquiries@houseofonzone.com",
      link: "mailto:enquiries@houseofonzone.com",
    },
    {
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
      label: "Retail Website",
      value: "www.houseofonzone.com",
      link: "https://www.houseofonzone.com",
    },
    {
      icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
      label: "Social",
      value: "@houseofonzone",
      link: "#",
    },
  ];

  return (
    <div>
      {/* ===== INDIAN TRICOLOR ACCENT BAR (optional) ===== */}
      <div className="w-full h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

      {/* ===== HERO – Trade Enquiries ===== */}
      <section className="relative bg-[#0E1A30] bg-[url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600')] bg-cover bg-center bg-blend-overlay text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#0E1A30]/80 -z-0" />
        <div className="relative z-10 max-w-[1180px] mx-auto px-6 md:px-12">
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-[#C6963F] mb-4">
              Trade Enquiries
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 normal-case">
              Build the next season
              <br />
              <span className="text-[#C6963F] italic">with us.</span>
            </h1>
            <p className="text-white/80 max-w-xl text-base md:text-lg leading-relaxed">
              If your approach to retail values structure, reliability and
              long-term thinking, we look forward to building the next season
              together.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="py-16 md:py-28 bg-[#F8F4EF]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left: Contact Info */}
            <div>
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-10 text-[#0E1A30]"
              >
                Get in touch
              </h2>

              <div className="space-y-6 mb-14">
                {contactItems.map(({ icon, label, value, link }, idx) => (
                  <a
                    key={label}
                    href={link}
                    data-aos="fade-up"
                    data-aos-delay={150 + idx * 80}
                    className="flex items-start gap-5 group no-underline"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#0E1A30] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C6963F] transition-colors duration-300 shadow-sm">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C6963F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 group-hover:stroke-white transition-colors duration-300"
                      >
                        <path d={icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[#6B665A] mb-0.5">
                        {label}
                      </p>
                      <p className="text-[#0E1A30] font-medium text-base md:text-lg group-hover:text-[#C6963F] transition-colors duration-300">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="border-t border-[#0E1A30]/10 pt-8"
              >
                <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[#6B665A] mb-3">
                  Our Location
                </div>
                <p className="text-[#0E1A30] text-base md:text-lg leading-relaxed">
                  Bangalore · Karnataka · India
                </p>
                <p className="text-[#6B665A] text-sm md:text-base mt-5 leading-relaxed max-w-xs">
                  Working with retail partners across India — from 200 sq. ft.
                  independent stores to 100,000 sq. ft. large-format outlets.
                </p>
              </div>
            </div>

            {/* Right: Form - Now bigger and refined */}
            <form
              onSubmit={handleSubmit}
              noValidate
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
            >
              <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[#6B665A] mb-8">
                Send an Enquiry
              </div>

              {status.message && (
                <div
                  className={`mb-6 p-4 rounded-md text-sm font-medium ${
                    status.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-mono text-[0.6rem] tracking-[0.1em] uppercase text-[#6B665A] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="enquiryFullName"
                    value={formData.enquiryFullName}
                    onChange={handleChange}
                    className={`w-full bg-[#FDFAF5] border-b-2 ${
                      errors.enquiryFullName ? "border-red-500" : "border-[#0E1A30]/10"
                    } px-0 py-3 font-sans text-base outline-none focus:border-[#C6963F] transition-colors duration-300 placeholder:text-[#B0A99A]`}
                    placeholder="Enter your name"
                  />
                  {errors.enquiryFullName && (
                    <p className="text-red-500 text-xs mt-1 font-sans">{errors.enquiryFullName}</p>
                  )}
                </div>

                <div>
                  <label className="block font-mono text-[0.6rem] tracking-[0.1em] uppercase text-[#6B665A] mb-2">
                    Business Name / Store Type
                  </label>
                  <input
                    type="text"
                    name="enquiryBusiness"
                    value={formData.enquiryBusiness}
                    onChange={handleChange}
                    className="w-full bg-[#FDFAF5] border-b-2 border-[#0E1A30]/10 px-0 py-3 font-sans text-base outline-none focus:border-[#C6963F] transition-colors duration-300 placeholder:text-[#B0A99A]"
                    placeholder="Enter business name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-mono text-[0.6rem] tracking-[0.1em] uppercase text-[#6B665A] mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="enquiryCity"
                    value={formData.enquiryCity}
                    onChange={handleChange}
                    className="w-full bg-[#FDFAF5] border-b-2 border-[#0E1A30]/10 px-0 py-3 font-sans text-base outline-none focus:border-[#C6963F] transition-colors duration-300 placeholder:text-[#B0A99A]"
                    placeholder="Enter city"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[0.6rem] tracking-[0.1em] uppercase text-[#6B665A] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={10}
                    name="enquiryMobile"
                    value={formData.enquiryMobile}
                    onChange={handleChange}
                    className={`w-full bg-[#FDFAF5] border-b-2 ${
                      errors.enquiryMobile ? "border-red-500" : "border-[#0E1A30]/10"
                    } px-0 py-3 font-sans text-base outline-none focus:border-[#C6963F] transition-colors duration-300 placeholder:text-[#B0A99A]`}
                    placeholder="Enter 10-digit phone number"
                  />
                  {errors.enquiryMobile && (
                    <p className="text-red-500 text-xs mt-1 font-sans">{errors.enquiryMobile}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-mono text-[0.6rem] tracking-[0.1em] uppercase text-[#6B665A] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="enquiryEmail"
                  value={formData.enquiryEmail}
                  onChange={handleChange}
                  className={`w-full bg-[#FDFAF5] border-b-2 ${
                    errors.enquiryEmail ? "border-red-500" : "border-[#0E1A30]/10"
                  } px-0 py-3 font-sans text-base outline-none focus:border-[#C6963F] transition-colors duration-300 placeholder:text-[#B0A99A]`}
                  placeholder="you@example.com"
                />
                {errors.enquiryEmail && (
                  <p className="text-red-500 text-xs mt-1 font-sans">{errors.enquiryEmail}</p>
                )}
              </div>

              {/* Reusable Shadcn UI Select for Type of Enquiry */}
              <div className="mb-6">
                <label className="block font-mono text-[0.6rem] tracking-[0.1em] uppercase text-[#6B665A] mb-2">
                  Type of Enquiry
                </label>
                <Select
                  value={formData.enquiryType}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, enquiryType: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select one…" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Become a Retail Partner">
                      Become a Retail Partner
                    </SelectItem>
                    <SelectItem value="Request Product Catalogue">
                      Request Product Catalogue
                    </SelectItem>
                    <SelectItem value="Bulk / Wholesale Order">
                      Bulk / Wholesale Order
                    </SelectItem>
                    <SelectItem value="General Enquiry">
                      General Enquiry
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-8">
                <label className="block font-mono text-[0.6rem] tracking-[0.1em] uppercase text-[#6B665A] mb-2">
                  Message
                </label>
                <textarea
                  name="enquiryMessage"
                  value={formData.enquiryMessage}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[#FDFAF5] border-b-2 border-[#0E1A30]/10 px-0 py-3 font-sans text-base outline-none resize-none focus:border-[#C6963F] transition-colors duration-300 placeholder:text-[#B0A99A]"
                  placeholder="Tell us about your store and requirements…"
                />
              </div>

              {/* Bigger Send Enquiry button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto font-mono text-sm tracking-[0.15em] uppercase bg-[#0E1A30] text-white py-5 px-12 rounded-md border-0 cursor-pointer hover:bg-[#C6963F] transition-colors duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== STATS STRIP (commented out – you can uncomment if needed) ===== */}
      {/* <section className="relative bg-[#0E1A30] bg-[url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1600')] bg-cover bg-center bg-blend-overlay py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0E1A30]/85 -z-0" />
        <div className="relative z-10 max-w-[1180px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "2,500+", label: "Retail Partners" },
              { val: "25+", label: "Years in Business" },
              { val: "100K+", label: "Shirts in Stock" },
              { val: "50K+", label: "Trousers & Denims" },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                data-aos="fade-up"
                data-aos-delay={100 + idx * 80}
              >
                <p className="font-serif text-3xl md:text-5xl text-[#C6963F] normal-case">
                  {stat.val}
                </p>
                <p className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-white/60 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactPage;
