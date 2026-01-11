"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { StrapiBlog } from "@/lib/strapi/queries";

const STRAPI_URL = "http://46.62.246.5:1337";

type Props = {
  blogs?: StrapiBlog[];
};

// Helper to format date
function formatDate(dateString?: string) {
  if (!dateString) return { day: "01", month: "Jan" };
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  return { day, month };
}

// Helper to get image URL
function getImageUrl(url?: string) {
  if (!url) return "/image/blog/blog1.jpg"; // fallback image
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

// Helper to truncate description
function truncateText(text?: string | null, maxLength: number = 150) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

export default function Blogs3({ blogs = [] }: Props) {
  const [displayedBlogs, setDisplayedBlogs] = useState<StrapiBlog[]>([]);
  const [isLoadedMore, setIsLoadedMore] = useState(false);

  useEffect(() => {
    if (blogs.length > 0) {
      if (isLoadedMore) {
        setDisplayedBlogs(blogs);
      } else {
        setDisplayedBlogs(blogs.slice(0, 6));
      }
    }
  }, [blogs, isLoadedMore]);

  // Use first blog for slider if available, otherwise show all in slider
  const sliderBlogs = blogs.length > 0 ? blogs : [];

  return (
    <div className="tf-container">
      <div className="row">
        <div className="col-12">
          <div className="blog-content blog-no-sidebar-content">
            {/* Slider Section */}
            {sliderBlogs.length > 0 && (
              <div className="tf-slideshow blog-no-sidebar-slide">
                <Swiper
                  className="swiper sw-single"
                  modules={[Navigation]}
                  navigation={{
                    prevEl: ".snbp1",
                    nextEl: ".snbn1",
                  }}
                >
                  <div className="tf-btn-arrow arrow-left sw-single-prev snbp1">
                    <i className="icon-arrow-left" />
                  </div>
                  {sliderBlogs.map((blog, i) => {
                    const date = formatDate(blog.Date);
                    const imageUrl = getImageUrl(blog.coverImage?.url);
                    return (
                      <SwiperSlide
                        className="swiper-slide"
                        key={blog.documentId || i}
                      >
                        <div className="tf-post-grid style-absolute">
                          <div
                            className="image"
                            style={{
                              position: "relative",
                              height: "505px",
                              width: "100%",
                            }}
                          >
                            <Link
                              href={`/blog-details-1/${blog.documentId}`}
                              className="link"
                            />
                            <Image
                              src={imageUrl}
                              alt={blog.title || "Blog post"}
                              className="lazyload"
                              fill
                              style={{ objectFit: "cover" }}
                            />
                            <span className="date">
                              <span className="day">{date.day}</span>
                              <span>{date.month}</span>
                            </span>
                          </div>
                          <div className="tf-post-grid-content">
                            <div className="position">
                              {blog.category?.name || "Uncategorized"}
                            </div>
                            <h4 className="title-post">
                              <Link href={`/blog-details-1/${blog.documentId}`}>
                                {blog.title}
                              </Link>
                            </h4>
                            <div className="sub-title body-2">
                              {truncateText(
                                blog.description || blog.paragraphs,
                                200
                              )}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                  <div className="tf-btn-arrow arrow-right sw-single-next snbn1">
                    <i className="icon-arrow-right1" />
                  </div>
                </Swiper>
              </div>
            )}

            {/* Grid Section */}
            <div className="layout-grid-3 loadmore-item">
              {displayedBlogs.map((blog, index) => {
                const date = formatDate(blog.Date);
                const imageUrl = getImageUrl(blog.coverImage?.url);
                const delay = `0.${index + 1}s`;
                return (
                  <div
                    className="tf-post-grid style-small fl-item d-block"
                    key={blog.documentId || index}
                  >
                    <div
                      className="image"
                      style={{
                        position: "relative",
                        height: "505px",
                        width: "100%",
                      }}
                    >
                      <Link
                        href={`/blog-details-2/${blog.documentId}`}
                        className="link"
                      />
                      <Image
                        src={imageUrl}
                        alt={blog.title || "Blog post"}
                        fill
                        className="lazyload"
                        style={{ objectFit: "cover" }}
                      />
                      <span className="date">
                        <span className="day">{date.day}</span>
                        <span>{date.month}</span>
                      </span>
                    </div>
                    <div className="tf-grid-post-content">
                      <div
                        className="position caption-1 wow fadeInUp"
                        data-wow-delay={delay}
                      >
                        {blog.category?.name || "Uncategorized"}
                      </div>
                      <h5
                        className="title-post wow fadeInUp"
                        data-wow-delay={delay}
                      >
                        <Link href={`/blog-details-2/${blog.documentId}`}>
                          {blog.title}
                        </Link>
                      </h5>
                      <div
                        className="sub-title wow fadeInUp"
                        data-wow-delay={delay}
                      >
                        {truncateText(blog.description || blog.paragraphs, 150)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More Button */}
            {blogs.length > 6 && !isLoadedMore && (
              <div className="btn-load-more text-center view-more-button wow fadeInUp">
                <button
                  onClick={() => setIsLoadedMore(true)}
                  className="tf-btn style-1 bg-on-suface-container btn-loadmore"
                >
                  <span>Load More</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
