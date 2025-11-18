import Process from "@/components/common/Process2";
import Features from "@/components/common/Features";
import Services from "@/components/services/Services";
import React from "react";
import Cta from "@/components/common/Cta";
import Breadcumb from "@/components/common/Breadcumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Services 02 || Kidz Holding - Franchise & Corporate Website",
  description:
    "Kidz Holding - Franchise & Corporate Website",
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-5">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Our Services" />
            <h2 className="title-page-title">Our Services</h2>
            <div className="sub-title body-2">
              Discover a diverse array of services designed to help businesses
              excel through our
              <br />
              customized strategies and expert guidance.
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Services />
        <Process />
        <Features />
        <Cta />
      </div>
    </>
  );
}
