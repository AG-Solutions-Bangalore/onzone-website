import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    enquiryFullName: "",
    enquiryMobile: "",
    enquiryEmail: "",
    enquiryBusiness: "",
    enquiryCity: "",
    enquiryType: "General Enquiry",
    enquiryMessage: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
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

    const searchParams = new URLSearchParams(window.location.search);
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
          enquiryType: "General Enquiry",
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

  return (
    <section className="bg-[#0E1A30] py-16 md:py-20" id="contact">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        {/* ========== BANNER ========== */}
        <div
          data-aos="fade-up"
          className="relative overflow-hidden rounded-2xl mb-12 md:mb-16"
        >
          {/* Background Image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop&crop=center')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1A30]/95 via-[#0E1A30]/80 to-[#0E1A30]/60" />

          {/* Content */}
          <div className="relative z-10 px-6 md:px-10 py-12 md:py-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3.5 mb-3 justify-center md:justify-start">
                <div className="w-10 h-[2px] bg-[#C6963F]" />
                <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-[#C6963F]">
                  Let’s Build Together
                </span>
              </div>
              <h2 className="font-serif-luxury text-2xl md:text-3xl lg:text-4xl font-normal text-[#FDFAF5] leading-tight">
                Ready to stock <em className="text-[#C6963F] italic">Onzone</em>
                ?
              </h2>
              <p className="text-[#FDFAF5]/70 max-w-lg text-sm md:text-base mt-2">
                Connect with our trade team to explore the AW’25 collection,
                request samples, or discuss partnership opportunities.
              </p>
            </div>
            <a
              href="#contact-form"
              className="flex-shrink-0 inline-block bg-[#C6963F] text-[#0E1A30] font-mono text-xs tracking-[0.15em] uppercase font-bold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#a87d2a] transition-all duration-300 transform hover:scale-105 no-underline"
            >
              Start a Conversation →
            </a>
          </div>
        </div>

        {/* ========== Existing Contact Grid ========== */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px] bg-[#F1EAE0] rounded-2xl p-6 md:p-10"
        >
          {/* Left: info */}
          <div>
            <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#A87B31] mb-3.5">
              Trade Enquiries
            </div>
            <h2 className="font-serif-luxury font-normal text-3xl md:text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.08] mb-4 md:mb-[18px] normal-case not-italic">
              Build the next season{" "}
              <em className="text-[#A87B31] italic">with us.</em>
            </h2>
            <p className="text-[#6B665A] leading-[1.7] mb-8 text-sm md:text-base">
              If your approach to retail values structure, reliability and
              long-term thinking, we look forward to building the next season
              together.
            </p>

            {[
              ["WhatsApp / Call", "+91 99160 82518"],
              ["Email", "enquiries@houseofonzone.com"],
              ["Retail", "www.houseofonzone.com"],
              ["Social", "@houseofonzone"],
            ].map(([label, val]) => (
              <div
                key={label}
                className="flex flex-col sm:flex-row justify-between border-b border-[rgba(14,26,48,0.12)] py-3 font-mono text-xs md:text-[0.75rem] tracking-[0.05em] gap-1 sm:gap-0"
              >
                <span className="text-[#6B665A]">{label}</span>
                <span className="text-[#2B2820] break-all sm:break-normal">
                  {val}
                </span>
              </div>
            ))}
          </div>

          {/* Right: form */}
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            noValidate
            className="bg-[#E8E1D5] p-6 md:p-10 rounded-xl"
          >
            {status.message && (
              <div
                className={`mb-5 p-3 rounded text-xs font-medium ${
                  status.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {status.message}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.12em] uppercase text-[#6B665A] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="enquiryFullName"
                  value={formData.enquiryFullName}
                  onChange={handleChange}
                  className={`w-full bg-[#FDFAF5] border-none border-b ${
                    errors.enquiryFullName ? "border-red-500 border-b-2" : "border-[rgba(14,26,48,0.12)]"
                  } py-2.5 font-sans text-[0.9rem] outline-none focus:border-b-2 focus:border-[#A87B31] transition-all`}
                />
                {errors.enquiryFullName && (
                  <p className="text-red-500 text-[0.7rem] mt-1 font-sans">{errors.enquiryFullName}</p>
                )}
              </div>

              <div>
                <label className="block font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.12em] uppercase text-[#6B665A] mb-1.5">
                  Business Name, Store Type
                </label>
                <input
                  type="text"
                  name="enquiryBusiness"
                  value={formData.enquiryBusiness}
                  onChange={handleChange}
                  className="w-full bg-[#FDFAF5] border-none border-b border-[rgba(14,26,48,0.12)] py-2.5 font-sans text-[0.9rem] outline-none focus:border-b-2 focus:border-[#A87B31] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.12em] uppercase text-[#6B665A] mb-1.5">
                  City
                </label>
                <input
                  type="text"
                  name="enquiryCity"
                  value={formData.enquiryCity}
                  onChange={handleChange}
                  className="w-full bg-[#FDFAF5] border-none border-b border-[rgba(14,26,48,0.12)] py-2.5 font-sans text-[0.9rem] outline-none focus:border-b-2 focus:border-[#A87B31] transition-all"
                />
              </div>

              <div>
                <label className="block font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.12em] uppercase text-[#6B665A] mb-1.5">
                  Phone *
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={10}
                  name="enquiryMobile"
                  value={formData.enquiryMobile}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className={`w-full bg-[#FDFAF5] border-none border-b ${
                    errors.enquiryMobile ? "border-red-500 border-b-2" : "border-[rgba(14,26,48,0.12)]"
                  } py-2.5 font-sans text-[0.9rem] outline-none focus:border-b-2 focus:border-[#A87B31] transition-all`}
                />
                {errors.enquiryMobile && (
                  <p className="text-red-500 text-[0.7rem] mt-1 font-sans">{errors.enquiryMobile}</p>
                )}
              </div>
            </div>

            <div className="mb-5">
              <label className="block font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.12em] uppercase text-[#6B665A] mb-1.5">
                Email *
              </label>
              <input
                type="email"
                name="enquiryEmail"
                value={formData.enquiryEmail}
                onChange={handleChange}
                className={`w-full bg-[#FDFAF5] border-none border-b ${
                  errors.enquiryEmail ? "border-red-500 border-b-2" : "border-[rgba(14,26,48,0.12)]"
                } py-2.5 font-sans text-[0.9rem] outline-none focus:border-b-2 focus:border-[#A87B31] transition-all`}
              />
              {errors.enquiryEmail && (
                <p className="text-red-500 text-[0.7rem] mt-1 font-sans">{errors.enquiryEmail}</p>
              )}
            </div>

            {/* Reusable Shadcn UI Select for Type of Enquiry */}
            <div className="mb-5">
              <label className="block font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.12em] uppercase text-[#6B665A] mb-1.5">
                Type of Enquiry
              </label>
              <Select
                value={formData.enquiryType}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, enquiryType: value }))
                }
              >
                <SelectTrigger className="h-10 text-[0.9rem] py-2">
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

            <div className="mb-6">
              <label className="block font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.12em] uppercase text-[#6B665A] mb-1.5">
                Message
              </label>
              <textarea
                name="enquiryMessage"
                value={formData.enquiryMessage}
                onChange={handleChange}
                className="w-full bg-[#FDFAF5] border-none border-b border-[rgba(14,26,48,0.12)] py-2.5 font-sans text-[0.9rem] outline-none resize-none h-20 focus:border-b-2 focus:border-[#A87B31] transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="font-mono text-[0.68rem] tracking-[0.08em] uppercase bg-[#0E1A30] text-[#FDFAF5] py-3.5 px-7 border-none cursor-pointer rounded-[1px] w-full sm:w-auto hover:bg-[#A87B31] transition-colors disabled:opacity-50"
            >
              {loading ? "Sending..." : "Request Catalogue"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
