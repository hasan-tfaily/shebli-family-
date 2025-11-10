import Link from "next/link";
import Image from "next/image";
import React from "react";
import { counters3 } from "@/data/cta";

import OdometerComponent from "@/components/common/OdometerComponent";

export default function About() {
  return (
    <section
      className="section-about h-5 tf-spacing-2 section-one-page"
      id="about"
    >
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-left mr-10">
              <div className="image item-1 tf-animate-1">
                <Image
                  src="/image/section/about1.png"
                  alt=""
                  className="lazyload"
                  width={450}
                  height={600}
                />
              </div>
              <div className="image item item-2 tf-animate-3">
                <Image
                  src="/image/section/about2.png"
                  alt=""
                  className="lazyload"
                  width={320}
                  height={320}
                />
              </div>
              <div className="item item-3 number-year text-center tf-animate-2">
                <div className="counter-item">
                  <div className="counter">
                    <div className="number-counter mb-0">
                      <h3 className="number odometer">
                        <OdometerComponent max={25} />
                      </h3>
                      <h3 className="plus">+</h3>
                    </div>
                  </div>
                </div>
                <p className="text-btn">
                  Year Of <br />
                  Experience
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-content ml-40">
              <div className="heading-section mb-32">
                <div className="wow fadeInUp">
                  <a href="#" className="tag label text-btn-uppercase mb-16">
                    Leading the Way in Data Analytics
                  </a>
                </div>
                <h3 className="title-section mb-20 wow fadeInUp">
                  Empowering Your Business <br />
                  Success
                </h3>
                <div className="sub-title color-text-2 wow fadeInUp">
                  At FinWice, we empower businesses with tailored strategies,
                  innovative solutions, and expert consulting. Our industry
                  professionals drive growth and guide you through challenges to
                  achieve success.
                </div>
              </div>
              <div className="benefit-lists mb-32">
                <div className="benefit-items style-small mb-16">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                    Highly Experienced, Skilled Team
                  </div>
                </div>
                <div className="benefit-items style-small mb-16">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                    Competitive, Transparent Pricing
                  </div>
                </div>
                <div className="benefit-items style-small">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                    Fast Turnaround, Minimal Disruption
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="wow fadeInUp">
                  <Link
                    href={`/about-us`}
                    className="tf-btn style-1 bg-on-suface-container"
                  >
                    <span>About Us</span>
                  </Link>
                </div>
                <div className="tf-phone no-border style-2">
                  <a
                    href="#"
                    className="icon wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <i className="icon-PhoneCall" />
                  </a>
                  <div className="content wow fadeInUp" data-wow-delay=".2s">
                    <p className="caption-1">Have any Question?</p>
                    <h5>
                      <a href="#">1-555-678-8888</a>
                    </h5>
                  </div>
                </div>


           




              </div>
            </div>
          </div>
        </div>
        
      </div>
           <section className="section-why-choose h-7 bg-surface tf-spacing-31" style={{marginTop: "100px"}}>
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="wg-counter justify-content-between">
              {counters3.map((c, i) => (
                <div className="counter-item style-3" key={i}>
                  <div className="counter">
                    <div className="number-counter">
                      <h2 className="number odometer">
                        <OdometerComponent max={c.value} />
                      </h2>
                      <h2 className="plus">+</h2>
                    </div>
                    <h6
                      className="text"
                      dangerouslySetInnerHTML={{ __html: c.label }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
}
