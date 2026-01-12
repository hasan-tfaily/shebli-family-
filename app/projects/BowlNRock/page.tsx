"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import Faqs from "@/components/homes/strategy-consulting/Faqs";
import { fetchPageByName } from "@/lib/strapi/client";
import { getStrapiMediaUrl } from "@/lib/strapi/media";
import ReactMarkdown from "react-markdown";

export default function BowlNRock() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [bowlNRockBrand, setBrandData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
          const data = await fetchPageByName({
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
          setBrandData(data);
          setLoading(false);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* HERO */}
      <div className="page-hero">
        <Image
          src={getStrapiMediaUrl(bowlNRockBrand?.Hero?.image) || "/image/bowlNRock/bowl n rock banner.jpg"}
          alt="Bowl N Rock Banner"
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
              {/* Top Title */}
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
                  src={getStrapiMediaUrl(bowlNRockBrand?.logo)}
                  alt="Bowl N Rock"
                  width={260}
                  height={80}
                  priority
                  style={{ height: "auto" }}
                />
              </div>
            </div>

              {/* Main Image */}
              <div className="image-blog">
                <Image
                  src={getStrapiMediaUrl(bowlNRockBrand?.section?.[0]?.img) || "/image/bowlNRock/firstbowl n rock 1st.jpg"}
                  alt="Bowl N Rock"
                  width={910}
                  height={512}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* Overview Text */}
              <div className="desc-blog">
                <ReactMarkdown>
                  {bowlNRockBrand?.section?.[0]?.featuredItems?.[0]?.Body || ""}
                </ReactMarkdown>
              </div>

              {/* ✅ SWIPER FIX (NO cols-img wrapper) */}
              {bowlNRockBrand?.section?.[0]?.imageScroll?.length > 0 && (
                <div className="bowlnrock-gallery">
                  <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    className="bowlnrock-slider"
                    breakpoints={{ 768: { slidesPerView: 2 } }}
                    observer
                    observeParents
                    resizeObserver
                    watchOverflow
                    onSwiper={(s) => {
                      swiperRef.current = s;
                    }}
                  >
                    {bowlNRockBrand?.section?.[0]?.imageScroll?.map((image: any, i: number) => (
                      <SwiperSlide key={i}>
                        <div className="image-blog">
                          <Image
                            src={getStrapiMediaUrl(image)}
                            alt={`Bowl N Rock slide ${i + 1}`}
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

              {/* EXPERIENCE SECTION */}
              <div className="list-desc">
                <div className="desc-blog">
                  <ReactMarkdown>
                    {bowlNRockBrand?.section?.[0]?.featuredItems?.[1]?.Body || ""}
                  </ReactMarkdown>
                </div>

                <Faqs 
                  faqs={bowlNRockBrand?.section?.[1]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
