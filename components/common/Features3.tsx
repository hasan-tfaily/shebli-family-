import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Features3({
    parentClass = "section-why-choose h-2 tf-spacing-31",
    hasBorder = false,
}) {
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
                                src="/image/section/WhyChooseUsAbout.png"
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
                                    Our People

                                </h3>
                                <div className="sub-title body-2 wow fadeInUp">
                                    At Kidz Holding, our people are the heart of everything we create.
                                    Behind every concept, every experience, and every memorable moment stands a diverse team of passionate professionals who believe in the power of play, learning, and creativity.
                                    Our teams span multiple disciplines from architects, designers, educators, and experience developers to operators, marketers, and technology specialists. Together, we build destinations that inspire everyone and enrich communities. We value talent that is:

                                </div>
                            </div>
                            <div className="benefit-lists">
                                <div className="benefit-items">
                                    <div className="icon wow fadeInUp">
                                        <i className="icon-checkbox" />
                                    </div>
                                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                                        Creative in thought and execution
                                    </div>
                                </div>
                                <div className="benefit-items">
                                    <div className="icon wow fadeInUp">
                                        <i className="icon-checkbox" />
                                    </div>
                                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                                        Committed to delivering world-class experiences
                                    </div>
                                </div>
                                <div className="benefit-items">
                                    <div className="icon wow fadeInUp">
                                        <i className="icon-checkbox" />
                                    </div>
                                    <div className="title wow fadeInUp" data-wow-delay=".1">
                                        Experience focus
                                    </div>
                                </div>
                                <div className="benefit-items">
                                    <div className="icon wow fadeInUp">
                                        <i className="icon-checkbox" />
                                    </div>
                                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                                        Professional, reliable, and passionate about growth
                                    </div>
                                </div>
                                <div className="benefit-items">
                                    <div className="icon wow fadeInUp">
                                        <i className="icon-checkbox" />
                                    </div>
                                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                                        Collaborative, contributing to a culture of support and innovation
                                    </div>
                                </div>

                            </div>

                            <div className="sub-title body-2 wow fadeInUp">
                                At Kidz Holding, we invest in our people by fostering a workplace where ideas are encouraged, skills are developed, and careers grow with purpose.

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
