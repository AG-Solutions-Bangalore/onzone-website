import React, { lazy, Suspense } from "react";
import WelcomeScreen from "../components/WelcomeScreen";
import Hero from "../components/Hero";
import CategoriesStrip from "../components/CategoriesStrip";

const Story = lazy(() => import("../components/Story"));
const CraftAnatomy = lazy(() => import("../components/CraftAnatomy"));
const Collections = lazy(() => import("../components/Collections"));
const FitGuide = lazy(() => import("../components/FitGuide"));
const RetailFirst = lazy(() => import("../components/RetailFirst"));
const Strengths = lazy(() => import("../components/Strengths"));
const Philosophy = lazy(() => import("../components/Philosophy"));
const QuoteBlock = lazy(() => import("../components/QuoteBlock"));

const Home = () => {
  const hasSeenWelcome =
    typeof window !== "undefined" &&
    sessionStorage.getItem("onzone_welcome_shown") === "true";

  return (
    <div>
      {/* 1. Welcome Screen (Plays once per visit/session) */}
      {!hasSeenWelcome && <WelcomeScreen />}

      {/* 2. Hero Section with Video Container (Untouched) */}
      <Hero />

      {/* 3. Savile Row & Andamen Heritage Category Strip */}
      <CategoriesStrip />

      <Suspense
        fallback={<div className="min-h-[60vh] bg-[#FDFAF5]" aria-hidden />}
      >
        {/* 4. Our Story & Heritage Section (Untouched) */}
        <Story />

        {/* 5. The Anatomy of Craft (Andamen / Savile Row Signature Hotspots) */}
        <CraftAnatomy />

        {/* 6. Collections Showcase */}
        <Collections />        

        {/* 8. Architecture of Fit & Collar (Blackberrys Power Fit Principle) */}
        <FitGuide />

        {/* 9. Retail First Scale & Network */}
        <RetailFirst />

        {/* 10. Core Strengths & Testimonial Pillars */}
        <Strengths />

        {/* 11. Five Beliefs Philosophy */}
        <Philosophy />

        {/* 12. Philosophy of Fashion Quote */}
        <QuoteBlock />
      </Suspense>
    </div>
  );
};

export default Home;
