import Link from "next/link";
import Image from "next/image";
import React from "react";
import { postListItems } from "@/data/blogs";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import { StrapiBlog } from "@/lib/strapi/queries";

const STRAPI_URL = "http://46.62.246.5:1337";

type Props = {
  blog?: StrapiBlog;
};

// Helper to get image URL
function getImageUrl(url?: string) {
  if (!url) return "/image/blog/image-blog-1.jpg";
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

// Parse paragraphs from Strapi content
function parseParagraphs(content?: string) {
  if (!content) return [];
  
  // Split by double newlines or "Paragraph X:" pattern
  const sections = content.split(/\n\n+|(?=Paragraph \d+:|(?=\d+\.\s))/g).filter(Boolean);
  
  return sections.map((section) => {
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
    const conclusionMatch = section.match(/^(Conclusion|Summary)(?:\n|:?\s*)([\s\S]*)/i);
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
  }).filter((p) => p.content);
}

export default function Details1({ blog }: Props) {
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
            <div className="image-blog">
              <Image
                src={coverImageUrl}
                alt={blog?.title || "Blog image"}
                className="lazyload"
                width={blog?.coverImage?.width || 910}
                height={blog?.coverImage?.height || 512}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
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
            <div className="pre-next-blog">
              <div className="pre pre-next-blog-item">
                <a href="#" className="pre-next-btn">
                  PREVIOUS
                </a>
                <h6>
                  <a href="#" className="name-blog">
                    Previous Article
                  </a>
                </h6>
              </div>
              <div className="line" />
              <div className="next pre-next-blog-item">
                <a href="#" className="pre-next-btn">
                  NEXT
                </a>
                <h6>
                  <a href="#" className="name-blog">
                    Next Article
                  </a>
                </h6>
              </div>
            </div>
            
            <Comments />
            <CommentForm />
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="col-xl-3">
          <div className="tf-sidebar">
            <div className="sidebar-item sidebar-search">
              <fieldset>
                <input type="text" placeholder="Search products..." />
                <a href="#" className="tf-btn-search">
                  <i className="icon-MagnifyingGlass" />
                </a>
              </fieldset>
            </div>
            <div className="sidebar-item sidebar-info">
              <div className="info-top">
                <div className="image">
                  <a href="#" className="link" />
                  <Image
                    src="/image/avatar/avt-1.jpg"
                    alt=""
                    className="lazyload"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="top-content">
                  <h5>
                    <a href="#" className="name">
                      {blog?.authorName || "Kidz Holding Editorial Team"}
                    </a>
                  </h5>
                  <div className="number-follower">200 Follower</div>
                </div>
              </div>
              <div className="introduce">
                Written by {blog?.authorName || "the Kidz Holding Editorial Team"} — passionate about creating spaces where children imagine, play, and become.
              </div>
              <div className="info-social">
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
                  <li className="item">
                    <a href="#">
                      <div className="icon">
                        <i className="icon-skype" />
                      </div>
                    </a>
                  </li>
                  <li className="item">
                    <a href="#">
                      <div className="icon">
                        <i className="icon-telegram" />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar-item sidebar-content sidebar-recent-posts">
              <h6 className="title-content">Recent posts</h6>
              {postListItems.map((post, i) => (
                <div className="tf-post-list style-small hover-img" key={i}>
                  <div className="image">
                    <Link
                      href={`/blog-details-1/${post.id}`}
                      className="link"
                    />
                    <Image
                      src={post.imgSrc}
                      alt={post.title}
                      className="lazyload"
                      width={post.imgWidth}
                      height={post.imgHeight}
                    />
                  </div>
                  <div className="post-content">
                    <div className="post-date caption-1">{post.date}</div>
                    <a href="#" className="name-post">
                      {post.title}
                    </a>
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
