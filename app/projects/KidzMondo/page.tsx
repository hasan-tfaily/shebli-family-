"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Brands1 from "@/components/common/Brands1";
import KidzMondoFormatsTable from "@/components/common/KidzMondoFormatsTable";
import { getBrandByName } from "@/lib/strapi/queries";
import { getStrapiMediaUrl } from "@/lib/strapi/media";

export default async function KidzMondoPage() {
  const swiperRef = useRef<any>(null);
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
    const kidzMondoBrand = await getBrandByName({
    brandName: "KidzMondo - Brand",
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
    revalidate: 0,
  });
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
                        src={kidzMondoBrand.sectionOne?.featuredItems?.[0].img?.[0]}
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
                        src="/image/kidzMondo/kidzMondo3.png"
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
                        src="/image/kidzMondo/about – philosophy.jpg"
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
                        src="/image/kidzMondo/about 1.jpg"
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
                        src="/image/kidzMondo/about 2.jpg"
                        alt="KidzMondo Activity 5"
                        width={444}
                        height={334}
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="image-blog">
                      <Image
                        src="/image/kidzMondo/about 3.jpg"
                        alt="KidzMondo Activity 6"
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
                    {sectionTwo?.featuredItems?.[0]?.Body
                      ? sectionTwo?.featuredItems?.[0]?.Body.split("\n").map((line: string, idx: number) => (
                          <React.Fragment key={idx}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))
                      : null}
                </div>
              </div>

              {/* TABLE */}
              <div style={{ marginTop: 40 }}>
                <KidzMondoFormatsTable />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BRANDS */}
      <section style={{ padding: "40px 0" }}>
        <div className="tf-container">
          <Brands1 />
        </div>
      </section>
    </>
  );
}
