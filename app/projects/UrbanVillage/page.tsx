"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import UrbanVillageServices from "@/components/common/UrbanVillageServices";
import { fetchPageByName } from "@/lib/strapi/client";
import { getStrapiMediaUrl } from "@/lib/strapi/media";
import ReactMarkdown from "react-markdown";

export default function UrbanVillage() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [urbanVillageBrand, setBrandData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
          const data = await fetchPageByName({
            pageName: "Urban Village - Brand",
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
          setBrandData(data);
        };
        fetchData();
      }, []);

  useEffect(() => {
    const update = () => {
      swiperRef.current?.update();
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
    "/image/UrbanVillage/1 .jpg",
    "/image/UrbanVillage/2 .jpg",
    "/image/UrbanVillage/urban 3.jpg",
    "/image/UrbanVillage/urban 4.jpg",
    "/image/UrbanVillage/urban 5.jpg",
  ];
  return (
    <>
      {/* HERO */}
      <div className="page-hero">
        <Image
          src={getStrapiMediaUrl(urbanVillageBrand?.Hero?.image) || "/image/UrbanVillage/urban village banner.jpg"}
          alt="Urban Village Banner"
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
                  src={getStrapiMediaUrl(urbanVillageBrand?.logo)}
                  alt="Urban Village"
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
                  src={getStrapiMediaUrl(urbanVillageBrand?.section?.[0]?.img) || "/"}
                  alt="Urban Village"
                  width={910}
                  height={512}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* Intro paragraph */}
              <div
                className="desc-blog"
                style={{ marginTop: "24px", marginBottom: "32px" }}
              >
                <p className="body-2" style={{ margin: 0 }}>
                  {urbanVillageBrand?.section?.[0]?.featuredItems?.[0]?.Body}
                </p>
              </div>

              {/* ✅ SWIPER */}
              {urbanVillageBrand?.section?.[0]?.imageScroll?.length > 0 && (
                <div className="urbanvillage-gallery">
                  <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    className="urbanvillage-slider"
                    breakpoints={{ 768: { slidesPerView: 2 } }}
                    observer
                    observeParents
                    resizeObserver
                    watchOverflow
                    onSwiper={(s) => {
                      swiperRef.current = s;
                    }}
                  >
                    {urbanVillageBrand?.section?.[0]?.imageScroll?.map((image: any, i: number) => (
                      <SwiperSlide key={i}>
                        <div className="image-blog">
                          <Image
                            src={getStrapiMediaUrl(image)}
                            alt={`Urban Village slide ${i + 1}`}
                            width={444}
                            height={334}
                            style={{ width: "100%", height: "auto", display: "block" }}
                            priority={i < 2}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
                  
              <div className="list-desc">
                <div
                  className="desc-blog"
                  style={{ marginTop: "32px", marginBottom: "32px" }}
                >
                  {urbanVillageBrand?.section?.[0]?.featuredItems?.[1]?.Body ? (
                    <ReactMarkdown>
                      {urbanVillageBrand.section[0].featuredItems[1].Body}
                    </ReactMarkdown>
                  ) : null}
                </div>
              </div>

              {/* end content */}
            </div>
          </div>
        </div>
      </div>

      <UrbanVillageServices 
        experiencesSection={urbanVillageBrand?.section?.[1]}
      />
    </>
  );
}
