"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { servicesData2 } from "@/data/services";

export default function Services() {
  return (
    <section
      className="section-services h-8 tf-spacing-18 section-one-page"
      id="services"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">

            {/* ✅ LEFT aligned heading */}
            <div className="heading-section text-start">
              <div className="text-anime-wave-1">
                <a href="#" className="tag label text-btn-uppercase">
                  Our Services
                </a>
              </div>

              <h3 className="title-section text-anime-wave-1 mb-12">
                Careers at Kidz Holding
              </h3>

              <div className="sub-title body-2 text-anime-wave-1">
                Start a career……..not just a job.
                <br />
                Whether you’re a fresh graduate, an experienced professional, or
                a creative visionary, Kidz Holding offers opportunities to grow
                within an industry that blends entertainment, education,
                storytelling, and innovation.
              </div>
            </div>

            <div className="flat-animate-tab">
              <div className="wg-tab">
                <ul className="tab-product tab-left" role="tablist">
                  {servicesData2.map(({ id, tabTitle, isActive }) => (
                    <li className="nav-tab-item" role="presentation" key={id}>
                      <h5>
                        <a
                          href={`#${id}`}
                          data-bs-toggle="tab"
                          role="tab"
                          className={isActive ? "active" : ""}
                        >
                          {tabTitle}
                        </a>
                      </h5>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tab-content" >
                {servicesData2.map(
                  ({
                    id,
                    title,
                    description,
                    benefits,
                    imgSrc,
                    imgWidth,
                    imgHeight,
                    isActive,
                  }) => (
                    <div
                      key={id}
                      className={`tab-pane${isActive ? " active show" : ""}`}
                      id={id}
                      role="tabpanel"
                      
                    >
                      <div className="services-inner bg-surface"style={{ paddingTop: "20px" }}>
                        <div className="services-content">
                          <h4 className="title-content mb-12">
                            {title}
                          </h4>

                          <div className="sub-title mb-28 body-2">
                            {description}
                          </div>

                          {/* ✅ SINGLE COLUMN BENEFITS */}
                          <div className="cols mb-20">
                            <div className="benefit-lists item">
                              {benefits.map((benefit, i) => (
                                <div className="benefit-items" key={i}>
                                  <div className="icon">
                                    <i className="icon-checkbox" />
                                  </div>
                                  <div className="title">{benefit}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="image">
                          <Image
                            src={imgSrc}
                            alt={title}
                            className="lazyload"
                            width={imgWidth}
                            height={imgHeight}
                          />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* If something still centers due to theme CSS, this forces left */}
            <style jsx global>{`
              .section-services .heading-section {
                text-align: left !important;
              }
              .tab-product.tab-left {
                display: flex !important;
                justify-content: flex-start !important;
                align-items: center;
                gap: 16px;
                min-width: 0 !important;
              }
            `}</style>

          </div>
        </div>
      </div>
    </section>
  );
}
