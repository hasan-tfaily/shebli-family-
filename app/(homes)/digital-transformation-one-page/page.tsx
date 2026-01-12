import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import About from "@/components/homes/digital-transformation/About";
import Awards from "@/components/homes/digital-transformation/Awards";
import Contact from "@/components/homes/digital-transformation/Contact";
import Features from "@/components/common/Features";
import Hero from "@/components/homes/digital-transformation/Hero";
import Services from "@/components/homes/digital-transformation/Services";
import Services2 from "@/components/homes/digital-transformation/Services2";
import Team from "@/components/homes/digital-transformation/Team";
import VideoSection from "@/components/homes/digital-transformation/VideoSection";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Digital Transformation One Page || Kidz Holding - Franchise & Corporate Website",
  description:
    "Kidz Holding - Franchise & Corporate Website",
};

export const dynamic = "force-dynamic";

export default function page() {
  return (
    <>
      <Header4 onepage />
      <Hero />
      <div className="main-content">
        <About />
        <VideoSection />
        <Services />
        <Features />
        <Services2 />
        <Cta />
        <Team />
        <Contact />
        <Blogs />
        <Awards />
      </div>
      <Footer1 />
    </>
  );
}
