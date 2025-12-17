import Link from "next/link";
import React from "react";

import { Metadata } from "next";
import Features from "@/components/homes/tax-advisory/Features";
import About from "@/components/homes/strategy-consulting/About";
import Process from "@/components/homes/insurance-consultancy/Process";
import Benefits from "@/components/homes/it-consulting/Benefits";
import Services from "@/components/homes/tax-advisory/Services";

export const metadata: Metadata = {
  title:
    "Franchise & Partnership || Kidz Holding - Franchise & Corporate Website",
  description:
    "Kidz Holding - Franchise & Corporate Website",
};

export default function Page() {
  return (
    <>
      <div className="page-title style-1 bg-img-6">
        <div className="tf-container">
          <div className="page-title-content">
            <div className="breadkcum">
              <Link href={`/`} className="caption-1 home">
                Homepage
              </Link>{" "}
              <span className="arrow-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_9360_28061)">
                    <path
                      d="M3.125 10H16.875"
                      stroke="#A2A3AB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.25 4.375L16.875 10L11.25 15.625"
                      stroke="#A2A3AB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_9360_28061">
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>{" "}
              <span className="caption-1 page-breadkcum">
                Franchise &amp; Partnership
              </span>
            </div>

            <h2 className="title-page-title">Franchise &amp; Partnership</h2>

            <div className="sub-title body-2">
              Partner with the region’s most trusted edutainment brand and
              <br />
              build cities that inspire tomorrow’s leaders.
            </div>
          </div>

          <div className="wow fadeInUp" style={{ marginTop: "60px", marginBottom: "-30px" }}>
            <Link
              href={`/contact-us`}
              className="tf-btn style-1 bg-on-suface-container"
            >
              <span> Contact Us </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="main-content">

        <Features />
        <About />
<Services />
         <Process />
        <Benefits /> 


        <section className="section-cta h-2 section-one-page" id="cta">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="cta-inner style-2">
                  <div className="cta-content">
                    <h4 className="title-content">
                      Have a project or idea to bring to life? Let’s create it together
                    </h4>
                    <Link
                      href={`/contact-us`}
                      className="tf-btn style-1 bg-white text-center"
                    >
                      <span> Request a Quote </span>
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
