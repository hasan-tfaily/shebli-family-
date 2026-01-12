import Header2 from "@/components/headers/Header2";
import Topbar1 from "@/components/headers/Topbar1";
import About from "@/components/common/About";
import Benefits from "@/components/common/Benefits";
import CaseStudies from "@/components/homes/consulting-agency/CaseStudies";
import Contact from "@/components/common/Contact";
import Features from "@/components/common/Features2";
import Hero from "@/components/homes/consulting-agency/Hero";
import Process from "@/components/common/Process";
import Services from "@/components/common/Services2";
import Testimonials from "@/components/common/Testimonials";
import Blogs from "@/components/common/Blogs";
import React from "react";
import Cta from "@/components/common/Cta";
import Footer1 from "@/components/footers/Footer1";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Consulting Agency || Kidz Holding - Franchise & Corporate Website",
  description:
    "Kidz Holding - Franchise & Corporate Website",
};

export const dynamic = "force-dynamic";

export default function page() {
  return (
    <>
      <Topbar1 />
      <Header2 />
      <Hero />
      <div className="main-content">
        <Benefits />
        <About />
        <Services />
        <Process />
        <Features />
        <CaseStudies />
        {/* <Testimonials /> */}
        <Contact />
        <Blogs />
        <Cta />
      </div>
      <Footer1 />
    </>
  );
}
