"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import Faqs from "@/components/homes/strategy-consulting/Faqs";

export default function BowlNRock() {
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const update = () => swiperRef.current?.update();

    const t = setTimeout(update, 150);
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const slides = [
    "/image/bowlNRock/bowl N rock 1.jpg",
    "/image/bowlNRock/bowl N rock 2.jpg",
    "/image/bowlNRock/bowl N rock 3.jpg",
    "/image/bowlNRock/bowl N rock 4.jpg",
    "/image/bowlNRock/bowl N rock 5.jpg",
    "/image/bowlNRock/bowl N rock 6.jpg",
  ];

  return (
    <>
      <div className="page-hero">
        <Image
          src="/image/page-title/banner-BNR (1).jpg"
          alt="BOWL N' ROCK Banner"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="tf-container">
        <div className="bowlnrock-gallery">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={24}
            slidesPerView={1}
            loop
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
            {slides.map((src, i) => (
              <SwiperSlide key={src}>
                <Image
                  src={src}
                  alt={`Bowl N Rock slide ${i + 1}`}
                  width={444}
                  height={334}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  priority={i < 2}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Faqs />
      </div>
    </>
  );
}
