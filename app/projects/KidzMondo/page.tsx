import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

import Brands1 from "@/components/common/Brands1";
import KidzMondoFormatsTable from "@/components/common/KidzMondoFormatsTable";
import KidzMondoGallery from "./KidzMondoGallery";
import { getPageByName } from "@/lib/strapi/queries";
import { getStrapiMediaUrl } from "@/lib/strapi/media";

export default async function KidzMondoPage() {
  const kidzMondoBrand: any = await getPageByName({
    pageName: "KidzMondo - Brand",
    populate: [
      "Hero",
      "logo",
      "Hero.image",
      "section",
      "section.img",
      "section.list",
      "section.featuredItems.list",
      "section.ButtonLinks",
      "section.featuredItems",
      "section.imageScroll",
      "section.featuredItems.img",
    ],
  });
console.log(kidzMondoBrand);
  if (!kidzMondoBrand) {
    return <div>Failed to load page data.</div>;
  }

  const sectionOne = kidzMondoBrand?.section?.[0];
  const sectionTwo = kidzMondoBrand?.section?.[1];

  // Pre-resolve gallery image URLs for the client component
  const galleryImages: string[] = (sectionOne?.imageScroll ?? []).map(
    (img: any) => getStrapiMediaUrl(img)
  );

  return (
    <div className="kidz-page">
      {/* HERO (full width) */}
      <div className="kidz-hero">
        <Image
          src={getStrapiMediaUrl(kidzMondoBrand.Hero.image)}
          alt="KidzMondo Hero"
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
                src={getStrapiMediaUrl(kidzMondoBrand?.logo)}
                alt="KidzMondo"
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
                <KidzMondoGallery images={galleryImages} />

                {/* TEXT SECTIONS */}
                <div className="list-desc kidz-sections">
                  <div className="desc-blog">
                    <ReactMarkdown>
                      {sectionTwo?.featuredItems?.[0]?.Body || ""}
                    </ReactMarkdown>
                  </div>
                </div>

                {/* TABLE */}
                <div className="kidz-table-block">
                  <KidzMondoFormatsTable
                    kidzMondoTableSection={kidzMondoBrand?.section[2]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="kidz-brands">
        <div className="tf-container">
          <Brands1
            kidzMondoBrandSection={kidzMondoBrand?.section[3]}
          />
        </div>
      </section>
    </div>
  );
}
