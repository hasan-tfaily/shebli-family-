import { getStrapiMediaUrl } from "@/lib/strapi/media";
import Image from "next/image";
import React from "react";

export default function Faqs( { faqsSection }: { faqsSection?: any }) {
  return (
    <section className="section-faqs h-5 tf-spacing-2">
      <div className="tf-container position-relative">
        <div className="row rg-60">
          <div className="col-lg-6">
            <div className="section-faqs-left mr-15">
              <div className="image tf-animate-1">
                <Image
                  src={getStrapiMediaUrl(faqsSection?.img)}
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
                    {faqsSection?.miniTitle}
                  </a>
                </div>
                <h3 className="wow fadeInUp">
                  {faqsSection?.title}
                </h3>
              </div>

              <div className="wg-according style-border" id="According">
                {/* 1️⃣ First question OPEN by default */}
                <div className="according-item">
                  <h5>
                    <a
                      href="#according-1"
                      data-bs-toggle="collapse"
                      className="title-according" // removed "collapsed"
                    >
                      {faqsSection?.featuredItems?.[0]?.title}
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-1"
                    className="collapse show" // added "show"
                    data-bs-parent="#According"
                  >
                    <div className="according-content">
                      <p>
                        {faqsSection?.featuredItems?.[0]?.Body}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2️⃣ Second question CLOSED by default */}
                <div className="according-item">
                  <h5>
                    <a
                      href="#according-2"
                      data-bs-toggle="collapse"
                      className="title-according collapsed" // added "collapsed"
                    >
                      {faqsSection?.featuredItems?.[1]?.title}
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-2"
                    className="collapse" // removed "show"
                    data-bs-parent="#According"
                  >
                    <div className="according-content">
                      <p>
                        {faqsSection?.featuredItems?.[1]?.Body}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3 */}
                <div className="according-item">
                  <h5>
                    <a
                      href="#according-3"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
                    >
                      {faqsSection?.featuredItems?.[2]?.title}
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
                        {faqsSection?.featuredItems?.[2]?.Body}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4 */}
                <div className="according-item">
                  <h5>
                    <a
                      href="#according-4"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
                    >
                      {faqsSection?.featuredItems?.[3]?.title}
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
                        {faqsSection?.featuredItems?.[3]?.Body}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5 */}
                <div className="according-item">
                  <h5>
                    <a
                      href="#according-5"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
                    >
                      {faqsSection?.featuredItems?.[4]?.title}
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
                        {faqsSection?.featuredItems?.[4]?.Body}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 6 */}
                <div className="according-item">
                  <h5>
                    <a
                      href="#according-6"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
                    >
                      {faqsSection?.featuredItems?.[5]?.title}
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-6"
                    className="collapse"
                    data-bs-parent="#According"
                  >
                    <div className="according-content">
                      <p>
                        {faqsSection?.featuredItems?.[5]?.Body}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 7 */}

              <div className="according-item">
                  <h5>
                    <a
                      href="#according-7"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
                    >
                      {faqsSection?.featuredItems?.[6]?.title}
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-7"
                    className="collapse"
                    data-bs-parent="#According"
                  >
                    <div className="according-content">
                      <p>
                        {faqsSection?.featuredItems?.[6]?.Body}
                      </p>
                    </div>
                  </div>
                </div>
                {/* 8 */}

                <div className="according-item">
                  <h5>
                    <a
                      href="#according-8"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
                    >
                      {faqsSection?.featuredItems?.[7]?.title}
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-8"
                    className="collapse"
                    data-bs-parent="#According"
                  >
                    <div className="according-content">
                      <p>
                        {faqsSection?.featuredItems?.[7]?.Body}
                      </p>
                    </div>
                  </div>
                </div>
                {/* 9 */}

                <div className="according-item">
                  <h5>
                    <a
                      href="#according-9"
                      data-bs-toggle="collapse"
                      className="title-according collapsed"
                    >
                      {faqsSection?.featuredItems?.[8]?.title}
                      <span />
                    </a>
                  </h5>
                  <div
                    id="according-9`"
                    className="collapse"
                    data-bs-parent="#According"
                  >
                    <div className="according-content">
                      <p>
                        {faqsSection?.featuredItems?.[8]?.Body}
                      </p>
                    </div>
                  </div>
                </div>

                
              </div>
              {/* end wg-according */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
