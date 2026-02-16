import Header5 from "@/components/headers/Header5";
import Services1 from "@/components/common/Services";
import About from "@/components/homes/marketing-consulting/About";
import Brands from "@/components/common/Brands";
import Hero from "@/components/homes/marketing-consulting/Hero";
import React, { useEffect, useState } from "react";
import Services from "@/components/common/Services3";
import Faqs from "@/components/homes/marketing-consulting/Faqs";
import Team from "@/components/common/Team";
import Blogs from "@/components/homes/marketing-consulting/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import Blogs2 from "@/components/homes/marketing-consulting/Blogs2";
import { getSingleType, getAllBlogs } from "@/lib/strapi/queries";
import { getStrapiMediaUrl } from "@/lib/strapi/media";

// ✅ alias the two different Features components
import MCFeatures from "@/components/homes/marketing-consulting/Features";
import ITFeatures from "@/components/homes/it-consulting/Features";

import Process from "@/components/homes/it-consulting/Process";
// import Process from "@/components/common/Process2";

import Footer1 from "@/components/footers/Footer1";

export const dynamic = "force-dynamic";

export default async function Page() {
  // server-side fetch (no CORS issues)
  let homePage: any = null;
  let blogsData: any[] = [];
  try {
    const [homePageData, blogs] = await Promise.all([
      getSingleType("homepage", {
        populate: [
          "Hero",
          "Hero.image",
          "section",
          "blogs",
          "section.img",
          "section.list",
          "section.featuredItems.list",
          "section.ButtonLinks",
          "section.featuredItems.ButtonLink",
          "section.featuredItems",
          "section.featuredItems.img",
          "section.imageScroll",
        ],
        revalidate: 2,
      }),
      getAllBlogs({
        populate: ["coverImage", "category"],
        limit: 4,
        revalidate: 2,
      }),
    ]);
    homePage = homePageData;
    blogsData = blogs;
  } catch (err) {
    console.error("Failed to fetch homepage (server):", err);
  }

  return (
    <>
      <Header5 />
      <Hero heroData={homePage?.Hero} />
      <div className="main-content">
        <About
          aboutSection={homePage?.section?.[0]}
          testimonialSection={homePage?.section?.[1]}
        />

        <ITFeatures featureSection={homePage?.section?.[2]} />

        {/* <MCFeatures /> */}
        {/* <Blogs2 /> */}
        <Brands brandSection={homePage?.section?.[3]} />
        {/* <Services1 /> */}
        {/* <Process /> */}
        {/* <Services /> */}
        <Blogs blogSection={homePage?.section?.[4]} blogsData={blogsData} />
        {/* <Team /> */}
        <Process processSection={homePage?.section?.[5]} />

        <Faqs faqsSection={homePage?.section?.[6]} />
        <Cta ctaSection={homePage?.section?.[7]} />
      </div>
      <Footer1 />
    </>
  );
}
