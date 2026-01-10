"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Brands1 from "@/components/common/Brands1";
import KidzMondoFormatsTable from "@/components/common/KidzMondoFormatsTable";
import { getPageByName } from "@/lib/strapi/queries";
import { getStrapiMediaUrl } from "@/lib/strapi/media";
import ReactMarkdown from "react-markdown";

export default function KidzMondoPage() {
  const swiperRef = useRef<any>(null);
  const [kidzMondoBrand, setKidzMondoBrand] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPageByName({
        pageName: "KidzMondo - Brand",
        populate: [
          "Hero",
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
        revalidate: 0,
      });
      setKidzMondoBrand(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const update = () => swiperRef.current?.update?.();

    // update once after first paint (fixes mobile width calc)
    const t = setTimeout(update, 120);

    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("KidzMondo Brand Data:", kidzMondoBrand);
  const sectionOne = kidzMondoBrand?.section?.[0];
  const sectionTwo = kidzMondoBrand?.section?.[1];
  return (
    <>
      {/* HERO IMAGE */}
      <div className="kidz-hero">
        <Image
          src={getStrapiMediaUrl(kidzMondoBrand.Hero.image)}
          alt="KidzMondo Hero"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          priority
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="blog-content blog-details-2-content blog-details-content">
              {/* TITLE */}
              <div className="blog-details-top">
                <h2
                  style={{
                    color: "#000",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "32px",
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "20px 0",
                    margin: 0,
                  }}
                >
                  {sectionOne?.title}
                </h2>
              </div>

              {/* MAIN IMAGE */}
              <div className="image-blog">
                <Image
                  src={getStrapiMediaUrl(sectionOne?.img)}
                  alt="KidzMondo"
                  width={910}
                  height={512}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* INTRO */}
              <div className="desc-blog">
                {sectionOne?.featuredItems?.[0]?.Body
                    ? sectionOne?.featuredItems?.[0]?.Body.split("\n").map((line: string, idx: number) => (
                        <React.Fragment key={idx}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))
                    : null}
              </div>
              {/* ✅ SWIPER (do NOT wrap with cols-img) */}
              <div className="kidzmondo-gallery">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={24}
                  slidesPerView={1}
                  loop
                  className="kidzmondo-slider"
                  breakpoints={{ 768: { slidesPerView: 2 } }}
                  observer
                  observeParents
                  resizeObserver
                  watchOverflow
                  onSwiper={(s) => (swiperRef.current = s)}
                >
                  <SwiperSlide>
                    <div className="image-blog">
                      <Image
                        src={getStrapiMediaUrl(kidzMondoBrand?.section[0]?.imageScroll?.[0])}
                        alt="KidzMondo Activity 1"
                        width={444}
                        height={334}
                        style={{ width: "100%", height: "auto", display: "block" }}
                        priority
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="image-blog">
                      <Image
                        src={getStrapiMediaUrl(kidzMondoBrand?.section[0]?.imageScroll?.[1])}
                        alt="KidzMondo Activity 2"
                        width={444}
                        height={334}
                        style={{ width: "100%", height: "auto", display: "block" }}
                        priority
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="image-blog">
                      <Image
                        src={getStrapiMediaUrl(kidzMondoBrand?.section[0]?.imageScroll?.[2])}
                        alt="KidzMondo Activity 3"
                        width={444}
                        height={334}
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="image-blog">
                      <Image
                        src={getStrapiMediaUrl(kidzMondoBrand?.section[0]?.imageScroll?.[3])}
                        alt="KidzMondo Activity 4"
                        width={444}
                        height={334}
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="image-blog">
                      <Image
                        src={getStrapiMediaUrl(kidzMondoBrand?.section[0]?.imageScroll?.[4])}
                        alt="KidzMondo Activity 5"
                        width={444}
                        height={334}
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* SECTIONS */}
              <div className="list-desc">
                <div className="desc-blog">
                  <ReactMarkdown>
                    {sectionTwo?.featuredItems?.[0]?.Body || ""}
                  </ReactMarkdown>  
                </div>
              </div>

              {/* TABLE */}
              <div style={{ marginTop: 40 }}>
                <KidzMondoFormatsTable 
                kidzMondoTableSection={kidzMondoBrand?.section[2]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BRANDS */}
      <section style={{ padding: "40px 0" }}>
        <div className="tf-container">
          <Brands1 
          kidzMondoBrandSection={kidzMondoBrand?.section[3]}
          />
        </div>
      </section>
    </>
  );
}
