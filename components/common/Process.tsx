import Link from "next/link";
import React from "react";

export default function Process() {
  return (
    <section className="section-process h-2 tf-spacing-31 hover-active-step">
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="heading-section style-2 style-color-white">
              <div className="left">
                <div className="text-anime-wave">
                  <a
                    href="#"
                    className="tag label text-btn-uppercase color-white"
                  >
                    A Framework of Growth and Trust
                  </a>
                </div>
                <h3 className="title-section mb-12 text-anime-wave">
                  Corporate Structure
                </h3>
                <div className="sub-title body-2 text-anime-wave">
                 Kidz Holding operates through a robust corporate framework designed to balance creativity, operational excellence, and investor trust.
                </div>
              </div>
              {/* <div className="text-anime-wave-2">
                <Link href={`/contact-us`} className="tf-btn style-1 bg-white">
                  <span> Schedule A Consultation </span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="tf-container position-relative">
        <div className="row rg-30">
          <div className="col-md-4">
            <div className="process-item bg-1 step-hover">
              {/* <div className="process-top">
                <div className="icon">
                  <i className="icon-Briefcase" />
                </div>
                <span className="label text-btn-uppercase">Step 1</span>
              </div> */}
              <div className="process-content">
                <h5>
                  <a href="#" className="name-process">
                    Holding Framework 
                  </a>
                </h5>
                <div className="desc">
                Strategic oversight and governance for all brands and franchises under one unified vision.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="process-item bg-1 step-hover">
              {/* <div className="process-top">
                <div className="icon">
                  <i className="icon-Briefcase" />
                </div>
                <span className="label text-btn-uppercase">Step 2</span>
              </div> */}
              <div className="process-content">
                <h5>
                  <a href="#" className="name-process">
                   Business Units 
                  </a>
                </h5>
                <div className="desc">
                   Specialized divisions handling operations, marketing, education, and innovation.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="process-item bg-1 step-hover">
              {/* <div className="process-top">
                <div className="icon">
                  <i className="icon-Briefcase" />
                </div>
                <span className="label text-btn-uppercase">Step 3</span>
              </div> */}
              <div className="process-content">
                <h5>
                  <a href="#" className="name-process">
                     Corporate Governance
                  </a>
                </h5>
                <div className="desc">
                  Transparent, accountable leadership ensuring sustainable growth and stakeholder confidence.
                </div>
              </div>  
            </div>
          </div>
          <div className="col-md-4">
            <div className="process-item bg-1 step-hover">
              {/* <div className="process-top">
                <div className="icon">
                  <i className="icon-Briefcase" />
                </div>
                <span className="label text-btn-uppercase">Step 3</span>
              </div> */}
              <div className="process-content">
                <h5>
                  <a href="#" className="name-process">
                     Adaptability & Innovation
                  </a>
                </h5>
                <div className="desc">
                  {/* Transparent, accountable leadership ensuring sustainable growth and stakeholder confidence. */}
                </div>
              </div>
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="process-item bg-1 step-hover">
              {/* <div className="process-top">
                <div className="icon">
                  <i className="icon-Briefcase" />
                </div>
                <span className="label text-btn-uppercase">Step 3</span>
              </div> */}
              <div className="process-content">
                <h5>
                  <a href="#" className="name-process">
                     Proven Operational Expertise
                  </a>
                </h5>
                <div className="desc">
                  {/* Transparent, accountable leadership ensuring sustainable growth and stakeholder confidence. */}
                </div>
              </div>
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="process-item bg-1 step-hover">
              {/* <div className="process-top">
                <div className="icon">
                  <i className="icon-Briefcase" />
                </div>
                <span className="label text-btn-uppercase">Step 3</span>
              </div> */}
              <div className="process-content">
                <h5>
                  <a href="#" className="name-process">
                     Educational & Developmental Impact
                  </a>
                </h5>
                <div className="desc">
                  {/* Transparent, accountable leadership ensuring sustainable growth and stakeholder confidence.*/}
                </div> 
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
