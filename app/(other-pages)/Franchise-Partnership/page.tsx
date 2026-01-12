"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Metadata } from "next";
import Features from "@/components/homes/tax-advisory/Features";
import About from "@/components/homes/strategy-consulting/About";
import Process from "@/components/homes/insurance-consultancy/Process";
import Benefits from "@/components/homes/it-consulting/Benefits";
import Services from "@/components/homes/tax-advisory/Services";
import Image from "next/image";
import { getPageByName } from "@/lib/strapi/queries";
import { getStrapiMediaUrl } from "@/lib/strapi/media";

export default function Page() {
  const [franchisePage, setFranchisePage] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPageByName({
        pageName: "Franchise & Partnership - Page",
        populate: [
          "Hero",
          "Hero.image",
          "section",
          "section.img",
          "section.list",
          "section.featuredItems.list",
          "section.featuredItems",
          "section.featuredItems.img",
          "section.ButtonLinks",
        ],
        revalidate: 30,
      });
      setFranchisePage(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="page-title style-1 bg-img-6">
        <div className="tf-container">
          <div className="page-title-content">
            <div className="breadkcum">
              <Link href={`/`} className="caption-1 home">
                Homepage
              </Link>{" "}
              <span className="arrow-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_9360_28061)">
                    <path
                      d="M3.125 10H16.875"
                      stroke="#A2A3AB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.25 4.375L16.875 10L11.25 15.625"
                      stroke="#A2A3AB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_9360_28061">
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>{" "}
              <span className="caption-1 page-breadkcum">
                {franchisePage?.Hero?.title}
              </span>
            </div>

            <h2 className="title-page-title">{franchisePage?.Hero?.title}</h2>

            <div className="sub-title body-2">
              {franchisePage?.Hero?.description}
            </div>
          </div>

          <div className="wow fadeInUp" style={{ marginTop: "60px", marginBottom: "-30px" }}>
            <Link
              href={`/contact-us`}
              className="tf-btn style-1 bg-on-suface-container"
            >
              <span> {franchisePage?.Hero?.buttonText} </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="main-content">

        <Features 
          featuresSection={franchisePage?.section?.[0]}
        />
        <About
          aboutSection={franchisePage?.section?.[1]}
        />
        <section className="section-why-choose h-7 bg-surface tf-spacing-31">
          <div className="tf-container position-relative tf-spacing-3">
            <div className="row rg-60">
              <div className="col-xl-6">
                <div className="image mr-15">
                  <Image
                    src={getStrapiMediaUrl(franchisePage?.section?.[2]?.img) || "/image/placeholder.jpg"}
                    alt="Why partner with us"
                    width={615}
                    height={615}
                    className="lazyload"
                    priority
                  />
                </div>
              </div>

              <div className="col-xl-6">
                <div className="section-content ml-15">
                  <div className="heading-section">
                    <div className="wow fadeInUp">
                      <a href="#" className="tag label text-btn-uppercase bg-white">
                        {franchisePage?.section?.[2]?.miniTitle}
                      </a>
                    </div>
                    <h3 className="wow fadeInUp mb-12">
                      {franchisePage?.section?.[2]?.title}
                    </h3>
                  </div>
                  <div className="sub-title body-2 wow fadeInUp">
                    {franchisePage?.section?.[2]?.description}
                  </div>
                  <div className="cols g-10" style={{ marginTop: "50px"   }}>
                    <div className="benefit-lists">
                      <div className="benefit-items">
                        <div className="icon wow fadeInUp">
                          <i className="icon-checkbox" />
                        </div>
                        <div className="title wow fadeInUp" data-wow-delay=".1s">
                          {franchisePage?.section?.[2]?.list?.[0]?.point}
                        </div>
                      </div>

                      <div className="benefit-items">
                        <div className="icon wow fadeInUp">
                          <i className="icon-checkbox" />
                        </div>
                        <div className="title wow fadeInUp" data-wow-delay=".1s">
                          {franchisePage?.section?.[2]?.list?.[1]?.point}
                        </div>
                      </div>

                      <div className="benefit-items">
                        <div className="icon wow fadeInUp">
                          <i className="icon-checkbox" />
                        </div>
                        <div className="title wow fadeInUp" data-wow-delay=".1s">
                          {franchisePage?.section?.[2]?.list?.[2]?.point}
                        </div>
                      </div>

                      <div className="benefit-items">
                        <div className="icon wow fadeInUp">
                          <i className="icon-checkbox" />
                        </div>
                        <div className="title wow fadeInUp" data-wow-delay=".1s">
                          {franchisePage?.section?.[2]?.list?.[3]?.point}
                        </div>
                      </div>

                      <div className="benefit-items">
                        <div className="icon wow fadeInUp">
                          <i className="icon-checkbox" />
                        </div>
                        <div className="title wow fadeInUp" data-wow-delay=".1s">
                          {franchisePage?.section?.[2]?.list?.[4]?.point}
                        </div>
                      </div>

                      <div className="benefit-items">
                        <div className="icon wow fadeInUp">
                          <i className="icon-checkbox" />
                        </div>
                        <div className="title wow fadeInUp" data-wow-delay=".1s">
                          {franchisePage?.section?.[2]?.list?.[5]?.point}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /benefit-lists */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Services 
          servicesSection={franchisePage?.section?.[3]}
        />
         {/* <Process /> */}
        <Benefits 
          benefitsSection={franchisePage?.section?.[4]}
        />


        <section className="section-cta h-2 section-one-page" id="cta">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="cta-inner style-2">
                  <div className="cta-content">
                    <h4 className="title-content">
                      {franchisePage?.section?.[5]?.title}
                    </h4>
                    <Link
                      href={`/contact-us`}
                      className="tf-btn style-1 bg-white text-center"
                    >
                      <span> {franchisePage?.section?.[5]?.ButtonLinks?.[0]?.title} </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
