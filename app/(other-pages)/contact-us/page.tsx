import Link from "next/link";

import Contact from "@/components/otherPages/Contact";
import Locations from "@/components/otherPages/Locations";
import Map from "@/components/otherPages/Map";
import React from "react";
import Breadcumb from "@/components/common/Breadcumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Contact Us || Kidz Holding - Franchise & Corporate Website",
  description:
    "Kidz Holding - Franchise & Corporate Website",
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-13">
        <div className="tf-container position-relative">
          <div className="page-title-content">
            <Breadcumb pageName="Contact Us" />
            <h2 className="title-page-title">Contact Us</h2>
            <div className="sub-title body-2">
              Let’s Build the Future Together
              <br />
             
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Contact />
        <Map />
        {/* <Locations /> */}
      </div>
    </>
  );
}
