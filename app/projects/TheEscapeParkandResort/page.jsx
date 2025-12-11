"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ParkandResortServices from "@/components/common/ParkandResortServices";

export default function TheEscapeParkandResort() {
  return (
    <>
      <div className="image img-top">
        <Image
          src="/image/page-title/Hero-Banner3.jpg"
          alt="The Escape Park & Resort Hero"
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
                  The Escape Park &amp; Resort
                </h2>
              </div>

              {/* MAIN IMAGE */}
              <div className="image-blog">
                <Image
                  src="/image/resortAndPark/resort pic 1.jpg"
                  alt="The Escape Park & Resort"
                  className="lazyload"
                  width={910}
                  height={512}
                />
              </div>

              <div className="desc-blog">
                <h5 className="title-desc">
                  A natural sanctuary designed for families to reconnect,
                  recharge, and rediscover,
                  <br />
                  the joy of outdoor play.
                </h5>
                <p className="body-2">
                  The Escape Park &amp; Resort is a green refuge that transports
                  families into a world of lush
                  
                  landscapes, flowing water, and immersive nature experiences.
                  Built as a multi-sensory
                  
                  destination, it invites children, teens, and adults to step
                  away from the speed and noise
                  
                  of modern life and enjoy meaningful moments together in the
                  outdoors.
                </p>
                <p className="body-2">
                  Grounded in the principles of nature-based learning and
                  wellness, the park offers an
                  environment where children can explore, play, and develop
                  essential motor and
                  sensory skills. Studies show that outdoor environments rich in
                  natural elements
                  enhance creativity, boost physical activity, and contribute to
                  overall emotional and
                  mental wellbeing — all of which form the cornerstone of this
                  concept.
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
                  className="karnavali-slider escapepark-slider"
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
                        src="/image/resortAndPark/resort pic 2.jpg"
                        alt="Escape Park Activity 1 - A"
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
                        src="/image/resortAndPark/resort pic 3.jpg"
                        alt="Escape Park Activity 2 - A"
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
                        src="/image/resortAndPark/park 3.jpg"
                        alt="Escape Park Activity 1 - B"
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
                        src="/image/resortAndPark/park 4.jpg"
                        alt="Escape Park Activity 2 - B"
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
                        src="/image/resortAndPark/park 5.jpg"
                        alt="Escape Park Activity 1 - C"
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
                        src="/image/resortAndPark/park 6.jpg"
                        alt="Escape Park Activity 2 - C"
                        className="lazyload"
                        width={444}
                        height={334}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="list-desc">
                <div className="desc-blog">
                  <h5 className="title-desc">The Facility</h5>
                  <p className="body-2">
                    Designed as a fully integrated nature retreat, The Escape
                    Park &amp; Resort features:
                    <br />
                    - A scenic pond, surrounded by trees, flowers, and walking
                    paths
                    <br />
                    - Gazebos and shaded relaxation areas
                    <br />
                    - A man-made river ideal for family fishing activities
                    <br />
                    - Indoor and outdoor dining areas
                    <br />
                    - A dedicated birthday and events venue
                    <br />
                    - Private rental zones for barbecues, picnics, and camping
                    <br />
                    - Animal enclosures for hands-on exploration and learning
                    <br />
                    - A resort area with bungalows and a swimming pool
                    <br />
                    <br />
                    Families can enjoy a serene lunch by the pond, watch birds
                    gathered around the
                   
                    enclosures, or let children explore the outdoor playground
                    before attempting the
                    
                    elevated obstacle course in the trees. Fathers and sons can
                    fish together, while
                    
                    younger guests enjoy pony rides or nature discovery trails.
                    <br />
                    <br />
                    Perched above the pond is a luxurious signature restaurant,
                    offering refined cuisine
                    
                    with sweeping sunset views in both indoor and outdoor
                    seating areas.
                    <br />
                    <br />
                    Next to the restaurant lies the botanical zone, which
                    includes greenhouses, orchards,
                    
                    and small open-air agricultural plots where families can
                    learn about planting,
                   
                    harvesting, and eco-friendly practices.
                    <br />
                    <br />
                    Nearby, an oval amphitheater acts as a natural stage for
                    performances, shows, and
                    
                    children’s birthday celebrations.
                    <br />
                    <br />
                    Further down the hillside sits the adventure zone, packed
                    with exhilarating outdoor
                    
                    sports and activities for all ages. At the lowest level,
                    families will find the camping and
                    barbecue equipment depot, supporting private rentals for
                    overnight or daytime nature
                    outings.
                  </p>
                </div>
              </div>
              {/* end content */}
            </div>
          </div>
        </div>
      </div>
      <ParkandResortServices />

    </>
  );
}
