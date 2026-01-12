"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ParkandResortServices from "@/components/common/ParkandResortServices";
import { getPageByName } from "@/lib/strapi/queries";
import { getStrapiMediaUrl } from "@/lib/strapi/media";
import ReactMarkdown from "react-markdown";

export default function TheEscapeParkandResort() {
  const swiperRef = useRef(null);
  const [escapeResortBrand, setEscapeResortBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPageByName({
        pageName: "The Escape Park & Resort - Brand",
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
        revalidate: 30,
      });
      setEscapeResortBrand(data);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  const sectionOne = escapeResortBrand?.section?.[0];
  const sectionTwo = escapeResortBrand?.section?.[1];

  return (
    <>
      {/* HERO IMAGE */}
      <div className="page-hero">
        <Image
          src={getStrapiMediaUrl(escapeResortBrand?.Hero?.image) || "/image/page-title/resort banner.jpg"}
          alt="The Escape Park & Resort Hero"
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
            <div className="blog-details-top">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                // padding: "0px 0",
                margin: 0,
                marginTop: "-60px",
              }}
            >
              <Image
                src={getStrapiMediaUrl(escapeResortBrand?.logo)}
                alt="KidzMondo"
                width={260}
                height={80}
                priority
                style={{ height: "auto" }}
              />
            </div>
          </div>

              {/* MAIN IMAGE */}
              <div className="image-blog">
                <Image
                  src={getStrapiMediaUrl(sectionOne?.img) || "/image/resortAndPark/resort pic 1.jpg"}
                  alt="The Escape Park & Resort"
                  width={910}
                  height={512}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div className="desc-blog">
                <div className="body-2">
                  {sectionOne?.featuredItems?.[0]?.Body ? (
                    <ReactMarkdown>
                      {sectionOne.featuredItems[0].Body}
                    </ReactMarkdown>
                  ) : null}
                </div>
              </div>

              {/* SWIPER (NO cols-img) */}
              <div className="escapepark-gallery">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={24}
                  slidesPerView={1}
                  loop
                  className="escapepark-slider"
                  breakpoints={{ 768: { slidesPerView: 2 } }}
                  observer
                  observeParents
                  resizeObserver
                  watchOverflow
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                >
                  {escapeResortBrand?.section[0]?.imageScroll?.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="image-blog">
                        <Image
                          src={getStrapiMediaUrl(img)}
                          alt={`Escape Park Activity ${i + 1}`}
                          width={444}
                          height={334}
                          style={{ width: "100%", height: "auto", display: "block" }}
                          priority={i < 2}
                        />
                      </div>
                    </SwiperSlide>
                  )) || []}
                </Swiper>
              </div>

              <div className="list-desc">
                <div className="desc-blog">
                  {sectionOne?.featuredItems?.[1]?.Body ? (
                    <ReactMarkdown>
                      {sectionOne.featuredItems[1].Body}
                    </ReactMarkdown>
                  ) : null}
                </div>
              </div>

              {/* end content */}
            </div>
          </div>
        </div>
      </div>

      <ParkandResortServices 
      activitiesSection={escapeResortBrand?.section?.[1]}
        />
    </>
  );
}
