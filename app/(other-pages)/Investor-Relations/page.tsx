"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import Details1 from "@/components/case-studies/Details1";
import RelatedCaseStudies from "@/components/case-studies/RelatedCaseStudies";
import { fetchPageByName } from "@/lib/strapi/client";
import { getStrapiMediaUrl } from "@/lib/strapi/media";

export default function InvestorRelationsPage() {
  const [investorRelationsPage, setBrandData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
          const data = await fetchPageByName({
            pageName: "Investor Relations - Page",
            populate: [
              "Hero",
              "Hero.image",
              "section",
              "section.img",
              "section.featuredItems.list",
              "section.ButtonLinks",
              "section.featuredItems",
              "section.featuredItems.img",
              "section.imageScroll",
            ],
          });
          setBrandData(data);
          setLoading(false);
        };
        fetchData();
      }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="page-title style-1 bg-img-16">
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
                    <clipPath>
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>{" "}
              {/* <Link href={`/case-studies-1`} className="caption-1 home">
                Case Studies
              </Link>{" "} */}
              {/* <span className="arrow-svg">
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
                    <clipPath>
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>{" "} */}
              <span className="caption-1 page-breadkcum">
                {investorRelationsPage?.Hero?.title}
              </span>
            </div>
            <h2 className="title-page-title pb-0">
              {investorRelationsPage?.Hero?.title}
            </h2>
            <div className="sub-title body-2">
              {investorRelationsPage?.Hero?.description}
            </div>
          </div>

          
        </div>
      </div>
      <div className="main-content">
        <Details1 
          investorRelationsPage={investorRelationsPage}
        />
        {/* <RelatedCaseStudies /> */}
      </div>
    </>
  );
}
