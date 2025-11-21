import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <section className="section-why-choose h-8 bg-surface tf-spacing-7" style={{ paddingBottom: "70px" }}>
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <div className="text-anime-wave-1">
                <a
                  href="#"
                  className="tag label text-btn-uppercase bg-white mb-12"
                >
                  Redefining the Edutainment Experience
                </a>
              </div>
              <h3 className="title-section mb-12 text-anime-wave-1">
                Building the Future  <br />
                of Learning and Play
              </h3>
            </div>
          </div>
        </div>
        <div className="row rg-30">
          <div className="col-md-4">
            <div className="list-box-icon">
              <div className="box-icon">
                <div className="icon color-primary wow fadeInUp">
                  <Image
                    src="/image/icon/OurBrands&Ventures.svg"
                    alt="Our Brands & Ventures"
                    width={64}
                    height={64}
                  />
                </div>

                <div className="box-content">
                  <h5 className="wow fadeInUp">
                    <a href="/Our-Ventures" className="title-box">
                      Our Brands & Ventures
                    </a>
                  </h5>
                  <div className="sub-title wow fadeInUp">
                    Discover our portfolio of pioneering family and entertainment ventures designed to educate, engage, and inspire.
                  </div>
                </div>
              </div>
              <div className="box-icon">
                <div className="icon color-primary wow fadeInUp">
                  <Image
                    src="/image/icon/investorRelations.svg"
                    alt="Our Brands & Ventures"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="box-content">
                  <h5 className="wow fadeInUp">
                    <a href="/Investor-Relations" className="title-box">
                      Investor Relations
                    </a>
                  </h5>
                  <div className="sub-title wow fadeInUp">
                    A transparent investment platform driving sustainable growth and community impact.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="image img-section-why-h-8 tf-animate-2"
              data-delay=".4s"
            >
              <Image
                src="/image/section/familyPhoto.png"
                alt=""
                className="lazyload"
                width={410}
                height={522}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="list-box-icon">
              <div className="box-icon">
                <div
                  className="icon cFranchise&Partnership.svgolor-primary wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <Image
                    src="/image/icon/Franchise&Partnership.svg"
                    alt="Franchise & Partnership"
                    width={64}
                    height={64}
                  />
                </div>

                <div className="box-content">
                  <h5 className="wow fadeInUp" data-wow-delay=".3s">
                    <a href="/Franchise-Partnership" className="title-box">
                      Franchise & Partnership
                    </a>
                  </h5>
                  <div className="sub-title wow fadeInUp" data-wow-delay=".3s">
                    Join a trusted brand with proven success across the region. Partner with us to build new learning cities for kids.
                  </div>
                </div>
              </div>
              <div className="box-icon">
                <div
                  className="icon cFranchise&Partnership.svgolor-primary wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <Image
                    src="/image/icon/CSR&Impact.svg"
                    alt="Franchise & Partnership"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="box-content">
                  <h5 className="wow fadeInUp" data-wow-delay=".3s">
                    <a href="/services" className="title-box">
                      CSR & Impact
                    </a>
                  </h5>
                  <div className="sub-title wow fadeInUp" data-wow-delay=".3s">
                    Empowering youth through education, community action, and sustainability programs.
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
