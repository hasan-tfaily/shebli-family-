import Header8 from "@/components/headers/Header8";
import Topbar2 from "@/components/headers/Topbar2";
import Benefits from "@/components/homes/it-consulting/Benefits";
import Hero from "@/components/homes/it-consulting/Hero";
import Process from "@/components/homes/it-consulting/Process";
import Services from "@/components/homes/it-consulting/Services";
import Testimonials from "@/components/homes/it-consulting/Testimonials";
import Brands from "@/components/common/Brands";
import React from "react";
import CaseStudies from "@/components/homes/it-consulting/CaseStudies";
import Pricing from "@/components/homes/strategy-consulting/Pricing";
import Features from "@/components/homes/it-consulting/Features";
import Blogs from "@/components/homes/it-consulting/Blogs";
import Cta from "@/components/homes/it-consulting/Cta";
import Footer2 from "@/components/footers/Footer2";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "It Consulting || Kidz Holding - Franchise & Corporate Website",
  description:
    "Kidz Holding - Franchise & Corporate Website",
};

export const dynamic = "force-dynamic";

export default function page() {
  return (
    <>
      <Topbar2 />
      <Header8 />
      <Hero />
      <div className="main-content">
        <Benefits />
        <Services />
        <Process />
        <Testimonials />
        <Brands />
        <CaseStudies />
        <Pricing
          parentClass="section-pricing h-3 h-8 tf-spacing-2"
          cardClass="pricing-card-items bg-surface"
        />
        <Features />
        <Blogs />
        <Cta />
      </div>
      <Footer2 parentClass="footer style-2 bg-color-white" light />
    </>
  );
}
