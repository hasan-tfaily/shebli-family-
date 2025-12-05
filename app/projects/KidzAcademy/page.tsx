"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function KidzAcademyPage() {
  return (
    <>
      <div className="image img-top">
        <Image
          src="/image/page-title/our-ventures (1).png"
          alt="KidzAcademy Hero"
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
              {/* Title */}
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
                  KidzAcademy
                </h2>
              </div>

              {/* Main Image */}
              <div className="image-blog">
                <Image
                  src="/image/Kidz academy/kidz-academy.png"
                  alt="KidzAcademy learning environment"
                  className="lazyload"
                  width={910}
                  height={512}
                />
              </div>

              {/* Concept Text */}
              <div className="desc-blog">
                <h5 className={"title-desc"}>Concept</h5>
                <p className="body-2">
                  Kidz Academy is a dance and movement center that brings kids
                  together around dance and sports. This center is a destination
                  that meets the physical interests of each of your children, be
                  it sports, dance, or gymnastics.
                  <br />
                  <br />
                  Kidz Academy offers cool extracurricular activities including
                  dance classes, Taekwondo, MMA, gymnastics and even yoga for
                  kids from age four to fifteen in a multitude of styles.
                  <br />
                  <br />
                  Children and teenagers who want something other than homework
                  to look forward to in the afternoon can sign up for afternoon
                  classes. They can also enroll for condensed programs during
                  holidays and vacations.
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
                  className="kidzacademy-slider"
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
                        src="/image/Kidz academy/kidz-academy2.png"
                        alt="KidzAcademy creative workshop A"
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
                        src="/image/Kidz academy/kidz-academy3.png"
                        alt="KidzAcademy STEM activity A"
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
                        src="/image/Kidz academy/kidz-academy2.png"
                        alt="KidzAcademy creative workshop B"
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
                        src="/image/Kidz academy/kidz-academy3.png"
                        alt="KidzAcademy STEM activity B"
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
                        src="/image/Kidz academy/kidz-academy2.png"
                        alt="KidzAcademy creative workshop C"
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
                        src="/image/Kidz academy/kidz-academy3.png"
                        alt="KidzAcademy STEM activity C"
                        className="lazyload"
                        width={444}
                        height={334}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* Benefits Section */}
              <div className="list-desc">
                <div className="desc-blog">
                  <h5 className="title-desc">Benefits</h5>
                  <p className="body-2">
                    Classes at Kidz Academy help develop a healthy lifestyle and
                    incorporate fitness as a natural part of children&apos;s
                    lives by making fitness fun. Classes incorporate key
                    childhood development elements like leadership, respect,
                    teamwork, confidence, self-esteem, memory, creativity,
                    coordination, and cultural awareness.
                    <br />
                    <br />
                    Kidz Academy provides children with a chance to spend their
                    valuable time productively, having fun while at the same
                    time reaping physical and educational benefits.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
