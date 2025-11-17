import Image from "next/image";
import React from "react";

export default function Faqs() {
  return (
    <section className="section-faqs h-5 tf-spacing-2">
      <div className="tf-container position-relative">
        <div className="row rg-60">
          <div className="col-lg-6">
            <div className="section-faqs-left mr-15">
              <div className="image tf-animate-1">
                <Image
                  src="/image/section/Home - 5 FAQ.png"
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
                    FAQs
                  </a>
                </div>
                <h3 className="wow fadeInUp">
                  Find Answers to Your <br />
                  Question
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
                      What is Kidz Holding?
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
                        Kidz Holding is the corporate group behind the KidzMondo edutainment brand, focused on learning through play and youth development across the MENA region.
                      </p>
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
                      What does “edutainment” mean?
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
                        Edutainment combines education and entertainment, creating immersive experiences that teach life skills in fun, engaging ways.
                      </p>
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
                    How can I invest or open a franchise?
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
                       Visit our Franchise & Partnership page to learn about available territories and submit an inquiry.
                      </p>
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
                      Where are you currently operating?
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
                       We operate in Beirut and Doha, with expansion plans in Saudi Arabia, Egypt, and the UAE.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="according-item">
                  <h5>
                    <a
                      href="#according-5"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
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
                    <div className="according-content">
                      <p>
                        Schools can organize curriculum‑linked trips through the Contact page or directly via our Education team.
                      </p>
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
