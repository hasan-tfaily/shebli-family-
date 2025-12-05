"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function BowlNRock() {
  return (
    <>
      <div className="image img-top">
        <Image
          src="/image/page-title/our-ventures (1).png"
          alt="Bowl N Rock Hero"
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
              {/* Top Title */}
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
                  BOWL N&apos; ROCK
                </h2>
              </div>

              {/* Main Image */}
              <div className="image-blog">
                <Image
                  src="/image/bowlNRock/Rock N Bowl 1.jpg"
                  alt="Bowl N Rock Main"
                  className="lazyload"
                  width={910}
                  height={512}
                />
              </div>

              {/* Overview Text */}
              <div className="desc-blog">
                <p className="body-2">
                  Bowl N Rock is the newest experiential social entertainment
                  hub offering bowling, immersive sports games, retro games,
                  retro art installations, eateries, mini golf and much more.
                  <br />
                  <br />
                  Featuring 10-lane bowling alleys, sports simulators, retro
                  arcade games, pool and snooker tables, karaoke stage, virtual
                  reality, BOWL N ROCK is an extraordinary “eatertainment” venue
                  with live music, where food and entertainment have been merged
                  into one space and interactive games are integrated on each
                  dining table to savour the experience.
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
                  className="bowlnrock-slider"
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
                        src="/image/bowlNRock/Rock N Bowl 2.jpg"
                        alt="Bowl N Rock View 2 - A"
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
                        src="/image/bowlNRock/Rock N Bowl 3.jpg"
                        alt="Bowl N Rock View 3 - A"
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
                        src="/image/bowlNRock/Rock N Bowl 2.jpg"
                        alt="Bowl N Rock View 2 - B"
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
                        src="/image/bowlNRock/Rock N Bowl 3.jpg"
                        alt="Bowl N Rock View 3 - B"
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
                        src="/image/bowlNRock/Rock N Bowl 2.jpg"
                        alt="Bowl N Rock View 2 - C"
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
                        src="/image/bowlNRock/Rock N Bowl 3.jpg"
                        alt="Bowl N Rock View 3 - C"
                        className="lazyload"
                        width={444}
                        height={334}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* EXPERIENCE SECTION */}
              <div className="list-desc">
                {/* Experience Description */}
                <div className="desc-blog">
                  <h5 className="title-desc">Experience</h5>
                  <p className="body-2">
                    BOWL N ROCK is a next-generation social entertainment hub
                    where immersive play, retro nostalgia, live entertainment,
                    and elevated dining come together in one dynamic destination.
                    Designed for guests aged 15 and above, the venue blends
                    gaming, music, food, art, and social interaction—creating a
                    vibrant “eatertainment” experience that appeals to teens,
                    young adults, groups, and corporate clients.
                    <br />
                    <br />
                    More than a gaming venue, BOWL N ROCK is a fully immersive
                    lifestyle concept. Retro-industrial interiors, themed zones,
                    and art installations set the tone, while a curated mix of
                    social activities ensures there’s always something to
                    discover around every corner.
                    <br />
                    <br />
                    The experience begins the moment guests walk through the
                    signature themed entrance tunnel before stepping into a
                    world of energy, music, fun, and play.
                  </p>
                </div>

                {/* Experiences List */}
                <div className="desc-blog">
                  <h5 className="title-desc">Experiences:</h5>

                  <h5>Social Bowling and AR Bowling</h5>
                  <p className="body-2">
                    A high-energy bowling experience designed for social groups
                    and competitive fun, enhanced with atmospheric lighting and
                    music.
                  </p>

                  <ul className="body-2">
                    <li>
                      <h6>Retro Arcade Zone</h6>
                      <p>
                        A mix of classic arcade titles and modern hits,
                        delivering nostalgia and excitement for all generations.
                      </p>
                    </li>

                    <li>
                      <h6>Immersive Gaming &amp; Simulators</h6>
                      <p>
                        Sports simulators, VR games, interactive screens, and
                        digital game experiences inspired by global
                        entertainment leaders.
                      </p>
                    </li>

                    <li>
                      <h6>Mini Golf &amp; Casual Play</h6>
                      <p>
                        Fun and social mini-golf experiences and table-based
                        games that encourage friendly competition.
                      </p>
                    </li>

                    <li>
                      <h6>Karaoke &amp; Live Entertainment Stage</h6>
                      <p>
                        A dedicated performance zone featuring karaoke, DJ sets,
                        live music, and event nights.
                      </p>
                    </li>

                    <li>
                      <h6>Interactive Dining Experience</h6>
                      <p>
                        Themed dining areas where food and entertainment merge,
                        complete with interactive game tables, vibrant menus,
                        and a lively atmosphere.
                      </p>
                    </li>

                    <li>
                      <h6>Social Pool, Snooker &amp; Darts</h6>
                      <p>
                        Classic social games reimagined with modern ambiance,
                        digital scoring, and themed environments.
                      </p>
                    </li>

                    <li>
                      <h6>Retro-Industrial Art Installations</h6>
                      <p>
                        Nostalgic and visually striking art pieces, neon work,
                        and themed installations that elevate the venue’s
                        identity and social media appeal.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /.list-desc */}
            </div>
          </div>
        </div>
        {/* /.main-content */}
      </div>
    </>
  );
}
