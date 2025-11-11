import Link from "next/link";
import Image from "next/image";
import React from "react";
import { counters2 } from "@/data/cta";
import OdometerComponent from "@/components/common/OdometerComponent";

export default function About() {
  return (
    <section className="section-about h-6 mb-40 section-one-page" id="about">
      <div className="section-about-inner">
        <div className="image tf-animate-1">
          <Image
            src="/image/section/img-section-about-h3.jpg"
            alt=""
            className="lazyload"
            width={600}
            height={600}
          />
        </div>
        <div className="section-about-content">
          <div className="heading-section style-color-white mb-60">
            {/* <div className="wow fadeInUp">
              <a href="#" className="tag label text-btn-uppercase bg-white">
                WE ARE FinWice
              </a>
            </div> */}
            <h2 className="mb-28 title-section wow fadeInUp">
              Operating Advantages:
            </h2>
            <div className="sub-title mb-32 wow fadeInUp">
              At FinWice, we empower businesses with tailored strategies,
              innovative solutions, and expert consulting. Our industry
              professionals drive growth and guide you through challenges to
              achieve success.
            </div>

             <div className="benefit-lists mb-32">
                <div className="benefit-items style-small mb-16">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s" style={{color: "white"}}>
                    Operational excellence and quality assurance
                  </div>
                </div>
                <div className="benefit-items style-small mb-16">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s" style={{color: "white"}}>
                    Safety and compliance leadership
                  </div>
                </div>
                <div className="benefit-items style-small mb-16">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s" style={{color: "white"}}>
                    Certified educational curriculum
                  </div>
                </div>
                <div className="benefit-items style-small mb-16">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s" style={{color: "white"}}>
                    Strategic partnerships and sponsorship opportunities
                  </div>
                </div>
              </div>
            {/* <div className="wow fadeInUp">
              <Link
                href={`/about-us`}
                className="tf-btn style-1 bg-white bg-white-style-2"
              >
                <span> About Us </span>
              </Link>
            </div> */}
          </div>
          <div className="wg-counter justify-content-between">
            {counters2.map((counter, index) => (
              <React.Fragment key={index}>
                <div className="counter-item style-2">
                  <div className="counter">
                    <div className="number-counter">
                      <h3 className="number odometer">
                        <OdometerComponent max={counter.value} />
                      </h3>
                      <h3 className="plus">+</h3>
                    </div>
                    <p className="text text-btn-uppercase label">
                      {counter.label}
                    </p>
                  </div>
                </div>
                {index !== counters2.length - 1 && <div className="line" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
