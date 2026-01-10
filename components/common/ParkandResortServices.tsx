"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { getStrapiMediaUrl } from "@/lib/strapi/media";

export default function ParkandResortServices({ activitiesSection }: any) {
  if (!activitiesSection) {
    return null;
  }
  
  const rawData = activitiesSection.featuredItems;
  const parkResortData = rawData.map((item: any, index: number) => ({
    ...item,
    id: `activity-${index}`,
  }));
  
  const [activeIndex, setActiveIndex] = useState(0);

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
                <div className="text-anime-wave">
                  <a href="#" className="tag label text-btn-uppercase bg-white">
                    {activitiesSection?.miniTitle}
                  </a>
                </div>
                <h3 className="title-section text-anime-wave" style={{fontSize:"18px"}}>
                  {activitiesSection?.description}
                </h3>
              </div>
            </div>

            <div className="section-services-content">
              <div className="flat-animate-tab">
                {/* Tabs */}
                <div className="wg-tab">
                  <ul className="tab-product min-w-757" role="tablist">
                    {parkResortData.map((item: any, index: number) => (
                      <li
                        className="nav-tab-item"
                        role="presentation"
                        key={item.title}
                      >
                        <h5>
                          <a
                            href={`#${item.id}`}
                            role="tab"
                            className={activeIndex === index ? "active" : ""}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveIndex(index);
                            }}
                          >
                            {item.title}
                          </a>
                        </h5>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tab panes */}
                <div className="tab-content">
                  {parkResortData.map((item: any, index: number) => (
                      <div
                        key={item.title}
                        className={`tab-pane${
                          activeIndex === index ? " active show" : ""
                        }`}
                        id={item.id}
                        role="tabpanel"
                        style={{ display: activeIndex === index ? "block" : "none" }}
                      >
                        <div className="section-services-item">
                          <div className="image tf-animate-1 active-animate">
                            <Image
                              src={getStrapiMediaUrl(item.img) || ""}
                              alt={item.title}
                              width={1920}
                              height={1080}
                            />
                        </div>
                          <div className="services-content">
                            <div className="heading">
                              <h3>
                                  {item.title}
                              </h3>
                            </div>

                            <div className="benefit-lists">
                              {item.list.map((benefit: any, i: number) => (
                                <div className="benefit-items" key={i}>
                                  <div className="icon wow fadeInUp">
                                    <i className="icon-checkbox" />
                                  </div>
                                  <div
                                    className="title wow fadeInUp"
                                    data-wow-delay=".1s"
                                  >
                                    {benefit.point}
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
