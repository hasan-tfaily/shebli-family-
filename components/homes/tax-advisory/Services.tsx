"use client";

import Image from "next/image";
import React from "react";

export default function Services() {
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
                      Our Process
                    </a>
                  </div>
                  <h3 className="text-anime-wave">From Concept to Grand Opening</h3>
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
                          Franchise
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
                          Management Contract
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
                          Concept Development
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
                          Consulting Services
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
                        <h4 className="mb-12">Franchise</h4>
                        <div className="desc body-2">
                          Our strong brand portfolio and proven track record make Kidz Holding concepts highly attractive to investors and operators worldwide. Our brands consistently generate exceptional footfall, enhance destination value, and deliver strong commercial performance. Through our franchise model, partners gain access to world-class expertise across design, delivery, operations, training, marketing, and ongoing support. This allows franchisees to operate confidently and efficiently under the Kidz Holding system while benefiting from our deep industry knowledge, operational excellence, and continuous development.
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
                        <h4 className="mb-12">Management Contract</h4>
                        <div className="desc body-2">
                          Kidz Holding offers comprehensive management solutions for entertainment assets of all sizes. With extensive operational expertise and multidisciplinary capabilities, we help partners unlock the full potential of their attractions. We manage both our own concepts and third-party brands, ensuring operational excellence, commercial optimization, staff training, guest experience enhancement, and long-term business sustainability. Our global experience positions us as a trusted operator for leisure destinations seeking reliable, results-driven management.
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
                        <h4 className="mb-12">Concept Development</h4>
                        <div className="desc body-2">
                          We specialize in creating original, future-ready entertainment concepts that combine imagination, fun, education, and commercial viability. Our team develops fully integrated experiences built on strong storytelling, innovative activities, and a clear operational and financial foundation. From edutainment centers and FECs to themed attractions and hybrid leisure concepts, we transform ideas into scalable brands tailored to each market’s cultural and commercial needs.
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
                        <h4 className="mb-12">Consulting Services</h4>
                        <div className="desc body-2">
  <p className="mb-20">
    <span style={{ fontWeight: 600 , color:"black" }}>Consultancy and Advisory Services</span>{" "}
    Comprehensive support from information analysis and project diagnosis to
    feasibility evaluation and clear implementation planning—tailored to drive
    strategic success.
  </p>

  <p className="mb-20">
    <span style={{ fontWeight: 600 ,color:"black"}}>Strategy Development</span>{" "}
    We craft impactful strategies through clear mission definition, focused
    strategy formulation, compelling USP development, strong design fundamentals,
    and a refined customer journey.
  </p>

  <p className="mb-20">
    <span style={{ fontWeight: 600 ,color:"black" }}>Concept Design and Development</span>{" "}
    From structured thinking processes and compelling storytelling to initial
    sketches, preliminary concepts, and in-depth detail development—we shape ideas
    into powerful, creative solutions.
  </p>

  <p className="mb-0">
    <span style={{ fontWeight: 600 ,color:"black"}}>Project Delivery and Assurance</span>{" "}
    End-to-end execution covering supply chain, team onboarding, ERP integration,
    and coordinated marketing, with seamless operations and follow-up to ensure
    lasting success.
  </p>
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
