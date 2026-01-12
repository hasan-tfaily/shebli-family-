import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getStrapiMediaUrl } from "@/lib/strapi/media";
import { StrapiBlog } from "@/lib/strapi/queries";

// Helper to parse date
function parseDate(dateStr?: string) {
  if (!dateStr) return { day: "", month: "", full: "" };
  const date = new Date(dateStr);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  const full = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return { day, month, full };
}

export default function Blogs({
  blogSection,
  blogsData,
}: {
  blogSection?: any;
  blogsData?: any[];
}) {
  // Split blogs: first 1 as large post, next 3 as small posts (matching original layout)
  const largePost = blogsData?.[0] ?? null;
  const smallPosts = blogsData?.slice(1, 4) ?? [];

  return (
    <section className="section-new h-5 tf-spacing-2 section-one-page" id="new">
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <div className="text-anime-wave-1">
                <a href="#" className="tag label text-btn-uppercase">
                  {blogSection?.miniTitle}
                </a>
              </div>
              <h3 className="text-anime-wave-1 mb-12">{blogSection?.title}</h3>
              <div className="sub-title body-2 text-anime-wave-1">
                {blogSection?.description}
              </div>
            </div>
            <div className="row rg-30">
              {largePost &&
                (() => {
                  const date = parseDate(
                    largePost.Date || largePost.publishedAt
                  );
                  const imgUrl = getStrapiMediaUrl(largePost.coverImage);
                  return (
                    <div className="col-lg-6" key={largePost.documentId}>
                      <div className="tf-post-grid style-absolute style-2 hover-img">
                        <Link
                          href={`/blog-details-1/${largePost.documentId}`}
                          className=" image d-block "
                        >
                          {imgUrl && (
                            <Image
                              src={imgUrl}
                              alt={largePost.title || "Blog post"}
                              className="lazyload"
                              width={largePost.coverImage?.width || 630}
                              height={largePost.coverImage?.height || 473}
                            />
                          )}
                        </Link>

                        <div className="tf-post-grid-content">
                          <div className="left">
                            <a href="#" className="date">
                              <span className="day">{date.day}</span>
                              <span>{date.month}</span>
                            </a>
                          </div>
                          <div className="content right">
                            <h4 className="title-post">
                              <Link
                                href={`/blog-details-1/${largePost.documentId}`}
                              >
                                {largePost.title}
                              </Link>
                            </h4>
                            <div className="position caption-1">
                              {largePost.category?.name || largePost.authorName}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              <div className="col-lg-6">
                {smallPosts.map((post, i) => {
                  const date = parseDate(post.Date || post.publishedAt);
                  const imgUrl = getStrapiMediaUrl(post.coverImage);
                  return (
                    <div
                      className="tf-post-list style-small small-2 hover-img"
                      key={post.documentId || i}
                    >
                      <div className="image">
                        <Link
                          href={`/blog-details-1/${post.documentId}`}
                          className="link"
                        />
                        {imgUrl && (
                          <Image
                            src={imgUrl}
                            alt={post.title || "Post image"}
                            className="lazyload"
                            width={160}
                            height={120}
                          />
                        )}
                      </div>
                      <div className="post-content">
                        <div className="top">
                          <span className="post-date caption-1">
                            {date.full}
                          </span>
                          <span className="label text-btn-uppercase color-primary">
                            {post.category?.name || "Blog"}
                          </span>
                        </div>
                        <h5>
                          <Link
                            href={`/blog-details-1/${post.documentId}`}
                            className="name-post"
                          >
                            {post.title}
                          </Link>
                        </h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
