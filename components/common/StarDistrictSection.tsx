"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { starDistrictData } from "@/data/starDistrictData";

export default function StarDistrictSection() {
  if (!starDistrictData || starDistrictData.length === 0) {
    return null;
  }

  return (
    <section
      className="section-services h-1 tf-spacing-31 bg-surface section-one-page"
      id="services"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section style-2">
              <div className="left">
                {/* <div className="text-anime-wave">
                  <a
                    href="#"
                    className="tag label text-btn-uppercase bg-white"
                  >
                    Experiences
                  </a>
                </div> */}
                <h3 className="title-section text-anime-wave">
                 Experiences
                </h3>
              </div>
            </div>



            <div className="section-services-content">
              <div className="flat-animate-tab">
                {/* Tabs */}
                <div className="wg-tab">
                  <ul className="tab-product min-w-757" role="tablist">
                    {starDistrictData.map(({ id, title, isActive }) => (
                      <li
                        className="nav-tab-item"
                        role="presentation"
                        key={id}
                      >
                        <h5>
                          <a
                            href={`#${id}`}
                            data-bs-toggle="tab"
                            role="tab"
                            className={isActive ? "active" : ""}
                          >
                            {title}
                          </a>
                        </h5>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tab panes */}
                <div className="tab-content">
                  {starDistrictData.map(
                    ({
                      id,
                      imgSrc,
                      imgWidth,
                      imgHeight,
                      title,
                      benefits,
                      isActive,
                    }) => (
                      <div
                        key={id}
                        className={`tab-pane${
                          isActive ? " active show" : ""
                        }`}
                        id={id}
                        role="tabpanel"
                      >
                        <div className="section-services-item">
                          <div className="image tf-animate-1">
                            <Link
                              href="/services-details-1"
                              className="link"
                              aria-label={title}
                            />
                            <Image
                              src={imgSrc}
                              alt={title}
                              className="lazyload"
                              width={imgWidth}
                              height={imgHeight}
                            />
                          </div>

                          <div className="services-content">
                            <div className="heading">
                              <h3>
                                <Link
                                  href="/services-details-1"
                                  className="name-services wow fadeInUp"
                                >
                                  {title}
                                </Link>
                              </h3>
                            </div>

                            <div className="benefit-lists">
                              {benefits.map((benefit, i) => (
                                <div className="benefit-items" key={i}>
                                  <div className="icon wow fadeInUp">
                                    <i className="icon-checkbox" />
                                  </div>
                                  <div
                                    className="title wow fadeInUp"
                                    data-wow-delay=".1s"
                                  >
                                    {benefit}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
