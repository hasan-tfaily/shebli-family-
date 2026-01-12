"use client";

import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function Services({ servicesSection }: { servicesSection?: any }) {
  return (
    <section
      className="section-services h-7 bg-surface tf-spacing-31 section-one-page"
      id="services"
    >
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="section-services-inner">
              <div className="heading-section style-2">
                <div className="left">
                  <div className="text-anime-wave">
                    <a href="#" className="tag label text-btn-uppercase bg-white">
                      {servicesSection?.miniTitle}
                    </a>
                  </div>
                  <h3 className="text-anime-wave">{servicesSection?.title}</h3>
                </div>
              </div>

              <div className="flat-animate-tab style-row">
                <div className="wg-tab style-3">
                  <ul className="tab-product" role="tablist">
                    <li className="nav-tab-item" role="presentation">
                      <h5>
                        <a
                          id="tab-franchise"
                          href="#franchise"
                          data-bs-toggle="tab"
                          role="tab"
                          aria-controls="franchise"
                          aria-selected="false"
                        >
                          {servicesSection?.featuredItems?.[0]?.title}
                        </a>
                      </h5>
                    </li>

                    <li className="nav-tab-item" role="presentation">
                      <h5>
                        <a
                          id="tab-management-contract"
                          href="#management-contract"
                          className="active"
                          data-bs-toggle="tab"
                          role="tab"
                          aria-controls="management-contract"
                          aria-selected="true"
                        >
                          {servicesSection?.featuredItems?.[1]?.title}
                        </a>
                      </h5>
                    </li>

                    <li className="nav-tab-item" role="presentation">
                      <h5>
                        <a
                          id="tab-concept-development"
                          href="#concept-development"
                          data-bs-toggle="tab"
                          role="tab"
                          aria-controls="concept-development"
                          aria-selected="false"
                        >
                          {servicesSection?.featuredItems?.[2]?.title}
                        </a>
                      </h5>
                    </li>

                    <li className="nav-tab-item" role="presentation">
                      <h5>
                        <a
                          id="tab-consulting-services"
                          href="#consulting-services"
                          data-bs-toggle="tab"
                          role="tab"
                          aria-controls="consulting-services"
                          aria-selected="false"
                        >
                          {servicesSection?.featuredItems?.[3]?.title}
                        </a>
                      </h5>
                    </li>
                  </ul>
                </div>

                <div className="tab-content">
                  {/* Franchise */}
                  <div className="tab-pane" id="franchise" role="tabpanel" aria-labelledby="tab-franchise">
                    <div className="item-content">
                      {/* <div className="image mb-20">
                        <Image
                          src="/image/section/img-services-h7.jpg"
                          alt="Franchise"
                          className="lazyload"
                          width={760}
                          height={427}
                        />
                      </div> */}
                      <div className="content">
                        <h4 className="mb-12">{servicesSection?.featuredItems?.[0]?.title}</h4>
                        <div className="desc body-2">
                          {servicesSection?.featuredItems?.[0]?.Body}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Management Contract (default active) */}
                  <div
                    className="tab-pane active show"
                    id="management-contract"
                    role="tabpanel"
                    aria-labelledby="tab-management-contract"
                  >
                    <div className="item-content">
                      {/* <div className="image mb-20">
                        <Image
                          src="/image/section/img-services-h7.jpg"
                          alt="Management Contract"
                          className="lazyload"
                          width={760}
                          height={427}
                        />
                      </div> */}
                      <div className="content">
                        <h4 className="mb-12">{servicesSection?.featuredItems?.[1]?.title}</h4>
                        <div className="desc body-2">
                          {servicesSection?.featuredItems?.[1]?.Body}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Concept Development */}
                  <div
                    className="tab-pane"
                    id="concept-development"
                    role="tabpanel"
                    aria-labelledby="tab-concept-development"
                  >
                    <div className="item-content">
                      {/* <div className="image mb-20">
                        <Image
                          src="/image/section/img-services-h7.jpg"
                          alt="Concept Development"
                          className="lazyload"
                          width={760}
                          height={427}
                        />
                      </div> */}
                      <div className="content">
                        <h4 className="mb-12">{servicesSection?.featuredItems?.[2]?.title}</h4>
                        <div className="desc body-2">
                          {servicesSection?.featuredItems?.[2]?.Body}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Consulting Services */}
                  <div
                    className="tab-pane"
                    id="consulting-services"
                    role="tabpanel"
                    aria-labelledby="tab-consulting-services"
                  >
                    <div className="item-content">
                      {/* <div className="image mb-20">
                        <Image
                          src="/image/section/img-services-h7.jpg"
                          alt="Consulting Services"
                          className="lazyload"
                          width={760}
                          height={427}
                        />
                      </div> */}
                      <div className="content">
                        <h4 className="mb-12">{servicesSection?.featuredItems?.[3]?.title}</h4>
                        <div className="desc body-2">
                          <ReactMarkdown>
                            {servicesSection?.featuredItems?.[3]?.Body}
                          </ReactMarkdown>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
