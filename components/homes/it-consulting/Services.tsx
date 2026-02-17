"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { getStrapiMediaUrl } from "@/lib/strapi/media";

export default function Services({ servicesSection }: any) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!servicesSection?.featuredItems) return null;

  const servicesData = servicesSection.featuredItems.map(
    (item: any, index: number) => ({
      ...item,
      id: `service-${index}`,
    })
  );

  // ✅ Button (same structure you used in Process)
  const primaryBtn = servicesSection?.ButtonLinks?.[0];

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
                  {servicesSection?.miniTitle}
                </a>
              </div>

              <h3 className="title-section text-anime-wave-1 mb-12">
                {servicesSection?.title}
              </h3>

              <div className="sub-title body-2 text-anime-wave-1">
                {servicesSection?.description}
              </div>
            </div>

            <div className="flat-animate-tab">
              <div className="wg-tab">
                <ul className="tab-product tab-left" role="tablist">
                  {servicesData.map((item: any, index: number) => (
                    <li
                      className="nav-tab-item"
                      role="presentation"
                      key={item.id}
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

              <div className="tab-content">
                {servicesData.map((item: any, index: number) => (
                  <div
                    key={item.id}
                    className={`tab-pane${
                      activeIndex === index ? " active show" : ""
                    }`}
                    id={item.id}
                    role="tabpanel"
                    style={{ display: activeIndex === index ? "block" : "none" }}
                  >
                    <div
                      className="services-inner bg-surface"
                      style={{ paddingTop: "20px" }}
                    >
                      <div className="services-content">
                        <h4 className="title-content mb-12">{item.title}</h4>

                        <div className="sub-title mb-28 body-2">{item.Body}</div>

                        {/* ✅ SINGLE COLUMN BENEFITS */}
                        <div className="cols mb-20">
                          <div className="benefit-lists item">
                            {item.list?.map((benefit: any, i: number) => (
                              <div className="benefit-items" key={i}>
                                <div className="icon">
                                  <i className="icon-checkbox" />
                                </div>
                                <div className="title">{benefit.point}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* ✅ Button at the bottom of the text */}
                        {primaryBtn?.link && primaryBtn?.title ? (
                          <div className="text-anime-wave-2 services-btn">
                            <Link
                              href={primaryBtn.link}
                              className="tf-btn style-1 bg-white"
                            >
                              <span>{primaryBtn.title}</span>
                            </Link>
                          </div>
                        ) : null}
                      </div>

                      <div className="image">
                        <Image
                          src={
                            getStrapiMediaUrl(item.img) ||
                            "/image/section/services 1.jpg"
                          }
                          alt={item.title}
                          className="lazyload"
                          width={615}
                          height={615}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <style jsx global>{`
              /* ✅ spacing for the new button */
              .section-services .services-btn {
                margin-top: 18px;
                text-align: left;
              }

              /* Let the left content use the available width */
              .section-services .services-content {
                flex: 1 1 0%;
                width: 100% !important;
                max-width: none !important;
                min-width: 0;
              }

              /* Let the benefits block stretch fully */
              .section-services .cols,
              .section-services .benefit-lists.item,
              .section-services .benefit-items {
                width: 100% !important;
                max-width: none !important;
              }

              /* Make sure the text can take the remaining space next to the icon */
              .section-services .benefit-items .title {
                flex: 1 1 auto;
                min-width: 0;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}