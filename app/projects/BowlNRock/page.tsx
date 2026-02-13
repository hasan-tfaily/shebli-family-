import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

import Faqs from "@/components/homes/strategy-consulting/Faqs";
import ProjectGallery from "../ProjectGallery";
import { getPageByName } from "@/lib/strapi/queries";
import { getStrapiMediaUrl } from "@/lib/strapi/media";

export default async function BowlNRockPage() {
  const bowlNRockBrand: any = await getPageByName({
    pageName: "BOWL N' ROCK - Brand",
    populate: [
      "Hero",
      "Hero.image",
      "logo",
      "section",
      "section.img",
      "section.featuredItems.list",
      "section.ButtonLinks",
      "section.featuredItems",
      "section.featuredItems.img",
      "section.imageScroll",
    ],
  });

  if (!bowlNRockBrand) {
    return <div>Failed to load page data.</div>;
  }

  const sectionOne = bowlNRockBrand?.section?.[0];

  // Pre-resolve gallery image URLs for the client component
  const galleryImages: string[] = (sectionOne?.imageScroll ?? []).map(
    (img: any) => getStrapiMediaUrl(img)
  );

  return (
    <div className="kidz-page">
      {/* HERO (full width) */}
      <div className="kidz-hero">
        <Image
          src={getStrapiMediaUrl(bowlNRockBrand.Hero.image)}
          alt="Bowl N Rock Hero"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          priority
          className="kidz-hero__img"
        />
      </div>

      {/* OVERVIEW (logo + text side by side) */}
      <section className="kidz-overview">
        <div className="tf-container">
          <div className="kidz-overview__grid">
            {/* Left: Logo */}
            <div className="kidz-overview__logo">
              <Image
                src={getStrapiMediaUrl(bowlNRockBrand?.logo)}
                alt="Bowl N Rock"
                width={260}
                height={90}
                priority
                style={{ height: "auto" }}
              />
            </div>

            {/* Right: Text */}
            <div className="kidz-overview__content">
              <ReactMarkdown
                components={{
                  h5: ({ children }) => (
                    <h5 className="kidz-overview__h">{children}</h5>
                  ),
                  p: ({ children }) => (
                    <p className="kidz-overview__p">{children}</p>
                  ),
                }}
              >
                {sectionOne?.featuredItems?.[0]?.Body || ""}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="kidz-main">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="blog-content blog-details-2-content blog-details-content kidz-main__wrap">
                {/* GALLERY */}
                <ProjectGallery
                  images={galleryImages}
                  altPrefix="Bowl N Rock"
                  className="bowlnrock-gallery"
                  sliderClassName="bowlnrock-slider"
                />

                {/* TEXT SECTIONS */}
                <div className="list-desc kidz-sections">
                  <div className="desc-blog">
                    <ReactMarkdown>
                      {sectionOne?.featuredItems?.[1]?.Body || ""}
                    </ReactMarkdown>
                  </div>

                  <Faqs faqs={bowlNRockBrand?.section?.[1]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
