import Link from "next/link";

import Benefits from "@/components/common/Benefits";
import About from "@/components/common/About";
import React from "react";
import History from "@/components/otherPages/History";
import Features from "@/components/common/Features2";
import Testimonials from "@/components/otherPages/Testimonials";
import Cta from "@/components/common/Cta2";
import Awards from "@/components/common/Awards";
import Breadcumb from "@/components/common/Breadcumb";
import { Metadata } from "next";
import Process from "@/components/common/Process";
export const metadata: Metadata = {
  title:
    "About us || Kidz Holding - Franchise & Corporate Website",
  description:
    "Kidz Holding - Franchise & Corporate Website",
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-4">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="About Us" />
            <h2 className="title-page-title">About Us</h2>
            <div className="sub-title body-2">
              Kidz Holding: Creating Parks of Imagination, <br />
              Edutainment and Fun

            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Benefits />
        {/* <About /> */}
        <History />
        <Features hasBorder parentClass="section-why-choose h-2 page-about" />

        <Process />

        {/* <Testimonials /> */}
        <Cta />
        {/* <Awards /> */}

      </div>
    </>
  );
}
