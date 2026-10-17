import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { X, Phone, CheckCircle2 } from "lucide-react";

const MobilePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only trigger when visiting the home page
    if (location.pathname !== "/") {
      setIsOpen(false);
      return;
    }

    // Check if user has already submitted mobile number or dismissed this session
    try {
      if (localStorage.getItem("onzone_mobile_submitted") === "true") {
        return;
      }
      if (sessionStorage.getItem("onzone_popup_dismissed") === "true") {
        return;
      }
    } catch {
      // Storage access check fallback
    }

    // Trigger popup exactly after 20 seconds on home page
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    try {
      sessionStorage.setItem("onzone_popup_dismissed", "true");
    } catch {}
  }, []);

  const handleMobileChange = (e) => {
    // Filter out non-numeric characters and restrict length to 10 digits
    const cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobile(cleaned);
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const trimmedMobile = mobile.trim();
    if (!trimmedMobile) {
      setError("Mobile number is required");
      return;
    }

    if (!/^\d{10}$/.test(trimmedMobile)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);

    const payload = {
      enquiryFullName: name.trim() || "Website Visitor",
      enquiryMobile: trimmedMobile,
    };

    try {
      const response = await fetch(
        "https://houseofonzone.com/admin/public/api/createEnquiryNumber",
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

      if (
        response.ok ||
        data.code === 200 ||
        data.status === true ||
        data.status === "success" ||
        (data.msg && data.msg.toLowerCase().includes("success"))
      ) {
        try {
          localStorage.setItem("onzone_mobile_submitted", "true");
          const existingLeads = JSON.parse(
            localStorage.getItem("onzone_popup_leads") || "[]"
          );
          existingLeads.push({ ...payload, createdAt: new Date().toISOString() });
          localStorage.setItem("onzone_popup_leads", JSON.stringify(existingLeads));
        } catch {}

        setIsSuccess(true);
        setTimeout(() => setIsOpen(false), 1800);
      } else {
        setError(data.msg || data.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error("Popup API error:", err);
      // Local fallback on network error
      try {
        localStorage.setItem("onzone_mobile_submitted", "true");
      } catch {}
      setIsSuccess(true);
      setTimeout(() => setIsOpen(false), 1800);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0E1A30]/75 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-[#C6963F]/20 overflow-hidden transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close popup"
          className="absolute top-4 right-4 p-1.5 rounded-full text-[#6B665A] hover:text-[#0E1A30] hover:bg-[#F8F4EF] transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          {isSuccess ? (
            <div className="py-8 text-center flex flex-col items-center justify-center space-y-3">
              <CheckCircle2 className="w-14 h-14 text-emerald-600" />
              <h3 className="font-serif text-2xl text-[#0E1A30] font-normal">
                Thank You!
              </h3>
              <p className="text-sm text-[#6B665A] max-w-xs">
                Your mobile number has been registered. We'll send our latest catalogue & updates to your phone.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6 text-center md:text-left">
                <span className="inline-block font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[#C6963F] font-semibold mb-2">
                  Exclusive Catalogue Access
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#0E1A30] font-normal leading-tight">
                  Connect With <span className="italic text-[#C6963F]">Onzone</span>
                </h3>
                <p className="text-sm text-[#6B665A] mt-2 leading-relaxed">
                  Enter your mobile number below to receive trade prices, new season arrivals, and wholesale catalogues directly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-[0.6rem] tracking-[0.1em] uppercase text-[#6B665A] mb-1.5">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-[#FDFAF5] border border-[#0E1A30]/15 rounded-lg px-3.5 py-2.5 text-sm text-[#0E1A30] outline-none focus:border-[#C6963F] focus:ring-1 focus:ring-[#C6963F] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[0.6rem] tracking-[0.1em] uppercase text-[#6B665A] mb-1.5">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#C6963F]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={10}
                      value={mobile}
                      onChange={handleMobileChange}
                      placeholder="Enter 10-digit mobile number"
                      className={`w-full bg-[#FDFAF5] border ${
                        error ? "border-red-500" : "border-[#0E1A30]/15"
                      } rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-[#0E1A30] outline-none focus:border-[#C6963F] focus:ring-1 focus:ring-[#C6963F] transition-colors`}
                    />
                  </div>
                  {error && (
                    <p className="text-red-500 text-xs mt-1 font-sans">{error}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full font-mono text-xs tracking-[0.15em] uppercase bg-[#0E1A30] text-white py-3.5 rounded-lg font-medium hover:bg-[#C6963F] transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50 mt-2 cursor-pointer"
                >
                  {loading ? "Submitting..." : "Get Free Catalogue"}
                </button>
              </form>

              <p className="text-[0.65rem] text-[#6B665A]/70 text-center mt-4">
                We respect your privacy. No spam.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobilePopup;
