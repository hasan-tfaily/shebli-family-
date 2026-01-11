import Link from "next/link";
import Details1 from "@/components/blogs/Details1";
import RelatedBlogs from "@/components/blogs/RelatedBlogs";
import React from "react";
import {
  getBlogByDocumentId,
  getAllBlogs,
  StrapiBlog,
} from "@/lib/strapi/queries";

const STRAPI_URL = "http://46.62.246.5:1337";

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

// Helper to get image URL
function getImageUrl(url?: string) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlogByDocumentId({ documentId: id });

  return {
    title: blog?.title
      ? `${blog.title} || Kidz Holding`
      : "Blog Details || Kidz Holding - Franchise & Corporate Website",
    description:
      blog?.description || "Kidz Holding - Franchise & Corporate Website",
    openGraph: {
      title: blog?.title
        ? `${blog.title} || Kidz Holding`
        : "Blog Details || Kidz Holding - Franchise & Corporate Website",
      description:
        blog?.description || "Kidz Holding - Franchise & Corporate Website",
      type: "article",
      url: `/blog-details-1/${id}`,
    },
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [blog, allBlogs] = await Promise.all([
    getBlogByDocumentId({ documentId: id }),
    getAllBlogs(),
  ]);

  // Get recent blogs (limit 3, excluding current blog)
  const recentBlogs = allBlogs.filter((b) => b.documentId !== id).slice(0, 3);

  if (!blog) {
    return (
      <div className="tf-container tf-spacing-2">
        <h2>Blog not found</h2>
        <Link href="/blog">Back to blogs</Link>
      </div>
    );
  }

  const titleWords = blog.title?.split(" ") || [];
  const titleFirstPart = titleWords.slice(0, 5).join(" ");
  const titleSecondPart = titleWords.slice(5).join(" ");

  const coverImageUrl = getImageUrl(blog.coverImage?.url);

  return (
    <>
      <div
        className="page-title style-2"
        style={{
          backgroundImage: coverImageUrl ? `url(${coverImageUrl})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="page-title-content">
                <div className="breadkcum">
                  <Link href={`/`} className="caption-1 home">
                    Homepage
                  </Link>{" "}
                  <span className="arrow-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_9360_28061)">
                        <path
                          d="M3.125 10H16.875"
                          stroke="#A2A3AB"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.25 4.375L16.875 10L11.25 15.625"
                          stroke="#A2A3AB"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect width={20} height={20} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>{" "}
                  <Link href="/blog" className="caption-1 home">
                    Blog
                  </Link>{" "}
                  <span className="arrow-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_9360_28061)">
                        <path
                          d="M3.125 10H16.875"
                          stroke="#A2A3AB"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.25 4.375L16.875 10L11.25 15.625"
                          stroke="#A2A3AB"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect width={20} height={20} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>{" "}
                  <span className="caption-1 page-breadkcum">
                    {titleFirstPart || "Blog Details"}...
                  </span>
                </div>
                <div className="content">
                  <h2 className="title-page-title">
                    {titleFirstPart}
                    {titleSecondPart && (
                      <>
                        <br />
                        {titleSecondPart}
                      </>
                    )}
                  </h2>
                  <div className="meta">
                    <div className="meta-content">
                      <div className="icon">
                        <i className="icon-calendarBlank" />
                      </div>
                      <div className="text body-2">
                        {formatDateLong(blog.Date)}
                      </div>
                    </div>
                    <div className="meta-content">
                      <div className="icon">
                        <i className="icon-user" />
                      </div>
                      <div className="text body-2">
                        {blog.authorName || "Kidz Holding"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content tf-spacing-2">
        <Details1 blog={blog} recentBlogs={recentBlogs} />
      </div>
    </>
  );
}
