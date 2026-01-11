"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import StarDistrictSection from "@/components/common/StarDistrictSection";
import { get } from "http";
import { starDistrictData } from "@/data/starDistrictData";
import { getPageByName } from "@/lib/strapi/queries";
import { getStrapiMediaUrl } from "@/lib/strapi/media";
import ReactMarkdown from "react-markdown";

export default function StarDistrict() {
  const swiperRef = useRef(null);
  const [starDistrictBrand, setStarDistrictBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPageByName({
        pageName: "Star District - Brand",
        populate: [
          "Hero",
          "Hero.image",
          "section",
          "section.img",
          "section.list",
          "section.ButtonLinks",
          "section.featuredItems",
          "section.featuredItems.list",
          "section.featuredItems.img",
          "section.imageScroll",
        ],
        revalidate: 0,
      });
      setStarDistrictBrand(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const update = () => {
      if (swiperRef.current && typeof swiperRef.current.update === "function") {
        swiperRef.current.update();
      }
    };

    const t = setTimeout(update, 120);
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const slides = [
    "/image/starDistrict/star district 2.jpg",
    "/image/starDistrict/star district 3.jpg",
    "/image/starDistrict/star 3.jpg",
    "/image/starDistrict/star 4.jpg",
    "/image/starDistrict/star 5.jpg",
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* HERO */}
      <div className="page-hero">
        <Image
          src={getStrapiMediaUrl(starDistrictBrand.Hero.image)}
          alt="Star District Hero"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          priority
        />
      </div>

      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="blog-content blog-details-2-content blog-details-content">
              {/* Title */}
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
                  {starDistrictBrand?.section[0]?.title}
                </h2>
              </div>

              {/* Main image */}
              <div className="image-blog">
                <Image
                  src={getStrapiMediaUrl(starDistrictBrand?.section[0]?.img)}
                  alt="Star District"
                  width={910}
                  height={512}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* Intro */}
              <div className="desc-blog">
                {starDistrictBrand?.section?.[0]?.featuredItems?.[0]?.Body ? (
                  <ReactMarkdown>
                    {starDistrictBrand.section[0].featuredItems[0].Body}
                  </ReactMarkdown>
                ) : null}
              </div>

              {/* ✅ SWIPER (NO cols-img wrapper) */}
              {starDistrictBrand?.section?.[0]?.imageScroll?.length > 0 && (
                <div className="stardistrict-gallery">
                  <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    className="stardistrict-slider"
                    breakpoints={{ 768: { slidesPerView: 2 } }}
                    observer
                    observeParents
                    resizeObserver
                    watchOverflow
                    onSwiper={(s) => {
                      swiperRef.current = s;
                    }}
                  >
                    {starDistrictBrand?.section?.[0]?.imageScroll?.map((image, i) => (
                      <SwiperSlide key={i}>
                        <div className="image-blog">
                          <Image
                            src={getStrapiMediaUrl(image)}
                            alt={`Star District Activity ${i + 1}`}
                            width={444}
                            height={334}
                            style={{
                              width: "100%",
                              height: "auto",
                              display: "block",
                            }}
                            priority={i < 2}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

              {/* Sections */}
              <div className="list-desc">
                <div className="desc-blog">
                  <ReactMarkdown>
                    {starDistrictBrand?.section?.[0]?.featuredItems?.[1]?.Body}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StarDistrictSection 
       experiencesSection={starDistrictBrand?.section?.[1]}
      />
    </>
  );
}
