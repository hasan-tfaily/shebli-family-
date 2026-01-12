"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import Contact from "@/components/otherPages/Contact";
import Locations from "@/components/otherPages/Locations";
import Map from "@/components/otherPages/Map";
import Breadcumb from "@/components/common/Breadcumb";
import { getPageByName } from "@/lib/strapi/queries";
import { getStrapiMediaUrl } from "@/lib/strapi/media";

export default function ContactUsPage() {
  const [contactUsPage, setBrandData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPageByName({
        pageName: "Contact Us - Page",
        populate: [
          "Hero",
          "Hero.image",
          "section",
          "section.img",
          "section.list",
          "section.ButtonLinks",
          "section.featuredItems",
          "section.featuredItems.img",
        ],
        revalidate: 30,
      });
      setBrandData(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div
        className="page-title style-1"
        style={{
          backgroundImage: contactUsPage?.Hero?.image
            ? `url(${getStrapiMediaUrl(contactUsPage?.Hero?.image)})`
            : "url(/image/page-title/bg-img-13.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="tf-container position-relative">
          <div className="page-title-content">
            <Breadcumb pageName="Contact Us" />
            <h2 className="title-page-title">{contactUsPage?.Hero?.title}</h2>
            <div className="sub-title body-2">
              {contactUsPage?.Hero?.description}
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Contact contactUsSection={contactUsPage?.section[0]} />
        <Map />
        {/* <Locations /> */}
      </div>
    </>
  );
}
