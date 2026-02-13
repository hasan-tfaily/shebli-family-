"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

type Props = {
  images: string[];
  altPrefix?: string;
  className?: string;
  sliderClassName?: string;
};

export default function ProjectGallery({
  images,
  altPrefix = "Gallery",
  className = "kidzmondo-gallery",
  sliderClassName = "kidzmondo-slider",
}: Props) {
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

  return (
    <div className={className}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={1}
        loop
        className={sliderClassName}
        breakpoints={{ 768: { slidesPerView: 2 } }}
        observer
        observeParents
        resizeObserver
        watchOverflow
        onSwiper={(s) => (swiperRef.current = s)}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="image-blog">
              <Image
                src={src}
                alt={`${altPrefix} ${index + 1}`}
                width={444}
                height={334}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority={index < 2}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
