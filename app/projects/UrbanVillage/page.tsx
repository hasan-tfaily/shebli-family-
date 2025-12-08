"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// This is the Experiences / tabs section we fixed above
import UrbanVillageServices from "@/components/common/UrbanVillageServices";

export default function UrbanVillage() {
  return (
    <>
      <div className="image img-top">
        <Image
          src="/image/page-title/our-ventures (1).png"
          alt=""
          className="lazyload"
          width={1920}
          height={1080}
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "100%",
          }}
        />
      </div>

      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="blog-content blog-details-2-content blog-details-content">
              <div className="blog-details-top">
                <h2
                  style={{
                    color: "#000000",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "32px",
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "20px 0",
                    margin: 0,
                  }}
                >
                  Urban Village
                </h2>
              </div>

              {/* MAIN IMAGE */}
              <div className="image-blog">
                <Image
                  src={"/image/UrbanVillage/urban-village 1.jpg"}
                  alt=""
                  className="lazyload"
                  width={910}
                  height={512}
                />
              </div>

              {/* Intro paragraph */}
              <div
                className="desc-blog"
                style={{ marginTop: "24px", marginBottom: "32px" }}
              >
                <p className="body-2" style={{ margin: 0 }}>
                  Urban Village is a contemporary lifestyle destination where
                  entertainment, culture, food, and community come together in
                  one vibrant space. Designed as an open, walkable, and
                  experiential district, Urban Village blends social dining,
                  modern entertainment, boutique retail, and wellness amenities
                  to create a dynamic environment for families, youth, and
                  adults.
                  <br />
                  <br />
                  Inspired by the most successful lifestyle zones around the
                  world, Urban Village offers a curated mix of experiences that
                  activate the senses, celebrate individuality, and bring people
                  together, day and night.
                </p>
              </div>

              {/* SLIDER SECTION */}
              <div className="cols-img">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={24}
                  slidesPerView={1}
                  loop={true}
                  className="karnavali-slider urbanvillage-slider"
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  {/* 1 */}
                  <SwiperSlide>
                    <div className="image-blog">
                      <Image
                        src="/image/UrbanVillage/urban-village 2.jpg"
                        alt="Urban Village View 1 - A"
                        className="lazyload"
                        width={444}
                        height={334}
                      />
                    </div>
                  </SwiperSlide>

                  {/* 2 */}
                  <SwiperSlide>
                    <div className="image-blog">
                      <Image
                        src="/image/UrbanVillage/urban-village 3.jpg"
                        alt="Urban Village View 2 - A"
                        className="lazyload"
                        width={444}
                        height={334}
                      />
                    </div>
                  </SwiperSlide>

                  {/* 3 (duplicate) */}
                  <SwiperSlide>
                    <div className="image-blog">
                      <Image
                        src="/image/UrbanVillage/urban-village 2.jpg"
                        alt="Urban Village View 1 - B"
                        className="lazyload"
                        width={444}
                        height={334}
                      />
                    </div>
                  </SwiperSlide>

                  {/* 4 (duplicate) */}
                  <SwiperSlide>
                    <div className="image-blog">
                      <Image
                        src="/image/UrbanVillage/urban-village 3.jpg"
                        alt="Urban Village View 2 - B"
                        className="lazyload"
                        width={444}
                        height={334}
                      />
                    </div>
                  </SwiperSlide>

                  {/* 5 (duplicate) */}
                  <SwiperSlide>
                    <div className="image-blog">
                      <Image
                        src="/image/UrbanVillage/urban-village 2.jpg"
                        alt="Urban Village View 1 - C"
                        className="lazyload"
                        width={444}
                        height={334}
                      />
                    </div>
                  </SwiperSlide>

                  {/* 6 (duplicate) */}
                  <SwiperSlide>
                    <div className="image-blog">
                      <Image
                        src="/image/UrbanVillage/urban-village 3.jpg"
                        alt="Urban Village View 2 - C"
                        className="lazyload"
                        width={444}
                        height={334}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="list-desc">
                {/* Block 1 */}
                <div
                  className="desc-blog"
                  style={{ marginTop: "32px", marginBottom: "32px" }}
                >
                  <h4 className="title-desc" style={{ marginBottom: "12px" }}>
                    A New Vision for Social Living
                  </h4>
                  <p className="body-2" style={{ margin: 0 }}>
                    Urban Village is more than a venue; it is a community hub
                    and a social micro-city.
                    <br />
                    Every corner is thoughtfully designed to encourage
                    discovery, movement, connection,
                    <br />
                    and exploration. Visitors can dine, play, shop, relax, and
                    socialize in an atmosphere that
                    <br />
                    feels vibrant, safe, and alive.
                    <br />
                    <br />
                    From artisanal eateries and handcrafted desserts to
                    immersive entertainment and
                    <br />
                    lifestyle amenities, Urban Village offers something for
                    everyone, making it one of the
                    <br />
                    most attractive anchors for real estate and mixed-use
                    developments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experiences / Services section below the main article */}
      <UrbanVillageServices />
    </>
  );
}
