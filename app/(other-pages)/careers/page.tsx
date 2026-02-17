"use client";

import Link from "next/link";
import Contact from "@/components/otherPages/Contact";
import Locations from "@/components/otherPages/Locations";
import Map from "@/components/otherPages/Map";
import React, { useEffect, useState } from "react";
import Breadcumb from "@/components/common/Breadcumb";
import Services2 from "@/components/homes/digital-transformation/Services2";
import Career from "@/components/otherPages/Career";
import Features3 from "@/components/common/Features3";
import Services from "@/components/homes/it-consulting/Services";
import { fetchPageByName } from "@/lib/strapi/client";
import { getStrapiMediaUrl } from "@/lib/strapi/media";

export default function page() {
  const [careerPage, setCareerPage] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPageByName({
        pageName: "Careers - Page",
        populate: [
          "Hero",
          "Hero.image",
          "section",
          "section.img",
          "section.list",
          "section.featuredItems.list",
          "section.ButtonLinks",
          "section.featuredItems.ButtonLink",
          "section.featuredItems",
          "section.featuredItems.img",
        ],
      });
      setCareerPage(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="page-title style-1 bg-img-13">
        <div className="tf-container position-relative">
          <div className="page-title-content">
            <Breadcumb pageName="Career" />
            <h2 className="title-page-title">{careerPage?.Hero?.title}</h2>
            <div className="sub-title body-2">
              {careerPage?.Hero?.description}
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        {/* <Services2/> */}
        <Features3 featuresSection={careerPage?.section?.[0]} />
        {/* <Services2/> */}
        <Services servicesSection={careerPage?.section?.[1]} />

        {/* <Career careerSection={careerPage?.section?.[2]} /> */}
        {/* <Contact />
        <Map />
        <Locations /> */}
      </div>
    </>
    
  );
}
