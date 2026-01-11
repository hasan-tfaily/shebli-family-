import { getStrapiMediaUrl } from "@/lib/strapi/media";
import { get } from "http";
import Image from "next/image";
import React from "react";

export default function Features({ featureSection }: { featureSection?: any }) {
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
                  {featureSection?.miniTitle}

                </a>
              </div>
              <h3 className="title-section mb-12 text-anime-wave-1">
                {featureSection?.title}
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
                    src={getStrapiMediaUrl(featureSection?.featuredItems?.[0]?.img)}
                    alt="Our Brands & Ventures"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="box-content">
                  <h5 className="wow fadeInUp">
                    <a href="/Our-Ventures" className="title-box">
                      {featureSection?.featuredItems?.[0]?.title}
                    </a>
                  </h5>
                  <div className="sub-title wow fadeInUp">
                    {featureSection?.featuredItems?.[0]?.Body}
                  </div>
                </div>
              </div>
              <div className="box-icon">
                <div className="icon color-primary wow fadeInUp">
                  <Image
                    src={getStrapiMediaUrl(featureSection?.featuredItems?.[1]?.img)}
                    alt="Our Brands & Ventures"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="box-content">
                  <h5 className="wow fadeInUp">
                    <a href="/Investor-Relations" className="title-box">
                      {featureSection?.featuredItems?.[1]?.title}
                    </a>
                  </h5>
                  <div className="sub-title wow fadeInUp">
                    {featureSection?.featuredItems?.[1]?.Body}
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
                src={getStrapiMediaUrl(featureSection?.img)}
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
                    src={getStrapiMediaUrl(featureSection?.featuredItems?.[2]?.img)}
                    alt="Franchise & Partnership"
                    width={64}
                    height={64}
                  />
                </div>

                <div className="box-content">
                  <h5 className="wow fadeInUp" data-wow-delay=".3s">
                    <a href="/Franchise-Partnership" className="title-box">
                      {featureSection?.featuredItems?.[2]?.title}
                    </a>
                  </h5>
                  <div className="sub-title wow fadeInUp" data-wow-delay=".3s">
                    {featureSection?.featuredItems?.[2]?.Body}
                  </div>
                </div>
              </div>
              <div className="box-icon">
                <div
                  className="icon cFranchise&Partnership.svgolor-primary wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <Image
                    src={getStrapiMediaUrl(featureSection?.featuredItems?.[3]?.img)}
                    alt="Franchise & Partnership"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="box-content">
                  <h5 className="wow fadeInUp" data-wow-delay=".3s">
                    <a href="/services" className="title-box">
                      {featureSection?.featuredItems?.[3]?.title}
                    </a>
                  </h5>
                  <div className="sub-title wow fadeInUp" data-wow-delay=".3s">
                    {featureSection?.featuredItems?.[3]?.Body}
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
