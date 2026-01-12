import Link from "next/link";
import Image from "next/image";
import React from "react";
import { StrapiBlog } from "@/lib/strapi/queries";
import { getProxiedImageUrl } from "@/lib/strapi/media";

type Props = {
  blog?: StrapiBlog;
  recentBlogs?: StrapiBlog[];
};

// Helper to format date
function formatDate(dateString?: string) {
  if (!dateString) return "Jan 01, 2025";
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

// Helper to get image URL via proxy
function getImageUrl(url?: string) {
  return getProxiedImageUrl(url, "/image/blog/image-blog-1.jpg");
}

// Parse paragraphs from Strapi content
function parseParagraphs(content?: string) {
  if (!content) return [];

  // Split by double newlines or "Paragraph X:" pattern
  const sections = content
    .split(/\n\n+|(?=Paragraph \d+:|(?=\d+\.\s))/g)
    .filter(Boolean);

  return sections
    .map((section) => {
      // Check if it starts with a numbered heading like "1. Title"
      const numberedMatch = section.match(/^(\d+)\.\s+(.+?)(?:\n|$)([\s\S]*)/);
      if (numberedMatch) {
        return {
          type: "section" as const,
          title: `${numberedMatch[1]}. ${numberedMatch[2]}`,
          content: numberedMatch[3]?.trim() || "",
        };
      }

      // Check if it's "Conclusion" or similar
      const conclusionMatch = section.match(
        /^(Conclusion|Summary)(?:\n|:?\s*)([\s\S]*)/i
      );
      if (conclusionMatch) {
        return {
          type: "section" as const,
          title: conclusionMatch[1],
          content: conclusionMatch[2]?.trim() || "",
        };
      }

      // Check if it starts with "Paragraph X:"
      const paragraphMatch = section.match(/^Paragraph \d+:\s*([\s\S]*)/);
      if (paragraphMatch) {
        return {
          type: "paragraph" as const,
          content: paragraphMatch[1]?.trim() || "",
        };
      }

      // Regular paragraph
      return {
        type: "paragraph" as const,
        content: section.trim(),
      };
    })
    .filter((p) => p.content);
}

export default function Details1({ blog, recentBlogs = [] }: Props) {
  const coverImageUrl = getImageUrl(blog?.coverImage?.url);
  const parsedContent = parseParagraphs(blog?.paragraphs);

  // Get additional images
  const additionalImages = blog?.images || [];

  return (
    <div className="tf-container tf-spacing-3">
      <div className="row rg-60">
        <div className="col-xl-9">
          <div className="blog-content blog-details-content mr-50">
            {/* Cover Image */}
            <div
              className="image-blog"
              style={{
                position: "relative",
                height: "550px",
                width: "100%",
              }}
            >
              <Image
                src={coverImageUrl}
                alt={blog?.title || "Blog image"}
                className="lazyload"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Description */}
            {blog?.description && (
              <div className="desc-blog">
                {blog.description.split("\n\n").map((para, idx) => (
                  <p className="body-2" key={idx}>
                    {para}
                  </p>
                ))}
              </div>
            )}

            {/* Additional Images */}
            {additionalImages.length > 0 && (
              <div
                className="cols-img"
                style={{
                  display: "flex",
                  gap: "20px",
                  width: "100%",
                }}
              >
                {additionalImages.slice(0, 2).map((img: any, idx) => (
                  <div
                    className="image-blog"
                    key={idx}
                    style={{
                      position: "relative",
                      height: "334px",
                      flex: "1",
                      minWidth: 0,
                    }}
                  >
                    <Image
                      src={getImageUrl(img.url)}
                      alt={`Blog image ${idx + 1}`}
                      className="lazyload"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Parsed Content Sections */}
            <div className="list-desc">
              {parsedContent.map((item, idx) => (
                <div className="desc-blog" key={idx}>
                  {item.type === "section" && item.title && (
                    <h5 className="title-desc">{item.title}</h5>
                  )}
                  <p className="body-2">{item.content}</p>
                </div>
              ))}
            </div>

            {/* Tags and Share */}
            <div className="tab-list">
              <div className="left tab-item">
                <div className="text">Tag:</div>
                <div className="tabs-list g-12">
                  {blog?.category && (
                    <a href="#" className="tabs-item caption-1">
                      {blog.category.name}
                    </a>
                  )}
                </div>
              </div>
              <div className="right tab-item">
                <div className="text">Share this post:</div>
                <ul className="tf-social radius-50 style-border g-12 color-on-suface-container">
                  <li className="item">
                    <a href="#">
                      <div className="icon">
                        <i className="icon-messenger" />
                      </div>
                    </a>
                  </li>
                  <li className="item">
                    <a href="#">
                      <div className="icon">
                        <i className="icon-x" />
                      </div>
                    </a>
                  </li>
                  <li className="item">
                    <a href="#">
                      <div className="icon">
                        <i className="icon-ig1" />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Previous / Next Navigation */}
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-xl-3">
          <div className="tf-sidebar">
            <div className="sidebar-item sidebar-content sidebar-recent-posts">
              <h6 className="title-content">Recent posts</h6>
              {recentBlogs.slice(0, 3).map((post, i) => (
                <div
                  className="tf-post-list style-small hover-img"
                  key={post.documentId || i}
                >
                  <div
                    className="image"
                    style={{
                      position: "relative",
                      width: "80px",
                      height: "80px",
                      flexShrink: 0,
                    }}
                  >
                    <Link
                      href={`/blog-details-1/${post.documentId}`}
                      className="link"
                    />
                    <Image
                      src={getImageUrl(post.coverImage?.url)}
                      alt={post.title || "Blog post"}
                      className="lazyload"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="post-content">
                    <div className="post-date caption-1">
                      {formatDate(post.Date)}
                    </div>
                    <Link
                      href={`/blog-details-1/${post.documentId}`}
                      className="name-post"
                    >
                      {post.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
