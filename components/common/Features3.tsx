import Link from "next/link";
import Image from "next/image";
import React from "react";
import { sectionServices } from "@/data/services";
import { get } from "http";
import { getStrapiMediaAlt, getStrapiMediaUrl } from "@/lib/strapi/media";    

export default function Features3({
    parentClass = "section-why-choose h-2 tf-spacing-31",
    hasBorder = false,
    featuresSection
}: { parentClass?: string; hasBorder?: boolean; featuresSection?: any }) {
    return (
        <section className={parentClass}>
            <div className="tf-container position-relative">
                <div
                    className={` ${hasBorder
                        ? "row rg-60 border-bottom tf-spacing-31"
                        : "row rg-60 align-items-center"
                        } `}
                >
                    <div className="col-lg-6">
                        <div className="image mr-15 tf-animate-1">
                            <Image
                                src={getStrapiMediaUrl(featuresSection?.img)}
                                alt=""
                                className="lazyload"
                                width={615}
                                height={615}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-content ml-15">
                            <div className="heading-section">
                                {/* <div className="wow fadeInUp">
                  <a href="#" className="tag label text-btn-uppercase">
                    Why Choose us?
                  </a>
                </div> */}
                                <h3 className="title-section wow fadeInUp mb-12">
                                    {featuresSection?.title}

                                </h3>
                                <div className="sub-title body-2 wow fadeInUp">
                                    {featuresSection?.description}

                                </div>
                            </div>
                            <div className="benefit-lists">
                                <div className="benefit-items">
                                    <div className="icon wow fadeInUp">
                                        <i className="icon-checkbox" />
                                    </div>
                                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                                        {featuresSection?.list[0]?.point}
                                    </div>
                                </div>
                                <div className="benefit-items">
                                    <div className="icon wow fadeInUp">
                                        <i className="icon-checkbox" />
                                    </div>
                                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                                        {featuresSection?.list[1]?.point}
                                    </div>
                                </div>
                                <div className="benefit-items">
                                    <div className="icon wow fadeInUp">
                                        <i className="icon-checkbox" />
                                    </div>
                                    <div className="title wow fadeInUp" data-wow-delay=".1">
                                        {featuresSection?.list[2]?.point}
                                    </div>
                                </div>
                                <div className="benefit-items">
                                    <div className="icon wow fadeInUp">
                                        <i className="icon-checkbox" />
                                    </div>
                                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                                        {featuresSection?.list[3]?.point}
                                    </div>
                                </div>
                                <div className="benefit-items">
                                    <div className="icon wow fadeInUp">
                                        <i className="icon-checkbox" />
                                    </div>
                                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                                        {featuresSection?.list[4]?.point}
                                    </div>
                                </div>

                            </div>

                            <div className="sub-title body-2 wow fadeInUp">
                                {featuresSection?.miniTitle}

                            </div>
                            {/* <Link
                                href={`/contact-us`}
                                className="tf-btn style-1 bg-on-suface-container wow fadeInUp"
                            >
                                <span> Request a Quote </span>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
