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
    "Industries || FinWice - Business & Finance Consulting - React Nextjs Template",
  description:
    "FinWice - Business & Finance Consulting - React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-8">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Industries" />
            <h2 className="title-page-title">Our Projects</h2>
            <div className="sub-title body-2">
              Creating Parks of Imagination, Edutainment Fun

            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        {/* <Services /> */}


<section className="section-industry page-industry tf-spacing-2">
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <div className="text-anime-wave-1">
                <a href="#" className="tag label text-btn-uppercase">
                  industries we help
                </a>
              </div>
              <h3 className="title-section text-anime-wave-1 mb-12">
                Risk &amp; Compliance services tailored to
                <br />
                each industry.
              </h3>
              <div className="sub-title body-2 color-on-suface-container text-anime-wave-1">
                Tailored solutions to drive your business growth and success.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tf-container position-relative">
        <div className="row rg-20">
          <div className="col-lg-4 col-md-6">
            <div className="industry-item style-2">
              <div className="top">
                <div className="icon">
                  <i className="icon-Bank" />
                </div>
                <h6>
                  <a href="#" className="name-industry">
                    Leisure Architecture
                  </a>
                </h6>
              </div>
              {/* <div className="desc">
                Empowering financial institutions with data-driven insights and
                tailored solutions for sustainable growth.
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="industry-item style-2">
              <div className="top">
                <div className="icon">
                  <i className="icon-FirstAidKit" />
                </div>
                <h6>
                  <a href="#" className="name-industry">
                    Hospitality and Leisure Resort
                  </a>
                </h6>
              </div>
              {/* <div className="desc">
                Enhancing healthcare systems through innovative strategies that
                improve patient outcomes and operational efficiency.
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="industry-item style-2">
              <div className="top">
                <div className="icon">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_9360_11765)">
                      <path
                        d="M6 24L26 24C27.1046 24 28 23.1046 28 22L28 8C28 6.89543 27.1046 6 26 6L6 6C4.89543 6 4 6.89543 4 8L4 22C4 23.1046 4.89543 24 6 24Z"
                        stroke="#24283E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 28H12"
                        stroke="#24283E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath>
                        <rect width={32} height={32} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h6>
                  <a href="#" className="name-industry">
                    Urban Realm and Leisure Landscape
                  </a>
                </h6>
              </div>
              {/* <div className="desc">
                Driving digital transformation and scalable growth for tech
                companies in a rapidly evolving landscape.
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="industry-item style-2">
              <div className="top">
                <div className="icon">
                  <i className="icon-LightbulbFilament" />
                </div>
                <h6>
                  <a href="#" className="name-industry">
                   Family Leisure Destinations
                  </a>
                </h6>
              </div>
              {/* <div className="desc">
                Supporting energy providers with strategies for efficiency,
                sustainability, and navigating industry challenges.
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="industry-item style-2">
              <div className="top">
                <div className="icon">
                  <i className="icon-AirplaneTakeoff" />
                </div>
                <h6>
                  <a href="#" className="name-industry">
                    Shopping and Mixed-Use Environment
                  </a>
                </h6>
              </div>
              {/* <div className="desc">
                Streamlining logistics operations with solutions that enhance
                supply chain efficiency and cost-effectiveness.
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="industry-item style-2">
              <div className="top">
                <div className="icon">
                  <i className="icon-Wrench" />
                </div>
                <h6>
                  <a href="#" className="name-industry">
                    Education and Working Environment
                  </a>
                </h6>
              </div>
              {/* <div className="desc">
                Optimizing manufacturing processes for increased productivity,
                innovation, and long-term growth.
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="industry-item style-2">
              <div className="top">
                <div className="icon">
                  <i className="icon-Warehouse" />
                </div>
                <h6>
                  <a href="#" className="name-industry">
                    Food Court Living
                  </a>
                </h6>
              </div>
              {/* <div className="desc">
                Providing insights and strategies to maximize returns and drive
                success in real estate investments.
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="industry-item style-2">
              <div className="top">
                <div className="icon">
                  <i className="icon-Basket" />
                </div>
                <h6>
                  <a href="#" className="name-industry">
                    Playful Attractions
                  </a>
                </h6>
              </div>
              {/* <div className="desc">
                Enabling retailers to adapt to consumer trends and increase
                profitability through strategic planning.
              </div> */}
            </div>
          </div>
          
        </div>
      </div>
    </section>



        {/* <Contact /> */}
        {/* <Awards parentClass="section-awards h-1 tf-spacing-18" /> */}
        {/* <Cta /> */}



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
