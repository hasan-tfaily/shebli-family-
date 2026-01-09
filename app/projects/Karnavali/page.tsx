"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import Testimonials from "@/components/common/Testimonials";
import Contact from "@/components/common/Contact";
import { getBrandByName } from "@/lib/strapi/queries";
import { getStrapiMediaUrl } from "@/lib/strapi/media";

export default function KarnavaliPage() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [karnavaliBrand, setKarnavaliBrand] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBrandByName({
        brandName: "Karnavali - Brand",
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
      setKarnavaliBrand(data);
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

  const slides = [
    "/image/karnavali/karnavali 2.png",
    "/image/karnavali/karnavali 3.png",
    "/image/karnavali/karnavali 3.jpg",
    "/image/karnavali/karnavali 4.jpg",
    "/image/karnavali/karnavali 5.jpg",
    "/image/karnavali/karnavali 6.jpg",
    "/image/karnavali/karnavali 7  1.jpg",
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* HERO IMAGE */}
      <div className="kidz-hero">
        <Image
          src={getStrapiMediaUrl(karnavaliBrand.Hero.image)}
          alt="Karnavali Banner"
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
                  {karnavaliBrand.section?.[0]?.title}
                </h2>
              </div>

              {/* Main Image */}
              <div className="image-blog">
                <Image
                  src={getStrapiMediaUrl(karnavaliBrand.section?.[0]?.img)}
                  alt="Karnavali"
                  width={910}
                  height={512}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* Intro Text */}
              <div className="desc-blog">
                {karnavaliBrand.section?.[0]?.featuredItems?.[0]?.Body
                    ? karnavaliBrand.section?.[0]?.featuredItems?.[0]?.Body.split("\n").map((line: string, idx: number) => (
                        <React.Fragment key={idx}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))
                    : null}
              </div>

              {/* ✅ SWIPER (NO cols-img wrapper) */}
              <div className="karnavali-gallery">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={24}
                  slidesPerView={1}
                  loop
                  className="karnavali-slider"
                  breakpoints={{ 768: { slidesPerView: 2 } }}
                  observer
                  observeParents
                  resizeObserver
                  watchOverflow
                  onSwiper={(s) => {
                    swiperRef.current = s;
                  }}
                >
                  {slides.map((src, i) => (
                    <SwiperSlide key={src}>
                      <div className="image-blog">
                        <Image
                          src={src}
                          alt={`Karnavali View ${i + 1}`}
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

              {/* CONTENT SECTIONS */}
              <div className="list-desc">
                <div className="desc-blog">
                  {karnavaliBrand?.section?.[0]?.featuredItems?.[1]?.Body
                      ? karnavaliBrand?.section?.[0]?.featuredItems?.[1]?.Body.split("\n").map((line: string, idx: number) => (
                          <React.Fragment key={idx}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))
                      : null}
                </div>

                <div className="desc-blog" style={{ marginTop: "50px" }}>
                  <h5 className="title-desc">{karnavaliBrand?.section?.[1]?.title}</h5>
                  <p className="body-2">
                    {karnavaliBrand?.section?.[1]?.description}
                  </p>
                </div>

                <Testimonials
                  testimonialSection={karnavaliBrand?.section?.[1]} 
                />

                <div className="desc-blog">
                  <h5 className="title-desc">{karnavaliBrand?.section?.[1]?.featuredItems[6]?.title}</h5>
                  <p className="body-2">
                    {karnavaliBrand?.section?.[1]?.featuredItems[6]?.Body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact 
        contactSection={karnavaliBrand?.section?.[2]}
      />
    </>
  );
}
