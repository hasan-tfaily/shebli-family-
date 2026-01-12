import Link from "next/link";
import Image from "next/image";
import React from "react";
import OdometerComponent from "@/components/common/OdometerComponent";
import { getStrapiMediaUrl } from "@/lib/strapi/media";

export default function About({ aboutSection, testimonialSection }: { aboutSection?: any; testimonialSection?: any }) {
  const featureItems = testimonialSection?.featuredItems ?? [];
  const counters = featureItems.map((item: any) => ({
    value: item?.Body,
    label: item?.title,
  }));
  return (
    <section className="section-about h-5 tf-spacing-2 section-one-page" id="about" style={{ paddingBottom: "0px" }}>
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-left mr-10">
              <div className="image item-1 tf-animate-1">
                <Image
                  src={getStrapiMediaUrl(aboutSection?.img) || "/image/placeholder.jpg"}
                  alt="Team collaborating"
                  className="lazyload"
                  width={450}
                  height={600}
                />
              </div>
              <div className="image item item-2 tf-animate-3">
                <Image
                  src={getStrapiMediaUrl(aboutSection?.featuredItems?.[0]?.img) || "/image/placeholder.jpg"}
                  alt="Analytics dashboard"
                  className="lazyload"
                  width={320}
                  height={320}
                />
              </div>
              {/* <div className="item item-3 number-year text-center tf-animate-2">
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
              </div> */}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="section-content ml-40">
              <div className="heading-section mb-32">
                <div className="wow fadeInUp">
                  <a href="#" className="tag label text-btn-uppercase mb-16">
                    {aboutSection?.miniTitle}
                  </a>
                </div>
                <h3 className="title-section mb-20 wow fadeInUp">
                  {aboutSection?.title}
                </h3>
                <div className="sub-title color-text-2 wow fadeInUp">
                  {aboutSection?.description}
                </div>
              </div>

              <div className="benefit-lists mb-32">
                <div className="benefit-items style-small mb-16">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                  {aboutSection?.list?.[0]?.point}
                  </div>
                </div>
                <div className="benefit-items style-small mb-16">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                  {aboutSection?.list?.[1]?.point}
                  </div>
                </div>
                <div className="benefit-items style-small">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                    {aboutSection?.list?.[2]?.point}
                  </div>
                </div>
              </div>

              <div className="bottom">
                <div className="wow fadeInUp" >
                  <Link href={aboutSection?.ButtonLinks?.[0]?.link} className="tf-btnN style-1 bg-on-surface-container">
                    <span>{aboutSection?.ButtonLinks?.[0]?.title}</span>
                  </Link>
                </div>





                <div className="tf-phone no-border style-2">
                  <div className="bottom">
                    <div className="wow fadeInUp">
                      <Link href={aboutSection?.ButtonLinks?.[1]?.link} className="tf-btn style-1 bg-on-surface-container">
                        <span>{aboutSection?.ButtonLinks?.[1]?.title}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Counters section */}
      <section
        className="section-why-choose h-7 bg-surface tf-spacing-31"
        style={{
          marginTop: "100px",
          backgroundColor: "#232559", // no need !important here
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <div className="tf-container position-relative">
          <div className="row">
            <div className="col-12">
              <div className="wg-counter justify-content-between">
                {counters.map((c, i) => (
                  <div className="counter-item style-3" key={i}>
                    <div className="counter">
                      <div className="number-counter">
                        <h2
                          className="number odometer"
                        >
                          <OdometerComponent max={c.value ?? 0} />
                        </h2>
                        <h2 className="plus" >
                          +
                        </h2>
                      </div>

                      <h6
                        className="text"
                        style={{ color: "white" }} // label text in white too (optional)
                        dangerouslySetInnerHTML={{ __html: c.label ?? "" }}
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
