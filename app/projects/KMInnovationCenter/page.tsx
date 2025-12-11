"use client";

// KMInnovationCenter page

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Benefits11 from "@/components/common/Benefits11";

export default function KMInnovationCenterPage() {
  return (
    <>
      {/* HERO IMAGE */}
      <div className="image img-top">
        <Image
          src="/image/page-title/our-ventures (1).png"
          alt="KM Innovation Center Hero"
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
              {/* TITLE */}
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
                  KM Innovation Center
                </h2>
              </div>

              {/* MAIN IMAGE */}
              <div className="image-blog">
                <Image
                  src="/image/KM-innovation/KM 1.jpg"
                  alt="Children exploring at KM Innovation Center"
                  className="lazyload"
                  width={910}
                  height={512}
                />
              </div>

              {/* INTRO SECTION */}
              <div className="desc-blog">
                <p className="body-2">
                  The village-like compound will cater to a variety of needs and
                  bring together the community in a way which enables every
                  person to meet his own personal needs in a joint setting.
                  <br />
                  <br />
                  The facility will be composed of different sections targeted at
                  different audiences and providing different services
                  experiences:
                </p>
              </div>

              {/* IMAGES SLIDER */}
              <div className="cols-img">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={24}
                  slidesPerView={1}
                  loop={true}
                  className="kminnovation-slider"
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  {/* Slide 1 */}
                  <SwiperSlide>
                    <div className="image-blog">
                      <Image
                        src="/image/KM-innovation/innovation center 3.jpg"
                        alt="Kids working on a STEM project"
                        className="lazyload"
                        width={444}
                        height={334}
                      />
                    </div>
                  </SwiperSlide>

                  {/* Slide 2 */}
                  <SwiperSlide>
                    <div className="image-blog">
                      <Image
                        src="/image/KM-innovation/innovation center 4.jpg"
                        alt="Creative lab at KM Innovation Center"
                        className="lazyload"
                        width={444}
                        height={334}
                      />
                    </div>
                  </SwiperSlide>

                  {/* (Optional) duplicate slides for smoother loop */}
                  {/* <SwiperSlide>
                    <div className="image-blog">
                      <Image
                        src="/image/KM-innovation/innovation center 3.jpg"
                        alt="Kids working on a STEM project (2)"
                        className="lazyload"
                        width={444}
                        height={334}
                      />
                    </div>
                  </SwiperSlide> */}

                  <SwiperSlide>
                    <div className="image-blog">
                      <Image
                        src="/image/KM-innovation/innovation center 4.jpg"
                        alt="Creative lab at KM Innovation Center (2)"
                        className="lazyload"
                        width={444}
                        height={334}
                      />
                    </div>
                  </SwiperSlide>

                   <SwiperSlide>
                    <div className="image-blog">
                      <Image
                        src="/image/KM-innovation/innovation center 5.jpg"
                        alt="Creative lab at KM Innovation Center (2)"
                        className="lazyload"
                        width={444}
                        height={334}
                      />
                    </div>
                  </SwiperSlide>

                   <SwiperSlide>
                    <div className="image-blog">
                      <Image
                        src="/image/KM-innovation/innovation center 6.jpg"
                        alt="Creative lab at KM Innovation Center (2)"
                        className="lazyload"
                        width={444}
                        height={334}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* SECTION LIST */}
              <div className="list-desc">
                <div className="desc-blog">
                  <p className="body-2">
                    The KidzMondo Innovation Center is a cutting-edge space
                    designed to ignite curiosity and prepare children for the
                    future of technology. Inspired by the spirit of Silicon
                    Valley, this miniature innovation hub immerses kids in
                    hands-on STEAM learning, empowering them to think, create,
                    and solve real-world challenges. Through interactive labs,
                    smart technologies, and guided exploration, children
                    experience what it feels like to be young tech innovators.
                    <br />
                    <br />
                    From coding and robotics to artificial intelligence, virtual
                    reality, entrepreneurship, and digital safety, the
                    Innovation Center equips kids with future-ready skills
                    through multidisciplinary, problem-based activities. Every
                    experience is designed to spark imagination, build
                    confidence, and encourage the next generation of creators,
                    inventors, and changemakers.
                  </p>
                </div>

                <h5 className="title-desc">Activities:</h5>
              </div>

              <Benefits11 />

              {/* /.content end */}
            </div>
          </div>
        </div>
        {/* /.main-content */}
      </div>
    </>
  );
}
