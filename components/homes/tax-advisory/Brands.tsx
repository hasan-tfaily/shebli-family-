import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getStrapiMediaUrl } from "@/lib/strapi/media";

export default function Brands({ brandsSectionData }: any) {
  console.log("brandsSectionData:", brandsSectionData);
  return (
    <section className="section-brand h-7 section-one-page" id="cta" style={{marginTop: "100px"}}>
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="text-heading">
              <h5>
                <span style={{color:"#232559"}}>{brandsSectionData?.title}</span>
              </h5>
            </div>
            <div className="tf-marquee tf-spacing-25">
              <div className="marquee-wrapper">
                <div className="initial-child-container">
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[0])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[1])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[2])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[3])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[4])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  {/* 2 */}
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[0])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[1])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[2])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[3])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[4])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  {/* 3 */}
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[0])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[1])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[2])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[3])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[4])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  {/* 4 */}
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[0])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[1])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[2])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[3])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item style-opacity">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandsSectionData?.imageScroll[4])}
                        width={226}
                        height={44}
                      />
                    </a>
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
