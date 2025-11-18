import Link from "next/link";
import Image from "next/image";
import Breadcumb from "@/components/common/Breadcumb";
import { Metadata } from "next";
import Brands from "@/components/homes/tax-advisory/Brands";

export const metadata: Metadata = {
  title:
    "Services || FinWice - Business & Finance Consulting - React Nextjs Template",
  description:
    "FinWice - Business & Finance Consulting - React Nextjs Template",
};

export default function Page() {
  return (
    <>
      <div className="page-title style-1 bg-img-8">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Services" />
            <h2 className="title-page-title">Services </h2>
            <div className="sub-title body-2">
              Building brighter futures through education, community, and sustainability.            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
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
              {/* 1 */}
              <div
                className="col-lg-4 col-md-6"
                style={{ display: "flex" }} // flex column wrapper
              >
                <div
                  className="industry-item style-2"
                  style={{ flex: 1, width: "100%" }} // stretch to same height
                >
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
                </div>
              </div>

              {/* 2 */}
              <div
                className="col-lg-4 col-md-6"
                style={{ display: "flex" }}
              >
                <div
                  className="industry-item style-2"
                  style={{ flex: 1, width: "100%" }}
                >
                  <div className="top">
                    <div className="icon">
                      <i className="icon-FirstAidKit" />
                    </div>
                    <h6>
                      <a href="#" className="name-industry">
                        Hospitality and<br />
                        Leisure Resort
                      </a>
                    </h6>
                  </div>
                </div>
              </div>

              {/* 3 */}
              <div
                className="col-lg-4 col-md-6"
                style={{ display: "flex" }}
              >
                <div
                  className="industry-item style-2"
                  style={{ flex: 1, width: "100%" }}
                >
                  <div className="top">
                    <div className="icon">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
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
                          <clipPath id="clip0_9360_11765">
                            <rect width="32" height="32" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <h6>
                      <a href="#" className="name-industry">
                        Urban Realm and<br />
                        Leisure Landscape
                      </a>
                    </h6>
                  </div>
                </div>
              </div>

              {/* 4 */}
              <div
                className="col-lg-4 col-md-6"
                style={{ display: "flex" }}
              >
                <div
                  className="industry-item style-2"
                  style={{ flex: 1, width: "100%" }}
                >
                  <div className="top">
                    <div className="icon">
                      <i className="icon-LightbulbFilament" />
                    </div>
                    <h6>
                      <a href="#" className="name-industry">
                        Family Leisure<br />
                        Destinations
                      </a>
                    </h6>
                  </div>
                </div>
              </div>

              {/* 5 */}
              <div
                className="col-lg-4 col-md-6"
                style={{ display: "flex" }}
              >
                <div
                  className="industry-item style-2"
                  style={{ flex: 1, width: "100%" }}
                >
                  <div className="top">
                    <div className="icon">
                      <i className="icon-AirplaneTakeoff" />
                    </div>
                    <h6>
                      <a href="#" className="name-industry">
                        Shopping and Mixed-Use<br />
                        Environment
                      </a>
                    </h6>
                  </div>
                </div>
              </div>

              {/* 6 */}
              <div
                className="col-lg-4 col-md-6"
                style={{ display: "flex" }}
              >
                <div
                  className="industry-item style-2"
                  style={{ flex: 1, width: "100%" }}
                >
                  <div className="top">
                    <div className="icon">
                      <i className="icon-Wrench" />
                    </div>
                    <h6>
                      <a href="#" className="name-industry">
                        Education and<br />
                        Working Environment
                      </a>
                    </h6>
                  </div>
                </div>
              </div>

              {/* 7 */}
              <div
                className="col-lg-4 col-md-6"
                style={{ display: "flex" }}
              >
                <div
                  className="industry-item style-2"
                  style={{ flex: 1, width: "100%" }}
                >
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
                </div>
              </div>

              {/* 8 */}
              <div
                className="col-lg-4 col-md-6"
                style={{ display: "flex" }}
              >
                <div
                  className="industry-item style-2"
                  style={{ flex: 1, width: "100%" }}
                >
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
                </div>
              </div>
            </div>
          </div>
        </section>






        <section className="section-why-choose h-7 bg-surface tf-spacing-31" >
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
                      <a
                        href="#"
                        className="tag label text-btn-uppercase bg-white"
                      >
                        Partnership
                      </a>
                    </div>
                    <h3 className="wow fadeInUp mb-12">Concept Development: <br></br> Our Methodology </h3>
                  </div>
                  <div className="sub-title body-2 wow fadeInUp">
                    We apply a design and leisure thinking approach. We focus on our guests' expectations, the technological trends, and the market change. Our innovative and immersive experiences make us unique. Each project responds to the singular opportunities of the context, culture and characteristics of the community.
                  </div>
                  <div className="cols g-10 " style={{ marginTop: "50px" }}>
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

                      {/* kept as requested */}
                      {/* <div className="benefit-items">
                        <div className="icon wow fadeInUp">
                          <i className="icon-checkbox" />
                        </div>
                        <div className="title wow fadeInUp" data-wow-delay=".1s">
                          High-return franchise model with CSR value.
                        </div>
                      </div> */}
                    </div>
                  </div>
                  {/* /benefit-lists */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Brands />




        <section className="section-faqs h-5 tf-spacing-2">
          <div className="tf-container position-relative">
            <div className="row rg-60">
              <div className="col-lg-6">
                <div className="section-faqs-left mr-15">
                  <div className="image tf-animate-1">
                    <Image
                      src="/image/section/services 2.jpg"
                      alt=""
                      className="lazyloaded"
                      width={615}
                      height={615}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-content ml-35">
                  <div className="heading-section">
                    <div className="wow fadeInUp">
                      <a href="#" className="tag label text-btn-uppercase">
                        From Vision to Reality
                      </a>
                    </div>
                    <h3 className="wow fadeInUp">
                      Concept Development:  <br />
                      Our Methodology
                    </h3>
                  </div>
                  <div className="wg-according style-border" id="According">
                    <div className="according-item">
                      <h5>
                        <a
                          href="#according-1"
                          data-bs-toggle="collapse"
                          className="title-according collapsed"
                        >
                          Consultancy and Advisory Services
                          <span />
                        </a>
                      </h5>
                      <div
                        id="according-1"
                        className="collapse"
                        data-bs-parent="#According"
                      >
                        <div className="according-content">
                          <p>
                            Comprehensive support from information analysis and project diagnosis to feasibility evaluation and clear implementation planning—tailored to drive strategic success.                              </p>
                        </div>
                      </div>
                    </div>
                    <div className="according-item">
                      <h5>
                        <a
                          href="#according-2"
                          data-bs-toggle="collapse"
                          className="title-according"
                        >
                          Strategy Development
                          <span />
                        </a>
                      </h5>
                      <div
                        id="according-2"
                        className="collapse show"
                        data-bs-parent="#According"
                      >
                        <div className="according-content">
                          <p>
                            We craft impactful strategies through clear mission definition, focused strategy formulation, compelling USP development, strong design fundamentals, and a refined customer journey.                              </p>
                        </div>
                      </div>
                    </div>
                    <div className="according-item">
                      <h5>
                        <a
                          href="#according-3"
                          data-bs-toggle="collapse"
                          className="title-according collapsed"
                        >
                          Concept Design and Development
                          <span />
                        </a>
                      </h5>
                      <div
                        id="according-3"
                        className="collapse"
                        data-bs-parent="#According"
                      >
                        <div className="according-content">
                          <p>
                            From structured thinking processes and compelling storytelling to initial sketches, preliminary concepts, and in-depth detail development—we shape ideas into powerful, creative solutions.                              </p>
                        </div>
                      </div>
                    </div>
                    <div className="according-item">
                      <h5>
                        <a
                          href="#according-4"
                          data-bs-toggle="collapse"
                          className="title-according collapsed"
                        >
                          Project Delivery and Assurance
                          <span />
                        </a>
                      </h5>
                      <div
                        id="according-4"
                        className="collapse"
                        data-bs-parent="#According"
                      >
                        <div className="according-content">
                          <p>
                            End-to-end execution covering supply chain, team onboarding, ERP integration, and coordinated marketing, with seamless operations and follow-up to ensure lasting success.                              </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-cta h-2 section-one-page" id="cta">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="cta-inner style-2">
                  <div className="cta-content">
                    <h4 className="title-content">Start your journey with us</h4>
                    <Link
                      href="/contact-us"
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
