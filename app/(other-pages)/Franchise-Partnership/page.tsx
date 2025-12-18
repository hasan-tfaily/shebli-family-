import Link from "next/link";
import React from "react";

import { Metadata } from "next";
import Features from "@/components/homes/tax-advisory/Features";
import About from "@/components/homes/strategy-consulting/About";
import Process from "@/components/homes/insurance-consultancy/Process";
import Benefits from "@/components/homes/it-consulting/Benefits";
import Services from "@/components/homes/tax-advisory/Services";
import Image from "next/image";

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
        <section className="section-why-choose h-7 bg-surface tf-spacing-31">
          <div className="tf-container position-relative tf-spacing-3">
            <div className="row rg-60">
              <div className="col-xl-6">
                <div className="image mr-15">
                  <Image
                    src="/image/section/services 1.jpg"
                    alt="Why partner with us"
                    width={615}
                    height={615}
                    className="lazyload"
                    priority
                  />
                </div>
              </div>

              <div className="col-xl-6">
                <div className="section-content ml-15">
                  <div className="heading-section">
                    <div className="wow fadeInUp">
                      <a href="#" className="tag label text-btn-uppercase bg-white">
                        Partnership
                      </a>
                    </div>
                    <h3 className="wow fadeInUp mb-12">
                      Concept Development: <br />
                      Our Methodology
                    </h3>
                  </div>
                  <div className="sub-title body-2 wow fadeInUp">
                    We apply a design and leisure thinking approach. We focus on our guests'
                    expectations, the technological trends, and the market change. Our innovative and
                    immersive experiences make us unique. Each project responds to the singular
                    opportunities of the context, culture and characteristics of the community.
                  </div>
                  <div className="cols g-10" style={{ marginTop: "50px" }}>
                    <div className="benefit-lists">
                      <div className="benefit-items">
                        <div className="icon wow fadeInUp">
                          <i className="icon-checkbox" />
                        </div>
                        <div className="title wow fadeInUp" data-wow-delay=".1s">
                          Understand our audience
                        </div>
                      </div>

                      <div className="benefit-items">
                        <div className="icon wow fadeInUp">
                          <i className="icon-checkbox" />
                        </div>
                        <div className="title wow fadeInUp" data-wow-delay=".1s">
                          Research and Define
                        </div>
                      </div>

                      <div className="benefit-items">
                        <div className="icon wow fadeInUp">
                          <i className="icon-checkbox" />
                        </div>
                        <div className="title wow fadeInUp" data-wow-delay=".1s">
                          Ideate and Create
                        </div>
                      </div>

                      <div className="benefit-items">
                        <div className="icon wow fadeInUp">
                          <i className="icon-checkbox" />
                        </div>
                        <div className="title wow fadeInUp" data-wow-delay=".1s">
                          Design and Develop
                        </div>
                      </div>

                      <div className="benefit-items">
                        <div className="icon wow fadeInUp">
                          <i className="icon-checkbox" />
                        </div>
                        <div className="title wow fadeInUp" data-wow-delay=".1s">
                          Build and Activate
                        </div>
                      </div>

                      <div className="benefit-items">
                        <div className="icon wow fadeInUp">
                          <i className="icon-checkbox" />
                        </div>
                        <div className="title wow fadeInUp" data-wow-delay=".1s">
                          Scale the Business
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /benefit-lists */}
                </div>
              </div>
            </div>
          </div>
        </section>
<Services />
         {/* <Process /> */}
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
