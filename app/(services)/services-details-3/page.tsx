import Link from "next/link";

import Details3 from "@/components/services/Details3";
import React from "react";

import { Metadata } from "next";
import Features from "@/components/homes/tax-advisory/Features";
import About from "@/components/homes/strategy-consulting/About";
import Steps from "@/components/services/Steps";
import ContactForm from "@/components/otherPages/ContactForm";
import Process from "@/components/homes/insurance-consultancy/Process";
import Benefits from "@/components/homes/it-consulting/Benefits";
export const metadata: Metadata = {
  title:
    "Franchise & Partnership || Kidz Holding - Franchise & Corporate Website",
  description:
    "Kidz Holding - Franchise & Corporate Website",
};

export const dynamic = "force-dynamic";

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

          <div className="wow fadeInUp" style={{marginTop: "60px", marginBottom:"-30px"}}>
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
        {/* <Details3 /> */}
        <Features />
        <About />

        {/* <div className="tf-container position-relative tf-spacing-2">
          <div className="row justify-content-center">
            <div className="col-lg-10"></div>
            <div className="detalis-content mb-60" id="menu-sidebar-3">
              <Steps />
            </div>
          </div>
        </div> */}

        <Process/>
<Benefits/>
        {/* ===== Contact (right) + FAQs (left) ===== */}
        {/* ===== Contact (LEFT) + FAQs (RIGHT) — INLINE ONLY ===== */}
{/* <section className="section-faqs h-5 tf-spacing-2">
  <div className="tf-container position-relative">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(320px,1fr) minmax(320px,1fr)",
        gap: 24,
        alignItems: "start",
      }}
    >
      <div>
        <h3 style={{ margin: "0 0 16px 0" }}>Get in Touch</h3>
        <ContactForm />
      </div>

      <div>
        <div style={{ margin: "0 0 16px 0" }}>
          
          <h3 style={{ margin: 0 }}>
            Find Answers to Your <br /> Question
          </h3>
        </div>

        <div id="According">
          {(() => {
            const box = {
              display: "flex",
              alignItems: "center",
              minHeight: 56,
              padding: "14px 16px",
              width: "100%",
            } as const;

            return (
              <>
                <div className="according-item" style={{ marginBottom: 8 }}>
                  <h5 style={{ margin: 0 }}>
                    <a
                      href="#according-1"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
                      style={box}
                    >
                      What is Kidz Holding?
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-1"
                    className="collapse"
                    data-bs-parent="#According"
                  >
                    <div className="according-content" style={{ padding: 12 }}>
                      <p style={{ margin: 0 }}>
                        Kidz Holding is the corporate group behind the KidzMondo
                        edutainment brand, focused on learning through play and
                        youth development across the MENA region.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="according-item" style={{ marginBottom: 8 }}>
                  <h5 style={{ margin: 0 }}>
                    <a
                      href="#according-2"
                      data-bs-toggle="collapse"
                      className="title-according"
                      style={box}
                    >
                      What does “edutainment” mean?
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-2"
                    className="collapse show"
                    data-bs-parent="#According"
                  >
                    <div className="according-content" style={{ padding: 12 }}>
                      <p style={{ margin: 0 }}>
                        Edutainment combines education and entertainment,
                        creating immersive experiences that teach life skills in
                        fun, engaging ways.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="according-item" style={{ marginBottom: 8 }}>
                  <h5 style={{ margin: 0 }}>
                    <a
                      href="#according-3"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
                      style={box}
                    >
                      How can I invest or open a franchise?
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-3"
                    className="collapse"
                    data-bs-parent="#According"
                  >
                    <div className="according-content" style={{ padding: 12 }}>
                      <p style={{ margin: 0 }}>
                        Visit our Franchise &amp; Partnership page to learn
                        about available territories and submit an inquiry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="according-item" style={{ marginBottom: 8 }}>
                  <h5 style={{ margin: 0 }}>
                    <a
                      href="#according-4"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
                      style={box}
                    >
                      Where are you currently operating?
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-4"
                    className="collapse"
                    data-bs-parent="#According"
                  >
                    <div className="according-content" style={{ padding: 12 }}>
                      <p style={{ margin: 0 }}>
                        We operate in Beirut and Doha, with expansion plans in
                        Saudi Arabia, Egypt, and the UAE.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="according-item">
                  <h5 style={{ margin: 0 }}>
                    <a
                      href="#according-5"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
                      style={box}
                    >
                      How do schools partner with you?
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-5"
                    className="collapse"
                    data-bs-parent="#According"
                  >
                    <div className="according-content" style={{ padding: 12 }}>
                      <p style={{ margin: 0 }}>
                        Schools can organize curriculum-linked trips through the
                        Contact page or directly via our Education team.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </div>
  </div>
</section> */}

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

        {/* ===== /Contact + FAQs ===== */}
      </div>
    </>
  );
}
