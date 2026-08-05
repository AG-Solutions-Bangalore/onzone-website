import React, { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import CategoriesStrip from "../components/CategoriesStrip";

const Story = lazy(() => import("../components/Story"));
const Collections = lazy(() => import("../components/Collections"));
const RetailFirst = lazy(() => import("../components/RetailFirst"));
const Strengths = lazy(() => import("../components/Strengths"));
const Philosophy = lazy(() => import("../components/Philosophy"));
const QuoteBlock = lazy(() => import("../components/QuoteBlock"));

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoriesStrip />
      <Suspense
        fallback={<div className="min-h-[60vh] bg-[#FDFAF5]" aria-hidden />}
      >
        <Story />
        <Collections />
        <RetailFirst />
        <Strengths />
        <Philosophy />
        <QuoteBlock />
      </Suspense>
    </div>
  );
};

export default Home;
