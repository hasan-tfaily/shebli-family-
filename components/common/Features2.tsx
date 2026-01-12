import Link from "next/link";
import Image from "next/image";
import React from "react";

import { getStrapiMediaUrl, type StrapiMediaSingle } from "@/lib/strapi/media";


export default function Features( {
  parentClass = "section-why-choose h-2 tf-spacing-31",
  hasBorder = false,
  featuresSection
}: {
  parentClass?: string;
  hasBorder?: boolean;
  featuresSection?: any;
}) {
  if (!featuresSection) return null;

  const sectionImgUrl = getStrapiMediaUrl(featuresSection.img);
  return (
    <section className={parentClass}>
      <div className="tf-container position-relative">
        <div
          className={` ${
            hasBorder
              ? "row rg-60 border-bottom tf-spacing-31"
              : "row rg-60 align-items-center"
          } `}
        >
          <div className="col-lg-6">
            <div className="image mr-15 tf-animate-1">
              {sectionImgUrl ? (
                <Image
                  src={sectionImgUrl}
                  alt={""}
                  className="lazyload"
                  width={615}
                  height={615}
                />
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-content ml-15">
              <div className="heading-section">
                <div className="wow fadeInUp">
                  {featuresSection.miniTitle ? (
                    <a href="#" className="tag label text-btn-uppercase">
                      {featuresSection.miniTitle}
                    </a>
                  ) : null}
                </div>
                {featuresSection.title ? (
                  <h3 className="title-section wow fadeInUp mb-12">{featuresSection.title}</h3>
                ) : null}
                {featuresSection.description ? (
                  <div className="sub-title body-2 wow fadeInUp">{featuresSection.description}</div>
                ) : null}
              </div>
              <div className="benefit-lists">
                {(featuresSection.list).map((row: any, idx: number) => {
                  const point = typeof row === "string" ? row : row?.point;

                  return point ? (
                  <div className="benefit-items" key={idx}>
                    <div className="icon wow fadeInUp">
                      <i className="icon-checkbox" />
                    </div>
                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                      {point}
                    </div>
                  </div>
                  ) : null;
                })}
              </div>
              {featuresSection.ButtonLinks?.[0]?.link ? (
                <Link
                  href={featuresSection.ButtonLinks[0].link}
                  className="tf-btn style-1 bg-on-suface-container wow fadeInUp"
                >
                  <span>{featuresSection.ButtonLinks[0].title}</span>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
