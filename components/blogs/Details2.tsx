import Image from "next/image";
import React from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import { StrapiBlog } from "@/lib/strapi/queries";

interface Details2Props {
  blog: StrapiBlog;
}

// Helper to get image URL via proxy
function getImageUrl(url?: string) {
  if (!url) return "/image/blog/image-blog-4.jpg";
  if (url.startsWith("/api/images")) return url;
  if (url.startsWith("http://46.62.246.5:1337")) {
    return `/api/images${url.replace("http://46.62.246.5:1337", "")}`;
  }
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `/api/images${url}`;
}

// Helper to format date
function formatDateLong(dateString?: string) {
  if (!dateString) return "Unknown date";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Parse paragraphs from Strapi content
function parseParagraphs(content?: string) {
  if (!content) return [];

  const sections = content
    .split(/\n\n+|(?=Paragraph \d+:|(?=\d+\.\s))/g)
    .filter(Boolean);

  return sections
    .map((section) => {
      const numberedMatch = section.match(/^(\d+)\.\s+(.+?)(?:\n|$)([\s\S]*)/);
      if (numberedMatch) {
        return {
          type: "section" as const,
          title: `${numberedMatch[1]}. ${numberedMatch[2]}`,
          content: numberedMatch[3]?.trim() || "",
        };
      }

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

      const paragraphMatch = section.match(/^Paragraph \d+:\s*([\s\S]*)/);
      if (paragraphMatch) {
        return {
          type: "paragraph" as const,
          content: paragraphMatch[1]?.trim() || "",
        };
      }

      return {
        type: "paragraph" as const,
        content: section.trim(),
      };
    })
    .filter((p) => p.content);
}

export default function Details2({ blog }: Details2Props) {
  const coverImageUrl = getImageUrl(blog?.coverImage?.url);
  const parsedContent = parseParagraphs(blog?.paragraphs);
  const additionalImages = blog?.images || [];

  const titleWords = blog?.title?.split(" ") || [];
  const titleFirstPart = titleWords.slice(0, 5).join(" ");
  const titleSecondPart = titleWords.slice(5).join(" ");

  return (
    <>
      <div className="image img-top">
        <Image
          src={coverImageUrl}
          alt={blog?.title || "Blog cover"}
          className="lazyload"
          width={blog?.coverImage?.width || 1920}
          height={blog?.coverImage?.height || 804}
          style={{ objectFit: "cover", width: "100%", height: "auto" }}
        />
      </div>
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="blog-content blog-details-2-content blog-details-content">
              <div className="blog-details-top">
                {blog?.category && (
                  <a href="#" className="tag label text-btn-uppercase">
                    {blog.category.name}
                  </a>
                )}
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
                  {titleFirstPart}
                  {titleSecondPart && (
                    <>
                      <br />
                      {titleSecondPart}
                    </>
                  )}
                </h2>
                <div className="meta">
                  <a href="#" className="meta-content">
                    <div className="icon">
                      <i className="icon-calendarBlank" />
                    </div>
                    <div className="text body-2">{formatDateLong(blog?.Date)}</div>
                  </a>
                  <a href="#" className="meta-content">
                    <div className="icon">
                      <i className="icon-user" />
                    </div>
                    <div className="text body-2">
                      {blog?.authorName || "Kidz Holding"}
                    </div>
                  </a>
                </div>
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
                <div className="cols-img">
                  {additionalImages.slice(0, 2).map((img: any, idx) => (
                    <div className="image-blog" key={idx}>
                      <Image
                        src={getImageUrl(img.url)}
                        alt={`Blog image ${idx + 1}`}
                        className="lazyload"
                        width={img.width || 444}
                        height={img.height || 334}
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
                  <div className="tabs-list">
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

              <Comments />
              <CommentForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
