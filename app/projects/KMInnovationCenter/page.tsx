"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import Benefits11 from "@/components/common/Benefits11";
import { fetchPageByName } from "@/lib/strapi/client";
import { getStrapiMediaUrl } from "@/lib/strapi/media";

export default function KMInnovationCenterPage() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [KMInnovationBrand, setBrandData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPageByName({
        pageName: "KM Innovation Center - Brand",
        populate: [
          "Hero",
          "Hero.image",
          "logo",
          "section",
          "section.img",
          "section.list",
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

  const sectionOne = KMInnovationBrand?.section?.[0];

  return (
    <>
      {/* HERO IMAGE */}
      <div className="image img-top">
        <Image
          src={getStrapiMediaUrl(KMInnovationBrand?.Hero?.image) || "/image/page-title/banner.jpg"}
          alt="KM Innovation Center Hero"
          className="lazyload"
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
              {/* TITLE */}
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
                  src={getStrapiMediaUrl(KMInnovationBrand?.logo)}
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
                  src={getStrapiMediaUrl(sectionOne?.img) || "/image/KM-innovation/KM 1.jpg"}
                  alt="Children exploring at KM Innovation Center"
                  className="lazyload"
                  width={910}
                  height={512}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* INTRO SECTION */}
              <div className="desc-blog">
                <p className="body-2">
                  {sectionOne?.featuredItems?.[0]?.Body}
                </p>
              </div>

              {/* ✅ SWIPER (unchanged design) */}
              <div className="kminnovation-gallery">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={24}
                  slidesPerView={1}
                  loop
                  className="kminnovation-slider"
                  breakpoints={{ 768: { slidesPerView: 2 } }}
                  observer
                  observeParents
                  resizeObserver
                  watchOverflow
                  onSwiper={(s) => {
                    swiperRef.current = s;
                  }}
                >
                  {sectionOne?.imageScroll?.map((image: any, i: number) => (
                    <SwiperSlide key={i}>
                      <div className="image-blog">
                        <Image
                          src={getStrapiMediaUrl(image)}
                          alt={`KM Innovation Center slide ${i + 1}`}
                          className="lazyload"
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

              {/* SECTION LIST */}
              <div className="list-desc">
                <div className="desc-blog">
                  <p className="body-2">
                    {sectionOne?.featuredItems?.[1]?.Body}
                  </p>
                </div>

                <h5 className="title-desc" style={{ marginTop: "90px" }}>
                  {KMInnovationBrand?.section?.[1]?.title || "Activities:"}
                </h5>
              </div>

              <Benefits11 
               benefitsSection={KMInnovationBrand?.section?.[1]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
