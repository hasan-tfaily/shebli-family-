import Details2 from "@/components/blogs/Details2";
import RelatedBlogs from "@/components/blogs/RelatedBlogs";
import React from "react";
import Link from "next/link";
import { getBlogByDocumentId } from "@/lib/strapi/queries";

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
      blog?.description ||
      "Kidz Holding - Franchise & Corporate Website",
    openGraph: {
      title: blog?.title
        ? `${blog.title} || Kidz Holding`
        : "Blog Details || Kidz Holding - Franchise & Corporate Website",
      description:
        blog?.description ||
        "Kidz Holding - Franchise & Corporate Website",
      type: "article",
      url: `/blog-details-2/${id}`,
    },
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlogByDocumentId({ documentId: id });

  if (!blog) {
    return (
      <div className="tf-container tf-spacing-2">
        <h2>Blog not found</h2>
        <Link href="/blog">Back to blogs</Link>
      </div>
    );
  }

  return (
    <>
      <div className="main-content tf-spacing-3">
        <Details2 blog={blog} />
        <RelatedBlogs />
      </div>
    </>
  );
}
