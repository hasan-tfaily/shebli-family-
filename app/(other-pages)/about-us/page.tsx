import Link from "next/link";

import Benefits from "@/components/common/Benefits";
import About from "@/components/common/About";
import React from "react";
import History from "@/components/otherPages/History";
import Features from "@/components/common/Features2";
import Testimonials from "@/components/otherPages/Testimonials";
import Cta from "@/components/common/Cta2";
import Awards from "@/components/common/Awards";
import Breadcumb from "@/components/common/Breadcumb";
import { Metadata } from "next";
import Process from "@/components/common/Process";

import { getPageByName, unwrapAttributes } from "@/lib/strapi/queries";

export const metadata: Metadata = {
  title: "About us || Kidz Holding - Franchise & Corporate Website",
  description: "Kidz Holding - Franchise & Corporate Website",
};

export const dynamic = "force-dynamic";

export default async function Page() {
  const aboutPageEntity = await getPageByName({
    pageName: "About Us",
    populate: [
      "Hero",
      "section",
      "section.img",
      "section.list",
      "section.ButtonLinks",
      "section.featuredItems",
      "section.featuredItems.img",
    ],
    revalidate: 2,
  });

  const aboutBrand = unwrapAttributes(aboutPageEntity);

  const hero = aboutBrand?.Hero;
  const cmsTitle = hero?.title;
  const cmsSubtitle = hero?.description;
  const firstSectionRichText = aboutBrand?.section?.[0]?.featuredItems?.[0]?.Body;
  const sectionOneCards = aboutBrand?.section?.[0]?.featuredItems ?? [];
  return (
    <>
      <div className="page-title style-1 bg-img-4">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName={hero?.title} />
            <h2 className="title-page-title">{hero?.title}</h2>
            <div className="sub-title body-2">
              {hero?.description}

            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="heading-section text-center">
          <div
            className="sub-title body-2 text-anime-wave-1"
            style={{
              maxWidth: 1040, 
              margin: "0 auto", 
              textAlign: "left",
              lineHeight: 1.7,
              marginTop: "70px" 
            }}
          >
            {firstSectionRichText
              ? firstSectionRichText.split("\n").map((line: string, idx: number) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))
              : null}
          </div>
        </div>

        <Benefits featuredItems={sectionOneCards} />

        {/* <About /> */}
        <History historySection={aboutBrand?.section?.[1]} />
        <Features
          featuresSection={aboutBrand?.section?.[2]}
          hasBorder
          parentClass="section-why-choose h-2 page-about"
        />

        <Process 
        processSection={aboutBrand?.section?.[3]}
        />

        {/* <Testimonials /> */}
        {/* <Cta /> */}
        {/* <Awards /> */}
      </div>
    </>
  );
}
