import Link from "next/link";

import Awards from "@/components/common/Awards";
import Contact from "@/components/common/Contact";
import Cta from "@/components/common/Cta";
import Services from "@/components/otherPages/Services";
import React from "react";
import Breadcumb from "@/components/common/Breadcumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Our Brands || Kidz Holding - Franchise & Corporate Website",
  description:
    "Kidz Holding - Franchise & Corporate Website",
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-8">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Our Brands" />
            <h2 className="title-page-title">Our Brands</h2>
            <div className="sub-title body-2">
              Creating Parks of Imagination, Edutainment Fun

            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Services />
        <section className="section-cta h-2 section-one-page" id="cta">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="cta-inner style-2">
                  <div className="cta-content">
                    <h4 className="title-content">
                      Start your journey with us
                    </h4>
                    <Link
                      href={`/contact-us`}
                      className="tf-btn style-1 bg-white text-center"
                    >
                      <span> Franchise Opportunities </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
