"use client";
import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
type HistoryItem = {
  title?: string;
  Body?: string;
};

type HistorySection = {
  miniTitle?: string;
  title?: string;
  description?: string;
  featuredItems?: HistoryItem[];
};

export default function History({ historySection }: { historySection?: HistorySection }) {
  const [hoveredItems, setHoveredItems] = useState<number[]>([]);

  // No fallbacks: if CMS data isn't there, render nothing.
  if (!historySection) return null;

  const headingTag = historySection.miniTitle;
  const headingTitle = historySection.title;
  const headingDesc = historySection.description;
  const items: HistoryItem[] = historySection.featuredItems ?? [];

  return (
    <section className="section-history section-about bg-on-suface-container tf-spacing-2 hover-active-step">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center style-color-white mb-60">
              <div className="text-anime-wave-1">
                {headingTag ? (
                  <a href="#" className="tag label text-btn-uppercase color-white">
                    {headingTag}
                  </a>
                ) : null}
              </div>
              {headingTitle ? (
                <h3 className="title-section mb-12 text-anime-wave-1">{headingTitle}</h3>
              ) : null}
              {headingDesc ? (
                <div className="sub-title body-2 text-anime-wave-1">{headingDesc}</div>
              ) : null}
            </div>
            <div className="wg-time-line">
              <div className="sw-layout-1 swiper-time-line">
                <div className="tf-btn-arrow style-3 arrow-left nav-prev-layout-1 snbp8">
                  <i className="icon-arrow-left" />
                </div>
                <Swiper
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    575: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                  }}
                  dir="ltr"
                  className="swiper sw-layout1"
                  modules={[Navigation]}
                  navigation={{
                    prevEl: ".snbp8",
                    nextEl: ".snbn8",
                  }}
                >
                  {items.map((item: HistoryItem, index: number) => (
                    <SwiperSlide className="swiper-slide" key={index}>
                      <div
                        className={`time-line-item step-hover ${
                          hoveredItems.includes(index) ? "active" : ""
                        } `}
                        onMouseOver={() =>
                          setHoveredItems((pre) => [...pre, index])
                        }
                      >
                        <div className="time-line-content">
                          <div className="heading">
                            {/* <div className="label">{item.year}</div> */}
                            {item.title ? (
                              <h5 className="title-content">{item.title}</h5>
                            ) : null}
                          </div>
                          {item.Body ? (
                            <div className="desc">{item.Body}</div>
                          ) : null}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="tf-btn-arrow style-3 arrow-right nav-next-layout-1 snbn8">
                  <i className="icon-arrow-right1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
