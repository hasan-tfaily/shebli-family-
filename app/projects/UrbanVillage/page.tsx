"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
                  entertainment, culture,
                  <br />
                  food, and community come together in one vibrant space.
                  Designed as an open,
                  <br />
                  walkable, and experiential district, Urban Village blends
                  social dining, modern
                  <br />
                  entertainment, boutique retail, and wellness amenities to
                  create a dynamic
                  <br />
                  environment for families, youth, and adults.
                  <br />
                  <br />
                  Inspired by the most successful lifestyle zones around the
                  world, Urban Village offers a
                  <br />
                  curated mix of experiences that activate the senses, celebrate
                  individuality, and bring
                  <br />
                  people together, day and night.
                </p>
              </div>

              {/* SLIDER SECTION (replaces static two images) */}
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
                  <h4
                    className="title-desc"
                    style={{ marginBottom: "12px" }}
                  >
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

                {/* Block 2 */}
                <div className="desc-blog" style={{ marginBottom: "32px" }}>
                  <h4
                    className="title-desc"
                    style={{ marginBottom: "12px" }}
                  >
                    Core Experiences
                  </h4>

                  <h4
                    className="title-desc"
                    style={{ marginBottom: "12px" }}
                  >
                    Food &amp; Culinary Lane
                  </h4>
                  <p className="body-2" style={{ margin: 0 }}>
                    <ul>
                      <li>
                        - Trendy cafés, dessert boutiques, and contemporary
                        restaurants
                      </li>
                      <li>- International cuisines and local dining concepts</li>
                      <li>- Outdoor terraces and communal seating</li>
                      <li>
                        - Pop-up food stalls and seasonal gastronomic events
                      </li>
                    </ul>
                    The heart of the village, where food becomes a social
                    experience.
                  </p>

                  <h4
                    className="title-desc"
                    style={{ marginBottom: "12px" }}
                  >
                    Entertainment District
                  </h4>
                  <p className="body-2" style={{ margin: 0 }}>
                    <ul>
                      <li>- Immersive games and family attractions</li>
                      <li>- Social entertainment venues</li>
                      <li>- Edutainment and youth-focused play zones</li>
                      <li>
                        - Live shows, music, performances, and themed nights
                      </li>
                    </ul>
                  </p>

                  <h4
                    className="title-desc"
                    style={{ marginBottom: "12px" }}
                  >
                    Lifestyle Retail &amp; Boutique District
                  </h4>
                  <p className="body-2" style={{ margin: 0 }}>
                    <ul>
                      <li>- Department store or curated concept store</li>
                      <li>
                        - Niche fashion, beauty, accessories, and lifestyle
                        brands
                      </li>
                      <li>- Rotating pop-ups and seasonal retail activations</li>
                      <li>- Instagrammable windows and themed retail displays</li>
                    </ul>
                  </p>

                  <h4
                    className="title-desc"
                    style={{ marginBottom: "12px" }}
                  >
                    Wellness &amp; Amenities
                  </h4>
                  <p className="body-2" style={{ margin: 0 }}>
                    <ul>
                      <li>- Urban spa and wellness lounge</li>
                      <li>- Beauty and grooming studios</li>
                      <li>- Fitness corners and active lifestyle zones</li>
                      <li>- Kids’ play areas and family amenities</li>
                    </ul>
                  </p>
                </div>

                {/* Block 3 */}
                <div className="desc-blog" style={{ marginBottom: "32px" }}>
                  <h5
                    className="title-desc"
                    style={{ marginBottom: "12px" }}
                  >
                    3. Preteens and Teenagers – Food court and hangout area /
                    Escape rooms / Outdoor sports courts (football, basketball,
                    skate rink, parkour zone)
                  </h5>
                  <p className="body-2" style={{ margin: 0 }}>
                    Teens and young adults want a place to hang out where they
                    can feel independent and relaxed. At the same time, parents
                    want to know that they are safe at all times and making
                    healthy dietary and recreational choices.
                    <br />
                    <br />
                    Here, they will be offered a secured food court offering
                    plenty of meal options to meet different tastes, as well as
                    fun, structured, and physically and mentally stimulating
                    activities like escape rooms and outdoor sports.
                  </p>
                </div>

                {/* Block 4 */}
                <div className="desc-blog" style={{ marginBottom: "32px" }}>
                  <h5
                    className="title-desc"
                    style={{ marginBottom: "12px" }}
                  >
                    4. Families and extended groups – Restaurant / International
                    cuisine / Cafés
                  </h5>
                  <p className="body-2" style={{ margin: 0 }}>
                    Whether to have coffee with friends during a busy weekday, a
                    business lunch, or a family Sunday, adults and families will
                    have available to them a variety of F&amp;B choices catering
                    to different needs and occasions.
                    <br />
                    <br />
                    Additionally, the facility will have an eatertainment
                    concept, wherein adults as well as their kids will be able
                    to enjoy a meal while playing some games and having fun.
                    <br />
                    <br />
                    For adults, this will include a sports bar concept,
                    offering bowling, darts, baby foot, billiards, and such
                    games.
                  </p>
                </div>

                {/* Block 5 */}
                <div className="desc-blog" style={{ marginBottom: "32px" }}>
                  <h5
                    className="title-desc"
                    style={{ marginBottom: "12px" }}
                  >
                    5. Young adults and adults – Gym and Spa
                  </h5>
                  <p className="body-2" style={{ margin: 0 }}>
                    To attract the widest range of audience and open up the
                    facility to daily visitors, a gym and spa installment will
                    offer guests monthly memberships as well as varied body
                    treatments.
                  </p>
                </div>

                {/* Block 6 */}
                <div className="desc-blog" style={{ marginBottom: "32px" }}>
                  <h5
                    className="title-desc"
                    style={{ marginBottom: "12px" }}
                  >
                    6. Shoppers – Department store
                  </h5>
                  <p className="body-2" style={{ margin: 0 }}>
                    An open area department store will offer casual shoppers fun
                    shopping experiences close to home, or while they wait for
                    their kids to finish playing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.main-content */}
      </div>
    </>
  );
}
