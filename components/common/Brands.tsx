import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getStrapiMediaUrl } from "@/lib/strapi/media";

export default function Brands( { brandSection }: { brandSection?: any }) {
  return (
    <section className="section-brand h-5 tf-spacing-3">
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <h5 className="text text-center mb-28" style={{color:"#232559", marginTop:"80px"}}>
              {brandSection?.title}
            </h5>
            <div className="tf-marquee">
              <div className="marquee-wrapper">
                <div className="initial-child-container">
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[0])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[1])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[2])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[3])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[4])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  {/* 2 */}
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[0])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[1])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[2])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[3])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[4])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  {/* 3 */}
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[0])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[1])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[2])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[3])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[4])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  {/* 4 */}
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[0])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[1])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[2])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[3])}
                        width={226}
                        height={44}
                      />
                    </a>
                  </div>
                  <div className="marquee-child-item">
                    <a href="#" className="brand-item">
                      <Image
                        alt=""
                        src={getStrapiMediaUrl(brandSection?.imageScroll?.[4])}
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
