"use client";

// KMInnovationCenter page

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
                  <br /> <br />
                  The facility will be composed of different sections targeted at
                  different audiences and providing different services
                  experiences:
                </p>
              </div>

              {/* SLIDER INSTEAD OF TWO STATIC IMAGES */}
              <div className="cols-img">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={24}
                  slidesPerView={1}
                  loop={true}
                  className="karnavali-slider kminnovation-slider"
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
                        src="/image/KM-innovation/KM 2.jpg"
                        alt="Kids working on a STEM project - A"
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
                        src="/image/KM-innovation/KM 3.jpg"
                        alt="Creative lab at KM Innovation Center - A"
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
                        src="/image/KM-innovation/KM 2.jpg"
                        alt="Kids working on a STEM project - B"
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
                        src="/image/KM-innovation/KM 3.jpg"
                        alt="Creative lab at KM Innovation Center - B"
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
                        src="/image/KM-innovation/KM 2.jpg"
                        alt="Kids working on a STEM project - C"
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
                        src="/image/KM-innovation/KM 3.jpg"
                        alt="Creative lab at KM Innovation Center - C"
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
                  <h5 className="title-desc">Tech Education</h5>
                  <p className="body-2">
                    Mothers who want to provide entertainment for their young
                    children, or want an activity to keep their children engaged
                    while they shop in the department store or have lunch or a
                    coffee with friends may do so here.
                    <br />
                    <br />
                    KidzMondo thereby serves as a gateway for new technologies
                    and technological advancements, connecting developers and
                    designers with students, teachers, caregivers, and school
                    stakeholders.
                    <br />
                    <br />
                    It can serve as a platform for launching new products for
                    younger demographics or school markets. Moreover, KidzMondo
                    embeds in children ideals and values to carry with them into
                    the real world.
                    <br />
                    <br />
                    This includes teaching them use of technology, putting the
                    newest tech trends to good use, and the importance of
                    avoiding using technology inappropriately or for destructive
                    purposes.
                    <br />
                    <br />
                    Receiving 200,000 visitors annually, KidzMondo presents the
                    ideal platform to educate future generations. The diverse
                    subjects children can experience at KidzMondo are: Media,
                    Math, Sciences, Art, Culture, Drama, Technology, Physical
                    Education, and Social Education.
                    <br />
                    <br />
                    The Innovation Center plans to keep up with global trends
                    through implementing innovative technologies in its
                    facilities and establishments. It will resemble a miniature
                    Silicon Valley. It will be a hub for scientific exploration
                    and discovery. The curriculum for this zone will be based in
                    STEAM education, exploring multidisciplinary problem-based
                    lessons.
                    <br />
                    <br />
                    Guests will experience what it is like to be a tech wiz.
                  </p>
                </div>
              </div>

              {/* /.content end */}
            </div>
          </div>
        </div>
        {/* /.main-content */}
      </div>
    </>
  );
}
