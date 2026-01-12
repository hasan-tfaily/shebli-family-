import Testimonials from "@/components/common/Testimonials";
import About from "@/components/homes/strategy-consulting/About";
import Benefits from "@/components/homes/strategy-consulting/Benefits";
import CaseStudies from "@/components/homes/strategy-consulting/CaseStudies";
import Contact from "@/components/homes/strategy-consulting/Contact";
import Hero from "@/components/homes/strategy-consulting/Hero";
import Services from "@/components/homes/strategy-consulting/Services";
import React from "react";
import Features from "@/components/homes/strategy-consulting/Features";
import Pricing from "@/components/homes/strategy-consulting/Pricing";
import Faqs from "@/components/homes/strategy-consulting/Faqs";
import Cta from "@/components/common/Cta";
import Awards from "@/components/common/Awards";
import Footer1 from "@/components/footers/Footer1";
import Header3 from "@/components/headers/Header3";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Stratagy Consulting || Kidz Holding - Franchise & Corporate Website",
  description:
    "Kidz Holding - Franchise & Corporate Website",
};

export const dynamic = "force-dynamic";

export default function page() {
  return (
    <>
      <Header3 />
      <Hero />
      <div className="main-content">
        <Benefits />
        <About />
        <CaseStudies />
        <Services />
        <Contact />
        <Testimonials />
        <Features />
        <Pricing />
        <Faqs />
        <Cta />
        <Awards parentClass="section-awards h-3 tf-spacing-2" />
      </div>
      <Footer1 />
    </>
  );
}
