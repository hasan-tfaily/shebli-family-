"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Testimonials from "@/components/common/Testimonials";
import Contact from "@/components/common/Contact";


export default function KarnavaliPage() {
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
                  Karnavali
                </h2>
              </div>

              {/* Main Image */}
              <div className="image-blog">
                <Image
                  src={"/image/karnavali/karnavali 1.jpg"}
                  alt=""
                  className="lazyload"
                  width={910}
                  height={512}
                />
              </div>

              {/* Intro Text */}
              <div className="desc-blog">
                <h5 className="title-desc">
                  The ultimate indoor carnival experience — reinvented for all
                  age groups.
                </h5>
                <p className="body-2">
                  Karnavali is a dynamic, indoor Family Entertainment Center
                  designed as a multi-anchor
                  attraction that brings the energy, excitement, and magic of a
                  carnival into a modern,
                  immersive indoor setting. With major rides, arcades,
                  simulators, active play zones, and
                  entertainment experiences for every age bracket, Karnavali
                  offers a vibrant world of
                  fun under one roof.
                </p>
                <p className="body-2">
                  From heart-racing attractions to classic carnival snacks, the
                  environment is crafted to
                  engage families, teens, and young children alike, making it a
                  go-to destination for
                  unforgettable shared moments.
                </p>
              </div>

              {/* IMAGE SLIDER SECTION */}
              <div className="cols-img">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={24}
                  slidesPerView={1}
                  loop={true}
                  className="karnavali-slider"
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
                        src="/image/karnavali/karnavali 2.png"
                        alt="Karnavali View 2 - A"
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
                        src="/image/karnavali/karnavali 3.png"
                        alt="Karnavali View 3 - A"
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
                        src="/image/karnavali/karnavali 2.png"
                        alt="Karnavali View 2 - B"
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
                        src="/image/karnavali/karnavali 3.png"
                        alt="Karnavali View 3 - B"
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
                        src="/image/karnavali/karnavali 2.png"
                        alt="Karnavali View 2 - C"
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
                        src="/image/karnavali/karnavali 3.png"
                        alt="Karnavali View 3 - C"
                        className="lazyload"
                        width={444}
                        height={334}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* CONTENT SECTIONS */}
              <div className="list-desc">
                <div className="desc-blog">
                  <h5 className="title-desc">A Multisensory Indoor Carnival</h5>
                  <p className="body-2">
                    Karnavali blends thrill rides, interactive games, sensory
                    play, and themed

                    entertainment into an experience that appeals to a wide
                    audience:
                  </p>
                </div>

                <div className="desc-blog" style={{ marginTop: "50px" }}>
                  <h5 className="title-desc">Entertainment</h5>
                  <p className="body-2">
                    Guests can choose between a wide range of activities,
                    including:
                  </p>
                  <p className="body-2">
                    Karnavali is built to cater to different personalities,
                    interests, and age groups —
                    <br />
                    ensuring every visitor finds their unique version of fun.
                  </p>
                </div>

                <Testimonials />

                <div className="desc-blog">
                  <h5 className="title-desc">Concept Vision</h5>
                  <p className="body-2">
                    Karnavali aims to create a one-of-a-kind indoor
                    entertainment venue where children,
                    <br />
                    teens, and families enjoy diverse activities inspired by the
                    spirit of a joyful carnival.
                    <br />
                    Guests step into a world filled with color, laughter,
                    motion, and excitement; an escape
                    <br />
                    from routine into a place where imagination takes the lead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* /.main-content */}
      </div>
       <Contact />
    </>
  );
}
